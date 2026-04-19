import React, { useEffect, useMemo, useState } from "react";

type Screen =
  | "home"
  | "story"
  | "guest"
  | "customer"
  | "grower"
  | "producer"
  | "youth"
  | "supervisor"
  | "marketplace"
  | "calendar"
  | "events"
  | "nutrition"
  | "recipes"
  | "weather";

type Language = "English" | "Español" | "Tagalog" | "Italiano" | "Patwa" | "Hebrew";

const images: Record<string, string> = {
  home: "/GrowArea2.jpg",
  story: "/SAM_0220.JPG",
  guest: "/SAM_0221.JPG",
  customer: "/SAM_0222.JPG",
  grower: "/SAM_0223.JPG",
  producer: "/SAM_0229.JPG",
  youth: "/SAM_0238.JPG",
  supervisor: "/SAM_0249.JPG",
  marketplace: "/SAM_0257.JPG",
  calendar: "/SAM_0274.JPG",
  events: "/SAM_0275.JPG",
  nutrition: "/SAM_0281.JPG",
  recipes: "/SAM_0282.JPG",
  weather: "/SAM_0288.JPG",
  g1: "/SAM_0289.JPG",
  g2: "/SAM_0290.JPG",
  g3: "/SAM_0291.JPG",
  g4: "/SAM_0293.JPG",
  g5: "/SAM_0301.JPG",
  g6: "/SAM_0303.JPG",
};

const guidedRoute: Screen[] = [
  "home",
  "story",
  "guest",
  "customer",
  "marketplace",
  "nutrition",
  "recipes",
  "grower",
  "calendar",
  "youth",
  "supervisor",
  "events",
  "weather",
];

const labels: Record<
  Language,
  {
    title: string;
    subtitle: string;
    explore: string;
    back: string;
    marketplaceButton: string;
    guidedTour: string;
    stopTour: string;
    voiceOn: string;
    voiceOff: string;
    farmGallery: string;
    farmConditions: string;
    nextExperience: string;
    upcomingEvent: string;
    countdown: string;
    moreFarm: string;
    story: string;
    guest: string;
    customer: string;
    grower: string;
    producer: string;
    youth: string;
    supervisor: string;
    marketplace: string;
    calendar: string;
    events: string;
    nutrition: string;
    recipes: string;
    weather: string;
    customerReturn: string;
  }
> = {
  English: {
    title: "Bronson Family Farm",
    subtitle: "A living ecosystem, not just a website.",
    explore: "Explore Pathway",
    back: "Back to Entrance",
    marketplaceButton: "Go to Marketplace",
    guidedTour: "Start Guided Tour",
    stopTour: "Stop Tour",
    voiceOn: "Voice On",
    voiceOff: "Voice Off",
    farmGallery: "Farm Gallery",
    farmConditions: "Farm Conditions",
    nextExperience: "Next Experience",
    upcomingEvent: "Growers Supply Market",
    countdown: "Countdown",
    moreFarm: "More from the Farm",
    story: "Our Story",
    guest: "Guest",
    customer: "Customer",
    grower: "Grower",
    producer: "Value-Added Producer",
    youth: "Youth Workforce",
    supervisor: "Supervisor",
    marketplace: "Marketplace",
    calendar: "Crop Planner",
    events: "Events",
    nutrition: "Health & Nutrition",
    recipes: "Recipes",
    weather: "Farm Conditions",
    customerReturn: "Made for return visits",
  },
  Español: {
    title: "Bronson Family Farm",
    subtitle: "Un ecosistema vivo, no solo un sitio web.",
    explore: "Explorar",
    back: "Volver al Inicio",
    marketplaceButton: "Ir al Mercado",
    guidedTour: "Iniciar Recorrido",
    stopTour: "Detener Recorrido",
    voiceOn: "Voz Activada",
    voiceOff: "Voz Desactivada",
    farmGallery: "Galería de la Finca",
    farmConditions: "Condiciones de la Finca",
    nextExperience: "Próxima Experiencia",
    upcomingEvent: "Growers Supply Market",
    countdown: "Cuenta regresiva",
    moreFarm: "Más de la Finca",
    story: "Nuestra Historia",
    guest: "Invitado",
    customer: "Cliente",
    grower: "Productor",
    producer: "Productor de Valor Agregado",
    youth: "Fuerza Laboral Juvenil",
    supervisor: "Supervisor",
    marketplace: "Mercado",
    calendar: "Planificador",
    events: "Eventos",
    nutrition: "Salud y Nutrición",
    recipes: "Recetas",
    weather: "Condiciones de la Finca",
    customerReturn: "Pensado para volver",
  },
  Tagalog: {
    title: "Bronson Family Farm",
    subtitle: "Isang buhay na ecosystem, hindi lang website.",
    explore: "Explore",
    back: "Balik sa Simula",
    marketplaceButton: "Punta sa Marketplace",
    guidedTour: "Start Guided Tour",
    stopTour: "Stop Tour",
    voiceOn: "Voice On",
    voiceOff: "Voice Off",
    farmGallery: "Farm Gallery",
    farmConditions: "Farm Conditions",
    nextExperience: "Next Experience",
    upcomingEvent: "Growers Supply Market",
    countdown: "Countdown",
    moreFarm: "More from the Farm",
    story: "Kuwento",
    guest: "Bisita",
    customer: "Customer",
    grower: "Grower",
    producer: "Producer",
    youth: "Youth Workforce",
    supervisor: "Supervisor",
    marketplace: "Marketplace",
    calendar: "Crop Planner",
    events: "Events",
    nutrition: "Health & Nutrition",
    recipes: "Recipes",
    weather: "Farm Conditions",
    customerReturn: "Babalikan ng customer",
  },
  Italiano: {
    title: "Bronson Family Farm",
    subtitle: "Un ecosistema vivo, non solo un sito web.",
    explore: "Esplora",
    back: "Torna all'Ingresso",
    marketplaceButton: "Vai al Mercato",
    guidedTour: "Avvia Tour",
    stopTour: "Ferma Tour",
    voiceOn: "Voce Attiva",
    voiceOff: "Voce Spenta",
    farmGallery: "Galleria della Fattoria",
    farmConditions: "Condizioni della Fattoria",
    nextExperience: "Prossima Esperienza",
    upcomingEvent: "Growers Supply Market",
    countdown: "Conto alla rovescia",
    moreFarm: "Altro dalla Fattoria",
    story: "La Nostra Storia",
    guest: "Ospite",
    customer: "Cliente",
    grower: "Coltivatore",
    producer: "Produttore",
    youth: "Forza Lavoro Giovanile",
    supervisor: "Supervisore",
    marketplace: "Mercato",
    calendar: "Pianificatore",
    events: "Eventi",
    nutrition: "Salute e Nutrizione",
    recipes: "Ricette",
    weather: "Condizioni della Fattoria",
    customerReturn: "Pensato per ritornare",
  },
  Patwa: {
    title: "Bronson Family Farm",
    subtitle: "A living ecosystem, not just one website.",
    explore: "Explore",
    back: "Back to Entrance",
    marketplaceButton: "Go a Marketplace",
    guidedTour: "Start Guided Tour",
    stopTour: "Stop Tour",
    voiceOn: "Voice On",
    voiceOff: "Voice Off",
    farmGallery: "Farm Gallery",
    farmConditions: "Farm Conditions",
    nextExperience: "Next Experience",
    upcomingEvent: "Growers Supply Market",
    countdown: "Countdown",
    moreFarm: "More from the Farm",
    story: "Wi Story",
    guest: "Guest",
    customer: "Customer",
    grower: "Grower",
    producer: "Producer",
    youth: "Youth Workforce",
    supervisor: "Supervisor",
    marketplace: "Marketplace",
    calendar: "Crop Planner",
    events: "Events",
    nutrition: "Health & Nutrition",
    recipes: "Recipes",
    weather: "Farm Conditions",
    customerReturn: "Built fi return visits",
  },
  Hebrew: {
    title: "Bronson Family Farm",
    subtitle: "מערכת חיה, לא רק אתר אינטרנט.",
    explore: "כניסה למסלול",
    back: "חזרה לכניסה",
    marketplaceButton: "לשוק",
    guidedTour: "התחל סיור",
    stopTour: "עצור סיור",
    voiceOn: "קול פועל",
    voiceOff: "קול כבוי",
    farmGallery: "גלריית החווה",
    farmConditions: "תנאי החווה",
    nextExperience: "החוויה הבאה",
    upcomingEvent: "Growers Supply Market",
    countdown: "ספירה לאחור",
    moreFarm: "עוד מהחווה",
    story: "הסיפור שלנו",
    guest: "אורח",
    customer: "לקוח",
    grower: "מגדל",
    producer: "יצרן",
    youth: "כוח עבודה לנוער",
    supervisor: "מפקח",
    marketplace: "שוק",
    calendar: "מתכנן גידולים",
    events: "אירועים",
    nutrition: "בריאות ותזונה",
    recipes: "מתכונים",
    weather: "תנאי החווה",
    customerReturn: "בנוי לחזרה",
  },
};

const content: Record<
  Screen,
