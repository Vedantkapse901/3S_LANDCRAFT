"use client";

import { useState, FormEvent } from "react";
import type { EnquiryPayload } from "@/app/api/enquire/route";

const inputClass =
  "w-full bg-transparent border-b border-[color:var(--line)] py-3 text-sm text-ink placeholder:text-ink-dim/60 focus:outline-none focus:border-bronze transition-colors";

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload: EnquiryPayload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
      preferredContact: (fd.get("preferredContact") as EnquiryPayload["preferredContact"]) || undefined,
      interest: String(fd.get("interest") || ""),
    };
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Something went wrong");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-[6vh]">
        <p className="kicker mb-4">Thank you</p>
        <h3 className="text-2xl mb-3">Your enquiry has been received.</h3>
        <p className="lead mx-auto">The 3S Landcraft team will be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8 max-w-xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="text-[10px] tracking-[0.2em] uppercase text-ink-dim block mb-2">
            Name
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Full name" />
        </div>
        <div>
          <label htmlFor="phone" className="text-[10px] tracking-[0.2em] uppercase text-ink-dim block mb-2">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="+91" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase text-ink-dim block mb-2">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClass} placeholder="you@email.com" />
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="interest" className="text-[10px] tracking-[0.2em] uppercase text-ink-dim block mb-2">
            Interest
          </label>
          <select id="interest" name="interest" className={inputClass} defaultValue="General enquiry">
            <option>General enquiry</option>
            <option>Villas</option>
            <option>Site visit</option>
            <option>Investment</option>
          </select>
        </div>
        <div>
          <label htmlFor="preferredContact" className="text-[10px] tracking-[0.2em] uppercase text-ink-dim block mb-2">
            Preferred contact
          </label>
          <select id="preferredContact" name="preferredContact" className={inputClass} defaultValue="Phone">
            <option>Phone</option>
            <option>Email</option>
            <option>WhatsApp</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase text-ink-dim block mb-2">
          Message
        </label>
        <textarea id="message" name="message" rows={4} className={inputClass} placeholder="Tell us what you're looking for" />
      </div>

      {status === "error" && <p className="text-sm text-red-400">{error}</p>}

      <button type="submit" disabled={status === "sending"} className="cta-ring solid w-full sm:w-auto disabled:opacity-50">
        {status === "sending" ? "Sending…" : "Submit Enquiry"}
      </button>
    </form>
  );
}
