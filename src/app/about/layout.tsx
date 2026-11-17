import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "About Us | TouchPad Consultancy";

const description =
  "Learn about TouchPad Consultancy, a Bangladesh-based firm providing research, proposal writing, MEAL, safeguarding, and capacity development services.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },

  description,

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title,
    description,
    url: "https://www.touchpadconsultancy.com/about",
    siteName: "TouchPad Consultancy",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/Hero2.png",
        alt: "About TouchPad Consultancy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/Hero2.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
