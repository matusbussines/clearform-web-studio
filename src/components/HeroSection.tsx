import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Geometric Shapes Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle top right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-foreground/5" />
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-secondary/60" />
        
        {/* Floating squares */}
        <div className="absolute top-1/4 left-[10%] w-24 h-24 rounded-2xl bg-secondary/80 rotate-12" />
        <div className="absolute top-1/3 left-[15%] w-16 h-16 rounded-xl border border-foreground/5 rotate-45" />
        
        {/* Bottom left shapes */}
        <div className="absolute bottom-20 left-[5%] w-40 h-40 rounded-full border border-foreground/5" />
        <div className="absolute bottom-32 left-[8%] w-20 h-20 rounded-full bg-secondary/70" />
        
        {/* Right side shapes */}
        <div className="absolute top-1/2 right-[8%] w-32 h-32 rounded-2xl bg-secondary/50 -rotate-12" />
        <div className="absolute top-[60%] right-[12%] w-12 h-12 rounded-lg border border-foreground/5 rotate-6" />
        
        {/* Center decorative lines */}
        <div className="absolute top-[20%] left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
        <div className="absolute bottom-[25%] left-1/3 w-px h-24 bg-gradient-to-b from-transparent via-foreground/5 to-transparent" />
      </div>

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
