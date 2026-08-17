import { Metadata } from "next";
import servicesData from "@/content/services.json";
import ServiceDetailClient, { ServiceItem } from "./ServiceDetailClient";

interface Props {
  params: Promise<{ slug: string }> | { slug: string };
}

// 1. DYNAMIC SERVER-SIDE SEO METADATA
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const typedServices = servicesData as ServiceItem[];
  const service = typedServices.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested technical consultancy service domain could not be found.",
    };
  }

  const title = service.title;
  const description =
    service.shortDescription ||
    service.description ||
    `Expert ${service.title} technical advisory and consultancy services in Bangladesh.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${title} | TouchPad Consultancy`,
      description,
      url: `https://www.touchpadconsultancy.com/services/${service.slug}`,
      siteName: "TouchPad Consultancy",
      images: [
        {
          url: service.image || "/assets/Hero2.png",
          width: 1200,
          height: 630,
          alt: `${title} - TouchPad Consultancy`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | TouchPad Consultancy`,
      description,
      images: [service.image || "/assets/Hero2.png"],
    },
  };
}

// 2. STATIC ROUTE PRE-RENDERING FOR INSTANT CRAWLER ACCESS
export async function generateStaticParams() {
  const typedServices = servicesData as ServiceItem[];
  return typedServices.map((service) => ({
    slug: service.slug,
  }));
}

// 3. SERVER COMPONENT ENTRY POINT
export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const typedServices = servicesData as ServiceItem[];
  const service = typedServices.find((s) => s.slug === resolvedParams.slug) || null;

  return <ServiceDetailClient service={service} />;
}
