'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Lang = 'id' | 'en';

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (id: string, en: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: 'id',
  toggleLang: () => {},
  t: (id) => id,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('id');
  const toggleLang = useCallback(() => setLang(l => l === 'id' ? 'en' : 'id'), []);
  const t = useCallback((id: string, en: string) => lang === 'id' ? id : en, [lang]);
  return <LangContext.Provider value={{ lang, toggleLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
