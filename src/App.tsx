import { useEffect, useMemo, useState } from "react";

type LangKey =
  | "English"
  | "Español"
  | "Tagalog"
  | "Italiano"
  | "עברית"
  | "Français";

type Mode = "home" | "overview" | "pathway" | "thanks";

type PathwayKey =
  | "place"
  | "ecosystem"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners"
  | "value"
  | "future";

type JourneyStep = {
  eyebrow: Record<LangKey, string>;
  title: Record<LangKey, string>;
  body: Record<LangKey, string>;
  bullets: Record<LangKey, string[]>;
  image: string;
  imageAlt: string;
};

const LANGS: LangKey[] = [
  "English",
  "Español",
  "Tagalog",
  "Italiano",
  "עברית",
  "Français",
];

const t = {
  English: {
    demo: "BRONSON FAMILY FARM DEMO",
    title: "Connected Food Ecosystem Experience",
    subtitle:
      "A guided, place-based model connecting land, growers, families, youth, markets, partners, and community wellness.",
    start: "Start",
    guided: "Guided Overview",
    pause: "Pause",
    resume: "Resume",
    back: "Back",
    next: "Next",
    home: "Start Over",
    explore: "Explore Pathway",
    choose: "Choose a pathway",
    feedback: "Share Feedback",
    contact: "Contact Bronson Family Farm",
    phone: "330-275-1604",
    email: "cburgess@bronsonfamilyfarm.com",
  },
  Español: {
    demo: "DEMOSTRACIÓN DE BRONSON FAMILY FARM",
    title: "Experiencia de Ecosistema Alimentario Conectado",
    subtitle:
      "Un modelo guiado basado en el lugar que conecta tierra, agricultores, familias, jóvenes, mercados, socios y bienestar comunitario.",
    start: "Comenzar",
    guided: "Vista guiada",
    pause: "Pausar",
    resume: "Continuar",
    back: "Atrás",
    next: "Siguiente",
    home: "Inicio",
    explore: "Explorar ruta",
    choose: "Elija una ruta",
    feedback: "Compartir comentarios",
    contact: "Contactar a Bronson Family Farm",
    phone: "330-275-1604",
    email: "cburgess@bronsonfamilyfarm.com",
  },
  Tagalog: {
    demo: "BRONSON FAMILY FARM DEMO",
    title: "Karanasan sa Konektadong Food Ecosystem",
    subtitle:
      "Isang gabay na modelong nakabatay sa lugar na nag-uugnay sa lupa, growers, pamilya, kabataan, merkado, partners, at kalusugan ng komunidad.",
    start: "Simulan",
    guided: "Gabay na Overview",
    pause: "I-pause",
    resume: "Ipagpatuloy",
    back: "Bumalik",
    next: "Susunod",
    home: "Simula",
    explore: "Tuklasin ang Pathway",
    choose: "Pumili ng pathway",
    feedback: "Magbigay ng Feedback",
    contact: "Makipag-ugnayan",
    phone: "330-275-1604",
    email: "cburgess@bronsonfamilyfarm.com",
  },
  Italiano: {
    demo: "DEMO BRONSON FAMILY FARM",
    title: "Esperienza di Ecosistema Alimentare Connesso",
    subtitle:
      "Un modello guidato e radicato nel luogo che collega terra, coltivatori, famiglie, giovani, mercato, partner e benessere comunitario.",
    start: "Inizia",
    guided: "Panoramica guidata",
    pause: "Pausa",
    resume: "Riprendi",
    back: "Indietro",
    next: "Avanti",
    home: "Inizio",
    explore: "Esplora percorso",
    choose: "Scegli un percorso",
    feedback: "Condividi feedback",
    contact: "Contatta Bronson Family Farm",
    phone: "330-275-1604",
    email: "cburgess@bronsonfamilyfarm.com",
  },
  עברית: {
    demo: "הדגמת BRONSON FAMILY FARM",
    title: "חוויית מערכת מזון מחוברת",
    subtitle:
      "מודל מודרך ומבוסס מקום המחבר אדמה, מגדלים, משפחות, נוער, שוק, שותפים ובריאות קהילתית.",
    start: "התחלה",
    guided: "סיור מודרך",
    pause: "עצור",
    resume: "המשך",
    back: "חזרה",
    next: "הבא",
    home: "להתחלה",
    explore: "חקור מסלול",
    choose: "בחר מסלול",
    feedback: "שלח משוב",
    contact: "צור קשר",
    phone: "330-275-1604",
    email: "cburgess@bronsonfamilyfarm.com",
  },
  Français: {
    demo: "DÉMO BRONSON FAMILY FARM",
    title: "Expérience d’Écosystème Alimentaire Connecté",
    subtitle:
      "Un modèle guidé et ancré dans le lieu qui relie la terre, les producteurs, les familles, les jeunes, le marché, les partenaires et le bien-être communautaire.",
    start: "Commencer",
    guided: "Vue guidée",
    pause: "Pause",
    resume: "Reprendre",
    back: "Retour",
    next: "Suivant",
    home: "Accueil",
    explore: "Explorer le parcours",
    choose: "Choisir un parcours",
    feedback: "Partager un avis",
    contact: "Contacter Bronson Family Farm",
    phone: "330-275-1604",
    email: "cburgess@bronsonfamilyfarm.com",
  },
};

const img = {
  entrance: "/GrowArea.jpg",
  place: "/SAM_0220.JPG",
  ecosystem: "/ConnectFoodEcosystem_withimages.jpeg",
  guest: "/SAM_0221.JPG",
  customer: "/SAM_0222.JPG",
  marketplace: "/Marketplace.png",
  grower: "/SAM_0223.JPG",
  youth: "/SAM_0225.JPG",
  partners: "/SAM_0226.JPG",
  value: "/SAM_0229.JPG",
  future: "/GrowArea2.jpg",
};

const overview: JourneyStep[] = [
  {
    eyebrow: {
      English: "Welcome",
      Español: "Bienvenida",
      Tagalog: "Maligayang pagdating",
      Italiano: "Benvenuto",
      עברית: "ברוכים הבאים",
      Français: "Bienvenue",
    },
    title: {
      English: "Step into the Farm. Experience the wonders of life.",
      Español: "Entre a la granja. Experimente las maravillas de la vida.",
      Tagalog: "Pumasok sa sakahan. Damhin ang ganda ng buhay.",
      Italiano: "Entra nella fattoria. Vivi le meraviglie della vita.",
      עברית: "היכנסו לחווה. חוו את פלאי החיים.",
      Français: "Entrez dans la ferme. Découvrez les merveilles de la vie.",
    },
    body: {
      English:
        "Bronson Family Farm is more than a growing space. It is a community-centered destination where people learn, grow, buy, serve, build skills, and strengthen local food access.",
      Español:
        "Bronson Family Farm es más que un espacio de cultivo. Es un destino comunitario para aprender, cultivar, comprar, servir, desarrollar habilidades y fortalecer el acceso a alimentos locales.",
      Tagalog:
        "Ang Bronson Family Farm ay higit pa sa taniman. Ito ay community destination para matuto, magtanim, bumili, maglingkod, bumuo ng skills, at palakasin ang food access.",
      Italiano:
        "Bronson Family Farm è più di uno spazio agricolo. È una destinazione comunitaria per imparare, coltivare, acquistare, servire e rafforzare l’accesso al cibo locale.",
      עברית:
        "Bronson Family Farm היא יותר משטח גידול. זהו יעד קהילתי ללמידה, גידול, קנייה, שירות, פיתוח מיומנויות וחיזוק הגישה למזון מקומי.",
      Français:
        "Bronson Family Farm est plus qu’un espace de culture. C’est un lieu communautaire pour apprendre, cultiver, acheter, servir, développer des compétences et renforcer l’accès alimentaire local.",
    },
    bullets: {
      English: ["Land", "Food", "Learning", "Youth", "Marketplace", "Community"],
      Español: ["Tierra", "Alimentos", "Aprendizaje", "Jóvenes", "Mercado", "Comunidad"],
      Tagalog: ["Lupa", "Pagkain", "Pagkatuto", "Kabataan", "Merkado", "Komunidad"],
      Italiano: ["Terra", "Cibo", "Apprendimento", "Giovani", "Mercato", "Comunità"],
      עברית: ["אדמה", "מזון", "למידה", "נוער", "שוק", "קהילה"],
      Français: ["Terre", "Alimentation", "Apprentissage", "Jeunes", "Marché", "Communauté"],
    },
    image: img.entrance,
    imageAlt: "Bronson Family Farm grow area",
  },
  {
    eyebrow: {
      English: "What is an ecosystem?",
      Español: "¿Qué es un ecosistema?",
      Tagalog: "Ano ang ecosystem?",
      Italiano: "Che cos’è un ecosistema?",
      עברית: "מהי מערכת אקולוגית?",
      Français: "Qu’est-ce qu’un écosystème ?",
    },
    title: {
      English: "Each pathway has a role, a benefit, and a next decision.",
      Español: "Cada ruta tiene un papel, un beneficio y una próxima decisión.",
      Tagalog: "Bawat pathway ay may papel, benepisyo, at susunod na desisyon.",
      Italiano: "Ogni percorso ha un ruolo, un beneficio e una decisione successiva.",
      עברית: "לכל מסלול יש תפקיד, תועלת והחלטה הבאה.",
      Français: "Chaque parcours a un rôle, un bénéfice et une prochaine décision.",
    },
    body: {
      English:
        "The ecosystem works because each person can enter from a different need: food, family, learning, growing, selling, volunteering, partnering, or investing.",
      Español:
        "El ecosistema funciona porque cada persona puede entrar desde una necesidad distinta: comida, familia, aprendizaje, cultivo, venta, voluntariado, alianza o inversión.",
      Tagalog:
        "Gumagana ang ecosystem dahil maaaring pumasok ang bawat tao mula sa iba’t ibang pangangailangan: pagkain, pamilya, pagkatuto, pagtatanim, pagbebenta, volunteering, partnership, o investment.",
      Italiano:
        "L’ecosistema funziona perché ogni persona può entrare da un bisogno diverso: cibo, famiglia, apprendimento, coltivazione, vendita, volontariato, partnership o investimento.",
      עברית:
        "המערכת פועלת כי כל אדם יכול להיכנס מנקודת צורך אחרת: מזון, משפחה, למידה, גידול, מכירה, התנדבות, שותפות או השקעה.",
      Français:
        "L’écosystème fonctionne parce que chacun peut y entrer par un besoin différent : nourriture, famille, apprentissage, culture, vente, bénévolat, partenariat ou investissement.",
    },
    bullets: {
      English: ["Understand the need", "Experience the model", "Choose a next step", "Share with others"],
      Español: ["Entender la necesidad", "Vivir el modelo", "Elegir el próximo paso", "Compartir"],
      Tagalog: ["Unawain ang pangangailangan", "Maramdaman ang modelo", "Pumili ng next step", "Ibahagi"],
      Italiano: ["Capire il bisogno", "Vivere il modello", "Scegliere il passo successivo", "Condividere"],
      עברית: ["להבין את הצורך", "לחוות את המודל", "לבחור צעד הבא", "לשתף"],
      Français: ["Comprendre le besoin", "Vivre le modèle", "Choisir une suite", "Partager"],
    },
    image: img.ecosystem,
    imageAlt: "Connected Food Ecosystem graphic",
  },
];

const labels: Record<PathwayKey, Record<LangKey, string>> = {
  place: {
    English: "Explore the Farm",
    Español: "Explorar la granja",
    Tagalog: "Tuklasin ang Sakahan",
    Italiano: "Esplora la fattoria",
    עברית: "חקור את החווה",
    Français: "Explorer la ferme",
  },
  ecosystem: {
    English: "Connected Ecosystem",
    Español: "Ecosistema conectado",
    Tagalog: "Konektadong Ecosystem",
    Italiano: "Ecosistema connesso",
    עברית: "מערכת מחוברת",
    Français: "Écosystème connecté",
  },
  guest: {
    English: "Guest Pathway",
    Español: "Ruta del visitante",
    Tagalog: "Guest Pathway",
    Italiano: "Percorso ospite",
    עברית: "מסלול אורח",
    Français: "Parcours invité",
  },
  customer: {
    English: "Customer Pathway",
    Español: "Ruta del cliente",
    Tagalog: "Customer Pathway",
    Italiano: "Percorso cliente",
    עברית: "מסלול לקוח",
    Français: "Parcours client",
  },
  marketplace: {
    English: "Marketplace",
    Español: "Mercado",
    Tagalog: "Marketplace",
    Italiano: "Mercato",
    עברית: "שוק",
    Français: "Marché",
  },
  grower: {
    English: "Grower Pathway",
    Español: "Ruta del agricultor",
    Tagalog: "Grower Pathway",
    Italiano: "Percorso coltivatore",
    עברית: "מסלול מגדל",
    Français: "Parcours producteur",
  },
  youth: {
    English: "Youth Workforce",
    Español: "Fuerza laboral juvenil",
    Tagalog: "Youth Workforce",
    Italiano: "Forza lavoro giovanile",
    עברית: "כוח עבודה נוער",
    Français: "Main-d’œuvre jeunesse",
  },
  partners: {
    English: "Partner Pathway",
    Español: "Ruta de socios",
    Tagalog: "Partner Pathway",
    Italiano: "Percorso partner",
    עברית: "מסלול שותפים",
    Français: "Parcours partenaire",
  },
  value: {
    English: "Value-Added Pathway",
    Español: "Valor agregado",
    Tagalog: "Value-Added Pathway",
    Italiano: "Valore aggiunto",
    עברית: "ערך מוסף",
    Français: "Valeur ajoutée",
  },
  future: {
    English: "Future Vision",
    Español: "Visión futura",
    Tagalog: "Hinaharap na Vision",
    Italiano: "Visione futura",
    עברית: "חזון עתידי",
    Français: "Vision future",
  },
};

function makeStep(
  key: PathwayKey,
  eyebrow: string,
  title: string,
  body: string,
  bullets: string[],
  image: string
): JourneyStep {
  return {
    eyebrow: {
      English: eyebrow,
      Español: eyebrow,
      Tagalog: eyebrow,
      Italiano: eyebrow,
      עברית: eyebrow,
      Français: eyebrow,
    },
    title: {
      English: title,
      Español: title,
      Tagalog: title,
      Italiano: title,
      עברית: title,
      Français: title,
    },
    body: {
      English: body,
      Español: body,
      Tagalog: body,
      Italiano: body,
      עברית: body,
      Français: body,
    },
    bullets: {
      English: bullets,
      Español: bullets,
      Tagalog: bullets,
      Italiano: bullets,
      עברית: bullets,
      Français: bullets,
    },
    image,
    imageAlt: labels[key].English,
  };
}

const journeys: Record<PathwayKey, JourneyStep[]> = {
  place: [
    makeStep(
      "place",
      "Place-Based Experience",
      "The farm begins with the land, the airport, and the story of Youngstown’s East Side.",
      "Visitors first understand where they are: a working farm model at the Historic Lansdowne Airport, designed to transform underused land into food access, learning, and opportunity.",
      ["Historic Lansdowne Airport", "Outdoor growing area", "Off-grid learning", "Community destination"],
      img.place
    ),
    makeStep(
      "place",
      "Need Being Met",
      "People need a real place where food, learning, and community come together.",
      "The farm answers the need for local food access, practical growing knowledge, healthy activity, youth engagement, and a visible community asset.",
      ["Food access", "Health and nutrition", "Land stewardship", "Community pride"],
      img.entrance
    ),
    makeStep(
      "place",
      "Decision Point",
      "Do I want to visit, learn, volunteer, grow, or help build this destination?",
      "The farm experience should move people from curiosity to action. Every visitor leaves with a clearer next step.",
      ["Register for an event", "Join a pathway", "Share the farm story", "Give feedback"],
      img.place
    ),
  ],
  ecosystem: [
    makeStep(
      "ecosystem",
      "Connected Food Ecosystem",
      "This is not one program. It is a living system.",
      "Bronson Family Farm connects guests, customers, growers, youth, partners, value-added producers, and investors so each role strengthens the others.",
      ["Each role matters", "Each pathway connects", "Each decision supports the whole system"],
      img.ecosystem
    ),
    makeStep(
      "ecosystem",
      "How It Works",
      "The model turns participation into shared community benefit.",
      "A guest may become a customer. A customer may become a grower. A youth worker may become a farm leader. A partner may become an investor. The ecosystem creates movement.",
      ["Enter", "Learn", "Participate", "Decide", "Share"],
      img.ecosystem
    ),
    makeStep(
      "ecosystem",
      "Final Destination",
      "A stronger regional food system built with the community, not for the community.",
      "The goal is food access, economic participation, youth development, health education, and community ownership of the future.",
      ["Local food", "Local skills", "Local market", "Local leadership"],
      img.ecosystem
    ),
  ],
  guest: [
    makeStep(
      "guest",
      "Guest Experience",
      "The guest pathway helps people understand the vision, story, and purpose.",
      "Guests are welcomed into the farm as learners and witnesses. They see how land, food, family, and community can become one connected experience.",
      ["Welcome", "Orientation", "Story", "Farm walk", "Reflection"],
      img.guest
    ),
    makeStep(
      "guest",
      "Benefit",
      "Guests leave with understanding, not confusion.",
      "They learn why the farm exists, who it serves, how the ecosystem works, and how they can stay connected.",
      ["Understand the mission", "See the land", "Meet the model", "Choose a next step"],
      img.guest
    ),
    makeStep(
      "guest",
      "Decision",
      "Do I want to return, volunteer, donate, register, or invite someone else?",
      "The guest pathway ends with action: share the story, give feedback, register for the next experience, or connect with the farm team.",
      ["Share", "Register", "Volunteer", "Contact us"],
      img.guest
    ),
  ],
  customer: [
    makeStep(
      "customer",
      "Customer Experience",
      "The customer pathway connects fresh food to repeat healthy choices.",
      "Customers learn what is available, why it matters nutritionally, and how purchasing supports local growers and the farm ecosystem.",
      ["Fresh food", "Nutrition", "Online ordering", "Pickup", "Repeat purchases"],
      img.customer
    ),
    makeStep(
      "customer",
      "Need Being Met",
      "Families need convenient access to fresh, local, affordable food.",
      "The customer journey supports food access while teaching people how local produce connects to health, cooking, gardening, and community sustainability.",
      ["Better food access", "Healthy choices", "Local purchasing", "Community reinvestment"],
      img.customer
    ),
    makeStep(
      "customer",
      "Decision",
      "Do I want to buy, preorder, return, or invite another family?",
      "The customer pathway leads to the marketplace, repeat purchasing, event registration, and sharing the farm with others.",
      ["Shop the market", "Preorder seedlings", "Return for pickup", "Share with family"],
      img.marketplace
    ),
  ],
  marketplace: [
    makeStep(
      "marketplace",
      "Marketplace Experience",
      "The marketplace converts interest into purchasing power and sustainability.",
      "This is where produce, seedlings, tools, demonstrations, and grower knowledge become part of a practical community food economy.",
      ["Produce", "Seedlings", "Grower tools", "Demonstrations", "Local sales"],
      img.marketplace
    ),
    makeStep(
      "marketplace",
      "Need Being Met",
      "Growers and families need a place to exchange food, supplies, knowledge, and opportunity.",
      "The marketplace supports growers, educates customers, and helps the farm become financially sustainable.",
      ["Buy", "Sell", "Learn", "Connect", "Return"],
      img.marketplace
    ),
    makeStep(
      "marketplace",
      "Decision",
      "Do I want to shop, sell, demonstrate, sponsor, or help grow the market?",
      "The marketplace pathway ends with a clear action: become a customer, grower, vendor, sponsor, or returning participant.",
      ["Customer", "Vendor", "Sponsor", "Grower", "Partner"],
      img.marketplace
    ),
  ],
  grower: [
    makeStep(
      "grower",
      "Grower Pathway",
      "The grower pathway connects producers to knowledge, market participation, and shared infrastructure.",
      "A grower enters with a question: Can I grow better, sell better, learn more, and be part of something larger than my own plot?",
      ["Training", "Soil", "Seeds", "Tools", "Market access"],
      img.grower
    ),
    makeStep(
      "grower",
      "Need Being Met",
      "Small growers need support, visibility, technical help, and a market.",
      "Bronson Family Farm helps growers connect to demonstrations, supplies, learning, peer support, and sales opportunities.",
      ["Learn skills", "Access supplies", "Meet customers", "Build capacity"],
      img.grower
    ),
    makeStep(
      "grower",
      "Decision",
      "Do I want to become a grower in this ecosystem?",
      "The grower pathway ends with an invitation to participate, sell, demonstrate, collaborate, or receive technical support.",
      ["Join the grower network", "Attend training", "Sell through the market", "Share feedback"],
      img.grower
    ),
  ],
  youth: [
    makeStep(
      "youth",
      "Youth Workforce",
      "The youth pathway builds skills, responsibility, and future readiness.",
      "Youth ages 14–18 experience work through farming, teamwork, safety, communication, attendance, leadership, and daily responsibility.",
      ["June 8–August 28, 2026", "9 AM–2 PM", "Farm work", "Life skills", "Supervision"],
      img.youth
    ),
    makeStep(
      "youth",
      "Experience",
      "This is more than a summer job. We are building our future.",
      "Youth learn through real tasks: planting, watering, harvesting, setup, customer service, observation, cleanup, and teamwork.",
      ["No PPE, no work", "Daily expectations", "Skill badges", "Parent connection", "Supervisor feedback"],
      img.youth
    ),
    makeStep(
      "youth",
      "Decision",
      "Can this young person grow into responsibility, leadership, and community pride?",
      "The youth pathway ends with progress tracking, parent connection, supervisor observation, and a stronger vision for the young person’s future.",
      ["Show up", "Learn", "Serve", "Lead", "Grow"],
      img.youth
    ),
  ],
  partners: [
    makeStep(
      "partners",
      "Partner Pathway",
      "Partners align resources and collaboration for community benefit.",
      "Partners help bring supplies, education, demonstrations, volunteers, funding, media, health services, and technical expertise into the ecosystem.",
      ["Supplies", "Education", "Funding", "Volunteers", "Health and wellness"],
      img.partners
    ),
    makeStep(
      "partners",
      "Need Being Met",
      "Community work needs shared responsibility, not isolated effort.",
      "Partners make the ecosystem stronger by contributing what they do best while connecting to a visible, place-based community model.",
      ["Show up", "Support", "Demonstrate", "Sponsor", "Collaborate"],
      img.partners
    ),
    makeStep(
      "partners",
      "Decision",
      "Do we want to support, sponsor, teach, fund, or build with Bronson Family Farm?",
      "The partner pathway ends with a specific ask, a clear role, and a next meeting or commitment.",
      ["Choose a role", "Confirm support", "Share resources", "Stay connected"],
      img.partners
    ),
  ],
  value: [
    makeStep(
      "value",
      "Value-Added Pathway",
      "Value-added producers turn harvest into education, products, and enterprise.",
      "This pathway connects food, cooking, preservation, small business, nutrition education, and local entrepreneurship.",
      ["Cooking", "Canning", "Preserving", "Product ideas", "Enterprise"],
      img.value
    ),
    makeStep(
      "value",
      "Need Being Met",
      "Communities need ways to extend the value of food beyond harvest day.",
      "Value-added education helps families reduce waste, create products, learn skills, and build economic opportunity.",
      ["Reduce waste", "Teach food skills", "Create products", "Support enterprise"],
      img.value
    ),
    makeStep(
      "value",
      "Decision",
      "Do I want to learn, produce, teach, sell, or partner?",
      "The pathway ends with a next step into workshops, demonstrations, product development, or marketplace participation.",
      ["Workshop", "Demo", "Product", "Marketplace", "Training"],
      img.value
    ),
  ],
  future: [
    makeStep(
      "future",
      "Future Vision",
      "The future pathway shows what the farm can become with investment.",
      "The vision includes water, solar, storage, security, wash stations, extended growing, workforce infrastructure, and a year-round community destination.",
      ["Water", "Solar", "Storage", "Security", "Training space", "Year-round access"],
      img.future
    ),
    makeStep(
      "future",
      "Need Being Met",
      "The ecosystem needs infrastructure to become sustainable and scalable.",
      "Investment turns the farm from a promising model into a durable regional food, learning, and workforce asset.",
      ["Capital", "Operations", "Infrastructure", "Sustainability"],
      img.future
    ),
    makeStep(
      "future",
      "Decision",
      "Do I want to invest in a community food future?",
      "The future pathway ends with an invitation to fund, advise, partner, sponsor, or help build the next phase.",
      ["Invest", "Sponsor", "Advise", "Fund", "Build"],
      img.future
    ),
  ],
};

const pathwayOrder: PathwayKey[] = [
  "place",
  "ecosystem",
  "guest",
  "customer",
  "marketplace",
  "grower",
  "youth",
  "partners",
  "value",
  "future",
];

function App() {
  const [lang, setLang] = useState<LangKey>("English");
  const [mode, setMode] = useState<Mode>("home");
  const [pathway, setPathway] = useState<PathwayKey>("place");
  const [step, setStep] = useState(0);
  const [guided, setGuided] = useState(false);

  const isRTL = lang === "עברית";

  const activeSteps = useMemo(() => {
    if (mode === "overview") return overview;
    if (mode === "pathway") return journeys[pathway];
    return overview;
  }, [mode, pathway]);

  const current = activeSteps[Math.min(step, activeSteps.length - 1)];

  useEffect(() => {
    if (!guided) return;

    const timer = window.setTimeout(() => {
      if (mode === "overview" && step < overview.length - 1) {
        setStep((s) => s + 1);
        return;
      }

      if (mode === "overview" && step >= overview.length - 1) {
        setMode("pathway");
        setPathway("place");
        setStep(0);
        return;
      }

      if (mode === "pathway") {
        const currentPathIndex = pathwayOrder.indexOf(pathway);

        if (step < journeys[pathway].length - 1) {
          setStep((s) => s + 1);
          return;
        }

        if (currentPathIndex < pathwayOrder.length - 1) {
          setPathway(pathwayOrder[currentPathIndex + 1]);
          setStep(0);
          return;
        }

        setMode("thanks");
        setGuided(false);
      }
    }, 6500);

    return () => window.clearTimeout(timer);
  }, [guided, mode, pathway, step]);

  const startGuided = () => {
    setMode("overview");
    setStep(0);
    setGuided(true);
  };

  const openPathway = (key: PathwayKey) => {
    setMode("pathway");
    setPathway(key);
    setStep(0);
    setGuided(false);
  };

  const goNext = () => {
    if (mode === "home") {
      setMode("overview");
      setStep(0);
      return;
    }

    if (mode === "overview" && step < overview.length - 1) {
      setStep(step + 1);
      return;
    }

    if (mode === "overview") {
      setMode("pathway");
      setPathway("place");
      setStep(0);
      return;
    }

    if (mode === "pathway" && step < journeys[pathway].length - 1) {
      setStep(step + 1);
      return;
    }

    if (mode === "pathway") {
      setMode("thanks");
      setStep(0);
    }
  };

  const goBack = () => {
    if (mode === "overview" && step > 0) {
      setStep(step - 1);
      return;
    }

    if (mode === "pathway" && step > 0) {
      setStep(step - 1);
      return;
    }

    setMode("home");
    setStep(0);
    setGuided(false);
  };

  return (
    <div className="app" dir={isRTL ? "rtl" : "ltr"}>
      <style>{css}</style>

      <header className="topbar">
        <div>
          <div className="demo-label">{t[lang].demo}</div>
          <div className="brand">Bronson Family Farm</div>
        </div>

        <select
          className="lang"
          value={lang}
          onChange={(e) => setLang(e.target.value as LangKey)}
        >
          {LANGS.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </header>

      {mode === "home" && (
        <main className="screen home-screen">
          <section className="hero-card">
            <div className="copy">
              <p className="eyebrow">{t[lang].demo}</p>
              <h1>{t[lang].title}</h1>
              <p className="subtitle">{t[lang].subtitle}</p>

              <div className="home-actions">
                <button onClick={goNext}>{t[lang].start}</button>
                <button className="secondary" onClick={startGuided}>
                  {t[lang].guided}
                </button>
              </div>
            </div>

            <div className="image-panel">
              <img src={img.entrance} alt="Bronson Family Farm" />
            </div>
          </section>

          <section className="pathway-grid">
            {pathwayOrder.map((key) => (
              <button key={key} onClick={() => openPathway(key)}>
                {labels[key][lang]}
              </button>
            ))}
          </section>
        </main>
      )}

      {(mode === "overview" || mode === "pathway") && current && (
        <main className="screen journey-screen">
          <section className="journey-card">
            <div className="journey-copy">
              <p className="eyebrow">{current.eyebrow[lang]}</p>
              <h1>{current.title[lang]}</h1>
              <p className="body">{current.body[lang]}</p>

              <div className="pill-row">
                {current.bullets[lang].map((b) => (
                  <span key={b}>{b}</span>
                ))}
              </div>
            </div>

            <div className="journey-image">
              <img
                src={current.image}
                alt={current.imageAlt}
                onError={(e) => {
                  e.currentTarget.src = img.entrance;
                }}
              />
            </div>
          </section>

          <section className="selector">
            <div className="selector-title">{t[lang].choose}</div>
            <div className="selector-buttons">
              {pathwayOrder.map((key) => (
                <button
                  key={key}
                  className={mode === "pathway" && pathway === key ? "active" : ""}
                  onClick={() => openPathway(key)}
                >
                  {labels[key][lang]}
                </button>
              ))}
            </div>
          </section>
        </main>
      )}

      {mode === "thanks" && (
        <main className="screen thanks-screen">
          <section className="thanks-card">
            <p className="eyebrow">Thank you</p>
            <h1>Help us build the next step.</h1>
            <p>
              Share your feedback, tell us which pathway connected with you,
              and let us know how you want to participate in the Bronson Family
              Farm ecosystem.
            </p>

            <div className="contact-box">
              <strong>{t[lang].contact}</strong>
              <span>{t[lang].phone}</span>
              <span>{t[lang].email}</span>
            </div>

            <div className="home-actions">
              <button onClick={() => setMode("home")}>{t[lang].home}</button>
              <button className="secondary" onClick={startGuided}>
                {t[lang].guided}
              </button>
            </div>
          </section>
        </main>
      )}

      {mode !== "home" && (
        <footer className="controls">
          <button onClick={goBack}>{t[lang].back}</button>
          <button
            className="secondary"
            onClick={() => setGuided((g) => !g)}
          >
            {guided ? t[lang].pause : t[lang].resume}
          </button>
          <button onClick={goNext}>{t[lang].next}</button>
          <button className="ghost" onClick={() => setMode("home")}>
            {t[lang].home}
          </button>
        </footer>
      )}
    </div>
  );
}

const css = `
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  background:
    radial-gradient(circle at top left, rgba(250, 214, 137, 0.35), transparent 32%),
    linear-gradient(135deg, #10251c 0%, #244737 42%, #76623e 100%);
  color: #fff8e8;
}

button, select {
  font-family: inherit;
}

.app {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  padding: 18px 24px 92px;
}

.topbar {
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.demo-label {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  opacity: 0.82;
  font-weight: 700;
}

.brand {
  font-size: 1.1rem;
  font-weight: 800;
}

.lang {
  border: 1px solid rgba(255,255,255,.35);
  background: rgba(255,255,255,.13);
  color: #fff8e8;
  border-radius: 999px;
  padding: 9px 12px;
}

.lang option {
  color: #1f2d22;
}

.screen {
  height: calc(100vh - 168px);
  max-width: 1220px;
  margin: 0 auto;
}

.hero-card,
.journey-card,
.thanks-card {
  background: rgba(255,255,255,.13);
  border: 1px solid rgba(255,255,255,.22);
  box-shadow: 0 24px 70px rgba(0,0,0,.26);
  backdrop-filter: blur(14px);
  border-radius: 34px;
}

.hero-card {
  height: 62%;
  min-height: 390px;
  display: grid;
  grid-template-columns: 1.04fr .96fr;
  gap: 22px;
  padding: 26px;
}

.copy,
.journey-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.eyebrow {
  margin: 0 0 10px;
  color: #ffd98b;
  text-transform: uppercase;
  letter-spacing: .14em;
  font-size: .74rem;
  font-weight: 800;
}

h1 {
  font-family: Georgia, "Times New Roman", serif;
  margin: 0;
  font-size: clamp(2rem, 4vw, 4.4rem);
  line-height: .98;
  letter-spacing: -.045em;
}

.subtitle,
.body,
.thanks-card p {
  font-size: clamp(1rem, 1.45vw, 1.34rem);
  line-height: 1.45;
  max-width: 720px;
  color: rgba(255,248,232,.92);
}

.home-actions,
.controls {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

button {
  border: 0;
  border-radius: 999px;
  background: #ffd98b;
  color: #1e2c22;
  font-weight: 800;
  padding: 12px 18px;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0,0,0,.18);
}

button.secondary {
  background: rgba(255,255,255,.18);
  color: #fff8e8;
  border: 1px solid rgba(255,255,255,.3);
}

button.ghost {
  background: transparent;
  color: #fff8e8;
  border: 1px solid rgba(255,255,255,.28);
  box-shadow: none;
}

.image-panel,
.journey-image {
  border-radius: 28px;
  overflow: hidden;
  background: rgba(255,255,255,.1);
  min-height: 0;
}

.image-panel img,
.journey-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Keeps ecosystem graphic visible instead of cropped */
.journey-image img[src*="ConnectFoodEcosystem"] {
  object-fit: contain;
  padding: 14px;
  background: rgba(244, 234, 206, .92);
}

.pathway-grid {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

.pathway-grid button,
.selector-buttons button {
  background: rgba(255,255,255,.16);
  border: 1px solid rgba(255,255,255,.24);
  color: #fff8e8;
  box-shadow: none;
  min-height: 46px;
}

.journey-screen {
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 12px;
}

.journey-card {
  min-height: 0;
  display: grid;
  grid-template-columns: 1fr .94fr;
  gap: 20px;
  padding: 24px;
}

.journey-copy h1 {
  font-size: clamp(1.72rem, 3.2vw, 3.7rem);
}

.body {
  margin: 16px 0 0;
}

.pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 18px;
}

.pill-row span {
  padding: 8px 11px;
  border-radius: 999px;
  background: rgba(255,255,255,.16);
  border: 1px solid rgba(255,255,255,.22);
  color: #fff8e8;
  font-size: .9rem;
  font-weight: 700;
}

.selector {
  background: rgba(0,0,0,.16);
  border-radius: 24px;
  padding: 10px;
}

.selector-title {
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #ffd98b;
  margin: 0 0 8px 6px;
}

.selector-buttons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}

.selector-buttons button {
  padding: 9px 8px;
  font-size: .86rem;
}

.selector-buttons button.active {
  background: #ffd98b;
  color: #1e2c22;
}

.thanks-screen {
  display: flex;
  align-items: center;
  justify-content: center;
}

.thanks-card {
  max-width: 820px;
  padding: 36px;
  text-align: center;
}

.contact-box {
  margin: 22px auto;
  max-width: 420px;
  display: grid;
  gap: 8px;
  padding: 18px;
  border-radius: 24px;
  background: rgba(255,255,255,.14);
  border: 1px solid rgba(255,255,255,.22);
}

.thanks-card .home-actions {
  justify-content: center;
}

.controls {
  position: fixed;
  left: 24px;
  right: 24px;
  bottom: 20px;
  justify-content: center;
  background: rgba(11, 25, 19, .62);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 999px;
  padding: 10px;
}

@media (max-width: 900px) {
  .app {
    overflow: auto;
    padding-bottom: 120px;
  }

  .screen {
    height: auto;
  }

  .hero-card,
  .journey-card {
    grid-template-columns: 1fr;
  }

  .hero-card {
    height: auto;
  }

  .image-panel,
  .journey-image {
    min-height: 280px;
  }

  .pathway-grid,
  .selector-buttons {
    grid-template-columns: repeat(2, 1fr);
  }

  .controls {
    border-radius: 26px;
  }
}
`;

export default App;
