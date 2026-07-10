import Link from "next/link";
import { links } from "@/lib/links";

// `home` controls whether nav anchors point at on-page sections (#how) or back
// to the homepage's sections (/#how) from a sub-page like /contact.
export default function SiteHeader({ home = false }: { home?: boolean }) {
  const base = home ? "" : "/";
  return (
    <header className="site">
      <div className="wrap">
        <nav aria-label="Primary">
          <Link className="logo" href="/" aria-label="Klovered home">
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
              Sign in
            </a>
            <a href={links.signup} className="btn btn-primary">
              Start free trial
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
