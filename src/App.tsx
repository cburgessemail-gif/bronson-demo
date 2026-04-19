import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Leaf,
  ShoppingBasket,
  Users,
  Sprout,
  CalendarDays,
  CloudSun,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Play,
  Volume2,
  TreePine,
  ChefHat,
  Tractor,
  Store,
  CheckCircle2,
} from "lucide-react";

type LanguageKey =
  | "en"
  | "es"
  | "tl"
  | "it"
  | "patwa"
  | "he";

type RoleKey =
  | "guest"
  | "customer"
  | "grower"
  | "producer"
  | "youth"
  | "supervisor";

type ViewKey =
  | "home"
  | "story"
  | "ecosystem"
  | "marketplace"
  | "calendar"
  | "weather"
  | "events"
  | "roleHub"
  | RoleKey;

const images = {
  hero: "/SAM_0301.JPG",
  story: "/SAM_0293.JPG",
  grow: "/SAM_0289.JPG",
  market: "/SAM_0313.JPG",
  culinary: "/SAM_0305.JPG",
  youth: "/SAM_0282.JPG",
  customer: "/SAM_0303.JPG",
  guest: "/SAM_0275.JPG",
  grower: "/SAM_0288.JPG",
  producer: "/SAM_0229.JPG",
  supervisor: "/SAM_0274.JPG",
  community: "/SAM_0310.JPG",
  events: "/SAM_0291.JPG",
  land: "/GrowArea2.jpg",
};

const copy = {
  en: {
    appTitle: "Bronson Family Farm",
    appSubtitle: "A living ecosystem for growers, families, food access, learning, and agritourism.",
    enterDemo: "Enter Live Demo",
    guidedTour: "Start Guided Tour",
    stopTour: "Stop Guided Tour",
    backHome: "Back to Entrance",
    rolePathways: "Role Pathways",
    ecosystem: "Ecosystem",
    story: "Our Story",
    marketplace: "Marketplace",
    calendar: "Growing Calendar",
    weather: "Weather + Conditions",
    events: "Events",
    welcomeHeadline: "Step into a different kind of farm experience.",
    welcomeBody:
      "Bronson Family Farm is building an inviting, regenerative, off-grid ecosystem where visitors, customers, growers, youth workers, and community partners can return again and again for fresh food, learning, wellness, and opportunity.",
    storyHeadline: "Legacy, land, and a living future.",
    storyBody:
      "Inspired by family farming traditions and built for Youngstown’s future, Bronson Family Farm blends agriculture, agritourism, workforce pathways, food access, ecological restoration, and community well-being.",
    ecosystemHeadline: "More than a farm. A connected ecosystem.",
    ecosystemBody:
      "The ecosystem includes growing, training, food access, value-added opportunities, customer education, partner engagement, events, and a welcoming return path for every user.",
    marketplaceHeadline: "Marketplace access through Bronson Family Farm.",
    marketplaceBody:
      "Customers can explore produce, Bubble Babies™ seedling offerings, seasonal availability, preorder pathways, pickup opportunities, and food education connected to healthier eating.",
    calendarHeadline: "Crop planning and seasonal rhythm.",
    calendarBody:
      "The growing calendar helps users understand what is being planted, what is coming into season, and what experiences, workshops, and farm activity are happening next.",
    weatherHeadline: "Live-feel farm conditions.",
    weatherBody:
      "Weather awareness helps growers, visitors, and event guests prepare for field conditions, planting windows, irrigation needs, and outdoor programming.",
    eventsHeadline: "Return-worthy experiences.",
    eventsBody:
      "The farm is designed to bring people back through markets, youth activities, demonstrations, wellness education, agritourism experiences, food learning, and community events.",
    exploreRole: "Explore Pathway",
    next: "Next",
    previous: "Previous",
    modulesTitle: "What people can do here",
    modules: [
      "Explore marketplace and preorder opportunities",
      "Learn nutrition, natural food benefits, and recipe ideas",
      "View grower tools, crop planning, and seasonality",
      "Support youth workforce pathways and supervision",
      "Attend events, demonstrations, and community activities",
      "Engage with a beautiful, welcoming farm experience",
    ],
    liveNowTitle: "Live demo highlights",
    liveNowItems: [
      "Role-based pathways",
      "Marketplace connection",
      "Food education",
      "Grower ecosystem",
      "Youth workforce support",
      "Events and return visits",
    ],
    weatherCardTitle: "Current Farm Feel",
    weatherItems: ["Partly sunny", "Good day for visitors", "Field activity favorable", "Outdoor event friendly"],
    calendarItems: [
      "Seedling readiness and planting windows",
      "Grower support and crop planning",
      "Market prep and harvest rhythm",
      "Education and event alignment",
    ],
    eventItems: [
      "Growers Supply Market",
      "Community education sessions",
      "Hands-on demonstrations",
      "Family-friendly return experiences",
    ],
    roleText: {
      guest: {
        title: "Guest Pathway",
        body:
          "Guests arrive to discover the story, beauty, opportunities, and spirit of the farm. They can explore the land, upcoming activities, educational experiences, and reasons to return.",
      },
      customer: {
        title: "Customer Pathway",
        body:
          "Customers can move quickly into the marketplace, find fresh offerings, explore food and nutrition guidance, discover recipe ideas, and build habits around healthier local food.",
      },
      grower: {
        title: "Grower Pathway",
        body:
          "Growers can connect to production planning, seasonal timing, tools, demonstrations, market opportunities, and the broader ecosystem that supports regenerative and practical growing.",
      },
      producer: {
        title: "Value-Added Producer Pathway",
        body:
          "Value-added producers can explore collaboration opportunities, culinary integration, ingredient sourcing, demonstrations, packaging possibilities, and customer-facing storytelling.",
      },
      youth: {
        title: "Youth Workforce Pathway",
        body:
          "Youth participants can experience a guided pathway that connects agriculture, teamwork, responsibility, food systems, scheduling, supervised learning, and future workforce possibilities.",
      },
      supervisor: {
        title: "Supervisor Pathway",
        body:
          "Supervisors support the youth workforce program with oversight, scheduling, progress support, structure, and wraparound resources, including support staff connections where appropriate.",
      },
    },
  },
  es: {
    appTitle: "Bronson Family Farm",
    appSubtitle: "Un ecosistema vivo para cultivadores, familias, acceso a alimentos, aprendizaje y agroturismo.",
    enterDemo: "Entrar al Demo",
    guidedTour: "Iniciar Recorrido Guiado",
    stopTour: "Detener Recorrido",
    backHome: "Volver a la Entrada",
    rolePathways: "Rutas por Rol",
    ecosystem: "Ecosistema",
    story: "Nuestra Historia",
    marketplace: "Mercado",
    calendar: "Calendario de Cultivo",
    weather: "Clima + Condiciones",
    events: "Eventos",
    welcomeHeadline: "Entre a una experiencia agrícola diferente.",
    welcomeBody:
      "Bronson Family Farm está construyendo un ecosistema regenerativo y acogedor donde visitantes, clientes, cultivadores, jóvenes trabajadores y socios comunitarios pueden volver una y otra vez.",
    storyHeadline: "Legado, tierra y un futuro vivo.",
    storyBody:
      "Inspirada por tradiciones familiares y construida para el futuro de Youngstown, la finca une agricultura, agroturismo, desarrollo laboral, acceso a alimentos y bienestar comunitario.",
    ecosystemHeadline: "Más que una finca. Un ecosistema conectado.",
    ecosystemBody:
      "Incluye cultivo, capacitación, acceso a alimentos, oportunidades de valor agregado, educación al cliente, alianzas, eventos y un camino de regreso para cada usuario.",
    marketplaceHeadline: "Acceso al mercado por Bronson Family Farm.",
    marketplaceBody:
      "Los clientes pueden explorar productos, Bubble Babies™, disponibilidad estacional, pedidos anticipados y educación alimentaria para hábitos más saludables.",
    calendarHeadline: "Planificación de cultivos y ritmo estacional.",
    calendarBody:
      "El calendario ayuda a entender qué se está sembrando, qué viene en temporada y qué experiencias ocurren después.",
    weatherHeadline: "Condiciones de la finca con sensación en vivo.",
    weatherBody:
      "El clima ayuda a cultivadores, visitantes y asistentes a prepararse para el campo y los eventos.",
    eventsHeadline: "Experiencias para volver.",
    eventsBody:
      "La finca atrae a las personas mediante mercados, actividades juveniles, demostraciones, educación de bienestar y eventos comunitarios.",
    exploreRole: "Explorar Ruta",
    next: "Siguiente",
    previous: "Anterior",
    modulesTitle: "Lo que la gente puede hacer aquí",
    modules: [
      "Explorar compras y pedidos anticipados",
      "Aprender nutrición y recetas",
      "Ver herramientas de cultivo y temporada",
      "Apoyar rutas laborales juveniles",
      "Asistir a eventos y demostraciones",
      "Disfrutar una experiencia agrícola acogedora",
    ],
    liveNowTitle: "Aspectos destacados",
    liveNowItems: [
      "Rutas por rol",
      "Conexión al mercado",
      "Educación alimentaria",
      "Ecosistema de cultivo",
      "Apoyo laboral juvenil",
      "Eventos y regreso",
    ],
    weatherCardTitle: "Ambiente actual de la finca",
    weatherItems: ["Parcialmente soleado", "Buen día para visitantes", "Actividad favorable", "Apto para eventos"],
    calendarItems: [
      "Ventanas de siembra",
      "Apoyo y planificación",
      "Preparación de mercado",
      "Educación y eventos",
    ],
    eventItems: [
      "Growers Supply Market",
      "Sesiones educativas",
      "Demostraciones prácticas",
      "Experiencias familiares",
    ],
    roleText: {
      guest: { title: "Ruta del Visitante", body: "Los visitantes descubren la historia, la belleza, las oportunidades y las razones para volver." },
      customer: { title: "Ruta del Cliente", body: "Los clientes llegan al mercado, exploran alimentos saludables, recetas y orientación nutricional." },
      grower: { title: "Ruta del Cultivador", body: "Los cultivadores acceden a herramientas, planificación, estacionalidad y oportunidades de mercado." },
      producer: { title: "Ruta del Productor de Valor Agregado", body: "Los productores exploran colaboración culinaria, ingredientes, demostraciones y posibilidades de empaque." },
      youth: { title: "Ruta de Fuerza Laboral Juvenil", body: "Los jóvenes se conectan con agricultura, responsabilidad, horarios, aprendizaje y oportunidades futuras." },
      supervisor: { title: "Ruta del Supervisor", body: "Los supervisores apoyan estructura, seguimiento y recursos de apoyo para el programa juvenil." },
    },
  },
  tl: {
    appTitle: "Bronson Family Farm",
    appSubtitle: "Isang buhay na ecosystem para sa mga grower, pamilya, pagkain, pagkatuto, at agritourism.",
    enterDemo: "Pumasok sa Demo",
    guidedTour: "Simulan ang Guided Tour",
    stopTour: "Itigil ang Guided Tour",
    backHome: "Bumalik sa Simula",
    rolePathways: "Mga Landas ng Papel",
    ecosystem: "Ecosystem",
    story: "Aming Kuwento",
    marketplace: "Marketplace",
    calendar: "Kalendaryo ng Pagtatanim",
    weather: "Panahon + Kondisyon",
    events: "Mga Kaganapan",
    welcomeHeadline: "Pumasok sa ibang uri ng karanasan sa bukid.",
    welcomeBody:
      "Ang Bronson Family Farm ay lumilikha ng isang maganda at malugod na ecosystem para sa mga bisita, mamimili, grower, kabataan, at mga katuwang ng komunidad.",
    storyHeadline: "Pamana, lupa, at buhay na kinabukasan.",
    storyBody:
      "Pinag-uugnay ng bukid ang agrikultura, agritourism, food access, workforce pathways, ecological restoration, at kabutihan ng komunidad.",
    ecosystemHeadline: "Higit pa sa bukid. Isang konektadong ecosystem.",
    ecosystemBody:
      "Kasama rito ang pagtatanim, pagsasanay, access sa pagkain, edukasyon, partnerships, events, at malinaw na daan pabalik para sa bawat user.",
    marketplaceHeadline: "Access sa marketplace sa pamamagitan ng Bronson Family Farm.",
    marketplaceBody:
      "Maaaring makita ng customers ang produce, Bubble Babies™, seasonal availability, preorder options, at food education.",
    calendarHeadline: "Pagpaplano ng pananim at takbo ng panahon.",
    calendarBody:
      "Ipinapakita ng kalendaryo kung ano ang itinatanim, ano ang malapit na anihin, at ano ang susunod na gawain at event.",
    weatherHeadline: "Pakiramdam ng bukid na parang live.",
    weatherBody:
      "Tinutulungan nito ang grower, bisita, at event guest na maghanda sa kondisyon ng bukid at panahon.",
    eventsHeadline: "Mga karanasang babalikan.",
    eventsBody:
      "Ang bukid ay dinisenyo para sa paulit-ulit na pagbisita sa pamamagitan ng markets, learning, wellness, at community events.",
    exploreRole: "Tuklasin ang Landas",
    next: "Susunod",
    previous: "Nakaraan",
    modulesTitle: "Mga puwedeng gawin dito",
    modules: [
      "Marketplace at preorder opportunities",
      "Nutrition at recipe ideas",
      "Grower tools at seasonality",
      "Youth workforce support",
      "Events at demonstrations",
      "Magandang farm experience",
    ],
    liveNowTitle: "Mga tampok",
    liveNowItems: [
      "Role-based pathways",
      "Marketplace connection",
      "Food education",
      "Grower ecosystem",
      "Youth workforce support",
      "Return visits",
    ],
    weatherCardTitle: "Kasalukuyang pakiramdam sa bukid",
    weatherItems: ["Maaraw nang kaunti", "Magandang araw para sa bisita", "Magandang field activity", "Maganda para sa outdoor event"],
    calendarItems: [
      "Planting windows",
      "Grower support",
      "Harvest rhythm",
      "Education alignment",
    ],
    eventItems: [
      "Growers Supply Market",
      "Education sessions",
      "Hands-on demos",
      "Family experiences",
    ],
    roleText: {
      guest: { title: "Landas ng Bisita", body: "Natutuklasan ng bisita ang kuwento, kagandahan, oportunidad, at mga dahilan para bumalik." },
      customer: { title: "Landas ng Customer", body: "Ang customer ay madaling makarating sa marketplace, nutrition guidance, at mga recipe idea." },
      grower: { title: "Landas ng Grower", body: "Nakakakuha ang grower ng planning, tools, seasonality, at market opportunities." },
      producer: { title: "Landas ng Value-Added Producer", body: "Maaaring tuklasin ang culinary collaboration, ingredients, demos, at packaging ideas." },
      youth: { title: "Landas ng Kabataang Manggagawa", body: "Nag-uugnay ito sa agrikultura, teamwork, responsibility, at future workforce opportunities." },
      supervisor: { title: "Landas ng Supervisor", body: "Ang supervisor ay nagbibigay ng structure, scheduling support, at wraparound support resources." },
    },
  },
  it: {
    appTitle: "Bronson Family Farm",
    appSubtitle: "Un ecosistema vivo per coltivatori, famiglie, accesso al cibo, apprendimento e agriturismo.",
    enterDemo: "Entra nel Demo",
    guidedTour: "Avvia Tour Guidato",
    stopTour: "Ferma Tour",
    backHome: "Torna all’Ingresso",
    rolePathways: "Percorsi per Ruolo",
    ecosystem: "Ecosistema",
    story: "La Nostra Storia",
    marketplace: "Mercato",
    calendar: "Calendario di Coltivazione",
    weather: "Meteo + Condizioni",
    events: "Eventi",
    welcomeHeadline: "Entra in una diversa esperienza di fattoria.",
    welcomeBody:
      "Bronson Family Farm costruisce un ecosistema rigenerativo e accogliente dove visitatori, clienti, coltivatori, giovani e partner possono tornare ancora e ancora.",
    storyHeadline: "Eredità, terra e futuro vivo.",
    storyBody:
      "La fattoria unisce agricoltura, agriturismo, accesso al cibo, percorsi di lavoro, ripristino ecologico e benessere comunitario.",
    ecosystemHeadline: "Più di una fattoria. Un ecosistema connesso.",
    ecosystemBody:
      "Include coltivazione, formazione, accesso al cibo, opportunità a valore aggiunto, educazione, partnership ed eventi.",
    marketplaceHeadline: "Accesso al mercato tramite Bronson Family Farm.",
    marketplaceBody:
      "I clienti possono esplorare prodotti, Bubble Babies™, disponibilità stagionale, preordini ed educazione alimentare.",
    calendarHeadline: "Pianificazione delle colture e ritmo stagionale.",
    calendarBody:
      "Il calendario mostra cosa viene piantato, cosa arriva in stagione e quali attività stanno arrivando.",
    weatherHeadline: "Condizioni della fattoria con sensazione dal vivo.",
    weatherBody:
      "Il meteo aiuta coltivatori, visitatori e ospiti a prepararsi per il campo e per gli eventi.",
    eventsHeadline: "Esperienze che invitano a tornare.",
    eventsBody:
      "La fattoria richiama le persone con mercati, attività giovanili, dimostrazioni, benessere ed eventi comunitari.",
    exploreRole: "Esplora Percorso",
    next: "Avanti",
    previous: "Indietro",
    modulesTitle: "Cosa si può fare qui",
    modules: [
      "Esplorare il mercato",
      "Imparare nutrizione e ricette",
      "Usare strumenti per coltivatori",
      "Sostenere i percorsi giovanili",
      "Partecipare a eventi",
      "Vivere una bella esperienza in fattoria",
    ],
    liveNowTitle: "Punti salienti",
    liveNowItems: [
      "Percorsi per ruolo",
      "Connessione mercato",
      "Educazione alimentare",
      "Ecosistema coltivatori",
      "Supporto giovanile",
      "Eventi e ritorno",
    ],
    weatherCardTitle: "Sensazione attuale della fattoria",
    weatherItems: ["Parzialmente soleggiato", "Buon giorno per visitatori", "Attività di campo favorevole", "Adatto a eventi esterni"],
    calendarItems: [
      "Finestre di semina",
      "Supporto ai coltivatori",
      "Preparazione mercato",
      "Educazione ed eventi",
    ],
    eventItems: [
      "Growers Supply Market",
      "Sessioni educative",
      "Dimostrazioni pratiche",
      "Esperienze per famiglie",
    ],
    roleText: {
      guest: { title: "Percorso Ospite", body: "L’ospite scopre la storia, la bellezza, le opportunità e i motivi per tornare." },
      customer: { title: "Percorso Cliente", body: "Il cliente entra nel mercato e trova cibo fresco, ricette e orientamento nutrizionale." },
      grower: { title: "Percorso Coltivatore", body: "Il coltivatore accede a strumenti, pianificazione, stagionalità e opportunità di mercato." },
      producer: { title: "Percorso Produttore a Valore Aggiunto", body: "Il produttore esplora collaborazione culinaria, ingredienti e dimostrazioni." },
      youth: { title: "Percorso Giovani", body: "I giovani trovano agricoltura, responsabilità, lavoro di squadra e possibilità future." },
      supervisor: { title: "Percorso Supervisore", body: "Il supervisore offre struttura, programmazione e supporto al programma giovanile." },
    },
  },
  patwa: {
    appTitle: "Bronson Family Farm",
    appSubtitle: "A one livin ecosystem fi growa, family, food access, learning, an agritourism.",
    enterDemo: "Go Inna Demo",
    guidedTour: "Start Guided Tour",
    stopTour: "Stop Guided Tour",
    backHome: "Back to Entrance",
    rolePathways: "Role Pathway",
    ecosystem: "Ecosystem",
    story: "Wi Story",
    marketplace: "Marketplace",
    calendar: "Growin Calendar",
    weather: "Weather + Conditions",
    events: "Events",
    welcomeHeadline: "Step inna one different farm experience.",
    welcomeBody:
      "Bronson Family Farm a build one warm, regenerative ecosystem weh visitor, customer, growa, youth, an partner can come back to again an again.",
    storyHeadline: "Legacy, land, an livin future.",
    storyBody:
      "Di farm join up agriculture, agritourism, food access, work pathway, ecological restoration, an community well-being.",
    ecosystemHeadline: "More than farm. A connected ecosystem.",
    ecosystemBody:
      "It include growin, training, food access, value-added work, customer education, partnerships, events, an clear way fi return.",
    marketplaceHeadline: "Marketplace access through Bronson Family Farm.",
    marketplaceBody:
      "Customer can check produce, Bubble Babies™, seasonal items, preorder pathway, an food education fi healthier eatin.",
    calendarHeadline: "Crop planning an seasonal flow.",
    calendarBody:
      "Di calendar show weh a plant, weh a come in season, an weh activity an event a come next.",
    weatherHeadline: "Live-feel farm conditions.",
    weatherBody:
      "Weather help growa, visitor, an event guest prepare fi field conditions an outdoor program.",
    eventsHeadline: "Experiences weh mek people come back.",
    eventsBody:
      "Di farm draw people back through market, youth activity, demonstration, wellness education, an community event.",
    exploreRole: "Explore Pathway",
    next: "Next",
    previous: "Previous",
    modulesTitle: "Wha people can do yah",
    modules: [
      "Check marketplace an preorder",
      "Learn nutrition an recipe idea",
      "See growa tools an seasons",
      "Support youth workforce pathway",
      "Join events an demonstrations",
      "Enjoy one beautiful farm experience",
    ],
    liveNowTitle: "Live demo highlight",
    liveNowItems: [
      "Role pathway",
      "Marketplace connection",
      "Food education",
      "Growa ecosystem",
      "Youth support",
      "Return visits",
    ],
    weatherCardTitle: "Farm vibe right now",
    weatherItems: ["Sun a shine likkle bit", "Good day fi visitor", "Field work look good", "Outdoor event friendly"],
    calendarItems: [
      "Planting windows",
      "Growa support",
      "Harvest rhythm",
      "Education alignment",
    ],
    eventItems: [
      "Growers Supply Market",
      "Education session",
      "Hands-on demo",
      "Family return experience",
    ],
    roleText: {
      guest: { title: "Guest Pathway", body: "Guest come fi discover di story, beauty, opportunity, an reason fi return." },
      customer: { title: "Customer Pathway", body: "Customer can move fast to marketplace, healthier food guidance, an recipe idea." },
      grower: { title: "Growa Pathway", body: "Growa connect to planning, tool, seasonality, an market opportunity." },
      producer: { title: "Value-Added Producer Pathway", body: "Producer can explore culinary collaboration, ingredients, demo, an package possibility." },
      youth: { title: "Youth Workforce Pathway", body: "Youth connect to agriculture, teamwork, responsibility, an future opportunity." },
      supervisor: { title: "Supervisor Pathway", body: "Supervisor give structure, scheduling support, an wraparound support resource fi youth program." },
    },
  },
  he: {
    appTitle: "Bronson Family Farm",
    appSubtitle: "מערכת חיה עבור מגדלים, משפחות, גישה למזון, למידה ואגריטוריזם.",
    enterDemo: "כניסה לדמו",
    guidedTour: "התחל סיור מודרך",
    stopTour: "עצור סיור",
    backHome: "חזרה לכניסה",
    rolePathways: "מסלולי תפקידים",
    ecosystem: "המערכת",
    story: "הסיפור שלנו",
    marketplace: "שוק",
    calendar: "לוח גידול",
    weather: "מזג אוויר + תנאים",
    events: "אירועים",
    welcomeHeadline: "היכנסו לחוויית חווה אחרת.",
    welcomeBody:
      "Bronson Family Farm בונה מערכת מזמינה ומתחדשת שבה מבקרים, לקוחות, מגדלים, צעירים ושותפים יכולים לחזור שוב ושוב.",
    storyHeadline: "מורשת, אדמה ועתיד חי.",
    storyBody:
      "החווה מחברת בין חקלאות, אגריטוריזם, גישה למזון, מסלולי תעסוקה, שיקום אקולוגי ורווחת הקהילה.",
    ecosystemHeadline: "יותר מחווה. מערכת מחוברת.",
    ecosystemBody:
      "היא כוללת גידול, הכשרה, גישה למזון, הזדמנויות ערך מוסף, חינוך, שותפויות ואירועים.",
    marketplaceHeadline: "גישה לשוק דרך Bronson Family Farm.",
    marketplaceBody:
      "לקוחות יכולים לבדוק תוצרת, Bubble Babies™, זמינות עונתית, הזמנה מוקדמת וחינוך תזונתי.",
    calendarHeadline: "תכנון גידול וקצב עונתי.",
    calendarBody:
      "הלוח מציג מה נשתל, מה נכנס לעונה ואילו פעילויות מגיעות בהמשך.",
    weatherHeadline: "תחושת שטח חיה.",
    weatherBody:
      "מזג האוויר מסייע למגדלים, מבקרים ואורחים להיערך לתנאי השטח והאירועים.",
    eventsHeadline: "חוויות שמחזירות אנשים.",
    eventsBody:
      "החווה מושכת אנשים דרך שווקים, פעילות נוער, הדגמות, חינוך לבריאות ואירועי קהילה.",
    exploreRole: "חקור מסלול",
    next: "הבא",
    previous: "הקודם",
    modulesTitle: "מה אפשר לעשות כאן",
    modules: [
      "לבדוק את השוק והזמנות מוקדמות",
      "ללמוד תזונה ורעיונות למתכונים",
      "לראות כלים למגדלים ועונתיות",
      "לתמוך במסלולי נוער",
      "להשתתף באירועים והדגמות",
      "לחוות חווה יפה ומזמינה",
    ],
    liveNowTitle: "נקודות עיקריות",
    liveNowItems: [
      "מסלולי תפקידים",
      "חיבור לשוק",
      "חינוך תזונתי",
      "מערכת למגדלים",
      "תמיכת נוער",
      "אירועים וחזרה",
    ],
    weatherCardTitle: "תחושת החווה כרגע",
    weatherItems: ["שמש חלקית", "יום טוב למבקרים", "פעילות שדה נוחה", "מתאים לאירועים חיצוניים"],
    calendarItems: [
      "חלונות שתילה",
      "תמיכת מגדלים",
      "קצב קציר ושוק",
      "חינוך ואירועים",
    ],
    eventItems: [
      "Growers Supply Market",
      "מפגשי חינוך",
      "הדגמות מעשיות",
      "חוויות למשפחות",
    ],
    roleText: {
      guest: { title: "מסלול אורח", body: "האורח מגלה את הסיפור, היופי, ההזדמנויות והסיבות לחזור." },
      customer: { title: "מסלול לקוח", body: "הלקוח מגיע לשוק, מגלה מזון טרי, רעיונות למתכונים והכוונה תזונתית." },
      grower: { title: "מסלול מגדל", body: "המגדל מתחבר לכלים, תכנון, עונתיות והזדמנויות שוק." },
      producer: { title: "מסלול יצרן ערך מוסף", body: "היצרן בוחן שיתופי פעולה קולינריים, רכיבים והדגמות." },
      youth: { title: "מסלול נוער", body: "הנוער מתחבר לחקלאות, עבודת צוות, אחריות והזדמנויות עתידיות." },
      supervisor: { title: "מסלול מפקח", body: "המפקח מספק מבנה, תמיכה בלוחות זמנים ומשאבי תמיכה לתוכנית הנוער." },
    },
  },
} as const;

const roleCards: {
  key: RoleKey;
  icon: React.ReactNode;
  image: string;
}[] = [
  { key: "guest", icon: <TreePine className="h-5 w-5" />, image: images.guest },
  { key: "customer", icon: <ShoppingBasket className="h-5 w-5" />, image: images.customer },
  { key: "grower", icon: <Sprout className="h-5 w-5" />, image: images.grower },
  { key: "producer", icon: <ChefHat className="h-5 w-5" />, image: images.culinary },
  { key: "youth", icon: <GraduationCap className="h-5 w-5" />, image: images.youth },
  { key: "supervisor", icon: <Users className="h-5 w-5" />, image: images.supervisor },
];

const tourRoute: ViewKey[] = [
  "story",
  "ecosystem",
  "marketplace",
  "calendar",
  "weather",
  "events",
  "roleHub",
  "guest",
  "customer",
  "grower",
  "producer",
  "youth",
  "supervisor",
];

function App() {
  const [language, setLanguage] = useState<LanguageKey>("en");
  const [view, setView] = useState<ViewKey>("home");
  const [tourOn, setTourOn] = useState(false);
  const [tourIndex, setTourIndex] = useState(0);

  const t = copy[language];

  useEffect(() => {
    if (!tourOn) return;
    const timer = window.setInterval(() => {
      setTourIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= tourRoute.length) {
          setTourOn(false);
          setView("home");
          return 0;
        }
        setView(tourRoute[nextIndex]);
        return nextIndex;
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, [tourOn]);

  useEffect(() => {
    if (language === "he") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, [language]);

  const heroStats = useMemo(
    () => [
      { label: "118+ Acres", icon: <MapPin className="h-4 w-4" /> },
      { label: "Regenerative Vision", icon: <Leaf className="h-4 w-4" /> },
      { label: "Food + Workforce + Agritourism", icon: <HeartHandshake className="h-4 w-4" /> },
    ],
    []
  );

  const startTour = () => {
    setTourOn(true);
    setTourIndex(0);
    setView(tourRoute[0]);
  };

  const stopTour = () => {
    setTourOn(false);
    setTourIndex(0);
  };

  const navButton = (
    key: ViewKey,
    label: string,
    icon: React.ReactNode
  ) => (
    <button
      onClick={() => {
        setView(key);
        setTourOn(false);
      }}
      className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20"
    >
      <span className="inline-flex items-center gap-2">
        {icon}
        {label}
      </span>
    </button>
  );

  const Screen = ({
    image,
    eyebrow,
    title,
    body,
    children,
  }: {
    image: string;
    eyebrow: string;
    title: string;
    body: string;
    children?: React.ReactNode;
  }) => (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-emerald-950/65 to-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 md:px-8">
        <header className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/90 backdrop-blur">
              <Leaf className="h-3.5 w-3.5" />
              {t.appTitle}
            </div>
            <p className="max-w-3xl text-sm text-white/80">{t.appSubtitle}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {navButton("home", t.backHome, <ArrowLeft className="h-4 w-4" />)}
            {navButton("story", t.story, <TreePine className="h-4 w-4" />)}
            {navButton("ecosystem", t.ecosystem, <Leaf className="h-4 w-4" />)}
            {navButton("marketplace", t.marketplace, <Store className="h-4 w-4" />)}
            {navButton("calendar", t.calendar, <CalendarDays className="h-4 w-4" />)}
            {navButton("weather", t.weather, <CloudSun className="h-4 w-4" />)}
            {navButton("events", t.events, <Users className="h-4 w-4" />)}
            {navButton("roleHub", t.rolePathways, <GraduationCap className="h-4 w-4" />)}
          </div>
        </header>

        <div className="grid flex-1 items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/15 bg-black/25 p-6 shadow-2xl backdrop-blur-md md:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-emerald-200">{eyebrow}</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 md:text-lg">
              {body}
            </p>

            {children}
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/15 bg-white/10
