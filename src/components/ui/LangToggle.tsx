'use client';
import { useLang } from '@/hooks/useLanguage';

export default function LangToggle() {
  const { lang, toggleLang } = useLang();
  return (
    <button className="lang-toggle" onClick={toggleLang} aria-label="Change Language">
      <span className="lang-text">{lang === 'id' ? 'EN' : 'ID'}</span>
      <span className="lang-flag">{lang === 'id' ? '🇬🇧' : '🇮🇩'}</span>
    </button>
  );
}
