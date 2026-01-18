import React, { createContext, useContext, ReactNode } from 'react';
import { Language, getTranslation, translations } from '@/lib/translations';

type TranslationType = ReturnType<typeof getTranslation>;

interface LanguageContextType {
  language: Language;
  t: TranslationType;
}

// Provide default Slovak translations as fallback
const defaultContext: LanguageContextType = {
  language: 'sk',
  t: translations.sk,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

interface LanguageProviderProps {
  language: Language;
  children: ReactNode;
}

export const LanguageProvider = ({ language, children }: LanguageProviderProps) => {
  const t = getTranslation(language);

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
