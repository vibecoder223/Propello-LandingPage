"use client";

import { useState } from "react";
import Link from "next/link";
import { links } from "@/lib/links";

// Matches the Google "G" mark used by the free tool's own sign-in modal
// (klovered-free/components/AuthModal.tsx) so the visual language is
// consistent between the marketing site and the product.
function GoogleMark() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11 11 0 0 0 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  );
}

// `home` controls whether nav anchors point at on-page sections (#how) or back
// to the homepage's sections (/#how) from a sub-page like /contact.
export default function SiteHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const base = home ? "" : "/";
  const close = () => setOpen(false);

  return (
    <header className="site">
      <div className="wrap">
        <nav aria-label="Primary">
          <Link className="logo" href="/" aria-label="Klovered home" onClick={close}>
            <span className="wordmark">klovered</span>
          </Link>
          <div className="navlinks">
            <a href={`${base}#how`}>How it works</a>
            <Link href="/pricing">Pricing</Link>
            <a href={`${base}#faq`}>FAQ</a>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="navactions">
            <a href={links.signin} className="btn btn-ghost">
              <GoogleMark />
              Sign in
            </a>
            <a href={links.signup} className="btn btn-primary">
              Start free trial
            </a>
          </div>
          <button
            type="button"
            className="navtoggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`navtoggle-line${open ? " is-open-1" : ""}`} />
            <span className={`navtoggle-line${open ? " is-open-2" : ""}`} />
          </button>
        </nav>
        {open && (
          <div className="mobilemenu" id="mobile-menu">
            <a href={`${base}#how`} onClick={close}>
              How it works
            </a>
            <Link href="/pricing" onClick={close}>
              Pricing
            </Link>
            <a href={`${base}#faq`} onClick={close}>
              FAQ
            </a>
            <Link href="/contact" onClick={close}>
              Contact
            </Link>
            <div className="mobilemenu-actions">
              <a href={links.signin} className="btn btn-ghost">
                <GoogleMark />
                Sign in
              </a>
              <a href={links.signup} className="btn btn-primary">
                Start free trial
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
