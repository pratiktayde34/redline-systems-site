import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AIGPU() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-primary"></div>
              <span className="font-display text-xs font-bold tracking-[0.2em] uppercase text-primary">
                Total Data Privacy & Compute Ownership
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Advanced Dual-GPU & Multi-GPU Compute Nodes
            </h1>
            <p className="text-lg text-muted mb-10 font-light leading-relaxed">
              Deploy local AI infrastructure with complete ownership of hardware, models, and data. Multi-GPU systems optimized for inference, simulation, rendering, and accelerated compute workloads.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {["CUDA", "TensorRT", "PyTorch", "Ollama", "Local LLMs", "Multi-GPU"].map(tag => (
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
          <div className="relative h-[400px] lg:h-[500px]">
            <img src="/images/ai-gpu-hero.jpg" alt="GPU Server internals" className="w-full h-full object-cover rounded border border-border shadow-2xl opacity-80" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-background p-10 border border-border relative overflow-hidden">
              <h3 className="font-display text-2xl font-bold mb-4">Local LLM Infrastructure</h3>
              <p className="text-muted leading-relaxed mb-8 text-sm">
                Run powerful large language models locally. Protect proprietary data by processing entirely on-premise without API costs. Engineered for maximum VRAM density.
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> 96GB to 192GB+ VRAM configurations</li>
                <li className="flex items-center gap-3 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Optimized for inference latency (Llama.cpp, vLLM)</li>
                <li className="flex items-center gap-3 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Fully isolated operational environments</li>
              </ul>
            </div>

            <div className="bg-background p-10 border border-border relative overflow-hidden">
              <h3 className="font-display text-2xl font-bold mb-4">Multi-GPU Compute Nodes</h3>
              <p className="text-muted leading-relaxed mb-8 text-sm">
                Enterprise systems optimized for CUDA, TensorRT, PyTorch, and intensive scientific simulation workloads. Scalable from dual-GPU to 8-GPU architectures.
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Up to 8x PCIe Gen 5 GPUs per node</li>
                <li className="flex items-center gap-3 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> AMD EPYC / Dual Intel Xeon foundations</li>
                <li className="flex items-center gap-3 text-sm text-faint"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Industrial cooling and airflow design</li>
              </ul>
            </div>

            <div className="bg-background p-10 border border-border relative overflow-hidden md:col-span-2">
              <h3 className="font-display text-2xl font-bold mb-4">AI Lab Infrastructure</h3>
              <p className="text-muted leading-relaxed mb-8 text-sm max-w-3xl">
                Complete infrastructure for research environments and educational institutes. We build highly available GPU servers that can be partitioned via virtualization (Proxmox / VMware) to serve multiple concurrent researchers.
              </p>
              <div className="relative h-[300px] w-full">
                <img src="/images/ai-gpu-lab.jpg" alt="Lab setup" className="w-full h-full object-cover rounded opacity-70" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
