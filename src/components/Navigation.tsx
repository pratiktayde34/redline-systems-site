"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { 
    label: "Solutions", 
    href: "/solutions",
    dropdown: [
      { href: "/ai-gpu", label: "AI & GPU" },
      { href: "/storage", label: "Storage" },
      { href: "/workstations", label: "Workstations" },
      { href: "/homelab", label: "Homelab" },
      { href: "/solutions", label: "View all solutions" },
    ]
  },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img loading="lazy" decoding="async" src="/logo.png" alt="Redline Systems" className="h-10 w-auto opacity-90" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors hover:text-white uppercase flex items-center gap-1 py-4",
                    pathname === link.href ? "text-primary" : "text-muted"
                  )}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                </Link>

                {link.dropdown && (
                  <div className="absolute top-full left-0 w-48 bg-surface border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-xl overflow-hidden">
                    <ul className="flex flex-col">
                      {link.dropdown.map((sublink) => (
                        <li key={sublink.href}>
                          <Link
                            href={sublink.href}
                            className={cn(
                              "block px-4 py-3 text-sm font-medium transition-colors hover:bg-background hover:text-primary",
                              pathname === sublink.href ? "text-primary bg-background" : "text-muted"
                            )}
                          >
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dim text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border p-6 shadow-2xl flex flex-col gap-6 transition-all duration-300 origin-top",
          mobileMenuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
        )}
      >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.label} className="flex flex-col gap-2">
                <Link
                  href={link.href}
                  onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                  className={cn(
                    "block text-sm font-bold tracking-widest transition-colors hover:text-white uppercase",
                    pathname === link.href ? "text-primary" : "text-muted"
                  )}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <ul className="flex flex-col gap-2 pl-4 border-l border-border mt-2">
                    {link.dropdown.map((sublink) => (
                      <li key={sublink.href}>
                        <Link
                          href={sublink.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "block text-sm font-medium transition-colors hover:text-white",
                            pathname === sublink.href ? "text-primary" : "text-muted"
                          )}
                        >
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-primary text-center text-white text-xs font-bold uppercase tracking-widest px-5 py-3"
          >
            Get a Quote
          </Link>
        </div>
    </header>
  );
}
