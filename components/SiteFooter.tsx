import Link from "next/link";
import { links } from "@/lib/links";

export default function SiteFooter({ home = false }: { home?: boolean }) {
  const base = home ? "" : "/";
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <span className="logo">
              <span
                className="mark"
                aria-hidden="true"
                style={{ width: 24, height: 24, borderRadius: 6, fontSize: 13 }}
              >
                P
              </span>
              <span className="wordmark" style={{ fontSize: 17 }}>
                propello
              </span>
            </span>
            <p className="foot-tagline">AI RFP response software. Grounded, cited, reviewed.</p>
          </div>
          <div className="foot-col">
            <h4>Product</h4>
            <a href={`${base}#how`}>How it works</a>
            <a href={`${base}#problem`}>Why Propello</a>
            <a href={`${base}#faq`}>FAQ</a>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <a href={`${base}#pricing`}>Pricing</a>
            <Link href="/contact">Contact</Link>
            <a href={links.signin}>Sign in</a>
          </div>
          <div className="foot-col">
            <h4>Get started</h4>
            <a href={links.signup}>Start free trial</a>
            <Link href="/contact">Book a demo</Link>
          </div>
        </div>
        <div className="foot-bar">
          <span className="foot-note">© 2026 Propello</span>
          <span className="foot-note">Win the bid, not the busywork.</span>
        </div>
      </div>
    </footer>
  );
}
