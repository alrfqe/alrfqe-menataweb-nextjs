'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';
import { isSanityConfigured, sanityEnv } from '@/lib/sanity/env';

export default function StudioPage() {
  if (!isSanityConfigured()) {
    return (
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem', background: '#f7f8fb' }}>
        <div style={{ maxWidth: 720, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 20, padding: '2rem' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Sanity belum dikonfigurasi</h1>
          <p style={{ lineHeight: 1.7, color: '#4b5563', marginBottom: '1rem' }}>
            Isi environment variable berikut agar Studio bisa dipakai:
          </p>
          <pre style={{ background: '#111827', color: '#f9fafb', padding: '1rem', borderRadius: 14, overflowX: 'auto' }}>
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=${sanityEnv.apiVersion}`}
          </pre>
          <p style={{ lineHeight: 1.7, color: '#4b5563', marginTop: '1rem' }}>
            Setelah env diisi dan server di-restart, buka lagi <strong>/studio</strong>.
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
