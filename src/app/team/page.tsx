import type { Metadata } from "next";
import Link from "next/link";

import { consultants } from "@/content/team";
import TeamCard from "./TeamCard";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the consultants behind TouchPad Consultancy and explore their expertise and professional profiles.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Our Team | TouchPad Consultancy",
    description:
      "Meet our consultants and explore their professional profiles.",
    url: "https://www.touchpadconsultancy.com/team",
    type: "website",
  },
};

export default function TeamPage() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-6 pb-24 pt-40 text-white sm:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-950 via-slate-950 to-emerald-950"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand-teal/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
            The people behind our work
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Meet Our Consultants
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
            Explore the people, perspectives, and professional
            experience behind TouchPad Consultancy.
          </p>
        </div>
      </section>

      {/* Consultant cards */}
      <section
        aria-label="Consultant profiles"
        className="px-5 py-16 sm:px-6 sm:py-24"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8">
        {consultants.map((member) => (
            <div
            key={member.slug}
            className="flex w-full min-w-0 flex-col md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]"
            >
            <TeamCard member={member} />
            </div>
        ))}
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="px-5 pb-20 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-slate-950 to-teal-950 p-8 text-white sm:p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Discuss your assignment with our team
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
              Tell us about your requirements so we can discuss
              the expertise your project needs.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-brand-teal to-brand-green px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
