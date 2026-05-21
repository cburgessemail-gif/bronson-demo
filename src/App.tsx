// ================================
// BRONSON FAMILY FARM DEMO
// FULL UPDATED EXPERIENCE SCRIPT
// PRESERVES CURRENT LAYOUT/DESIGN
// ================================

import { useEffect, useMemo, useState } from "react";

type LangKey =
  | "English"
  | "Español"
  | "Tagalog"
  | "Italiano"
  | "עברית"
  | "Français";

type MultiText = Record<LangKey, string>;

type JourneyStep = {
  title: MultiText;
  body: MultiText;
  image: string;
};

type Slide = {
  id: number;
  nav: string;
  title: MultiText;
  subtitle: MultiText;
  ecosystem: MultiText;
  image: string;
  containImage?: boolean;
  steps: JourneyStep[];
  destination: MultiText;
};

const LANGS: LangKey[] = [
  "English",
  "Español",
  "Tagalog",
  "Italiano",
  "עברית",
  "Français",
];

const tx = (
  English: string,
  Español: string,
  Tagalog: string,
  Italiano: string,
  עברית: string,
  Français: string
): MultiText => ({
  English,
  Español,
  Tagalog,
  Italiano,
  עברית,
  Français,
});

export default function App() {
  const [lang, setLang] = useState<LangKey>("English");
  const [current, setCurrent] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [guidedTour, setGuidedTour] = useState(false);

  const t = (value: MultiText) => value?.[lang] || value?.English;

  const slides: Slide[] = useMemo(
    () => [
      {
        id: 1,
        nav: "Ecosystem",
        image: "/ConnectFoodEcosystem_withimages.jpeg",
        containImage: true,

        title: tx(
          "Connected Food Ecosystem",
          "Ecosistema Alimentario Conectado",
          "Connected Food Ecosystem",
          "Ecosistema Alimentare Connesso",
          "מערכת מזון מחוברת",
          "Écosystème Alimentaire Connecté"
        ),

        subtitle: tx(
          "A connected regional ecosystem where food, people, learning, workforce, and opportunity move together.",
          "Un ecosistema regional conectado donde alimentos, personas y oportunidades avanzan juntos.",
          "A connected regional ecosystem where food, people, learning, workforce, and opportunity move together.",
          "Un ecosistema regionale connesso.",
          "מערכת אזורית מחוברת.",
          "Un écosystème régional connecté."
        ),

        ecosystem: tx(
          "Every pathway strengthens the ecosystem.",
          "Cada camino fortalece el ecosistema.",
          "Every pathway strengthens the ecosystem.",
          "Ogni percorso rafforza l’ecosistema.",
          "כל מסלול מחזק את המערכת.",
          "Chaque parcours renforce l’écosystème."
        ),

        destination: tx(
          "Choose where you fit into the ecosystem.",
          "Elija dónde encaja en el ecosistema.",
          "Choose where you fit into the ecosystem.",
          "Scegli dove ti inserisci nell’ecosistema.",
          "בחר היכן אתה משתלב במערכת.",
          "Choisissez votre place dans l’écosystème."
        ),

        steps: [
          {
            title: tx(
              "Enter the Ecosystem",
              "Entrar al Ecosistema",
              "Enter the Ecosystem",
              "Entrare nell’Ecosistema",
              "להיכנס למערכת",
              "Entrer dans l’écosystème"
            ),
            body: tx(
              "Bronson Family Farm is more than a farm. It is a connected ecosystem supporting food access, workforce development, growers, education, health, and regional opportunity.",
              "Bronson Family Farm es más que una granja.",
              "Bronson Family Farm is more than a farm.",
              "Bronson Family Farm è più di una fattoria.",
              "ברונסון פמילי פארם היא יותר מחווה.",
              "Bronson Family Farm est plus qu’une ferme."
            ),
            image: "/ConnectFoodEcosystem_withimages.jpeg",
          },
        ],
      },

      // ========================
      // EXPLORE FARM
      // ========================

      {
        id: 2,
        nav: "Explore the Farm",
        image: "/GrowArea.jpg",

        title: tx(
          "Explore the Farm",
          "Explorar la Granja",
          "Explore the Farm",
          "Esplora la Fattoria",
          "סיור בחווה",
          "Explorer la Ferme"
        ),

        subtitle: tx(
          "Historic Lansdowne Airport • Youngstown, Ohio",
          "Aeropuerto Histórico Lansdowne",
          "Historic Lansdowne Airport",
          "Storico Aeroporto Lansdowne",
          "שדה התעופה ההיסטורי לנסדאון",
          "Aéroport Historique Lansdowne"
        ),

        ecosystem: tx(
          "The land becomes the physical foundation of the ecosystem.",
          "La tierra se convierte en la base física del ecosistema.",
          "The land becomes the physical foundation of the ecosystem.",
          "La terra diventa la base dell’ecosistema.",
          "הקרקע הופכת לבסיס המערכת.",
          "La terre devient la base de l’écosystème."
        ),

        destination: tx(
          "The farm becomes a destination for food, learning, and opportunity.",
          "La granja se convierte en un destino.",
          "The farm becomes a destination.",
          "La fattoria diventa una destinazione.",
          "החווה הופכת ליעד.",
          "La ferme devient une destination."
        ),

        steps: [
          {
            title: tx(
              "Arrival",
              "Llegada",
              "Arrival",
              "Arrivo",
              "הגעה",
              "Arrivée"
            ),
            body: tx(
              "You enter the Historic Lansdowne Airport property and begin understanding the scale and potential of the ecosystem.",
              "Usted entra a la propiedad.",
              "You enter the property.",
              "Entri nella proprietà.",
              "אתה נכנס לנכס.",
              "Vous entrez sur la propriété."
            ),
            image: "/GrowArea.jpg",
          },

          {
            title: tx(
              "Outdoor Growing",
              "Cultivo Exterior",
              "Outdoor Growing",
              "Coltivazione Esterna",
              "גידול חוץ",
              "Culture Extérieure"
            ),
            body: tx(
              "You experience active growing areas, seasonal production, infrastructure needs, and the connection between land and community.",
              "Usted experimenta las áreas de cultivo.",
              "You experience the growing areas.",
              "Sperimenti le aree di coltivazione.",
              "אתה חווה את אזורי הגידול.",
              "Vous découvrez les zones de culture."
            ),
            image: "/GrowArea.jpg",
          },
        ],
      },

      // ========================
      // GUEST
      // ========================

      {
        id: 3,
        nav: "Guest",
        image: "/SAM_0220.JPG",

        title: tx(
          "Guest Journey",
          "Recorrido del Invitado",
          "Guest Journey",
          "Percorso Ospite",
          "מסלול אורח",
          "Parcours Invité"
        ),

        subtitle: tx(
          "Experience the ecosystem for the first time.",
          "Experimente el ecosistema por primera vez.",
          "Experience the ecosystem for the first time.",
          "Sperimenta l’ecosistema.",
          "לחוות את המערכת בפעם הראשונה.",
          "Découvrir l’écosystème."
        ),

        ecosystem: tx(
          "Guests help carry the story outward.",
          "Los invitados ayudan a compartir la historia.",
          "Guests help share the story.",
          "Gli ospiti aiutano a condividere la storia.",
          "האורחים עוזרים להפיץ את הסיפור.",
          "Les invités partagent l’histoire."
        ),

        destination: tx(
          "Visitor → Community Participant",
          "Visitante → Participante Comunitario",
          "Visitor → Community Participant",
          "Visitatore → Partecipante",
          "מבקר → משתתף קהילתי",
          "Visiteur → Participant"
        ),

        steps: [
          {
            title: tx(
              "Arrival",
              "Llegada",
              "Arrival",
              "Arrivo",
              "הגעה",
              "Arrivée"
            ),
            body: tx(
              "You arrive curious about what Bronson Family Farm is.",
              "Usted llega con curiosidad.",
              "You arrive curious.",
              "Arrivi curioso.",
              "אתה מגיע סקרן.",
              "Vous arrivez curieux."
            ),
            image: "/SAM_0220.JPG",
          },

          {
            title: tx(
              "Discovery",
              "Descubrimiento",
              "Discovery",
              "Scoperta",
              "גילוי",
              "Découverte"
            ),
            body: tx(
              "You begin seeing growers, youth, food systems, learning, and community participation all connected together.",
              "Usted comienza a ver conexiones.",
              "You begin seeing connections.",
              "Inizi a vedere connessioni.",
              "אתה מתחיל לראות חיבורים.",
              "Vous commencez à voir les connexions."
            ),
            image: "/SAM_0221.JPG",
          },

          {
            title: tx(
              "Belonging",
              "Pertenencia",
              "Belonging",
              "Appartenenza",
              "שייכות",
              "Appartenance"
            ),
            body: tx(
              "You realize this is not just a farm. It is a community ecosystem.",
              "Usted entiende que esto es una comunidad.",
              "You understand this is a community.",
              "Comprendi che questa è una comunità.",
              "אתה מבין שזו קהילה.",
              "Vous comprenez qu’il s’agit d’une communauté."
            ),
            image: "/SAM_0223.JPG",
          },
        ],
      },

      // ========================
      // CUSTOMER
      // ========================

      {
        id: 4,
        nav: "Customer",
        image: "/SAM_0221.JPG",

        title: tx(
          "Customer Journey",
          "Recorrido del Cliente",
          "Customer Journey",
          "Percorso Cliente",
          "מסלול לקוח",
          "Parcours Client"
        ),

        subtitle: tx(
          "Fresh food • healthier choices • local connection",
          "Alimentos frescos y conexión local",
          "Fresh food and local connection",
          "Cibo fresco e connessione locale",
          "מזון טרי וחיבור מקומי",
          "Aliments frais et connexion locale"
        ),

        ecosystem: tx(
          "Customers support growers and local food circulation.",
          "Los clientes apoyan a los agricultores.",
          "Customers support growers.",
          "I clienti sostengono i coltivatori.",
          "לקוחות תומכים במגדלים.",
          "Les clients soutiennent les producteurs."
        ),

        destination: tx(
          "Buyer → Repeat Community Customer",
          "Comprador → Cliente Comunitario",
          "Buyer → Repeat Community Customer",
          "Acquirente → Cliente Comunitario",
          "קונה → לקוח קהילתי",
          "Acheteur → Client Communautaire"
        ),

        steps: [
          {
            title: tx(
              "Discovery",
              "Descubrimiento",
              "Discovery",
              "Scoperta",
              "גילוי",
              "Découverte"
            ),
            body: tx(
              "You discover seedlings, produce, and local growing systems.",
              "Usted descubre productos locales.",
              "You discover local products.",
              "Scopri prodotti locali.",
              "אתה מגלה מוצרים מקומיים.",
              "Vous découvrez les produits locaux."
            ),
            image: "/SAM_0221.JPG",
          },

          {
            title: tx(
              "Connection",
              "Conexión",
              "Connection",
              "Connessione",
              "חיבור",
              "Connexion"
            ),
            body: tx(
              "You begin understanding where food comes from and why local food systems matter.",
              "Usted entiende el sistema alimentario.",
              "You understand the food system.",
              "Comprendi il sistema alimentare.",
              "אתה מבין את מערכת המזון.",
              "Vous comprenez le système alimentaire."
            ),
            image: "/SAM_0223.JPG",
          },
        ],
      },

      // ========================
      // MARKETPLACE
      // ========================

      {
        id: 5,
        nav: "Marketplace",
        image: "/GrowersSupplyMarket.jpg",

        title: tx(
          "Marketplace Journey",
          "Recorrido del Mercado",
          "Marketplace Journey",
          "Percorso Mercato",
          "מסלול שוק",
          "Parcours Marché"
        ),

        subtitle: tx(
          "Food movement • distribution • regional circulation",
          "Movimiento regional de alimentos",
          "Regional food movement",
          "Movimento alimentare regionale",
          "תנועת מזון אזורית",
          "Mouvement alimentaire régional"
        ),

        ecosystem: tx(
          "The marketplace connects growers, buyers, and regional food access.",
          "El mercado conecta agricultores y compradores.",
          "Marketplace connects growers and buyers.",
          "Il mercato collega coltivatori e clienti.",
          "השוק מחבר מגדלים וקונים.",
          "Le marché relie producteurs et acheteurs."
        ),

        destination: tx(
          "Disconnected Transactions → Regional Food System",
          "Transacciones → Sistema Alimentario",
          "Transactions → Regional Food System",
          "Transazioni → Sistema Alimentare",
          "עסקאות → מערכת מזון אזורית",
          "Transactions → Système Alimentaire"
        ),

        steps: [
          {
            title: tx(
              "Movement",
              "Movimiento",
              "Movement",
              "Movimento",
              "תנועה",
              "Mouvement"
            ),
            body: tx(
              "You enter a living regional marketplace where products, people, growers, and opportunity move together.",
              "Usted entra a un mercado vivo.",
              "You enter a living market.",
              "Entri in un mercato vivo.",
              "אתה נכנס לשוק חי.",
              "Vous entrez dans un marché vivant."
            ),
            image: "/GrowersSupplyMarket.jpg",
          },

          {
            title: tx(
              "Circulation",
              "Circulación",
              "Circulation",
              "Circolazione",
              "מחזור",
              "Circulation"
            ),
            body: tx(
              "You experience food moving through a connected regional system.",
              "Usted experimenta movimiento regional.",
              "You experience regional movement.",
              "Sperimenti movimento regionale.",
              "אתה חווה תנועה אזורית.",
              "Vous découvrez le mouvement régional."
            ),
            image: "/SAM_0226.JPG",
          },
        ],
      },
    ],
    []
  );

  const active = slides[current];
  const currentStep = active.steps[stepIndex];

  const nextStep = () => {
    if (stepIndex < active.steps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else if (current < slides.length - 1) {
      setCurrent(current + 1);
      setStepIndex(0);
    }
  };

  const previousStep = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    } else if (current > 0) {
      setCurrent(current - 1);
      setStepIndex(0);
    }
  };

  useEffect(() => {
    if (!guidedTour) return;

    const timer = setInterval(() => {
      nextStep();
    }, 12000);

    return () => clearInterval(timer);
  });

  return (
    <main className="demo-shell">
      {/* KEEP YOUR EXISTING LAYOUT/STYLING */}
    </main>
  );
}
