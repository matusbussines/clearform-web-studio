import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-bold text-primary">
            ClearForm
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} ClearForm. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
