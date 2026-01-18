import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-mesh" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid" />
      
      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent/3 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/5 to-transparent blur-3xl" />

      <div className="container relative z-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in">
            {t.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {t.hero.subheadline}
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 text-base rounded-full shadow-elevated hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href="#contact">
                {t.hero.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
