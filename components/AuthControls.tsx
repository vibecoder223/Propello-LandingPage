"use client";

import { useEffect, useRef, useState } from "react";
import { api } from "@/lib/api";
import AuthModal from "./AuthModal";

// The tool lives at /app on the same domain; "Start free" and "Open app" go
// there. Same-origin so the session cookie is shared.
const APP = process.env.NEXT_PUBLIC_APP_URL || "/app";

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

// Header auth state, integrated in-page on the marketing site.
//  • Signed out → "Sign in" opens the modal HERE (no bounce to the tool);
//    "Start free trial" launches the guest tool at /app.
//  • Signed in  → account email + "Open app" + "Sign out".
// A ?auth=signin|signup deep link (e.g. an old CTA URL) opens the modal too.
export default function AuthControls({
  onNavigate,
  stacked = false,
}: {
  onNavigate?: () => void;
  // `stacked` is the mobile-menu layout: controls listed vertically, no dropdown.
  // Default (bar) is the desktop header: primary CTA + a monogram avatar menu.
  stacked?: boolean;
}) {
  const [email, setEmail] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [modal, setModal] = useState<null | "signin" | "signup">(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    api
      .me()
      .then((s) => {
        if (!cancelled) {
          setEmail(s.is_anonymous ? null : s.email);
          setReady(true);
        }
      })
      .catch(() => {
        if (!cancelled) setReady(true); // no session -> signed out
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const a = p.get("auth");
    if (a === "signin" || a === "signup") {
      setModal(a);
      p.delete("auth");
      const rest = p.toString();
      window.history.replaceState(null, "", window.location.pathname + (rest ? `?${rest}` : ""));
    }
  }, []);

  // Close the avatar menu on outside click / Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  async function signOut() {
    try {
      await api.logout();
    } catch {
      // reload regardless — the cookie is httpOnly and the UI resets either way
    }
    window.location.reload();
  }

  if (ready && email) {
    // Mobile menu: keep everything visible and stacked, no dropdown.
    if (stacked) {
      return (
        <>
          <span className="auth-badge" title={`Signed in as ${email}`}>
            <span className="auth-badge-dot" aria-hidden="true" />
            {email}
          </span>
          <a href={`${APP}/knowledge`} className="btn btn-primary" onClick={onNavigate}>
            Open app
          </a>
          <button type="button" className="btn btn-ghost" onClick={signOut}>
            Sign out
          </button>
        </>
      );
    }

    // Desktop header: keep "Open app" as the visible CTA; identity collapses to a
    // fixed-width monogram avatar whose menu holds the email + Sign out. A spelled
    // out email varied in width and shoved the centered nav links off-axis.
    const initial = email.trim().charAt(0).toUpperCase() || "?";
    return (
      <>
        <a href={`${APP}/knowledge`} className="btn btn-primary" onClick={onNavigate}>
          Open app
        </a>
        <div className="acct" ref={menuRef}>
          <button
            type="button"
            className="acct-avatar-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-label={`Account — signed in as ${email}`}
            title={`Signed in as ${email}`}
          >
            <span className="acct-avatar" aria-hidden="true">{initial}</span>
          </button>
          {menuOpen && (
            <div className="acct-menu" role="menu">
              <div className="acct-menu-head">
                <span className="acct-menu-label">Signed in as</span>
                <span className="acct-menu-email">{email}</span>
              </div>
              <button className="acct-menu-item" role="menuitem" onClick={signOut}>
                Sign out
              </button>
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <button type="button" className="btn btn-ghost" onClick={() => setModal("signin")}>
        <GoogleMark />
        Sign in
      </button>
      <a href={`${APP}/knowledge`} className="btn btn-primary" onClick={onNavigate}>
        Start free trial
      </a>
      {modal && <AuthModal initialMode={modal} onClose={() => setModal(null)} />}
    </>
  );
}
