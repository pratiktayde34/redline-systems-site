import type { Metadata } from "next";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Engineering",
  description: "Schedule a free infrastructure assessment or request a quote for your custom server, workstation, or storage deployment.",
  alternates: { canonical: "/contact" }
};

export default function Contact() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden bg-surface border-b border-border">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              Contact Engineering
            </h1>
            <p className="text-lg text-muted font-light leading-relaxed">
              We focus on practical, workload-driven systems that prioritize reliability, scalability, and operational continuity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Contact Details */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-primary"></div>
                <span className="font-display text-xs font-bold tracking-[0.2em] uppercase text-primary">
                  Direct Technical Communication
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold mb-8">
                Speak directly with the team handling your deployment.
              </h2>
              
              <div className="flex flex-col gap-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface border border-border flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm uppercase tracking-widest text-faint mb-1">Phone / WhatsApp</div>
                    <a href="tel:+919767974246" className="text-xl hover:text-primary transition-colors">+91 97679 74246</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface border border-border flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm uppercase tracking-widest text-faint mb-1">Email</div>
                    <a href="mailto:contact@redlinesystems.in" className="text-xl hover:text-primary transition-colors">contact@redlinesystems.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface border border-border flex items-center justify-center shrink-0">
                    <img src="https://cdn.simpleicons.org/instagram/d42b2b" alt="Instagram" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm uppercase tracking-widest text-faint mb-1">Instagram</div>
                    <a href="https://www.instagram.com/redlinesystems.in/" target="_blank" rel="noreferrer" className="text-xl hover:text-primary transition-colors">@redlinesystems.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface border border-border flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm uppercase tracking-widest text-faint mb-1">Service Area</div>
                    <div className="text-lg text-muted">Aurangabad · Pune · Maharashtra</div>
                  </div>
                </div>
              </div>

              <div className="bg-surface border border-border p-8">
                <h3 className="font-display text-xl font-bold mb-4">Why Redline Systems?</h3>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0" size={20} /> <span className="text-muted text-sm leading-relaxed">Built around workloads, not generic configurations.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0" size={20} /> <span className="text-muted text-sm leading-relaxed">Local on-site deployment and support across Maharashtra.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0" size={20} /> <span className="text-muted text-sm leading-relaxed">No cloud dependency. Your data remains under your control.</span></li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="bg-surface border border-border p-10 lg:p-12">
              <h2 className="font-display text-3xl font-bold mb-2">Free Infrastructure Assessment</h2>
              <p className="text-muted text-sm mb-8">Outline your current setup, operational bottlenecks, or planned workloads. We will recommend an architecture built specifically for your use case.</p>
              
              <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
                <input type="hidden" name="access_key" value="4253ea0f-5270-4d8f-9319-8f611cadf4ad" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-faint">Your Name</label>
                    <input type="text" id="name" name="name" className="bg-background border border-border px-4 py-3 text-sm focus:border-primary outline-none transition-colors text-white" placeholder="First Last" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-faint">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="bg-background border border-border px-4 py-3 text-sm focus:border-primary outline-none transition-colors text-white" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-faint">Company / Institute</label>
                  <input type="text" id="company" name="company" className="bg-background border border-border px-4 py-3 text-sm focus:border-primary outline-none transition-colors text-white" placeholder="Organization Name" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="workload" className="text-xs font-bold uppercase tracking-widest text-faint">Workload Type</label>
                  <select id="workload" name="workload" className="bg-background border border-border px-4 py-3 text-sm focus:border-primary outline-none transition-colors text-white appearance-none" required>
                    <option value="">Select primary workload...</option>
                    <option value="ai">AI / Deep Learning / LLM</option>
                    <option value="rendering">3D Rendering / Video Pipeline</option>
                    <option value="cad">CAD / BIM / Simulation</option>
                    <option value="storage">Centralized Storage / TrueNAS</option>
                    <option value="virtualization">Virtualization / Proxmox</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="details" className="text-xs font-bold uppercase tracking-widest text-faint">Hardware / Operational Requirements</label>
                  <textarea id="details" name="details" rows={4} className="bg-background border border-border px-4 py-3 text-sm focus:border-primary outline-none transition-colors text-white resize-y" placeholder="Briefly describe what you're running or looking to build..." required></textarea>
                </div>

                <div className="mt-2 text-xs text-primary font-bold tracking-widest uppercase">
                  Typical response time: within 24 hours.
                </div>

                <button type="submit" className="bg-primary hover:bg-primary-dim text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all w-full mt-2">
                  Request Consultation
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
