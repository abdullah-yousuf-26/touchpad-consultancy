"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (
      preference.matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const animations: Animation[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;

          observer.unobserve(element);

          if (preference.matches) return;

          // Keep content already visible on page load stationary.
          if (element.dataset.revealInitiallyVisible === "true") {
            return;
          }

          const requestedDelay = Number(
            element.dataset.revealDelay ?? 0
          );

          const delay = Number.isFinite(requestedDelay)
            ? Math.min(Math.max(requestedDelay, 0), 300)
            : 0;

          const animation = element.animate(
            [
              {
                opacity: 0,
                translate: "0 20px",
              },
              {
                opacity: 1,
                translate: "0 0",
              },
            ],
            {
              duration: 600,
              delay,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "backwards",
            }
          );

          animations.push(animation);
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    document
      .querySelectorAll<HTMLElement>("[data-scroll-reveal]")
      .forEach((element) => {
        // Exclude protected sections and their contents.
        if (element.closest("[data-scroll-reveal-skip]")) {
          return;
        }

        const rect = element.getBoundingClientRect();

        element.dataset.revealInitiallyVisible = String(
          rect.top < window.innerHeight && rect.bottom > 0
        );

        observer.observe(element);
      });

    const handlePreferenceChange = () => {
      if (!preference.matches) return;

      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };

    preference.addEventListener("change", handlePreferenceChange);

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());

      preference.removeEventListener(
        "change",
        handlePreferenceChange
      );
    };
  }, [pathname]);

  return null;
}
