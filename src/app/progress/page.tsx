import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { progressData } from "@/data/progress";

export const metadata: Metadata = {
  title: "Project Progress",
  description: "Construction and development milestones for 3S Landcraft, Kashedi.",
};

export default function ProgressPage() {
  return (
    <>
      <Navigation hasFilm={false} />
      <main id="main-content" className="pt-[16vh]">
        <section className="section pt-0 text-center">
          <p className="kicker mb-5">3S Landcraft</p>
          <h1 className="text-[clamp(34px,5.5vw,68px)] max-w-[18ch] mx-auto mb-6">
            Project Progress
          </h1>
          <p className="lead mx-auto">
            Construction photography, site video and development milestones will be published
            here as they happen.
          </p>
        </section>

        <section className="section pt-0">
          {progressData.length === 0 ? (
            <div className="text-center py-[10vh] border-t border-[color:var(--line)]">
              <p className="text-ink-dim text-sm max-w-[48ch] mx-auto">
                No milestones have been published yet. This page is structured to receive dated
                updates — photographs, drone video and progress notes — as the development
                proceeds.
              </p>
            </div>
          ) : (
            <div className="space-y-px bg-[color:var(--line)] border-t border-[color:var(--line)]">
              {progressData.map((entry) => (
                <article key={entry.date + entry.title} className="bg-bg py-10 grid sm:grid-cols-[160px_1fr] gap-6">
                  <time className="text-[11px] tracking-[0.2em] uppercase text-bronze">
                    {new Date(entry.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                    })}
                  </time>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-ink-dim mb-2">
                      {entry.category}
                    </p>
                    <h3 className="text-xl mb-3">{entry.title}</h3>
                    <p className="text-sm text-ink-dim leading-relaxed max-w-[64ch]">
                      {entry.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
