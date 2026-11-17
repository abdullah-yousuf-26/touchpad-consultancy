import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Contact Us | TouchPad Consultancy";

const description =
  "Contact TouchPad Consultancy to discuss research, proposal writing, MEAL, safeguarding, capacity development, and advisory assignments in Bangladesh.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },

  description,

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title,
    description,
    url: "https://www.touchpadconsultancy.com/contact",
    siteName: "TouchPad Consultancy",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/Hero2.png",
        alt: "Contact TouchPad Consultancy",
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

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
