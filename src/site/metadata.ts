import type { Metadata } from 'next';
import { absoluteUrl, siteConfig } from './config';

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  openGraphTitle?: string;
  openGraphDescription?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  type = 'website',
  openGraphTitle,
  openGraphDescription,
}: BuildPageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type,
      title: openGraphTitle ?? title,
      description: openGraphDescription ?? description,
      url: canonical,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
      siteName: siteConfig.name,
      locale: siteConfig.locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphTitle ?? title,
      description: openGraphDescription ?? description,
      images: [siteConfig.ogImage],
    },
  };
}
