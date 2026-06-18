import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { getResourcesByCategory } from "@/lib/resources";

const CATEGORY_MAP: Record<string, string> = {
  "ai-infrastructure": "AI Infrastructure",
  "storage-nas": "Storage & NAS",
  "professional-workstations": "Professional Workstations",
  "private-infrastructure": "Private Infrastructure",
  "industry-guides": "Industry Guides"
};

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const categoryName = CATEGORY_MAP[resolvedParams.slug] || "Category";
  return {
    title: `${categoryName} Resources | Redline Systems`,
    description: `Explore our latest resources and guides on ${categoryName}.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const categoryName = CATEGORY_MAP[resolvedParams.slug];
  
  if (!categoryName) {
    return <div className="pt-32 pb-32 text-center text-white">Category not found</div>;
  }

  const resources = getResourcesByCategory(categoryName);

  return (
    <>
      <section className="pt-32 pb-16 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <Link href="/resources" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-faint hover:text-white transition-colors mb-8">
              <ArrowLeft size={14} /> Back to Resources
            </Link>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {categoryName}
            </h1>
            <p className="text-xl text-muted font-light leading-relaxed">
              Explore our latest resources and guides on {categoryName}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          {resources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
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
          ) : (
            <div className="text-center py-16 px-6 border border-border bg-background max-w-2xl mx-auto">
              <h3 className="font-display text-2xl font-bold text-white mb-4">Check back soon</h3>
              <p className="text-muted mb-8">We are currently preparing detailed resources and guides for {categoryName}.</p>
              <Link href="/resources" className="bg-primary hover:bg-primary-dim text-white text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all inline-block">
                Browse All Resources
              </Link>
            </div>
          )}
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
