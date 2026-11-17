import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  consultants,
  getConsultant,
} from "@/content/team";

import {
  ConsultantPortrait,
  ConsultantSocials,
} from "../TeamCard";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return consultants.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getConsultant(slug);

  if (!member) {
    notFound();
  }

  return {
    title: member.name,
    description: member.summary,
    alternates: {
      canonical: `/team/${member.slug}`,
    },
    openGraph: {
      title: `${member.name} | TouchPad Consultancy`,
      description: member.summary,
      url: `https://www.touchpadconsultancy.com/team/${member.slug}`,
      type: "profile",
    },
  };
}

export default async function ConsultantPage({
  params,
}: Props) {
  const { slug } = await params;
  const member = getConsultant(slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="bg-slate-50 font-sans text-slate-900">
      {/* Profile header */}
      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-emerald-950 px-6 pb-16 pt-36 text-white sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/team"
            className="text-sm font-semibold text-teal-300 transition-colors hover:text-white"
          >
            ← Back to Our Team
          </Link>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            {member.name}
          </h1>

          <p className="mt-3 text-lg text-teal-200">
            {member.role}
          </p>
        </div>
      </section>

      {/* Profile content */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-3">
        <aside className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[4/5]">
            <ConsultantPortrait
              member={member}
              priority
            />
          </div>

          <div className="space-y-5 p-6">
            <ConsultantSocials member={member} />

            <Link
              href="/contact"
              className="flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-teal to-brand-green px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Discuss an Assignment
            </Link>
          </div>
        </aside>

        <div className="space-y-6 lg:col-span-2">
          {/* Biography */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              Professional Overview
            </h2>

            <p className="mt-4 text-base font-medium leading-relaxed text-teal-800">
              {member.summary}
            </p>

            {member.biography.map((paragraph, index) => (
              <p
                key={index}
                className="mt-4 text-base leading-relaxed text-slate-600"
              >
                {paragraph}
              </p>
            ))}
          </section>

          {/* Expertise */}
          {member.expertise.length > 0 && (
            <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Areas of Expertise
              </h2>

              <ul className="mt-5 flex flex-wrap gap-3">
                {member.expertise.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-teal-100 bg-teal-50 px-4 py-3 text-sm font-medium text-teal-900"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Portfolio */}
          {member.assignments.length > 0 && (
            <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Selected Assignments
              </h2>

              <div className="mt-5 space-y-5">
                {member.assignments.map((item) => (
                  <div
                    key={item.title}
                    className="border-l-2 border-emerald-400 pl-4"
                  >
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Qualifications */}
          {member.education.length > 0 && (
            <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Education & Qualifications
              </h2>

              <ul className="mt-5 list-disc space-y-3 pl-5 text-base text-slate-600">
                {member.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
