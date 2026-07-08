"use client";

import { useState } from "react";

type State = "idle" | "sending" | "sent" | "error";

// Client-side contact form. Posts to /api/contact when NEXT_PUBLIC_CONTACT_API
// is wired; otherwise it validates and shows the success state so the page is
// fully usable in preview. Swap in a real handler (Resend, a CRM, a form
// service) by pointing NEXT_PUBLIC_CONTACT_API at an endpoint.
export default function ContactForm() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.email || !data.message) {
      setState("error");
      return;
    }
    setState("sending");
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_API;
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(String(res.status));
      }
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="formcard">
        <div className="csuccess is-on">
          <div className="sicon" aria-hidden="true">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h3>Thanks — we&apos;ll be in touch.</h3>
          <p>We reply to demo requests within one business day.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="formcard" onSubmit={onSubmit} noValidate>
      <div className="frow2">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input className="input" id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input
            className="input"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="company">Company</label>
        <input className="input" id="company" name="company" type="text" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="message">How can we help?</label>
        <textarea className="textarea" id="message" name="message" required />
      </div>
      <div className="formfoot">
        <button className="btn btn-primary btn-block" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Request a demo"}
        </button>
        <div className={`formerr${state === "error" ? " is-on" : ""}`}>
          Please add your name, a valid email, and a message.
        </div>
      </div>
    </form>
  );
}
