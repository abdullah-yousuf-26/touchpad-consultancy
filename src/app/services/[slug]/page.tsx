import { notFound } from "next/navigation";
import Link from "next/link";
import servicesData from "@/content/services.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function IndividualServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
          &larr; Back to All Services
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-6">{service.title}</h1>
        <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 leading-relaxed">{service.longDescription}</p>
        <div className="mt-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6">Core Areas of Expertise</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
