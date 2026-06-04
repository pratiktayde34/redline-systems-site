import { Gauge, Cpu, ShieldCheck, Lock, CalendarClock } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Building reliable infrastructure for businesses, professionals and technology enthusiasts.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-black min-h-[60vh] flex items-center border-b border-border">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <img src="/logo.png" alt="Redline Systems Logo" className="h-16 w-auto mb-8 opacity-90" loading="eager" fetchPriority="high" />
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-white">
            About <span className="text-primary">Red</span>line Systems
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl text-balance mb-12 font-light">
            Building reliable infrastructure for businesses, professionals and technology enthusiasts.
          </p>
          <div className="max-w-2xl bg-surface/50 border border-border p-8 backdrop-blur-sm text-left shadow-2xl">
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              <span className="text-primary">Red</span>line Systems was founded with a simple belief: technology should be designed around <span className="text-white font-medium">real-world requirements</span>, not marketing specifications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4 font-light">
              We help individuals and organizations make informed infrastructure decisions by focusing on performance, reliability, scalability and long-term value.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
            <span className="font-display text-[11px] font-bold tracking-[0.2em] uppercase text-white">
              Why We Started
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight mb-10">Our Story</h2>
          
          <div className="prose prose-invert prose-lg max-w-none text-muted">
            <p>
              The infrastructure industry is often filled with confusing specifications, aggressive sales tactics and one-size-fits-all recommendations.
            </p>
            <p className="text-white font-medium text-xl my-8 pl-6 border-l-2 border-primary">
              We started <span className="text-primary">Red</span>line Systems to provide a different approach.
            </p>
            <p>
              Instead of pushing products, we focus on understanding workloads, requirements and future growth before recommending solutions.
            </p>
            <p>
              Whether it's a workstation for design, a server for virtualization, a storage platform for backups, or infrastructure for AI workloads, we believe every deployment should be purposeful and engineered for the task at hand.
            </p>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-4">What We Believe</h2>
            <p className="text-muted max-w-2xl mx-auto">Our core philosophy drives every recommendation and deployment we make.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-8 border border-border bg-background hover:border-primary/50 transition-colors group">
              <Gauge className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-bold text-lg mb-3 text-white">Performance Over Marketing</h3>
              <p className="text-sm text-muted leading-relaxed">
                We prioritize real-world performance and suitability over marketing claims.
              </p>
            </div>

            <div className="p-8 border border-border bg-background hover:border-primary/50 transition-colors group">
              <Cpu className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-bold text-lg mb-3 text-white">Workload-First Thinking</h3>
              <p className="text-sm text-muted leading-relaxed">
                Infrastructure should be designed around exactly what it needs to do.
              </p>
            </div>

            <div className="p-8 border border-border bg-background hover:border-primary/50 transition-colors group">
              <ShieldCheck className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-bold text-lg mb-3 text-white">Reliability Matters</h3>
              <p className="text-sm text-muted leading-relaxed">
                Downtime is expensive. Stability is not optional in our deployments.
              </p>
            </div>

            <div className="p-8 border border-border bg-background hover:border-primary/50 transition-colors group lg:col-span-1 md:col-span-2">
              <Lock className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-bold text-lg mb-3 text-white">Ownership & Control</h3>
              <p className="text-sm text-muted leading-relaxed">
                We believe users should have the freedom to own and control their infrastructure without mandatory cloud dependencies.
              </p>
            </div>

            <div className="p-8 border border-border bg-background hover:border-primary/50 transition-colors group lg:col-span-2">
              <CalendarClock className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-bold text-lg mb-3 text-white">Long-Term Thinking</h3>
              <p className="text-sm text-muted leading-relaxed">
                Technology decisions should still make sense years from now, with clear upgrade paths and maintainability in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight mb-16">What Makes <span className="text-primary">Red</span>line Different</h2>
          
          <div className="space-y-6 text-xl md:text-3xl font-display font-bold text-muted mb-16">
            <p>We don't believe in selling the most <span className="line-through opacity-50 decoration-2">expensive</span> solution.</p>
            <p>We don't believe in selling the <span className="line-through opacity-50 decoration-2">cheapest</span> solution.</p>
            <p className="text-3xl md:text-5xl text-primary mt-8">We believe in building the <span className="text-white">right</span> solution.</p>
          </div>
          
          <div className="max-w-2xl mx-auto text-muted space-y-6 text-lg">
            <p>
              Every recommendation is made with careful consideration for performance, scalability, maintainability and budget.
            </p>
            <p>
              Our ultimate goal is to become a trusted technology partner rather than simply a hardware supplier.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & ROAD AHEAD */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <div className="inline-flex items-center px-4 py-2 border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
                <span className="font-display text-[11px] font-bold tracking-[0.2em] uppercase text-white">
                  Where We Are Going
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight mb-6">Our Vision</h2>
              <div className="text-muted space-y-4">
                <p>
                  To make professional-grade infrastructure accessible to businesses, creators, developers and technology enthusiasts.
                </p>
                <p>
                  From enterprise servers and storage platforms to self-hosted infrastructure and AI systems, our vision is to help people build technology they can depend on.
                </p>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center px-4 py-2 border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
                <span className="font-display text-[11px] font-bold tracking-[0.2em] uppercase text-white">
                  The Future
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight mb-6">The Road Ahead</h2>
              <div className="text-muted space-y-4">
                <p>
                  Technology continues to evolve rapidly. Virtualization, artificial intelligence, software-defined infrastructure and self-hosting are changing how individuals and organizations use technology.
                </p>
                <p>
                  <span className="text-primary">Red</span>line Systems aims to grow alongside these changes while remaining committed to practical engineering, honest recommendations and long-term customer relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-background text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Let's Build Something Reliable
          </h2>
          <p className="text-muted mb-10 text-sm md:text-base">
            Whether you're planning your first deployment or expanding existing infrastructure, we'd be happy to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dim text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="border border-border bg-surface hover:bg-border text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
