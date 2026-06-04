import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Engineering Workstations",
  description: "Threadripper and high-IPC workstations engineered for CAD, BIM, simulation, rendering, and professional visual pipelines.",
  alternates: { canonical: "/workstations" }
};
import { ArrowRight } from "lucide-react";

export default function Workstations() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center justify-center px-4 py-2 border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6 mx-auto">
            <span className="font-display text-[11px] font-bold tracking-[0.2em] uppercase text-white">
              Professional Workstation OEM
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Engineered For Professional Pipelines
          </h1>
          <p className="text-lg text-muted mb-10 font-light leading-relaxed mx-auto max-w-2xl">
            High-performance hardware for CAD, BIM, simulation, rendering, and AI acceleration. We spec workstations based on your exact software stack to prevent bottlenecks.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["SolidWorks", "Revit", "Blender", "Unreal Engine", "DaVinci Resolve", "Adobe Suite"].map(app => (
              <div key={app} className="flex flex-col items-center gap-2 group w-16">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-background border border-border group-hover:border-primary/50 transition-colors flex items-center justify-center shadow-md">
                  <img fetchpriority="high" decoding="async" 
                    src={`/images/icons/${app.toLowerCase().replace(' ', '-')}.png`} 
                    alt={app} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-[10px] font-bold text-muted group-hover:text-white transition-colors text-center tracking-wide uppercase">
                  {app}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dim text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            Get a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* CAD & BIM */}
            <div className="bg-background border border-border flex flex-col">
              <img loading="lazy" decoding="async" src="/images/workstations-engineering.jpg" alt="Engineering Setup" className="w-full h-72 object-cover border-b border-border opacity-80" />
              <div className="p-10">
                <h3 className="font-display text-2xl font-bold mb-4">CAD & BIM Workstations</h3>
                <p className="text-muted leading-relaxed text-sm mb-6">
                  Engineered for single-core frequency dependency. Optimal hardware selection for SolidWorks, Revit, and AutoCAD to ensure viewport smoothness and rapid regeneration of complex assemblies.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-faint border-t border-border pt-4">
                  Focus: High IPC / Certified Drivers
                </div>
              </div>
            </div>

            {/* Rendering */}
            <div className="bg-background border border-border flex flex-col">
              <img loading="lazy" decoding="async" src="/images/workstations-rendering.jpg" alt="Rendering Setup" className="w-full h-72 object-cover border-b border-border opacity-80" />
              <div className="p-10">
                <h3 className="font-display text-2xl font-bold mb-4">Simulation & Rendering</h3>
                <p className="text-muted leading-relaxed text-sm mb-6">
                  Built for massive multi-core throughput and high VRAM capacity. Threadripper and multi-GPU configurations targeting Blender, Unreal Engine, V-Ray, and DaVinci Resolve rendering pipelines.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-faint border-t border-border pt-4">
                  Focus: Core Count / PCIe Bandwidth
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
