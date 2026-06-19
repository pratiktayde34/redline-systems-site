import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, HardDrive, ShieldAlert, Clock, Folder, 
  Server, Archive, Database, Box, Layers, ShieldCheck, 
  Activity, History, Lock, Users, Video, Camera, FileCode,
  Cloud, RefreshCcw
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise NAS & Storage Systems | Redline Systems",
  description: "ZFS-based storage infrastructure for high availability, redundancy, and automated backup. Perfect for studios, clinics, and enterprises.",
  alternates: { canonical: "/storage" }
};

export default function StorageBackup() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-24 overflow-hidden bg-background border-b border-border">
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
            <p className="text-lg text-muted mb-10 font-light leading-relaxed max-w-xl">
              ZFS-based storage infrastructure engineered for redundancy and long-term data integrity. From high-speed local network shares to automated off-site replication, we build systems that protect your most critical assets.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {["High Availability", "Data Protection", "File Services", "Replication", "Recovery", "Business Continuity"].map(tag => (
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

      {/* 2. PROBLEMS WE SOLVE */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">The Cost of Bad Storage</h2>
            <p className="text-muted text-lg">Scattered drives and poor backup habits aren't just inconvenient—they are massive liabilities for any growing team or business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <HardDrive size={24} />, title: "External Drive Chaos", desc: "Files spread across disconnected USB drives with no central access or searchability." },
              { icon: <Clock size={24} />, title: "Collaboration Bottlenecks", desc: "Copying massive files over slow networks or physically handing off drives between team members." },
              { icon: <ShieldAlert size={24} />, title: "Ransomware & Deletion", desc: "Accidentally deleting critical folders or losing entire project drives to malicious encryption." },
              { icon: <History size={24} />, title: "No Version History", desc: "Unable to roll back to yesterday's version of a CAD file or video timeline after a corrupt save." }
            ].map((problem, idx) => (
              <div key={idx} className="bg-background border border-border p-8 hover:border-primary/30 transition-colors">
                <div className="text-primary mb-4">{problem.icon}</div>
                <h3 className="font-bold text-white mb-2">{problem.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE BUILD */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Engineered Storage Systems</h2>
            <p className="text-muted text-lg max-w-2xl">We don't sell off-the-shelf consumer boxes. We design and deploy true infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface border border-border p-10">
              <Server className="text-primary mb-6" size={32} />
              <h3 className="font-display text-2xl font-bold mb-4">Shared Team NAS</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                High-speed file servers (SMB/NFS) connected via 10GbE or 25GbE networking, allowing entire teams to edit video or work on shared projects directly off the server.
              </p>
            </div>
            <div className="bg-surface border border-border p-10">
              <Archive className="text-primary mb-6" size={32} />
              <h3 className="font-display text-2xl font-bold mb-4">Archive & Retention</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Massive-capacity systems built for long-term cold storage, completed client projects, CCTV surveillance retention, and legal document archiving.
              </p>
            </div>
            <div className="bg-surface border border-border p-10">
              <Database className="text-primary mb-6" size={32} />
              <h3 className="font-display text-2xl font-bold mb-4">Dedicated Backup Nodes</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Air-gapped or restricted secondary servers designed specifically to pull automated snapshots from your primary storage, ensuring a bulletproof disaster recovery plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TYPICAL DEPLOYMENT SIZES */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Scalable Architectures</h2>
            <p className="text-muted text-lg">Hardware sized precisely for your capacity needs and user counts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-8 bg-background border border-border hover:border-primary/30 transition-colors">
              <Box className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-white mb-2">Compact Desktop NAS</h3>
              <p className="text-muted text-sm">Quiet, 4-to-6 bay enclosures perfect for small studios, remote offices, and premium home setups.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-background border border-border hover:border-primary/30 transition-colors">
              <Layers className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-white mb-2">Mid-Sized Towers</h3>
              <p className="text-muted text-sm">8-to-12 bay systems built for growing engineering firms and medium-sized production teams.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-background border border-border hover:border-primary/30 transition-colors">
              <Server className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-white mb-2">Rackmount Infrastructure</h3>
              <p className="text-muted text-sm">High-density 2U to 4U rack servers deployed in datacenters or corporate server rooms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY THIS ARCHITECTURE */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Modern Storage Foundations</h2>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                Redline designs storage architectures using technologies such as ZFS, Ceph, object storage platforms, and virtualization-integrated storage systems selected according to workload, scalability, and operational requirements.
              </p>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <ShieldCheck className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-white mb-1">Data Integrity</h4>
                    <p className="text-muted text-sm leading-relaxed">Next-generation file systems constantly check for and automatically repair silent data corruption (bit rot), ensuring your files never degrade.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Activity className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-white mb-1">Fault Tolerance</h4>
                    <p className="text-muted text-sm leading-relaxed">Our storage clusters and arrays are configured to survive the simultaneous failure of multiple drives or nodes without any operational downtime.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <History className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-white mb-1">Snapshots & Recovery</h4>
                    <p className="text-muted text-sm leading-relaxed">Capture the exact state of your storage at regular intervals. Instantly roll back entire datasets if files are deleted or modified by mistake.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <RefreshCcw className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-white mb-1">Replication & Backup</h4>
                    <p className="text-muted text-sm leading-relaxed">Seamlessly mirror your datasets to secondary on-premise nodes or cloud-based object storage to guarantee bulletproof disaster recovery.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-surface border border-border p-10 relative">
              <div className="border-l-2 border-primary pl-6 py-2">
                <div className="text-white font-bold text-xl mb-3 font-display">"Data isn't stored until it's stored twice."</div>
                <div className="text-muted text-sm leading-relaxed">A NAS is not a backup—it is shared storage. We architect systems that handle the storage, and secondary systems that handle the backups.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMON USE CASES */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Common Workflows</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Video />, title: "Shared Video Editing" },
              { icon: <Folder />, title: "CAD & BIM File Sharing" },
              { icon: <Camera />, title: "Photo Studio Archives" },
              { icon: <FileCode />, title: "Software Project Storage" },
              { icon: <Database />, title: "Virtual Machine Storage" },
              { icon: <History />, title: "CCTV Recording Retention" },
              { icon: <Lock />, title: "Legal & Medical Documents" },
              { icon: <HardDrive />, title: "Premium Home Media" }
            ].map((useCase, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-background border border-border p-4 hover:border-primary/30 transition-colors">
                <div className="text-primary opacity-70">{useCase.icon}</div>
                <span className="font-bold text-sm text-white">{useCase.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BACKUP AND RECOVERY */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Disaster Recovery Planning</h2>
            <p className="text-muted text-lg">Hardware fails. Facilities lose power. Ransomware attacks happen. A true storage architecture anticipates disaster.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-border bg-surface">
              <RefreshCcw className="text-primary mb-4" size={28} />
              <h3 className="font-bold text-white text-lg mb-3">Immutable Snapshots</h3>
              <p className="text-muted text-sm leading-relaxed">
                Read-only system snapshots prevent ransomware from encrypting your historical data. If an attack occurs, simply roll the server back to the snapshot taken an hour ago.
              </p>
            </div>
            <div className="p-8 border border-border bg-surface">
              <Server className="text-primary mb-4" size={28} />
              <h3 className="font-bold text-white text-lg mb-3">Local Replication</h3>
              <p className="text-muted text-sm leading-relaxed">
                We set up automated, incremental replication to a secondary backup NAS located in another room or building, ensuring immediate local failover availability.
              </p>
            </div>
            <div className="p-8 border border-border bg-surface">
              <Cloud className="text-primary mb-4" size={28} />
              <h3 className="font-bold text-white text-lg mb-3">Off-Site Cloud Sync</h3>
              <p className="text-muted text-sm leading-relaxed">
                Crucial datasets are securely encrypted and automatically pushed to cloud providers (like Backblaze B2 or AWS S3) to protect against physical facility loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHO WE SERVE */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">Who We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Engineering Teams", "Studios & Media Houses", "Architecture Firms", "Educational Institutions", "Healthcare Providers", "Legal Firms", "Corporate Offices", "Premium Homes"].map((audience, idx) => (
              <div key={idx} className="bg-background border border-border p-6 text-center hover:border-primary/30 transition-colors">
                <Users className="text-primary mx-auto mb-3 opacity-50" size={24} />
                <span className="font-bold text-sm text-white">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="bg-surface border border-border p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">Planning a NAS or backup server?</h2>
              <p className="text-lg text-muted">
                Stop relying on scattered external drives. Let’s design the right centralized storage architecture for your workflow.
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
