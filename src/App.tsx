import React, { useEffect, useMemo, useState } from 'react';

// Full replacement App.tsx
// No external images required.
// Tailwind-based, single-file, deploy-safe demo experience.

type LanguageKey = 'en' | 'es' | 'tl' | 'it' | 'patwa' | 'he';
type StepKey = 'soundbite' | 'intro' | 'knowledge' | 'purpose' | 'next';
type PathwayKey = 'guest' | 'customer' | 'marketplace' | 'grower' | 'youth' | 'partners';

type LanguageOption = {
  key: LanguageKey;
  label: string;
  voiceLabel: string;
  dir?: 'ltr' | 'rtl';
};

type StepContent = {
  title: string;
  body: string;
  bullets?: string[];
  cta?: string;
};

type PathwayContent = {
  title: string;
  mission: string;
  summary: string;
  accent: string;
  icon: string;
  outcome: string;
  steps: Record<StepKey, StepContent>;
};

const languages: LanguageOption[] = [
  { key: 'en', label: 'English', voiceLabel: 'English' },
  { key: 'es', label: 'Español', voiceLabel: 'Spanish' },
  { key: 'tl', label: 'Tagalog', voiceLabel: 'Tagalog' },
  { key: 'it', label: 'Italiano', voiceLabel: 'Italian' },
  { key: 'patwa', label: 'Patwa', voiceLabel: 'Jamaican Patois' },
  { key: 'he', label: 'עברית', voiceLabel: 'Hebrew', dir: 'rtl' },
];

const stepOrder: StepKey[] = ['soundbite', 'intro', 'knowledge', 'purpose', 'next'];

const stepLabels: Record<StepKey, string> = {
  soundbite: 'Sound Bite',
  intro: 'Intro',
  knowledge: 'Knowledge',
  purpose: 'Purpose',
  next: 'Next',
};

const sharedTranslations: Record<LanguageKey, Record<string, string>> = {
  en: {
    homeTitle: 'Bronson Family Farm',
    homeSubtitle: 'An ecosystem for food, learning, wellness, workforce, and community return.',
    missionBar: 'Serving Mahoning Valley through regenerative agriculture, education, marketplace access, and partnership.',
    choosePath: 'Choose a pathway',
    explore: 'Explore Pathway',
    mission: 'Mission',
    outcome: 'Outcome',
    guidedMode: 'Guided Voice',
    on: 'On',
    off: 'Off',
    backHome: 'Back to Home',
    backPathways: 'All Pathways',
    nextLayer: 'Next Layer',
    previous: 'Previous',
    openStore: 'Open GrownBy Store',
    language: 'Language',
    layers: 'Journey Layers',
    liveSignals: 'Live Signals',
    weather: 'Youngstown Weather',
    market: 'Marketplace',
    story: 'Story',
    resources: 'Resources',
    progress: 'Progress',
    complete: 'Complete',
    returnLine: 'Built so people understand the mission, receive value, and have a reason to return again.',
  },
  es: {
    homeTitle: 'Bronson Family Farm',
    homeSubtitle: 'Un ecosistema para alimentos, aprendizaje, bienestar, trabajo y comunidad.',
    missionBar: 'Sirviendo al Valle de Mahoning mediante agricultura regenerativa, educación, acceso al mercado y alianzas.',
    choosePath: 'Elija una ruta',
    explore: 'Explorar Ruta',
    mission: 'Misión',
    outcome: 'Resultado',
    guidedMode: 'Voz Guiada',
    on: 'Sí',
    off: 'No',
    backHome: 'Volver al Inicio',
    backPathways: 'Todas las Rutas',
    nextLayer: 'Siguiente Capa',
    previous: 'Anterior',
    openStore: 'Abrir Tienda GrownBy',
    language: 'Idioma',
    layers: 'Capas del Recorrido',
    liveSignals: 'Señales en Vivo',
    weather: 'Clima de Youngstown',
    market: 'Mercado',
    story: 'Historia',
    resources: 'Recursos',
    progress: 'Progreso',
    complete: 'Completo',
    returnLine: 'Diseñado para que las personas entiendan la misión, reciban valor y tengan una razón para regresar.',
  },
  tl: {
    homeTitle: 'Bronson Family Farm',
    homeSubtitle: 'Isang ecosystem para sa pagkain, pagkatuto, kagalingan, trabaho, at komunidad.',
    missionBar: 'Naglilingkod sa Mahoning Valley sa pamamagitan ng regenerative agriculture, edukasyon, access sa marketplace, at partnership.',
    choosePath: 'Pumili ng landas',
    explore: 'Buksan ang Landas',
    mission: 'Misyon',
    outcome: 'Kinalabasan',
    guidedMode: 'Gabay na Boses',
    on: 'Bukas',
    off: 'Patay',
    backHome: 'Balik sa Home',
    backPathways: 'Lahat ng Landas',
    nextLayer: 'Susunod na Layer',
    previous: 'Nakaraan',
    openStore: 'Buksan ang GrownBy Store',
    language: 'Wika',
    layers: 'Mga Layer ng Paglalakbay',
    liveSignals: 'Live Signals',
    weather: 'Panahon sa Youngstown',
    market: 'Marketplace',
    story: 'Kuwento',
    resources: 'Resources',
    progress: 'Progreso',
    complete: 'Tapos',
    returnLine: 'Ginawa upang maunawaan ng tao ang misyon, makatanggap ng halaga, at magkaroon ng dahilan upang bumalik.',
  },
  it: {
    homeTitle: 'Bronson Family Farm',
    homeSubtitle: 'Un ecosistema per cibo, apprendimento, benessere, lavoro e comunità.',
    missionBar: 'Al servizio della Mahoning Valley attraverso agricoltura rigenerativa, educazione, accesso al mercato e partnership.',
    choosePath: 'Scegli un percorso',
    explore: 'Esplora Percorso',
    mission: 'Missione',
    outcome: 'Risultato',
    guidedMode: 'Voce Guidata',
    on: 'On',
    off: 'Off',
    backHome: 'Torna alla Home',
    backPathways: 'Tutti i Percorsi',
    nextLayer: 'Livello Successivo',
    previous: 'Precedente',
    openStore: 'Apri Negozio GrownBy',
    language: 'Lingua',
    layers: 'Livelli del Percorso',
    liveSignals: 'Segnali Live',
    weather: 'Meteo Youngstown',
    market: 'Marketplace',
    story: 'Storia',
    resources: 'Risorse',
    progress: 'Progresso',
    complete: 'Completo',
    returnLine: 'Costruito perché le persone comprendano la missione, ricevano valore e abbiano un motivo per tornare.',
  },
  patwa: {
    homeTitle: 'Bronson Family Farm',
    homeSubtitle: 'A one ecosystem fi food, learning, wellness, work, an community.',
    missionBar: 'A serve Mahoning Valley through regenerative farming, education, market access, an partnership.',
    choosePath: 'Choose yuh pathway',
    explore: 'Go Inna Pathway',
    mission: 'Mission',
    outcome: 'Outcome',
    guidedMode: 'Guide Voice',
    on: 'Pon',
    off: 'Off',
    backHome: 'Back Home',
    backPathways: 'All Pathway',
    nextLayer: 'Next Layer',
    previous: 'Previous',
    openStore: 'Open GrownBy Store',
    language: 'Language',
    layers: 'Journey Layer',
    liveSignals: 'Live Signals',
    weather: 'Youngstown Weather',
    market: 'Marketplace',
    story: 'Story',
    resources: 'Resources',
    progress: 'Progress',
    complete: 'Done',
    returnLine: 'Build so people understand di mission, get value, an have reason fi come back.',
  },
  he: {
    homeTitle: 'Bronson Family Farm',
    homeSubtitle: 'מערכת אקולוגית למזון, למידה, בריאות, עבודה וקהילה.',
    missionBar: 'משרתים את עמק מהונינג באמצעות חקלאות רגנרטיבית, חינוך, גישה לשוק ושותפויות.',
    choosePath: 'בחרו מסלול',
    explore: 'פתחו מסלול',
    mission: 'משימה',
    outcome: 'תוצאה',
    guidedMode: 'קול מודרך',
    on: 'פעיל',
    off: 'כבוי',
    backHome: 'חזרה לדף הבית',
    backPathways: 'כל המסלולים',
    nextLayer: 'השכבה הבאה',
    previous: 'הקודם',
    openStore: 'פתחו את חנות GrownBy',
    language: 'שפה',
    layers: 'שכבות המסע',
    liveSignals: 'אותות חיים',
    weather: 'מזג האוויר ביאנגסטאון',
    market: 'שוק',
    story: 'סיפור',
    resources: 'משאבים',
    progress: 'התקדמות',
    complete: 'הושלם',
    returnLine: 'נבנה כדי שאנשים יבינו את המשימה, יקבלו ערך, וירצו לחזור שוב.',
  },
};

const pathways: Record<PathwayKey, PathwayContent> = {
  guest: {
    title: 'Guest',
    mission: 'Understand the vision, story, and purpose of Bronson Family Farm.',
    summary: 'A welcoming entry experience that turns curiosity into understanding.',
    accent: 'from-emerald-500/25 to-lime-400/10',
    icon: '✦',
    outcome: 'Guests leave understanding why this land matters and why the work should continue.',
    steps: {
      soundbite: {
        title: 'You are not just entering a farm.',
        body: 'You are entering a regenerative community destination where land, food, wellness, family legacy, and opportunity come together on purpose.',
      },
      intro: {
        title: 'What people feel first',
        body: 'Bronson Family Farm welcomes visitors into a place that restores land and reconnects people to food, nature, and community value in Youngstown.',
        bullets: [
          'A living story, not a static presentation',
          'Built to serve Mahoning Valley',
          'Centered on return, belonging, and discovery',
        ],
      },
      knowledge: {
        title: 'What guests learn',
        body: 'This pathway explains the origin, the agricultural vision, the airport-land transformation, and the wider ecosystem connected to education, food access, and family legacy.',
        bullets: [
          'Regenerative agriculture and land restoration',
          'Family heritage and community purpose',
          'A gateway into learning, events, and partnerships',
        ],
      },
      purpose: {
        title: 'Why this pathway exists',
        body: 'Guests need more than words. They need a clear reason to care, a clear reason to trust, and a clear reason to come back with others.',
      },
      next: {
        title: 'What happens next',
        body: 'Guests can move into the marketplace, attend events, explore learning opportunities, or become advocates, volunteers, and future partners.',
        cta: 'Continue deeper into the ecosystem.',
      },
    },
  },
  customer: {
    title: 'Customer',
    mission: 'Guide people toward fresh food, nutrition, and repeat healthy choices.',
    summary: 'A food-and-wellness pathway that helps people understand what to buy and why it matters.',
    accent: 'from-green-500/25 to-yellow-400/10',
    icon: '◉',
    outcome: 'Customers leave informed, connected to healthier food choices, and ready to return regularly.',
    steps: {
      soundbite: {
        title: 'Food is not just a purchase. It is a health decision.',
        body: 'This pathway helps customers connect fresh food to nourishment, family well-being, and everyday healthier habits.',
      },
      intro: {
        title: 'What customers experience',
        body: 'Customers are welcomed into a simple, understandable journey that connects produce, seedlings, food value, and better daily choices.',
        bullets: [
          'Fresh food connected to community',
          'Education that is easy to understand',
          'Reasons to return again and again',
        ],
      },
      knowledge: {
        title: 'What customers learn',
        body: 'Customers learn how local produce supports health, why fresh food matters, and how Bronson Family Farm can become part of a healthier routine.',
        bullets: [
          'Fresh versus overprocessed food',
          'Nutrition, access, and healthy habits',
          'Seasonal offerings and repeat engagement',
        ],
      },
      purpose: {
        title: 'Why this pathway exists',
        body: 'The purpose is to move people from interest to informed action so they buy with meaning, eat with intention, and return with trust.',
      },
      next: {
        title: 'What happens next',
        body: 'Customers can move directly into the marketplace, reserve for events, revisit seasonal products, and reconnect with the farm over time.',
        cta: 'Shop, learn, and return.',
      },
    },
  },
  marketplace: {
    title: 'Marketplace',
    mission: 'Convert interest into purchasing power and long-term sustainability.',
    summary: 'The commercial pathway where intention becomes action through GrownBy and farm offerings.',
    accent: 'from-amber-500/25 to-orange-400/10',
    icon: '▣',
    outcome: 'Marketplace visitors clearly understand how to buy, support the mission, and keep the ecosystem sustainable.',
    steps: {
      soundbite: {
        title: 'This is where mission meets movement.',
        body: 'The marketplace turns support into real transactions that strengthen food access, farm growth, and long-term sustainability.',
      },
      intro: {
        title: 'What the marketplace means',
        body: 'This is not a generic shop page. It is the bridge between the farm story and real purchasing power through Bronson Family Farm and GrownBy.',
        bullets: [
          'Buy produce and seasonal items',
          'Support a regenerative local ecosystem',
          'Create repeat revenue for growth',
        ],
      },
      knowledge: {
        title: 'What people understand here',
        body: 'The marketplace shows how orders, pickups, customer trust, and sustainable sales all help the farm keep serving the community.',
        bullets: [
          'GrownBy integration and customer pathway',
          'Seasonal shopping and local food flow',
          'Sustainability through recurring support',
        ],
      },
      purpose: {
        title: 'Why this pathway exists',
        body: 'Interest alone does not sustain land, programs, or operations. The marketplace exists so value can move into action and real support.',
      },
      next: {
        title: 'What happens next',
        body: 'Visitors can open the GrownBy storefront, review upcoming availability, place orders, and re-enter the wider farm ecosystem with confidence.',
        cta: 'Move from support to purchase.',
      },
    },
  },
  grower: {
    title: 'Grower',
    mission: 'Connect producers to opportunity and meaningful market participation.',
    summary: 'A pathway for growers to see possibility, connection, and a place inside the ecosystem.',
    accent: 'from-teal-500/25 to-cyan-400/10',
    icon: '⬡',
    outcome: 'Growers understand there is a real place for them to participate, sell, learn, and grow with others.',
    steps: {
      soundbite: {
        title: 'Growers need more than land. They need pathway, structure, and opportunity.',
        body: 'This experience shows how growers can connect to training, market access, collaboration, and long-term participation.',
      },
      intro: {
        title: 'What growers encounter',
        body: 'Growers are welcomed into a system that values production, shared learning, visibility, and economic opportunity.',
        bullets: [
          'Participation in a larger ecosystem',
          'Visibility and market connection',
          'A sense of belonging and growth',
        ],
      },
      knowledge: {
        title: 'What growers learn',
        body: 'This pathway explains how growers can connect to marketplace flow, learning opportunities, events, and future regional participation.',
        bullets: [
          'Market participation and product flow',
          'Collaborative learning and support',
          'Opportunity within a broader food system',
        ],
      },
      purpose: {
        title: 'Why this pathway exists',
        body: 'The grower pathway exists to reduce isolation, increase opportunity, and make participation feel practical, visible, and worth returning to.',
      },
      next: {
        title: 'What happens next',
        body: 'Growers can move toward collaboration, future listings, event participation, and stronger integration into the regional food ecosystem.',
        cta: 'Connect and participate.',
      },
    },
  },
  youth: {
    title: 'Youth Workforce',
    mission: 'Build skills, responsibility, and future readiness.',
    summary: 'A structured pathway for learning, practice, support, and personal growth.',
    accent: 'from-violet-500/25 to-fuchsia-400/10',
    icon: '▲',
    outcome: 'Young people and families understand that this pathway leads to real growth, real support, and future readiness.',
    steps: {
      soundbite: {
        title: 'This pathway helps young people grow into responsibility.',
        body: 'Youth workforce is not just about tasks. It is about skills, confidence, support, and future direction.',
      },
      intro: {
        title: 'What youth and families experience',
        body: 'This pathway introduces a supportive structure where young people learn through hands-on work, guided expectations, and caring supervision.',
        bullets: [
          'Hands-on learning and practical roles',
          'Support systems and supervision',
          'A pathway that connects growth to future readiness',
        ],
      },
      knowledge: {
        title: 'What they learn',
        body: 'Young people see how responsibility, teamwork, agriculture, logistics, and personal development come together in one real environment.',
        bullets: [
          'Work habits and role clarity',
          'Skill development and readiness',
          'Support resources including youth supervision and wellness support',
        ],
      },
      purpose: {
        title: 'Why this pathway exists',
        body: 'This pathway exists to help youth move from exposure to growth, with meaningful experience and support that strengthens their future.',
      },
      next: {
        title: 'What happens next',
        body: 'Youth participants can continue into structured programming, guided roles, supervision, and family-connected support pathways.',
        cta: 'Grow into readiness.',
      },
    },
  },
  partners: {
    title: 'Partners',
    mission: 'Align resources and collaboration for community benefit.',
    summary: 'A pathway that shows why partnership here produces meaningful local impact.',
    accent: 'from-sky-500/25 to-blue-400/10',
    icon: '◆',
    outcome: 'Partners understand where they fit, how their support matters, and what shared impact can look like.',
    steps: {
      soundbite: {
        title: 'Partnership here is practical, visible, and community-facing.',
        body: 'This pathway shows how aligned partners can support land restoration, food access, education, workforce, and public value.',
      },
      intro: {
        title: 'What partners see',
        body: 'Partners see a platform where resources do not disappear into abstraction. They are translated into visible outcomes for people and place.',
        bullets: [
          'Shared value and visible alignment',
          'Community-facing outcomes',
          'Opportunities for long-term collaboration',
        ],
      },
      knowledge: {
        title: 'What partners understand',
        body: 'The partner pathway explains how support can connect to events, youth development, food access, education, marketplace growth, and place-based revitalization.',
        bullets: [
          'Where support fits',
          'How collaboration strengthens capacity',
          'Why this ecosystem is worth joining',
        ],
      },
      purpose: {
        title: 'Why this pathway exists',
        body: 'Partnership requires clarity. This pathway exists so organizations, institutions, and supporters can immediately understand their role and value.',
      },
      next: {
        title: 'What happens next',
        body: 'Partners can move into meetings, sponsorship, collaboration, program support, event engagement, and ecosystem-building decisions.',
        cta: 'Align support with impact.',
      },
    },
  },
};

const pathwayOrder: PathwayKey[] = ['guest', 'customer', 'marketplace', 'grower', 'youth', 'partners'];

function useTypedTranslation(language: LanguageKey) {
  return (key: string) => sharedTranslations[language]?.[key] ?? sharedTranslations.en[key] ?? key;
}

function useSpeech(language: LanguageKey, enabled: boolean) {
  const speak = (text: string) => {
    if (!enabled || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    const matchers: Record<LanguageKey, string[]> = {
      en: ['en-US', 'en_US', 'English'],
      es: ['es', 'Spanish'],
      tl: ['tl', 'fil', 'Tagalog'],
      it: ['it', 'Italian'],
      patwa: ['en-JM', 'Jamaica', 'English'],
      he: ['he', 'Hebrew', 'iw'],
    };

    const preferred = matchers[language];
    const foundVoice = voices.find((voice) =>
      preferred.some((p) => voice.lang?.includes(p) || voice.name?.toLowerCase().includes(p.toLowerCase()))
    );

    if (foundVoice) utterance.voice = foundVoice;
    utterance.rate = language === 'patwa' ? 0.92 : 0.98;
    utterance.pitch = 1;
    utterance.lang = foundVoice?.lang || (language === 'he' ? 'he-IL' : language === 'es' ? 'es-US' : language === 'it' ? 'it-IT' : 'en-US');
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  return { speak, stop };
}

function LayerProgress({ currentStep }: { currentStep: StepKey }) {
  const currentIndex = stepOrder.indexOf(currentStep);
  return (
    <div className="flex flex-wrap gap-2">
      {stepOrder.map((step, idx) => {
        const active = idx === currentIndex;
        const done = idx < currentIndex;
        return (
          <div
            key={step}
            className={`rounded-full border px-3 py-1 text-xs tracking-[0.18em] uppercase transition ${
              active
                ? 'border-white/50 bg-white/18 text-white'
                : done
                ? 'border-emerald-300/40 bg-emerald-300/15 text-emerald-100'
                : 'border-white/12 bg-white/6 text-white/60'
            }`}
          >
            {stepLabels[step]}
          </div>
        );
      })}
    </div>
  );
}

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/14 bg-white/[0.06] shadow-2xl shadow-black/25 backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState<LanguageKey>('en');
  const [voiceEnabled, setVoiceEnabled] = useState<boolean>(false);
  const [selectedPathway, setSelectedPathway] = useState<PathwayKey | null>(null);
  const [currentStep, setCurrentStep] = useState<StepKey>('soundbite');
  const [showIntroGlow, setShowIntroGlow] = useState(false);

  const t = useTypedTranslation(language);
  const { speak, stop } = useSpeech(language, voiceEnabled);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntroGlow(true), 250);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!selectedPathway) return;
    const content = pathways[selectedPathway].steps[currentStep];
    const speakText = `${pathways[selectedPathway].title}. ${content.title}. ${content.body}`;
    speak(speakText);
    return () => stop();
  }, [selectedPathway, currentStep, language, voiceEnabled]);

  const activePathway = selectedPathway ? pathways[selectedPathway] : null;
  const activeStep = activePathway ? activePathway.steps[currentStep] : null;
  const progressPct = useMemo(() => ((stepOrder.indexOf(currentStep) + 1) / stepOrder.length) * 100, [currentStep]);

  const nextStep = () => {
    const idx = stepOrder.indexOf(currentStep);
    if (idx < stepOrder.length - 1) setCurrentStep(stepOrder[idx + 1]);
  };

  const prevStep = () => {
    const idx = stepOrder.indexOf(currentStep);
    if (idx > 0) setCurrentStep(stepOrder[idx - 1]);
  };

  const openPathway = (path: PathwayKey) => {
    setSelectedPathway(path);
    setCurrentStep('soundbite');
  };

  const openStore = () => {
    window.open('https://grownby.com/farms/bronson-family-farm/shop', '_blank', 'noopener,noreferrer');
  };

  const openWeather = () => {
    window.open('https://www.accuweather.com/en/us/youngstown/44503/minute-weather-forecast/330121', '_blank', 'noopener,noreferrer');
  };

  const dir = languages.find((l) => l.key === language)?.dir ?? 'ltr';

  return (
    <div dir={dir} className="min-h-screen overflow-hidden bg-[#07140f] text-white">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(58,130,84,0.25),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(239,180,58,0.14),transparent_26%),linear-gradient(180deg,#07140f_0%,#0d1f17_42%,#08120e_100%)]" />
        <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className={`absolute -left-20 top-12 h-72 w-72 rounded-full bg-emerald-500/18 blur-3xl transition-opacity duration-1000 ${showIntroGlow ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-amber-400/12 blur-3xl transition-opacity duration-1000 ${showIntroGlow ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="mb-4">
          <GlassCard className="px-4 py-4 sm:px-6 sm:py-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-emerald-100/90">
                  Developed by Bronson Family Farm
                </div>
                <h1 className="text-3xl font-semibold tracking-[0.04em] sm:text-4xl lg:text-5xl">{t('homeTitle')}</h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/78 sm:text-base">{t('homeSubtitle')}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/55 sm:text-[11px]">{t('missionBar')}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:w-[28rem]">
                <div className="rounded-2xl border border-white/10 bg-black/15 p-3">
                  <div className="mb-2 text-[11px] uppercase tracking-[0.2em] text-white/55">{t('language')}</div>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as LanguageKey)}
                    className="w-full rounded-xl border border-white/12 bg-white/8 px-3 py-2 text-sm text-white outline-none"
                  >
                    {languages.map((lang) => (
                      <option key={lang.key} value={lang.key} className="bg-slate-900 text-white">
                        {lang.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/15 p-3">
                  <div className="mb-2 text-[11px] uppercase tracking-[0.2em] text-white/55">{t('guidedMode')}</div>
                  <button
                    onClick={() => setVoiceEnabled((v) => !v)}
                    className={`w-full rounded-xl px-3 py-2 text-sm font-medium transition ${
                      voiceEnabled ? 'bg-emerald-400/80 text-black' : 'bg-white/8 text-white'
                    }`}
                  >
                    {voiceEnabled ? t('on') : t('off')}
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>
        </header>

        {!selectedPathway ? (
          <main className="grid flex-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <GlassCard className="p-5 sm:p-6 lg:p-8">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-emerald-100/65">{t('choosePath')}</div>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[0.03em] sm:text-3xl">A complete pathway-based demo</h2>
                  </div>
                  <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right sm:block">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-white/50">{t('complete')}</div>
                    <div className="mt-1 text-xl font-semibold">6 / 6</div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {pathwayOrder.map((key) => {
                    const item = pathways[key];
                    return (
                      <button
                        key={key}
                        onClick={() => openPathway(key)}
                        className={`group rounded-[28px] border border-white/12 bg-gradient-to-br ${item.accent} p-[1px] text-left transition duration-300 hover:-translate-y-1 hover:border-white/20`}
                      >
                        <div className="h-full rounded-[27px] bg-[#09150f]/90 p-5">
                          <div className="flex items-start justify-between gap-3">
                            <div className="text-2xl">{item.icon}</div>
                            <div className="rounded-full border border-white/10 bg-white/6 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white/50">
                              Pathway
                            </div>
                          </div>
                          <h3 className="mt-5 text-xl font-semibold tracking-[0.03em] text-white/95">{item.title}</h3>
                          <p className="mt-3 text-sm leading-6 text-white/72">{item.summary}</p>
                          <div className="mt-5 space-y-3">
                            <div>
                              <div className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/45">{t('mission')}</div>
                              <div className="text-sm text-emerald-100/88">{item.mission}</div>
                            </div>
                            <div>
                              <div className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/45">{t('outcome')}</div>
                              <div className="text-sm text-white/76">{item.outcome}</div>
                            </div>
                          </div>
                          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/75 transition group-hover:bg-white/10">
                            {t('explore')} <span>→</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </GlassCard>

              <GlassCard className="p-5 sm:p-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">{t('story')}</div>
                    <div className="mt-2 text-lg font-medium">Land + Legacy + Community</div>
                    <p className="mt-2 text-sm leading-6 text-white/70">This demo helps people quickly understand why Bronson Family Farm exists and what each experience leads toward.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">{t('market')}</div>
                    <div className="mt-2 text-lg font-medium">Mission into Action</div>
                    <p className="mt-2 text-sm leading-6 text-white/70">The marketplace pathway is positioned as a meaningful destination tied to GrownBy, repeat purchases, and sustainability.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">{t('resources')}</div>
                    <div className="mt-2 text-lg font-medium">Reasons to Return</div>
                    <p className="mt-2 text-sm leading-6 text-white/70">Every pathway points people toward value, action, and a stronger reason to come back again.</p>
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className="space-y-4">
              <GlassCard className="p-5 sm:p-6">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">{t('liveSignals')}</div>
                  <div className="rounded-full bg-emerald-400/15 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-100">Live feel</div>
                </div>
                <div className="space-y-3">
                  <button onClick={openWeather} className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10">
                    <div className="text-sm font-medium">{t('weather')}</div>
                    <div className="mt-1 text-sm text-white/65">Open current Youngstown conditions in a new tab.</div>
                  </button>
                  <button onClick={openStore} className="w-full rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-left transition hover:bg-amber-300/14">
                    <div className="text-sm font-medium">{t('openStore')}</div>
                    <div className="mt-1 text-sm text-white/70">Direct bridge to the Bronson Family Farm marketplace on GrownBy.</div>
                  </button>
                </div>
              </GlassCard>

              <GlassCard className="p-5 sm:p-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">{t('progress')}</div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/8">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-emerald-300/80 via-lime-200/70 to-amber-300/75" />
                </div>
                <p className="mt-4 text-sm leading-6 text-white/72">{t('returnLine')}</p>
              </GlassCard>

              <GlassCard className="p-5 sm:p-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">Pathway outcomes</div>
                <div className="mt-4 space-y-3 text-sm text-white/75">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Guest → understanding</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Customer → healthy repeat choices</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Marketplace → purchasing power</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Grower → participation and opportunity</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Youth → skills and readiness</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Partners → aligned community impact</div>
                </div>
              </GlassCard>
            </div>
          </main>
        ) : activePathway && activeStep ? (
          <main className="grid flex-1 gap-4 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-4">
              <GlassCard className="p-5 sm:p-6">
                <div className={`rounded-[28px] bg-gradient-to-br ${activePathway.accent} p-[1px]`}>
                  <div className="rounded-[27px] bg-[#08120d]/92 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-3xl">{activePathway.icon}</div>
                      <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/55">
                        {activePathway.title}
                      </div>
                    </div>
                    <h2 className="mt-5 text-3xl font-semibold tracking-[0.03em]">{activePathway.title} Pathway</h2>
                    <p className="mt-3 text-sm leading-6 text-white/72">{activePathway.summary}</p>
                    <div className="mt-5 space-y-4">
                      <div>
                        <div className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/45">{t('mission')}</div>
                        <p className="text-sm text-emerald-100/88">{activePathway.mission}</p>
                      </div>
                      <div>
                        <div className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/45">{t('outcome')}</div>
                        <p className="text-sm text-white/75">{activePathway.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-5 sm:p-6">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">{t('layers')}</div>
                  <div className="text-xs text-white/55">{Math.round(progressPct)}%</div>
                </div>
                <LayerProgress currentStep={currentStep} />
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                  <div className="h-full rounded-full bg-gradient-to-r from-emerald-300/80 to-amber-300/80" style={{ width: `${progressPct}%` }} />
                </div>
              </GlassCard>

              <GlassCard className="p-5 sm:p-6">
                <div className="grid gap-3">
                  {stepOrder.map((step) => (
                    <button
                      key={step}
                      onClick={() => setCurrentStep(step)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${
                        currentStep === step
                          ? 'border-white/25 bg-white/12'
                          : 'border-white/10 bg-white/5 hover:bg-white/8'
                      }`}
                    >
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/45">Layer</div>
                      <div className="mt-1 text-sm font-medium">{stepLabels[step]}</div>
                    </button>
                  ))}
                </div>
              </GlassCard>
            </div>

            <div className="space-y-4">
              <GlassCard className="p-6 sm:p-7 lg:p-8">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">{stepLabels[currentStep]}</div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[0.03em] sm:text-3xl">{activeStep.title}</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/65">
                    {activePathway.title}
                  </div>
                </div>

                <p className="max-w-4xl text-base leading-8 text-white/82">{activeStep.body}</p>

                {activeStep.bullets && (
                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {activeStep.bullets.map((bullet) => (
                      <div key={bullet} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/78">
                        {bullet}
                      </div>
                    ))}
                  </div>
                )}

                {activeStep.cta && (
                  <div className="mt-6 rounded-2xl border border-emerald-300/18 bg-emerald-300/10 p-4 text-sm text-emerald-100/90">
                    {activeStep.cta}
                  </div>
                )}
              </GlassCard>

              <GlassCard className="p-5 sm:p-6">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <button onClick={() => { stop(); setSelectedPathway(null); }} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:bg-white/10">
                    {t('backHome')}
                  </button>
                  <button onClick={prevStep} disabled={currentStep === 'soundbite'} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40">
                    {t('previous')}
                  </button>
                  <button onClick={nextStep} disabled={currentStep === 'next'} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40">
                    {t('nextLayer')}
                  </button>
                  {selectedPathway === 'marketplace' ? (
                    <button onClick={openStore} className="rounded-2xl border border-amber-300/20 bg-amber-300/12 px-4 py-3 text-sm transition hover:bg-amber-300/16">
                      {t('openStore')}
                    </button>
                  ) : (
                    <button onClick={openWeather} className="rounded-2xl border border-emerald-300/18 bg-emerald-300/10 px-4 py-3 text-sm transition hover:bg-emerald-300/14">
                      {t('weather')}
                    </button>
                  )}
                </div>
              </GlassCard>

              <GlassCard className="p-5 sm:p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/45">Mission in plain language</div>
                    <div className="mt-2 text-sm leading-7 text-white/80">{activePathway.mission}</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/45">What success looks like</div>
                    <div className="mt-2 text-sm leading-7 text-white/80">{activePathway.outcome}</div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </main>
        ) : null}
      </div>
    </div>
  );
}

export default App;
