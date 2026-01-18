import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

// Cookie consent storage key
const COOKIE_CONSENT_KEY = 'clearform_cookie_consent';

// Possible consent values
type ConsentValue = 'accepted' | 'rejected' | null;

/**
 * Get stored cookie consent from localStorage
 */
const getStoredConsent = (): ConsentValue => {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (stored === 'accepted' || stored === 'rejected') {
    return stored;
  }
  return null;
};

/**
 * Store cookie consent in localStorage
 */
const storeConsent = (value: 'accepted' | 'rejected') => {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
};

const CookieBanner = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  // Check if consent was already given on mount
  useEffect(() => {
    const consent = getStoredConsent();
    // Show banner only if no consent was given yet
    if (consent === null) {
      // Small delay for better UX - don't show immediately on page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  /**
   * Handle user accepting cookies
   */
  const handleAccept = () => {
    storeConsent('accepted');
    setIsVisible(false);
    // Here you could initialize analytics or other non-essential scripts
    // Example: initializeAnalytics();
  };

  /**
   * Handle user rejecting cookies
   * Essential cookies are still allowed, only non-essential are blocked
   */
  const handleReject = () => {
    storeConsent('rejected');
    setIsVisible(false);
    // Non-essential scripts will not be loaded
  };

  // Don't render anything if banner shouldn't be visible
  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-elevated">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Cookie icon */}
            <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-lg bg-secondary items-center justify-center">
              <Cookie className="w-5 h-5 text-muted-foreground" />
            </div>

            {/* Text content */}
            <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
              {t.cookies.text}
            </p>

            {/* Action buttons */}
            <div className="flex gap-3 w-full md:w-auto flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReject}
                className="flex-1 md:flex-none text-sm"
              >
                {t.cookies.reject}
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                className="flex-1 md:flex-none bg-accent hover:bg-accent/90 text-accent-foreground text-sm"
              >
                {t.cookies.accept}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
