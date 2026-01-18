import React, { createContext, useContext, ReactNode } from 'react';
import { Language, getTranslation } from '@/lib/translations';

type TranslationType = ReturnType<typeof getTranslation>;

interface LanguageContextType {
  language: Language;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
