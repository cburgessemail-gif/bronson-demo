import { useEffect, useMemo, useState } from "react";

type LangKey =
  | "English"
  | "Español"
  | "Tagalog"
  | "Italiano"
  | "עברית"
  | "Français";

type Slide = {
  id: number;
  nav: string;
  title: Record<LangKey, string>;
  subtitle: Record<LangKey, string>;
  bullets: Record<LangKey, string[]>;
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
    hero: "Connected Food Ecosystem Experience",
    begin: "Begin Guided Tour",
    stop: "Pause Tour",
    next: "Next",
    back: "Back",
    start: "Start Over",
    feedback: "Share Feedback",
  },
  Español: {
    hero: "Experiencia de Ecosistema Alimentario Conectado",
    begin: "Comenzar Recorrido",
    stop: "Pausar",
    next: "Siguiente",
    back: "Atrás",
    start: "Comenzar de Nuevo",
    feedback: "Compartir Comentarios",
  },
  Tagalog: {
    hero: "Konektadong Food Ecosystem Experience",
    begin: "Simulan ang Tour",
    stop: "I-pause",
    next: "Susunod",
    back: "Bumalik",
    start: "Magsimula Muli",
    feedback: "Magbigay ng Feedback",
  },
  Italiano: {
    hero: "Esperienza Ecosistema Alimentare Connesso",
    begin: "Avvia Tour",
    stop: "Pausa",
    next: "Avanti",
    back: "Indietro",
    start: "Ricomincia",
    feedback: "Condividi Feedback",
  },
  עברית: {
    hero: "חוויית מערכת מזון מחוברת",
    begin: "התחל סיור",
    stop: "השהה",
    next: "הבא",
    back: "חזור",
    start: "התחל מחדש",
    feedback: "שלח משוב",
  },
  Français: {
    hero: "Expérience Écosystème Alimentaire Connecté",
    begin: "Commencer la Visite",
    stop: "Pause",
    next: "Suivant",
    back: "Retour",
    start: "Recommencer",
    feedback: "Partager des Commentaires",
  },
};

const slides: Slide[] = [
  {
    id: 1,
    nav: "Bronson Family Farm",
    title: {
      English: "Enter the Farm",
      Español: "Entre a la Granja",
      Tagalog: "Pumasok sa Bukid",
      Italiano: "Entra nella Fattoria",
      עברית: "היכנס לחווה",
      Français: "Entrez dans la Ferme",
    },
    subtitle: {
      English:
        "The journey begins at the Historic Lansdowne Airport in Youngstown.",
      Español:
        "El viaje comienza en el histórico aeropuerto Lansdowne en Youngstown.",
      Tagalog:
        "Nagsisimula ang paglalakbay sa makasaysayang Lansdowne Airport.",
      Italiano:
        "Il viaggio inizia allo storico aeroporto Lansdowne di Youngstown.",
      עברית: "המסע מתחיל בשדה התעופה ההיסטורי לנסדאון ביונגסטאון.",
      Français:
        "Le voyage commence à l’aéroport historique Lansdowne à Youngstown.",
    },
    bullets: {
      English: [
        "118+ acres of growing opportunity",
        "Historic airport transformed into a food ecosystem",
        "Food, workforce, education, and community connected together",
      ],
      Español: [
        "Más de 118 acres de oportunidad agrícola",
        "Aeropuerto histórico convertido en ecosistema alimentario",
        "Alimentos, educación y comunidad conectados",
      ],
      Tagalog: [
        "118+ ektarya ng oportunidad",
        "Makaysayang paliparan na ginawang food ecosystem",
        "Pagkain, edukasyon, at komunidad na konektado",
      ],
      Italiano: [
        "Oltre 118 acri di opportunità agricola",
        "Aeroporto storico trasformato in ecosistema alimentare",
        "Cibo, istruzione e comunità collegati",
      ],
      עברית: [
        "יותר מ-118 אקרים של הזדמנות חקלאית",
        "שדה תעופה היסטורי שהפך לאקוסיסטם מזון",
        "מזון, חינוך וקהילה מחוברים",
      ],
      Français: [
        "Plus de 118 acres d’opportunités agricoles",
        "Aéroport historique transformé en écosystème alimentaire",
        "Nourriture, éducation et communauté connectées",
      ],
    },
    image: "/SAM_0220.JPG",
  },

  {
    id: 2,
    nav: "Connected Ecosystem",
    title: {
      English: "A Connected Ecosystem",
      Español: "Un Ecosistema Conectado",
      Tagalog: "Magkakaugnay na Ecosystem",
      Italiano: "Un Ecosistema Connesso",
      עברית: "אקוסיסטם מחובר",
      Français: "Un Écosystème Connecté",
    },
    subtitle: {
      English:
        "Bronson Family Farm connects growers, families, youth, partners, and markets together.",
      Español:
        "Bronson Family Farm conecta productores, familias y mercados.",
      Tagalog:
        "Pinagdurugtong ng Bronson Family Farm ang growers at komunidad.",
      Italiano:
        "Bronson Family Farm collega coltivatori, famiglie e mercati.",
      עברית:
        "Bronson Family Farm מחברת מגדלים, משפחות ושותפים יחד.",
      Français:
        "Bronson Family Farm relie producteurs, familles et marchés.",
    },
    bullets: {
      English: [
        "Circulating food locally",
        "Building regional food access",
        "Creating pathways to participation",
      ],
      Español: [
        "Distribución local de alimentos",
        "Acceso regional a alimentos",
        "Creando caminos de participación",
      ],
      Tagalog: [
        "Lokal na food circulation",
        "Pagpapalawak ng food access",
        "Paglikha ng mga pathway",
      ],
      Italiano: [
        "Distribuzione alimentare locale",
        "Accesso regionale al cibo",
        "Creazione di opportunità",
      ],
      עברית: [
        "הפצת מזון מקומית",
        "הרחבת גישה למזון",
        "יצירת מסלולי השתתפות",
      ],
      Français: [
        "Circulation alimentaire locale",
        "Accès régional à la nourriture",
        "Création de parcours de participation",
      ],
    },
    image: "/ConnectFoodEcosystem_withimages.jpeg",
  },

  {
    id: 3,
    nav: "Explore the Farm",
    title: {
      English: "Explore the Farm",
      Español: "Explora la Granja",
      Tagalog: "Tuklasin ang Bukid",
      Italiano: "Esplora la Fattoria",
      עברית: "חקור את החווה",
      Français: "Explorez la Ferme",
    },
    subtitle: {
      English:
        "Experience outdoor growing, aviation history, and place-based agriculture.",
      Español:
        "Experimente agricultura al aire libre e historia de aviación.",
      Tagalog:
        "Maranasan ang outdoor growing at aviation history.",
      Italiano:
        "Vivi agricoltura all’aperto e storia dell’aviazione.",
      עברית:
        "חווה חקלאות חיצונית והיסטוריית תעופה.",
      Français:
        "Découvrez l’agriculture extérieure et l’histoire aérienne.",
    },
    bullets: {
      English: [
        "FAA-approved growing areas",
        "Outdoor learning environment",
        "Future irrigation and off-grid systems",
      ],
      Español: [
        "Áreas aprobadas por FAA",
        "Entorno educativo al aire libre",
        "Sistemas futuros fuera de red",
      ],
      Tagalog: [
        "FAA-approved growing areas",
        "Outdoor learning",
        "Future off-grid systems",
      ],
      Italiano: [
        "Aree agricole approvate FAA",
        "Ambiente educativo esterno",
        "Sistemi futuri off-grid",
      ],
      עברית: [
        "אזורי גידול מאושרי FAA",
        "למידה חיצונית",
        "מערכות עתידיות מחוץ לרשת",
      ],
      Français: [
        "Zones agricoles approuvées FAA",
        "Environnement éducatif extérieur",
        "Systèmes futurs hors réseau",
      ],
    },
    image: "/GrowArea.jpg",
  },

  {
    id: 4,
    nav: "Guest",
    title: {
      English: "Guest Experience",
      Español: "Experiencia del Visitante",
      Tagalog: "Karanasan ng Bisita",
      Italiano: "Esperienza Ospite",
      עברית: "חוויית אורח",
      Français: "Expérience Visiteur",
    },
    subtitle: {
      English:
        "Visitors experience food, nature, wellness, and inspiration.",
      Español:
        "Los visitantes experimentan comida y bienestar.",
      Tagalog:
        "Nararanasan ng bisita ang pagkain at wellness.",
      Italiano:
        "Gli ospiti vivono cibo e benessere.",
      עברית:
        "מבקרים חווים מזון, טבע והשראה.",
      Français:
        "Les visiteurs découvrent nourriture et bien-être.",
    },
    bullets: {
      English: [
        "Healthy family experiences",
        "Nature-based learning",
        "Community connection",
      ],
      Español: [
        "Experiencias familiares saludables",
        "Aprendizaje natural",
        "Conexión comunitaria",
      ],
      Tagalog: [
        "Healthy family experiences",
        "Nature learning",
        "Community connection",
      ],
      Italiano: [
        "Esperienze familiari sane",
        "Apprendimento naturale",
        "Connessione comunitaria",
      ],
      עברית: [
        "חוויות משפחתיות בריאות",
        "למידה בטבע",
        "חיבור קהילתי",
      ],
      Français: [
        "Expériences familiales saines",
        "Apprentissage naturel",
        "Connexion communautaire",
      ],
    },
    image: "/SAM_0225.JPG",
  },

  {
    id: 5,
    nav: "Customer",
    title: {
      English: "Healthy Food Access",
      Español: "Acceso a Alimentos Saludables",
      Tagalog: "Healthy Food Access",
      Italiano: "Accesso a Cibo Sano",
      עברית: "גישה למזון בריא",
      Français: "Accès à une Nourriture Saine",
    },
    subtitle: {
      English:
        "Fresh food strengthens families and communities.",
      Español:
        "Los alimentos frescos fortalecen familias.",
      Tagalog:
        "Pinapalakas ng sariwang pagkain ang pamilya.",
      Italiano:
        "Il cibo fresco rafforza le famiglie.",
      עברית:
        "מזון טרי מחזק משפחות וקהילות.",
      Français:
        "Les aliments frais renforcent les familles.",
    },
    bullets: {
      English: [
        "Fresh local produce",
        "Nutrition education",
        "Repeat healthy choices",
      ],
      Español: [
        "Productos frescos",
        "Educación nutricional",
        "Decisiones saludables",
      ],
      Tagalog: [
        "Fresh produce",
        "Nutrition education",
        "Healthy choices",
      ],
      Italiano: [
        "Prodotti freschi",
        "Educazione nutrizionale",
        "Scelte salutari",
      ],
      עברית: [
        "תוצרת טרייה",
        "חינוך תזונתי",
        "בחירות בריאות",
      ],
      Français: [
        "Produits frais",
        "Éducation nutritionnelle",
        "Choix sains",
      ],
    },
    image: "/SAM_0229.JPG",
  },

  {
    id: 6,
    nav: "Marketplace",
    title: {
      English: "Growers Supply Marketplace",
      Español: "Mercado de Productores",
      Tagalog: "Marketplace ng Growers",
      Italiano: "Mercato dei Coltivatori",
      עברית: "שוק המגדלים",
      Français: "Marché des Producteurs",
    },
    subtitle: {
      English:
        "The marketplace connects growers, products, tools, and opportunity.",
      Español:
        "El mercado conecta productores y oportunidades.",
      Tagalog:
        "Nagdurugtong ang marketplace ng growers at oportunidad.",
      Italiano:
        "Il mercato collega coltivatori e opportunità.",
      עברית:
        "השוק מחבר מגדלים והזדמנויות.",
      Français:
        "Le marché relie producteurs et opportunités.",
    },
    bullets: {
      English: [
        "Tools and supplies",
        "Seedlings and produce",
        "Future online ordering",
      ],
      Español: [
        "Herramientas y suministros",
        "Plántulas y productos",
        "Pedidos en línea",
      ],
      Tagalog: [
        "Tools and supplies",
        "Produce and seedlings",
        "Online ordering",
      ],
      Italiano: [
        "Strumenti e forniture",
        "Prodotti agricoli",
        "Ordini online",
      ],
      עברית: [
        "כלים ואספקה",
        "שתילים ותוצרת",
        "הזמנות מקוונות",
      ],
      Français: [
        "Outils et fournitures",
        "Semis et produits",
        "Commandes en ligne",
      ],
    },
    image: "/SAM_0226.JPG",
  },

  {
    id: 7,
    nav: "Grower",
    title: {
      English: "Grower Pathway",
      Español: "Camino del Productor",
      Tagalog: "Grower Pathway",
      Italiano: "Percorso Coltivatore",
      עברית: "מסלול מגדל",
      Français: "Parcours Producteur",
    },
    subtitle: {
      English:
        "Growers gain access to knowledge, tools, and markets.",
      Español:
        "Los productores acceden a herramientas y mercados.",
      Tagalog:
        "Nagkakaroon ng access ang growers sa tools at markets.",
      Italiano:
        "I coltivatori accedono a strumenti e mercati.",
      עברית:
        "מגדלים מקבלים גישה לידע ולשווקים.",
      Français:
        "Les producteurs accèdent aux outils et marchés.",
    },
    bullets: {
      English: [
        "Education and demonstrations",
        "Community growing support",
        "Market participation",
      ],
      Español: [
        "Educación y demostraciones",
        "Apoyo comunitario",
        "Participación de mercado",
      ],
      Tagalog: [
        "Education",
        "Growing support",
        "Marketplace participation",
      ],
      Italiano: [
        "Educazione e dimostrazioni",
        "Supporto agricolo",
        "Partecipazione al mercato",
      ],
      עברית: [
        "חינוך והדגמות",
        "תמיכה קהילתית",
        "השתתפות בשוק",
      ],
      Français: [
        "Éducation et démonstrations",
        "Soutien agricole",
        "Participation au marché",
      ],
    },
    image: "/SAM_0223.JPG",
  },

  {
    id: 8,
    nav: "Youth Workforce",
    title: {
      English: "Youth Workforce",
      Español: "Fuerza Laboral Juvenil",
      Tagalog: "Youth Workforce",
      Italiano: "Forza Lavoro Giovanile",
      עברית: "כוח עבודה לנוער",
      Français: "Main-d’œuvre Jeunesse",
    },
    subtitle: {
      English:
        "Youth build leadership, responsibility, and future readiness.",
      Español:
        "Los jóvenes desarrollan liderazgo y responsabilidad.",
      Tagalog:
        "Nagkakaroon ng leadership at responsibility ang youth.",
      Italiano:
        "I giovani sviluppano leadership e responsabilità.",
      עברית:
        "נוער בונה מנהיגות ואחריות.",
      Français:
        "Les jeunes développent leadership et responsabilité.",
    },
    bullets: {
      English: [
        "Outdoor workforce training",
        "Agriculture and STEAM",
        "Career pathway development",
      ],
      Español: [
        "Capacitación laboral",
        "Agricultura y STEAM",
        "Desarrollo profesional",
      ],
      Tagalog: [
        "Workforce training",
        "Agriculture and STEAM",
        "Career readiness",
      ],
      Italiano: [
        "Formazione lavorativa",
        "Agricoltura e STEAM",
        "Preparazione professionale",
      ],
      עברית: [
        "הכשרה מקצועית",
        "חקלאות ו-STEAM",
        "פיתוח קריירה",
      ],
      Français: [
        "Formation professionnelle",
        "Agriculture et STEAM",
        "Développement de carrière",
      ],
    },
    image: "/SAM_0221.JPG",
  },

  {
    id: 9,
    nav: "Partner",
    title: {
      English: "Partnerships",
      Español: "Alianzas",
      Tagalog: "Partnerships",
      Italiano: "Partnership",
      עברית: "שותפויות",
      Français: "Partenariats",
    },
    subtitle: {
      English:
        "Community organizations strengthen the ecosystem together.",
      Español:
        "Las organizaciones fortalecen el ecosistema.",
      Tagalog:
        "Pinapalakas ng partnerships ang ecosystem.",
      Italiano:
        "Le organizzazioni rafforzano l’ecosistema.",
      עברית:
        "ארגונים מחזקים את האקוסיסטם יחד.",
      Français:
        "Les organisations renforcent l’écosystème.",
    },
    bullets: {
      English: [
        "Education and health partnerships",
        "Community collaboration",
        "Shared regional impact",
      ],
      Español: [
        "Educación y salud",
        "Colaboración comunitaria",
        "Impacto regional",
      ],
      Tagalog: [
        "Education partnerships",
        "Community collaboration",
        "Regional impact",
      ],
      Italiano: [
        "Partnership educative",
        "Collaborazione",
        "Impatto regionale",
      ],
      עברית: [
        "שותפויות חינוך ובריאות",
        "שיתוף פעולה קהילתי",
        "השפעה אזורית",
      ],
      Français: [
        "Partenariats éducatifs",
        "Collaboration communautaire",
        "Impact régional",
      ],
    },
    image: "/SAM_0222.JPG",
  },

  {
    id: 10,
    nav: "Value-Added",
    title: {
      English: "Value-Added Future",
      Español: "Futuro de Valor Agregado",
      Tagalog: "Value-Added Future",
      Italiano: "Futuro a Valore Aggiunto",
      עברית: "עתיד בעל ערך מוסף",
      Français: "Avenir à Valeur Ajoutée",
    },
    subtitle: {
      English:
        "The ecosystem expands through culinary, agritourism, and innovation.",
      Español:
        "El ecosistema crece con innovación y gastronomía.",
      Tagalog:
        "Lumalaki ang ecosystem sa innovation at agritourism.",
      Italiano:
        "L’ecosistema cresce con innovazione e agriturismo.",
      עברית:
        "האקוסיסטם מתרחב באמצעות חדשנות ותיירות חקלאית.",
      Français:
        "L’écosystème grandit grâce à l’innovation.",
    },
    bullets: {
      English: [
        "Culinary experiences",
        "Agritourism opportunities",
        "Future food innovation",
      ],
      Español: [
        "Experiencias culinarias",
        "Agriturismo",
        "Innovación alimentaria",
      ],
      Tagalog: [
        "Culinary experiences",
        "Agritourism",
        "Food innovation",
      ],
      Italiano: [
        "Esperienze culinarie",
        "Agriturismo",
        "Innovazione alimentare",
      ],
      עברית: [
        "חוויות קולינריות",
        "תיירות חקלאית",
        "חדשנות מזון",
      ],
      Français: [
        "Expériences culinaires",
        "Agritourisme",
        "Innovation alimentaire",
      ],
    },
    image: "/SAM_0225.JPG",
  },

  {
    id: 11,
    nav: "Thank You",
    title: {
      English: "Thank You",
      Español: "Gracias",
      Tagalog: "Salamat",
      Italiano: "Grazie",
      עברית: "תודה",
      Français: "Merci",
    },
    subtitle: {
      English:
        "Thank you for experiencing Bronson Family Farm.",
      Español:
        "Gracias por experimentar Bronson Family Farm.",
      Tagalog:
        "Salamat sa pagbisita sa Bronson Family Farm.",
      Italiano:
        "Grazie per aver visitato Bronson Family Farm.",
      עברית:
        "תודה שחוויתם את Bronson Family Farm.",
      Français:
        "Merci d’avoir découvert Bronson Family Farm.",
    },
    bullets: {
      English: [
        "Share your feedback",
        "Join the ecosystem",
        "www.bronsonfamilyfarm.com",
      ],
      Español: [
        "Comparta comentarios",
        "Únase al ecosistema",
        "www.bronsonfamilyfarm.com",
      ],
      Tagalog: [
        "Share feedback",
        "Join the ecosystem",
        "www.bronsonfamilyfarm.com",
      ],
      Italiano: [
        "Condividi feedback",
        "Unisciti all’ecosistema",
        "www.bronsonfamilyfarm.com",
      ],
      עברית: [
        "שתפו משוב",
        "הצטרפו לאקוסיסטם",
        "www.bronsonfamilyfarm.com",
      ],
      Français: [
        "Partagez vos commentaires",
        "Rejoignez l’écosystème",
        "www.bronsonfamilyfarm.com",
      ],
    },
    image: "/SAM_0229.JPG",
  },
];

export default function App() {
  const [lang, setLang] = useState<LangKey>("English");
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);

  useEffect(() => {
    if (!guided) return;

    const timer = setTimeout(() => {
      setIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
    }, 9000);

    return () => clearTimeout(timer);
  }, [index, guided]);

  const slide = useMemo(() => slides[index], [index]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 py-5">
        <div className="flex justify-between items-start">
          <div>
            <div className="tracking-[0.4em] text-[#d7a64a] text-sm font-semibold mb-4">
              BRONSON FAMILY FARM DEMO
            </div>

            <h1 className="text-5xl md:text-7xl font-light leading-none max-w-5xl">
              {ui[lang].hero}
            </h1>
          </div>

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as LangKey)}
            className="bg-[#151515] border border-gray-700 rounded-full px-5 py-3 text-lg"
          >
            {LANGS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>

        <div className="w-full h-2 bg-[#222] rounded-full mt-8 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#b8de3d] to-[#d7a64a]"
            style={{
              width: `${((index + 1) / slides.length) * 100}%`,
            }}
          />
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              className={`px-5 py-3 rounded-full border transition-all duration-300 ${
                index === i
                  ? "bg-[#d7a64a] text-white border-[#d7a64a]"
                  : "bg-[#111] border-[#444]"
              }`}
            >
              {s.id}. {s.nav}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-10 items-stretch">
          <div className="bg-[#050505] border border-[#222] rounded-[40px] p-10">
            <div className="tracking-[0.4em] text-[#d7a64a] text-sm mb-5">
              BRONSON FAMILY FARM DEMO
            </div>

            <h2 className="text-5xl leading-tight font-light mb-6">
              {slide.title[lang]}
            </h2>

            <p className="text-2xl text-gray-200 leading-relaxed mb-8">
              {slide.subtitle[lang]}
            </p>

            <ul className="space-y-5">
              {slide.bullets[lang].map((b) => (
                <li key={b} className="flex items-start gap-4 text-2xl">
                  <span className="w-3 h-3 bg-[#b8de3d] rounded-full mt-3" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 mt-12">
              <button
                onClick={() => setGuided(!guided)}
                className="bg-[#d7a64a] text-black px-6 py-4 rounded-full text-lg font-semibold"
              >
                {guided ? ui[lang].stop : ui[lang].begin}
              </button>

              <button
                onClick={() =>
                  setIndex((prev) => Math.max(prev - 1, 0))
                }
                className="border border-gray-700 px-6 py-4 rounded-full"
              >
                {ui[lang].back}
              </button>

              <button
                onClick={() =>
                  setIndex((prev) =>
                    Math.min(prev + 1, slides.length - 1)
                  )
                }
                className="border border-gray-700 px-6 py-4 rounded-full"
              >
                {ui[lang].next}
              </button>

              <button
                onClick={() => {
                  setIndex(0);
                  setGuided(false);
                }}
                className="border border-gray-700 px-6 py-4 rounded-full"
              >
                {ui[lang].start}
              </button>
            </div>
          </div>

          <div className="relative bg-[#050505] border border-[#222] rounded-[40px] overflow-hidden min-h-[720px] flex items-center justify-center">
            <div className="absolute top-5 right-5 z-20 bg-black/60 border border-white/10 rounded-full px-5 py-3 text-2xl font-bold">
              {index + 1} / {slides.length}
            </div>

            <img
              src={slide.image}
              alt={slide.nav}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center mt-10 pb-10">
          <button className="border border-[#555] px-8 py-4 rounded-full text-xl hover:bg-white hover:text-black transition-all duration-300">
            {ui[lang].feedback}
          </button>
        </div>
      </div>
    </div>
  );
}
