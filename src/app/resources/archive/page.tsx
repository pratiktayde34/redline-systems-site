import { getAllResources } from "@/lib/resources";
import ArchiveClient from "./ArchiveClient";
import { Suspense } from "react";

export const metadata = {
  title: "All Articles | Redline Systems",
  description: "Browse all technical resources, guides, and articles from Redline Systems.",
};

export default function ArchivePage() {
  const allResources = getAllResources();
  
  // Extract unique categories directly from the actual articles
  const categories = Array.from(new Set(allResources.map(r => r.category))).sort();

  return (
    <Suspense fallback={<div className="min-h-screen pt-40 text-center text-muted">Loading archive...</div>}>
      <ArchiveClient allResources={allResources} categories={categories} />
    </Suspense>
  );
}
