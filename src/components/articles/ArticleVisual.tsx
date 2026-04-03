import type { ArticleVisual as ArticleVisualType } from '@/data/articles';

export function ArticleCardVisual({ visual }: { visual: ArticleVisualType }) {
  switch (visual) {
    case 'marketing':
      return (
        <div className="artikel-card-mockup" style={{ background: 'linear-gradient(135deg,#f093fb,#f5576c)' }}>
          <svg viewBox="0 0 120 80" fill="none" style={{ width: '100%', height: '100%' }}>
            <rect x="15" y="55" width="12" height="20" rx="2" fill="rgba(255,255,255,0.3)" />
            <rect x="32" y="40" width="12" height="35" rx="2" fill="rgba(255,255,255,0.4)" />
            <rect x="49" y="25" width="12" height="50" rx="2" fill="rgba(255,255,255,0.5)" />
            <rect x="66" y="30" width="12" height="45" rx="2" fill="rgba(255,255,255,0.4)" />
            <rect x="83" y="15" width="12" height="60" rx="2" fill="rgba(255,255,255,0.6)" />
            <polyline points="20,50 37,38 54,22 71,27 88,12" stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case 'responsive':
      return (
        <div className="artikel-card-mockup" style={{ background: 'linear-gradient(135deg,#4facfe,#00f2fe)' }}>
          <svg viewBox="0 0 120 80" fill="none" style={{ width: '100%', height: '100%' }}>
            <rect x="10" y="8" width="100" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
            <rect x="10" y="20" width="45" height="50" rx="4" fill="rgba(255,255,255,0.15)" />
            <rect x="60" y="20" width="50" height="23" rx="4" fill="rgba(255,255,255,0.15)" />
            <rect x="60" y="47" width="50" height="23" rx="4" fill="rgba(255,255,255,0.15)" />
            <rect x="15" y="26" width="35" height="5" rx="2" fill="rgba(255,255,255,0.4)" />
            <rect x="15" y="34" width="25" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
          </svg>
        </div>
      );
    case 'speed':
      return (
        <div className="artikel-card-mockup" style={{ background: 'linear-gradient(135deg,#43e97b,#38f9d7)' }}>
          <svg viewBox="0 0 120 80" fill="none" style={{ width: '100%', height: '100%' }}>
            <rect x="25" y="10" width="70" height="55" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <polyline points="40,45 50,35 58,42 75,25" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="75" cy="25" r="3" fill="rgba(255,255,255,0.8)" />
            <rect x="35" y="52" width="50" height="5" rx="2" fill="rgba(255,255,255,0.3)" />
          </svg>
        </div>
      );
    case 'branding':
      return (
        <div className="artikel-card-mockup" style={{ background: 'linear-gradient(135deg,#fa709a,#fee140)' }}>
          <svg viewBox="0 0 120 80" fill="none" style={{ width: '100%', height: '100%' }}>
            <circle cx="40" cy="40" r="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
            <circle cx="40" cy="40" r="15" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" />
            <circle cx="40" cy="40" r="8" fill="rgba(255,255,255,0.3)" />
            <rect x="70" y="22" width="35" height="5" rx="2" fill="rgba(255,255,255,0.4)" />
            <rect x="70" y="32" width="28" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
            <rect x="70" y="42" width="35" height="5" rx="2" fill="rgba(255,255,255,0.4)" />
            <rect x="70" y="52" width="20" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
          </svg>
        </div>
      );
    case 'googleBusiness':
      return (
        <div className="artikel-card-mockup" style={{ background: 'linear-gradient(135deg,#a18cd1,#fbc2eb)' }}>
          <svg viewBox="0 0 120 80" fill="none" style={{ width: '100%', height: '100%' }}>
            <rect x="15" y="12" width="90" height="10" rx="5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <rect x="20" y="14" width="50" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
            <rect x="15" y="30" width="90" height="8" rx="2" fill="rgba(255,255,255,0.2)" />
            <rect x="15" y="42" width="70" height="5" rx="2" fill="rgba(255,255,255,0.15)" />
            <rect x="15" y="52" width="90" height="8" rx="2" fill="rgba(255,255,255,0.2)" />
            <rect x="15" y="64" width="55" height="5" rx="2" fill="rgba(255,255,255,0.15)" />
            <circle cx="100" cy="34" r="3" fill="rgba(255,255,255,0.5)" />
            <circle cx="100" cy="56" r="3" fill="rgba(255,255,255,0.5)" />
          </svg>
        </div>
      );
    case 'website':
    case 'seo':
    default:
      return (
        <div className="artikel-card-mockup" style={{ background: 'linear-gradient(135deg,#667eea,#764ba2)' }}>
          <svg viewBox="0 0 120 80" fill="none" style={{ width: '100%', height: '100%' }}>
            <rect x="10" y="10" width="100" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
            <circle cx="60" cy="40" r="15" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" />
            <line x1="71" y1="51" x2="85" y2="65" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" />
            <rect x="20" y="60" width="30" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
            <rect x="55" y="60" width="45" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
          </svg>
        </div>
      );
  }
}

export function FeaturedArticleVisual() {
  return (
    <div className="featured-mockup">
      <div className="featured-mockup-bar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="featured-mockup-body">
        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
          <div style={{ width: 60, height: 10, borderRadius: 6, background: 'var(--gradient-primary)' }}></div>
          <div style={{ flex: 1, display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
            <div style={{ width: 30, height: 8, borderRadius: 4, background: 'var(--color-border)' }}></div>
            <div style={{ width: 30, height: 8, borderRadius: 4, background: 'var(--color-border)' }}></div>
            <div style={{ width: 30, height: 8, borderRadius: 4, background: 'var(--color-border)' }}></div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{ height: 14, width: '90%', borderRadius: 6, background: '#1821F5', marginBottom: 8 }}></div>
            <div style={{ height: 14, width: '70%', borderRadius: 6, background: '#1821F5', marginBottom: 12 }}></div>
            <div style={{ height: 8, width: '100%', borderRadius: 4, background: 'var(--color-border)', marginBottom: 4 }}></div>
            <div style={{ height: 8, width: '85%', borderRadius: 4, background: 'var(--color-border)', marginBottom: 12 }}></div>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ width: 70, height: 28, borderRadius: 8, background: 'var(--gradient-primary)' }}></div>
              <div style={{ width: 70, height: 28, borderRadius: 8, border: '1px solid var(--color-border)' }}></div>
            </div>
          </div>
          <div style={{ width: 100, height: 90, borderRadius: 12, background: 'var(--color-bg-secondary)' }}></div>
        </div>
      </div>
    </div>
  );
}
