import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, Server, Zap, Activity, 
  Database, Users, Terminal, Lock, Network, HardDrive, Layers
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI & GPU Server Infrastructure | Redline Systems",
  description: "Advanced multi-GPU compute nodes for local AI inferencing, LLMs, and scientific simulation. Engineered for complete data privacy and workload control.",
  alternates: { canonical: "/ai-gpu" }
};

export default function AIGPU() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-24 overflow-hidden bg-background border-b border-border">
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
              <span className="font-display text-[11px] font-bold tracking-[0.2em] uppercase text-white">
                Total Data Privacy & Compute Ownership
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              On-Premise Infrastructure for AI & Deep Learning
            </h1>
            <p className="text-lg text-muted mb-10 font-light leading-relaxed max-w-xl">
              Deploy local AI compute with complete ownership of hardware, models, and data. We engineer multi-GPU workstations, nodes, and servers optimized for intensive inference, training, and simulation workloads.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              {["PyTorch", "TensorFlow", "CUDA", "OpenCV", "Ollama", "vLLM"].map(app => (
                <div key={app} className="flex flex-col items-center gap-2 group w-16">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-background border border-border group-hover:border-primary/50 transition-colors flex items-center justify-center shadow-md">
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
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dim text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Request Consultation <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            <img loading="lazy" decoding="async" src="/images/ai-gpu-hero.jpg" alt="GPU Server internals" className="w-full h-full object-cover rounded border border-border shadow-2xl opacity-80" />
          </div>
        </div>
      </section>

      {/* 2. WORKLOADS WE SUPPORT */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Workloads We Accelerate</h2>
            <p className="text-muted text-lg max-w-2xl">Hardware built specifically for the demands of modern AI, computer vision, and scientific computing.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "LLM Inference", desc: "High VRAM density systems optimized for vLLM, Llama.cpp, and serving open-source models with minimal latency." },
              { title: "Fine-Tuning", desc: "Multi-GPU nodes designed for LoRA and QLoRA fine-tuning workflows on custom enterprise datasets." },
              { title: "Local AI Agents", desc: "Always-on inference nodes built to run automated AI agents and assistants entirely on-premise." },
              { title: "Computer Vision", desc: "High-throughput architectures for real-time video analysis, object detection, and spatial computing." },
              { title: "Simulation & Rendering", desc: "Compute-heavy configurations tailored for CUDA, TensorRT, and 3D simulation pipelines." },
              { title: "Research Labs", desc: "Shared, virtualized GPU clusters designed for academic research and concurrent data science teams." }
            ].map((workload, idx) => (
              <div key={idx} className="bg-background border border-border p-8 hover:border-primary/50 transition-colors">
                <h3 className="font-display text-xl font-bold mb-3">{workload.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{workload.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TYPICAL DEPLOYMENT TYPES */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Deployment Architectures</h2>
            <p className="text-muted text-lg max-w-2xl">From deskside workstations to rack-mounted compute clusters, we scale the hardware to fit the deployment environment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface border border-border p-10 flex flex-col justify-between">
              <div>
                <Terminal className="text-primary mb-6" size={32} />
                <h3 className="font-display text-2xl font-bold mb-4">Single & Dual-GPU Workstations</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Deskside towers engineered for quiet operation and extreme performance. Ideal for individual researchers, developers, or creators prototyping models and running inference locally.
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3 text-sm font-medium text-white"><CheckCircle2 className="text-primary shrink-0" size={16} /> 24GB to 96GB VRAM</li>
                <li className="flex items-center gap-3 text-sm font-medium text-white"><CheckCircle2 className="text-primary shrink-0" size={16} /> Studio-quiet cooling solutions</li>
              </ul>
            </div>

            <div className="bg-surface border border-border p-10 flex flex-col justify-between">
              <div>
                <Server className="text-primary mb-6" size={32} />
                <h3 className="font-display text-2xl font-bold mb-4">Multi-GPU Compute Nodes</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Rack-mountable servers or high-airflow towers designed for 4x to 8x GPU setups. Built on AMD EPYC or Intel Xeon platforms to provide massive PCIe lane counts for unbottlenecked GPU-to-CPU communication.
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3 text-sm font-medium text-white"><CheckCircle2 className="text-primary shrink-0" size={16} /> Up to 8x GPUs per node</li>
                <li className="flex items-center gap-3 text-sm font-medium text-white"><CheckCircle2 className="text-primary shrink-0" size={16} /> Enterprise server architecture</li>
              </ul>
            </div>

            <div className="bg-surface border border-border p-10 flex flex-col justify-between md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Layers className="text-primary mb-6" size={32} />
                  <h3 className="font-display text-2xl font-bold mb-4">Shared AI Lab Servers</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    Centralized infrastructure designed for educational institutes and engineering teams. We build highly available servers that can be partitioned via virtualization (Proxmox/VMware) to allocate dedicated GPU resources to multiple concurrent users.
                  </p>
                </div>
                <div className="relative h-48 md:h-full w-full">
                  <img loading="lazy" decoding="async" src="/images/ai-gpu-lab.jpg" alt="Lab setup" className="w-full h-full object-cover rounded border border-border opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY LOCAL / ON-PREM AI */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Why Local Infrastructure?</h2>
              <p className="text-muted text-lg">Cloud AI is powerful, but it comes with recurring costs and privacy compromises. On-premise deployments solve both.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 border border-border bg-background hover:border-primary/30 transition-colors">
              <Lock className="text-primary mb-4" size={24} />
              <h3 className="font-bold text-white mb-2">Absolute Data Privacy</h3>
              <p className="text-muted text-sm leading-relaxed">Your data never leaves your network. Eliminate the risk of proprietary code, financial data, or patient records leaking through public API endpoints.</p>
            </div>
            <div className="p-8 border border-border bg-background hover:border-primary/30 transition-colors">
              <Zap className="text-primary mb-4" size={24} />
              <h3 className="font-bold text-white mb-2">Predictable Fixed Costs</h3>
              <p className="text-muted text-sm leading-relaxed">Stop paying per-token API fees or hourly cloud GPU rental rates. A local node is a one-time capital expenditure that operates 24/7 with zero variable pricing.</p>
            </div>
            <div className="p-8 border border-border bg-background hover:border-primary/30 transition-colors">
              <Activity className="text-primary mb-4" size={24} />
              <h3 className="font-bold text-white mb-2">Unrestricted Control</h3>
              <p className="text-muted text-sm leading-relaxed">Run uncensored open-source models, bypass API rate limits, and customize the hardware stack exactly to your unique workload latency requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HARDWARE & ARCHITECTURE CONSIDERATIONS */}
      <section className="py-24 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Engineering the Stack</h2>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                An AI system is more than just stacking GPUs in a chassis. We meticulously evaluate every technical bottleneck to ensure maximum throughput and stability.
              </p>
              <ul className="flex flex-col gap-6">
                {[
                  { icon: <Database size={20} />, title: "VRAM Density", desc: "Sizing memory capacities to fit target parameter counts and context windows without out-of-memory errors." },
                  { icon: <Network size={20} />, title: "PCIe Topologies", desc: "Selecting CPU platforms with adequate PCIe lanes to prevent data bottlenecks between host memory and GPUs." },
                  { icon: <Activity size={20} />, title: "Thermal & Power", desc: "Engineering industrial-grade airflow and utilizing high-efficiency ATX 3.0 or redundant server power supplies." },
                  { icon: <HardDrive size={20} />, title: "Storage Throughput", desc: "Deploying direct-attached NVMe arrays to rapidly load massive checkpoint files into memory." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-surface border border-border flex items-center justify-center shrink-0 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-muted text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 bg-surface border border-border p-8 lg:p-12 relative">
              <div className="relative z-10 flex flex-col gap-8">
                <div className="border-l-2 border-primary pl-6">
                  <div className="text-white font-bold text-xl mb-2 font-display">"We don't just sell spec sheets."</div>
                  <div className="text-muted text-sm leading-relaxed">We design practical, scalable infrastructure built precisely around how your models and engineering teams actually work.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHO THIS IS FOR */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">Who We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Engineering Teams", "Startups & Founders", "Research Labs", "Educational Institutes", "Studios & Creators", "Healthcare Providers", "Finance & Trading", "Data Scientists"].map((audience, idx) => (
              <div key={idx} className="bg-background border border-border p-6 text-center hover:border-primary/30 transition-colors">
                <Users className="text-primary mx-auto mb-3 opacity-50" size={24} />
                <span className="font-bold text-sm text-white">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="bg-surface border border-border p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">Need a private AI setup for business or lab use?</h2>
              <p className="text-lg text-muted">
                Building local AI infrastructure requires precise engineering. Let's design the right GPU node for your specific workload.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dim text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all hover:-translate-y-0.5 inline-flex items-center justify-center w-full md:w-auto gap-2"
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
