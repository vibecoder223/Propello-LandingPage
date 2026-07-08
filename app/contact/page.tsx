import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Propello — book a demo",
  description:
    "Talk to Propello about AI RFP response software. Book a demo or ask a question — we reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <section className="contact">
        <div className="wrap">
          <div className="chead">
            <span className="eyebrow-pill">Contact</span>
            <h2>Book a demo, or ask us anything.</h2>
            <p>
              Tell us about your bid volume and we&apos;ll show you Propello on a real RFP. We reply
              within one business day.
            </p>
          </div>
          <div className="cgrid">
            <ContactForm />
            <div className="cside">
              <div className="ccard">
                <h4>Email</h4>
                <a href="mailto:khalifa.villaflor1@gmail.com">khalifa.villaflor1@gmail.com</a>
                <p>For demos, pricing, and product questions.</p>
              </div>
              <div className="ccard">
                <h4>What to expect</h4>
                <p>
                  A 20-minute walkthrough on one of your own RFPs. No slideware — we upload a real
                  document and extract it live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
