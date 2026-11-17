"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutScrollEffects() {
  useLayoutEffect(() => {
    const root = document.getElementById("about-page");

    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add(
      {
        desktop: "(min-width: 768px)",
        mobile: "(max-width: 767px)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const conditions = context.conditions;

        if (!conditions?.motion) return;

        const desktop = Boolean(conditions.desktop);
        const distance = desktop ? 70 : 35;

        function animateElement(
          element: HTMLElement,
          variant: string,
          delay = 0
        ) {
          // Keep restored or already-visible content readable.
          if (
            element.getBoundingClientRect().top <
            window.innerHeight * 0.88
          ) {
            return;
          }

          const from: gsap.TweenVars = {
            autoAlpha: 0,
            x: 0,
            y: distance,
            scale: 1,
          };

          if (variant === "left") {
            from.x = -distance;
            from.y = 0;
          }

          if (variant === "right") {
            from.x = distance;
            from.y = 0;
          }

          if (variant === "zoom") {
            from.y = desktop ? 45 : 25;
            from.scale = 0.9;
          }

          // Pause CSS transitions while GSAP controls the element.
          // They are restored after the entrance finishes.
          gsap.set(element, {
            transition: "none",
          });

          gsap.fromTo(element, from, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: desktop ? 1.05 : 0.75,
            delay,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility,transition",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
              invalidateOnRefresh: true,
            },
          });
        }

        // Individual headings, images, and content panels.
        root
          .querySelectorAll<HTMLElement>("[data-about-reveal]")
          .forEach((element) => {
            animateElement(
              element,
              element.dataset.aboutReveal || "up"
            );
          });

        // Each card gets its own trigger so mobile cards
        // animate when they actually become visible.
        root
          .querySelectorAll<HTMLElement>("[data-about-cards]")
          .forEach((group) => {
            Array.from(group.children).forEach((child, index) => {
              if (!(child instanceof HTMLElement)) return;

              animateElement(
                child,
                "zoom",
                desktop ? (index % 3) * 0.1 : 0
              );
            });
          });
      },
      root
    );

    return () => {
      // Revert only this component's animations and triggers.
      media.revert();
    };
  }, []);

  return null;
}
