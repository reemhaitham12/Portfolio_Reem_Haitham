import React, { createContext, useEffect, useState } from 'react';

export const LanguageContext = createContext();

const LANGUAGE_STORAGE_KEY = 'reem-portfolio-language';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return stored === 'ar' ? 'ar' : 'en';
  });

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    const langAttr = language === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = dir;
    document.documentElement.lang = langAttr;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
