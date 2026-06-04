import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise NAS & Storage Systems",
  description: "ZFS-based storage infrastructure for high availability, redundancy, and automated backup. Perfect for studios, clinics, and enterprises.",
  alternates: { canonical: "/storage" }
};
import { ArrowRight } from "lucide-react";

export default function StorageBackup() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
              <span className="font-display text-[11px] font-bold tracking-[0.2em] uppercase text-white">
                High-Availability Data Architectures
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Centralized Storage Engineered For Uptime
            </h1>
            <p className="text-lg text-muted mb-10 font-light leading-relaxed">
              ZFS-based storage infrastructure engineered for uptime, redundancy, and long-term data integrity across production environments. From high-speed local network shares to automated off-site replication.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {["ZFS", "RAIDZ2", "Snapshots", "Automated Backups", "SMB/NFS", "Off-site Replication"].map(tag => (
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
            <img fetchPriority="high" decoding="async" src="/images/storage-hero.jpg" alt="Storage Racks" className="w-full h-full object-cover rounded border border-border shadow-2xl opacity-80" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-background p-10 border border-border">
              <h3 className="font-display text-2xl font-bold mb-4">Shared Storage Workflows</h3>
              <p className="text-muted leading-relaxed text-sm mb-6">
                Centralized multi-user access (SMB/NFS) for production environments. Fast 10GbE / 25GbE local networking eliminates the bottleneck of external hard drives and allows teams to edit directly from the NAS.
              </p>
            </div>

            <div className="bg-background p-10 border border-border">
              <h3 className="font-display text-2xl font-bold mb-4">RAID & ZFS Integrity</h3>
              <p className="text-muted leading-relaxed text-sm mb-6">
                Storage architecture designed for strict fault tolerance. We utilize TrueNAS and ZFS (RAIDZ2/RAIDZ3) to ensure data integrity, automatically heal silent data corruption, and survive multiple drive failures.
              </p>
            </div>

            <div className="bg-background p-10 border border-border">
              <h3 className="font-display text-2xl font-bold mb-4">Backup & Replication</h3>
              <p className="text-muted leading-relaxed text-sm mb-6">
                Scheduled immutable snapshots prevent ransomware attacks. We configure automated off-site replication to secondary nodes or cloud targets to ensure disaster recovery protocols are bulletproof.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
