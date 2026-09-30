import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Enquire about 3S Landcraft, the Kashedi mountain retreat.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation hasFilm={false} />
      <main id="main-content" className="pt-[16vh]">
        <section className="section pt-0 text-center">
          <p className="kicker mb-5">Contact</p>
          <h1 className="text-[clamp(34px,5.5vw,68px)] max-w-[18ch] mx-auto mb-6">
            Enquire
          </h1>
          <p className="lead mx-auto">
            Share a few details and the 3S Landcraft team will follow up.
          </p>
        </section>

        <section className="section pt-0 border-t border-[color:var(--line)]">
          <EnquiryForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
