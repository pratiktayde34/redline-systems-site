import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, ArrowLeft } from "lucide-react";
import { getResourceBySlug, getResourceSlugs, getRelatedResources, getAllResources, getFeaturedResources } from "@/lib/resources";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const slugs = getResourceSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const resolvedParams = await params;
    const resource = getResourceBySlug(resolvedParams.slug);
    return {
      title: resource.seoTitle,
      description: resource.seoDescription,
      openGraph: {
        title: resource.seoTitle,
        description: resource.seoDescription,
        images: [resource.coverImage],
        type: 'article',
        publishedTime: resource.date,
      }
    };
  } catch (e) {
    return {
      title: "Resource Not Found",
    }
  }
}

// Custom components for MDX matching the design system
const mdxComponents = {
  h1: (props: any) => <h1 className="font-display text-4xl font-bold tracking-tight mb-6 mt-12 text-white" {...props} />,
  h2: (props: any) => <h2 className="font-display text-2xl font-bold tracking-tight mb-4 mt-10 text-white border-b border-border pb-2" {...props} />,
  h3: (props: any) => <h3 className="font-display text-xl font-bold tracking-tight mb-4 mt-8 text-white" {...props} />,
  p: (props: any) => <p className="text-white leading-relaxed mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 text-white space-y-2 marker:text-primary" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 text-white space-y-2 marker:text-primary" {...props} />,
  li: (props: any) => <li className="pl-2" {...props} />,
  a: (props: any) => <a className="text-primary hover:text-white underline underline-offset-4 decoration-primary/50 transition-colors" {...props} />,
  strong: (props: any) => <strong className="text-white font-bold" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-2 border-primary pl-6 py-2 italic text-faint bg-surface/50 mb-6" {...props} />,
  img: (props: any) => (
    <span className="block my-10">
      <img className="w-full h-auto object-cover rounded-sm border border-border" loading="lazy" decoding="async" {...props} />
    </span>
  ),
  code: (props: any) => <code className="bg-surface px-1.5 py-0.5 text-sm font-mono text-white border border-border" {...props} />,
  pre: (props: any) => <pre className="bg-[#0a0a0a] p-6 overflow-x-auto text-sm font-mono border border-border mb-6 text-gray-300" {...props} />
};

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  let resource;
  const resolvedParams = await params;
  try {
    resource = getResourceBySlug(resolvedParams.slug);
  } catch (e) {
    notFound();
  }

  const allResources = getAllResources();
  const featuredResources = getFeaturedResources().filter(r => r.slug !== resource.slug).slice(0, 3);
  const latestResources = allResources.filter(r => r.slug !== resource.slug).slice(0, 3);
  const similarCategory = getRelatedResources(resource.category, resource.slug).slice(0, 3);

  // Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.seoTitle,
    description: resource.seoDescription,
    image: [resource.coverImage],
    datePublished: resource.date,
    author: {
      "@type": "Organization",
      "name": "Redline Systems"
    }
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://redlinesystems.in/" },
      { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://redlinesystems.in/resources" },
      { "@type": "ListItem", "position": 3, "name": resource.title, "item": `https://redlinesystems.in/resources/${resource.slug}` }
    ]
  };

  const SidebarWidget = ({ title, items, viewMoreLink }: { title: string, items: any[], viewMoreLink: string }) => {
    if (!items || items.length === 0) return null;
    
    return (
      <div className="bg-surface border border-border p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-4 h-[2px] bg-primary"></div>
          <h3 className="font-display text-lg font-bold text-white tracking-tight">{title}</h3>
        </div>
        
        <div className="flex flex-col gap-6">
          {items.map(item => (
            <Link href={`/resources/${item.slug}`} key={item.slug} className="group flex gap-4 items-start">
              <div className="w-20 h-20 shrink-0 overflow-hidden border border-border bg-background">
                <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex flex-col py-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{item.category}</span>
                <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-1">{item.title}</h4>
                <span className="text-[10px] text-faint">{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </Link>
          ))}
        </div>
        
        <Link href={viewMoreLink} className="mt-6 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-faint hover:text-white transition-colors pt-4 border-t border-border/50">
          View All <ArrowRight size={14} />
        </Link>
      </div>
    );
  };

  const catSlug = resource.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />

      {/* ARTICLE */}
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
            
            {/* MAIN CONTENT COLUMN */}
            <div className="lg:w-2/3 max-w-3xl mx-auto lg:mx-0">
              <Link href="/resources" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-faint hover:text-white transition-colors mb-12">
                <ArrowLeft size={14} /> Back to Resources
              </Link>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20">
                  {resource.category}
                </span>
                <span className="text-sm text-faint">
                  {new Date(resource.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-white leading-tight">
                {resource.title}
              </h1>
              
              <p className="text-xl text-white font-light leading-relaxed mb-12">
                {resource.description}
              </p>

              <div className="aspect-[21/9] w-full overflow-hidden mb-16 border border-border">
                <img 
                  src={resource.coverImage} 
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <article className="prose-container">
                <MDXRemote source={resource.content} components={mdxComponents} />
              </article>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="lg:w-1/3 flex flex-col gap-8 sticky top-32 self-start">
              <SidebarWidget title="Similar Category" items={similarCategory} viewMoreLink={`/resources/category/${catSlug}`} />
              <SidebarWidget title="Featured" items={featuredResources} viewMoreLink="/resources" />
              <SidebarWidget title="Latest Releases" items={latestResources} viewMoreLink="/resources" />
            </aside>

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
