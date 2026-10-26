import nodemailer from "nodemailer";

export const runtime = "nodejs";
const MAX_BODY_BYTES = 16_384;
// shortcut: quota is per server instance; use a shared store or edge rate limit for multi-instance traffic.
let windowStart = 0;
let attempts = 0;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request) {
  if (
    request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !==
    "application/json"
  ) {
    return Response.json(
      { error: "Please send a JSON message." },
      { status: 415 },
    );
  }
  let body;
  try {
    const reader = request.body?.getReader();
    if (!reader)
      return Response.json(
        { error: "A message is required." },
        { status: 400 },
      );
    const decoder = new TextDecoder();
    let bytes = 0;
    let text = "";
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_BODY_BYTES) {
        await reader.cancel();
        return Response.json(
          { error: "Your message is too large." },
          { status: 413 },
        );
      }
      text += decoder.decode(value, { stream: true });
    }
    body = JSON.parse(text + decoder.decode());
  } catch {
    return Response.json({ error: "Invalid message format." }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ error: "Invalid message format." }, { status: 400 });
  }
  if (body.website) return Response.json({ ok: true });
  const fields = ["name", "email", "message"];
  if (
    fields.some((key) => typeof body[key] !== "string" || !body[key].trim())
  ) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  const name = body.name.trim();
  const email = body.email.trim();
  const message = body.message.trim();
  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return Response.json(
      {
        error:
          "Use a name under 101 characters, email under 255, and message under 5,001.",
      },
      { status: 400 },
    );
  }
  if (
    /[\r\n\x00-\x1f\x7f]/.test(name) ||
    !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)
  ) {
    return Response.json(
      { error: "Please enter a valid name and email address." },
      { status: 400 },
    );
  }
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL,
  } = process.env;
  const port = Number(SMTP_PORT);
  // Gmail app passwords are often pasted with display spaces; other providers may use literal spaces.
  const password =
    SMTP_HOST === "smtp.gmail.com" ? SMTP_PASS?.replace(/\s+/g, "") : SMTP_PASS;
  if (
    !SMTP_HOST ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    !SMTP_USER ||
    !password ||
    !CONTACT_TO_EMAIL
  ) {
    return Response.json(
      {
        error:
          "The contact form is temporarily unavailable. Please email me directly.",
      },
      { status: 503 },
    );
  }
  const now = Date.now();
  if (now - windowStart >= 60_000) {
    windowStart = now;
    attempts = 0;
  }
  if (attempts >= 5) {
    return Response.json(
      {
        error:
          "The contact form is busy. Please wait a minute or email me directly.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(
            Math.max(1, Math.ceil((60_000 - (now - windowStart)) / 1000)),
          ),
        },
      },
    );
  }
  attempts += 1;
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: password },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });
    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL || SMTP_USER,
      to: CONTACT_TO_EMAIL,
      subject: `Portfolio Contact: ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<h2>New Portfolio Contact Message</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      {
        error:
          "Your message could not be sent. Please try again later or email me directly.",
      },
      { status: 502 },
    );
  }
}
