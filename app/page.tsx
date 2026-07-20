import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
import { links } from "@/lib/links";

// Pricing is hidden for now. Flip to true to restore the homepage pricing
// section (and re-add the Pricing links in SiteHeader / SiteFooter).
const SHOW_PRICING = false;

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <SiteHeader home />

      {/* Hero: centered + browser frame */}
      <section className="hero wrap">
        <span className="eyebrow-pill">AI RFP response software</span>
        <h1>
          300 questions.
          <br />
          <span className="go">3 days</span>, not 3 weeks.
        </h1>
        <p className="sub">
          Klovered reads the RFP, drafts grounded answers from your knowledge base, and routes them
          through review. Your team ships, it doesn&apos;t retype.
        </p>
        <div className="herobtns">
          <a href={links.signup} className="btn btn-primary btn-lg">
            Start free trial
          </a>
          <a href="#how" className="btn btn-outline btn-lg">
            See Klovered in action
          </a>
        </div>
        <p className="heroproof">
          From a live run on a 65-page government tender: 255 requirements, drafted in under 3
          minutes, 0 invented answers.
        </p>

        <div className="framewrap">
          <div className="browser">
            <div className="chrome">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="url">klovered.com/app/deals/govt-transformation-2026</span>
            </div>
            <div className="appshell">
              <div className="appside">
                <div className="navlabel">Workspace</div>
                <div className="item on">Dashboard</div>
                <div className="item">Deals</div>
                <div className="item">My queue</div>
                <div className="navlabel">Intelligence</div>
                <div className="item">Knowledge base</div>
                <div className="item">Answer library</div>
              </div>
              <div className="appmain">
                <div className="apptop">
                  Deal / 65-page government tender · Section 3 · Security
                </div>
                <div className="band">
                  <div className="cell">
                    <div className="lbl">Requirements</div>
                    <div className="n">255</div>
                  </div>
                  <div className="cell">
                    <div className="lbl">Read to draft</div>
                    <div className="n g">{"<3 min"}</div>
                  </div>
                  <div className="cell">
                    <div className="lbl">Cited or flagged</div>
                    <div className="n">100%</div>
                  </div>
                  <div className="cell">
                    <div className="lbl">Invented answers</div>
                    <div className="n g">0</div>
                  </div>
                </div>
                <div className="appbody">
                  <div className="blockhead">
                    Requirements <span className="c">21 in this section</span>
                  </div>
                  <div className="qrow">
                    <span className="say">SLA and uptime commitment</span>
                    <span className="chip ok">cited · 0.9</span>
                  </div>
                  <div className="qrow">
                    <span className="say">ISO 27001 certification</span>
                    <span className="chip ok">cited · 1.0</span>
                  </div>
                  <div className="qrow">
                    <span className="say">Native mobile application</span>
                    <span className="chip gap">no source · flagged</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="problem" id="problem">
        <div className="wrap split">
          <div className="reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="A proposal team heads-down at a shared table, laptops open, working against a deadline"
              loading="lazy"
            />
            <p className="photo-cap">
              Week two of a three-week response. Everyone here has a day job.
            </p>
          </div>
          <div>
            <span className="eyebrow-pill">The problem</span>
            <h2>The way teams answer today burns their best people.</h2>
            <div className="painlist reveal">
              <div className="pain">
                <span className="pn">01</span>
                <span className="pt">
                  <b>Read 200 pages by hand</b> to find every requirement, knowing one missed line
                  can disqualify the bid.
                </span>
              </div>
              <div className="pain">
                <span className="pn">02</span>
                <span className="pt">
                  <b>Chase experts by email</b> for answers they have already written three times
                  this year.
                </span>
              </div>
              <div className="pain">
                <span className="pn">03</span>
                <span className="pt">
                  <b>Dig through old proposals</b> for the paragraph someone remembers writing in
                  2023.
                </span>
              </div>
              <div className="pain">
                <span className="pn">04</span>
                <span className="pt">
                  <b>Retype it all into Word</b>, reformat for the buyer&apos;s template, and hope
                  nothing slipped.
                </span>
              </div>
            </div>
            <p className="foot">
              Three weeks per response. Many firms simply skip bids they can&apos;t answer in time.
              That is revenue lost silently.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how">
        <div className="wrap how reveal">
          <div className="sec-head">
            <span className="eyebrow-pill">How it works</span>
            <h2 className="sec-title">Upload the RFP. Get a submitted response.</h2>
            <p className="sec-lead">
              Three steps from a raw document to a reviewed, exportable proposal. Here&apos;s what
              each one looks like.
            </p>
          </div>
          <div className="hiw-grid">
            {/* Step 1 — upload */}
            <div className="hiw-step">
              <div className="hiw-shot" aria-hidden="true">
                <div className="chrome sm">
                  <span className="cdot" />
                  <span className="cdot" />
                  <span className="cdot" />
                </div>
                <div className="hiw-body">
                  <div className="drop">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                    </svg>
                    <span>Drop your RFP</span>
                    <em>PDF, Word, or text</em>
                  </div>
                  <div className="filechip">
                    <span className="fi">PDF</span>
                    <span className="fn">govt-transformation-rfp.pdf</span>
                    <span className="fm">65 pages</span>
                  </div>
                  <div className="progressbar">
                    <span style={{ width: "64%" }} />
                  </div>
                  <div className="progresslbl">Parsing page 41 of 65</div>
                </div>
              </div>
              <div className="hiw-cap">
                <span className="n">01</span>
                <h3>Upload the RFP</h3>
                <p>
                  PDF, Word, or plain text. Klovered parses it page by page, keeping every section
                  and page reference intact.
                </p>
              </div>
            </div>

            {/* Step 2 — extract */}
            <div className="hiw-step">
              <div className="hiw-shot" aria-hidden="true">
                <div className="chrome sm">
                  <span className="cdot" />
                  <span className="cdot" />
                  <span className="cdot" />
                </div>
                <div className="hiw-body">
                  <div className="shot-head">255 requirements found</div>
                  <div className="vigrow">
                    <span>Section 3 · Security</span>
                    <span className="chip ok">21</span>
                  </div>
                  <div className="vigrow">
                    <span>Section 4 · Data governance</span>
                    <span className="chip ok">10</span>
                  </div>
                  <div className="vigrow">
                    <span>Section 5 · Technical</span>
                    <span className="chip ok">34</span>
                  </div>
                  <div className="vigrow">
                    <span>Section 8 · Commercial</span>
                    <span className="chip ok">8</span>
                  </div>
                </div>
              </div>
              <div className="hiw-cap">
                <span className="n">02</span>
                <h3>Every requirement extracted</h3>
                <p>
                  Klovered reads the whole document and pulls out every distinct requirement as a
                  discrete question. Nothing buried on page 140 gets missed.
                </p>
              </div>
            </div>

            {/* Step 3 — review & export */}
            <div className="hiw-step">
              <div className="hiw-shot" aria-hidden="true">
                <div className="chrome sm">
                  <span className="cdot" />
                  <span className="cdot" />
                  <span className="cdot" />
                </div>
                <div className="hiw-body">
                  <div className="draftmini">
                    &quot;We commit to a 99.9% monthly uptime SLA with service credits per 0.1%
                    shortfall.&quot;
                  </div>
                  <div className="draftmini-cite">
                    Cited · confidence 1.0 · capability-statement.txt
                  </div>
                  <div className="shot-actions">
                    <span className="chip ok">Approved</span>
                    <span className="expchip">Export · Word</span>
                    <span className="expchip">PDF</span>
                  </div>
                </div>
              </div>
              <div className="hiw-cap">
                <span className="n">03</span>
                <h3>Reviewed, then exported</h3>
                <p>
                  Each question gets a grounded, cited draft. Your team reviews, approves, and
                  exports to Word or PDF, or straight into your template.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap feature reveal">
          <div className="fcopy">
            <span className="eyebrow-pill">Requirement extraction</span>
            <h3>Extract every requirement, even on page 140.</h3>
            <p>
              Upload the RFP as PDF, Word, or text. Klovered reads every section, extracts each
              requirement, and turns it into a tracked task, so nothing gets missed.
            </p>
          </div>
          <div className="fviz">
            <div className="pipeline">
              <div className="pstep on">
                <div className="n">1</div>
                <div className="l">Upload</div>
              </div>
              <div className="pstep on">
                <div className="n">2</div>
                <div className="l">Extract</div>
              </div>
              <div className="pstep">
                <div className="n">3</div>
                <div className="l">Classify</div>
              </div>
              <div className="pstep">
                <div className="n">4</div>
                <div className="l">Structure</div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap feature rev reveal">
          <div className="fcopy">
            <span className="eyebrow-pill">Grounded drafting</span>
            <h3>Answers cite your own documents, not a guess.</h3>
            <p>
              Every draft pulls from your approved knowledge base and shows exactly which passage
              backed each claim. If the answer isn&apos;t there, Klovered flags it instead of
              inventing one.
            </p>
          </div>
          <div className="fviz">
            <div className="draftbox">
              We commit to a 99.9% monthly uptime SLA, with service credits of 10% per 0.1%
              shortfall <span className="citechip">c:1</span>, capped at 50% of monthly fees{" "}
              <span className="citechip">c:3</span>.
            </div>
            <div className="draftcite">Cited · confidence 1.0 · capability-statement.txt</div>
          </div>
        </div>

        <div className="wrap feature reveal">
          <div className="fcopy">
            <span className="eyebrow-pill">Review to export</span>
            <h3>Your experts review, they don&apos;t retype.</h3>
            <p>
              Assign questions by topic, collect approvals in one thread per question, and export a
              branded, submission-ready proposal in the buyer&apos;s template when the last box is
              checked.
            </p>
          </div>
          <div className="fviz">
            <div className="exprow">
              <span>SLA and uptime commitment</span>
              <span className="chip ok">approved</span>
            </div>
            <div className="exprow">
              <span>ISO 27001 certification</span>
              <span className="chip ok">approved</span>
            </div>
            <div className="exprow">
              <span>Native mobile application</span>
              <span className="chip gap">needs a human</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing — hidden for now (kept in place for an easy restore) */}
      {SHOW_PRICING && (
      <section className="pricing wrap reveal" id="pricing">
        <div className="head">
          <span className="eyebrow-pill">Pricing</span>
          <h2>One won bid pays for years of it.</h2>
        </div>
        <div className="plans">
          <div className="plan">
            <div className="pname">Starter</div>
            <div className="pdesc">Small teams, up to five bids a month.</div>
            <div className="price">
              $79<span>/seat/mo</span>
            </div>
            <ul>
              <li>Extraction and grounded drafting</li>
              <li>Word and PDF export</li>
              <li>Email support</li>
            </ul>
            <a href={links.signup} className="btn btn-outline">
              Start free trial
            </a>
          </div>
          <div className="plan mid">
            <span className="flag">Most teams</span>
            <div className="pname">Team</div>
            <div className="pdesc">Most bid teams land here.</div>
            <div className="price">
              $149<span>/seat/mo</span>
            </div>
            <ul>
              <li>Unlimited bids</li>
              <li>Review workflow and approvals</li>
              <li>Answer library</li>
              <li>Template export</li>
              <li>Priority support</li>
            </ul>
            <a href={links.signup} className="btn btn-primary">
              Start free trial
            </a>
          </div>
          <div className="plan">
            <div className="pname">Enterprise</div>
            <div className="pdesc">SSO, custom retention, dedicated support.</div>
            <div className="price">Custom</div>
            <ul>
              <li>Everything in Team</li>
              <li>SSO + SCIM</li>
              <li>Retention controls</li>
              <li>Dedicated onboarding</li>
            </ul>
            <Link href="/contact" className="btn btn-outline">
              Book a demo
            </Link>
          </div>
        </div>
      </section>
      )}

      {/* FAQ */}
      <section className="faq wrap reveal" id="faq">
        <div className="head">
          <span className="eyebrow-pill">FAQ</span>
          <h2>Questions, answered</h2>
        </div>
        <div className="faqlist">
          <details className="qa">
            <summary>
              What is Klovered?<span className="qa-plus" aria-hidden="true" />
            </summary>
            <p>
              Klovered is AI RFP response software. It reads a request for proposal, extracts every
              requirement, drafts an answer for each one grounded in your own knowledge base, and
              routes drafts through your team&apos;s review before export.
            </p>
          </details>
          <details className="qa">
            <summary>
              Where do the answers come from?<span className="qa-plus" aria-hidden="true" />
            </summary>
            <p>
              Every answer is drafted from documents you upload to your knowledge base: past
              proposals, security policies, pricing sheets. Each claim is cited back to the source
              chunk it came from.
            </p>
          </details>
          <details className="qa">
            <summary>
              What happens if the knowledge base doesn&apos;t cover a question?
              <span className="qa-plus" aria-hidden="true" />
            </summary>
            <p>
              Klovered flags it as no source instead of guessing. An uncovered requirement shows up
              for a human to answer, not a fabricated draft.
            </p>
          </details>
          <details className="qa">
            <summary>
              Can my team review answers before they go out?
              <span className="qa-plus" aria-hidden="true" />
            </summary>
            <p>
              Yes. Every drafted answer carries a confidence score and routes to review before
              it&apos;s marked approved. Nothing ships to a client without a human sign-off.
            </p>
          </details>
        </div>
      </section>

      {/* CTA band */}
      <section className="ctaband reveal" id="cta">
        <div className="wrap">
          <h2>Stop retyping. Start winning.</h2>
          <p>Start your 7-day free trial and upload your first RFP.</p>
          <div className="cta-actions">
            <a href={links.signup} className="btn btn-ink btn-lg">
              Start free trial
            </a>
            <Link href="/contact" className="btn btn-cta-ghost btn-lg">
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter home />
    </>
  );
}
