import { test } from "node:test";
import assert from "node:assert/strict";
import nodemailer from "nodemailer";
import { POST } from "../src/app/api/contact/route.js";

const valid = {
  name: "Shoaib",
  email: "person@example.com",
  message: "Hello from the portfolio.",
};
const request = (data, contentType = "application/json") =>
  new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": contentType },
    body: typeof data === "string" ? data : JSON.stringify(data),
  });

test("contact validation, delivery, escaping, and burst protection", async (t) => {
  const keys = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "CONTACT_TO_EMAIL",
    "CONTACT_FROM_EMAIL",
  ];
  const saved = Object.fromEntries(keys.map((key) => [key, process.env[key]]));
  t.after(() => {
    for (const key of keys) {
      if (saved[key] === undefined) delete process.env[key];
      else process.env[key] = saved[key];
    }
  });
  let delivered = [];
  let config;
  let fail = false;
  t.mock.method(nodemailer, "createTransport", (options) => {
    config = options;
    return {
      sendMail: async (mail) => {
        if (fail) throw new Error("Private SMTP error");
        delivered.push(mail);
      },
    };
  });
  let now = 100_000;
  t.mock.method(Date, "now", () => now);
  for (const body of [
    "{",
    "null",
    "[]",
    {},
    { ...valid, name: 12 },
    { ...valid, message: "   " },
    { ...valid, email: "invalid" },
    { ...valid, name: "Name\r\nBCC: x" },
    { ...valid, message: "a".repeat(5001) },
  ]) {
    assert.equal((await POST(request(body))).status, 400);
  }
  assert.equal((await POST(request(valid, "text/plain"))).status, 415);
  assert.equal(
    (await POST(request({ ...valid, message: "a".repeat(17000) }))).status,
    413,
  );
  assert.equal(
    (await POST(request({ ...valid, website: "spam.example" }))).status,
    200,
  );
  delete process.env.SMTP_PASS;
  assert.equal((await POST(request(valid))).status, 503);
  assert.equal(delivered.length, 0);
  Object.assign(process.env, {
    SMTP_HOST: "smtp.gmail.com",
    SMTP_PORT: "587",
    SMTP_USER: "sender@example.com",
    SMTP_PASS: "abcd efgh",
    CONTACT_TO_EMAIL: "owner@example.com",
  });
  delete process.env.CONTACT_FROM_EMAIL;
  const response = await POST(
    request({
      ...valid,
      name: " <b>Name</b> ",
      message: "<script>alert(1)</script>\nNext line",
    }),
  );
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(config.auth.pass, "abcdefgh");
  assert.equal(delivered[0].replyTo, valid.email);
  assert.equal(delivered[0].to, "owner@example.com");
  assert.ok(delivered[0].html.includes("&lt;script&gt;"));
  assert.ok(delivered[0].html.includes("<br />Next line"));
  assert.ok(!delivered[0].html.includes("<script>"));
  for (let i = 0; i < 4; i++)
    assert.equal((await POST(request(valid))).status, 200);
  const limited = await POST(request(valid));
  assert.equal(limited.status, 429);
  assert.equal(limited.headers.get("Retry-After"), "60");
  assert.equal(delivered.length, 5);
  now += 60_001;
  process.env.SMTP_HOST = "smtp.example.com";
  assert.equal((await POST(request(valid))).status, 200);
  assert.equal(config.auth.pass, "abcd efgh");
  fail = true;
  const failed = await POST(request(valid));
  assert.equal(failed.status, 502);
  assert.ok(!(await failed.text()).includes("Private SMTP error"));
});
