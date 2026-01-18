export type Language = 'sk' | 'en';

export const translations = {
  sk: {
    nav: {
      services: 'Služby',
      howItWorks: 'Ako to funguje',
      whyUs: 'Prečo my',
      contact: 'Kontakt',
    },
    hero: {
      headline: 'Profesionálna webová stránka pre váš biznis',
      subheadline: 'Jednoduchá, moderná a rýchla. Vytvorím pre vás webovú prezentáciu, ktorá zaujme vašich zákazníkov.',
      cta: 'Nezáväzná konzultácia',
    },
    services: {
      title: 'Čo pre vás môžem vytvoriť',
      subtitle: 'Kompletné riešenia pre vašu online prezentáciu',
      items: [
        {
          title: 'Jednoduchá One-Page stránka',
          description: 'Prehľadná jednostránková prezentácia vášho podnikania s moderným dizajnom.',
        },
        {
          title: 'Vlastný dizajn na mieru',
          description: 'Unikátny vzhľad, ktorý odráža charakter vašej značky a osloví vašu cieľovú skupinu.',
        },
        {
          title: 'Google Business profil',
          description: 'Nastavenie a optimalizácia vášho firemného profilu na Google pre lepšiu viditeľnosť.',
        },
        {
          title: 'Základné SEO & Google Maps',
          description: 'Optimalizácia pre vyhľadávače a registrácia na Google Maps pre lokálnych zákazníkov.',
        },
      ],
    },
    howItWorks: {
      title: 'Ako to funguje',
      subtitle: 'Jednoduchý proces v 4 krokoch',
      steps: [
        {
          number: '01',
          title: 'Konzultácia',
          description: 'Spoločne si prejdeme vaše potreby a predstavy o webovej stránke.',
        },
        {
          number: '02',
          title: 'Návrh',
          description: 'Pripravím návrh dizajnu a štruktúry stránky na schválenie.',
        },
        {
          number: '03',
          title: 'Realizácia',
          description: 'Vytvorím kompletnú webovú stránku podľa schváleného návrhu.',
        },
        {
          number: '04',
          title: 'Spustenie',
          description: 'Stránku nasadíme online a ukážem vám, ako ju spravovať.',
        },
      ],
    },
    whyUs: {
      title: 'Prečo spolupracovať so mnou',
      subtitle: 'Jednoducho a bez komplikácií',
      benefits: [
        {
          title: 'Jasná komunikácia',
          description: 'Žiadny technický žargón. Hovoríme jazykom, ktorému rozumiete.',
        },
        {
          title: 'Rýchle dodanie',
          description: 'Vašu stránku doručím v dohodnutom termíne, bez zbytočných prieťahov.',
        },
        {
          title: 'Moderný dizajn',
          description: 'Čistý, profesionálny vzhľad, ktorý funguje na všetkých zariadeniach.',
        },
        {
          title: 'Jednoduchá štruktúra',
          description: 'Prehľadné usporiadanie obsahu, v ktorom sa návštevníci ľahko zorientujú.',
        },
      ],
    },
    contact: {
      title: 'Začnime spoluprácu',
      subtitle: 'Napíšte mi a spoločne nájdeme riešenie pre váš biznis',
      form: {
        name: 'Vaše meno',
        email: 'Váš email',
        message: 'Vaša správa',
        namePlaceholder: 'Ján Novák',
        emailPlaceholder: 'jan@priklad.sk',
        messagePlaceholder: 'Popíšte, aký web potrebujete...',
        submit: 'Odoslať správu',
        success: 'Ďakujem! Ozvem sa vám čo najskôr.',
      },
    },
    footer: {
      rights: 'Všetky práva vyhradené.',
    },
    cookies: {
      text: 'Táto webová stránka používa cookies na zabezpečenie správneho fungovania a na zlepšenie používateľského zážitku. Nepoužívame marketingové cookies.',
      accept: 'Súhlasím',
      reject: 'Odmietnuť',
    },
  },
  en: {
    nav: {
      services: 'Services',
      howItWorks: 'How it works',
      whyUs: 'Why us',
      contact: 'Contact',
    },
    hero: {
      headline: 'Professional website for your business',
      subheadline: 'Simple, modern, and fast. I create web presentations that engage your customers.',
      cta: 'Free consultation',
    },
    services: {
      title: 'What I can create for you',
      subtitle: 'Complete solutions for your online presence',
      items: [
        {
          title: 'Simple One-Page Website',
          description: 'A clean single-page presentation of your business with modern design.',
        },
        {
          title: 'Custom Design',
          description: 'A unique look that reflects your brand character and appeals to your target audience.',
        },
        {
          title: 'Google Business Profile',
          description: 'Setup and optimization of your business profile on Google for better visibility.',
        },
        {
          title: 'Basic SEO & Google Maps',
          description: 'Search engine optimization and Google Maps registration for local customers.',
        },
      ],
    },
    howItWorks: {
      title: 'How it works',
      subtitle: 'Simple process in 4 steps',
      steps: [
        {
          number: '01',
          title: 'Consultation',
          description: 'We discuss your needs and vision for the website together.',
        },
        {
          number: '02',
          title: 'Design',
          description: 'I prepare a design proposal and page structure for approval.',
        },
        {
          number: '03',
          title: 'Development',
          description: 'I create the complete website according to the approved design.',
        },
        {
          number: '04',
          title: 'Launch',
          description: 'We deploy the site online and I show you how to manage it.',
        },
      ],
    },
    whyUs: {
      title: 'Why work with me',
      subtitle: 'Simple and hassle-free',
      benefits: [
        {
          title: 'Clear communication',
          description: 'No technical jargon. We speak a language you understand.',
        },
        {
          title: 'Fast delivery',
          description: 'Your website delivered on the agreed deadline, no unnecessary delays.',
        },
        {
          title: 'Modern design',
          description: 'Clean, professional look that works on all devices.',
        },
        {
          title: 'Simple structure',
          description: 'Clear content organization that visitors can easily navigate.',
        },
      ],
    },
    contact: {
      title: "Let's start working together",
      subtitle: 'Get in touch and we will find the right solution for your business',
      form: {
        name: 'Your name',
        email: 'Your email',
        message: 'Your message',
        namePlaceholder: 'John Smith',
        emailPlaceholder: 'john@example.com',
        messagePlaceholder: 'Describe what kind of website you need...',
        submit: 'Send message',
        success: 'Thank you! I will get back to you soon.',
      },
    },
    footer: {
      rights: 'All rights reserved.',
    },
    cookies: {
      text: 'This website uses cookies to ensure proper functionality and improve user experience. We do not use marketing cookies.',
      accept: 'Accept',
      reject: 'Reject',
    },
  },
};

export const getTranslation = (lang: Language) => translations[lang];
