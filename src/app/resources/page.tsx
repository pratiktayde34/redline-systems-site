import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getAllResources, getFeaturedResources } from "@/lib/resources";

export const metadata = {
  title: "Technical Resources | Redline Systems",
  description: "A technical knowledge hub for enterprise infrastructure, AI computing, and storage solutions.",
};

const CATEGORIES = [
  "AI Infrastructure",
  "Storage & NAS",
  "Professional Workstations",
  "Private Infrastructure",
  "Industry Guides"
];

export default function ResourcesHub() {
  const allResources = getAllResources();
  const featuredResources = getFeaturedResources();
  
  // Exclude featured from latest to avoid immediate duplication
  const latestResources = allResources.filter(
    (res) => !featuredResources.find((f) => f.slug === res.slug)
  );

  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-32 pb-16 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Resources
            </h1>
            <p className="text-xl text-muted font-light leading-relaxed">
              Technical knowledge hub for infrastructure engineering, operational workloads, and enterprise hardware deployment.
            </p>
          </div>
        </div>
      </section>

      {/* BROWSE BY CATEGORY */}
      <section className="py-8 bg-surface border-b border-border overflow-x-auto">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 min-w-max">
            <span className="text-xs font-bold uppercase tracking-widest text-faint mr-4">
              Categories:
            </span>
            {CATEGORIES.map((cat) => {
              const catSlug = cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
              return (
                <Link 
                  key={cat} 
                  href={`/resources/category/${catSlug}`}
                  className="px-4 py-2 border border-border text-sm hover:border-primary hover:text-primary transition-colors cursor-pointer bg-background"
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED RESOURCES */}
      {featuredResources.length > 0 && (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-[2px] bg-primary"></div>
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Featured 
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.map((resource) => (
                <Link href={`/resources/${resource.slug}`} key={resource.slug} className="group border border-border bg-surface hover:border-primary/50 transition-colors flex flex-col">
                  <div className="aspect-video w-full overflow-hidden relative border-b border-border">
                    <img 
                      src={resource.coverImage} 
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                      {resource.category}
                    </span>
                    <h3 className="font-display text-lg font-bold mb-3 text-white">
                      {resource.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {resource.description}
                    </p>
                    <div className="text-xs text-faint flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <span>{new Date(resource.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <ArrowUpRight size={16} className="group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LATEST RESOURCES */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-[2px] bg-primary"></div>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Latest Releases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestResources.map((resource) => (
              <Link href={`/resources/${resource.slug}`} key={resource.slug} className="group border border-border bg-background hover:border-primary/50 transition-colors flex flex-col">
                <div className="aspect-video w-full overflow-hidden relative border-b border-border">
                  <img 
                    src={resource.coverImage} 
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                    {resource.category}
                  </span>
                  <h3 className="font-display text-lg font-bold mb-3 text-white">
                    {resource.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {resource.description}
                  </p>
                  <div className="text-xs text-faint flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <span>{new Date(resource.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <ArrowUpRight size={16} className="group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <section className="py-24 bg-surface text-center border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Planning an Infrastructure Project?
          </h2>
          <p className="text-muted mb-10 text-sm leading-relaxed">
            Whether you're deploying AI infrastructure, shared storage, workstations, or private cloud, our team can help design the right solution.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/solutions"
              className="bg-transparent border border-border hover:border-white text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all"
            >
              Explore Solutions
            </Link>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dim text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
