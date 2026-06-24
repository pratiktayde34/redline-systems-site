import Link from "next/link";
import { ArrowRight, Cpu, HardDrive, MonitorPlay, CheckCircle2, Server, Check } from "lucide-react";
import HeroFlashlight from "@/components/HeroFlashlight";

export default function Home() {
  return (
    <>
      {/* SHOWSTOPPER HERO SECTION */}
      <HeroFlashlight className="min-h-[90vh] flex items-center justify-center pt-24 pb-16 bg-black">
        {/* Darkened Background */}
        <div className="absolute inset-0 z-0">
          <img fetchPriority="high" decoding="async" 
            src="/images/hero-bg.jpg" 
            alt="Data Center" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        </div>

        {/* Revealed Bright Background (Spotlight Effect) */}
        <div 
          className="hidden md:block pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            opacity: 'var(--spotlight-opacity)',
            WebkitMaskImage: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 60%)`,
            maskImage: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 60%)`,
          }}
        >
          <img loading="lazy" decoding="async" 
            src="/images/hero-bg.jpg" 
            alt="Data Center" 
            className="w-full h-full object-cover opacity-40 mix-blend-lighten" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              On-Prem Infra for <span className="text-primary">Mission-Critical</span> Workloads
            </h1>
            
            <p className="text-lg text-muted mb-10 max-w-xl font-light leading-relaxed">
              Purpose-built compute, storage, and AI systems for businesses, creators, educational institutes and power users.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dim text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link
                href="/solutions"
                className="border border-primary text-primary hover:bg-primary hover:text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                Explore Solutions
              </Link>
            </div>
          </div>


        </div>
      </HeroFlashlight>

      {/* TRUST / ECOSYSTEM SECTION */}
      <section className="py-12 border-y border-border bg-surface overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="shrink-0 font-display text-xs font-bold tracking-[0.2em] uppercase text-faint border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-8">
              Built Around<br />Enterprise Platforms
            </div>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-16 gap-y-12">
              <img loading="lazy" decoding="async" src="/logos/nvidia.svg" alt="NVIDIA" className="h-8 w-auto object-contain" />
              <img loading="lazy" decoding="async" src="/logos/amd.svg" alt="AMD EPYC" className="h-8 w-auto object-contain" />
              <img loading="lazy" decoding="async" src="/logos/intel.svg" alt="Intel Xeon" className="h-8 w-auto object-contain" />
              <img loading="lazy" decoding="async" src="/logos/truenas.svg" alt="TrueNAS" className="h-8 w-auto object-contain" />
              <img loading="lazy" decoding="async" src="/logos/supermicro.svg?v=2" alt="Supermicro" className="h-8 w-auto object-contain" />
              <img loading="lazy" decoding="async" src="/logos/proxmox.svg" alt="Proxmox" className="h-8 w-auto object-contain" />
              <img loading="lazy" decoding="async" src="/logos/openshift.svg" alt="OpenShift" className="h-8 w-auto object-contain" />
              <img loading="lazy" decoding="async" src="/logos/vmware.svg" alt="VMware" className="h-8 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* WORKLOADS WE SUPPORT */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-4">Built for Professional Workloads</h2>
            <p className="text-muted max-w-2xl mx-auto">We build machines certified and optimized for professional pipelines and intensive compute.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {[
              "SOLIDWORKS", "Revit", "ANSYS", "MATLAB", 
              "DaVinci Resolve", "PyTorch", "Fusion"
            ].map(app => (
              <div key={app} className="flex flex-col items-center gap-3 group w-20">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-background border border-border group-hover:border-primary/50 transition-colors flex items-center justify-center shadow-md">
                  <img fetchPriority="high" decoding="async" 
                    src={`/images/icons/${app.toLowerCase().replace(/ /g, '-')}.png`} 
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

      {/* CORE SOLUTIONS */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Solutions
            </h2>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/ai-gpu" className="relative p-10 group overflow-hidden border border-border hover:border-primary/50 transition-colors flex flex-col min-h-[320px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: 'url("/images/ai-gpu-card.jpg")' }}
              />
              <div className="absolute inset-0 bg-black/85 group-hover:bg-black/75 transition-colors duration-300" />
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300 z-10"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <Cpu className="text-primary mb-6" size={32} />
                <h3 className="font-display text-xl font-bold mb-4 text-white">AI & GPU Infrastructure</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Multi-GPU compute systems for AI inferencing, training, simulation, and accelerated workloads.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-primary transition-colors flex items-center gap-2 mt-auto">
                  Explore <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            <Link href="/storage" className="relative p-10 group overflow-hidden border border-border hover:border-primary/50 transition-colors flex flex-col min-h-[320px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: 'url("/images/storage-card.jpg")' }}
              />
              <div className="absolute inset-0 bg-black/85 group-hover:bg-black/75 transition-colors duration-300" />
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300 z-10"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <HardDrive className="text-primary mb-6" size={32} />
                <h3 className="font-display text-xl font-bold mb-4 text-white">Centralized NAS & Storage</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  High-capacity shared storage systems with redundancy, backup automation, and multi-user access.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-primary transition-colors flex items-center gap-2 mt-auto">
                  Explore <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            <Link href="/workstations" className="relative p-10 group overflow-hidden border border-border hover:border-primary/50 transition-colors flex flex-col min-h-[320px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: 'url("/images/workstations-card.jpg")' }}
              />
              <div className="absolute inset-0 bg-black/85 group-hover:bg-black/75 transition-colors duration-300" />
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300 z-10"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <MonitorPlay className="text-primary mb-6" size={32} />
                <h3 className="font-display text-xl font-bold mb-4 text-white">Engineering Workstations</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Threadripper and professional workstation systems built for CAD, rendering, BIM, and simulation workloads.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-primary transition-colors flex items-center gap-2 mt-auto">
                  Explore <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            <Link href="/homelab" className="relative p-10 group overflow-hidden border border-border hover:border-primary/50 transition-colors flex flex-col min-h-[320px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: 'url("/images/solutions-homelab.png")' }}
              />
              <div className="absolute inset-0 bg-black/85 group-hover:bg-black/75 transition-colors duration-300" />
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300 z-10"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <Server className="text-primary mb-6" size={32} />
                <h3 className="font-display text-xl font-bold mb-4 text-white">Custom Homelabs</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Take back control of your data with self-hosted media, storage, and application infrastructure.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-primary transition-colors flex items-center gap-2 mt-auto">
                  Explore <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* REAL DEPLOYMENT EXAMPLES */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-4">Our Deployments</h2>
            <p className="text-muted max-w-2xl mx-auto">Systems engineered, built, and deployed on-site across Maharashtra.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-6 border border-border flex items-start gap-4 bg-surface">
              <Check className="text-primary shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold mb-2">100TB Media Production NAS</h4>
                <p className="text-sm text-muted">10GbE network, ZFS storage arrays, editing direct from NAS.</p>
              </div>
            </div>
            <div className="p-6 border border-border flex items-start gap-4 bg-surface">
              <Check className="text-primary shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold mb-2">Multi-GPU AI Inference Server</h4>
                <p className="text-sm text-muted">Dual EPYC processors, 4x GPUs for local LLM deployment.</p>
              </div>
            </div>
            <div className="p-6 border border-border flex items-start gap-4 bg-surface">
              <Check className="text-primary shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold mb-2">Engineering CAD Workstations</h4>
                <p className="text-sm text-muted">High clock-speed nodes for SolidWorks and AutoCAD teams.</p>
              </div>
            </div>
            <div className="p-6 border border-border flex items-start gap-4 bg-surface">
              <Check className="text-primary shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold mb-2">Rendering Nodes</h4>
                <p className="text-sm text-muted">High core-count Threadripper systems for Blender & VRay.</p>
              </div>
            </div>
            <div className="p-6 border border-border flex items-start gap-4 bg-surface">
              <Check className="text-primary shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold mb-2">Educational Compute Labs</h4>
                <p className="text-sm text-muted">Virtualized GPU resources shared across university classrooms.</p>
              </div>
            </div>
            <div className="p-6 border border-border flex items-start gap-4 bg-surface">
              <Check className="text-primary shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold mb-2">Backup & Disaster Recovery</h4>
                <p className="text-sm text-muted">Off-site replication and automated snapshot management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPLOYMENT WORKFLOW */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <h2 className="font-display text-3xl font-bold tracking-tight mb-6">
                  How We Deploy
                </h2>
                <p className="text-muted leading-relaxed mb-8 text-sm">
                  Operationally reliable infrastructure requires rigorous planning. We do not supply off-the-shelf bundles; every deployment follows a strict technical methodology.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-colors"
                >
                  Start The Process <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-border p-8 bg-background">
                  <div className="font-display text-4xl font-bold text-[#444] mb-4">0<span className="text-primary">1</span></div>
                  <h3 className="font-bold mb-2">Requirement Analysis</h3>
                  <p className="text-sm text-muted">Assessing workload requirements, storage growth, user concurrency, software stack, and operational priorities.</p>
                </div>
                <div className="border border-border p-8 bg-background">
                  <div className="font-display text-4xl font-bold text-[#444] mb-4">0<span className="text-primary">2</span></div>
                  <h3 className="font-bold mb-2">Infrastructure Planning</h3>
                  <p className="text-sm text-muted">Planning hardware, networking, backup strategies, power delivery, airflow, and architectural topologies.</p>
                </div>
                <div className="border border-border p-8 bg-background">
                  <div className="font-display text-4xl font-bold text-[#444] mb-4">0<span className="text-primary">3</span></div>
                  <h3 className="font-bold mb-2">Hardware Procurement</h3>
                  <p className="text-sm text-muted">Sourcing enterprise-grade components from trusted supply chains specific to the planned build.</p>
                </div>
                <div className="border border-border p-8 bg-background">
                  <div className="font-display text-4xl font-bold text-[#444] mb-4">0<span className="text-primary">4</span></div>
                  <h3 className="font-bold mb-2">Deployment & Configuration</h3>
                  <p className="text-sm text-muted">Physical assembly, OS installation, network configuration, storage pool creation, and security hardening.</p>
                </div>
                <div className="border border-border p-8 bg-background">
                  <div className="font-display text-4xl font-bold text-[#444] mb-4">0<span className="text-primary">5</span></div>
                  <h3 className="font-bold mb-2">Testing & Validation</h3>
                  <p className="text-sm text-muted">Burn-in testing, throughput verification, failure simulation, and workload-specific benchmarks.</p>
                </div>
                <div className="border border-border p-8 bg-background">
                  <div className="font-display text-4xl font-bold text-[#444] mb-4">0<span className="text-primary">6</span></div>
                  <h3 className="font-bold mb-2">Monitoring & Expansion</h3>
                  <p className="text-sm text-muted">Ongoing health checks, capacity planning, firmware updates, and infrastructure scaling support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-background relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Schedule a Free Infrastructure Assessment
          </h2>
          <p className="text-muted mb-10 text-sm">
            Outline your current setup, operational bottlenecks, or planned workloads. We will recommend an architecture built specifically for your use case.
          </p>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dim text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
