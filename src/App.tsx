import { useEffect, useMemo, useState } from "react";

type LangKey = "English" | "Español" | "Tagalog" | "Italiano" | "עברית" | "Français";

type Slide = {
  id: number;
  nav: string;
  title: Record<LangKey, string>;
  subtitle: Record<LangKey, string>;
  bullets: Record<LangKey, string[]>;
  image: string;
  imageAlt: string;
  containImage?: boolean;
};

const LANGS: LangKey[] = ["English", "Español", "Tagalog", "Italiano", "עברית", "Français"];

const ui: Record<LangKey, any> = {
  English: {
    demo: "BRONSON FAMILY FARM DEMO",
    mainTitle: "Connected Food Ecosystem Experience",
    start: "Start",
    back: "Back",
    next: "Next",
    guided: "Begin Guided Tour",
    pause: "Pause Tour",
    restart: "Restart Tour",
    feedback: "Share Feedback",
  },
  Español: {
    demo: "DEMO DE BRONSON FAMILY FARM",
    mainTitle: "Experiencia del Ecosistema Alimentario Conectado",
    start: "Inicio",
    back: "Atrás",
    next: "Siguiente",
    guided: "Comenzar Recorrido Guiado",
    pause: "Pausar Recorrido",
    restart: "Reiniciar Recorrido",
    feedback: "Compartir Comentarios",
  },
  Tagalog: {
    demo: "BRONSON FAMILY FARM DEMO",
    mainTitle: "Karanasan sa Konektadong Ecosystem ng Pagkain",
    start: "Simula",
    back: "Bumalik",
    next: "Susunod",
    guided: "Simulan ang Guided Tour",
    pause: "I-pause ang Tour",
    restart: "Ulitin ang Tour",
    feedback: "Magbigay ng Feedback",
  },
  Italiano: {
    demo: "DEMO BRONSON FAMILY FARM",
    mainTitle: "Esperienza dell’Ecosistema Alimentare Connesso",
    start: "Inizio",
    back: "Indietro",
    next: "Avanti",
    guided: "Inizia Tour Guidato",
    pause: "Pausa Tour",
    restart: "Ricomincia Tour",
    feedback: "Condividi Feedback",
  },
  עברית: {
    demo: "הדגמת BRONSON FAMILY FARM",
    mainTitle: "חוויית מערכת מזון קהילתית מחוברת",
    start: "התחלה",
    back: "חזרה",
    next: "הבא",
    guided: "התחל סיור מודרך",
    pause: "עצור סיור",
    restart: "התחל מחדש",
    feedback: "שלח משוב",
  },
  Français: {
    demo: "DÉMO BRONSON FAMILY FARM",
    mainTitle: "Expérience d’un Écosystème Alimentaire Connecté",
    start: "Début",
    back: "Retour",
    next: "Suivant",
    guided: "Commencer la Visite Guidée",
    pause: "Pause",
    restart: "Recommencer",
    feedback: "Partager un Avis",
  },
};

const blank = {
  Español: "",
  Tagalog: "",
  Italiano: "",
  עברית: "",
  Français: "",
};

const slides: Slide[] = [
  {
    id: 1,
    nav: "Bronson Family Farm",
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    imageAlt: "Bronson Family Farm connected ecosystem graphic",
    containImage: true,
    title: { English: "Enter the Farm", ...blank },
    subtitle: {
      English: "The journey begins at the Historic Lansdowne Airport in Youngstown.",
      Español: "El recorrido comienza en el histórico Aeropuerto Lansdowne en Youngstown.",
      Tagalog: "Nagsisimula ang paglalakbay sa Historic Lansdowne Airport sa Youngstown.",
      Italiano: "Il viaggio inizia allo storico Lansdowne Airport di Youngstown.",
      עברית: "המסע מתחיל בשדה התעופה ההיסטורי Lansdowne ביונגסטאון.",
      Français: "Le parcours commence à l’aéroport historique Lansdowne de Youngstown.",
    },
    bullets: {
      English: [
        "118+ acres of growing opportunity",
        "Food, knowledge, workforce, and community",
        "A place-based ecosystem designed to circulate resources locally",
      ],
      Español: [
        "Más de 118 acres de oportunidad agrícola",
        "Alimentos, conocimiento, fuerza laboral y comunidad",
        "Un ecosistema local diseñado para circular recursos en la comunidad",
      ],
      Tagalog: [
        "118+ acres ng oportunidad para sa pagtatanim",
        "Pagkain, kaalaman, trabaho, at komunidad",
        "Isang lokal na ecosystem na nagpapalibot ng yaman sa komunidad",
      ],
      Italiano: [
        "Oltre 118 acri di opportunità agricola",
        "Cibo, conoscenza, lavoro e comunità",
        "Un ecosistema locale progettato per far circolare risorse",
      ],
      עברית: [
        "יותר מ־118 אקרים של הזדמנות חקלאית",
        "מזון, ידע, עבודה וקהילה",
        "מערכת מקומית המחברת משאבים בתוך הקהילה",
      ],
      Français: [
        "Plus de 118 acres d’opportunités agricoles",
        "Nourriture, savoir, main-d’œuvre et communauté",
        "Un écosystème local conçu pour faire circuler les ressources",
      ],
    },
  },
  {
    id: 2,
    nav: "Connected Ecosystem",
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    imageAlt: "Connected food ecosystem diagram",
    containImage: true,
    title: {
      English: "What Is the Ecosystem?",
      Español: "¿Qué es el Ecosistema?",
      Tagalog: "Ano ang Ecosystem?",
      Italiano: "Che Cos’è l’Ecosistema?",
      עברית: "מהי המערכת המחוברת?",
      Français: "Qu’est-ce que l’Écosystème?",
    },
    subtitle: {
      English: "An ecosystem is a living network where each role strengthens the whole.",
      Español: "Un ecosistema es una red viva donde cada función fortalece al conjunto.",
      Tagalog: "Ang ecosystem ay buhay na ugnayan kung saan mahalaga ang bawat papel.",
      Italiano: "Un ecosistema è una rete viva in cui ogni ruolo rafforza l’insieme.",
      עברית: "מערכת חיה שבה כל תפקיד מחזק את הכלל.",
      Français: "Un écosystème est un réseau vivant où chaque rôle renforce l’ensemble.",
    },
    bullets: {
      English: [
        "Growers produce food",
        "Customers support local circulation",
        "Partners, youth, and value-added producers expand impact",
      ],
      Español: ["Los agricultores producen alimentos", "Los clientes apoyan la circulación local", "Socios, jóvenes y productores agregan valor e impacto"],
      Tagalog: ["Ang growers ang nagtatanim ng pagkain", "Ang customers ang sumusuporta sa lokal na daloy", "Ang partners, kabataan, at producers ay nagpapalawak ng impact"],
      Italiano: ["I coltivatori producono cibo", "I clienti sostengono la circolazione locale", "Partner, giovani e produttori ampliano l’impatto"],
      עברית: ["המגדלים מייצרים מזון", "הלקוחות מחזקים את הכלכלה המקומית", "שותפים, נוער ויצרנים מרחיבים את ההשפעה"],
      Français: ["Les producteurs cultivent la nourriture", "Les clients soutiennent la circulation locale", "Les partenaires, les jeunes et les producteurs élargissent l’impact"],
    },
  },
  {
    id: 3,
    nav: "Explore the Farm",
    image: "/GrowArea.jpg",
    imageAlt: "Bronson Family Farm grow area",
    title: {
      English: "Explore the Farm",
      Español: "Explorar la Granja",
      Tagalog: "Tuklasin ang Bukid",
      Italiano: "Esplora la Fattoria",
      עברית: "סיור בחווה",
      Français: "Explorer la Ferme",
    },
    subtitle: {
      English: "This is agriculture rooted in place, history, and purpose.",
      Español: "Esta agricultura está arraigada en lugar, historia y propósito.",
      Tagalog: "Ito ay pagsasakang nakaugat sa lugar, kasaysayan, at layunin.",
      Italiano: "Questa agricoltura nasce da luogo, storia e scopo.",
      עברית: "חקלאות המחוברת למקום, היסטוריה ומטרה.",
      Français: "Une agriculture enracinée dans le lieu, l’histoire et le but.",
    },
    bullets: {
      English: ["Historic airport land becomes food infrastructure", "Outdoor growing demonstrates practical food access", "The farm grows into agritourism, education, and community use"],
      Español: ["Terreno histórico se convierte en infraestructura alimentaria", "El cultivo exterior demuestra acceso práctico a alimentos", "La granja crece hacia agroturismo, educación y comunidad"],
      Tagalog: ["Ang makasaysayang lupa ay nagiging imprastraktura ng pagkain", "Ang outdoor growing ay nagpapakita ng praktikal na food access", "Ang bukid ay lumalago bilang agritourism, edukasyon, at komunidad"],
      Italiano: ["La terra storica diventa infrastruttura alimentare", "La coltivazione esterna dimostra accesso pratico al cibo", "La fattoria cresce in agriturismo, educazione e uso comunitario"],
      עברית: ["קרקע היסטורית הופכת לתשתית מזון", "גידול חוץ מדגים גישה מעשית למזון", "החווה מתפתחת לתיירות חקלאית, חינוך וקהילה"],
      Français: ["Une terre historique devient infrastructure alimentaire", "La culture extérieure démontre l’accès pratique à la nourriture", "La ferme devient agritourisme, éducation et usage communautaire"],
    },
  },
  {
    id: 4,
    nav: "Guest",
    image: "/SAM_0220.JPG",
    imageAlt: "Guests at Bronson Family Farm",
    title: { English: "Guest Pathway", Español: "Camino del Invitado", Tagalog: "Pathway ng Bisita", Italiano: "Percorso dell’Ospite", עברית: "מסלול אורח", Français: "Parcours Invité" },
    subtitle: {
      English: "Guests enter to understand the story, the land, and the purpose.",
      Español: "Los invitados entran para comprender la historia, la tierra y el propósito.",
      Tagalog: "Ang bisita ay pumapasok upang maunawaan ang kuwento, lupa, at layunin.",
      Italiano: "Gli ospiti entrano per capire storia, terra e scopo.",
      עברית: "האורחים נכנסים להבין את הסיפור, הקרקע והמטרה.",
      Français: "Les invités découvrent l’histoire, la terre et le but.",
    },
    bullets: {
      English: ["Learn why food access matters", "See how the farm connects people to opportunity", "Leave with a clear invitation to participate"],
      Español: ["Aprender por qué importa el acceso a alimentos", "Ver cómo la granja conecta personas con oportunidades", "Salir con una invitación clara a participar"],
      Tagalog: ["Matutunan kung bakit mahalaga ang food access", "Makita kung paano nag-uugnay ang bukid ng oportunidad", "Umalis na may malinaw na paanyaya na makilahok"],
      Italiano: ["Capire perché l’accesso al cibo è importante", "Vedere come la fattoria collega persone e opportunità", "Uscire con un invito chiaro a partecipare"],
      עברית: ["להבין למה גישה למזון חשובה", "לראות איך החווה מחברת אנשים להזדמנות", "לצאת עם הזמנה ברורה להשתתף"],
      Français: ["Comprendre pourquoi l’accès alimentaire compte", "Voir comment la ferme relie les personnes aux opportunités", "Repartir avec une invitation claire à participer"],
    },
  },
  {
    id: 5,
    nav: "Customer",
    image: "/SAM_0221.JPG",
    imageAlt: "Fresh food access and families",
    title: { English: "Customer Pathway", Español: "Camino del Cliente", Tagalog: "Pathway ng Customer", Italiano: "Percorso Cliente", עברית: "מסלול לקוח", Français: "Parcours Client" },
    subtitle: {
      English: "Customers support healthier choices and local circulation.",
      Español: "Los clientes apoyan decisiones saludables y circulación local.",
      Tagalog: "Sinusuportahan ng customers ang mas malusog na pagpili at lokal na daloy.",
      Italiano: "I clienti sostengono scelte sane e circolazione locale.",
      עברית: "לקוחות מחזקים בחירות בריאות וכלכלה מקומית.",
      Français: "Les clients soutiennent des choix sains et la circulation locale.",
    },
    bullets: {
      English: ["Fresh, local, chemical-free produce", "Health and nutrition education", "Purchasing power stays closer to the community"],
      Español: ["Productos frescos, locales y sin químicos", "Educación sobre salud y nutrición", "El poder de compra permanece más cerca de la comunidad"],
      Tagalog: ["Sariwa, lokal, at chemical-free na ani", "Edukasyon sa kalusugan at nutrisyon", "Ang pera ay nananatiling mas malapit sa komunidad"],
      Italiano: ["Prodotti freschi, locali e senza sostanze chimiche", "Educazione alla salute e nutrizione", "Il potere d’acquisto resta nella comunità"],
      עברית: ["תוצרת טרייה, מקומית וללא כימיקלים", "חינוך לבריאות ותזונה", "כוח הקנייה נשאר קרוב לקהילה"],
      Français: ["Produits frais, locaux et sans produits chimiques", "Éducation santé et nutrition", "Le pouvoir d’achat reste dans la communauté"],
    },
  },
  {
    id: 6,
    nav: "Marketplace",
    image: "/SAM_0222.JPG",
    imageAlt: "Community marketplace",
    title: { English: "Marketplace Pathway", Español: "Camino del Mercado", Tagalog: "Pathway ng Marketplace", Italiano: "Percorso Mercato", עברית: "מסלול שוק", Français: "Parcours Marché" },
    subtitle: {
      English: "The food moves. The grower does not have to travel everywhere.",
      Español: "La comida se mueve. El agricultor no tiene que viajar a todas partes.",
      Tagalog: "Ang pagkain ang gumagalaw. Hindi kailangang bumiyahe ang grower sa lahat ng lugar.",
      Italiano: "Il cibo si muove. Il coltivatore non deve andare ovunque.",
      עברית: "המזון נע. המגדל לא צריך לנסוע לכל מקום.",
      Français: "La nourriture circule. Le producteur n’a pas besoin d’aller partout.",
    },
    bullets: {
      English: ["Coordinates growers, customers, schools, and businesses", "Supports ordering, pickup, and future distribution", "Keeps food and money circulating locally"],
      Español: ["Coordina agricultores, clientes, escuelas y negocios", "Apoya pedidos, recogida y distribución futura", "Mantiene alimentos y dinero circulando localmente"],
      Tagalog: ["Nag-uugnay ng growers, customers, schools, at businesses", "Sumusuporta sa orders, pickup, at distribution", "Pinapanatiling lokal ang daloy ng pagkain at pera"],
      Italiano: ["Coordina coltivatori, clienti, scuole e imprese", "Supporta ordini, ritiro e distribuzione futura", "Mantiene cibo e denaro in circolazione locale"],
      עברית: ["מתאם מגדלים, לקוחות, בתי ספר ועסקים", "תומך בהזמנות, איסוף והפצה עתידית", "משאיר מזון וכסף בתנועה מקומית"],
      Français: ["Coordonne producteurs, clients, écoles et entreprises", "Soutient commandes, retrait et distribution future", "Garde la nourriture et l’argent en circulation locale"],
    },
  },
  {
    id: 7,
    nav: "Grower",
    image: "/SAM_0223.JPG",
    imageAlt: "Grower support pathway",
    title: { English: "Grower Pathway", Español: "Camino del Agricultor", Tagalog: "Pathway ng Grower", Italiano: "Percorso Coltivatore", עברית: "מסלול מגדל", Français: "Parcours Producteur" },
    subtitle: {
      English: "Growers need tools, knowledge, visibility, and market support.",
      Español: "Los agricultores necesitan herramientas, conocimiento, visibilidad y mercado.",
      Tagalog: "Kailangan ng growers ng tools, kaalaman, visibility, at market support.",
      Italiano: "I coltivatori hanno bisogno di strumenti, conoscenza, visibilità e mercato.",
      עברית: "מגדלים צריכים כלים, ידע, נראות ותמיכת שוק.",
      Français: "Les producteurs ont besoin d’outils, de savoir, de visibilité et de marché.",
    },
    bullets: {
      English: ["Shared resources and practical education", "Support for growing, selling, and connecting", "A stronger grower network across the region"],
      Español: ["Recursos compartidos y educación práctica", "Apoyo para cultivar, vender y conectarse", "Una red agrícola regional más fuerte"],
      Tagalog: ["Shared resources at praktikal na edukasyon", "Suporta sa pagtatanim, pagbebenta, at koneksyon", "Mas malakas na grower network sa rehiyon"],
      Italiano: ["Risorse condivise ed educazione pratica", "Supporto per coltivare, vendere e connettersi", "Una rete agricola regionale più forte"],
      עברית: ["משאבים משותפים וחינוך מעשי", "תמיכה בגידול, מכירה וחיבור", "רשת מגדלים אזורית חזקה יותר"],
      Français: ["Ressources partagées et éducation pratique", "Soutien pour cultiver, vendre et se connecter", "Un réseau régional de producteurs plus fort"],
    },
  },
  {
    id: 8,
    nav: "Youth Workforce",
    image: "/SAM_0225.JPG",
    imageAlt: "Youth workforce development",
    title: { English: "Youth Workforce Pathway", Español: "Camino de Fuerza Laboral Juvenil", Tagalog: "Pathway ng Youth Workforce", Italiano: "Percorso Giovani Lavoratori", עברית: "מסלול נוער ועבודה", Français: "Parcours Jeunesse et Travail" },
    subtitle: {
      English: "Young people build responsibility, skill, leadership, and confidence.",
      Español: "Los jóvenes desarrollan responsabilidad, habilidades, liderazgo y confianza.",
      Tagalog: "Ang kabataan ay bumubuo ng responsibilidad, kakayahan, leadership, at confidence.",
      Italiano: "I giovani sviluppano responsabilità, competenze, leadership e fiducia.",
      עברית: "צעירים בונים אחריות, מיומנות, מנהיגות וביטחון.",
      Français: "Les jeunes développent responsabilité, compétences, leadership et confiance.",
    },
    bullets: {
      English: ["Outdoor learning and farm-based work", "Safety, teamwork, attendance, and life skills", "Future readiness through real responsibility"],
      Español: ["Aprendizaje al aire libre y trabajo agrícola", "Seguridad, trabajo en equipo, asistencia y habilidades de vida", "Preparación futura mediante responsabilidad real"],
      Tagalog: ["Outdoor learning at farm-based work", "Safety, teamwork, attendance, at life skills", "Future readiness sa pamamagitan ng totoong responsibilidad"],
      Italiano: ["Apprendimento all’aperto e lavoro agricolo", "Sicurezza, squadra, presenza e competenze di vita", "Preparazione al futuro con responsabilità reale"],
      עברית: ["למידה בחוץ ועבודה חקלאית", "בטיחות, עבודת צוות, נוכחות וכישורי חיים", "הכנה לעתיד דרך אחריות אמיתית"],
      Français: ["Apprentissage extérieur et travail agricole", "Sécurité, équipe, présence et compétences de vie", "Préparation à l’avenir par une vraie responsabilité"],
    },
  },
  {
    id: 9,
    nav: "Partner",
    image: "/SAM_0226.JPG",
    imageAlt: "Community partners pathway",
    title: { English: "Partner Pathway", Español: "Camino del Socio", Tagalog: "Pathway ng Partner", Italiano: "Percorso Partner", עברית: "מסלול שותפים", Français: "Parcours Partenaire" },
    subtitle: {
      English: "Partners help align resources, knowledge, infrastructure, and impact.",
      Español: "Los socios alinean recursos, conocimiento, infraestructura e impacto.",
      Tagalog: "Tumutulong ang partners sa resources, kaalaman, infrastructure, at impact.",
      Italiano: "I partner allineano risorse, conoscenza, infrastruttura e impatto.",
      עברית: "שותפים מחברים משאבים, ידע, תשתית והשפעה.",
      Français: "Les partenaires alignent ressources, savoir, infrastructure et impact.",
    },
    bullets: {
      English: ["Education, health, agriculture, business, and civic partners", "Shared responsibility for community benefit", "Collaboration that makes the ecosystem stronger"],
      Español: ["Socios en educación, salud, agricultura, negocios y comunidad", "Responsabilidad compartida por el beneficio comunitario", "Colaboración que fortalece el ecosistema"],
      Tagalog: ["Partners sa edukasyon, kalusugan, agrikultura, negosyo, at civic work", "Shared responsibility para sa komunidad", "Collaboration na nagpapalakas ng ecosystem"],
      Italiano: ["Partner educativi, sanitari, agricoli, aziendali e civici", "Responsabilità condivisa per il bene comunitario", "Collaborazione che rafforza l’ecosistema"],
      עברית: ["שותפים בחינוך, בריאות, חקלאות, עסקים וציבור", "אחריות משותפת לטובת הקהילה", "שיתוף פעולה שמחזק את המערכת"],
      Français: ["Partenaires en éducation, santé, agriculture, affaires et civisme", "Responsabilité partagée pour le bien communautaire", "Collaboration qui renforce l’écosystème"],
    },
  },
  {
    id: 10,
    nav: "Value-Added",
    image: "/SAM_0229.JPG",
    imageAlt: "Value-added agritourism pathway",
    title: { English: "Value-Added Pathway", Español: "Camino de Valor Agregado", Tagalog: "Pathway ng Value-Added", Italiano: "Percorso Valore Aggiunto", עברית: "מסלול ערך מוסף", Français: "Parcours Valeur Ajoutée" },
    subtitle: {
      English: "The farm grows beyond food into education, tourism, wellness, and enterprise.",
      Español: "La granja crece más allá de alimentos hacia educación, turismo, bienestar y empresa.",
      Tagalog: "Ang bukid ay lumalago lampas sa pagkain—edukasyon, turismo, wellness, at negosyo.",
      Italiano: "La fattoria cresce oltre il cibo: educazione, turismo, benessere e impresa.",
      עברית: "החווה מתפתחת מעבר למזון: חינוך, תיירות, בריאות ויזמות.",
      Français: "La ferme dépasse l’alimentation: éducation, tourisme, bien-être et entreprise.",
    },
    bullets: {
      English: ["Agritourism, culinary experiences, and preservation", "Future kids’ zone, mini-golf, camping, and learning spaces", "New revenue streams that sustain the ecosystem"],
      Español: ["Agroturismo, experiencias culinarias y conservación", "Futura zona infantil, mini golf, campamento y aprendizaje", "Nuevas fuentes de ingresos que sostienen el ecosistema"],
      Tagalog: ["Agritourism, culinary experiences, at preservation", "Future kids’ zone, mini-golf, camping, at learning spaces", "Bagong revenue streams para suportahan ang ecosystem"],
      Italiano: ["Agriturismo, esperienze culinarie e conservazione", "Future aree bambini, mini-golf, campeggio e spazi didattici", "Nuove entrate per sostenere l’ecosistema"],
      עברית: ["תיירות חקלאית, חוויות קולינריות ושימור מזון", "אזור ילדים עתידי, מיני־גולף, קמפינג ומרחבי למידה", "מקורות הכנסה חדשים שמחזקים את המערכת"],
      Français: ["Agritourisme, expériences culinaires et conservation", "Futur espace enfants, mini-golf, camping et lieux d’apprentissage", "Nouvelles sources de revenus pour soutenir l’écosystème"],
    },
  },
  {
    id: 11,
    nav: "Thank You",
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    imageAlt: "Bronson Family Farm ecosystem closing slide",
    containImage: true,
    title: { English: "Thank You", Español: "Gracias", Tagalog: "Salamat", Italiano: "Grazie", עברית: "תודה", Français: "Merci" },
    subtitle: {
      English: "This demo is an invitation to respond, participate, and help shape what comes next.",
      Español: "Esta demo es una invitación a responder, participar y ayudar a formar lo que sigue.",
      Tagalog: "Ang demo na ito ay paanyaya na tumugon, makilahok, at tumulong sa susunod.",
      Italiano: "Questa demo è un invito a rispondere, partecipare e costruire il futuro.",
      עברית: "ההדגמה היא הזמנה להגיב, להשתתף ולעצב את ההמשך.",
      Français: "Cette démo invite à répondre, participer et façonner la suite.",
    },
    bullets: {
      English: ["Contact: 330-275-1604", "Bronson Family Farm • Farm & Family Alliance", "Feedback helps us improve the experience before sharing it wider"],
      Español: ["Contacto: 330-275-1604", "Bronson Family Farm • Farm & Family Alliance", "Sus comentarios nos ayudan a mejorar la experiencia"],
      Tagalog: ["Contact: 330-275-1604", "Bronson Family Farm • Farm & Family Alliance", "Ang feedback ay tumutulong pagandahin ang experience"],
      Italiano: ["Contatto: 330-275-1604", "Bronson Family Farm • Farm & Family Alliance", "Il feedback aiuta a migliorare l’esperienza"],
      עברית: ["יצירת קשר: 330-275-1604", "Bronson Family Farm • Farm & Family Alliance", "המשוב עוזר לשפר את החוויה"],
      Français: ["Contact : 330-275-1604", "Bronson Family Farm • Farm & Family Alliance", "Vos commentaires nous aident à améliorer l’expérience"],
    },
  },
];

function SmartImage({ slide }: { slide: Slide }) {
  const [currentSrc, setCurrentSrc] = useState(slide.image);

  useEffect(() => setCurrentSrc(slide.image), [slide.image]);

  return (
    <img
      src={currentSrc}
      alt={slide.imageAlt}
      onError={() => {
        if (!currentSrc.startsWith("/images/")) setCurrentSrc(`/images${slide.image}`);
      }}
      className={`hero-image ${slide.containImage ? "contain" : "cover"}`}
    />
  );
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const [language, setLanguage] = useState<LangKey>("English");
  const [guided, setGuided] = useState(false);

  const t = ui[language];
  const slide = slides[current];
  const progress = useMemo(() => ((current + 1) / slides.length) * 100, [current]);
  const isRTL = language === "עברית";

  useEffect(() => {
    if (!guided) return;
    if (current === slides.length - 1) {
      setGuided(false);
      return;
    }

    const delay = [1, 2, 5, 7, 8, 9].includes(current) ? 9500 : 7600;
    const timer = window.setTimeout(() => {
      setCurrent((prev) => Math.min(prev + 1, slides.length - 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [guided, current]);

  return (
    <main className="app" dir={isRTL ? "rtl" : "ltr"}>
      <style>{`
        * { box-sizing: border-box; }

        html, body, #root {
          margin: 0;
          min-height: 100%;
          background: #000;
          color: white;
          font-family: Inter, Arial, Helvetica, sans-serif;
        }

        .app {
          min-height: 100vh;
          background:
            radial-gradient(circle at 72% 38%, rgba(99,135,43,.16), transparent 34%),
            radial-gradient(circle at 18% 80%, rgba(191,139,72,.1), transparent 28%),
            #000;
          overflow-x: hidden;
        }

        .wrap {
          width: min(1480px, calc(100vw - 48px));
          margin: 0 auto;
          padding: 24px 0 20px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: flex-start;
        }

        .eyebrow {
          color: #d8b56d;
          letter-spacing: 7px;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .main-title {
          margin: 0;
          max-width: 820px;
          font-size: clamp(40px, 4.5vw, 68px);
          line-height: .96;
          font-weight: 300;
          letter-spacing: -2px;
        }

        .language {
          margin-top: 6px;
          background: rgba(255,255,255,.1);
          color: white;
          border: 1px solid rgba(255,255,255,.25);
          border-radius: 999px;
          padding: 13px 21px;
          font-size: 18px;
          outline: none;
          backdrop-filter: blur(12px);
        }

        .language option { color: black; }

        .progress {
          height: 8px;
          background: rgba(255,255,255,.18);
          border-radius: 999px;
          overflow: hidden;
          margin-top: 24px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #8cc63e, #d7b56d);
          border-radius: 999px;
          transition: width 700ms ease;
        }

        .nav {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .nav-button {
          border: 1px solid rgba(255,255,255,.22);
          background: rgba(255,255,255,.1);
          color: white;
          border-radius: 999px;
          padding: 12px 19px;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          transition: 220ms ease;
        }

        .nav-button.active {
          background: linear-gradient(135deg, #b77b38, #d2a85d);
          border-color: #f0d59b;
          box-shadow: 0 0 22px rgba(210,168,93,.28);
        }

        .nav-button.completed {
          background: rgba(70,112,39,.75);
          border-color: rgba(154,205,50,.6);
        }

        .stage {
          display: grid;
          grid-template-columns: .98fr 1.02fr;
          gap: 34px;
          align-items: stretch;
          padding-top: 54px;
        }

        .panel {
          min-height: 420px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(3,3,3,.84);
          border-radius: 32px;
          padding: 38px 42px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 24px 70px rgba(0,0,0,.35);
        }

        .slide-title {
          margin: 0 0 18px;
          font-size: clamp(46px, 4.8vw, 72px);
          line-height: .94;
          font-weight: 300;
          letter-spacing: -2px;
        }

        .subtitle {
          margin: 0 0 24px;
          font-size: clamp(21px, 1.85vw, 30px);
          line-height: 1.26;
        }

        .bullets {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 13px;
        }

        .bullets li {
          font-size: clamp(18px, 1.48vw, 25px);
          line-height: 1.27;
          display: grid;
          grid-template-columns: 24px 1fr;
          gap: 12px;
        }

        .dot {
          width: 11px;
          height: 11px;
          margin-top: 9px;
          border-radius: 50%;
          background: #9acd32;
          box-shadow: 0 0 15px rgba(154,205,50,.6);
        }

        .controls {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 32px;
        }

        .control {
          border: 1px solid rgba(255,255,255,.22);
          border-radius: 999px;
          padding: 14px 23px;
          color: white;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          background: rgba(255,255,255,.1);
        }

        .gold { background: linear-gradient(135deg, #b77b38, #d2a85d); }
        .green { background: linear-gradient(135deg, #3f7f1f, #78a933); }

        .image-card {
          position: relative;
          min-height: 420px;
          height: 100%;
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,.12);
          overflow: hidden;
          background: #050505;
          box-shadow: 0 24px 70px rgba(0,0,0,.35);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          min-height: 420px;
          display: block;
          filter: brightness(1.16) contrast(1.08) saturate(1.08);
        }

        .hero-image.cover {
          object-fit: cover;
          object-position: center center;
        }

        .hero-image.contain {
          object-fit: contain;
          object-position: center center;
          background: #050505;
          padding: 8px;
        }

        .image-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.04), rgba(0,0,0,.05));
          pointer-events: none;
        }

        .counter {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 2;
          background: rgba(0,0,0,.58);
          border: 1px solid rgba(255,255,255,.18);
          backdrop-filter: blur(10px);
          border-radius: 999px;
          padding: 9px 14px;
          font-weight: 900;
          font-size: 18px;
        }

        .image-label {
          position: absolute;
          left: 20px;
          bottom: 18px;
          z-index: 2;
          max-width: calc(100% - 40px);
          background: rgba(0,0,0,.62);
          border: 1px solid rgba(255,255,255,.16);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 13px 16px;
        }

        .image-label strong {
          display: block;
          font-size: 18px;
        }

        .image-label span {
          display: block;
          margin-top: 4px;
          color: rgba(255,255,255,.82);
          font-size: 14px;
        }

        @media (max-width: 1100px) {
          .stage { grid-template-columns: 1fr; padding-top: 34px; }
          .image-card, .hero-image { min-height: 390px; }
        }

        @media (max-width: 760px) {
          .wrap { width: min(100vw - 28px, 1480px); }
          .header { flex-direction: column; }
          .main-title { font-size: 42px; }
          .slide-title { font-size: 42px; }
          .panel { padding: 24px; }
          .nav-button, .control { font-size: 14px; padding: 11px 15px; }
        }
      `}</style>

      <div className="wrap">
        <header className="header">
          <div>
            <div className="eyebrow">{t.demo}</div>
            <h1 className="main-title">{t.mainTitle}</h1>
          </div>

          <select
            className="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value as LangKey)}
          >
            {LANGS.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </header>

        <div className="progress">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <nav className="nav">
          {slides.map((item, index) => (
            <button
              key={item.id}
              className={`nav-button ${index === current ? "active" : ""} ${index < current ? "completed" : ""}`}
              onClick={() => {
                setCurrent(index);
                setGuided(false);
              }}
            >
              {item.id}. {item.nav}
            </button>
          ))}
        </nav>

        <section className="stage">
          <article className="panel">
            <div>
              <div className="eyebrow">{t.demo}</div>
              <h2 className="slide-title">{slide.title[language] || slide.title.English}</h2>
              <p className="subtitle">{slide.subtitle[language]}</p>

              <ul className="bullets">
                {slide.bullets[language].map((point) => (
                  <li key={point}>
                    <span className="dot" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="controls">
              <button className="control" onClick={() => { setCurrent(0); setGuided(false); }}>{t.start}</button>
              <button className="control" onClick={() => setCurrent((p) => Math.max(p - 1, 0))}>{t.back}</button>
              <button className="control gold" onClick={() => setCurrent((p) => Math.min(p + 1, slides.length - 1))}>{t.next}</button>
              <button
                className="control green"
                onClick={() => {
                  if (current === slides.length - 1) setCurrent(0);
                  setGuided((p) => !p);
                }}
              >
                {guided ? t.pause : current === slides.length - 1 ? t.restart : t.guided}
              </button>

              {current === slides.length - 1 && (
                <button
                  className="control gold"
                  onClick={() => {
                    window.location.href =
                      "mailto:cburgess@bronsonfamilyfarm.com?subject=Bronson%20Family%20Farm%20Demo%20Feedback";
                  }}
                >
                  {t.feedback}
                </button>
              )}
            </div>
          </article>

          <aside className="image-card">
            <SmartImage slide={slide} />
            <div className="counter">{current + 1} / {slides.length}</div>
            <div className="image-label">
              <strong>{slide.nav}</strong>
              <span>{slide.subtitle[language]}</span>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
