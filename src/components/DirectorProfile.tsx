import Image from "next/image";
import type { Director } from "@/data/directors";

export default function DirectorProfile({ director }: { director: Director }) {
  return (
    <div data-reveal className="grid sm:grid-cols-[160px_1fr] gap-6 items-start">
      <div className="relative aspect-square rounded-full overflow-hidden img-blend bg-bg-elev">
        <Image src={director.photo} alt={director.name} fill className="object-cover" sizes="160px" />
      </div>
      <div>
        <h3 className="text-xl mb-1">{director.name}</h3>
        <p className="text-[11px] tracking-[0.2em] uppercase text-bronze mb-3">{director.role}</p>
        <p className="text-sm text-ink-dim leading-relaxed max-w-[52ch]">{director.bio}</p>
      </div>
    </div>
  );
}
