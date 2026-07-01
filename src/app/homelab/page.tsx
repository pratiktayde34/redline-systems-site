import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cloud, PlaySquare, Image as ImageIcon, BrainCircuit, ShieldAlert, CloudOff, Tv, Shield, Network, Home, HardDrive, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Homelab Solutions",
  description: "Take back control of your data, media, backups and applications with a custom self-hosted homelab. Replace expensive cloud subscriptions with hardware you own.",
  alternates: { canonical: "/homelab" }
};

export default function Homelab() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Take Back Control of Your Digital Life
            </h1>
            <p className="text-lg text-muted mb-10 font-light leading-relaxed">
              Take back control of your data, media, backups and applications with a custom self-hosted homelab. Replace expensive cloud subscriptions with enterprise-grade hardware you actually own.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dim text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="border border-border bg-surface hover:bg-border text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            <img fetchPriority="high" decoding="async" src="/images/homelab-hero.png?v=3" alt="Custom Homelab Server" className="w-full h-full object-cover rounded border border-border shadow-2xl opacity-80" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Stop the Subscription Trap</h2>
            <p className="text-muted leading-relaxed">You are paying monthly fees to rent space on corporate servers. What happens when they raise prices, change terms, or analyze your data?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-background p-8 border border-border">
              <Cloud className="text-primary mb-4" size={32} />
              <h3 className="font-display text-xl font-bold mb-2">Cloud Storage</h3>
              <p className="text-sm text-faint">Monthly fees forever just to store your own files.</p>
            </div>
            <div className="bg-background p-8 border border-border">
              <PlaySquare className="text-primary mb-4" size={32} />
              <h3 className="font-display text-xl font-bold mb-2">Streaming Services</h3>
              <p className="text-sm text-faint">Content you don't actually own and can be removed anytime.</p>
            </div>
            <div className="bg-background p-8 border border-border">
              <ImageIcon className="text-primary mb-4" size={32} />
              <h3 className="font-display text-xl font-bold mb-2">Photo Storage</h3>
              <p className="text-sm text-faint">Limited free space for your lifetime of memories.</p>
            </div>
            <div className="bg-background p-8 border border-border">
              <BrainCircuit className="text-primary mb-4" size={32} />
              <h3 className="font-display text-xl font-bold mb-2">AI Services</h3>
              <p className="text-sm text-faint">Usage limits, monthly subscriptions, and privacy concerns.</p>
            </div>
            <div className="bg-background p-8 border border-border md:col-span-2 lg:col-span-1">
              <ShieldAlert className="text-primary mb-4" size={32} />
              <h3 className="font-display text-xl font-bold mb-2">Privacy</h3>
              <p className="text-sm text-faint">Your personal data sitting on someone else's unencrypted servers.</p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold text-white">A Homelab Is More Than Storage</h3>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-center">What Can You Self-Host?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <CloudOff size={24} />, title: "Private Cloud", desc: "Replace Google Drive" },
              { icon: <Tv size={24} />, title: "Media Server", desc: "Your own Netflix" },
              { icon: <ImageIcon size={24} />, title: "Photo Backup", desc: "Your own Google Photos" },
              { icon: <Shield size={24} />, title: "Password Manager", desc: "Your own vault" },
              { icon: <BrainCircuit size={24} />, title: "AI Server", desc: "Run local AI models" },
              { icon: <Network size={24} />, title: "VPN Server", desc: "Secure remote access" },
              { icon: <Home size={24} />, title: "Home Automation", desc: "Smart home control" },
              { icon: <HardDrive size={24} />, title: "Backup Server", desc: "Protect important data" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 border border-border hover:border-primary transition-colors flex flex-col items-center text-center">
                <div className="text-primary mb-4">{item.icon}</div>
                <h4 className="font-display font-bold mb-1">{item.title}</h4>
                <p className="text-xs text-faint uppercase tracking-wider">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Homelab */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Why Build A Homelab?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  "No monthly subscriptions",
                  "Complete data ownership",
                  "Better privacy",
                  "Faster local access",
                  "Learn enterprise technologies",
                  "Unlimited customization",
                  "Run services your way",
                  "Expand whenever needed"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background p-10 border border-border">
              <h2 className="font-display text-3xl font-bold mb-6">Learn Enterprise IT At Home</h2>
              <p className="text-muted leading-relaxed mb-8">
                A homelab isn't just storage. It's the best way to learn enterprise technologies in a safe, personal sandbox. Perfect for students, developers, and IT professionals.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Proxmox", "VMware", "Docker", "Kubernetes", "Linux", "Networking", "Firewalls", "Backup & Recovery"].map(tech => (
                  <span key={tech} className="px-4 py-2 border border-border bg-surface text-xs font-bold tracking-widest uppercase text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-center">Homelab Solutions We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="bg-surface p-8 border border-border hover:-translate-y-1 transition-transform">
              <h3 className="font-display text-2xl font-bold mb-2">Entry Homelab</h3>
              <p className="text-sm text-faint mb-8">Quiet, power-efficient nodes.</p>
              <h4 className="text-xs font-bold tracking-widest uppercase text-primary mb-4">Perfect For</h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2 text-sm text-muted"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Media servers</li>
                <li className="flex items-center gap-2 text-sm text-muted"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> File storage</li>
                <li className="flex items-center gap-2 text-sm text-muted"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Automated backups</li>
              </ul>
            </div>
            
            <div className="bg-surface p-8 border border-border hover:-translate-y-1 transition-transform">
              <h3 className="font-display text-2xl font-bold mb-2">Prosumer Homelab</h3>
              <p className="text-sm text-faint mb-8">High core-count virtualization hosts.</p>
              <h4 className="text-xs font-bold tracking-widest uppercase text-primary mb-4">Perfect For</h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2 text-sm text-muted"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Proxmox Virtualization</li>
                <li className="flex items-center gap-2 text-sm text-muted"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Multiple Docker services</li>
                <li className="flex items-center gap-2 text-sm text-muted"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Secure remote access</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border hover:-translate-y-1 transition-transform">
              <h3 className="font-display text-2xl font-bold mb-2">AI & Compute Lab</h3>
              <p className="text-sm text-faint mb-8">GPU-accelerated infrastructure.</p>
              <h4 className="text-xs font-bold tracking-widest uppercase text-primary mb-4">Perfect For</h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2 text-sm text-muted"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Local LLMs (Ollama)</li>
                <li className="flex items-center gap-2 text-sm text-muted"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Machine Learning prep</li>
                <li className="flex items-center gap-2 text-sm text-muted"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Video transcoding pipelines</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border hover:-translate-y-1 transition-transform">
              <h3 className="font-display text-2xl font-bold mb-2">Rack-Mounted</h3>
              <p className="text-sm text-faint mb-8">True enterprise gear at home.</p>
              <h4 className="text-xs font-bold tracking-widest uppercase text-primary mb-4">Perfect For</h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2 text-sm text-muted"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Power users & Home Businesses</li>
                <li className="flex items-center gap-2 text-sm text-muted"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> High-density storage arrays</li>
                <li className="flex items-center gap-2 text-sm text-muted"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Advanced networking labs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Software & Why Redline */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold mb-6">Popular Self-Hosted Platforms</h2>
            <p className="text-muted leading-relaxed mb-10">We can preconfigure your system with your hypervisor of choice and help you plan your container architecture based on your requirements.</p>
            <div className="flex flex-col gap-y-8 items-center lg:items-start">
              {/* Row 1: 4 items */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                {["Proxmox", "TrueNAS", "Plex", "Jellyfin"].map(app => (
                  <div key={app} className="flex flex-col items-center gap-3 group w-20">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-background border border-border group-hover:border-primary/50 transition-colors flex items-center justify-center shadow-lg">
                      <img loading="lazy" decoding="async" 
                        src={`/images/icons/${app.toLowerCase().replace(' ', '-')}.png`} 
                        alt={app} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <span className="text-xs font-bold text-muted group-hover:text-white transition-colors text-center tracking-wide">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Row 2: 3 items (Staggered offset) */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:ml-12">
                {["Nextcloud", "Immich", "Home Assistant"].map(app => (
                  <div key={app} className="flex flex-col items-center gap-3 group w-20">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-background border border-border group-hover:border-primary/50 transition-colors flex items-center justify-center shadow-lg">
                      <img loading="lazy" decoding="async" 
                        src={`/images/icons/${app.toLowerCase().replace(' ', '-')}.png`} 
                        alt={app} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <span className="text-xs font-bold text-muted group-hover:text-white transition-colors text-center tracking-wide">
                      {app}
                    </span>
                  </div>
                ))}
              </div>

              {/* Row 3: 4 items */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                {["Docker", "Portainer", "WireGuard", "Ollama"].map(app => (
                  <div key={app} className="flex flex-col items-center gap-3 group w-20">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-background border border-border group-hover:border-primary/50 transition-colors flex items-center justify-center shadow-lg">
                      <img loading="lazy" decoding="async" 
                        src={`/images/icons/${app.toLowerCase().replace(' ', '-')}.png`} 
                        alt={app} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <span className="text-xs font-bold text-muted group-hover:text-white transition-colors text-center tracking-wide">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold mb-10">Why <span className="text-primary">Red</span>line Systems?</h2>
            <div className="flex flex-col gap-4">
              {[
                "Custom built for your specific use case",
                "Enterprise-grade hardware selections",
                "Proper storage and RAID planning",
                "Remote deployment support available",
                "Maharashtra-wide service network",
                "Future upgrade path planning",
                "Consultation before purchase",
                "No generic one-size-fits-all builds"
              ].map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="text-base text-muted">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-4xl font-bold mb-6">Ready To Own Your Infrastructure?</h2>
          <p className="text-xl text-muted mb-10 font-light">Whether you need a simple NAS or a full rack-mounted homelab, we will help you design the perfect solution.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-primary hover:bg-primary-dim text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all">
              Request Quote
            </Link>
            <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer" className="border border-border bg-surface hover:bg-border text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all flex items-center justify-center gap-2">
              WhatsApp Us
            </a>
            <a href="tel:+910000000000" className="border border-border bg-surface hover:bg-border text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all flex items-center justify-center gap-2">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
