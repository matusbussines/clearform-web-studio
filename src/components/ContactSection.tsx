import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-card rounded-xl p-8 text-center shadow-card border border-accent/20">
              <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
              <p className="text-lg font-medium text-foreground">
                {t.contact.form.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-card border border-border">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.name}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border focus:border-accent focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border focus:border-accent focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.message}
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    placeholder={t.contact.form.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border focus:border-accent focus:ring-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-6 rounded-lg shadow-soft hover:shadow-elevated transition-all duration-300"
                >
                  {t.contact.form.submit}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
