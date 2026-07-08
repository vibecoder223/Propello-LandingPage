import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#12B24A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://propello.io"),
  title: "Propello — AI RFP response software. 300 questions. 3 days, not 3 weeks.",
  description:
    "Propello reads the RFP, drafts grounded answers from your knowledge base with citations, and routes them through review. Win the bid, not the busywork.",
  openGraph: {
    type: "website",
    title: "Propello: win the bid, not the busywork",
    description:
      "Propello extracts every requirement from an RFP, drafts grounded answers from your knowledge base, and routes them through review. Answer 300 questions in 3 days, not 3 weeks.",
  },
  twitter: { card: "summary" },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%2312B24A'/%3E%3Ctext x='16' y='23' font-family='Arial,Helvetica,sans-serif' font-size='20' font-weight='700' fill='%23fff' text-anchor='middle'%3EP%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;650&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
