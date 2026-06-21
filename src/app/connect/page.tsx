import type { Metadata } from "next";
import Link from "next/link";
import { Download, MessageCircle, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Connect",
  description: "Workstation, NAS, AI Infrastructure & Data Protection Solutions",
  robots: "noindex, follow",
  openGraph: {
    title: "Redline Systems — Connect",
    description: "Workstation, NAS, AI Infrastructure & Data Protection Solutions",
    images: [
      {
        url: 'https://redlinesystems.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Redline Systems',
      },
    ],
  },
};

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Container */}
      <div className="max-w-md w-full mx-auto px-6 py-12 flex-grow flex flex-col items-center">
        
        {/* Logo & Hero */}
        <div className="w-full flex flex-col items-center text-center mb-10">
          {/* Note: Reverting back to logo.png as per user request to match navbar */}
          <img 
            loading="eager" 
            decoding="sync" 
            src="/logo.png" 
            alt="Redline Systems" 
            className="h-16 w-auto mb-8 opacity-90" 
          />
          <h1 className="text-white font-bold text-sm tracking-wider uppercase mb-4 leading-relaxed">
            On-premise Compute, Storage & AI Infra
          </h1>
          <p className="text-muted text-sm leading-relaxed">
            Serving businesses, creators, educational institutes, and professionals across Maharashtra.
          </p>
        </div>

        {/* Tier 1 Actions */}
        <div className="w-full flex flex-col gap-4 mb-6">
          <a 
            href="/redline-systems.vcf" 
            download
            className="w-full bg-primary hover:bg-primary-dim text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg"
          >
            <Download size={20} />
            <span>Save Contact</span>
          </a>
          
          <a 
            href="https://wa.me/919767974246" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Tier 2 Actions */}
        <div className="w-full flex gap-4 mb-12">
          <a 
            href="tel:+919767974246" 
            className="flex-1 bg-surface border border-border hover:border-primary/50 text-white font-medium py-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-all group"
            aria-label="Call Us"
          >
            <Phone size={20} className="text-muted group-hover:text-primary transition-colors" />
            <span className="text-xs uppercase tracking-wider text-muted group-hover:text-white transition-colors">Call</span>
          </a>
          
          <a 
            href="mailto:contact@redlinesystems.in?subject=Business%20Inquiry" 
            className="flex-1 bg-surface border border-border hover:border-primary/50 text-white font-medium py-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-all group"
            aria-label="Email Us"
          >
            <Mail size={20} className="text-muted group-hover:text-primary transition-colors" />
            <span className="text-xs uppercase tracking-wider text-muted group-hover:text-white transition-colors">Email</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="w-full bg-surface border border-border rounded-2xl p-6 mb-8 text-sm">
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <span className="text-muted w-24 shrink-0">Phone:</span>
              <a href="tel:+919767974246" className="text-white hover:text-primary transition-colors">+91 97679 74246</a>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-muted w-24 shrink-0">Email:</span>
              <a href="mailto:contact@redlinesystems.in" className="text-white hover:text-primary transition-colors break-all">contact@redlinesystems.in</a>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-muted w-24 shrink-0">Website:</span>
              <a href="https://redlinesystems.in" className="text-white hover:text-primary transition-colors">https://redlinesystems.in</a>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-muted w-24 shrink-0">Service Area:</span>
              <span className="text-white">Maharashtra</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-muted w-24 shrink-0">Instagram:</span>
              <a href="https://instagram.com/redlinesystems.in" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">@redlinesystems.in</a>
            </li>
          </ul>
        </div>

        {/* What We Build */}
        <div className="w-full mb-8">
          <h2 className="font-display text-lg font-bold mb-4 uppercase tracking-wider text-white">What We Build</h2>
          <ul className="flex flex-col gap-2 text-sm text-muted">
            <li className="flex items-center gap-3"><span className="text-primary font-bold">✓</span> High-Performance Workstations</li>
            <li className="flex items-center gap-3"><span className="text-primary font-bold">✓</span> Centralized NAS & Storage</li>
            <li className="flex items-center gap-3"><span className="text-primary font-bold">✓</span> AI & GPU Infrastructure</li>
            <li className="flex items-center gap-3"><span className="text-primary font-bold">✓</span> Backup & Disaster Recovery</li>
            <li className="flex items-center gap-3"><span className="text-primary font-bold">✓</span> Self-Hosted Solutions</li>
            <li className="flex items-center gap-3"><span className="text-primary font-bold">✓</span> Educational & Training Labs</li>
            <li className="flex items-center gap-3"><span className="text-primary font-bold">✓</span> Home Media & Personal Cloud Infrastructure</li>
          </ul>
        </div>

        {/* Why Redline */}
        <div className="w-full mb-12">
          <h2 className="font-display text-lg font-bold mb-4 uppercase tracking-wider text-white">Why Redline Systems</h2>
          <ul className="flex flex-col gap-3 text-sm text-muted">
            <li className="flex items-start gap-3"><span className="text-primary font-bold mt-0.5">&bull;</span> <span className="leading-relaxed">We size hardware to what you're actually running, not a spec sheet</span></li>
            <li className="flex items-start gap-3"><span className="text-primary font-bold mt-0.5">&bull;</span> <span className="leading-relaxed">Direct communication with the engineering team</span></li>
            <li className="flex items-start gap-3"><span className="text-primary font-bold mt-0.5">&bull;</span> <span className="leading-relaxed">On-site deployment and support</span></li>
            <li className="flex items-start gap-3"><span className="text-primary font-bold mt-0.5">&bull;</span> <span className="leading-relaxed">No unnecessary cloud dependency</span></li>
            <li className="flex items-start gap-3"><span className="text-primary font-bold mt-0.5">&bull;</span> <span className="leading-relaxed">Systems built to run unattended for years, not just pass a demo</span></li>
          </ul>
        </div>

        {/* Footer */}
        <div className="w-full text-center mt-auto pt-8 border-t border-border">
          <p className="text-sm text-white font-medium mb-2">Need a custom solution?</p>
          <p className="text-xs text-muted mb-8">WhatsApp us or request a consultation through our website.</p>
          
          <div className="flex flex-col items-center gap-2 text-xs text-faint">
            <p>&copy; {new Date().getFullYear()} Redline Systems</p>
            <Link href="/" className="hover:text-primary transition-colors">https://redlinesystems.in</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
