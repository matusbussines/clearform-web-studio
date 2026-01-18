import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, Zap, Monitor, Layout, Settings } from 'lucide-react';

const icons = [MessageCircle, Zap, Monitor, Layout, Settings];

const WhyUsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.whyUs.benefits.map((benefit, index) => {
              const Icon = icons[index];
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
