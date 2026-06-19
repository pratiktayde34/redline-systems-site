import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, Cpu, Zap, Database, 
  HardDrive, ThermometerSnowflake, Maximize, 
  Settings, ShieldCheck, Scale, Wrench, Users,
  MonitorPlay, Boxes, Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Engineering Workstations | Redline Systems",
  description: "Threadripper and high-IPC workstations engineered for CAD, BIM, simulation, rendering, and professional visual pipelines.",
  alternates: { canonical: "/workstations" }
};

export default function Workstations() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-24 overflow-hidden bg-background border-b border-border">
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
            We engineer professional compute platforms optimized for specific workflows. High-performance hardware for CAD, BIM, simulation, rendering, and AI acceleration built precisely around your software stack.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dim text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WORKSTATION CATEGORIES */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Workflow-Specific Platforms</h2>
            <p className="text-muted text-lg">We configure hardware based on the actual mathematical requirements of your industry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* CAD & BIM */}
            <div className="bg-background border border-border flex flex-col hover:border-primary/30 transition-colors">
              <img loading="lazy" decoding="async" src="/images/workstations-engineering.jpg" alt="Engineering Setup" className="w-full h-64 object-cover border-b border-border opacity-80" />
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-bold mb-4">CAD & BIM Workstations</h3>
                <p className="text-muted leading-relaxed text-sm mb-6 flex-grow">
                  Engineered for single-core frequency dependency. Optimal hardware selection for SolidWorks, Revit, and AutoCAD to ensure viewport smoothness and rapid regeneration of complex assemblies.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-primary pt-4">
                  Focus: High IPC / Certified Drivers
                </div>
              </div>
            </div>

            {/* Rendering */}
            <div className="bg-background border border-border flex flex-col hover:border-primary/30 transition-colors">
              <img loading="lazy" decoding="async" src="/images/cad-workstation-solidworks-revit-autocad.jpg" alt="Rendering Setup" className="w-full h-64 object-cover border-b border-border opacity-80" />
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-bold mb-4">Simulation & Rendering</h3>
                <p className="text-muted leading-relaxed text-sm mb-6 flex-grow">
                  Built for massive multi-core throughput and high VRAM capacity. Threadripper and multi-GPU configurations targeting Blender, Unreal Engine, V-Ray, and DaVinci Resolve rendering pipelines.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-primary pt-4">
                  Focus: Core Count / PCIe Bandwidth
                </div>
              </div>
            </div>

            {/* AI & Data Science */}
            <div className="bg-background border border-border flex flex-col hover:border-primary/30 transition-colors">
              <img loading="lazy" decoding="async" src="/images/ai-gpu-card.jpg" alt="AI Workstation Setup" className="w-full h-64 object-cover border-b border-border opacity-80" />
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-bold mb-4">AI & Data Science Workstations</h3>
                <p className="text-muted leading-relaxed text-sm mb-6 flex-grow">
                  Built for machine learning, local AI inference, model development, and GPU accelerated workloads. Scale memory and PCIe lanes to fit massive parameters locally.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-primary pt-4">
                  Focus: CUDA / VRAM / Memory Capacity
                </div>
              </div>
            </div>

            {/* Media & Content Creation */}
            <div className="bg-background border border-border flex flex-col hover:border-primary/30 transition-colors">
              <img loading="lazy" decoding="async" src="/images/workstations-card.jpg" alt="Media Production Setup" className="w-full h-64 object-cover border-b border-border opacity-80" />
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-bold mb-4">Media & Content Creation</h3>
                <p className="text-muted leading-relaxed text-sm mb-6 flex-grow">
                  Optimized for video editing, motion graphics, color grading, and content production. Engineered to chew through 4K and 8K raw timelines without stuttering.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-primary pt-4">
                  Focus: GPU Acceleration / High-Speed Scratch Disks
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY PROFESSIONAL WORKSTATIONS */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Why Professional Workstations?</h2>
            <p className="text-muted text-lg max-w-2xl">Workstation engineering is fundamentally different from building a gaming PC. We prioritize stability and mathematical accuracy over synthetic benchmark scores.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 border border-border bg-surface hover:border-primary/30 transition-colors">
              <Settings className="text-primary mb-4" size={24} />
              <h3 className="font-bold text-white mb-2">Application Optimized</h3>
              <p className="text-muted text-sm leading-relaxed">Systems are sized according to actual software requirements, ensuring you don't overspend on hardware your software cannot utilize.</p>
            </div>
            <div className="p-8 border border-border bg-surface hover:border-primary/30 transition-colors">
              <ShieldCheck className="text-primary mb-4" size={24} />
              <h3 className="font-bold text-white mb-2">Reliability First</h3>
              <p className="text-muted text-sm leading-relaxed">Absolute stability takes priority over overclocking. We utilize enterprise-grade components built to run at 100% load 24/7 without crashing.</p>
            </div>
            <div className="p-8 border border-border bg-surface hover:border-primary/30 transition-colors">
              <Scale className="text-primary mb-4" size={24} />
              <h3 className="font-bold text-white mb-2">Balanced Architecture</h3>
              <p className="text-muted text-sm leading-relaxed">CPU, GPU, memory, storage, and networking must be engineered together. A single bottleneck can throttle the entire system.</p>
            </div>
            <div className="p-8 border border-border bg-surface hover:border-primary/30 transition-colors">
              <Wrench className="text-primary mb-4" size={24} />
              <h3 className="font-bold text-white mb-2">Long-Term Serviceability</h3>
              <p className="text-muted text-sm leading-relaxed">Built with maintenance, upgrades, and lifecycle planning in mind. Standardized chassis layouts that are easy to access and upgrade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOFTWARE PLATFORMS */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Software Platforms We Design For</h2>
            <p className="text-muted">We build machines certified and optimized for industry-standard applications.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {[
              "SolidWorks", "AutoCAD", "Revit", "ANSYS", "MATLAB", "CATIA", 
              "Blender", "Unreal Engine", "PyTorch", "TensorFlow", "DaVinci Resolve"
            ].map(app => (
              <div key={app} className="flex flex-col items-center gap-3 group w-20">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-background border border-border group-hover:border-primary/50 transition-colors flex items-center justify-center shadow-md">
                  <img fetchPriority="high" decoding="async" 
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
        </div>
      </section>

      {/* 5. TYPICAL WORKLOADS */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Typical Workloads</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="p-6 border border-border bg-surface">
              <Boxes className="text-primary mb-4" size={24} />
              <h3 className="font-bold text-white mb-4">CAD & BIM</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted">
                <li>• Revit</li>
                <li>• AutoCAD</li>
                <li>• SolidWorks</li>
              </ul>
            </div>
            <div className="p-6 border border-border bg-surface">
              <MonitorPlay className="text-primary mb-4" size={24} />
              <h3 className="font-bold text-white mb-4">Rendering</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted">
                <li>• Blender</li>
                <li>• V-Ray</li>
                <li>• Unreal Engine</li>
              </ul>
            </div>
            <div className="p-6 border border-border bg-surface">
              <Activity className="text-primary mb-4" size={24} />
              <h3 className="font-bold text-white mb-4">Simulation</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted">
                <li>• CFD</li>
                <li>• FEA</li>
                <li>• Engineering Analysis</li>
              </ul>
            </div>
            <div className="p-6 border border-border bg-surface">
              <Database className="text-primary mb-4" size={24} />
              <h3 className="font-bold text-white mb-4">AI Development</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted">
                <li>• PyTorch</li>
                <li>• TensorFlow</li>
                <li>• CUDA</li>
              </ul>
            </div>
            <div className="p-6 border border-border bg-surface">
              <MonitorPlay className="text-primary mb-4" size={24} />
              <h3 className="font-bold text-white mb-4">Video Production</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted">
                <li>• Premiere Pro</li>
                <li>• DaVinci Resolve</li>
                <li>• After Effects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING PRINCIPLES */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Engineering Principles</h2>
            <p className="text-muted text-lg max-w-2xl">Every component is scrutinized and selected for its contribution to overall system throughput.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-6 bg-background border border-border hover:border-primary/30 transition-colors">
              <Cpu className="text-primary shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white mb-1">CPU Performance</h4>
                <p className="text-muted text-sm leading-relaxed">High-frequency CPUs selected specifically for lightly threaded applications to maximize IPC.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-background border border-border hover:border-primary/30 transition-colors">
              <Zap className="text-primary shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white mb-1">GPU Acceleration</h4>
                <p className="text-muted text-sm leading-relaxed">Massive parallel compute for workloads benefiting from CUDA, OpenCL, and GPU rendering.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-background border border-border hover:border-primary/30 transition-colors">
              <Database className="text-primary shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white mb-1">Memory Capacity</h4>
                <p className="text-muted text-sm leading-relaxed">High-density ECC and non-ECC memory designed for large projects, simulations, and datasets.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-background border border-border hover:border-primary/30 transition-colors">
              <HardDrive className="text-primary shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white mb-1">High-Speed Storage</h4>
                <p className="text-muted text-sm leading-relaxed">Direct-attached NVMe storage arrays optimized for enormous project files and cache workloads.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-background border border-border hover:border-primary/30 transition-colors">
              <ThermometerSnowflake className="text-primary shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white mb-1">Thermal Design</h4>
                <p className="text-muted text-sm leading-relaxed">Industrial cooling systems that guarantee stable operation and prevent thermal throttling under sustained load.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-background border border-border hover:border-primary/30 transition-colors">
              <Maximize className="text-primary shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white mb-1">Expandability</h4>
                <p className="text-muted text-sm leading-relaxed">Motherboards and chassis that offer clear growth paths for future GPUs, memory, and storage upgrades.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">Who These Systems Are Built For</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Architecture Firms", "Interior Designers", "Engineering Teams", "Manufacturing", "Research Labs", "Educational Institutes", "Studios & Creators", "AI Startups"].map((industry, idx) => (
              <div key={idx} className="bg-surface border border-border p-6 text-center hover:border-primary/30 transition-colors">
                <Users className="text-primary mx-auto mb-3 opacity-50" size={24} />
                <span className="font-bold text-sm text-white">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WORKSTATION VS GAMING PC */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Workstation vs Gaming PC</h2>
            <p className="text-muted text-lg">Understand the difference between consumer-grade entertainment hardware and professional revenue-generating infrastructure.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-primary text-white font-display text-xl w-1/2">Professional Workstation</th>
                  <th className="p-4 border-b border-border text-muted font-display text-xl w-1/2">Gaming PC</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border/50 hover:bg-background/50">
                  <td className="p-4 font-bold text-white flex items-center gap-3"><CheckCircle2 className="text-primary" size={16} /> Application-focused</td>
                  <td className="p-4 text-muted">Game-focused</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-background/50">
                  <td className="p-4 font-bold text-white flex items-center gap-3"><CheckCircle2 className="text-primary" size={16} /> Reliability</td>
                  <td className="p-4 text-muted">Peak FPS</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-background/50">
                  <td className="p-4 font-bold text-white flex items-center gap-3"><CheckCircle2 className="text-primary" size={16} /> Certified Drivers (ISV)</td>
                  <td className="p-4 text-muted">Consumer / Beta Drivers</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-background/50">
                  <td className="p-4 font-bold text-white flex items-center gap-3"><CheckCircle2 className="text-primary" size={16} /> Long-term Deployment</td>
                  <td className="p-4 text-muted">Personal Use</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-background/50">
                  <td className="p-4 font-bold text-white flex items-center gap-3"><CheckCircle2 className="text-primary" size={16} /> Predictable Sustained Performance</td>
                  <td className="p-4 text-muted">Spiky Benchmark Performance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="bg-surface border border-border p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">Need a Workstation Designed Around Your Software?</h2>
              <p className="text-lg text-muted">
                Redline designs systems based on actual workflows, datasets, and application requirements rather than generic specifications.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row shrink-0 gap-4 w-full md:w-auto">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dim text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all hover:-translate-y-0.5 inline-flex items-center justify-center text-center gap-2"
              >
                Request Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
