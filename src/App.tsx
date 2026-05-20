import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  Home,
  Globe,
  Users,
  ShoppingBasket,
  Sprout,
  Tractor,
  Building2,
  HeartHandshake,
  Trees,
  Plane,
  MessageCircle,
} from "lucide-react";

type LanguageKey =
  | "en"
  | "es"
  | "tl"
  | "it"
  | "he"
  | "fr";

const LANGUAGES: Record<LanguageKey, string> = {
  en: "English",
  es: "Español",
  tl: "Tagalog",
  it: "Italiano",
  he: "עברית",
  fr: "Français",
};

const translations = {
  en: {
    welcome: "Bronson Family Farm",
    subtitle:
      "A Connected Food Ecosystem Growing Health, Opportunity, and Community",
    begin: "Begin Experience",
    guided: "Guided Tour",
    explore: "Explore Pathways",
    next: "Next",
    back: "Back",
    home: "Home",
    feedback: "Share Feedback",
    ecosystemTitle: "What Is A Connected Food Ecosystem?",
    ecosystemText:
      "A connected food ecosystem brings growers, families, youth, markets, education, health, and distribution together so food, knowledge, and opportunity circulate through the community together.",
    ecosystemText2:
      "Bronson Family Farm is more than a farm. It is infrastructure for food access, workforce development, agritourism, education, wellness, and regional revitalization.",
    airportTitle: "A Place-Based Farm Experience",
    airportText:
      "Located at the Historic Lansdowne Airport in Youngstown, Ohio, Bronson Family Farm transforms open land into productive growing space focused on healthy food, community participation, and future opportunity.",
    airportText2:
      "The airport location represents movement, connection, innovation, and access — values reflected throughout the ecosystem.",
    growerTitle: "Grower Pathway",
    growerText:
      "Growers gain access to tools, education, demonstrations, markets, community support, and distribution opportunities.",
    growerText2:
      "The food moves — not the farmer. Bronson Family Farm helps connect growers to customers, schools, organizations, and regional opportunity.",
    customerTitle: "Customer Pathway",
    customerText:
      "Customers gain access to fresh, local, chemical-free produce while learning how food impacts health, wellness, and long-term quality of life.",
    customerText2:
      "The ecosystem encourages repeat healthy choices while strengthening local food security.",
    youthTitle: "Youth Workforce Pathway",
    youthText:
      "Youth ages 14–18 participate in real workforce experiences focused on agriculture, responsibility, teamwork, leadership, and future readiness.",
    youthText2:
      "The farm becomes a living classroom where young people build confidence while helping feed the community.",
    marketTitle: "Marketplace Pathway",
    marketText:
      "The marketplace creates economic circulation by connecting growers, products, value-added goods, education, and consumers together in one coordinated ecosystem.",
    marketText2:
      "The goal is long-term sustainability where communities support local food systems and growers grow successfully.",
    partnerTitle: "Partnership Pathway",
    partnerText:
      "Public, private, nonprofit, education, and health partners help strengthen the ecosystem through collaboration, resources, demonstrations, and shared community investment.",
    partnerText2:
      "Together, partners help build a destination that improves food accessibility and community wellness.",
    futureTitle: "Why This Matters",
    futureText:
      "Rising food costs, health disparities, and food insecurity require communities to rethink how food systems operate.",
    futureText2:
      "Bronson Family Farm demonstrates how agriculture, education, health, workforce development, and agritourism can work together to build a stronger future.",
    thankyou: "Thank You For Visiting Bronson Family Farm",
    thankyou2:
      "We welcome your thoughts, partnership, and participation as we continue building this connected ecosystem together.",
    contact:
      "Constance Burgess • 330-275-1604 • cburgess@bronsonfamilyfarm.com",
  },

  es: {
    welcome: "Bronson Family Farm",
    subtitle:
      "Un Ecosistema Alimentario Conectado que Cultiva Salud, Oportunidad y Comunidad",
    begin: "Comenzar Experiencia",
    guided: "Tour Guiado",
    explore: "Explorar Caminos",
    next: "Siguiente",
    back: "Atrás",
    home: "Inicio",
    feedback: "Compartir Comentarios",
    ecosystemTitle: "¿Qué es un Ecosistema Alimentario Conectado?",
    ecosystemText:
      "Un ecosistema alimentario conectado une productores, familias, jóvenes, mercados, educación y salud.",
    ecosystemText2:
      "Bronson Family Farm es más que una granja. Es infraestructura comunitaria.",
    airportTitle: "Una Experiencia Agrícola Basada en el Lugar",
    airportText:
      "Ubicada en el histórico aeropuerto Lansdowne en Youngstown, Ohio.",
    airportText2:
      "El aeropuerto representa conexión, innovación y acceso.",
    growerTitle: "Camino del Productor",
    growerText:
      "Los productores acceden a herramientas, educación y mercados.",
    growerText2:
      "La comida se mueve, no el agricultor.",
    customerTitle: "Camino del Cliente",
    customerText:
      "Los clientes acceden a alimentos frescos y saludables.",
    customerText2:
      "El ecosistema fortalece la seguridad alimentaria local.",
    youthTitle: "Camino de la Juventud",
    youthText:
      "Los jóvenes desarrollan habilidades laborales reales.",
    youthText2:
      "La granja se convierte en un aula viva.",
    marketTitle: "Camino del Mercado",
    marketText:
      "El mercado conecta productores y consumidores.",
    marketText2:
      "La sostenibilidad comunitaria es el objetivo.",
    partnerTitle: "Camino de Asociaciones",
    partnerText:
      "Las asociaciones fortalecen el ecosistema.",
    partnerText2:
      "Juntos construimos un destino comunitario.",
    futureTitle: "Por Qué Importa",
    futureText:
      "La inseguridad alimentaria requiere nuevas soluciones.",
    futureText2:
      "La agricultura y la educación pueden construir un futuro mejor.",
    thankyou: "Gracias por Visitar Bronson Family Farm",
    thankyou2:
      "Agradecemos su participación y colaboración.",
    contact:
      "Constance Burgess • 330-275-1604 • cburgess@bronsonfamilyfarm.com",
  },

  tl: {
    welcome: "Bronson Family Farm",
    subtitle:
      "Isang Konektadong Food Ecosystem para sa Komunidad",
    begin: "Simulan",
    guided: "Guided Tour",
    explore: "Tingnan ang Mga Pathway",
    next: "Susunod",
    back: "Bumalik",
    home: "Home",
    feedback: "Magbigay ng Feedback",
    ecosystemTitle: "Ano ang Connected Food Ecosystem?",
    ecosystemText:
      "Pinag-uugnay nito ang growers, pamilya, kabataan, kalusugan, at edukasyon.",
    ecosystemText2:
      "Higit pa ito sa isang farm.",
    airportTitle: "Place-Based Farm Experience",
    airportText:
      "Matatagpuan sa Historic Lansdowne Airport.",
    airportText2:
      "Simbolo ito ng koneksyon at oportunidad.",
    growerTitle: "Grower Pathway",
    growerText:
      "Suporta para sa growers at local markets.",
    growerText2:
      "Ang pagkain ang gumagalaw, hindi ang farmer.",
    customerTitle: "Customer Pathway",
    customerText:
      "Fresh at healthy local food.",
    customerText2:
      "Mas malakas na food security.",
    youthTitle: "Youth Workforce",
    youthText:
      "Kabataan na natututo ng trabaho at leadership.",
    youthText2:
      "Living classroom ang farm.",
    marketTitle: "Marketplace",
    marketText:
      "Pinag-uugnay ang produkto at komunidad.",
    marketText2:
      "Pangmatagalang sustainability.",
    partnerTitle: "Partnerships",
    partnerText:
      "Sama-samang pagbuo ng komunidad.",
    partnerText2:
      "Mas malakas kapag magkakasama.",
    futureTitle: "Bakit Mahalaga",
    futureText:
      "Kailangan ng bagong food systems.",
    futureText2:
      "Agriculture at education para sa kinabukasan.",
    thankyou: "Salamat sa Pagbisita",
    thankyou2:
      "Inaanyayahan namin ang inyong partisipasyon.",
    contact:
      "Constance Burgess • 330-275-1604",
  },

  it: {
    welcome: "Bronson Family Farm",
    subtitle:
      "Un Ecosistema Alimentare Connesso",
    begin: "Inizia",
    guided: "Tour Guidato",
    explore: "Esplora",
    next: "Avanti",
    back: "Indietro",
    home: "Home",
    feedback: "Feedback",
    ecosystemTitle: "Cos'è un Ecosistema Alimentare?",
    ecosystemText:
      "Collega agricoltori, famiglie, salute ed educazione.",
    ecosystemText2:
      "Più di una fattoria.",
    airportTitle: "Esperienza Agricola Locale",
    airportText:
      "Situato allo storico aeroporto Lansdowne.",
    airportText2:
      "Simbolo di connessione e innovazione.",
    growerTitle: "Percorso Coltivatore",
    growerText:
      "Supporto e opportunità per i coltivatori.",
    growerText2:
      "Il cibo si muove, non l'agricoltore.",
    customerTitle: "Percorso Cliente",
    customerText:
      "Accesso a cibo fresco e sano.",
    customerText2:
      "Sicurezza alimentare locale.",
    youthTitle: "Percorso Giovani",
    youthText:
      "Esperienze lavorative reali.",
    youthText2:
      "La fattoria è una classe vivente.",
    marketTitle: "Marketplace",
    marketText:
      "Connette prodotti e comunità.",
    marketText2:
      "Sostenibilità a lungo termine.",
    partnerTitle: "Partnership",
    partnerText:
      "Collaborazione per la comunità.",
    partnerText2:
      "Costruire insieme.",
    futureTitle: "Perché è Importante",
    futureText:
      "Nuovi sistemi alimentari sono necessari.",
    futureText2:
      "Agricoltura ed educazione per il futuro.",
    thankyou: "Grazie per la Visita",
    thankyou2:
      "Benvenuti nella nostra comunità.",
    contact:
      "Constance Burgess • 330-275-1604",
  },

  he: {
    welcome: "Bronson Family Farm",
    subtitle:
      "מערכת מזון מחוברת לקהילה",
    begin: "התחל",
    guided: "סיור מודרך",
    explore: "חקור מסלולים",
    next: "הבא",
    back: "חזור",
    home: "בית",
    feedback: "שלח משוב",
    ecosystemTitle: "מהי מערכת מזון מחוברת?",
    ecosystemText:
      "חיבור בין חקלאים, משפחות, בריאות וחינוך.",
    ecosystemText2:
      "יותר מחווה.",
    airportTitle: "חווה מבוססת מקום",
    airportText:
      "ממוקמת בשדה התעופה ההיסטורי לנסדאון.",
    airportText2:
      "מסמלת חיבור וחדשנות.",
    growerTitle: "מסלול מגדלים",
    growerText:
      "כלים, חינוך והזדמנויות.",
    growerText2:
      "האוכל זז, לא החקלאי.",
    customerTitle: "מסלול לקוחות",
    customerText:
      "גישה למזון בריא וטרי.",
    customerText2:
      "חיזוק ביטחון תזונתי.",
    youthTitle: "מסלול נוער",
    youthText:
      "פיתוח מנהיגות וכישורי עבודה.",
    youthText2:
      "החווה ככיתה חיה.",
    marketTitle: "שוק",
    marketText:
      "מחבר בין קהילה למזון.",
    marketText2:
      "קיימות לטווח ארוך.",
    partnerTitle: "שותפויות",
    partnerText:
      "שיתוף פעולה קהילתי.",
    partnerText2:
      "ביחד חזקים יותר.",
    futureTitle: "למה זה חשוב",
    futureText:
      "נדרשות מערכות מזון חדשות.",
    futureText2:
      "חקלאות וחינוך לעתיד.",
    thankyou: "תודה שביקרתם",
    thankyou2:
      "נשמח לשיתוף פעולה.",
    contact:
      "Constance Burgess • 330-275-1604",
  },

  fr: {
    welcome: "Bronson Family Farm",
    subtitle:
      "Un Écosystème Alimentaire Connecté",
    begin: "Commencer",
    guided: "Visite Guidée",
    explore: "Explorer",
    next: "Suivant",
    back: "Retour",
    home: "Accueil",
    feedback: "Commentaires",
    ecosystemTitle: "Qu'est-ce qu'un Écosystème Alimentaire ?",
    ecosystemText:
      "Relie agriculteurs, familles, santé et éducation.",
    ecosystemText2:
      "Plus qu'une ferme.",
    airportTitle: "Une Expérience Locale",
    airportText:
      "Située à l'aéroport historique Lansdowne.",
    airportText2:
      "Connexion et innovation.",
    growerTitle: "Parcours Producteur",
    growerText:
      "Outils et opportunités.",
    growerText2:
      "La nourriture circule.",
    customerTitle: "Parcours Client",
    customerText:
      "Accès à une alimentation saine.",
    customerText2:
      "Sécurité alimentaire locale.",
    youthTitle: "Parcours Jeunesse",
    youthText:
      "Formation et leadership.",
    youthText2:
      "La ferme comme salle de classe.",
    marketTitle: "Marketplace",
    marketText:
      "Connexion entre produits et communauté.",
    marketText2:
      "Durabilité à long terme.",
    partnerTitle: "Partenariats",
    partnerText:
      "Collaboration communautaire.",
    partnerText2:
      "Construire ensemble.",
    futureTitle: "Pourquoi C'est Important",
    futureText:
      "De nouveaux systèmes alimentaires sont nécessaires.",
    futureText2:
      "Agriculture et éducation pour l'avenir.",
    thankyou: "Merci de Votre Visite",
    thankyou2:
      "Nous accueillons votre participation.",
    contact:
      "Constance Burgess • 330-275-1604",
  },
};

const slides = [
  {
    image: "/SAM_0223.JPG",
    key: "ecosystem",
    icon: Trees,
  },
  {
    image: "/GrowArea.jpg",
    key: "airport",
    icon: Plane,
  },
  {
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    key: "grower",
    icon: Sprout,
  },
  {
    image: "/SAM_0226.JPG",
    key: "customer",
    icon: ShoppingBasket,
  },
  {
    image: "/SAM_0221.JPG",
    key: "youth",
    icon: Tractor,
  },
  {
    image: "/SAM_0229.JPG",
    key: "market",
    icon: Building2,
  },
  {
    image: "/SAM_0225.JPG",
    key: "partner",
    icon: HeartHandshake,
  },
  {
    image: "/SAM_0222.JPG",
    key: "future",
    icon: Users,
  },
];

export default function App() {
  const [language, setLanguage] =
    useState<LanguageKey>("en");

  const [current, setCurrent] = useState(0);
  const [guided, setGuided] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const t = translations[language];

  useEffect(() => {
    if (guided) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) =>
          prev === slides.length - 1 ? prev : prev + 1
        );
      }, 11000);
    }

    return () => {
      if (intervalRef.current)
        clearInterval(intervalRef.current);
    };
  }, [guided]);

  const nextSlide = () => {
    setCurrent((prev) =>
      Math.min(prev + 1, slides.length - 1)
    );
  };

  const prevSlide = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const slide = slides[current];

  const content = useMemo(() => {
    switch (slide.key) {
      case "ecosystem":
        return {
          title: t.ecosystemTitle,
          text1: t.ecosystemText,
          text2: t.ecosystemText2,
        };
      case "airport":
        return {
          title: t.airportTitle,
          text1: t.airportText,
          text2: t.airportText2,
        };
      case "grower":
        return {
          title: t.growerTitle,
          text1: t.growerText,
          text2: t.growerText2,
        };
      case "customer":
        return {
          title: t.customerTitle,
          text1: t.customerText,
          text2: t.customerText2,
        };
      case "youth":
        return {
          title: t.youthTitle,
          text1: t.youthText,
          text2: t.youthText2,
        };
      case "market":
        return {
          title: t.marketTitle,
          text1: t.marketText,
          text2: t.marketText2,
        };
      case "partner":
        return {
          title: t.partnerTitle,
          text1: t.partnerText,
          text2: t.partnerText2,
        };
      case "future":
        return {
          title: t.futureTitle,
          text1: t.futureText,
          text2: t.futureText2,
        };
      default:
        return {
          title: "",
          text1: "",
          text2: "",
        };
    }
  }, [slide, language]);

  const Icon = slide.icon;

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#132218] text-white relative">

      <img
        src={slide.image}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      <div className="relative z-20 flex flex-col h-full">

        <div className="flex items-center justify-between px-8 py-5">

          <div>
            <h1 className="text-4xl font-bold tracking-wide">
              {t.welcome}
            </h1>

            <p className="text-lg text-green-100 mt-1 max-w-3xl">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-end">
            {Object.entries(LANGUAGES).map(([key, label]) => (
              <button
                key={key}
                onClick={() =>
                  setLanguage(key as LanguageKey)
                }
                className={`px-3 py-1 rounded-full text-sm border ${
                  language === key
                    ? "bg-white text-black"
                    : "bg-black/40 text-white border-white/30"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-10">

          <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center">

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="bg-green-700/80 p-4 rounded-2xl">
                  <Icon size={34} />
                </div>

                <h2 className="text-4xl font-bold">
                  {content.title}
                </h2>
              </div>

              <p className="text-xl leading-relaxed text-white/95">
                {content.text1}
              </p>

              <p className="text-lg leading-relaxed text-green-100">
                {content.text2}
              </p>

              {current === slides.length - 1 && (
                <div className="pt-4 space-y-3">
                  <h3 className="text-3xl font-bold">
                    {t.thankyou}
                  </h3>

                  <p className="text-lg text-white/90">
                    {t.thankyou2}
                  </p>

                  <p className="text-green-200">
                    {t.contact}
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <img
                src={slide.image}
                className="w-full max-h-[65vh] object-cover rounded-3xl border border-white/20 shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="pb-6 px-8">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <button
                onClick={prevSlide}
                className="bg-black/50 hover:bg-black/70 transition p-4 rounded-full"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={nextSlide}
                className="bg-black/50 hover:bg-black/70 transition p-4 rounded-full"
              >
                <ChevronRight />
              </button>

              <button
                onClick={() => setCurrent(0)}
                className="bg-black/50 hover:bg-black/70 transition p-4 rounded-full"
              >
                <Home />
              </button>
            </div>

            <div className="flex items-center gap-3">

              <button
                onClick={() => setGuided(!guided)}
                className="bg-green-700 hover:bg-green-600 transition px-5 py-3 rounded-2xl flex items-center gap-2"
              >
                {guided ? <Pause /> : <Play />}
                {guided ? "Pause Tour" : t.guided}
              </button>

              <a
                href="https://www.bronsonfamilyfarm.com/"
                target="_blank"
                className="bg-white text-black hover:bg-green-100 transition px-5 py-3 rounded-2xl flex items-center gap-2"
              >
                <Globe size={18} />
                Website
              </a>

              <a
                href="mailto:cburgess@bronsonfamilyfarm.com"
                className="bg-black/60 hover:bg-black/80 transition px-5 py-3 rounded-2xl flex items-center gap-2"
              >
                <MessageCircle size={18} />
                {t.feedback}
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all ${
                  current === index
                    ? "w-12 bg-green-400"
                    : "w-3 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
