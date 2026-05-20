// KEEP YOUR EXISTING IMPORTS

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

const slides: Slide[] = [
  {
    id: 1,
    nav: "Ecosystem",
    title: {
      English: "A Connected Food Ecosystem",
      Español: "Un Ecosistema Alimentario Conectado",
      Tagalog: "Magkakaugnay na Food Ecosystem",
      Italiano: "Un Ecosistema Alimentare Connesso",
      עברית: "אקוסיסטם מזון מחובר",
      Français: "Un Écosystème Alimentaire Connecté",
    },
    subtitle: {
      English:
        "Bronson Family Farm connects food, growers, workforce, education, health, and community together.",
      Español:
        "Bronson Family Farm conecta alimentos, productores y comunidad.",
      Tagalog:
        "Pinagdurugtong ng Bronson Family Farm ang pagkain at komunidad.",
      Italiano:
        "Bronson Family Farm collega cibo, coltivatori e comunità.",
      עברית:
        "Bronson Family Farm מחברת מזון, חינוך וקהילה יחד.",
      Français:
        "Bronson Family Farm relie nourriture, éducation et communauté.",
    },
    bullets: {
      English: [
        "A place-based ecosystem rooted in Youngstown",
        "Food access connected to education and workforce",
        "Every pathway connects back into the ecosystem",
      ],
      Español: [
        "Un ecosistema basado en Youngstown",
        "Acceso alimentario conectado a educación",
        "Cada camino regresa al ecosistema",
      ],
      Tagalog: [
        "Place-based ecosystem sa Youngstown",
        "Food access at education",
        "Bawat pathway ay konektado",
      ],
      Italiano: [
        "Ecosistema radicato a Youngstown",
        "Cibo collegato all’istruzione",
        "Ogni percorso è connesso",
      ],
      עברית: [
        "אקוסיסטם מבוסס מקום ביונגסטאון",
        "גישה למזון וחינוך",
        "כל מסלול מחובר",
      ],
      Français: [
        "Écosystème enraciné à Youngstown",
        "Accès alimentaire et éducation",
        "Chaque parcours est connecté",
      ],
    },

    // DO NOT CHANGE THIS AGAIN
    image: "/ConnectFoodEcosystem_withimages.jpeg",
  },

  {
    id: 2,
    nav: "Explore the Farm",
    title: {
      English: "Explore Bronson Family Farm",
      Español: "Explora Bronson Family Farm",
      Tagalog: "Tuklasin ang Bronson Family Farm",
      Italiano: "Esplora Bronson Family Farm",
      עברית: "חקור את Bronson Family Farm",
      Français: "Explorez Bronson Family Farm",
    },
    subtitle: {
      English:
        "Located at the Historic Lansdowne Airport, the farm transforms land into opportunity.",
      Español:
        "Ubicada en el histórico aeropuerto Lansdowne.",
      Tagalog:
        "Matatagpuan sa Historic Lansdowne Airport.",
      Italiano:
        "Situata nello storico aeroporto Lansdowne.",
      עברית:
        "ממוקמת בשדה התעופה ההיסטורי לנסדאון.",
      Français:
        "Située à l’aéroport historique Lansdowne.",
    },
    bullets: {
      English: [
        "118+ acres of agricultural opportunity",
        "Outdoor growing and community education",
        "Future irrigation, solar, and agritourism systems",
      ],
      Español: [
        "Más de 118 acres",
        "Cultivo y educación comunitaria",
        "Sistemas futuros",
      ],
      Tagalog: [
        "118+ acres",
        "Outdoor growing",
        "Future systems",
      ],
      Italiano: [
        "Oltre 118 acri",
        "Agricoltura e istruzione",
        "Sistemi futuri",
      ],
      עברית: [
        "יותר מ-118 אקרים",
        "חקלאות וחינוך",
        "מערכות עתידיות",
      ],
      Français: [
        "Plus de 118 acres",
        "Agriculture et éducation",
        "Systèmes futurs",
      ],
    },

    image: "/GrowArea.jpg",
  },

  {
    id: 3,
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
        "Guests experience food, nature, health, and inspiration together.",
      Español:
        "Los visitantes experimentan naturaleza y salud.",
      Tagalog:
        "Nararanasan ng bisita ang kalikasan at kalusugan.",
      Italiano:
        "Gli ospiti vivono natura e salute.",
      עברית:
        "מבקרים חווים טבע ובריאות יחד.",
      Français:
        "Les visiteurs découvrent nature et santé.",
    },
    bullets: {
      English: [
        "Family-centered experiences",
        "Nutrition and wellness awareness",
        "Outdoor educational engagement",
      ],
      Español: [
        "Experiencias familiares",
        "Nutrición y bienestar",
        "Educación al aire libre",
      ],
      Tagalog: [
        "Family experiences",
        "Wellness",
        "Outdoor learning",
      ],
      Italiano: [
        "Esperienze familiari",
        "Benessere",
        "Apprendimento esterno",
      ],
      עברית: [
        "חוויות משפחתיות",
        "בריאות ותזונה",
        "למידה חיצונית",
      ],
      Français: [
        "Expériences familiales",
        "Bien-être",
        "Éducation extérieure",
      ],
    },

    image: "/SAM_0225.JPG",
  },

  {
    id: 4,
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
        "The marketplace connects growers, products, tools, and healthy food access.",
      Español:
        "El mercado conecta productores y alimentos saludables.",
      Tagalog:
        "Nagdurugtong ang marketplace ng growers at pagkain.",
      Italiano:
        "Il mercato collega coltivatori e cibo sano.",
      עברית:
        "השוק מחבר מגדלים ומזון בריא.",
      Français:
        "Le marché relie producteurs et alimentation saine.",
    },
    bullets: {
      English: [
        "Fresh produce and seedlings",
        "Tools and demonstrations",
        "Future ordering and distribution systems",
      ],
      Español: [
        "Productos frescos",
        "Herramientas",
        "Sistemas futuros",
      ],
      Tagalog: [
        "Fresh produce",
        "Tools",
        "Future ordering",
      ],
      Italiano: [
        "Prodotti freschi",
        "Strumenti",
        "Sistemi futuri",
      ],
      עברית: [
        "תוצרת טרייה",
        "כלים והדגמות",
        "מערכות עתידיות",
      ],
      Français: [
        "Produits frais",
        "Outils",
        "Systèmes futurs",
      ],
    },

    image: "/SAM_0229.JPG",
  },
];

// KEEP YOUR EXISTING COMPONENT STRUCTURE
// ONLY REPLACE YOUR slides ARRAY WITH THIS ONE
