import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-16">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          <div className="lg:col-span-2">
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
                <span className="text-sm leading-tight">Aurangabad (Chhatrapati Sambhajinagar),<br/>Serving across Maharashtra.</span>
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

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-faint mb-6">Categories</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/ai-gpu" className="text-muted hover:text-primary transition-colors text-sm">AI & GPU Infrastructure</Link></li>
              <li><Link href="/storage" className="text-muted hover:text-primary transition-colors text-sm">NAS & Shared Storage</Link></li>
              <li><Link href="/workstations" className="text-muted hover:text-primary transition-colors text-sm">Engineering Workstations</Link></li>
              <li><Link href="/solutions" className="text-muted hover:text-primary transition-colors text-sm">Educational Labs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-faint mb-6">Operations</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-muted text-sm flex items-center gap-2">
                <span>Response Time:</span>
                <span className="text-white font-medium">&lt; 24h</span>
              </li>
              <li className="text-muted text-sm flex items-center gap-2">
                <span>On-site Deployment:</span>
                <span className="text-primary font-medium">Available</span>
              </li>
              <li className="mt-2"><Link href="/contact" className="text-muted hover:text-white transition-colors text-sm">Contact Support</Link></li>
              <li><Link href="/contact" className="text-muted hover:text-white transition-colors text-sm">Request Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-faint mb-6">Supported Platforms</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-muted text-sm">NVIDIA / AMD / Intel</li>
              <li className="text-muted text-sm">TrueNAS / ZFS</li>
              <li className="text-muted text-sm">Proxmox / VMware</li>
              <li className="text-muted text-sm">Ubuntu Server</li>
            </ul>
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
