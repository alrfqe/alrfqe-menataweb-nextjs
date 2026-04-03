import type { MetadataRoute } from 'next';
import { articles } from '@/data/articles';
import { absoluteUrl, staticRoutes } from '@/site/config';

const buildDate = new Date('2026-04-03T00:00:00+07:00');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: buildDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: absoluteUrl(article.route),
    lastModified: new Date(`${article.date.iso}T00:00:00+07:00`),
    changeFrequency: 'monthly',
    priority: article.featured ? 0.9 : 0.8,
  }));

  return [...staticEntries, ...articleEntries];
}
