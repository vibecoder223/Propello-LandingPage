"use client";

import { useState } from "react";

type State = "idle" | "sending" | "sent" | "error";

const VALIDATION_MSG = "Please add your name, a valid email, and a message.";

// Contact form. Anyone can submit; the message is emailed to us via
// /api/contact (Resend). On failure it surfaces the server's actual reason
// instead of a generic message, so misconfiguration is diagnosable.
export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [errMsg, setErrMsg] = useState(VALIDATION_MSG);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const emailOk = typeof data.email === "string" && /.+@.+\..+/.test(data.email);
    if (!data.name || !emailOk || !data.message) {
      setErrMsg(VALIDATION_MSG);
      setState("error");
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `Send failed (${res.status}). Please try again.`);
      }
      setState("sent");
      form.reset();
    } catch (err) {
      setErrMsg(
        err instanceof Error && err.message
          ? err.message
          : "Couldn't send your message. Please email us directly."
      );
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
        <div className={`formerr${state === "error" ? " is-on" : ""}`} role="alert">
          {errMsg}
        </div>
      </div>
    </form>
  );
}
