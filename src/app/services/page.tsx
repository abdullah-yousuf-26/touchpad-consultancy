import Link from "next/link";
import servicesData from "@/content/services.json";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Consultancy Services</h1>
        <div className="grid gap-6">
          {servicesData.map((service) => (
            <Link 
              key={service.slug} 
              href={`/services/${service.slug}`}
              className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition block"
            >
              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{service.title}</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{service.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}