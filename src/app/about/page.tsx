import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DirectorProfile from "@/components/DirectorProfile";
import { directorData } from "@/data/directors";

export const metadata: Metadata = {
  title: "About",
  description: "About 3S Landcraft and the team behind the Kashedi mountain retreat.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation hasFilm={false} />
      <main id="main-content" className="pt-[16vh]">
        <section className="section pt-0 text-center">
          <p className="kicker mb-5">About</p>
          <h1 className="text-[clamp(34px,5.5vw,68px)] max-w-[20ch] mx-auto mb-6">
            About 3S Landcraft
          </h1>
          <p className="lead mx-auto">
            Company story, philosophy and leadership details will be published here as they are
            confirmed by the project team. The sections below are placeholders, not final copy.
          </p>
        </section>

        <section className="section pt-0 border-t border-[color:var(--line)] grid md:grid-cols-2 gap-[6vw]">
          <div>
            <p className="kicker mb-4">Philosophy</p>
            <h2 className="text-2xl mb-4 max-w-[16ch]">Development approach</h2>
            <p className="text-sm text-ink-dim leading-relaxed">
              Placeholder — to be supplied by 3S Landcraft: the company&rsquo;s approach to
              development, quality and its commitment to the Kashedi site.
            </p>
          </div>
          <div>
            <p className="kicker mb-4">Vision</p>
            <h2 className="text-2xl mb-4 max-w-[16ch]">Why Kashedi</h2>
            <p className="text-sm text-ink-dim leading-relaxed">
              Placeholder — to be supplied by 3S Landcraft: the vision for the site and what it
              means for the surrounding landscape and community.
            </p>
          </div>
        </section>

        <section className="section border-t border-[color:var(--line)]">
          <p className="kicker mb-8 text-center">Directors</p>
          <div className="space-y-14 max-w-3xl mx-auto">
            {directorData.map((d) => (
              <DirectorProfile key={d.id} director={d} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
