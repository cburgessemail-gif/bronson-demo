import React, { useEffect, useMemo, useRef, useState } from "react";

type LanguageKey = "en" | "es" | "tl" | "it" | "patwa" | "he";
type PageKey =
  | "home"
  | "story"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";
type LayerKey = "soundbite" | "intro" | "knowledge" | "purpose" | "next";

type LayerContent = {
  title: string;
  body: string;
  bullets?: string[];
};

type Pathway = {
  id: Exclude<PageKey, "home" | "story">;
  title: string;
  shortTitle: string;
  heroKicker: string;
  summary: string;
  mission: string;
  outcome: string;
  colorA: string;
  colorB: string;
  buttonBg: string;
  buttonText: string;
  layers: Record<LayerKey, LayerContent>;
};

const STORE_URL = "https://grownby.com/farms/bronson-family-farm/shop";
const WEATHER_URL =
  "https://www.accuweather.com/en/us/youngstown/44503/minute-weather-forecast/330121";

const languageOptions: { key: LanguageKey; label: string; rtl?: boolean }[] = [
  { key: "en", label: "English" },
  { key: "es", label: "Español" },
  { key: "tl", label: "Tagalog" },
  { key: "it", label: "Italiano" },
  { key: "patwa", label: "Patwa" },
  { key: "he", label: "עברית", rtl: true },
];

const ui = {
  en: {
    demoLabel: "Mission-Driven Ecosystem Demo",
    title: "Bronson Family Farm",
    subtitle:
      "An ecosystem for food, learning, wellness, workforce, and community return.",
    introTag: "Step into the ecosystem",
    heroTitleLine1: "Bronson Family Farm",
    heroTitleLine2: "is more than a farm.",
    heroBody:
      "A regenerative ecosystem connecting land, food access, marketplace activity, growers, youth workforce development, education, and partnership in Youngstown and the Mahoning Valley.",
    missionLabel: "Mission",
    missionBody:
      "Restore land, grow healthy food, create opportunity, and build community systems for the Mahoning Valley Area.",
    enterMarketplace: "Enter Marketplace",
    beginGuidedTour: "Begin Guided Tour",
    weather: "Weather",
    language: "Language",
    voice: "Guided Voice",
    voiceOn: "Narration On",
    voiceOff: "Narration Off",
    guidedOn: "Guided Tour On",
    guidedOff: "Guided Tour Off",
    choosePathway: "Choose a pathway",
    pathway: "Pathway",
    mission: "Mission",
    outcome: "Outcome",
    openPathway: "Open Pathway",
    openStore: "Open GrownBy Store",
    openWeather: "Open Weather",
    backHome: "Back Home",
    backAll: "All Pathways",
    nextLayer: "Next Layer",
    previousLayer: "Previous Layer",
    journeyLayers: "Journey Layers",
    pathwayProgress: "Pathway Progress",
    reasonToReturn:
      "Built so visitors, customers, growers, youth, and partners always have a reason to come back.",
    storyTag: "The story behind the farm",
    storyTitle: "The story behind the farm",
    storyBody:
      "Inspired by family farming traditions and shaped for Youngstown's future, this farm brings together legacy, land restoration, food access, agritourism, and practical community opportunity.",
    livingOverview: "Living ecosystem overview",
    livingBody:
      "This living farm ecosystem is designed to help guests, customers, growers, youth, volunteers, partners, and families move toward food self-sufficiency, economic opportunity, practical wellness, and stronger community connection.",
    familyLegacy: "Family legacy",
    familyLegacyBody:
      "The farm carries Bronson and Lorenzana legacy into a future-focused Youngstown vision.",
    landRestoration: "Land restoration",
    landRestorationBody:
      "The project restores land while creating food, education, and agritourism opportunity.",
    communityFuture: "Community future",
    communityFutureBody:
      "This is about more than a site. It is an ecosystem for long-term return and growth.",
    statsA: "118+",
    statsATitle: "acres of vision and possibility",
    statsABody:
      "A destination for food access, agritourism, education, workforce pathways, and community return.",
    statsB: "6",
    statsBTitle: "mission pathways",
    statsBBody: "Every pathway is built to achieve a specific outcome.",
    statsCTitle: "Return Again",
    statsCBody:
      "Built so people understand the mission, receive value, and have a reason to return again.",
    seasonalTitle: "Warm season planning active",
    seasonalBody:
      "Field prep, seedling movement, event readiness, and seasonal coordination are active.",
    calendarTitle: "Living schedule",
    calendarBody:
      "Seedlings, events, education, youth activities, and harvest pathways connect here.",
    langCardTitle: "Choose language",
    narratorHome:
      "Bronson Family Farm is more than a farm. It is a regenerative ecosystem for food, learning, workforce, and community return.",
  },
  es: {
    demoLabel: "Demostración del Ecosistema Impulsado por la Misión",
    title: "Bronson Family Farm",
    subtitle:
      "Un ecosistema para alimentos, aprendizaje, bienestar, trabajo y retorno comunitario.",
    introTag: "Entre al ecosistema",
    heroTitleLine1: "Bronson Family Farm",
    heroTitleLine2: "es más que una granja.",
    heroBody:
      "Un ecosistema regenerativo que conecta tierra, acceso a alimentos, actividad de mercado, productores, desarrollo laboral juvenil, educación y alianzas en Youngstown y el Valle de Mahoning.",
    missionLabel: "Misión",
    missionBody:
      "Restaurar la tierra, cultivar alimentos saludables, crear oportunidades y construir sistemas comunitarios para el Área del Valle de Mahoning.",
    enterMarketplace: "Entrar al Mercado",
    beginGuidedTour: "Comenzar Visita Guiada",
    weather: "Clima",
    language: "Idioma",
    voice: "Voz Guiada",
    voiceOn: "Narración Activa",
    voiceOff: "Narración Inactiva",
    guidedOn: "Tour Guiado Activo",
    guidedOff: "Tour Guiado Inactivo",
    choosePathway: "Elija una ruta",
    pathway: "Ruta",
    mission: "Misión",
    outcome: "Resultado",
    openPathway: "Abrir Ruta",
    openStore: "Abrir Tienda GrownBy",
    openWeather: "Abrir Clima",
    backHome: "Volver al Inicio",
    backAll: "Todas las Rutas",
    nextLayer: "Siguiente Capa",
    previousLayer: "Capa Anterior",
    journeyLayers: "Capas del Recorrido",
    pathwayProgress: "Progreso de la Ruta",
    reasonToReturn:
      "Construido para que visitantes, clientes, productores, jóvenes y socios siempre tengan una razón para regresar.",
    storyTag: "La historia detrás de la granja",
    storyTitle: "La historia detrás de la granja",
    storyBody:
      "Inspirada por tradiciones agrícolas familiares y pensada para el futuro de Youngstown, esta granja une legado, restauración de tierras, acceso a alimentos, agroturismo y oportunidad comunitaria práctica.",
    livingOverview: "Resumen del ecosistema vivo",
    livingBody:
      "Este ecosistema agrícola vivo está diseñado para ayudar a visitantes, clientes, productores, jóvenes, voluntarios, socios y familias a avanzar hacia autosuficiencia alimentaria, oportunidad económica, bienestar práctico y una conexión comunitaria más fuerte.",
    familyLegacy: "Legado familiar",
    familyLegacyBody:
      "La granja lleva el legado Bronson y Lorenzana hacia una visión de Youngstown orientada al futuro.",
    landRestoration: "Restauración de tierras",
    landRestorationBody:
      "El proyecto restaura la tierra mientras crea alimentos, educación y oportunidad agroturística.",
    communityFuture: "Futuro comunitario",
    communityFutureBody:
      "Esto es más que un sitio. Es un ecosistema para retorno y crecimiento a largo plazo.",
    statsA: "118+",
    statsATitle: "acres de visión y posibilidad",
    statsABody:
      "Un destino para acceso a alimentos, agroturismo, educación, rutas laborales y retorno comunitario.",
    statsB: "6",
    statsBTitle: "rutas de misión",
    statsBBody: "Cada ruta está construida para lograr un resultado específico.",
    statsCTitle: "Regresar",
    statsCBody:
      "Construido para que las personas entiendan la misión, reciban valor y tengan una razón para volver.",
    seasonalTitle: "Planificación de temporada cálida activa",
    seasonalBody:
      "La preparación del campo, el movimiento de plántulas, la preparación de eventos y la coordinación estacional están activas.",
    calendarTitle: "Horario vivo",
    calendarBody:
      "Plántulas, eventos, educación, actividades juveniles y rutas de cosecha se conectan aquí.",
    langCardTitle: "Elegir idioma",
    narratorHome:
      "Bronson Family Farm es más que una granja. Es un ecosistema regenerativo para alimentos, aprendizaje, trabajo y retorno comunitario.",
  },
  tl: {
    demoLabel: "Mission-Driven Ecosystem Demo",
    title: "Bronson Family Farm",
    subtitle:
      "Isang ecosystem para sa pagkain, pagkatuto, wellness, trabaho, at pagbabalik sa komunidad.",
    introTag: "Pumasok sa ecosystem",
    heroTitleLine1: "Bronson Family Farm",
    heroTitleLine2: "ay higit pa sa isang farm.",
    heroBody:
      "Isang regenerative ecosystem na nag-uugnay sa lupa, food access, marketplace activity, growers, youth workforce development, education, at partnership sa Youngstown at Mahoning Valley.",
    missionLabel: "Misyon",
    missionBody:
      "Ibalik ang sigla ng lupa, magtanim ng masustansyang pagkain, lumikha ng oportunidad, at bumuo ng mga sistemang pangkomunidad para sa Mahoning Valley Area.",
    enterMarketplace: "Pumasok sa Marketplace",
    beginGuidedTour: "Simulan ang Guided Tour",
    weather: "Panahon",
    language: "Wika",
    voice: "Gabay na Boses",
    voiceOn: "Narration On",
    voiceOff: "Narration Off",
    guidedOn: "Guided Tour On",
    guidedOff: "Guided Tour Off",
    choosePathway: "Pumili ng landas",
    pathway: "Landas",
    mission: "Misyon",
    outcome: "Kinalabasan",
    openPathway: "Buksan ang Landas",
    openStore: "Buksan ang GrownBy Store",
    openWeather: "Buksan ang Panahon",
    backHome: "Balik Home",
    backAll: "Lahat ng Landas",
    nextLayer: "Susunod na Layer",
    previousLayer: "Nakaraang Layer",
    journeyLayers: "Mga Layer ng Journey",
    pathwayProgress: "Pag-unlad ng Landas",
    reasonToReturn:
      "Ginawa upang ang mga bisita, customer, grower, youth, at partner ay laging may dahilan para bumalik.",
    storyTag: "Ang kuwento sa likod ng farm",
    storyTitle: "Ang kuwento sa likod ng farm",
    storyBody:
      "Hinubog ng tradisyon ng family farming at ng kinabukasan ng Youngstown, pinag-uugnay ng farm na ito ang pamana, land restoration, food access, agritourism, at praktikal na oportunidad sa komunidad.",
    livingOverview: "Buod ng living ecosystem",
    livingBody:
      "Ang living farm ecosystem na ito ay dinisenyo upang tulungan ang guest, customer, grower, youth, volunteer, partner, at pamilya tungo sa food self-sufficiency, economic opportunity, practical wellness, at mas matibay na koneksyon sa komunidad.",
    familyLegacy: "Pamana ng pamilya",
    familyLegacyBody:
      "Dinadala ng farm ang Bronson at Lorenzana legacy sa isang future-focused na pananaw para sa Youngstown.",
    landRestoration: "Pagpapanumbalik ng lupa",
    landRestorationBody:
      "Ibinabalik ng proyekto ang sigla ng lupa habang lumilikha ng pagkain, edukasyon, at agritourism opportunity.",
    communityFuture: "Kinabukasan ng komunidad",
    communityFutureBody:
      "Higit ito sa isang site. Isa itong ecosystem para sa pangmatagalang pagbabalik at paglago.",
    statsA: "118+",
    statsATitle: "acres ng vision at possibility",
    statsABody:
      "Isang destinasyon para sa food access, agritourism, education, workforce pathways, at pagbabalik sa komunidad.",
    statsB: "6",
    statsBTitle: "mission pathways",
    statsBBody: "Bawat pathway ay ginawa para sa tiyak na resulta.",
    statsCTitle: "Bumalik Muli",
    statsCBody:
      "Ginawa upang maunawaan ng mga tao ang misyon, makatanggap ng halaga, at magkaroon ng dahilan upang bumalik.",
    seasonalTitle: "Aktibo ang mainit na season planning",
    seasonalBody:
      "Aktibo ang field prep, galaw ng seedlings, event readiness, at seasonal coordination.",
    calendarTitle: "Buhay na iskedyul",
    calendarBody:
      "Magkakaugnay dito ang seedlings, events, education, youth activities, at harvest pathways.",
    langCardTitle: "Pumili ng wika",
    narratorHome:
      "Ang Bronson Family Farm ay higit pa sa isang farm. Isa itong regenerative ecosystem para sa pagkain, pagkatuto, trabaho, at pagbabalik sa komunidad.",
  },
  it: {
    demoLabel: "Demo Ecosistema Guidato dalla Missione",
    title: "Bronson Family Farm",
    subtitle:
      "Un ecosistema per cibo, apprendimento, benessere, lavoro e ritorno alla comunità.",
    introTag: "Entra nell'ecosistema",
    heroTitleLine1: "Bronson Family Farm",
    heroTitleLine2: "è più di una fattoria.",
    heroBody:
      "Un ecosistema rigenerativo che collega terra, accesso al cibo, attività di mercato, coltivatori, sviluppo del lavoro giovanile, educazione e partnership a Youngstown e nella Mahoning Valley.",
    missionLabel: "Missione",
    missionBody:
      "Ripristinare la terra, coltivare cibo sano, creare opportunità e costruire sistemi comunitari per l'area della Mahoning Valley.",
    enterMarketplace: "Entra nel Marketplace",
    beginGuidedTour: "Inizia il Tour Guidato",
    weather: "Meteo",
    language: "Lingua",
    voice: "Voce Guidata",
    voiceOn: "Narration On",
    voiceOff: "Narration Off",
    guidedOn: "Tour Guidato Attivo",
    guidedOff: "Tour Guidato Disattivo",
    choosePathway: "Scegli un percorso",
    pathway: "Percorso",
    mission: "Missione",
    outcome: "Risultato",
    openPathway: "Apri Percorso",
    openStore: "Apri Negozio GrownBy",
    openWeather: "Apri Meteo",
    backHome: "Torna Home",
    backAll: "Tutti i Percorsi",
    nextLayer: "Livello Successivo",
    previousLayer: "Livello Precedente",
    journeyLayers: "Livelli del Viaggio",
    pathwayProgress: "Progresso del Percorso",
    reasonToReturn:
      "Costruito affinché visitatori, clienti, coltivatori, giovani e partner abbiano sempre un motivo per tornare.",
    storyTag: "La storia dietro la fattoria",
    storyTitle: "La storia dietro la fattoria",
    storyBody:
      "Ispirata dalle tradizioni agricole familiari e modellata per il futuro di Youngstown, questa fattoria unisce eredità, ripristino della terra, accesso al cibo, agriturismo e opportunità comunitaria concreta.",
    livingOverview: "Panoramica dell'ecosistema vivo",
    livingBody:
      "Questo ecosistema agricolo vivo è progettato per aiutare ospiti, clienti, coltivatori, giovani, volontari, partner e famiglie a muoversi verso autosufficienza alimentare, opportunità economica, benessere pratico e connessione comunitaria più forte.",
    familyLegacy: "Eredità familiare",
    familyLegacyBody:
      "La fattoria porta l'eredità Bronson e Lorenzana in una visione di Youngstown orientata al futuro.",
    landRestoration: "Ripristino della terra",
    landRestorationBody:
      "Il progetto ripristina la terra creando al contempo cibo, educazione e opportunità agrituristica.",
    communityFuture: "Futuro della comunità",
    communityFutureBody:
      "Questo è più di un sito. È un ecosistema per ritorno e crescita a lungo termine.",
    statsA: "118+",
    statsATitle: "acri di visione e possibilità",
    statsABody:
      "Una destinazione per accesso al cibo, agriturismo, educazione, percorsi di lavoro e ritorno della comunità.",
    statsB: "6",
    statsBTitle: "percorsi della missione",
    statsBBody: "Ogni percorso è costruito per raggiungere un risultato specifico.",
    statsCTitle: "Tornare Ancora",
    statsCBody:
      "Costruito perché le persone comprendano la missione, ricevano valore e abbiano un motivo per tornare.",
    seasonalTitle: "Pianificazione della stagione calda attiva",
    seasonalBody:
      "Preparazione del campo, movimento delle piantine, prontezza per eventi e coordinamento stagionale sono attivi.",
    calendarTitle: "Programma vivo",
    calendarBody:
      "Piantine, eventi, educazione, attività giovanili e percorsi di raccolta si collegano qui.",
    langCardTitle: "Scegli lingua",
    narratorHome:
      "Bronson Family Farm è più di una fattoria. È un ecosistema rigenerativo per cibo, apprendimento, lavoro e ritorno della comunità.",
  },
  patwa: {
    demoLabel: "Mission-Driven Ecosystem Demo",
    title: "Bronson Family Farm",
    subtitle:
      "A one ecosystem fi food, learning, wellness, work, an community return.",
    introTag: "Step inna di ecosystem",
    heroTitleLine1: "Bronson Family Farm",
    heroTitleLine2: "a more than a farm.",
    heroBody:
      "A regenerative ecosystem weh connect land, food access, marketplace activity, growers, youth workforce development, education, an partnership inna Youngstown an Mahoning Valley.",
    missionLabel: "Mission",
    missionBody:
      "Restore di land, grow healthy food, create opportunity, an build community systems fi di Mahoning Valley Area.",
    enterMarketplace: "Enter Marketplace",
    beginGuidedTour: "Begin Guided Tour",
    weather: "Weather",
    language: "Language",
    voice: "Guided Voice",
    voiceOn: "Narration On",
    voiceOff: "Narration Off",
    guidedOn: "Guided Tour On",
    guidedOff: "Guided Tour Off",
    choosePathway: "Choose a pathway",
    pathway: "Pathway",
    mission: "Mission",
    outcome: "Outcome",
    openPathway: "Open Pathway",
    openStore: "Open GrownBy Store",
    openWeather: "Open Weather",
    backHome: "Back Home",
    backAll: "All Pathway",
    nextLayer: "Next Layer",
    previousLayer: "Previous Layer",
    journeyLayers: "Journey Layers",
    pathwayProgress: "Pathway Progress",
    reasonToReturn:
      "Build so visitors, customers, growers, youth, an partners always have reason fi come back.",
    storyTag: "Di story behind di farm",
    storyTitle: "Di story behind di farm",
    storyBody:
      "Inspired by family farming tradition an shape fi Youngstown future, dis farm bring together legacy, land restoration, food access, agritourism, an practical community opportunity.",
    livingOverview: "Living ecosystem overview",
    livingBody:
      "Dis living farm ecosystem design fi help guests, customers, growers, youth, volunteers, partners, an families move toward food self-sufficiency, economic opportunity, practical wellness, an stronger community connection.",
    familyLegacy: "Family legacy",
    familyLegacyBody:
      "Di farm carry Bronson an Lorenzana legacy into a future-focused Youngstown vision.",
    landRestoration: "Land restoration",
    landRestorationBody:
      "Di project restore land while create food, education, an agritourism opportunity.",
    communityFuture: "Community future",
    communityFutureBody:
      "Dis more than a site. It a ecosystem fi long-term return an growth.",
    statsA: "118+",
    statsATitle: "acres a vision an possibility",
    statsABody:
      "A destination fi food access, agritourism, education, workforce pathways, an community return.",
    statsB: "6",
    statsBTitle: "mission pathways",
    statsBBody: "Every pathway build fi reach a specific outcome.",
    statsCTitle: "Come Back Again",
    statsCBody:
      "Build so people understand di mission, get value, an have a reason fi come back again.",
    seasonalTitle: "Warm season planning active",
    seasonalBody:
      "Field prep, seedling movement, event readiness, an seasonal coordination active.",
    calendarTitle: "Living schedule",
    calendarBody:
      "Seedlings, events, education, youth activities, an harvest pathways connect yahso.",
    langCardTitle: "Choose language",
    narratorHome:
      "Bronson Family Farm a more than a farm. It a regenerative ecosystem fi food, learning, work, an community return.",
  },
  he: {
    demoLabel: "הדגמת מערכת אקולוגית מונחית משימה",
    title: "Bronson Family Farm",
    subtitle:
      "מערכת אקולוגית למזון, למידה, בריאות, תעסוקה וחזרה לקהילה.",
    introTag: "היכנסו למערכת האקולוגית",
    heroTitleLine1: "Bronson Family Farm",
    heroTitleLine2: "היא יותר מחווה.",
    heroBody:
      "מערכת אקולוגית רגנרטיבית המחברת אדמה, גישה למזון, פעילות שוק, מגדלים, פיתוח כוח עבודה לנוער, חינוך ושותפויות ביאנגסטאון ובעמק מהונינג.",
    missionLabel: "משימה",
    missionBody:
      "לשקם את האדמה, לגדל מזון בריא, ליצור הזדמנויות ולבנות מערכות קהילתיות עבור אזור עמק מהונינג.",
    enterMarketplace: "כניסה לשוק",
    beginGuidedTour: "התחלת סיור מודרך",
    weather: "מזג אוויר",
    language: "שפה",
    voice: "קול מודרך",
    voiceOn: "קריינות פעילה",
    voiceOff: "קריינות כבויה",
    guidedOn: "סיור מודרך פעיל",
    guidedOff: "סיור מודרך כבוי",
    choosePathway: "בחרו מסלול",
    pathway: "מסלול",
    mission: "משימה",
    outcome: "תוצאה",
    openPathway: "פתחו מסלול",
    openStore: "פתחו את חנות GrownBy",
    openWeather: "פתחו מזג אוויר",
    backHome: "חזרה לבית",
    backAll: "כל המסלולים",
    nextLayer: "השכבה הבאה",
    previousLayer: "השכבה הקודמת",
    journeyLayers: "שכבות המסע",
    pathwayProgress: "התקדמות המסלול",
    reasonToReturn:
      "נבנה כך שלמבקרים, לקוחות, מגדלים, נוער ושותפים תמיד תהיה סיבה לחזור.",
    storyTag: "הסיפור מאחורי החווה",
    storyTitle: "הסיפור מאחורי החווה",
    storyBody:
      "בהשראת מסורות חקלאות משפחתית ומתוך מבט לעתיד יאנגסטאון, החווה הזו מחברת בין מורשת, שיקום קרקע, גישה למזון, אגריטוריזם והזדמנות קהילתית מעשית.",
    livingOverview: "סקירת המערכת האקולוגית החיה",
    livingBody:
      "המערכת החיה הזו נועדה לעזור לאורחים, לקוחות, מגדלים, צעירים, מתנדבים, שותפים ומשפחות להתקדם לעבר עצמאות מזון, הזדמנות כלכלית, רווחה מעשית וקשר קהילתי חזק יותר.",
    familyLegacy: "מורשת משפחתית",
    familyLegacyBody:
      "החווה נושאת את מורשת ברונסון ולורנזנה אל חזון ממוקד עתיד של יאנגסטאון.",
    landRestoration: "שיקום הקרקע",
    landRestorationBody:
      "הפרויקט משקם את הקרקע תוך יצירת מזון, חינוך והזדמנות אגריטוריסטית.",
    communityFuture: "עתיד הקהילה",
    communityFutureBody:
      "זה יותר מאתר. זו מערכת אקולוגית לחזרה ולצמיחה לטווח ארוך.",
    statsA: "118+",
    statsATitle: "אקרים של חזון ואפשרות",
    statsABody:
      "יעד לגישה למזון, אגריטוריזם, חינוך, מסלולי עבודה וחזרה לקהילה.",
    statsB: "6",
    statsBTitle: "מסלולי משימה",
    statsBBody: "כל מסלול נבנה כדי להשיג תוצאה מסוימת.",
    statsCTitle: "לחזור שוב",
    statsCBody:
      "נבנה כדי שאנשים יבינו את המשימה, יקבלו ערך, ויהיה להם רצון לחזור שוב.",
    seasonalTitle: "תכנון עונה חמה פעיל",
    seasonalBody:
      "הכנת השדה, תנועת שתילים, היערכות לאירועים ותיאום עונתי פעילים.",
    calendarTitle: "לוח זמנים חי",
    calendarBody:
      "שתילים, אירועים, חינוך, פעילויות נוער ומסלולי קציר מתחברים כאן.",
    langCardTitle: "בחרו שפה",
    narratorHome:
      "Bronson Family Farm היא יותר מחווה. זו מערכת אקולוגית רגנרטיבית למזון, למידה, תעסוקה וחזרה לקהילה.",
  },
} as const;

const pathways: Pathway[] = [
  {
    id: "guest",
    title: "Guest",
    shortTitle: "Guest",
    heroKicker: "Guest Pathway",
    summary: "Understand the vision, story, and purpose of Bronson Family Farm.",
    mission:
      "Guests leave understanding why this land matters and why the work should continue.",
    outcome:
      "Visitors connect emotionally to the story, understand the mission, and see why the ecosystem belongs in the future of the region.",
    colorA: "#0d5f43",
    colorB: "#1c8b62",
    buttonBg: "#d8ec77",
    buttonText: "#183222",
    layers: {
      soundbite: {
        title: "You are entering more than a farm.",
        body:
          "This is a regenerative ecosystem where land, food, legacy, learning, and community purpose come together.",
      },
      intro: {
        title: "What guests feel first",
        body:
          "Guests are welcomed into a place of restoration, possibility, and meaning in Youngstown and the Mahoning Valley.",
        bullets: [
          "A living vision, not a static presentation",
          "A place-based story with purpose",
          "A destination worth returning to",
        ],
      },
      knowledge: {
        title: "What guests learn",
        body:
          "Guests learn how Bronson Family Farm connects agriculture, family legacy, food access, wellness, and community renewal.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "The guest pathway turns curiosity into understanding and helps people care about what they are seeing.",
      },
      next: {
        title: "What comes next",
        body:
          "Guests can continue into the marketplace, events, learning, partnership, and future engagement with the ecosystem.",
      },
    },
  },
  {
    id: "customer",
    title: "Customer",
    shortTitle: "Customer",
    heroKicker: "Customer Pathway",
    summary: "Guide people toward fresh food, nutrition, and repeat healthy choices.",
    mission:
      "Customers leave informed, connected to healthier food choices, and ready to return regularly.",
    outcome:
      "Customers understand how fresh food supports wellness and why returning to the farm strengthens healthier habits over time.",
    colorA: "#4f7e20",
    colorB: "#7cb342",
    buttonBg: "#f4ee89",
    buttonText: "#263118",
    layers: {
      soundbite: {
        title: "Food is not just a purchase.",
        body:
          "Fresh food is a daily choice connected to nutrition, well-being, and healthier living.",
      },
      intro: {
        title: "What customers experience",
        body:
          "Customers see a clear path from fresh produce to better choices for themselves and their families.",
        bullets: [
          "Simple food education",
          "Fresh versus overprocessed choices",
          "A reason to return again and again",
        ],
      },
      knowledge: {
        title: "What customers learn",
        body:
          "Customers learn the value of seasonal produce, local agriculture, and practical healthy habits.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "This pathway connects food access with understanding so people can make informed, repeat healthy choices.",
      },
      next: {
        title: "What comes next",
        body:
          "Customers can enter the marketplace, order through GrownBy, attend events, and reconnect with the farm regularly.",
      },
    },
  },
  {
    id: "marketplace",
    title: "Marketplace",
    shortTitle: "Marketplace",
    heroKicker: "Marketplace Pathway",
    summary: "Convert interest into purchasing power and long-term sustainability.",
    mission:
      "Marketplace visitors clearly understand how to buy, support the mission, and keep the ecosystem sustainable.",
    outcome:
      "Visitors see how purchases help sustain the farm, strengthen food access, and move mission into practical action.",
    colorA: "#9f6513",
    colorB: "#e39b1f",
    buttonBg: "#ffe08a",
    buttonText: "#3b2608",
    layers: {
      soundbite: {
        title: "This is where mission becomes movement.",
        body:
          "The marketplace turns interest into support, revenue, and long-term sustainability for the ecosystem.",
      },
      intro: {
        title: "What the marketplace means",
        body:
          "This is not just a shop. It is the bridge between story, support, fresh food, and recurring participation.",
        bullets: [
          "A buying pathway with purpose",
          "A visible bridge to GrownBy",
          "A sustainability engine for the farm",
        ],
      },
      knowledge: {
        title: "What visitors learn",
        body:
          "Visitors understand how produce, seasonal offerings, ordering, and community support strengthen the farm’s future.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "Mission alone does not sustain a farm. The marketplace converts belief into action and purchasing power.",
      },
      next: {
        title: "What comes next",
        body:
          "Visitors can move directly into the GrownBy store, explore products, purchase, and re-enter the wider ecosystem with confidence.",
      },
    },
  },
  {
    id: "grower",
    title: "Grower",
    shortTitle: "Grower",
    heroKicker: "Grower Pathway",
    summary: "Connect producers to opportunity and meaningful market participation.",
    mission:
      "Growers understand there is a real place for them to participate, sell, learn, and grow with others.",
    outcome:
      "Growers understand that this ecosystem is a place for collaboration, visibility, market opportunity, and shared learning.",
    colorA: "#0b6b65",
    colorB: "#19a7a0",
    buttonBg: "#9fe7e0",
    buttonText: "#123433",
    layers: {
      soundbite: {
        title: "Growers need more than land.",
        body:
          "They need structure, opportunity, connection, and a meaningful place within the ecosystem.",
      },
      intro: {
        title: "What growers experience",
        body:
          "Growers are welcomed into a pathway built around participation, market connection, and shared value.",
        bullets: [
          "Connection to opportunity",
          "Visibility and participation",
          "A sense of belonging in the ecosystem",
        ],
      },
      knowledge: {
        title: "What growers learn",
        body:
          "Growers see how Bronson Family Farm can connect to events, learning, market flow, and regional participation.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "This pathway reduces isolation and shows growers a practical reason to engage, contribute, and return.",
      },
      next: {
        title: "What comes next",
        body:
          "Growers can move toward collaboration, market participation, event activation, and stronger integration into the food ecosystem.",
      },
    },
  },
  {
    id: "youth",
    title: "Youth Workforce",
    shortTitle: "Youth Workforce",
    heroKicker: "Youth Workforce Pathway",
    summary: "Build skills, responsibility, and future readiness.",
    mission:
      "Young people and families understand that this pathway leads to real growth, real support, and future readiness.",
    outcome:
      "Young people and families see a real structure for skill-building, readiness, supervision, support, and future direction.",
    colorA: "#5b3b9c",
    colorB: "#8d5ed6",
    buttonBg: "#d8c7ff",
    buttonText: "#241639",
    layers: {
      soundbite: {
        title: "This pathway grows people, not just tasks.",
        body:
          "Youth workforce is about responsibility, confidence, support, experience, and future readiness.",
      },
      intro: {
        title: "What youth and families experience",
        body:
          "Young people encounter a hands-on environment supported by role clarity, structure, supervision, and encouragement.",
        bullets: [
          "Practical learning",
          "Supportive supervision",
          "A pathway toward readiness",
        ],
      },
      knowledge: {
        title: "What they learn",
        body:
          "Participants learn work habits, teamwork, agriculture, responsibility, logistics, and personal growth in a meaningful setting.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "This pathway creates a bridge between exposure and future readiness for youth who need opportunity and support.",
      },
      next: {
        title: "What comes next",
        body:
          "Participants move into deeper programming, guided roles, supervisor support, and continued development.",
      },
    },
  },
  {
    id: "partners",
    title: "Partners",
    shortTitle: "Partners",
    heroKicker: "Partnership Pathway",
    summary: "Align resources and collaboration for community benefit.",
    mission:
      "Partners understand where they fit, how their support matters, and what shared impact can look like.",
    outcome:
      "Partners see where their support fits and how collaboration can strengthen land restoration, food access, education, and community benefit.",
    colorA: "#1556a5",
    colorB: "#2f8bed",
    buttonBg: "#b9d9ff",
    buttonText: "#112d49",
    layers: {
      soundbite: {
        title: "Partnership here is visible and practical.",
        body:
          "Resources become visible outcomes for land, food, youth, learning, and community benefit.",
      },
      intro: {
        title: "What partners see",
        body:
          "Partners see a credible ecosystem where support can align with clear purpose and real local value.",
        bullets: [
          "A practical collaboration platform",
          "Visible community-facing outcomes",
          "A long-term place-based opportunity",
        ],
      },
      knowledge: {
        title: "What partners learn",
        body:
          "Partners understand how support can strengthen events, food systems, youth pathways, marketplace activity, and ecosystem growth.",
      },
      purpose: {
        title: "Why this pathway exists",
        body:
          "This pathway provides clarity so supporters and institutions can see where their involvement makes sense.",
      },
      next: {
        title: "What comes next",
        body:
          "Partners can move into sponsorship, collaboration, planning, programming support, and ecosystem-building decisions.",
      },
    },
  },
];

const layerOrder: LayerKey[] = [
  "soundbite",
  "intro",
  "knowledge",
  "purpose",
  "next",
];

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function gradient(a: string, b: string) {
  return `linear-gradient(135deg, ${a}, ${b})`;
}

function softShadow(color = "rgba(0,0,0,0.16)") {
  return `0 28px 60px ${color}`;
}

function useSpeech(language: LanguageKey, enabled: boolean) {
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis;
      synthRef.current.getVoices();
    }
  }, []);

  function speak(text: string) {
    if (!enabled || !synthRef.current) return;
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synthRef.current.getVoices();

    const targets: Record<LanguageKey, string[]> = {
      en: ["en-US", "English"],
      es: ["es", "Spanish"],
      tl: ["tl", "fil", "Tagalog"],
      it: ["it", "Italian"],
      patwa: ["en-JM", "Jamaica", "English"],
      he: ["he", "Hebrew", "iw"],
    };

    const wanted = targets[language];
    const voice =
      voices.find((v) =>
        wanted.some(
          (term) =>
            v.lang.toLowerCase().includes(term.toLowerCase()) ||
            v.name.toLowerCase().includes(term.toLowerCase())
        )
      ) || voices[0];

    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    }

    utterance.rate = language === "patwa" ? 0.92 : 0.97;
    utterance.pitch = 1;
    synthRef.current.speak(utterance);
  }

  function stop() {
    synthRef.current?.cancel();
  }

  return { speak, stop };
}

function PillButton({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 18px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.12)",
        background: active ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.08)",
        color: active ? "#133427" : "#fff",
        fontSize: 15,
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 180ms ease",
      }}
    >
      {children}
    </button>
  );
}

function Panel({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 28,
        boxShadow: softShadow("rgba(0,0,0,0.16)"),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function WhiteCard({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 30,
        border: "1px solid rgba(12,35,23,0.06)",
        boxShadow: "0 22px 50px rgba(0,0,0,0.08)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<PageKey>("home");
  const [language, setLanguage] = useState<LanguageKey>("en");
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [guidedEnabled, setGuidedEnabled] = useState(true);
  const [layer, setLayer] = useState<LayerKey>("soundbite");

  const activePathway = pathways.find((p) => p.id === page);
  const text = ui[language];
  const langMeta = languageOptions.find((l) => l.key === language);
  const dir = langMeta?.rtl ? "rtl" : "ltr";
  const { speak, stop } = useSpeech(language, voiceEnabled);

  const progress = useMemo(() => {
    return ((layerOrder.indexOf(layer) + 1) / layerOrder.length) * 100;
  }, [layer]);

  useEffect(() => {
    if (!guidedEnabled || !voiceEnabled) return;

    if (page === "home") {
      speak(text.narratorHome);
      return;
    }

    if (page === "story") {
      speak(`${text.storyTitle}. ${text.storyBody}. ${text.livingBody}`);
      return;
    }

    if (activePathway) {
      const l = activePathway.layers[layer];
      speak(`${activePathway.title}. ${l.title}. ${l.body}`);
    }

    return () => stop();
  }, [page, layer, language, guidedEnabled, voiceEnabled]);

  const heroBackground = gradient("#083827", "#0e704d");

  return (
    <div
      dir={dir}
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(10,98,66,0.10), transparent 22%), radial-gradient(circle at bottom right, rgba(217,184,79,0.10), transparent 25%), #f3eee6",
        color: "#163428",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: 1500,
          margin: "0 auto",
          padding: "20px 20px 40px",
        }}
      >
        <div
          style={{
            background: gradient("#06261c", "#0b5d3f"),
            color: "#fff",
            borderRadius: 30,
            padding: 28,
            boxShadow: softShadow("rgba(0,0,0,0.18)"),
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 20,
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div style={{ minWidth: 280, flex: "1 1 520px" }}>
              <div
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.28em",
                  color: "#c8e5d1",
                  marginBottom: 10,
                }}
              >
                {text.demoLabel}
              </div>
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  marginBottom: 8,
                }}
              >
                {text.title}
              </div>
              <div
                style={{
                  fontSize: 20,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.86)",
                  maxWidth: 820,
                }}
              >
                {text.subtitle}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 14,
                flex: "1 1 520px",
                minWidth: 300,
              }}
            >
              <Panel style={{ padding: 14 }}>
                <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>
                  {text.weather}
                </div>
                <button
                  onClick={() => openExternal(WEATHER_URL)}
                  style={{
                    marginTop: 8,
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.08)",
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Youngstown
                </button>
              </Panel>

              <Panel style={{ padding: 14 }}>
                <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>
                  {text.language}
                </div>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as LanguageKey)}
                  style={{
                    marginTop: 8,
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.08)",
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: 700,
                    outline: "none",
                  }}
                >
                  {languageOptions.map((option) => (
                    <option
                      key={option.key}
                      value={option.key}
                      style={{ color: "#173529", background: "#f8faf8" }}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </Panel>

              <Panel style={{ padding: 14 }}>
                <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>
                  {text.voice}
                </div>
                <button
                  onClick={() => setVoiceEnabled((v) => !v)}
                  style={{
                    marginTop: 8,
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: voiceEnabled ? "rgba(216,236,119,0.95)" : "rgba(255,255,255,0.08)",
                    color: voiceEnabled ? "#173529" : "#fff",
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {voiceEnabled ? text.voiceOn : text.voiceOff}
                </button>
              </Panel>

              <Panel style={{ padding: 14 }}>
                <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>
                  Guided Tour
                </div>
                <button
                  onClick={() => setGuidedEnabled((v) => !v)}
                  style={{
                    marginTop: 8,
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: guidedEnabled ? "rgba(216,236,119,0.95)" : "rgba(255,255,255,0.08)",
                    color: guidedEnabled ? "#173529" : "#fff",
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {guidedEnabled ? text.guidedOn : text.guidedOff}
                </button>
              </Panel>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 22,
            }}
          >
            <PillButton active={page === "home"} onClick={() => setPage("home")}>
              Home
            </PillButton>
            <PillButton active={page === "story"} onClick={() => setPage("story")}>
              Our Story
            </PillButton>
            {pathways.map((p) => (
              <PillButton
                key={p.id}
                active={page === p.id}
                onClick={() => {
                  setPage(p.id);
                  setLayer("soundbite");
                }}
              >
                {p.shortTitle}
              </PillButton>
            ))}
          </div>
        </div>

        {page === "home" && (
          <div style={{ marginTop: 28 }}>
            <div
              style={{
                background: heroBackground,
                borderRadius: 36,
                padding: 40,
                color: "#fff",
                boxShadow: softShadow("rgba(0,0,0,0.18)"),
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 0.9fr",
                  gap: 26,
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "10px 18px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.10)",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#e5f1d3",
                    }}
                  >
                    {text.introTag}
                  </div>

                  <div
                    style={{
                      marginTop: 26,
                      fontSize: 72,
                      lineHeight: 0.94,
                      fontWeight: 900,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    <div>{text.heroTitleLine1}</div>
                    <div>{text.heroTitleLine2}</div>
                  </div>

                  <div
                    style={{
                      marginTop: 28,
                      fontSize: 22,
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.86)",
                      maxWidth: 960,
                    }}
                  >
                    {text.heroBody}
                  </div>

                  <Panel
                    style={{
                      marginTop: 28,
                      padding: 24,
                      background: "rgba(255,255,255,0.10)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        letterSpacing: "0.24em",
                        textTransform: "uppercase",
                        color: "#ffe08a",
                      }}
                    >
                      {text.missionLabel}
                    </div>
                    <div
                      style={{
                        marginTop: 16,
                        fontSize: 20,
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.92)",
                      }}
                    >
                      {text.missionBody}
                    </div>
                  </Panel>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 16,
                      marginTop: 28,
                    }}
                  >
                    <button
                      onClick={() => {
                        setPage("marketplace");
                        setLayer("soundbite");
                      }}
                      style={{
                        padding: "18px 28px",
                        borderRadius: 22,
                        border: "none",
                        background: "#f0d36f",
                        color: "#1f2414",
                        fontWeight: 800,
                        fontSize: 18,
                        cursor: "pointer",
                        boxShadow: "0 16px 30px rgba(0,0,0,0.14)",
                      }}
                    >
                      {text.enterMarketplace}
                    </button>

                    <button
                      onClick={() => {
                        setGuidedEnabled(true);
                        setVoiceEnabled(true);
                        speak(text.narratorHome);
                      }}
                      style={{
                        padding: "18px 28px",
                        borderRadius: 22,
                        border: "1px solid rgba(255,255,255,0.14)",
                        background: "rgba(255,255,255,0.10)",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 18,
                        cursor: "pointer",
                      }}
                    >
                      {text.beginGuidedTour}
                    </button>
                  </div>
                </div>

                <div style={{ display: "grid", gap: 20 }}>
                  <Panel style={{ padding: 24 }}>
                    <div
                      style={{
                        fontSize: 64,
                        lineHeight: 1,
                        fontWeight: 900,
                        color: "#ffe49b",
                      }}
                    >
                      {text.statsA}
                    </div>
                    <div
                      style={{
                        marginTop: 10,
                        fontSize: 20,
                        fontWeight: 800,
                      }}
                    >
                      {text.statsATitle}
                    </div>
                    <div
                      style={{
                        marginTop: 16,
                        fontSize: 18,
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      {text.statsABody}
                    </div>
                  </Panel>

                  <Panel style={{ padding: 24 }}>
                    <div
                      style={{
                        fontSize: 64,
                        lineHeight: 1,
                        fontWeight: 900,
                        color: "#ffe49b",
                      }}
                    >
                      {text.statsB}
                    </div>
                    <div
                      style={{
                        marginTop: 10,
                        fontSize: 20,
                        fontWeight: 800,
                      }}
                    >
                      {text.statsBTitle}
                    </div>
                    <div
                      style={{
                        marginTop: 16,
                        fontSize: 18,
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      {text.statsBBody}
                    </div>
                  </Panel>

                  <Panel style={{ padding: 24 }}>
                    <div
                      style={{
                        fontSize: 24,
                        fontWeight: 800,
                      }}
                    >
                      {text.statsCTitle}
                    </div>
                    <div
                      style={{
                        marginTop: 16,
                        fontSize: 18,
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      {text.statsCBody}
                    </div>
                  </Panel>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 20,
                marginTop: 22,
              }}
            >
              <Panel
                style={{
                  padding: 24,
                  background: gradient("rgba(9,53,37,0.86)", "rgba(19,87,61,0.68)"),
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "#d7e8a5",
                    marginBottom: 14,
                  }}
                >
                  Seasonal Conditions
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>
                  {text.seasonalTitle}
                </div>
                <div style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.82)" }}>
                  {text.seasonalBody}
                </div>
              </Panel>

              <Panel
                style={{
                  padding: 24,
                  background: gradient("rgba(34,52,36,0.72)", "rgba(98,115,86,0.56)"),
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "#e2e5b7",
                    marginBottom: 14,
                  }}
                >
                  Farm Calendar
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>
                  {text.calendarTitle}
                </div>
                <div style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.82)" }}>
                  {text.calendarBody}
                </div>
              </Panel>

              <Panel
                style={{
                  padding: 24,
                  background: gradient("rgba(68,88,49,0.72)", "rgba(101,122,79,0.56)"),
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "#f0eab8",
                    marginBottom: 14,
                  }}
                >
                  {text.langCardTitle}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  {languageOptions.map((option) => (
                    <button
                      key={option.key}
                      onClick={() => setLanguage(option.key)}
                      style={{
                        padding: "10px 14px",
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,0.14)",
                        background:
                          language === option.key
                            ? "rgba(255,255,255,0.16)"
                            : "rgba(255,255,255,0.08)",
                        color: "#fff",
                        fontSize: 16,
                        cursor: "pointer",
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </Panel>
            </div>

            <div style={{ marginTop: 26 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 18,
                  marginBottom: 18,
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      textTransform: "uppercase",
                      letterSpacing: "0.24em",
                      color: "#3f7b5d",
                      fontWeight: 800,
                    }}
                  >
                    {text.choosePathway}
                  </div>
                  <div
                    style={{
                      marginTop: 12,
                      width: 260,
                      height: 8,
                      borderRadius: 999,
                      background: "#dce6dd",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 999,
                        background: gradient("#1a8058", "#a3d34d"),
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => openExternal(STORE_URL)}
                  style={{
                    padding: "14px 18px",
                    borderRadius: 16,
                    border: "none",
                    background: "#0f5d3f",
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {text.openStore}
                </button>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: 20,
                }}
              >
                {pathways.map((p, index) => (
                  <div
                    key={p.id}
                    style={{
                      background: gradient(p.colorA, p.colorB),
                      borderRadius: 30,
                      padding: 1,
                      boxShadow: softShadow("rgba(0,0,0,0.10)"),
                    }}
                  >
                    <WhiteCard style={{ padding: 26, height: "100%" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          gap: 16,
                        }}
                      >
                        <div
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: 999,
                            background: "#f5faf6",
                            border: "1px solid rgba(0,0,0,0.05)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 800,
                            color: "#2f6d54",
                          }}
                        >
                          {index + 1}
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            textTransform: "uppercase",
                            letterSpacing: "0.22em",
                            color: "#7d8d83",
                            fontWeight: 700,
                          }}
                        >
                          {text.pathway}
                        </div>
                      </div>

                      <div
                        style={{
                          marginTop: 22,
                          fontSize: 36,
                          lineHeight: 1.05,
                          fontWeight: 800,
                          color: "#183528",
                        }}
                      >
                        {p.title}
                      </div>

                      <div
                        style={{
                          marginTop: 18,
                          fontSize: 18,
                          lineHeight: 1.7,
                          color: "#5d6f64",
                        }}
                      >
                        {p.summary}
                      </div>

                      <div style={{ marginTop: 22 }}>
                        <div
                          style={{
                            fontSize: 12,
                            textTransform: "uppercase",
                            letterSpacing: "0.22em",
                            color: "#8b998f",
                            fontWeight: 700,
                          }}
                        >
                          {text.mission}
                        </div>
                        <div
                          style={{
                            marginTop: 10,
                            fontSize: 16,
                            lineHeight: 1.7,
                            color: "#384d42",
                          }}
                        >
                          {p.mission}
                        </div>
                      </div>

                      <div style={{ marginTop: 22 }}>
                        <div
                          style={{
                            fontSize: 12,
                            textTransform: "uppercase",
                            letterSpacing: "0.22em",
                            color: "#8b998f",
                            fontWeight: 700,
                          }}
                        >
                          {text.outcome}
                        </div>
                        <div
                          style={{
                            marginTop: 10,
                            fontSize: 16,
                            lineHeight: 1.7,
                            color: "#5d6f64",
                          }}
                        >
                          {p.outcome}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setPage(p.id);
                          setLayer("soundbite");
                        }}
                        style={{
                          marginTop: 24,
                          padding: "14px 18px",
                          borderRadius: 18,
                          border: "none",
                          background: p.buttonBg,
                          color: p.buttonText,
                          fontSize: 16,
                          fontWeight: 800,
                          cursor: "pointer",
                          width: "100%",
                        }}
                      >
                        {text.openPathway} →
                      </button>
                    </WhiteCard>
                  </div>
                ))}
              </div>

              <Panel
                style={{
                  marginTop: 20,
                  padding: 22,
                  background: "rgba(255,255,255,0.70)",
                  color: "#617267",
                  fontSize: 16,
                  lineHeight: 1.7,
                  textAlign: "center",
                }}
              >
                {text.reasonToReturn}
              </Panel>
            </div>
          </div>
        )}

        {page === "story" && (
          <div style={{ marginTop: 28 }}>
            <div
              style={{
                background: gradient("#244247", "#6d96a7"),
                borderRadius: 36,
                padding: 38,
                color: "#fff",
                position: "relative",
                overflow: "hidden",
                boxShadow: softShadow("rgba(0,0,0,0.18)"),
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.24))",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: "1.4fr 0.9fr",
                  gap: 26,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "10px 16px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.14)",
                      fontSize: 13,
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#dce4df",
                    }}
                  >
                    {text.storyTag}
                  </div>

                  <div
                    style={{
                      marginTop: 24,
                      fontSize: 72,
                      lineHeight: 0.95,
                      fontWeight: 900,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {text.storyTitle}
                  </div>

                  <div
                    style={{
                      marginTop: 28,
                      fontSize: 22,
                      lineHeight: 1.75,
                      color: "rgba(255,255,255,0.88)",
                      maxWidth: 920,
                    }}
                  >
                    {text.storyBody}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 14,
                      marginTop: 28,
                    }}
                  >
                    <button
                      onClick={() => {
                        setGuidedEnabled(true);
                        setVoiceEnabled(true);
                        speak(`${text.storyTitle}. ${text.storyBody}`);
                      }}
                      style={{
                        padding: "16px 24px",
                        borderRadius: 18,
                        border: "none",
                        background: "#fff",
                        color: "#183528",
                        fontSize: 18,
                        fontWeight: 800,
                        cursor: "pointer",
                      }}
                    >
                      {text.beginGuidedTour}
                    </button>
                    <button
                      onClick={() => setPage("marketplace")}
                      style={{
                        padding: "16px 24px",
                        borderRadius: 18,
                        border: "1px solid rgba(255,255,255,0.16)",
                        background: "rgba(255,255,255,0.10)",
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      {text.enterMarketplace}
                    </button>
                  </div>
                </div>

                <div style={{ display: "grid", gap: 16 }}>
                  <Panel style={{ padding: 22 }}>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#d7e8d5",
                        marginBottom: 12,
                      }}
                    >
                      A place people want to return to
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
                      {text.livingOverview}
                    </div>
                    <div style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.86)" }}>
                      {text.livingBody}
                    </div>
                  </Panel>

                  <Panel style={{ padding: 22 }}>
                    <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 10 }}>
                      {text.familyLegacy}
                    </div>
                    <div style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.86)" }}>
                      {text.familyLegacyBody}
                    </div>
                  </Panel>

                  <Panel style={{ padding: 22 }}>
                    <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 10 }}>
                      {text.landRestoration}
                    </div>
                    <div style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.86)" }}>
                      {text.landRestorationBody}
                    </div>
                  </Panel>

                  <Panel style={{ padding: 22 }}>
                    <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 10 }}>
                      {text.communityFuture}
                    </div>
                    <div style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.86)" }}>
                      {text.communityFutureBody}
                    </div>
                  </Panel>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePathway && (
          <div style={{ marginTop: 28 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "0.9fr 1.2fr",
                gap: 24,
              }}
            >
              <div style={{ display: "grid", gap: 20 }}>
                <div
                  style={{
                    background: gradient(activePathway.colorA, activePathway.colorB),
                    borderRadius: 32,
                    padding: 1,
                    boxShadow: softShadow("rgba(0,0,0,0.12)"),
                  }}
                >
                  <WhiteCard style={{ padding: 26 }}>
                    <div
                      style={{
                        fontSize: 13,
                        textTransform: "uppercase",
                        letterSpacing: "0.24em",
                        color: "#4b8a70",
                        fontWeight: 800,
                      }}
                    >
                      {activePathway.heroKicker}
                    </div>

                    <div
                      style={{
                        marginTop: 16,
                        fontSize: 48,
                        lineHeight: 1,
                        fontWeight: 900,
                        letterSpacing: "-0.04em",
                        color: "#173629",
                      }}
                    >
                      {activePathway.title}
                    </div>

                    <div
                      style={{
                        marginTop: 18,
                        fontSize: 20,
                        lineHeight: 1.7,
                        color: "#5c6f64",
                      }}
                    >
                      {activePathway.summary}
                    </div>

                    <div
                      style={{
                        marginTop: 22,
                        padding: 18,
                        borderRadius: 22,
                        background: "#f6faf7",
                        border: "1px solid rgba(0,0,0,0.04)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          textTransform: "uppercase",
                          letterSpacing: "0.22em",
                          color: "#86948b",
                          fontWeight: 700,
                          marginBottom: 8,
                        }}
                      >
                        {text.mission}
                      </div>
                      <div style={{ fontSize: 16, lineHeight: 1.7, color: "#384d42" }}>
                        {activePathway.mission}
                      </div>
                    </div>

                    <div
                      style={{
                        marginTop: 16,
                        padding: 18,
                        borderRadius: 22,
                        background: "#f6faf7",
                        border: "1px solid rgba(0,0,0,0.04)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          textTransform: "uppercase",
                          letterSpacing: "0.22em",
                          color: "#86948b",
                          fontWeight: 700,
                          marginBottom: 8,
                        }}
                      >
                        {text.outcome}
                      </div>
                      <div style={{ fontSize: 16, lineHeight: 1.7, color: "#5d6f64" }}>
                        {activePathway.outcome}
                      </div>
                    </div>
                  </WhiteCard>
                </div>

                <WhiteCard style={{ padding: 22 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 12,
                        textTransform: "uppercase",
                        letterSpacing: "0.24em",
                        color: "#85948a",
                        fontWeight: 800,
                      }}
                    >
                      {text.pathwayProgress}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#5c6f64" }}>
                      {Math.round(progress)}%
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: 12,
                      width: "100%",
                      height: 10,
                      background: "#e3ebe3",
                      borderRadius: 999,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${progress}%`,
                        height: "100%",
                        borderRadius: 999,
                        background: gradient(activePathway.colorA, activePathway.colorB),
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gap: 10,
                      marginTop: 16,
                    }}
                  >
                    {layerOrder.map((item) => (
                      <button
                        key={item}
                        onClick={() => setLayer(item)}
                        style={{
                          padding: "14px 16px",
                          borderRadius: 18,
                          border:
                            layer === item
                              ? "1px solid rgba(0,0,0,0)"
                              : "1px solid rgba(0,0,0,0.05)",
                          background:
                            layer === item
                              ? gradient(activePathway.colorA, activePathway.colorB)
                              : "#f5f8f5",
                          color: layer === item ? "#fff" : "#5c6f64",
                          textTransform: "uppercase",
                          letterSpacing: "0.14em",
                          fontWeight: 800,
                          fontSize: 12,
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </WhiteCard>

                <WhiteCard style={{ padding: 22 }}>
                  <div
                    style={{
                      display: "grid",
                      gap: 12,
                    }}
                  >
                    <button
                      onClick={() => setPage("home")}
                      style={{
                        padding: "15px 16px",
                        borderRadius: 18,
                        border: "1px solid rgba(0,0,0,0.05)",
                        background: "#f5f8f5",
                        color: "#53675d",
                        fontSize: 16,
                        fontWeight: 700,
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      ← {text.backHome}
                    </button>

                    <button
                      onClick={() => setPage("story")}
                      style={{
                        padding: "15px 16px",
                        borderRadius: 18,
                        border: "1px solid rgba(0,0,0,0.05)",
                        background: "#f5f8f5",
                        color: "#53675d",
                        fontSize: 16,
                        fontWeight: 700,
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      {text.storyTitle}
                    </button>

                    <button
                      onClick={() => openExternal(WEATHER_URL)}
                      style={{
                        padding: "15px 16px",
                        borderRadius: 18,
                        border: "1px solid rgba(0,0,0,0.05)",
                        background: "#f5f8f5",
                        color: "#53675d",
                        fontSize: 16,
                        fontWeight: 700,
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      {text.openWeather}
                    </button>

                    {page === "marketplace" ? (
                      <button
                        onClick={() => openExternal(STORE_URL)}
                        style={{
                          padding: "15px 16px",
                          borderRadius: 18,
                          border: "none",
                          background: activePathway.buttonBg,
                          color: activePathway.buttonText,
                          fontSize: 16,
                          fontWeight: 800,
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        {text.openStore}
                      </button>
                    ) : (
                      <button
                        onClick={() => setPage("marketplace")}
                        style={{
                          padding: "15px 16px",
                          borderRadius: 18,
                          border: "none",
                          background: "#0f5d3f",
                          color: "#fff",
                          fontSize: 16,
                          fontWeight: 800,
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        {text.enterMarketplace}
                      </button>
                    )}
                  </div>
                </WhiteCard>
              </div>

              <div style={{ display: "grid", gap: 20 }}>
                <div
                  style={{
                    background: gradient(activePathway.colorA, activePathway.colorB),
                    borderRadius: 34,
                    color: "#fff",
                    padding: 34,
                    boxShadow: softShadow("rgba(0,0,0,0.15)"),
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      textTransform: "uppercase",
                      letterSpacing: "0.24em",
                      color: "rgba(255,255,255,0.76)",
                      fontWeight: 800,
                    }}
                  >
                    {text.journeyLayers}
                  </div>

                  <div
                    style={{
                      marginTop: 16,
                      fontSize: 52,
                      lineHeight: 1.02,
                      fontWeight: 900,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {activePathway.layers[layer].title}
                  </div>

                  <div
                    style={{
                      marginTop: 24,
                      fontSize: 21,
                      lineHeight: 1.78,
                      color: "rgba(255,255,255,0.90)",
                      maxWidth: 980,
                    }}
                  >
                    {activePathway.layers[layer].body}
                  </div>

                  {activePathway.layers[layer].bullets && (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, minmax(0,1fr))",
                        gap: 16,
                        marginTop: 24,
                      }}
                    >
                      {activePathway.layers[layer].bullets!.map((bullet) => (
                        <Panel key={bullet} style={{ padding: 18 }}>
                          <div
                            style={{
                              fontSize: 17,
                              lineHeight: 1.65,
                              color: "#fff",
                            }}
                          >
                            {bullet}
                          </div>
                        </Panel>
                      ))}
                    </div>
                  )}

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 14,
                      marginTop: 26,
                    }}
                  >
                    <button
                      onClick={() => {
                        const i = layerOrder.indexOf(layer);
                        const next = layerOrder[Math.min(i + 1, layerOrder.length - 1)];
                        setLayer(next);
                      }}
                      style={{
                        padding: "16px 22px",
                        borderRadius: 18,
                        border: "none",
                        background: "rgba(255,255,255,0.92)",
                        color: "#173529",
                        fontSize: 16,
                        fontWeight: 800,
                        cursor: "pointer",
                      }}
                    >
                      {text.nextLayer} →
                    </button>

                    <button
                      onClick={() => {
                        const i = layerOrder.indexOf(layer);
                        const prev = layerOrder[Math.max(i - 1, 0)];
                        setLayer(prev);
                      }}
                      style={{
                        padding: "16px 22px",
                        borderRadius: 18,
                        border: "1px solid rgba(255,255,255,0.16)",
                        background: "rgba(255,255,255,0.10)",
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 800,
                        cursor: "pointer",
                      }}
                    >
                      ← {text.previousLayer}
                    </button>

                    {page === "marketplace" && (
                      <button
                        onClick={() => openExternal(STORE_URL)}
                        style={{
                          padding: "16px 22px",
                          borderRadius: 18,
                          border: "none",
                          background: activePathway.buttonBg,
                          color: activePathway.buttonText,
                          fontSize: 16,
                          fontWeight: 800,
                          cursor: "pointer",
                        }}
                      >
                        {text.openStore}
                      </button>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 20,
                  }}
                >
                  <WhiteCard style={{ padding: 24 }}>
                    <div
                      style={{
                        fontSize: 12,
                        textTransform: "uppercase",
                        letterSpacing: "0.22em",
                        color: "#87958b",
                        fontWeight: 800,
                      }}
                    >
                      {text.mission}
                    </div>
                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 18,
                        lineHeight: 1.8,
                        color: "#42564b",
                      }}
                    >
                      {activePathway.mission}
                    </div>
                  </WhiteCard>

                  <WhiteCard style={{ padding: 24 }}>
                    <div
                      style={{
                        fontSize: 12,
                        textTransform: "uppercase",
                        letterSpacing: "0.22em",
                        color: "#87958b",
                        fontWeight: 800,
                      }}
                    >
                      {text.outcome}
                    </div>
                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 18,
                        lineHeight: 1.8,
                        color: "#42564b",
                      }}
                    >
                      {activePathway.outcome}
                    </div>
                  </WhiteCard>
                </div>

                <Panel
                  style={{
                    padding: 24,
                    background: "rgba(255,255,255,0.72)",
                    color: "#596c61",
                    fontSize: 17,
                    lineHeight: 1.7,
                  }}
                >
                  {text.reasonToReturn}
                </Panel>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
