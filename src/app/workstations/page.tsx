import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Workstations() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-primary"></div>
            <span className="font-display text-xs font-bold tracking-[0.2em] uppercase text-primary">
              Professional Workstation OEM
            </span>
            <div className="w-8 h-[2px] bg-primary"></div>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Engineered For Professional Pipelines
          </h1>
          <p className="text-lg text-muted mb-10 font-light leading-relaxed mx-auto max-w-2xl">
            High-performance hardware for CAD, BIM, simulation, rendering, and AI acceleration. We spec workstations based on your exact software stack to prevent bottlenecks.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["SolidWorks", "Revit", "Blender", "Unreal Engine", "DaVinci Resolve", "Adobe Suite"].map(tag => (
              <span key={tag} className="px-3 py-1 border border-border bg-surface text-xs font-bold tracking-widest uppercase text-muted">
                {tag}
              </span>
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
              <img src="/images/workstations-engineering.jpg" alt="Engineering Setup" className="w-full h-72 object-cover border-b border-border opacity-80" />
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
              <img src="/images/workstations-rendering.jpg" alt="Rendering Setup" className="w-full h-72 object-cover border-b border-border opacity-80" />
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
