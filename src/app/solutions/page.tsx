import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Infrastructure Solutions",
  description: "Explore our range of purpose-built infrastructure solutions including AI servers, CAD workstations, and TrueNAS storage arrays.",
  alternates: { canonical: "/solutions" }
};
import { ArrowRight, Cpu, HardDrive, MonitorPlay, ShieldCheck, Settings } from "lucide-react";

export default function Solutions() {
  return (
    <>
      <section className="pt-32 pb-16 border-b border-border bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Infrastructure Solutions
            </h1>
            <p className="text-muted text-lg font-light leading-relaxed">
              Engineered for specific operational workloads. We do not supply generic PCs; we build storage arrays, compute nodes, and workstations that keep businesses running.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 flex flex-col gap-32">
          
          {/* Solution 1: AI & GPU */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="text-primary" size={24} />
                <h2 className="font-display text-2xl font-bold">AI & GPU Infrastructure</h2>
              </div>
              <p className="text-muted leading-relaxed mb-6">
                Multi-GPU compute systems for AI inferencing, training, simulation, and accelerated workloads. Deploy local AI models with full ownership of hardware, compute, and data.
              </p>
              <ul className="grid grid-cols-2 gap-4 mb-8">
                <li className="flex items-center gap-2 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Inference servers</li>
                <li className="flex items-center gap-2 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Local LLM infrastructure</li>
                <li className="flex items-center gap-2 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Multi-GPU systems</li>
                <li className="flex items-center gap-2 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> CUDA workloads</li>
              </ul>
              <Link href="/ai-gpu" className="text-primary text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                View Configurations <ArrowRight size={16} />
              </Link>
            </div>
            <div className="order-1 lg:order-2 h-[400px] border border-border rounded overflow-hidden">
              <img src="/images/solutions-ai.jpg" alt="AI GPU Server" className="w-full h-full object-cover opacity-70" />
            </div>
          </div>

          {/* Solution 2: Storage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[400px] border border-border rounded overflow-hidden">
              <img src="/images/solutions-storage.jpg" alt="Enterprise Storage" className="w-full h-full object-cover opacity-70" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <HardDrive className="text-primary" size={24} />
                <h2 className="font-display text-2xl font-bold">NAS & Storage</h2>
              </div>
              <p className="text-muted leading-relaxed mb-6">
                Centralized shared storage systems with redundancy, backup automation, and multi-user access for media workflows, CAD files, and databases.
              </p>
              <ul className="grid grid-cols-2 gap-4 mb-8">
                <li className="flex items-center gap-2 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> RAID / ZFS Arrays</li>
                <li className="flex items-center gap-2 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Automated Snapshots</li>
                <li className="flex items-center gap-2 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Media workflows</li>
                <li className="flex items-center gap-2 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> User access control</li>
              </ul>
              <Link href="/storage" className="text-primary text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                View Configurations <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Solution 3: Workstations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <MonitorPlay className="text-primary" size={24} />
                <h2 className="font-display text-2xl font-bold">Engineering Workstations</h2>
              </div>
              <p className="text-muted leading-relaxed mb-6">
                Threadripper and professional workstation systems built specifically for CAD, rendering, BIM, simulation, and heavy visual pipelines.
              </p>
              <ul className="grid grid-cols-2 gap-4 mb-8">
                <li className="flex items-center gap-2 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Threadripper / RTX Pro</li>
                <li className="flex items-center gap-2 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Simulation & Rendering</li>
                <li className="flex items-center gap-2 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Unreal Engine / Blender</li>
                <li className="flex items-center gap-2 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> SolidWorks / CAD / BIM</li>
              </ul>
              <Link href="/workstations" className="text-primary text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                View Configurations <ArrowRight size={16} />
              </Link>
            </div>
            <div className="order-1 lg:order-2 h-[400px] border border-border rounded overflow-hidden">
              <img src="/images/solutions-workstation.jpg" alt="Workstation Setup" className="w-full h-full object-cover opacity-70" />
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface border-t border-border text-center">
        <h2 className="font-display text-3xl font-bold mb-6">Need a custom infrastructure plan?</h2>
        <Link href="/contact" className="inline-block bg-primary hover:bg-primary-dim text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all hover:-translate-y-0.5">
          Get Free Consultation
        </Link>
      </section>
    </>
  );
}
