import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const resendApiKey = process.env.RESEND_API_KEY;
const resendFrom = process.env.RESEND_FROM;

export async function POST(request: Request) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json(
        { error: "Supabase is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const email = String(body?.email || "").trim().toLowerCase();

    if (!email) {
      return NextResponse.json(
        { error: "Please provide an email address." },
        { status: 400 }
      );
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    });

    const { error: insertError } = await supabase
      .from("waitlist_signups")
      .insert({ email });

    if (insertError && insertError.code !== "23505") {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    if (resendApiKey && resendFrom) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: resendFrom,
        to: [email],
        subject: "You're on the Coverge waitlist",
        text: "Thanks for joining the Coverge waitlist. We'll be in touch soon.",
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to join the waitlist." },
      { status: 500 }
    );
  }
}
