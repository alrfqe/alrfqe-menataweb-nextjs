'use client';

import FinalCTA from '@/components/sections/FinalCTA';
import { ProductVisual } from '@/components/products/ProductVisual';
import type { ProductSolution } from '@/data/products';
import { useLang } from '@/hooks/useLanguage';

export default function ProdukContent({ products }: { products: ProductSolution[] }) {
  const { t } = useLang();
  const featuredProduct = products.find((product) => product.featured) ?? products[0];
  const catalogProducts = products.filter((product) => product.slug !== featuredProduct?.slug);
  const categoryCount = new Set(products.map((product) => product.category.id)).size;

  return (
    <>
      <section className="section products-page-hero">
        <div className="container">
          <div className="products-hero-copy fade-up visible">
            <div className="section-label">{t('Produk & Sistem', 'Products & Systems')}</div>
            <h1 className="text-h1">
              {t('Solusi Sistem Digital yang ', 'Digital System Solutions that ')}
              <span className="text-gradient">{t('Bisa Tumbuh Bersama Bisnis Anda', 'Scale With Your Business')}</span>
            </h1>
            <p className="hero-desc">
              {t(
                'Dari ERP, CRM, booking, inventory, hingga custom internal system, kami merancang produk digital yang tidak berhenti di tampilan, tetapi benar-benar membantu operasional berjalan lebih rapi dan efisien.',
                'From ERP, CRM, booking, and inventory to custom internal systems, we design digital products that go beyond appearance and genuinely help operations run more efficiently.'
              )}
            </p>
          </div>
          <div className="products-summary-strip fade-up visible">
            <div className="products-summary-item">
              <strong>{String(products.length).padStart(2, '0')}</strong>
              <span>{t('solusi siap dikembangkan', 'solutions ready to scale')}</span>
            </div>
            <div className="products-summary-item">
              <strong>{String(categoryCount).padStart(2, '0')}</strong>
              <span>{t('kategori sistem bisnis', 'business system categories')}</span>
            </div>
            <div className="products-summary-item">
              <strong>{t('Custom', 'Custom')}</strong>
              <span>{t('bisa disesuaikan dengan alur internal Anda', 'can be tailored to your internal flow')}</span>
            </div>
          </div>
        </div>
      </section>

      {featuredProduct && (
        <section className="section products-showcase-section">
          <div className="container">
            <div className="products-section-head fade-up visible">
              <div className="section-label">{t('Solusi Utama', 'Primary Solution')}</div>
              <h2 className="text-h2">{t('Mulai dari sistem yang paling krusial lebih dulu', 'Start from the system that matters most first')}</h2>
            </div>
            <article className="product-spotlight-card fade-up visible">
              <div className="product-spotlight-copy">
                <div className="product-card-topline">
                  <span className="product-card-category">{t(featuredProduct.category.id, featuredProduct.category.en)}</span>
                  <span className="product-card-badge">{t('Rekomendasi Awal', 'Recommended First')}</span>
                </div>
                <h2 className="product-spotlight-title">{t(featuredProduct.title.id, featuredProduct.title.en)}</h2>
                <p className="product-spotlight-summary">{t(featuredProduct.summary.id, featuredProduct.summary.en)}</p>
                <div className="product-spotlight-fit">
                  <strong>{t('Ideal untuk', 'Ideal for')}</strong>
                  <p>{t(featuredProduct.idealFor.id, featuredProduct.idealFor.en)}</p>
                </div>
                <div className="product-spotlight-features">
                  {featuredProduct.features.map((feature) => (
                    <span key={`${featuredProduct.slug}-${feature.id}`}>{t(feature.id, feature.en)}</span>
                  ))}
                </div>
                <div className="product-spotlight-actions">
                  <a href={featuredProduct.ctaUrl} className="btn btn-primary">
                    {t('Diskusikan Solusi Ini', 'Discuss This Solution')}
                  </a>
                  <a href="/kontak" className="btn btn-outline">
                    {t('Lihat Kebutuhan Custom', 'Explore Custom Needs')}
                  </a>
                </div>
              </div>
              <div className="product-spotlight-visual">
                <ProductVisual visual={featuredProduct.visual} image={featuredProduct.image} />
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="section products-grid-section">
        <div className="container">
          <div className="products-section-head fade-up visible">
            <div className="section-label">{t('Katalog Solusi', 'Solution Catalog')}</div>
            <h2 className="text-h2">{t('Pilih model sistem yang paling mendekati kebutuhan Anda', 'Choose the system model closest to your needs')}</h2>
            <p className="products-section-desc">
              {t(
                'Setiap solusi bisa dimulai dari versi sederhana lalu dikembangkan bertahap. Fokus kami adalah membantu Anda menemukan struktur yang paling masuk akal untuk operasional bisnis.',
                'Each solution can start from a simpler version and expand gradually. Our focus is helping you find the most sensible structure for your business operations.'
              )}
            </p>
          </div>
          <div className="products-category-chips fade-up visible">
            {products.map((product) => (
              <span key={`chip-${product.slug}`}>{t(product.category.id, product.category.en)}</span>
            ))}
          </div>
          <div className="products-grid">
            {catalogProducts.map((product, index) => (
              <article className="product-card fade-up visible" key={product.slug} style={{ transitionDelay: `${index * 0.04}s` }}>
                <div className="product-card-visual">
                  <ProductVisual visual={product.visual} image={product.image} />
                </div>
                <div className="product-card-body">
                  <div className="product-card-topline">
                    <span className="product-card-category">{t(product.category.id, product.category.en)}</span>
                    <span className="product-card-index">{String(product.order).padStart(2, '0')}</span>
                  </div>
                  <h3 className="product-card-title">{t(product.title.id, product.title.en)}</h3>
                  <p className="product-card-summary">{t(product.summary.id, product.summary.en)}</p>
                  <div className="product-card-fit">
                    <strong>{t('Ideal untuk', 'Ideal for')}</strong>
                    <p>{t(product.idealFor.id, product.idealFor.en)}</p>
                  </div>
                  <ul className="product-card-features">
                    {product.features.slice(0, 4).map((feature) => (
                      <li key={`${product.slug}-${feature.id}`}>{t(feature.id, feature.en)}</li>
                    ))}
                  </ul>
                  <div className="product-card-actions">
                    <a href={product.ctaUrl} className="btn btn-outline">
                      {t('Diskusikan Solusi Ini', 'Discuss This Solution')}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
