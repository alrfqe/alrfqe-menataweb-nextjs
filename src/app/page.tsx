import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Results from '@/components/sections/Results';
import Problems from '@/components/sections/Problems';
import Solutions from '@/components/sections/Solutions';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Investment from '@/components/sections/Investment';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import ArticlePreview from '@/components/sections/ArticlePreview';
import FinalCTA from '@/components/sections/FinalCTA';
import Script from 'next/script';
import { siteConfig } from '@/site/config';
import { getHomeArticles, getPortfolioItems } from '@/lib/content';

export const dynamic = 'force-dynamic';

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      "name": siteConfig.name,
      "description": "Menata Web adalah studio digital yang membantu UMKM dan bisnis berkembang memiliki website profesional.",
      "url": siteConfig.url,
      "telephone": siteConfig.phone,
      "email": siteConfig.email,
      "logo": `${siteConfig.url}/logo/logo_new_main.png`,
      "address": { "@type": "PostalAddress", "addressLocality": siteConfig.city, "addressRegion": siteConfig.region, "addressCountry": siteConfig.countryCode },
      "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "telephone": siteConfig.phone, "email": siteConfig.email, "areaServed": "ID", "availableLanguage": ["id", "en"] }
    },
    { "@type": "WebSite", "@id": `${siteConfig.url}/#website`, "url": siteConfig.url, "name": siteConfig.name, "inLanguage": "id-ID", "publisher": { "@id": `${siteConfig.url}/#organization` } },
    { "@type": "WebPage", "@id": `${siteConfig.url}/#webpage`, "url": `${siteConfig.url}/`, "name": `Jasa Pembuatan Website Profesional untuk UMKM | ${siteConfig.name}`, "isPartOf": { "@id": `${siteConfig.url}/#website` }, "about": { "@id": `${siteConfig.url}/#organization` }, "inLanguage": "id-ID" },
    { "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Berapa harga jasa pembuatan website di Menata Web?", "acceptedAnswer": { "@type": "Answer", "text": "Harga mulai dari Rp750.000 untuk landing page, Rp1.500.000 untuk company profile, hingga Rp3.500.000+ untuk custom website full-stack." } },
      { "@type": "Question", "name": "Berapa lama proses pembuatan website?", "acceptedAnswer": { "@type": "Answer", "text": "Landing page 3-5 hari kerja. Company profile 7-10 hari. Custom website 14-30 hari tergantung kompleksitas." } },
      { "@type": "Question", "name": "Apakah ada konsultasi gratis?", "acceptedAnswer": { "@type": "Answer", "text": "Ya! Konsultasi gratis via WhatsApp. Isi form di halaman kontak dan tim kami merespon dalam 1x24 jam." } },
      { "@type": "Question", "name": "Apakah website responsif di mobile?", "acceptedAnswer": { "@type": "Answer", "text": "Semua website 100% responsif dan mobile-friendly untuk semua ukuran layar." } },
    ]}
  ]
};

export default async function Home() {
  const [homeArticles, portfolioData] = await Promise.all([
    getHomeArticles(),
    getPortfolioItems(),
  ]);

  return (
    <>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <TrustBar />
      <Results />
      <Problems />
      <Solutions />
      <Services />
      <Portfolio items={portfolioData} />
      <Investment />
      <Process />
      <Testimonials />
      <FAQ />
      <ArticlePreview articles={homeArticles} />
      <FinalCTA />
    </>
  );
}
