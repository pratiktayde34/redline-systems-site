import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-16">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center mb-6">
              <img loading="lazy" decoding="async" src="/logo.png" alt="Redline Systems" className="h-10 w-auto opacity-90" />
            </Link>
            <p className="text-muted font-light max-w-sm mb-8 leading-relaxed text-sm">
              Practical infrastructure engineering and deployment company focused on compute, storage, workstation, and on-premise systems for businesses across Maharashtra.
            </p>
              <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5 mb-2 mt-2">
                <span className="text-base font-bold text-faint tracking-wide uppercase">REDLINE SYSTEMS INDIA</span>
                <span className="text-base font-bold text-faint tracking-wide">GSTIN: 27ABNFR9251L1ZE</span>
              </div>
              <div className="flex items-center gap-3 text-faint">
                <MapPin size={16} className="text-primary shrink-0" />
                <span className="text-sm leading-tight">Chhatrapati Sambhajinagar, Maharashtra<br/>Serving clients across India.</span>
              </div>
              <div className="flex items-center gap-3 text-faint">
                <Phone size={16} className="text-primary" />
                <a href="tel:+919767974246" className="text-sm hover:text-white transition-colors">+91 97679 74246</a>
              </div>
              <div className="flex items-center gap-3 text-faint">
                <Mail size={16} className="text-primary" />
                <a href="mailto:contact@redlinesystems.in" className="text-sm hover:text-white transition-colors">contact@redlinesystems.in</a>
              </div>
              <div className="flex items-center gap-3 text-faint mt-2">
                <img loading="lazy" decoding="async" src="https://cdn.simpleicons.org/instagram/d42b2b" alt="Instagram" className="w-4 h-4" />
                <a href="https://www.instagram.com/redlinesystems.in/" target="_blank" rel="noreferrer" className="text-sm hover:text-white transition-colors">@redlinesystems.in</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-faint mb-6">Solutions</h4>
              <ul className="flex flex-col gap-3">
                <li><Link href="/ai-gpu" className="text-muted hover:text-primary transition-colors text-sm">AI Infrastructure</Link></li>
                <li><Link href="/storage" className="text-muted hover:text-primary transition-colors text-sm">Storage & NAS</Link></li>
                <li><Link href="/workstations" className="text-muted hover:text-primary transition-colors text-sm">Workstations</Link></li>
                <li><Link href="/homelab" className="text-muted hover:text-primary transition-colors text-sm">Homelab</Link></li>
                <li><Link href="/solutions" className="text-muted hover:text-primary transition-colors text-sm">Educational Labs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-faint mb-6">Resources</h4>
              <ul className="flex flex-col gap-3">
                <li><Link href="/resources/archive" className="text-muted hover:text-primary transition-colors text-sm">All Articles</Link></li>
                <li><Link href="/resources/archive?category=AI%20Infrastructure" className="text-muted hover:text-primary transition-colors text-sm">AI Infrastructure</Link></li>
                <li><Link href="/resources/archive?category=Storage%20%26%20NAS" className="text-muted hover:text-primary transition-colors text-sm">Storage & NAS</Link></li>
                <li><Link href="/resources/archive?category=Professional%20Workstations" className="text-muted hover:text-primary transition-colors text-sm">Workstations</Link></li>
                <li><Link href="/resources/archive?category=Industry%20Guides" className="text-muted hover:text-primary transition-colors text-sm">Industry Guides</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-faint mb-6">Enterprise Platforms</h4>
              <ul className="flex flex-col gap-3">
                <li className="text-muted text-sm">VMware vSphere</li>
                <li className="text-muted text-sm">Red Hat OpenShift</li>
                <li className="text-muted text-sm">TrueNAS Enterprise</li>
                <li className="text-muted text-sm">NVIDIA AI Enterprise</li>
                <li className="text-muted text-sm">Proxmox VE</li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-faint mb-6">Legal</h4>
              <ul className="flex flex-col gap-3">
                <li className="text-muted text-sm">Privacy Policy</li>
                <li className="text-muted text-sm">Terms & Conditions</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-faint text-xs">
            &copy; {new Date().getFullYear()} Redline Systems. All rights reserved.
          </p>
          <div className="text-faint text-xs uppercase tracking-widest font-bold">
            Operationally Reliable Infrastructure
          </div>
        </div>
      </div>
    </footer>
  );
}
