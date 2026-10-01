import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
        }

        const {
            SMTP_HOST,
            SMTP_PORT,
            SMTP_USER,
            SMTP_PASS,
            CONTACT_TO_EMAIL,
            CONTACT_FROM_EMAIL,
        } = process.env;

        const smtpPort = Number(SMTP_PORT);

        if (
            !SMTP_HOST ||
            !SMTP_PORT ||
            !Number.isInteger(smtpPort) ||
            !SMTP_USER ||
            !SMTP_PASS ||
            !CONTACT_TO_EMAIL
        ) {
            return NextResponse.json(
                { error: "Email service is not configured on the server." },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        const fromAddress = CONTACT_FROM_EMAIL || SMTP_USER;

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

        await transporter.sendMail({
            from: fromAddress,
            to: CONTACT_TO_EMAIL,
            subject: `Portfolio Contact: ${name}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Contact form email failed:", {
            code: error?.code,
            message: error?.message,
        });
        return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }
}
