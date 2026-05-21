import { useEffect, useMemo, useState } from "react";

type LangKey =
  | "English"
  | "Español"
  | "Tagalog"
  | "Italiano"
  | "עברית"
  | "Français";

type PathwayKey =
  | "guest"
  | "customer"
  | "grower"
  | "youth"
  | "partner"
  | "marketplace";

type Slide = {
  id: number;
  pathway?: PathwayKey;
  title: Record<LangKey, string>;
  subtitle: Record<LangKey, string>;
  body: Record<LangKey, string>;
  image: string;
};

const LANGS: LangKey[] = [
  "English",
  "Español",
  "Tagalog",
  "Italiano",
  "עברית",
  "Français",
];

const ui = {
  English: {
    start: "Begin Experience",
    next: "Next",
    back: "Back",
    home: "Home",
    guided: "Guided Tour",
    pause: "Pause Tour",
    pathways: "Explore Pathways",
    contact: "Share Feedback",
  },
};

const slides: Slide[] = [
  {
    id: 1,
    title: {
      English: "BRONSON FAMILY FARM",
      Español: "BRONSON FAMILY FARM",
      Tagalog: "BRONSON FAMILY FARM",
      Italiano: "BRONSON FAMILY FARM",
      עברית: "BRONSON FAMILY FARM",
      Français: "BRONSON FAMILY FARM",
    },
    subtitle: {
      English: "A Connected Food Ecosystem Experience",
      Español: "Una Experiencia de Ecosistema Alimentario Conectado",
      Tagalog: "Konektadong Food Ecosystem Experience",
      Italiano: "Esperienza di Ecosistema Alimentare Connesso",
      עברית: "חוויית מערכת מזון מחוברת",
      Français: "Une Expérience d'Écosystème Alimentaire Connecté",
    },
    body: {
      English:
        "Welcome to Bronson Family Farm, located beside the historic Lansdowne Airport in Youngstown, Ohio. This is not simply a farm. It is a place-based ecosystem where agriculture, education, workforce development, food access, aviation history, and community collaboration come together.",
      Español:
        "Bienvenido a Bronson Family Farm...",
      Tagalog:
        "Maligayang pagdating sa Bronson Family Farm...",
      Italiano:
        "Benvenuti a Bronson Family Farm...",
      עברית:
        "ברוכים הבאים ל-Bronson Family Farm...",
      Français:
        "Bienvenue à Bronson Family Farm...",
    },
    image: "/images/airport-overview.jpg",
  },

  {
    id: 2,
    title: {
      English: "THE HISTORIC AIRPORT",
      Español: "EL AEROPUERTO HISTÓRICO",
      Tagalog: "ANG MAKASAYSAYANG PALIPARAN",
      Italiano: "L'AEROPORTO STORICO",
      עברית: "שדה התעופה ההיסטורי",
      Français: "L’AÉROPORT HISTORIQUE",
    },
    subtitle: {
      English: "A Place With Legacy And Purpose",
      Español: "Un Lugar Con Legado Y Propósito",
      Tagalog: "Isang Lugar na May Pamana",
      Italiano: "Un Luogo Con Eredità",
      עברית: "מקום עם מורשת",
      Français: "Un Lieu Avec Héritage",
    },
    body: {
      English:
        "Historic Lansdowne Airport has long served as a place of movement, connection, and infrastructure within the Youngstown region. Today, Bronson Family Farm shares this unique aviation environment to build a modern food ecosystem rooted in resilience, sustainability, and opportunity.",
      Español: "Historic Lansdowne Airport...",
      Tagalog: "Historic Lansdowne Airport...",
      Italiano: "Historic Lansdowne Airport...",
      עברית: "Historic Lansdowne Airport...",
      Français: "Historic Lansdowne Airport...",
    },
    image: "/images/runway-history.jpg",
  },

  {
    id: 3,
    title: {
      English: "A CONNECTED ECOSYSTEM",
      Español: "UN ECOSISTEMA CONECTADO",
      Tagalog: "KONEKTADONG ECOSYSTEM",
      Italiano: "UN ECOSISTEMA CONNESSO",
      עברית: "מערכת אקולוגית מחוברת",
      Français: "UN ÉCOSYSTÈME CONNECTÉ",
    },
    subtitle: {
      English: "More Than Farming",
      Español: "Más Que Agricultura",
      Tagalog: "Higit Pa Sa Pagsasaka",
      Italiano: "Più Della Coltivazione",
      עברית: "יותר מחקלאות",
      Français: "Plus Que L’Agriculture",
    },
    body: {
      English:
        "The Bronson Family Farm ecosystem connects growers, families, youth, education, health, markets, technology, transportation, and partnerships into one shared system. Every pathway contributes to community growth and regional food resilience.",
      Español: "El ecosistema de Bronson Family Farm...",
      Tagalog: "Ang ecosystem ng Bronson Family Farm...",
      Italiano: "L’ecosistema di Bronson Family Farm...",
      עברית: "המערכת האקולוגית של Bronson Family Farm...",
      Français: "L’écosystème de Bronson Family Farm...",
    },
    image: "/ConnectFoodEcosystem_withimages.jpeg",
  },

  {
    id: 4,
    pathway: "guest",
    title: {
      English: "GUEST PATHWAY",
      Español: "RUTA DEL VISITANTE",
      Tagalog: "PATHWAY NG BISITA",
      Italiano: "PERCORSO OSPITE",
      עברית: "מסלול אורח",
      Français: "PARCOURS VISITEUR",
    },
    subtitle: {
      English: "Discover The Experience",
      Español: "Descubre La Experiencia",
      Tagalog: "Tuklasin Ang Karanasan",
      Italiano: "Scopri L'Esperienza",
      עברית: "גלה את החוויה",
      Français: "Découvrez L’Expérience",
    },
    body: {
      English:
        "Guests arrive through a historic airport environment transformed into a living agricultural destination. Visitors experience outdoor growing areas, community gathering spaces, demonstrations, wellness education, and a deeper understanding of food systems and regional resilience.",
      Español: "Los visitantes llegan...",
      Tagalog: "Dumarating ang mga bisita...",
      Italiano: "Gli ospiti arrivano...",
      עברית: "האורחים מגיעים...",
      Français: "Les visiteurs arrivent...",
    },
    image: "/images/guest-arrival.jpg",
  },

  {
    id: 5,
    pathway: "grower",
    title: {
      English: "GROWER PATHWAY",
      Español: "RUTA DEL CULTIVADOR",
      Tagalog: "PATHWAY NG GROWER",
      Italiano: "PERCORSO COLTIVATORE",
      עברית: "מסלול מגדל",
      Français: "PARCOURS PRODUCTEUR",
    },
    subtitle: {
      English: "Tools. Knowledge. Opportunity.",
      Español: "Herramientas. Conocimiento. Oportunidad.",
      Tagalog: "Mga Kagamitan. Kaalaman.",
      Italiano: "Strumenti. Conoscenza.",
      עברית: "כלים. ידע.",
      Français: "Outils. Connaissances.",
    },
    body: {
      English:
        "Growers gain access to education, tools, demonstrations, infrastructure support, market opportunities, and collaborative learning experiences. The ecosystem helps growers move from small-scale production toward long-term sustainability and regional participation.",
      Español: "Los cultivadores reciben...",
      Tagalog: "Nakakatanggap ang growers...",
      Italiano: "I coltivatori ricevono...",
      עברית: "המגדלים מקבלים...",
      Français: "Les producteurs reçoivent...",
    },
    image: "/images/grower-field.jpg",
  },

  {
    id: 6,
    pathway: "customer",
    title: {
      English: "CUSTOMER PATHWAY",
      Español: "RUTA DEL CLIENTE",
      Tagalog: "PATHWAY NG CUSTOMER",
      Italiano: "PERCORSO CLIENTE",
      עברית: "מסלול לקוח",
      Français: "PARCOURS CLIENT",
    },
    subtitle: {
      English: "Fresh Food And Wellness",
      Español: "Comida Fresca Y Bienestar",
      Tagalog: "Sariwang Pagkain",
      Italiano: "Cibo Fresco",
      עברית: "מזון טרי",
      Français: "Aliments Frais",
    },
    body: {
      English:
        "Customers experience direct access to fresh food, nutrition education, local growers, and healthier food choices. The ecosystem encourages repeat healthy engagement while strengthening local food access across the community.",
      Español: "Los clientes experimentan...",
      Tagalog: "Nararanasan ng customers...",
      Italiano: "I clienti sperimentano...",
      עברית: "הלקוחות חווים...",
      Français: "Les clients découvrent...",
    },
    image: "/images/customer-market.jpg",
  },

  {
    id: 7,
    pathway: "youth",
    title: {
      English: "YOUTH WORKFORCE PATHWAY",
      Español: "RUTA JUVENIL",
      Tagalog: "YOUTH WORKFORCE",
      Italiano: "PERCORSO GIOVANILE",
      עברית: "מסלול נוער",
      Français: "PARCOURS JEUNESSE",
    },
    subtitle: {
      English: "Learning Through Participation",
      Español: "Aprender Participando",
      Tagalog: "Pagkatuto Sa Karanasan",
      Italiano: "Imparare Partecipando",
      עברית: "למידה דרך השתתפות",
      Français: "Apprendre En Participant",
    },
    body: {
      English:
        "Youth participate in real outdoor workforce experiences focused on teamwork, agriculture, leadership, responsibility, wellness, and future readiness. The pathway helps transform participation into confidence, skill development, and opportunity.",
      Español: "Los jóvenes participan...",
      Tagalog: "Ang kabataan ay lumalahok...",
      Italiano: "I giovani partecipano...",
      עברית: "בני הנוער משתתפים...",
      Français: "Les jeunes participent...",
    },
    image: "/images/youth-workforce.jpg",
  },

  {
    id: 8,
    pathway: "partner",
    title: {
      English: "PARTNER PATHWAY",
      Español: "RUTA DE SOCIOS",
      Tagalog: "PARTNER PATHWAY",
      Italiano: "PERCORSO PARTNER",
      עברית: "מסלול שותפים",
      Français: "PARCOURS PARTENAIRES",
    },
    subtitle: {
      English: "Building Regional Collaboration",
      Español: "Construyendo Colaboración",
      Tagalog: "Pagbuo ng Pakikipagtulungan",
      Italiano: "Costruire Collaborazione",
      עברית: "בניית שיתוף פעולה",
      Français: "Construire La Collaboration",
    },
    body: {
      English:
        "Partners help strengthen infrastructure, education, health access, workforce development, sustainability, and regional impact. Through collaboration, organizations become part of a long-term ecosystem solution supporting community resilience.",
      Español: "Los socios ayudan...",
      Tagalog: "Tumutulong ang partners...",
      Italiano: "I partner aiutano...",
      עברית: "השותפים עוזרים...",
      Français: "Les partenaires contribuent...",
    },
    image: "/images/partners-meeting.jpg",
  },

  {
    id: 9,
    pathway: "marketplace",
    title: {
      English: "MARKETPLACE PATHWAY",
      Español: "RUTA DEL MERCADO",
      Tagalog: "MARKETPLACE PATHWAY",
      Italiano: "PERCORSO MERCATO",
      עברית: "מסלול שוק",
      Français: "PARCOURS MARCHÉ",
    },
    subtitle: {
      English: "Movement Of Food And Opportunity",
      Español: "Movimiento De Alimentos",
      Tagalog: "Paggalaw Ng Pagkain",
      Italiano: "Movimento Di Cibo",
      עברית: "תנועת מזון",
      Français: "Mouvement Alimentaire",
    },
    body: {
      English:
        "The marketplace connects growers, consumers, institutions, and community organizations into a regional supply ecosystem. Fresh produce, value-added goods, education, and relationships move together through a shared local economy.",
      Español: "El mercado conecta...",
      Tagalog: "Ikinokonekta ng marketplace...",
      Italiano: "Il mercato collega...",
      עברית: "השוק מחבר...",
      Français: "Le marché relie...",
    },
    image: "/images/marketplace-community.jpg",
  },

  {
    id: 10,
    title: {
      English: "WHY THIS MATTERS",
      Español: "POR QUÉ IMPORTA",
      Tagalog: "BAKIT MAHALAGA",
      Italiano: "PERCHÉ È IMPORTANTE",
      עברית: "למה זה חשוב",
      Français: "POURQUOI CELA IMPORTE",
    },
    subtitle: {
      English: "Building Community Resilience",
      Español: "Construyendo Resiliencia",
      Tagalog: "Pagbuo Ng Katatagan",
      Italiano: "Costruire Resilienza",
      עברית: "בניית חוסן קהילתי",
      Français: "Construire La Résilience",
    },
    body: {
      English:
        "Bronson Family Farm is creating a connected ecosystem where food, people, education, infrastructure, and opportunity work together. The goal is not simply to grow food — but to grow healthier communities, stronger local systems, and future generations.",
      Español: "Bronson Family Farm está creando...",
      Tagalog: "Ang Bronson Family Farm ay lumilikha...",
      Italiano: "Bronson Family Farm sta creando...",
      עברית: "Bronson Family Farm יוצרת...",
      Français: "Bronson Family Farm construit...",
    },
    image: "/images/community-impact.jpg",
  },

  {
    id: 11,
    title: {
      English: "THANK YOU",
      Español: "GRACIAS",
      Tagalog: "SALAMAT",
      Italiano: "GRAZIE",
      עברית: "תודה",
      Français: "MERCI",
    },
    subtitle: {
      English: "Join The Ecosystem",
      Español: "Únase Al Ecosistema",
      Tagalog: "Sumali Sa Ecosystem",
      Italiano: "Unisciti All'Ecosistema",
      עברית: "הצטרף למערכת",
      Français: "Rejoignez L’Écosystème",
    },
    body: {
      English:
        "Thank you for experiencing Bronson Family Farm. We welcome your ideas, participation, partnerships, and feedback as we continue building a healthier and more connected future for our region.\n\nwww.bronsonfamilyfarm.com\n330-275-1604",
      Español: "Gracias por experimentar...",
      Tagalog: "Salamat sa pagbisita...",
      Italiano: "Grazie per aver visitato...",
      עברית: "תודה שביקרתם...",
      Français: "Merci d’avoir découvert...",
    },
    image: "/images/final-sunset.jpg",
  },
];

export default function App() {
  const [lang, setLang] = useState<LangKey>("English");
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);

  const current = useMemo(() => slides[index], [index]);

  useEffect(() => {
    if (!guided) return;

    const timer = setTimeout(() => {
      setIndex((prev) => {
        if (prev >= slides.length - 1) {
          setGuided(false);
          return prev;
        }
        return prev + 1;
      });
    }, 9500);

    return () => clearTimeout(timer);
  }, [guided, index]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <img
        src={current.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />

      <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-12">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
              {current.title[lang]}
            </h1>

            <p className="mt-3 text-xl md:text-2xl text-green-200">
              {current.subtitle[lang]}
            </p>
          </div>

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as LangKey)}
            className="bg-black/50 border border-white/30 rounded-xl px-4 py-2"
          >
            {LANGS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>

        <div className="max-w-4xl">
          <p className="text-lg md:text-2xl leading-relaxed bg-black/35 backdrop-blur-sm rounded-2xl p-6">
            {current.body[lang]}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setIndex((p) => Math.max(p - 1, 0))}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20"
            >
              {ui.English.back}
            </button>

            <button
              onClick={() =>
                setIndex((p) => Math.min(p + 1, slides.length - 1))
              }
              className="px-5 py-3 rounded-2xl bg-green-700 hover:bg-green-600"
            >
              {ui.English.next}
            </button>

            <button
              onClick={() => setIndex(0)}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20"
            >
              {ui.English.home}
            </button>
          </div>

          <button
            onClick={() => setGuided((g) => !g)}
            className="px-6 py-3 rounded-2xl bg-amber-700 hover:bg-amber-600"
          >
            {guided ? ui.English.pause : ui.English.guided}
          </button>
        </div>
      </div>
    </div>
  );
}
