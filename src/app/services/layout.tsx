import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Consultancy Services | TouchPad Consultancy";

const description =
  "Explore our research, proposal writing, donor reporting, MEAL, capacity development, data services, safeguarding, and strategic advisory services.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },

  description,

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title,
    description,
    url: "https://www.touchpadconsultancy.com/services",
    siteName: "TouchPad Consultancy",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/Hero2.png",
        alt: "TouchPad Consultancy Services",
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

export default function ServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
