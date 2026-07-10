import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Where contact submissions are delivered. Until a domain is verified in
// Resend, sends use the shared onboarding sender and can only reach the
// Resend account owner's address — which is exactly CONTACT_TO here.
const TO = process.env.CONTACT_TO_EMAIL ?? "khalifa.villaflor1@gmail.com";
const FROM = process.env.RESEND_FROM ?? "Klovered <onboarding@resend.dev>";

function clean(v: unknown, max = 5000): string {
  return String(v ?? "").trim().slice(0, max);
}

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "Email is not configured (RESEND_API_KEY missing)." },
      { status: 503 }
    );
  }

  const body = await req.json().catch(() => ({}));
  const name = clean(body.name, 200);
  const email = clean(body.email, 320);
  const company = clean(body.company, 200);
  const message = clean(body.message);

  if (!name || !email.includes("@") || !message) {
    return NextResponse.json({ error: "Name, a valid email, and a message are required." }, { status: 400 });
  }

  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Klovered demo request — ${name}${company ? ` (${company})` : ""}`,
      html:
        `<h2>New contact request</h2>` +
        `<p><b>Name:</b> ${esc(name)}</p>` +
        `<p><b>Email:</b> ${esc(email)}</p>` +
        (company ? `<p><b>Company:</b> ${esc(company)}</p>` : "") +
        `<p><b>Message:</b></p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[contact] resend failed", res.status, detail.slice(0, 300));
    return NextResponse.json({ error: "Could not send your message. Please email us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
