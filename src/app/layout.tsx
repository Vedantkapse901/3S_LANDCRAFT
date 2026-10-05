import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const timesNewRoman = {
  variable: "--font-times-new-roman",
  style: ["normal", "italic"],
};

const title = "3S Landcraft — A Mountain Retreat in Kashedi";
const description =
  "A luxury mountain resort development above the Kashedi Ghat, Sahyadri range, Maharashtra — conceptual masterplan by 3S Landcraft.";

export const metadata: Metadata = {
  metadataBase: new URL("https://3slandcraft.example.com"), // update once the real domain is live
  title: { default: title, template: "%s — 3S Landcraft" },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
