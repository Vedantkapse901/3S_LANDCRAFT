import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--line)] pt-[9vh] pb-[6vh] px-[7vw]">
      <div className="max-w-[1560px] mx-auto grid md:grid-cols-4 gap-10 mb-[8vh]">
        <div>
          <span className="text-[13px] tracking-[0.4em] uppercase text-bronze">3S Landcraft</span>
          <p className="lead mt-4 text-[13px]">
            A mountain retreat above the Kashedi Ghat, Sahyadri range, Maharashtra.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] tracking-[0.3em] uppercase text-ink-dim mb-4">Project</h4>
          <Link href="/#project" className="block text-sm text-ink-dim hover:text-ink mb-2.5">
            Project
          </Link>
          <Link href="/#villas" className="block text-sm text-ink-dim hover:text-ink mb-2.5">
            Villas
          </Link>
          <Link href="/#amenities" className="block text-sm text-ink-dim hover:text-ink mb-2.5">
            Amenities
          </Link>
        </div>
        <div>
          <h4 className="text-[11px] tracking-[0.3em] uppercase text-ink-dim mb-4">Company</h4>
          <Link href="/about" className="block text-sm text-ink-dim hover:text-ink mb-2.5">
            About
          </Link>
          <Link href="/progress" className="block text-sm text-ink-dim hover:text-ink mb-2.5">
            Progress
          </Link>
        </div>
        <div>
          <h4 className="text-[11px] tracking-[0.3em] uppercase text-ink-dim mb-4">Contact</h4>
          <Link href="/contact" className="block text-sm text-ink-dim hover:text-ink mb-2.5">
            Enquire
          </Link>
        </div>
      </div>
      <p className="text-center text-[11px] tracking-[0.18em] uppercase text-ink-dim/40">
        © {year} 3S Landcraft. Conceptual visualization — not final architectural or legal
        documentation.
      </p>
    </footer>
  );
}
