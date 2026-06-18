"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function ArchiveClient({ allResources, categories }: { allResources: any[], categories: string[] }) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategories([initialCategory]);
    }
  }, [initialCategory]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) 
        ? prev.filter(c => c !== cat)
        : [...prev, cat]
    );
  };

  const filteredResources = selectedCategories.length === 0 
    ? allResources 
    : allResources.filter(res => selectedCategories.includes(res.category));

  const pageTitle = selectedCategories.length === 1 
    ? selectedCategories[0] 
    : selectedCategories.length > 1 
      ? "Filtered Articles" 
      : "All Articles";
      
  const pageSubtitle = selectedCategories.length === 1
    ? `Browse all articles, guides, and infrastructure deep-dives related to ${selectedCategories[0]}.`
    : selectedCategories.length > 1
      ? "Browse articles matching your selected categories."
      : "Browse our complete archive of technical guides and infrastructure deep-dives.";

  return (
    <>
      <section className="pt-32 pb-16 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <Link href="/resources" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-faint hover:text-white transition-colors mb-8">
              <ArrowLeft size={14} /> Back to Resources
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 transition-all duration-300">
              {pageTitle}
            </h1>
            <p className="text-xl text-muted font-light leading-relaxed transition-all duration-300">
              {pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface min-h-screen">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Filter */}
            <div className="lg:w-1/4 flex-shrink-0">
              <div className="sticky top-32">
                <h3 className="font-display text-lg font-bold mb-6 border-b border-border pb-4">Filter by Category</h3>
                <div className="flex flex-col gap-4">
                  {categories.map(cat => (
                    <label 
                      key={cat} 
                      className="flex items-center gap-3 cursor-pointer group"
                      onClick={() => toggleCategory(cat)}
                    >
                      <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${selectedCategories.includes(cat) ? 'bg-primary border-primary' : 'border-border group-hover:border-primary/50 bg-background'}`}>
                        {selectedCategories.includes(cat) && <span className="w-2.5 h-2.5 bg-white" />}
                      </div>
                      <span className={`text-sm ${selectedCategories.includes(cat) ? 'text-white font-bold' : 'text-muted group-hover:text-white transition-colors'}`}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
                
                {selectedCategories.length > 0 && (
                  <button 
                    onClick={() => setSelectedCategories([])}
                    className="mt-8 text-xs font-bold uppercase tracking-widest text-faint hover:text-white transition-colors"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>

            {/* Grid */}
            <div className="lg:w-3/4">
              {filteredResources.length === 0 ? (
                <div className="text-center py-24 border border-border bg-background">
                  <p className="text-muted">No articles found for the selected categories.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredResources.map((resource) => (
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
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
