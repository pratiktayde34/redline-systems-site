import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/resources');

export type ResourceCategory = 
  | "AI Infrastructure"
  | "Storage & NAS"
  | "Professional Workstations"
  | "Private Infrastructure"
  | "Industry Guides";

export interface ResourceData {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: ResourceCategory;
  coverImage: string;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  content: string;
}

export function getResourceSlugs() {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  return fs.readdirSync(contentDirectory).filter(file => file.endsWith('.mdx') && !file.startsWith('_'));
}

export function getResourceBySlug(slug: string): ResourceData {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    date: data.date,
    category: data.category as ResourceCategory,
    coverImage: data.coverImage,
    featured: data.featured || false,
    seoTitle: data.seoTitle || data.title,
    seoDescription: data.seoDescription || data.description,
    content,
  };
}

export function getAllResources(): ResourceData[] {
  const slugs = getResourceSlugs();
  const resources = slugs
    .map((slug) => getResourceBySlug(slug))
    // sort resources by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return resources;
}

export function getFeaturedResources(): ResourceData[] {
  return getAllResources().filter(resource => resource.featured);
}

export function getResourcesByCategory(category: string): ResourceData[] {
  return getAllResources().filter(resource => resource.category === category);
}

export function getRelatedResources(category: string, currentSlug: string): ResourceData[] {
  return getAllResources()
    .filter(resource => resource.category === category && resource.slug !== currentSlug)
    .slice(0, 3);
}
