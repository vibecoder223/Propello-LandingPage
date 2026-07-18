"use client";

import { useState } from "react";
import Link from "next/link";
import AuthControls from "./AuthControls";

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
            <a href={`${base}#faq`}>FAQ</a>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="navactions">
            <AuthControls />
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
            <a href={`${base}#faq`} onClick={close}>
              FAQ
            </a>
            <Link href="/contact" onClick={close}>
              Contact
            </Link>
            <div className="mobilemenu-actions">
              <AuthControls onNavigate={close} stacked />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
