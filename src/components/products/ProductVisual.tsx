import Image from 'next/image';
import type { ProductImage, ProductVisual as ProductVisualType } from '@/data/products';

export function ProductVisual({ visual, image }: { visual: ProductVisualType; image?: ProductImage }) {
  const toneMap: Record<ProductVisualType, string> = {
    erp: 'linear-gradient(135deg, #1821F5 0%, #5EA7FF 100%)',
    crm: 'linear-gradient(135deg, #0F172A 0%, #1821F5 100%)',
    booking: 'linear-gradient(135deg, #1D4ED8 0%, #22C55E 100%)',
    inventory: 'linear-gradient(135deg, #111827 0%, #3B82F6 100%)',
    portal: 'linear-gradient(135deg, #1821F5 0%, #06B6D4 100%)',
    custom: 'linear-gradient(135deg, #0F172A 0%, #1821F5 55%, #60A5FA 100%)',
  };

  const labelMap: Record<ProductVisualType, string[]> = {
    erp: ['Finance', 'Ops', 'Approval'],
    crm: ['Lead', 'Pipeline', 'Follow Up'],
    booking: ['Schedule', 'Slot', 'Payment'],
    inventory: ['Stock', 'Warehouse', 'Report'],
    portal: ['Task', 'Docs', 'Approval'],
    custom: ['API', 'Workflow', 'Dashboard'],
  };

  if (image?.url) {
    return (
      <div className="product-visual product-visual-image" style={{ background: toneMap[visual] }}>
        <Image
          src={image.url}
          alt={image.alt || 'Product catalog image'}
          fill
          className="product-visual-photo"
          sizes="(max-width: 768px) 100vw, 40vw"
          unoptimized
        />
        <div className="product-visual-photo-overlay" />
        <div className="product-visual-labels">
          {labelMap[visual].map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="product-visual" style={{ background: toneMap[visual] }}>
      <div className="product-visual-window">
        <div className="product-visual-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="product-visual-layout">
          <div className="product-visual-sidebar" />
          <div className="product-visual-main">
            <div className="product-visual-row product-visual-row-wide" />
            <div className="product-visual-metrics">
              <div />
              <div />
              <div />
            </div>
            <div className="product-visual-table" />
          </div>
        </div>
      </div>
      <div className="product-visual-labels">
        {labelMap[visual].map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
