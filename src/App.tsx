import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Home,
  Users,
  ShoppingBasket,
  Tractor,
  GraduationCap,
  Handshake,
  MapPin,
  Globe2,
  CheckCircle,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";

type Lang = "en" | "es" | "tl" | "it" | "he" | "fr";

type PathwayKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

type TourStepKey =
  | "welcome"
  | "place"
  | "problem"
  | "solution"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners"
  | "future"
  | "ending";

type Pathway = {
  key: PathwayKey;
  title: string;
  icon: React.ElementType;
  short: string;
  purpose: string;
  depth: string[];
};

type TourStep = {
  key: TourStepKey;
  label: string;
  title: string;
  body: string;
  bullets: string[];
};

const imageSets: Record<PathwayKey | "hero" | TourStepKey, string[]> = {
  hero: ["/GrowArea.jpg", "/SAM_0220.JPG", "/SAM_0221.JPG"],

  welcome: ["/GrowArea.jpg", "/SAM_0220.JPG", "/SAM_0221.JPG"],
  place: ["/SAM_0223.JPG", "/SAM_0225.JPG", "/SAM_0226.JPG"],
  problem: ["/SAM_0238.JPG", "/SAM_0249.JPG", "/SAM_0255.JPG"],
  solution: [
    "/ConnectFoodEcosystem_withimages.jpeg",
    "/SAM_0257.JPG",
    "/SAM_0260.JPG",
    "/SAM_0274.JPG",
  ],

  guest: ["/SAM_0275.JPG", "/SAM_0281.JPG", "/SAM_0282.JPG"],
  customer: [
    "/SAM_0286.JPG",
    "/SAM_0288.JPG",
    "/SAM_0289.JPG",
    "/culniary_edibleflowers.jpeg",
  ],
  marketplace: [
    "/SAM_0290.JPG",
    "/SAM_0291.JPG",
    "/SAM_0293.JPG",
    "/culniary_edibleflowers2.jpeg",
  ],
  grower: ["/SAM_0299.JPG", "/SAM_0301.JPG", "/SAM_0303.JPG"],
  youth: ["/SAM_0305.JPG", "/SAM_0307.JPG", "/SAM_0308.JPG", "/SAM_0310.JPG"],
  partners: ["/SAM_0313.JPG", "/Samaeera2.jpg", "/Sameera3.jpg", "/Samerra4.jpg"],
  future: ["/Samerra5.jpg", "/Samerra6.jpg", "/GrowArea2.jpg", "/SAM_0313.JPG"],
  ending: ["/ConnectFoodEcosystem_withimages.jpeg", "/GrowArea.jpg", "/snake.jpg"],
};

const langLabels: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "tl", label: "Tagalog" },
  { code: "it", label: "Italian" },
  { code: "he", label: "Hebrew" },
  { code: "fr", label: "French" },
];

const UI: Record<
  Lang,
  {
    location: string;
    demoTitle: string;
    heroText: string;
    startTour: string;
    pauseTour: string;
    resumeTour: string;
    narrationOn: string;
    narrationOff: string;
    explorePathways: string;
    guidedTour: string;
    step: string;
    of: string;
    back: string;
    next: string;
    replay: string;
    pathwaysEyebrow: string;
    pathwaysTitle: string;
    pathwaysIntro: string;
    enterPathway: string;
    activePathway: string;
    continueTour: string;
    endingTitle: string;
    endingBody: string;
  }
> = {
  en: {
    location: "Historic Lansdowne Airport · Youngstown, Ohio",
    demoTitle: "Bronson Family Farm",
    heroText:
      "A guided ecosystem experience showing how land, growers, food, youth workforce, community partners, and future agritourism work together.",
    startTour: "Start Guided Tour",
    pauseTour: "Pause",
    resumeTour: "Resume",
    narrationOn: "Narration On",
    narrationOff: "Turn Narration On",
    explorePathways: "Explore Pathways",
    guidedTour: "Guided Tour",
    step: "Step",
    of: "of",
    back: "Back",
    next: "Next",
    replay: "Replay Guided Tour",
    pathwaysEyebrow: "Explore the Ecosystem",
    pathwaysTitle: "Pathways Through the Farm",
    pathwaysIntro:
      "Every pathway represents a different role inside the ecosystem. Together they create a connected regional system focused on food accessibility, grower support, workforce development, and sustainability.",
    enterPathway: "Enter Pathway",
    activePathway: "Active Pathway",
    continueTour: "Continue Guided Tour",
    endingTitle: "End of Experience",
    endingBody:
      "Bronson Family Farm demonstrates how food, agriculture, growers, education, youth workforce, community wellness, and economic sustainability can work together through one intentional ecosystem.",
  },
  es: {
    location: "Aeropuerto Histórico Lansdowne · Youngstown, Ohio",
    demoTitle: "Bronson Family Farm",
    heroText:
      "Una experiencia guiada que muestra cómo la tierra, los agricultores, los alimentos, la juventud, los socios comunitarios y el agroturismo futuro trabajan juntos.",
    startTour: "Iniciar recorrido guiado",
    pauseTour: "Pausar",
    resumeTour: "Continuar",
    narrationOn: "Narración activada",
    narrationOff: "Activar narración",
    explorePathways: "Explorar caminos",
    guidedTour: "Recorrido guiado",
    step: "Paso",
    of: "de",
    back: "Atrás",
    next: "Siguiente",
    replay: "Repetir recorrido",
    pathwaysEyebrow: "Explorar el ecosistema",
    pathwaysTitle: "Caminos a través de la granja",
    pathwaysIntro:
      "Cada camino representa un papel diferente dentro del ecosistema. Juntos crean un sistema regional conectado enfocado en acceso a alimentos, apoyo a productores, desarrollo laboral y sostenibilidad.",
    enterPathway: "Entrar al camino",
    activePathway: "Camino activo",
    continueTour: "Continuar recorrido",
    endingTitle: "Fin de la experiencia",
    endingBody:
      "Bronson Family Farm muestra cómo alimentos, agricultura, productores, educación, juventud, bienestar comunitario y sostenibilidad económica pueden trabajar juntos en un ecosistema intencional.",
  },
  tl: {
    location: "Historic Lansdowne Airport · Youngstown, Ohio",
    demoTitle: "Bronson Family Farm",
    heroText:
      "Isang guided ecosystem experience na nagpapakita kung paano nagtutulungan ang lupa, growers, pagkain, kabataan, community partners, at future agritourism.",
    startTour: "Simulan ang guided tour",
    pauseTour: "I-pause",
    resumeTour: "Ipagpatuloy",
    narrationOn: "Naka-on ang narration",
    narrationOff: "I-on ang narration",
    explorePathways: "Tingnan ang pathways",
    guidedTour: "Guided Tour",
    step: "Hakbang",
    of: "ng",
    back: "Balik",
    next: "Susunod",
    replay: "Ulitin ang tour",
    pathwaysEyebrow: "Tuklasin ang ecosystem",
    pathwaysTitle: "Mga pathway sa farm",
    pathwaysIntro:
      "Bawat pathway ay may papel sa ecosystem. Sama-sama, binubuo nila ang konektadong sistema para sa food access, grower support, youth workforce, at sustainability.",
    enterPathway: "Pumasok sa pathway",
    activePathway: "Active pathway",
    continueTour: "Ipagpatuloy ang guided tour",
    endingTitle: "Katapusan ng experience",
    endingBody:
      "Ipinapakita ng Bronson Family Farm kung paano maaaring magsama ang pagkain, agrikultura, growers, edukasyon, kabataan, community wellness, at economic sustainability sa isang intentional ecosystem.",
  },
  it: {
    location: "Aeroporto Storico Lansdowne · Youngstown, Ohio",
    demoTitle: "Bronson Family Farm",
    heroText:
      "Un’esperienza guidata che mostra come terra, coltivatori, cibo, giovani, partner comunitari e futuro agriturismo lavorano insieme.",
    startTour: "Avvia tour guidato",
    pauseTour: "Pausa",
    resumeTour: "Riprendi",
    narrationOn: "Narrazione attiva",
    narrationOff: "Attiva narrazione",
    explorePathways: "Esplora percorsi",
    guidedTour: "Tour guidato",
    step: "Passo",
    of: "di",
    back: "Indietro",
    next: "Avanti",
    replay: "Ripeti tour",
    pathwaysEyebrow: "Esplora l’ecosistema",
    pathwaysTitle: "Percorsi attraverso la fattoria",
    pathwaysIntro:
      "Ogni percorso rappresenta un ruolo diverso nell’ecosistema. Insieme creano un sistema regionale connesso per accesso al cibo, supporto ai coltivatori, formazione e sostenibilità.",
    enterPathway: "Entra nel percorso",
    activePathway: "Percorso attivo",
    continueTour: "Continua tour guidato",
    endingTitle: "Fine dell’esperienza",
    endingBody:
      "Bronson Family Farm dimostra come cibo, agricoltura, coltivatori, educazione, giovani, benessere comunitario e sostenibilità economica possano lavorare insieme.",
  },
  he: {
    location: "שדה התעופה ההיסטורי Lansdowne · יאנגסטאון, אוהיו",
    demoTitle: "Bronson Family Farm",
    heroText:
      "חוויה מודרכת שמראה כיצד אדמה, מגדלים, מזון, נוער, שותפים קהילתיים ותיירות חקלאית עתידית פועלים יחד.",
    startTour: "התחל סיור מודרך",
    pauseTour: "השהה",
    resumeTour: "המשך",
    narrationOn: "קריינות פעילה",
    narrationOff: "הפעל קריינות",
    explorePathways: "חקור מסלולים",
    guidedTour: "סיור מודרך",
    step: "שלב",
    of: "מתוך",
    back: "חזור",
    next: "הבא",
    replay: "הפעל מחדש",
    pathwaysEyebrow: "חקור את המערכת",
    pathwaysTitle: "מסלולים דרך החווה",
    pathwaysIntro:
      "כל מסלול מייצג תפקיד שונה במערכת. יחד הם יוצרים מערכת אזורית המחזקת נגישות למזון, תמיכה במגדלים, פיתוח כוח עבודה וקיימות.",
    enterPathway: "כניסה למסלול",
    activePathway: "מסלול פעיל",
    continueTour: "המשך סיור מודרך",
    endingTitle: "סיום החוויה",
    endingBody:
      "Bronson Family Farm מדגימה כיצד מזון, חקלאות, מגדלים, חינוך, נוער, בריאות קהילתית וקיימות כלכלית יכולים לעבוד יחד במערכת מכוונת אחת.",
  },
  fr: {
    location: "Aéroport historique de Lansdowne · Youngstown, Ohio",
    demoTitle: "Bronson Family Farm",
    heroText:
      "Une expérience guidée montrant comment la terre, les producteurs, l’alimentation, les jeunes, les partenaires communautaires et l’agritourisme futur travaillent ensemble.",
    startTour: "Commencer la visite guidée",
    pauseTour: "Pause",
    resumeTour: "Reprendre",
    narrationOn: "Narration activée",
    narrationOff: "Activer la narration",
    explorePathways: "Explorer les parcours",
    guidedTour: "Visite guidée",
    step: "Étape",
    of: "sur",
    back: "Retour",
    next: "Suivant",
    replay: "Rejouer la visite",
    pathwaysEyebrow: "Explorer l’écosystème",
    pathwaysTitle: "Parcours dans la ferme",
    pathwaysIntro:
      "Chaque parcours représente un rôle différent dans l’écosystème. Ensemble, ils créent un système régional connecté axé sur l’accès alimentaire, le soutien aux producteurs, le développement des jeunes et la durabilité.",
    enterPathway: "Entrer dans le parcours",
    activePathway: "Parcours actif",
    continueTour: "Continuer la visite",
    endingTitle: "Fin de l’expérience",
    endingBody:
      "Bronson Family Farm montre comment alimentation, agriculture, producteurs, éducation, jeunesse, bien-être communautaire et durabilité économique peuvent fonctionner ensemble.",
  },
};

const CONTENT: Record<Lang, { pathways: Pathway[]; tourSteps: TourStep[] }> = {
  en: buildEnglishContent(),
  es: buildSpanishContent(),
  tl: buildTagalogContent(),
  it: buildItalianContent(),
  he: buildHebrewContent(),
  fr: buildFrenchContent(),
};

function buildEnglishContent() {
  const pathways: Pathway[] = [
    {
      key: "guest",
      title: "Guest Experience",
      icon: Home,
      short:
        "Guests enter through story, land, history, agriculture, wellness, youth engagement, and future agritourism.",
      purpose:
        "Guests are guided through the meaning of the farm before they are asked to choose a role.",
      depth: [
        "The visit begins with the land and the history of the Historic Lansdowne Airport.",
        "Guests see how the farm connects food, family, wellness, education, and community revitalization.",
        "The experience points toward future agritourism: tours, camping, mini-golf, youth spaces, events, and family recreation.",
      ],
    },
    {
      key: "customer",
      title: "Customer Pathway",
      icon: Users,
      short:
        "Customers access fresh, chemical-free food through a coordinated system focused on nutrition and community health.",
      purpose:
        "Customers do not have to chase food across disconnected places. The ecosystem helps move food toward families, schools, businesses, and community partners.",
      depth: [
        "Customers access local produce, seedlings, herbs, and future food-ordering options.",
        "The pathway supports healthier choices through fresh, chemical-free food.",
        "Every purchase helps circulate money through growers, youth workforce, and community-based food access.",
      ],
    },
    {
      key: "marketplace",
      title: "Marketplace",
      icon: ShoppingBasket,
      short:
        "The marketplace connects growers, customers, tools, seedlings, supplies, education, and food distribution.",
      purpose:
        "The marketplace is the exchange point where food, supplies, knowledge, customers, and opportunity move together.",
      depth: [
        "The marketplace can feature produce, seedlings, Bubble Babies™, grower supplies, and value-added products.",
        "Growers gain a coordinated place to connect with customers and institutions.",
        "The system supports food accessibility by helping organize local food movement.",
      ],
    },
    {
      key: "grower",
      title: "Grower Pathway",
      icon: Tractor,
      short:
        "Growers receive access to tools, education, supplies, markets, coordination, and community-based support.",
      purpose:
        "Growers come because they need practical support: what to grow, how to prepare, where to sell, and how to stay connected.",
      depth: [
        "Growers connect to education, seedlings, tools, soil support, and market preparation.",
        "The ecosystem reduces isolation by creating shared infrastructure and shared opportunity.",
        "The food moves through coordinated distribution so growers do not have to manage everything alone.",
      ],
    },
    {
      key: "youth",
      title: "Youth Workforce",
      icon: GraduationCap,
      short:
        "Youth build responsibility, confidence, job readiness, teamwork, agriculture skills, and community pride.",
      purpose:
        "The farm becomes a living classroom where young people learn work habits, safety, leadership, and responsibility.",
      depth: [
        "Youth learn through outdoor, hands-on work instead of only classroom instruction.",
        "The pathway includes safety, PPE, teamwork, communication, attendance, and accountability.",
        "Supervisors can observe growth in responsibility, leadership, and readiness.",
      ],
    },
    {
      key: "partners",
      title: "Partners",
      icon: Handshake,
      short:
        "Partners align resources, education, health, workforce, agriculture, and community investment around one ecosystem.",
      purpose:
        "Partners strengthen the farm by contributing knowledge, tools, volunteers, sponsorship, education, health services, and visibility.",
      depth: [
        "Partners support food access, workforce development, health education, and community revitalization.",
        "The pathway connects city, education, business, nonprofit, grower, and community resources.",
        "Together, partners help build a model that can be replicated in other communities.",
      ],
    },
  ];

  const tourSteps: TourStep[] = [
    {
      key: "welcome",
      label: "Opening",
      title: "Welcome to Bronson Family Farm",
      body:
        "Welcome to a guided ecosystem experience at Bronson Family Farm in Youngstown, Ohio. This experience moves through the story, purpose, pathways, and future vision of a place-based regenerative food system designed to strengthen growers, families, youth, and community resilience.",
      bullets: [
        "This is a fully guided experience designed to move automatically.",
        "Bronson Family Farm combines agriculture, education, food access, workforce development, and agritourism.",
        "The ecosystem helps communities grow healthier, stronger, and more connected.",
      ],
    },
    {
      key: "place",
      label: "Place",
      title: "Historic Lansdowne Airport",
      body:
        "Bronson Family Farm is being developed at the Historic Lansdowne Airport on Youngstown’s east side. Aviation infrastructure is becoming food infrastructure, transforming land into a regenerative agricultural and community destination.",
      bullets: [
        "The airport creates a unique place-based identity for the farm.",
        "The site supports agriculture, education, events, growers, and future agritourism.",
        "The transformation demonstrates how communities can repurpose land for long-term benefit.",
      ],
    },
    {
      key: "problem",
      label: "Need",
      title: "Food Access, Health, and Economic Pressure",
      body:
        "Families continue facing rising food costs, limited fresh food access, economic instability, and declining neighborhood investment. Small growers also face barriers including distribution, infrastructure costs, and lack of coordinated support.",
      bullets: [
        "Fresh food access is a community need.",
        "Growers need support, tools, markets, and distribution pathways.",
        "Families need nutritious, chemical-free food they can reach.",
      ],
    },
    {
      key: "solution",
      label: "Solution",
      title: "The Connected Food Ecosystem",
      body:
        "Bronson Family Farm and Farm & Family Alliance create a coordinated ecosystem where food, growers, education, youth workforce, wellness, and partnerships operate as one connected system instead of disconnected programs.",
      bullets: [
        "The system focuses on local food circulation and community accessibility.",
        "Regenerative growing practices support healthier soil, healthier food, and healthier communities.",
        "The ecosystem creates shared opportunity across multiple pathways.",
      ],
    },
    ...pathways.map((p) => ({
      key: p.key as TourStepKey,
      label: p.title,
      title: p.title,
      body: p.purpose,
      bullets: p.depth,
    })),
    {
      key: "future",
      label: "Future",
      title: "Future Agritourism Destination",
      body:
        "The long-term vision expands Bronson Family Farm into a regional destination where agriculture, recreation, education, wellness, tourism, and local economic opportunity work together through one immersive experience.",
      bullets: [
        "Future plans may include camping, seasonal festivals, family recreation, and tours.",
        "An 18-hole mini-golf course and children’s zones can support family engagement.",
        "Agritourism creates sustainability while keeping community identity rooted in agriculture.",
      ],
    },
    {
      key: "ending",
      label: "End",
      title: "A Model for Community Regeneration",
      body:
        "Bronson Family Farm demonstrates how land, food, growers, education, youth workforce, wellness, and economic sustainability can operate together through one intentional ecosystem designed to strengthen communities over generations.",
      bullets: [
        "Every pathway connects back to community benefit.",
        "The ecosystem helps circulate food, knowledge, opportunity, and investment locally.",
        "Bronson Family Farm represents a regenerative vision for the future of community food systems.",
      ],
    },
  ];

  return { pathways, tourSteps };
}

function translateContent(
  translator: (text: string) => string,
  titles: Partial<Record<PathwayKey | TourStepKey, string>> = {}
) {
  const base = buildEnglishContent();

  const pathways = base.pathways.map((p) => ({
    ...p,
    title: titles[p.key] || translator(p.title),
    short: translator(p.short),
    purpose: translator(p.purpose),
    depth: p.depth.map(translator),
  }));

  const tourSteps = base.tourSteps.map((s) => ({
    ...s,
    title: titles[s.key] || translator(s.title),
    label: translator(s.label),
    body: translator(s.body),
    bullets: s.bullets.map(translator),
  }));

  return { pathways, tourSteps };
}

function buildSpanishContent() {
  return translateContent(
    (text) =>
      ({
        "Opening": "Apertura",
        "Place": "Lugar",
        "Need": "Necesidad",
        "Solution": "Solución",
        "Future": "Futuro",
        "End": "Final",
      }[text] || text),
    {
      welcome: "Bienvenidos a Bronson Family Farm",
      place: "Aeropuerto Histórico Lansdowne",
      problem: "Acceso a alimentos, salud y presión económica",
      solution: "El ecosistema alimentario conectado",
      guest: "Experiencia de visitantes",
      customer: "Camino del cliente",
      marketplace: "Mercado",
      grower: "Camino del productor",
      youth: "Fuerza laboral juvenil",
      partners: "Socios",
      future: "Destino futuro de agroturismo",
      ending: "Un modelo de regeneración comunitaria",
    }
  );
}

function buildTagalogContent() {
  return translateContent(
    (text) =>
      ({
        "Opening": "Pagbubukas",
        "Place": "Lugar",
        "Need": "Pangangailangan",
        "Solution": "Solusyon",
        "Future": "Kinabukasan",
        "End": "Wakas",
      }[text] || text),
    {
      welcome: "Maligayang pagdating sa Bronson Family Farm",
      place: "Historic Lansdowne Airport",
      problem: "Food access, kalusugan, at economic pressure",
      solution: "Ang connected food ecosystem",
      guest: "Guest Experience",
      customer: "Customer Pathway",
      marketplace: "Marketplace",
      grower: "Grower Pathway",
      youth: "Youth Workforce",
      partners: "Partners",
      future: "Future Agritourism Destination",
      ending: "Modelo para sa community regeneration",
    }
  );
}

function buildItalianContent() {
  return translateContent(
    (text) =>
      ({
        "Opening": "Apertura",
        "Place": "Luogo",
        "Need": "Bisogno",
        "Solution": "Soluzione",
        "Future": "Futuro",
        "End": "Fine",
      }[text] || text),
    {
      welcome: "Benvenuti a Bronson Family Farm",
      place: "Aeroporto Storico Lansdowne",
      problem: "Accesso al cibo, salute e pressione economica",
      solution: "L’ecosistema alimentare connesso",
      guest: "Esperienza ospite",
      customer: "Percorso cliente",
      marketplace: "Mercato",
      grower: "Percorso coltivatore",
      youth: "Forza lavoro giovanile",
      partners: "Partner",
      future: "Futura destinazione agrituristica",
      ending: "Un modello di rigenerazione comunitaria",
    }
  );
}

function buildHebrewContent() {
  return translateContent(
    (text) =>
      ({
        "Opening": "פתיחה",
        "Place": "מקום",
        "Need": "צורך",
        "Solution": "פתרון",
        "Future": "עתיד",
        "End": "סיום",
      }[text] || text),
    {
      welcome: "ברוכים הבאים ל-Bronson Family Farm",
      place: "שדה התעופה ההיסטורי Lansdowne",
      problem: "נגישות למזון, בריאות ולחץ כלכלי",
      solution: "מערכת המזון המחוברת",
      guest: "חוויית אורח",
      customer: "מסלול לקוח",
      marketplace: "שוק",
      grower: "מסלול מגדל",
      youth: "כוח עבודה צעיר",
      partners: "שותפים",
      future: "יעד תיירות חקלאית עתידי",
      ending: "מודל להתחדשות קהילתית",
    }
  );
}

function buildFrenchContent() {
  return translateContent(
    (text) =>
      ({
        "Opening": "Ouverture",
        "Place": "Lieu",
        "Need": "Besoin",
        "Solution": "Solution",
        "Future": "Avenir",
        "End": "Fin",
      }[text] || text),
    {
      welcome: "Bienvenue à Bronson Family Farm",
      place: "Aéroport historique de Lansdowne",
      problem: "Accès alimentaire, santé et pression économique",
      solution: "L’écosystème alimentaire connecté",
      guest: "Expérience invité",
      customer: "Parcours client",
      marketplace: "Marché",
      grower: "Parcours producteur",
      youth: "Main-d’œuvre jeunesse",
      partners: "Partenaires",
      future: "Future destination agritouristique",
      ending: "Un modèle de régénération communautaire",
    }
  );
}

function SmartImage({
  srcs,
  alt,
  className,
  contain = false,
}: {
  srcs: string[];
  alt: string;
  className?: string;
  contain?: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [srcs.join("|")]);

  return (
    <img
      src={srcs[index]}
      alt={alt}
      className={`${className || ""} ${contain ? "object-contain bg-black" : "object-cover"}`}
      onError={() => {
        if (index < srcs.length - 1) setIndex(index + 1);
      }}
    />
  );
}

export default function App() {
  const [language, setLanguage] = useState<Lang>("en");
  const [tourIndex, setTourIndex] = useState(0);
  const [isGuided, setIsGuided] = useState(true);
  const [activePathway, setActivePathway] = useState<PathwayKey | null>(null);
  const [narrationOn, setNarrationOn] = useState(false);

  const ui = UI[language];
  const { pathways, tourSteps } = CONTENT[language];
  const currentStep = tourSteps[tourIndex];
  const isHebrew = language === "he";

  const activeData = useMemo(
    () => pathways.find((p) => p.key === activePathway),
    [activePathway, pathways]
  );

  const imageContain =
    currentStep.key === "solution" || currentStep.key === "ending";

  useEffect(() => {
    if (!isGuided) return;

    if (narrationOn && "speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(
        `${currentStep.title}. ${currentStep.body}`
      );

      speech.rate = 0.88;
      speech.pitch = 1;
      speech.volume = 1;

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(speech);
    }

    const timer = window.setTimeout(() => {
      if (tourIndex < tourSteps.length - 1) {
        setTourIndex((prev) => prev + 1);
      } else {
        setIsGuided(false);
      }
    }, 14000);

    return () => {
      window.clearTimeout(timer);
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, [tourIndex, isGuided, narrationOn, currentStep, tourSteps.length]);

  const startGuidedTour = () => {
    setTourIndex(0);
    setIsGuided(true);
    setActivePathway(null);
    document.getElementById("guided-tour")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const nextTour = () => {
    setIsGuided(false);
    if (tourIndex < tourSteps.length - 1) setTourIndex((prev) => prev + 1);
  };

  const prevTour = () => {
    setIsGuided(false);
    if (tourIndex > 0) setTourIndex((prev) => prev - 1);
  };

  const jumpToStep = (index: number) => {
    setIsGuided(false);
    setTourIndex(index);
    setActivePathway(null);
    document.getElementById("guided-tour")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const jumpToPathway = (key: PathwayKey) => {
    const stepIndex = tourSteps.findIndex((step) => step.key === key);

    setIsGuided(false);
    setActivePathway(key);

    if (stepIndex >= 0) setTourIndex(stepIndex);

    setTimeout(() => {
      document.getElementById("pathway-detail")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <main
      className="min-h-screen bg-black text-white"
      dir={isHebrew ? "rtl" : "ltr"}
    >
      <section className="relative min-h-screen overflow-hidden">
        <SmartImage
          srcs={imageSets.hero}
          alt="Bronson Family Farm"
          className="absolute inset-0 h-full w-full opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-12">
          <div className="mb-6 flex flex-wrap gap-3">
            {langLabels.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  language === lang.code
                    ? "bg-green-500 text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <div className="mb-4 flex items-center gap-2 text-green-400">
            <MapPin size={18} />
            <span className="text-lg">{ui.location}</span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-none md:text-7xl">
            {ui.demoTitle}
          </h1>

          <p className="mt-6 max-w-4xl text-xl leading-relaxed text-white/85">
            {ui.heroText}
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <button
              onClick={startGuidedTour}
              className="rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
            >
              {ui.startTour}
            </button>

            <button
              onClick={() => setNarrationOn((prev) => !prev)}
              className="rounded-full border border-white/30 px-8 py-4 text-lg font-bold hover:bg-white/10"
            >
              {narrationOn ? ui.narrationOn : ui.narrationOff}
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("pathways")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="rounded-full border border-white/30 px-8 py-4 text-lg font-bold hover:bg-white/10"
            >
              {ui.explorePathways}
            </button>
          </div>
        </div>
      </section>

      <section id="guided-tour" className="mx-auto max-w-7xl px-6 pt-8 pb-16">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950 shadow-2xl">
          <div className="grid min-h-[560px] md:grid-cols-[0.95fr_1.15fr]">
            <div className="relative min-h-[320px] overflow-hidden">
              <SmartImage
                srcs={imageSets[currentStep.key]}
                alt={currentStep.title}
                contain={imageContain}
                className="absolute inset-0 h-full w-full scale-[1.02] transition-transform duration-[14000ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              {!imageContain && <div className="absolute inset-0 bg-black/15" />}

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-green-400">
                  {ui.guidedTour}
                </p>

                <h2 className="mt-3 max-w-md text-3xl font-black leading-tight md:text-4xl">
                  {currentStep.label}
                </h2>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 md:p-8">
              <div>
                <div className="mb-5 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-green-400">
                      {ui.step} {tourIndex + 1} {ui.of} {tourSteps.length}
                    </p>

                    <h3 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                      {currentStep.title}
                    </h3>
                  </div>

                  <Globe2 className="shrink-0 text-green-400" size={38} />
                </div>

                <p className="text-lg leading-8 text-white/85">
                  {currentStep.body}
                </p>

                <ul className="mt-6 space-y-3">
                  {currentStep.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base leading-7 text-white/85"
                    >
                      <CheckCircle
                        className="mt-1 shrink-0 text-green-400"
                        size={20}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <div className="mb-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-green-500 transition-all duration-700"
                    style={{
                      width: `${((tourIndex + 1) / tourSteps.length) * 100}%`,
                    }}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={prevTour}
                    disabled={tourIndex === 0}
                    className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-bold disabled:opacity-30"
                  >
                    <ArrowLeft size={18} />
                    {ui.back}
                  </button>

                  <div className="flex max-w-md flex-wrap justify-center gap-2">
                    {tourSteps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => jumpToStep(index)}
                        className={`h-3 w-3 rounded-full transition ${
                          index === tourIndex ? "bg-green-400" : "bg-white/20"
                        }`}
                        aria-label={`Go to step ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsGuided((prev) => !prev)}
                      className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-bold hover:bg-white/10"
                    >
                      {isGuided ? <Pause size={18} /> : <Play size={18} />}
                      {isGuided ? ui.pauseTour : ui.resumeTour}
                    </button>

                    <button
                      onClick={nextTour}
                      disabled={tourIndex === tourSteps.length - 1}
                      className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-bold text-black disabled:opacity-30"
                    >
                      {ui.next}
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                {tourIndex === tourSteps.length - 1 && (
                  <button
                    onClick={startGuidedTour}
                    className="mt-6 flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black"
                  >
                    <RotateCcw size={18} />
                    {ui.replay}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pathways" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-14 text-center">
          <p className="text-green-400">{ui.pathwaysEyebrow}</p>

          <h2 className="mt-3 text-5xl font-black">{ui.pathwaysTitle}</h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl leading-8 text-white/70">
            {ui.pathwaysIntro}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {pathways.map((p) => {
            const Icon = p.icon;

            return (
              <article
                key={p.key}
                className="overflow-hidden rounded-[2rem] bg-zinc-900 shadow-2xl transition hover:-translate-y-2"
              >
                <SmartImage
                  srcs={imageSets[p.key]}
                  alt={p.title}
                  className="h-64 w-full"
                />

                <div className="p-8">
                  <Icon className="mb-6 text-green-400" size={38} />

                  <h3 className="text-3xl font-black">{p.title}</h3>

                  <p className="mt-5 min-h-[120px] text-lg leading-8 text-white/80">
                    {p.short}
                  </p>

                  <button
                    onClick={() => jumpToPathway(p.key)}
                    className="mt-8 flex items-center gap-2 rounded-full bg-green-500 px-6 py-4 font-bold text-black transition hover:scale-105"
                  >
                    {ui.enterPathway}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {activeData && (
        <section id="pathway-detail" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-zinc-950 p-10 md:grid-cols-2">
            <SmartImage
              srcs={imageSets[activeData.key]}
              alt={activeData.title}
              className="h-full min-h-[420px] w-full rounded-[2rem]"
            />

            <div>
              <p className="text-green-400">{ui.activePathway}</p>

              <h2 className="mt-3 text-5xl font-black">{activeData.title}</h2>

              <p className="mt-6 text-xl leading-9 text-white/80">
                {activeData.purpose}
              </p>

              <ul className="mt-8 space-y-5">
                {activeData.depth.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-lg leading-8 text-white/85"
                  >
                    <CheckCircle
                      className="mt-1 shrink-0 text-green-400"
                      size={22}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setIsGuided(true);
                  setActivePathway(null);
                  document.getElementById("guided-tour")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="mt-10 rounded-full bg-green-500 px-8 py-4 font-bold text-black transition hover:scale-105"
              >
                {ui.continueTour}
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-5xl font-black">{ui.endingTitle}</h2>

        <p className="mx-auto mt-8 max-w-4xl text-2xl leading-10 text-white/75">
          {ui.endingBody}
        </p>
      </section>
    </main>
  );
}
