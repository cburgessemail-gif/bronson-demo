import { useMemo, useState } from "react";

type Pathway = {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  btn: string;
  target: string;
};

type ProofCard = {
  title: string;
  desc: string;
  img: string;
  btn: string;
};

type JourneyCard = {
  title: string;
  kicker: string;
  summary: string;
  points: string[];
  cta: string;
  image: string;
  action: "marketplace" | "history" | "connect" | "happening";
};

type CopySet = {
  siteTag: string;
  heroTitle: string;
  heroDesc: string;
  enterBtn: string;
  exploreBtn: string;
  trustLine: string;
  alignmentTag: string;
  alignmentTitle: string;
  alignmentDesc: string;
  resultsRibbon: string[];
  pathwaysTitle: string;
  pathwaysDesc: string;
  happeningTitle: string;
  happeningDesc: string;
  historyTitle: string;
  historyDesc: string;
  connectTitle: string;
  connectDesc: string;
  footerLine1: string;
  footerLine2: string;
  liveLang: string;
  pathwayTag: string;
  happeningTag: string;
  historyTag: string;
  connectTag: string;
  journeyTag: string;
  journeyTitle: string;
  journeyDesc: string;
};

export default function App() {
  const [lang, setLang] = useState("EN");

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openMarketplace = () => {
    window.open("https://grownby.com/farms/bronson-family-farm/shop", "_blank");
  };

  const languageNames: Record<string, string> = {
    EN: "English",
    ES: "Español",
    TL: "Tagalog",
    FR: "Français",
    HE: "עברית",
  };

  const copy = useMemo<CopySet>(() => {
    const translations: Record<string, CopySet> = {
      EN: {
        siteTag: "Historic Lansdowne Airport Site | Est. 1926",
        heroTitle:
          "From Youngstown’s first airport to a new future of food, learning, and community renewal.",
        heroDesc:
          "Bronson Family Farm is transforming historic land into a regenerative farm, agritourism destination, youth workforce pathway, and living ecosystem for the Mahoning Valley.",
        enterBtn: "Enter the Ecosystem",
        exploreBtn: "Explore Pathways",
        trustLine:
          "Regenerative Agriculture • Youth Workforce • Local Food Access • Grower Opportunity • Community Legacy",
        alignmentTag: "Community Alignment",
        alignmentTitle: "A vision strengthened through collaboration",
        alignmentDesc:
          "Bronson Family Farm connects land, food, workforce development, education, growers, families, and community partnership through a living ecosystem rooted in opportunity and renewal.",
        resultsRibbon: [
          "Historic Land Reimagined",
          "Grower Pathways",
          "Youth Workforce Vision",
          "Community Market Access",
        ],
        pathwaysTitle: "Choose Your Pathway Into the Ecosystem",
        pathwaysDesc:
          "A place where land, food, learning, business, and community come together.",
        happeningTitle: "Happening Now at Bronson Family Farm",
        happeningDesc:
          "Fresh activity. Real opportunities. Community momentum.",
        historyTitle: "A Historic Place With a Living Future",
        historyDesc:
          "Lansdowne Airport was dedicated in 1926 as Youngstown’s first airport. Today, Bronson Family Farm is helping reconnect land, food, families, growers, and opportunity on the same historic ground.",
        connectTitle: "Be Part of What’s Growing",
        connectDesc:
          "Fresh food. Opportunity. Community renewal. Legacy in motion.",
        footerLine1: "Historic Lansdowne Airport Site • Youngstown, Ohio",
        footerLine2: "www.bronsonfamilyfarm.com",
        liveLang: "Live language view",
        pathwayTag: "Ecosystem Pathways",
        happeningTag: "Momentum on the Land",
        historyTag: "Historic Ground",
        connectTag: "Get Involved",
        journeyTag: "Journey Mode",
        journeyTitle: "Every pathway leads to something meaningful",
        journeyDesc:
          "Each role in the ecosystem opens into purpose, value, and a next step.",
      },
      ES: {
        siteTag: "Sitio Histórico del Aeropuerto Lansdowne | Est. 1926",
        heroTitle:
          "Del primer aeropuerto de Youngstown a un nuevo futuro de alimentos, aprendizaje y renovación comunitaria.",
        heroDesc:
          "Bronson Family Farm está transformando tierra histórica en una granja regenerativa, un destino de agroturismo, un camino de formación laboral juvenil y un ecosistema vivo para el Valle de Mahoning.",
        enterBtn: "Entrar al Ecosistema",
        exploreBtn: "Explorar Caminos",
        trustLine:
          "Agricultura Regenerativa • Fuerza Laboral Juvenil • Acceso a Alimentos Locales • Oportunidad para Productores • Legado Comunitario",
        alignmentTag: "Alineación Comunitaria",
        alignmentTitle: "Una visión fortalecida por la colaboración",
        alignmentDesc:
          "Bronson Family Farm conecta tierra, alimentos, desarrollo laboral, educación, productores, familias y colaboración comunitaria a través de un ecosistema vivo arraigado en la oportunidad y la renovación.",
        resultsRibbon: [
          "Tierra Histórica Reimaginada",
          "Caminos para Productores",
          "Visión de Fuerza Laboral Juvenil",
          "Acceso Comunitario al Mercado",
        ],
        pathwaysTitle: "Elija Su Camino Dentro del Ecosistema",
        pathwaysDesc:
          "Un lugar donde la tierra, los alimentos, el aprendizaje, los negocios y la comunidad se unen.",
        happeningTitle: "Lo Que Está Pasando Ahora en Bronson Family Farm",
        happeningDesc:
          "Actividad fresca. Oportunidades reales. Impulso comunitario.",
        historyTitle: "Un Lugar Histórico con un Futuro Vivo",
        historyDesc:
          "El Aeropuerto Lansdowne fue inaugurado en 1926 como el primer aeropuerto de Youngstown. Hoy, Bronson Family Farm ayuda a reconectar la tierra, los alimentos, las familias, los productores y la oportunidad en el mismo terreno histórico.",
        connectTitle: "Sea Parte de Lo Que Está Creciendo",
        connectDesc:
          "Alimentos frescos. Oportunidad. Renovación comunitaria. Legado en movimiento.",
        footerLine1: "Sitio Histórico del Aeropuerto Lansdowne • Youngstown, Ohio",
        footerLine2: "www.bronsonfamilyfarm.com",
        liveLang: "Idioma activo",
        pathwayTag: "Caminos del Ecosistema",
        happeningTag: "Impulso en la Tierra",
        historyTag: "Terreno Histórico",
        connectTag: "Participe",
        journeyTag: "Modo de Recorrido",
        journeyTitle: "Cada camino lleva a algo significativo",
        journeyDesc:
          "Cada rol dentro del ecosistema se abre hacia propósito, valor y un siguiente paso.",
      },
      TL: {
        siteTag: "Makasaysayang Lansdowne Airport Site | Itinatag noong 1926",
        heroTitle:
          "Mula sa unang paliparan ng Youngstown tungo sa bagong hinaharap ng pagkain, pagkatuto, at pagpapanibago ng komunidad.",
        heroDesc:
          "Binabago ng Bronson Family Farm ang makasaysayang lupain upang maging regenerative farm, agritourism destination, youth workforce pathway, at buhay na ecosystem para sa Mahoning Valley.",
        enterBtn: "Pumasok sa Ecosystem",
        exploreBtn: "Tuklasin ang Mga Pathway",
        trustLine:
          "Regenerative Agriculture • Youth Workforce • Access sa Lokal na Pagkain • Oportunidad para sa Growers • Pamayanang May Pamana",
        alignmentTag: "Pagkakahanay ng Komunidad",
        alignmentTitle: "Isang bisyong pinatatag ng pakikipagtulungan",
        alignmentDesc:
          "Pinagdurugtong ng Bronson Family Farm ang lupa, pagkain, workforce development, edukasyon, growers, pamilya, at pakikipag-ugnayan ng komunidad sa pamamagitan ng buhay na ecosystem na nakaugat sa oportunidad at pagpapanibago.",
        resultsRibbon: [
          "Makasaysayang Lupang Binuhay Muli",
          "Mga Pathway para sa Growers",
          "Bisyon ng Youth Workforce",
          "Access ng Komunidad sa Pamilihan",
        ],
        pathwaysTitle: "Piliin ang Iyong Pathway Papasok sa Ecosystem",
        pathwaysDesc:
          "Isang lugar kung saan nagsasama ang lupa, pagkain, pagkatuto, negosyo, at komunidad.",
        happeningTitle: "Mga Nangyayari Ngayon sa Bronson Family Farm",
        happeningDesc:
          "Sariwang kilos. Tunay na oportunidad. Lakas ng komunidad.",
        historyTitle: "Isang Makasaysayang Lugar na May Buhay na Hinaharap",
        historyDesc:
          "Inialay ang Lansdowne Airport noong 1926 bilang unang paliparan ng Youngstown. Ngayon, tinutulungan ng Bronson Family Farm na muling pagdugtungin ang lupa, pagkain, pamilya, growers, at oportunidad sa parehong makasaysayang lugar.",
        connectTitle: "Maging Bahagi ng Lumalago",
        connectDesc:
          "Sariwang pagkain. Oportunidad. Pagpapanibago ng komunidad. Pamana na kumikilos.",
        footerLine1: "Makasaysayang Lansdowne Airport Site • Youngstown, Ohio",
        footerLine2: "www.bronsonfamilyfarm.com",
        liveLang: "Aktibong wika",
        pathwayTag: "Mga Pathway ng Ecosystem",
        happeningTag: "Galaw sa Lupain",
        historyTag: "Makasaysayang Lupain",
        connectTag: "Makilahok",
        journeyTag: "Journey Mode",
        journeyTitle: "Bawat pathway ay may makabuluhang pupuntahan",
        journeyDesc:
          "Bawat papel sa ecosystem ay may layunin, halaga, at susunod na hakbang.",
      },
      FR: {
        siteTag: "Site historique de l’aéroport de Lansdowne | Fondé en 1926",
        heroTitle:
          "Du premier aéroport de Youngstown vers un nouvel avenir de nourriture, d’apprentissage et de renouveau communautaire.",
        heroDesc:
          "Bronson Family Farm transforme un terrain historique en ferme régénératrice, destination d’agritourisme, parcours de main-d’œuvre jeunesse et écosystème vivant pour la vallée de Mahoning.",
        enterBtn: "Entrer dans l’Écosystème",
        exploreBtn: "Explorer les Parcours",
        trustLine:
          "Agriculture Régénératrice • Jeunesse et Emploi • Accès à l’Alimentation Locale • Opportunités pour les Producteurs • Héritage Communautaire",
        alignmentTag: "Alignement Communautaire",
        alignmentTitle: "Une vision renforcée par la collaboration",
        alignmentDesc:
          "Bronson Family Farm relie la terre, la nourriture, le développement de la main-d’œuvre, l’éducation, les producteurs, les familles et les partenariats communautaires à travers un écosystème vivant enraciné dans l’opportunité et le renouveau.",
        resultsRibbon: [
          "Terrain Historique Réinventé",
          "Parcours pour les Producteurs",
          "Vision Jeunesse et Emploi",
          "Accès Communautaire au Marché",
        ],
        pathwaysTitle: "Choisissez Votre Parcours dans l’Écosystème",
        pathwaysDesc:
          "Un lieu où la terre, la nourriture, l’apprentissage, l’entreprise et la communauté se rejoignent.",
        happeningTitle: "Ce Qui Se Passe Maintenant à Bronson Family Farm",
        happeningDesc:
          "Activité concrète. Véritables opportunités. Élan communautaire.",
        historyTitle: "Un Lieu Historique Avec un Avenir Vivant",
        historyDesc:
          "L’aéroport de Lansdowne a été inauguré en 1926 comme premier aéroport de Youngstown. Aujourd’hui, Bronson Family Farm aide à reconnecter la terre, la nourriture, les familles, les producteurs et les opportunités sur ce même site historique.",
        connectTitle: "Faites Partie de Ce Qui Grandit",
        connectDesc:
          "Nourriture fraîche. Opportunité. Renouveau communautaire. Héritage en mouvement.",
        footerLine1: "Site historique de l’aéroport de Lansdowne • Youngstown, Ohio",
        footerLine2: "www.bronsonfamilyfarm.com",
        liveLang: "Langue active",
        pathwayTag: "Parcours de l’Écosystème",
        happeningTag: "Élan sur le Terrain",
        historyTag: "Terrain Historique",
        connectTag: "Impliquez-vous",
        journeyTag: "Mode Parcours",
        journeyTitle: "Chaque parcours mène à quelque chose d’utile",
        journeyDesc:
          "Chaque rôle dans l’écosystème ouvre sur un but, une valeur et une prochaine étape.",
      },
      HE: {
        siteTag: "אתר היסטורי שדה התעופה לנסדאון | נוסד 1926",
        heroTitle:
          "משדה התעופה הראשון של יאנגסטאון לעתיד חדש של מזון, למידה והתחדשות קהילתית.",
        heroDesc:
          "Bronson Family Farm משנה אדמה היסטורית לחווה מתחדשת, יעד אגרו-תיירותי, מסלול תעסוקה לנוער ומערכת חיה עבור עמק מהונינג.",
        enterBtn: "היכנס למערכת",
        exploreBtn: "חקור מסלולים",
        trustLine:
          "חקלאות מתחדשת • תעסוקת נוער • גישה למזון מקומי • הזדמנויות למגדלים • מורשת קהילתית",
        alignmentTag: "חיבור קהילתי",
        alignmentTitle: "חזון שמתחזק באמצעות שיתוף פעולה",
        alignmentDesc:
          "Bronson Family Farm מחברת בין אדמה, מזון, פיתוח כוח עבודה, חינוך, מגדלים, משפחות ושותפות קהילתית באמצעות מערכת חיה המושרשת בהזדמנות ובהתחדשות.",
        resultsRibbon: [
          "אדמה היסטורית בדמיון חדש",
          "מסלולים למגדלים",
          "חזון לתעסוקת נוער",
          "גישה קהילתית לשוק",
        ],
        pathwaysTitle: "בחר את המסלול שלך במערכת",
        pathwaysDesc:
          "מקום שבו אדמה, מזון, למידה, עסקים וקהילה נפגשים.",
        happeningTitle: "מה קורה עכשיו ב-Bronson Family Farm",
        happeningDesc:
          "פעילות חיה. הזדמנויות אמיתיות. תנופה קהילתית.",
        historyTitle: "מקום היסטורי עם עתיד חי",
        historyDesc:
          "שדה התעופה לנסדאון נחנך בשנת 1926 כשדה התעופה הראשון של יאנגסטאון. כיום Bronson Family Farm מחברת מחדש אדמה, מזון, משפחות, מגדלים והזדמנויות באותו מקום היסטורי.",
        connectTitle: "היו חלק ממה שצומח",
        connectDesc:
          "מזון טרי. הזדמנות. התחדשות קהילתית. מורשת בתנועה.",
        footerLine1: "אתר היסטורי לנסדאון • יאנגסטאון, אוהיו",
        footerLine2: "www.bronsonfamilyfarm.com",
        liveLang: "שפה פעילה",
        pathwayTag: "מסלולי המערכת",
        happeningTag: "תנופה על הקרקע",
        historyTag: "קרקע היסטורית",
        connectTag: "הצטרפו",
        journeyTag: "מסע חווייתי",
        journeyTitle: "כל מסלול מוביל למשהו משמעותי",
        journeyDesc:
          "כל תפקיד במערכת פותח מטרה, ערך וצעד הבא.",
      },
    };

    return translations[lang] || translations.EN;
  }, [lang]);

  const images = {
    hero: "/GrowArea.jpg",
    guest: "/GrowArea2.jpg",
    customer: "/SAM_0225.JPG",
    marketplace: "/SAM_0249.JPG",
    grower: "/SAM_0238.JPG",
    youth: "/SAM_0222.JPG",
    partners: "/SAM_0223.JPG",
    production: "/SAM_0226.JPG",
    buyLocal: "/SAM_0229.JPG",
    events: "/SAM_0255.JPG",
    community: "/SAM_0257.JPG",
    footer: "/SAM_0249.JPG",
  };

  const pathways: Pathway[] = [
    {
      title: "Guest",
      subtitle: "Discover the Story",
      desc: "Explore the land, history, purpose, and future of Bronson Family Farm.",
      img: images.guest,
      btn: "Enter as Guest",
      target: "journey-guest",
    },
    {
      title: "Customer",
      subtitle: "Eat Fresh. Live Better.",
      desc: "Access seasonal produce, healthy choices, events, and repeat buying opportunities.",
      img: images.customer,
      btn: "Shop Fresh",
      target: "journey-customer",
    },
    {
      title: "Marketplace",
      subtitle: "Support Local Commerce",
      desc: "Buy from Bronson Family Farm and regional growers through a modern marketplace.",
      img: images.marketplace,
      btn: "Enter Marketplace",
      target: "journey-marketplace",
    },
    {
      title: "Grower",
      subtitle: "Grow With Us",
      desc: "Connect producers to market access, collaboration, and opportunity.",
      img: images.grower,
      btn: "Become a Grower",
      target: "journey-grower",
    },
    {
      title: "Youth Workforce",
      subtitle: "Build Skills for the Future",
      desc: "Hands-on learning in agriculture, logistics, leadership, and entrepreneurship.",
      img: images.youth,
      btn: "Join Program",
      target: "journey-youth",
    },
    {
      title: "Partners",
      subtitle: "Create Community Impact",
      desc: "Align sponsorship, education, and mission-driven collaboration.",
      img: images.partners,
      btn: "Partner With Us",
      target: "journey-partners",
    },
  ];

  const proof: ProofCard[] = [
    {
      title: "In Production",
      desc: "Seedlings, produce, regenerative growing systems, seasonal expansion.",
      img: images.production,
      btn: "View What’s Growing",
    },
    {
      title: "Buy Local",
      desc: "Shop fresh food and support local growers through the marketplace.",
      img: images.buyLocal,
      btn: "Enter Marketplace",
    },
    {
      title: "Upcoming Events",
      desc: "Tours, workshops, Growers Supply Market, and family experiences on the land.",
      img: images.events,
      btn: "View Events",
    },
    {
      title: "Growing Together",
      desc: "Education, sponsors, civic collaboration, workforce pathways, and partnerships.",
      img: images.community,
      btn: "See Partners",
    },
  ];

  const actions = [
    "Visit the Farm",
    "Shop Fresh",
    "Grow With Us",
    "Partner With Us",
    "Apply Today",
  ];

  const partnerCards = [
    { name: "City of Youngstown", sub: "Community Alignment" },
    { name: "OSU Extension", sub: "Agriculture & Education" },
    { name: "Flying High Inc.", sub: "Workforce Pathways" },
    { name: "Julilee Gardens Inc.", sub: "Community Growing Partner" },
    { name: "United Way", sub: "Community Impact" },
    { name: "Regional Partners", sub: "Collaboration & Support" },
  ];

  const journeyCards: JourneyCard[] = [
    {
      title: "Guest Pathway",
      kicker: "Experience the vision",
      summary:
        "See the story of the land, understand the purpose, and connect with the meaning behind the farm.",
      points: [
        "Historic Lansdowne Airport legacy",
        "Why regenerative agriculture matters here",
        "A living story of place, renewal, and belonging",
      ],
      cta: "See the history",
      image: images.guest,
      action: "history",
    },
    {
      title: "Customer Pathway",
      kicker: "Choose fresh food and repeat value",
      summary:
        "Discover produce, healthy choices, and a market experience designed to bring people back again and again.",
      points: [
        "Seasonal produce and fresh offerings",
        "Healthy food access and local buying",
        "A welcoming farm-to-customer experience",
      ],
      cta: "See what’s happening now",
      image: images.customer,
      action: "happening",
    },
    {
      title: "Marketplace Pathway",
      kicker: "Convert interest into purchasing power",
      summary:
        "The marketplace creates a bridge between community demand, farm sales, and local economic sustainability.",
      points: [
        "Direct shopping through GrownBy",
        "Visibility for Bronson Family Farm",
        "A pathway toward regional grower participation",
      ],
      cta: "Open marketplace",
      image: images.marketplace,
      action: "marketplace",
    },
    {
      title: "Grower Pathway",
      kicker: "Connect producers to opportunity",
      summary:
        "Growers can connect with visibility, training, participation, and long-term market access through the ecosystem.",
      points: [
        "Market presence and local selling pathways",
        "Collaboration and ecosystem participation",
        "A stronger regional grower network",
      ],
      cta: "Connect with the ecosystem",
      image: images.grower,
      action: "connect",
    },
    {
      title: "Youth Workforce Pathway",
      kicker: "Build skills and future readiness",
      summary:
        "This pathway demonstrates how young people can grow through agriculture, logistics, responsibility, and leadership.",
      points: [
        "Hands-on exposure to real work",
        "Agriculture, teamwork, and responsibility",
        "A future-facing local workforce vision",
      ],
      cta: "Get involved",
      image: images.youth,
      action: "connect",
    },
    {
      title: "Partners Pathway",
      kicker: "Align resources for community benefit",
      summary:
        "Partners help scale land use, food access, education, workforce development, and long-term community impact.",
      points: [
        "Schools, sponsors, institutions, and civic alignment",
        "Shared benefit through practical collaboration",
        "A stronger future through coordinated support",
      ],
      cta: "Partner with us",
      image: images.partners,
      action: "connect",
    },
  ];

  const initials = (name: string) =>
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();

  const handleJourneyAction = (action: JourneyCard["action"]) => {
    if (action === "marketplace") openMarketplace();
    if (action === "history") goTo("history");
    if (action === "happening") goTo("happening-now");
    if (action === "connect") goTo("connect");
  };

  const handleProofClick = (title: string) => {
    if (title === "Buy Local") openMarketplace();
    else if (title === "Upcoming Events") goTo("connect");
    else if (title === "Growing Together") goTo("connect");
    else goTo("happening-now");
  };

  const handleActionClick = (btn: string) => {
    if (btn === "Shop Fresh") openMarketplace();
    else if (btn === "Visit the Farm") goTo("history");
    else goTo("connect");
  };

  return (
    <div
      className="min-h-screen bg-[#f7f4ec] text-[#1f2d1f] antialiased"
      dir={lang === "HE" ? "rtl" : "ltr"}
    >
      <header className="sticky top-0 z-50 border-b border-[#d9ddcf] bg-[rgba(250,248,242,0.94)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div>
            <h1 className="text-xl font-semibold tracking-[0.02em] md:text-2xl">
              Bronson Family Farm
            </h1>
            <p className="mt-1 hidden text-xs uppercase tracking-[0.22em] text-[#577053] md:block">
              Regenerative Farm Ecosystem
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {["EN", "ES", "TL", "FR", "HE"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition duration-200 ${
                  lang === l
                    ? "border border-[#244b2d] bg-[#244b2d] text-white shadow-sm"
                    : "border border-[#cfd6c4] bg-white text-[#244b2d] hover:border-[#244b2d] hover:bg-[#f0f4ea]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section
        id="hero"
        className="relative flex min-h-[90vh] items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${images.hero}')` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,22,13,0.78)_0%,rgba(12,22,13,0.58)_42%,rgba(12,22,13,0.34)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f7f4ec] to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-white/90 shadow-sm backdrop-blur-sm md:text-xs">
              {copy.siteTag}
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.06] text-white md:text-6xl md:leading-[1.02]">
              {copy.heroTitle}
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-2xl md:leading-9">
              {copy.heroDesc}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => goTo("pathways")}
                className="rounded-2xl bg-[#2e6a3b] px-7 py-3.5 text-sm font-semibold tracking-[0.03em] text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#245730]"
              >
                {copy.enterBtn}
              </button>

              <button
                onClick={() => goTo("pathways")}
                className="rounded-2xl border border-white/70 bg-white/8 px-7 py-3.5 text-sm font-semibold tracking-[0.03em] text-white backdrop-blur-sm transition hover:bg-white hover:text-[#1f2d1f]"
              >
                {copy.exploreBtn}
              </button>
            </div>

            <div className="mt-8 inline-flex rounded-full border border-white/20 bg-black/15 px-4 py-2 text-xs tracking-[0.14em] text-white/80 backdrop-blur-sm">
              {copy.liveLang}: {languageNames[lang]}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e1e4d7] bg-[#eef2e7]">
        <div className="mx-auto max-w-7xl px-6 py-5 md:px-10">
          <p className="text-center text-sm font-medium uppercase tracking-[0.16em] text-[#466146] md:text-[15px]">
            {copy.trustLine}
          </p>
        </div>
      </section>

      <section className="border-b border-[#e1e4d7] bg-[#f8f7f1]">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-12">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#6a7d67]">
              {copy.alignmentTag}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-[#1f2d1f] md:text-3xl">
              {copy.alignmentTitle}
            </h3>
            <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-[#5a6457] md:text-base">
              {copy.alignmentDesc}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {partnerCards.map((item) => (
              <div
                key={item.name}
                className="group rounded-[1.35rem] border border-[#dde4d8] bg-white px-5 py-6 text-center shadow-[0_8px_24px_rgba(22,35,20,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(22,35,20,0.08)]"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#d8e0d2] bg-[#f2f5ee] text-[#2d5935] shadow-inner">
                  <span className="text-lg font-semibold tracking-[0.08em]">
                    {initials(item.name)}
                  </span>
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#244b2d]">
                  {item.name}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#647061]">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e2e6da] bg-[#eef2e7]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-5 text-center md:grid-cols-4 md:px-10">
          {copy.resultsRibbon.map((item) => (
            <div
              key={item}
              className="text-sm font-semibold uppercase tracking-[0.14em] text-[#466146]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="pathways" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#5d7f59]">
            {copy.pathwayTag}
          </p>
          <h3 className="text-3xl font-semibold tracking-tight text-[#1f2d1f] md:text-5xl">
            {copy.pathwaysTitle}
          </h3>
          <p className="mx-auto mt-5 text-lg leading-8 text-[#556255]">
            {copy.pathwaysDesc}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pathways.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[1.5rem] border border-[#e2e6d9] bg-white shadow-[0_10px_30px_rgba(22,35,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(22,35,20,0.12)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="p-6 md:p-7">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6b8b67]">
                  {item.title}
                </p>

                <h4 className="mb-3 text-2xl font-semibold tracking-tight text-[#1f2d1f]">
                  {item.subtitle}
                </h4>

                <p className="mb-6 min-h-[84px] text-[15px] leading-7 text-[#5a6457]">
                  {item.desc}
                </p>

                <button
                  onClick={() => goTo(item.target)}
                  className="w-full rounded-2xl bg-[#245730] py-3.5 text-sm font-semibold tracking-[0.03em] text-white shadow-sm transition hover:bg-[#1b4424]"
                >
                  {item.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="journeys" className="bg-[#f3f1e8] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#5d7f59]">
              {copy.journeyTag}
            </p>
            <h3 className="text-3xl font-semibold tracking-tight text-[#1f2d1f] md:text-5xl">
              {copy.journeyTitle}
            </h3>
            <p className="mx-auto mt-5 text-lg leading-8 text-[#556255]">
              {copy.journeyDesc}
            </p>
          </div>

          <div className="space-y-8">
            {journeyCards.map((card, index) => (
              <section
                id={`journey-${card.title.toLowerCase().split(" ")[0]}`}
                key={card.title}
                className="overflow-hidden rounded-[1.8rem] border border-[#e2e3d7] bg-white shadow-[0_12px_34px_rgba(22,35,20,0.06)]"
              >
                <div className={`grid items-stretch gap-0 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="min-h-[320px]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex items-center p-8 md:p-10">
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#688465]">
                        {card.kicker}
                      </p>
                      <h4 className="text-3xl font-semibold tracking-tight text-[#1f2d1f]">
                        {card.title}
                      </h4>
                      <p className="mt-5 text-[16px] leading-8 text-[#556255]">
                        {card.summary}
                      </p>

                      <div className="mt-6 space-y-3">
                        {card.points.map((point) => (
                          <div key={point} className="flex items-start gap-3">
                            <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#2e6a3b]" />
                            <p className="text-[15px] leading-7 text-[#556255]">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <button
                          onClick={() => handleJourneyAction(card.action)}
                          className="rounded-2xl bg-[#245730] px-6 py-3.5 text-sm font-semibold tracking-[0.03em] text-white transition hover:bg-[#1b4424]"
                        >
                          {card.cta}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="happening-now" className="bg-[#e7efe4] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#5d7f59]">
              {copy.happeningTag}
            </p>
            <h3 className="text-3xl font-semibold tracking-tight text-[#1f2d1f] md:text-5xl">
              {copy.happeningTitle}
            </h3>
            <p className="mx-auto mt-5 text-lg leading-8 text-[#556255]">
              {copy.happeningDesc}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {proof.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[1.4rem] border border-[#dfe7da] bg-white shadow-[0_8px_24px_rgba(22,35,20,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(22,35,20,0.1)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5 md:p-6">
                  <h4 className="mb-2 text-xl font-semibold tracking-tight text-[#1f2d1f]">
                    {item.title}
                  </h4>
                  <p className="mb-5 min-h-[96px] text-[15px] leading-7 text-[#5a6457]">
                    {item.desc}
                  </p>

                  <button
                    onClick={() => handleProofClick(item.title)}
                    className="w-full rounded-2xl border border-[#245730] py-3 text-sm font-semibold tracking-[0.03em] text-[#245730] transition hover:bg-[#245730] hover:text-white"
                  >
                    {item.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="mx-auto max-w-5xl px-6 py-20 text-center md:px-10 md:py-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#5d7f59]">
          {copy.historyTag}
        </p>

        <h3 className="text-3xl font-semibold tracking-tight text-[#1f2d1f] md:text-5xl">
          {copy.historyTitle}
        </h3>

        <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-[#556255] md:text-xl">
          {copy.historyDesc}
        </p>
      </section>

      <section
        id="connect"
        className="relative overflow-hidden bg-cover bg-center px-6 py-20 text-white md:px-10 md:py-24"
        style={{ backgroundImage: `url('${images.footer}')` }}
      >
        <div className="absolute inset-0 bg-[rgba(17,41,22,0.86)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
            {copy.connectTag}
          </p>

          <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {copy.connectTitle}
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/85">
            {copy.connectDesc}
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {actions.map((btn) => (
              <button
                key={btn}
                onClick={() => handleActionClick(btn)}
                className="rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold tracking-[0.03em] text-[#18311d] shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:bg-[#f0f2ea]"
              >
                {btn}
              </button>
            ))}
          </div>

          <div className="mt-12 border-t border-white/15 pt-8">
            <p className="text-sm uppercase tracking-[0.18em] text-white/70">
              {copy.footerLine1}
            </p>
            <p className="mt-3 text-base text-white/78">{copy.footerLine2}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
