import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Translations } from '../assets/data/translations';

const STORAGE_KEY = 'mt_lang';
const LangContext = createContext(null);

function readStoredLang() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'en' ? 'en' : 'fr';
  } catch (e) {
    return 'fr';
  }
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang);

  const setLang = useCallback((next) => {
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
    setLangState(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // `L` : index dans les champs bilingues [fr, en]
  const value = { lang, setLang, t: Translations[lang], L: lang === 'en' ? 1 : 0 };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
