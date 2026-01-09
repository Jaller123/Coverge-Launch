import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill out all fields." },
        { status: 400 }
      );
    }

    const from = process.env.RESEND_FROM;
    if (!from) {
      return NextResponse.json(
        { error: "RESEND_FROM is not configured." },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from,
      to: ["coverge.se@outlook.com"],
      replyTo: email,
      subject: `Coverge contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send message." },
      { status: 500 }
    );
  }
}
