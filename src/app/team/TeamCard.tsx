"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  RotateCcw,
  UserRound,
  Globe,
  Mail,
} from "lucide-react";

import type { Consultant } from "@/content/team";
import styles from "./TeamCard.module.css";

// =========================================================================
// CONSULTANT PHOTO
// =========================================================================
export function ConsultantPortrait({
  member,
  priority = false,
}: {
  member: Consultant;
  priority?: boolean;
}) {
  const [failedSource, setFailedSource] = useState<
    string | null
  >(null);

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-slate-100 to-emerald-100">
      {failedSource === member.image ? (
        <div className="flex h-full flex-col items-center justify-center gap-3 text-teal-800">
          <UserRound
            className="h-16 w-16"
            aria-hidden="true"
          />

          <span className="text-sm font-medium">
            Photo coming soon
          </span>
        </div>
      ) : (
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          priority={priority}
          className="object-cover object-top"
          onError={() => setFailedSource(member.image)}
        />
      )}
    </div>
  );
}

// =========================================================================
// SOCIAL ICONS
// Brand icons are SVGs, not lucide-react imports.
// =========================================================================
function SocialIcon({ label }: { label: string }) {
  switch (label.trim().toLowerCase()) {
    case "linkedin":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );

    case "facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      );

    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          className="h-5 w-5"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
          />

          <circle cx="12" cy="12" r="4" />

          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    case "x":
    case "twitter":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );

    case "email":
    case "mail":
      return (
        <Mail
          className="h-5 w-5"
          strokeWidth={1.8}
          aria-hidden="true"
        />
      );

    default:
      return (
        <Globe
          className="h-5 w-5"
          strokeWidth={1.8}
          aria-hidden="true"
        />
      );
  }
}

// =========================================================================
// SOCIAL LINKS — ROUNDED SQUARE BUTTONS
// =========================================================================
export function ConsultantSocials({
  member,
}: {
  member: Consultant;
}) {
  if (!member.socials.length) return null;

  return (
    <ul
      aria-label={`${member.name} professional links`}
      className="flex flex-wrap items-center gap-3"
    >
      {member.socials.map((social) => {
        const isEmail = social.href.startsWith("mailto:");

        return (
          <li key={social.href}>
            <a
              href={social.href}
              target={isEmail ? undefined : "_blank"}
              rel={
                isEmail ? undefined : "noopener noreferrer"
              }
              title={social.label}
              aria-label={`${member.name}: ${social.label}${
                isEmail ? "" : " (opens in a new tab)"
              }`}
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700 shadow-sm transition-colors hover:border-teal-600 hover:bg-teal-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
            >
              <SocialIcon label={social.label} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

// =========================================================================
// TEAM CARD
// =========================================================================
export default function TeamCard({
  member,
}: {
  member: Consultant;
}) {
  const [flipped, setFlipped] = useState(false);

  const profileLink = useRef<HTMLAnchorElement>(null);
  const frontButton = useRef<HTMLButtonElement>(null);

  const panelId = `consultant-${member.slug}`;

  const restorePhoto = () => {
    setFlipped(false);

    requestAnimationFrame(() => {
      frontButton.current?.focus({
        preventScroll: true,
      });
    });
  };

  return (
    <article className="h-full min-w-0 rounded-[2rem] border border-slate-200 bg-white p-3 shadow-lg shadow-slate-950/5">
      {/* Only the photo area flips. */}
      <div
        className={styles.visual}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") {
            setFlipped(true);
          }
        }}
        onPointerLeave={(event) => {
          if (
            event.pointerType === "mouse" &&
            !event.currentTarget.contains(
              document.activeElement
            )
          ) {
            setFlipped(false);
          }
        }}
        onBlur={(event) => {
          if (
            !event.currentTarget.contains(
              event.relatedTarget
            )
          ) {
            setFlipped(false);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            restorePhoto();
          }
        }}
      >
        <div
          className={`${styles.rotator} ${
            flipped ? styles.flipped : ""
          }`}
        >
          {/* FRONT: PHOTO */}
          <div
            className={`${styles.face} border border-teal-100`}
            inert={flipped}
          >
            <ConsultantPortrait member={member} />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent"
            />

            <span
              aria-hidden="true"
              className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-slate-950/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md"
            >
              Hover or tap to explore
            </span>

            <button
              ref={frontButton}
              type="button"
              aria-label={`Explore ${member.name}'s profile`}
              aria-expanded={flipped}
              aria-controls={panelId}
              className="absolute inset-0 cursor-pointer rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-teal-500"
              onClick={(event) => {
                setFlipped(true);

                if (event.detail === 0) {
                  requestAnimationFrame(() => {
                    profileLink.current?.focus({
                      preventScroll: true,
                    });
                  });
                }
              }}
            />
          </div>

          {/* BACK: INTRODUCTION AND LEARN MORE */}
          <div
            id={panelId}
            inert={!flipped}
            className={`${styles.face} ${styles.back} flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-teal-950 to-emerald-950 px-6 py-10 text-center text-white`}
          >
            <button
              type="button"
              aria-label={`Show ${member.name}'s photo`}
              onClick={restorePhoto}
              className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
            >
              <RotateCcw
                className="h-4 w-4"
                aria-hidden="true"
              />
            </button>

            <p className="text-xs font-semibold uppercase tracking-widest text-teal-300">
              Meet the consultant
            </p>

            <p className="mt-4 text-2xl font-bold tracking-tight">
              {member.name}
            </p>

            <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-slate-200">
              {member.summary}
            </p>

            <Link
              ref={profileLink}
              href={`/team/${member.slug}`}
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-green px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Learn More

              <ArrowUpRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Name and social icons remain stationary. */}
      <div className="space-y-4 px-3 pb-4 pt-5">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            {member.name}
          </h2>

          <p className="mt-1 text-sm font-medium text-teal-700">
            {member.role}
          </p>
        </div>

        <ConsultantSocials member={member} />
      </div>
    </article>
  );
}
