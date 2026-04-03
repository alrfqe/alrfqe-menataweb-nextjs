'use client';

export default function TrustBar() {
  const clients = ['Desa Wisata Kawidasri', 'Clavin Jaya Abadi', 'Armada Antar Lintas Nusa', 'UMKM Kreatif Jogja', 'Batik Tradisional'];
  const doubled = [...clients, ...clients];
  return (
    <section className="trust-bar">
      <p className="trust-bar-label">DIPILIH OLEH BERAGAM BISNIS &amp; UMKM</p>
      <div className="marquee">
        <div className="marquee-content">
          {doubled.map((c, i) => (<span key={i}>{c}<span className="dot" style={{ display: 'inline-block' }}></span></span>))}
        </div>
      </div>
    </section>
  );
}
