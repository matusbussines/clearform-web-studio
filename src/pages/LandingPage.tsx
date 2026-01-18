import { useParams, Navigate } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyUsSection from '@/components/WhyUsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

const LandingPage = () => {
  const { lang } = useParams<{ lang: string }>();

  // Validate language parameter
  if (lang !== 'sk' && lang !== 'en') {
    return <Navigate to="/sk" replace />;
  }

  const language: Language = lang;

  return (
    <LanguageProvider language={language}>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <HowItWorksSection />
          <WhyUsSection />
          <ContactSection />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </LanguageProvider>
  );
};

export default LandingPage;
