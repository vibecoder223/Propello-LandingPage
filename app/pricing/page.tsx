import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Check, Dash } from "@/components/icons";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "Pricing — Propello | Plans from $79/seat",
  description:
    "Simple per-seat pricing for Propello. Try any plan free for 7 days, then Starter at $79, Team at $149, or custom Enterprise.",
};

const starter = [
  "Up to 5 RFPs a month",
  "AI extraction & grounded drafting",
  "Cited answers",
  "Word & PDF export",
  "Email support",
];
const team = [
  "Unlimited RFPs",
  "Review workflows & approvals",
  "Reusable answer library",
  "Template export",
  "Confidence scoring",
  "Priority support",
];
const enterprise = [
  "Everything in Team",
  "SSO & SCIM",
  "Custom data retention",
  "Dedicated onboarding",
  "SLA & priority routing",
];

// [Starter, Team, Enterprise] — true = check, false = dash, string = text.
const compare: Array<[string, boolean | string, boolean | string, boolean | string]> = [
  ["RFPs per month", "5", "Unlimited", "Unlimited"],
  ["Requirement extraction", true, true, true],
  ["Grounded, cited drafting", true, true, true],
  ["No-source flagging", true, true, true],
  ["Review & approval workflow", false, true, true],
  ["Reusable answer library", false, true, true],
  ["Export to your template", false, true, true],
  ["SSO & SCIM", false, false, true],
  ["Custom data retention", false, false, true],
  ["Support", "Email", "Priority", "Dedicated"],
];

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <span className="cmp-yes"><Check /></span>;
  if (v === false) return <span className="cmp-no"><Dash /></span>;
  return <span className="cmp-txt">{v}</span>;
}

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-head wrap">
          <span className="eyebrow-pill">Pricing</span>
          <h1 className="page-title">Simple pricing, per seat.</h1>
          <p className="page-sub">
            Try any plan free for 7 days. Every plan includes AI extraction, grounded and cited
            drafting, and no-source flagging. You only pay for the people answering bids.
          </p>
        </section>

        <section className="pricing wrap" style={{ paddingTop: 56 }}>
          <div className="plans pricing-plans">
            <div className="plan">
              <div className="pname">Starter</div>
              <div className="pdesc">Small teams with the occasional bid.</div>
              <div className="price">
                $79<span>/seat/mo</span>
              </div>
              <p className="price-note">7-day free trial, then $79/seat/mo</p>
              <ul>
                {starter.map((f) => (
                  <li key={f}>
                    <span className="li-check">
                      <Check />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={links.signup} className="btn btn-outline">
                Start free trial
              </a>
            </div>

            <div className="plan mid">
              <div className="flag">Most popular</div>
              <div className="pname">Team</div>
              <div className="pdesc">Where most bid teams land.</div>
              <div className="price">
                $149<span>/seat/mo</span>
              </div>
              <p className="price-note">7-day free trial, then $149/seat/mo</p>
              <ul>
                {team.map((f) => (
                  <li key={f}>
                    <span className="li-check">
                      <Check />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={links.signup} className="btn btn-primary">
                Start free trial
              </a>
            </div>

            <div className="plan">
              <div className="pname">Enterprise</div>
              <div className="pdesc">Security, scale, and control.</div>
              <div className="price">Custom</div>
              <p className="price-note">Talk to us for trial terms</p>
              <ul>
                {enterprise.map((f) => (
                  <li key={f}>
                    <span className="li-check">
                      <Check />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-outline">
                Talk to us
              </Link>
            </div>
          </div>
        </section>

        <section className="cmp wrap">
          <div className="sec-head">
            <h2 className="sec-title">Compare every plan</h2>
          </div>
          <div className="cmp-wrap">
            <table className="cmp-table">
              <caption className="sr-only">Propello plan comparison</caption>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Starter</th>
                  <th scope="col" className="hi">
                    Team
                  </th>
                  <th scope="col">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {compare.map(([feature, s, t, e]) => (
                  <tr key={feature as string}>
                    <th scope="row">{feature}</th>
                    <td>
                      <Cell v={s} />
                    </td>
                    <td className="hi">
                      <Cell v={t} />
                    </td>
                    <td>
                      <Cell v={e} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="faq pricing-faq wrap">
          <div className="sec-head">
            <span className="eyebrow-pill">Pricing FAQ</span>
            <h2 className="sec-title">Questions about plans</h2>
          </div>
          <div className="faqlist">
            <details className="qa">
              <summary>
                Is there a free trial?<span className="qa-plus" aria-hidden="true" />
              </summary>
              <p>
                Yes. Every plan includes a 7-day free trial with full access to extraction,
                drafting, and review. Billing for your selected plan begins when the trial ends.
              </p>
            </details>
            <details className="qa">
              <summary>
                How does per-seat pricing work?<span className="qa-plus" aria-hidden="true" />
              </summary>
              <p>
                You pay for each person who drafts or reviews answers in Propello. Reviewers and
                occasional collaborators count as seats; there are no separate charges per RFP or
                per question.
              </p>
            </details>
            <details className="qa">
              <summary>
                Can I change plans later?<span className="qa-plus" aria-hidden="true" />
              </summary>
              <p>
                Yes. Upgrade, downgrade, or add seats at any time. Changes are prorated to your
                billing period.
              </p>
            </details>
            <details className="qa">
              <summary>
                Do you offer annual billing?<span className="qa-plus" aria-hidden="true" />
              </summary>
              <p>
                Yes. Annual billing comes with a discount over monthly. Talk to us for team and
                enterprise annual terms.
              </p>
            </details>
          </div>
        </section>

        <section className="ctaband">
          <div className="wrap">
            <h2>Answer your next RFP free.</h2>
            <p>Start your 7-day free trial and see it work.</p>
            <div className="cta-actions">
              <a href={links.signup} className="btn btn-ink btn-lg">
                Start free trial
              </a>
              <Link href="/contact" className="btn btn-cta-ghost btn-lg">
                Talk to us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
