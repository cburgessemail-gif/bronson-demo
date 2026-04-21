import React, { useMemo, useState } from "react";

type LanguageKey = "en" | "es" | "tl" | "it" | "fr" | "he";
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

const STORE_URL = "https://grownby.com/farms/bronson-family-farm/shop";
const WEATHER_URL =
  "https://www.wunderground.com/hourly/us/oh/youngstown/44510";

const IMAGES = {
  home: "/GrowArea.jpg",
  story: "/SAM_0220.JPG",
  guest: "/GrowArea2.jpg",
  customer: "/culniary_edibleflowers.jpeg",
  marketplace: "/SAM_0255.JPG",
  grower: "/Samaeera2.jpg",
  youth: "/SAM_0225.JPG",
  partners: "/SAM_0313.JPG",
};

const FOREST = {
  deep: "#0a3f2d",
  pine: "#0f5d43",
  moss: "#6f8f3d",
  gold: "#e8cf69",
  text: "#173629",
  muted: "#5a6d63",
};

const LANG_OPTIONS: { key: LanguageKey; label: string; rtl?: boolean }[] = [
  { key: "en", label: "English" },
  { key: "es", label: "Español" },
  { key: "tl", label: "Tagalog" },
  { key: "it", label: "Italiano" },
  { key: "fr", label: "Français" },
  { key: "he", label: "עברית", rtl: true },
];

const layerOrder: LayerKey[] = [
  "soundbite",
  "intro",
  "knowledge",
  "purpose",
  "next",
];

const COPY = {
  en: {
    navTag: "Living Ecosystem Experience",
    farmTitle: "Bronson Family Farm",
    farmSubtitle: "More than a farm.",
    home: "Home",
    story: "Our Story",
    weather: "Weather",
    grownby: "GrownBy",
    beginJourney: "Begin Your Journey",
    openGrownBy: "Open GrownBy",
    enterAsGuest: "Enter as Guest",
    enterAsCustomer: "Enter as Customer",
    enterGrownBy: "Enter GrownBy",
    openPathway: "Open Pathway",
    backHome: "Back Home",
    prev: "Prev",
    next: "Next",
    openStore: "Open GrownBy Store",
    journeyProgress: "Journey Progress",
    whyThisExists: "Why This Exists",
    whatThisCreates: "What This Creates",
    forYou: "For You",
    storyValue: "Story Value",
    whereThisLeads: "Where This Leads",
    personalInvitation: "Personal Invitation",
    livingExperience: "Living Ecosystem Experience",
    homeHeroBody:
      "This is a place where people are meant to feel welcomed, seen, nourished, and connected to something larger than themselves.",
    homeIntro:
      "A regenerative ecosystem for food access, marketplace activity, growers, youth workforce development, education, and community return.",
    feel: "Feel",
    feelBody: "the welcome, the land, and the meaning.",
    see: "See",
    seeBody: "how food, people, and purpose fit together.",
    return: "Return",
    returnBody: "with deeper connection and clearer purpose.",
    invitationBody:
      "This experience is designed to feel personal. Each pathway speaks to a different kind of visitor, need, and future.",
    storyBody1:
      "Inspired by family farming traditions and shaped for Youngstown’s future, Bronson Family Farm connects land restoration, food access, agritourism, education, and opportunity.",
    storyBody2:
      "The Bronson and Lorenzana legacy now moves into a new generation of purpose.",
    storyValueBody:
      "The story gives people a reason to care. It helps them feel the purpose before they ever take another step.",
    storyLeadsBody:
      "The story leads into food, youth development, partnership, GrownBy, education, and return visits that feel meaningful.",
  },

  es: {
    navTag: "Experiencia de Ecosistema Vivo",
    farmTitle: "Bronson Family Farm",
    farmSubtitle: "Más que una granja.",
    home: "Inicio",
    story: "Nuestra Historia",
    weather: "Clima",
    grownby: "GrownBy",
    beginJourney: "Comenzar el Recorrido",
    openGrownBy: "Abrir GrownBy",
    enterAsGuest: "Entrar como Invitado",
    enterAsCustomer: "Entrar como Cliente",
    enterGrownBy: "Entrar en GrownBy",
    openPathway: "Abrir Ruta",
    backHome: "Volver al Inicio",
    prev: "Anterior",
    next: "Siguiente",
    openStore: "Abrir Tienda GrownBy",
    journeyProgress: "Progreso del Recorrido",
    whyThisExists: "Por Qué Existe",
    whatThisCreates: "Lo Que Esto Crea",
    forYou: "Para Usted",
    storyValue: "Valor de la Historia",
    whereThisLeads: "Hacia Dónde Lleva",
    personalInvitation: "Invitación Personal",
    livingExperience: "Experiencia de Ecosistema Vivo",
    homeHeroBody:
      "Este es un lugar donde las personas deben sentirse bienvenidas, vistas, nutridas y conectadas con algo más grande que ellas mismas.",
    homeIntro:
      "Un ecosistema regenerativo para acceso a alimentos, actividad de mercado, productores, desarrollo laboral juvenil, educación y retorno comunitario.",
    feel: "Sentir",
    feelBody: "la bienvenida, la tierra y el significado.",
    see: "Ver",
    seeBody: "cómo se unen la comida, las personas y el propósito.",
    return: "Volver",
    returnBody: "con una conexión más profunda y un propósito más claro.",
    invitationBody:
      "Esta experiencia está diseñada para sentirse personal. Cada ruta habla a un tipo diferente de visitante, necesidad y futuro.",
    storyBody1:
      "Inspirada en tradiciones agrícolas familiares y moldeada para el futuro de Youngstown, Bronson Family Farm conecta restauración de la tierra, acceso a alimentos, agroturismo, educación y oportunidad.",
    storyBody2:
      "El legado Bronson y Lorenzana ahora avanza hacia una nueva generación de propósito.",
    storyValueBody:
      "La historia les da a las personas una razón para interesarse. Les ayuda a sentir el propósito antes de dar el siguiente paso.",
    storyLeadsBody:
      "La historia conduce a la comida, al desarrollo juvenil, a la colaboración, a GrownBy, a la educación y a visitas de regreso con significado.",
  },

  tl: {
    navTag: "Living Ecosystem Experience",
    farmTitle: "Bronson Family Farm",
    farmSubtitle: "Higit pa sa isang farm.",
    home: "Home",
    story: "Ating Kuwento",
    weather: "Panahon",
    grownby: "GrownBy",
    beginJourney: "Simulan ang Journey",
    openGrownBy: "Buksan ang GrownBy",
    enterAsGuest: "Pumasok bilang Guest",
    enterAsCustomer: "Pumasok bilang Customer",
    enterGrownBy: "Pumasok sa GrownBy",
    openPathway: "Buksan ang Pathway",
    backHome: "Balik Home",
    prev: "Nauna",
    next: "Susunod",
    openStore: "Buksan ang GrownBy Store",
    journeyProgress: "Pag-usad ng Journey",
    whyThisExists: "Bakit Ito Umiiral",
    whatThisCreates: "Ano ang Nalilikha Nito",
    forYou: "Para sa Iyo",
    storyValue: "Halaga ng Kuwento",
    whereThisLeads: "Saan Ito Patungo",
    personalInvitation: "Personal na Paanyaya",
    livingExperience: "Living Ecosystem Experience",
    homeHeroBody:
      "Ito ay lugar kung saan ang mga tao ay dapat makaramdam ng pagtanggap, pagkakita, pag-aaruga, at koneksyon sa isang mas malaking layunin.",
    homeIntro:
      "Isang regenerative ecosystem para sa food access, marketplace activity, growers, youth workforce development, education, at community return.",
    feel: "Damdamin",
    feelBody: "ang pagtanggap, ang lupa, at ang kahulugan.",
    see: "Makita",
    seeBody: "kung paano nagkakaugnay ang pagkain, tao, at layunin.",
    return: "Bumalik",
    returnBody: "na may mas malalim na koneksyon at mas malinaw na layunin.",
    invitationBody:
      "Ang karanasang ito ay ginawa upang maging personal. Bawat pathway ay tumutugon sa ibang uri ng bisita, pangangailangan, at kinabukasan.",
    storyBody1:
      "Hinubog ng tradisyon ng family farming at ng kinabukasan ng Youngstown, ikinokonekta ng Bronson Family Farm ang land restoration, food access, agritourism, edukasyon, at oportunidad.",
    storyBody2:
      "Ang pamana ng Bronson at Lorenzana ay lumilipat ngayon sa bagong henerasyon ng layunin.",
    storyValueBody:
      "Ang kuwento ay nagbibigay sa mga tao ng dahilan upang malasakit. Tinutulungan silang maramdaman ang layunin bago pa sila gumawa ng susunod na hakbang.",
    storyLeadsBody:
      "Ang kuwento ay humahantong sa pagkain, youth development, partnership, GrownBy, edukasyon, at mga pagbabalik na may kabuluhan.",
  },

  it: {
    navTag: "Esperienza Ecosistema Vivo",
    farmTitle: "Bronson Family Farm",
    farmSubtitle: "Più di una fattoria.",
    home: "Home",
    story: "La Nostra Storia",
    weather: "Meteo",
    grownby: "GrownBy",
    beginJourney: "Inizia il Percorso",
    openGrownBy: "Apri GrownBy",
    enterAsGuest: "Entra come Ospite",
    enterAsCustomer: "Entra come Cliente",
    enterGrownBy: "Entra in GrownBy",
    openPathway: "Apri Percorso",
    backHome: "Torna alla Home",
    prev: "Prec",
    next: "Succ",
    openStore: "Apri Negozio GrownBy",
    journeyProgress: "Progresso del Percorso",
    whyThisExists: "Perché Esiste",
    whatThisCreates: "Cosa Crea",
    forYou: "Per Te",
    storyValue: "Valore della Storia",
    whereThisLeads: "Dove Conduce",
    personalInvitation: "Invito Personale",
    livingExperience: "Esperienza Ecosistema Vivo",
    homeHeroBody:
      "Questo è un luogo in cui le persone dovrebbero sentirsi accolte, viste, nutrite e connesse a qualcosa di più grande di loro.",
    homeIntro:
      "Un ecosistema rigenerativo per accesso al cibo, attività di mercato, coltivatori, sviluppo del lavoro giovanile, educazione e ritorno alla comunità.",
    feel: "Sentire",
    feelBody: "l'accoglienza, la terra e il significato.",
    see: "Vedere",
    seeBody: "come cibo, persone e scopo si uniscono.",
    return: "Tornare",
    returnBody: "con una connessione più profonda e uno scopo più chiaro.",
    invitationBody:
      "Questa esperienza è pensata per essere personale. Ogni percorso parla a un diverso tipo di visitatore, bisogno e futuro.",
    storyBody1:
      "Ispirata dalle tradizioni agricole familiari e modellata per il futuro di Youngstown, Bronson Family Farm collega ripristino della terra, accesso al cibo, agriturismo, educazione e opportunità.",
    storyBody2:
      "L'eredità Bronson e Lorenzana passa ora a una nuova generazione di scopo.",
    storyValueBody:
      "La storia offre alle persone una ragione per interessarsi. Le aiuta a sentire lo scopo prima ancora di fare il passo successivo.",
    storyLeadsBody:
      "La storia conduce a cibo, sviluppo giovanile, partnership, GrownBy, educazione e visite di ritorno significative.",
  },

  fr: {
    navTag: "Expérience d'Écosystème Vivant",
    farmTitle: "Bronson Family Farm",
    farmSubtitle: "Plus qu'une ferme.",
    home: "Accueil",
    story: "Notre Histoire",
    weather: "Météo",
    grownby: "GrownBy",
    beginJourney: "Commencer le Parcours",
    openGrownBy: "Ouvrir GrownBy",
    enterAsGuest: "Entrer comme Invité",
    enterAsCustomer: "Entrer comme Client",
    enterGrownBy: "Entrer dans GrownBy",
    openPathway: "Ouvrir le Parcours",
    backHome: "Retour à l'Accueil",
    prev: "Préc",
    next: "Suiv",
    openStore: "Ouvrir la Boutique GrownBy",
    journeyProgress: "Progression du Parcours",
    whyThisExists: "Pourquoi Cela Existe",
    whatThisCreates: "Ce Que Cela Crée",
    forYou: "Pour Vous",
    storyValue: "Valeur de l'Histoire",
    whereThisLeads: "Où Cela Mène",
    personalInvitation: "Invitation Personnelle",
    livingExperience: "Expérience d'Écosystème Vivant",
    homeHeroBody:
      "C'est un lieu où les gens doivent se sentir accueillis, vus, nourris et reliés à quelque chose de plus grand qu'eux-mêmes.",
    homeIntro:
      "Un écosystème régénératif pour l'accès à l'alimentation, l'activité du marché, les producteurs, le développement de la jeunesse, l'éducation et le retour communautaire.",
    feel: "Ressentir",
    feelBody: "l'accueil, la terre et le sens.",
    see: "Voir",
    seeBody: "comment la nourriture, les personnes et le but se rejoignent.",
    return: "Revenir",
    returnBody: "avec un lien plus profond et un but plus clair.",
    invitationBody:
      "Cette expérience est conçue pour être personnelle. Chaque parcours s'adresse à un type différent de visiteur, de besoin et d'avenir.",
    storyBody1:
      "Inspirée par les traditions agricoles familiales et façonnée pour l'avenir de Youngstown, Bronson Family Farm relie restauration des terres, accès à l'alimentation, agritourisme, éducation et opportunité.",
    storyBody2:
      "L'héritage Bronson et Lorenzana avance désormais vers une nouvelle génération de sens.",
    storyValueBody:
      "L'histoire donne aux gens une raison de s'y attacher. Elle les aide à ressentir le but avant même la prochaine étape.",
    storyLeadsBody:
      "L'histoire mène à l'alimentation, au développement des jeunes, au partenariat, à GrownBy, à l'éducation et à des visites de retour porteuses de sens.",
  },

  he: {
    navTag: "חוויית מערכת אקולוגית חיה",
    farmTitle: "Bronson Family Farm",
    farmSubtitle: "יותר מחווה.",
    home: "בית",
    story: "הסיפור שלנו",
    weather: "מזג אוויר",
    grownby: "GrownBy",
    beginJourney: "התחל את המסע",
    openGrownBy: "פתח את GrownBy",
    enterAsGuest: "היכנס כאורח",
    enterAsCustomer: "היכנס כלקוח",
    enterGrownBy: "היכנס ל-GrownBy",
    openPathway: "פתח מסלול",
    backHome: "חזרה לבית",
    prev: "קודם",
    next: "הבא",
    openStore: "פתח את חנות GrownBy",
    journeyProgress: "התקדמות המסע",
    whyThisExists: "למה זה קיים",
    whatThisCreates: "מה זה יוצר",
    forYou: "בשבילך",
    storyValue: "ערך הסיפור",
    whereThisLeads: "לאן זה מוביל",
    personalInvitation: "הזמנה אישית",
    livingExperience: "חוויית מערכת אקולוגית חיה",
    homeHeroBody:
      "זהו מקום שבו אנשים אמורים להרגיש רצויים, נראים, מוזנים ומחוברים למשהו גדול יותר מעצמם.",
    homeIntro:
      "מערכת אקולוגית רגנרטיבית לגישה למזון, פעילות שוק, מגדלים, פיתוח כוח עבודה לנוער, חינוך וחזרה לקהילה.",
    feel: "להרגיש",
    feelBody: "את הקבלה, את האדמה ואת המשמעות.",
    see: "לראות",
    seeBody: "כיצד מזון, אנשים ותכלית מתחברים יחד.",
    return: "לחזור",
    returnBody: "עם חיבור עמוק יותר ומטרה ברורה יותר.",
    invitationBody:
      "החוויה הזו נועדה להיות אישית. כל מסלול מדבר אל סוג אחר של מבקר, צורך ועתיד.",
    storyBody1:
      "בהשראת מסורות חקלאות משפחתיות ובעיצוב לעתיד של יאנגסטאון, Bronson Family Farm מחברת בין שיקום קרקע, גישה למזון, אגריטוריזם, חינוך והזדמנות.",
    storyBody2:
      "המורשת של ברונסון ולורנזנה עוברת כעת לדור חדש של משמעות.",
    storyValueBody:
      "הסיפור נותן לאנשים סיבה לדאוג. הוא עוזר להם להרגיש את התכלית לפני שהם עושים את הצעד הבא.",
    storyLeadsBody:
      "הסיפור מוביל למזון, לפיתוח נוער, לשותפות, ל-GrownBy, לחינוך ולביקורים חוזרים בעלי משמעות.",
  },
} as const;

const PATHWAY_COPY = {
  en: {
    guest: {
      title: "Guest",
      subtitle: "Begin by feeling the land, the story, and the purpose.",
      personalLine:
        "You are not just visiting. You are being welcomed into a living vision.",
      whyItMatters:
        "This experience helps you understand why this land matters and why the work should continue.",
      whatPeopleGain:
        "You leave with emotional connection, clearer understanding, and a reason to return.",
      panels: {
        soundbite: {
          title: "You are entering more than a farm.",
          body:
            "This is a place where land, legacy, food access, restoration, and hope are held together in one living experience.",
        },
        intro: {
          title: "What you feel first",
          body:
            "You are meant to feel grounded here. The land, the quiet, the story, and the possibility are all part of your first impression.",
        },
        knowledge: {
          title: "What becomes clear",
          body:
            "As you move deeper, you begin to see how food, wellness, family history, youth opportunity, and community renewal are connected.",
        },
        purpose: {
          title: "Why this matters to you",
          body:
            "This pathway is personal because it invites you to care, not just observe. It gives meaning to what you are seeing.",
        },
        next: {
          title: "Where you can go next",
          body:
            "From here, you can continue into the story, the online store, partnership, events, and future engagement with the ecosystem.",
        },
      },
    },

    customer: {
      title: "Customer",
      subtitle:
        "Fresh food, nourishment, and choices that support your well-being.",
      personalLine:
        "This pathway is about what reaches your table, your habits, and your health.",
      whyItMatters:
        "This experience connects you to healthier choices that can become part of everyday life.",
      whatPeopleGain:
        "You gain clearer connection between fresh food, better choices, and lasting value.",
      panels: {
        soundbite: {
          title: "Fresh food is personal.",
          body:
            "What you choose to eat shapes energy, wellness, family life, and the kind of future you build around the table.",
        },
        intro: {
          title: "What you experience",
          body:
            "You encounter food that feels useful, appealing, and real. The experience is meant to make healthy choice feel natural, not distant.",
        },
        knowledge: {
          title: "What you begin to understand",
          body:
            "Fresh, local food is not just a product. It strengthens health, supports community resilience, and pushes back against overprocessed dependency.",
        },
        purpose: {
          title: "Why this matters to you",
          body:
            "This pathway helps you connect nourishment to action so the farm becomes part of your recurring healthy choices.",
        },
        next: {
          title: "Where you can go next",
          body:
            "You can continue into GrownBy, seasonal buying, repeat visits, events, and stronger connection to the farm’s offerings.",
        },
      },
    },

    marketplace: {
      title: "GrownBy",
      subtitle:
        "The online store for purchasing produce and supporting the ecosystem.",
      personalLine:
        "This is the online store where people across the ecosystem can purchase produce and support the work.",
      whyItMatters:
        "GrownBy gives customers, guests, volunteers, and supporters a direct place to purchase produce online.",
      whatPeopleGain:
        "Visitors gain convenient online access to produce and a direct way to support the ecosystem.",
      panels: {
        soundbite: {
          title: "GrownBy is the online store.",
          body:
            "This is where produce can be purchased online by people across the ecosystem.",
        },
        intro: {
          title: "What GrownBy means",
          body:
            "GrownBy serves the customer-facing purchasing side of the ecosystem through the online store.",
        },
        knowledge: {
          title: "What visitors understand",
          body:
            "This pathway makes clear where people go to purchase produce and support the work through the online marketplace.",
        },
        purpose: {
          title: "Why this pathway exists",
          body:
            "The ecosystem needs a clear buying destination. GrownBy is that destination.",
        },
        next: {
          title: "What comes next",
          body:
            "Visitors can enter the store, purchase produce, and stay connected through repeat support.",
        },
      },
    },

    grower: {
      title: "Grower",
      subtitle:
        "Growers register through the portal to participate in the ecosystem and benefit from the marketplace.",
      personalLine:
        "This pathway is for growers who want to enter the ecosystem, register through the portal, and gain access to marketplace participation and related benefits.",
      whyItMatters:
        "Registration is the gateway for growers to become part of the ecosystem and benefit from its marketplace opportunities.",
      whatPeopleGain:
        "Growers gain entry into the ecosystem, clearer participation pathways, visibility, and access to marketplace-related benefits through registration.",
      panels: {
        soundbite: {
          title: "The grower journey begins with registration.",
          body:
            "Growers register through the portal in order to become part of the ecosystem and benefit from the marketplace.",
        },
        intro: {
          title: "What this pathway means",
          body:
            "This pathway gives growers a clear way to enter the ecosystem formally through portal registration rather than remaining outside of its opportunities.",
        },
        knowledge: {
          title: "What growers come to understand",
          body:
            "Registration connects growers to participation, visibility, ecosystem alignment, and the benefits tied to marketplace involvement.",
        },
        purpose: {
          title: "Why this pathway exists",
          body:
            "This pathway exists so growers can move from interest to recognized participation through registration in the portal.",
        },
        next: {
          title: "What comes next",
          body:
            "After registering through the portal, growers can move deeper into the ecosystem and access the benefits associated with marketplace participation.",
        },
      },
    },

    youth: {
      title: "Youth Workforce",
      subtitle: "Growth, responsibility, support, and future readiness.",
      personalLine:
        "This pathway is about becoming stronger, more prepared, and more confident.",
      whyItMatters:
        "It helps young people and families see a real bridge between potential and preparation.",
      whatPeopleGain:
        "You gain structure, readiness, support, confidence, and clearer future direction.",
      panels: {
        soundbite: {
          title: "This pathway grows people.",
          body:
            "It is not just about tasks. It is about confidence, readiness, responsibility, and learning how to move forward with support.",
        },
        intro: {
          title: "What you experience",
          body:
            "You encounter a place where guidance, accountability, encouragement, and practical work all come together.",
        },
        knowledge: {
          title: "What you build here",
          body:
            "You build work habits, teamwork, discipline, agricultural exposure, logistics awareness, and personal growth through lived experience.",
        },
        purpose: {
          title: "Why this matters to you",
          body:
            "This pathway gives shape to what is possible by helping potential turn into preparation.",
        },
        next: {
          title: "Where you can go next",
          body:
            "You can move into deeper roles, guided learning, responsibility, support systems, and stronger future direction.",
        },
      },
    },

    partners: {
      title: "Partners",
      subtitle: "Where aligned support creates visible community benefit.",
      personalLine:
        "This pathway shows how your support can be seen, felt, and understood.",
      whyItMatters:
        "It helps partners see where they fit and how their support becomes visible return.",
      whatPeopleGain:
        "You gain clearer understanding of how collaboration can strengthen food access, education, land restoration, and local impact.",
      panels: {
        soundbite: {
          title: "What you support here becomes visible.",
          body:
            "Partnership here is not abstract. Support becomes restoration, education, youth development, food access, and practical benefit people can see.",
        },
        intro: {
          title: "What you experience",
          body:
            "You see a credible ecosystem where aligned support connects directly to visible outcomes and long-term value.",
        },
        knowledge: {
          title: "What becomes clear",
          body:
            "This pathway shows how partnership can strengthen programs, events, learning, food systems, and wider regional benefit.",
        },
        purpose: {
          title: "Why this matters to you",
          body:
            "It gives you a clear place to understand where support matters and how shared investment creates return.",
        },
        next: {
          title: "Where you can go next",
          body:
            "You can move into sponsorship, planning, activation, support roles, and deeper alignment with the broader ecosystem.",
        },
      },
    },
  },

  es: {
    guest: {
      title: "Invitado",
      subtitle: "Comience sintiendo la tierra, la historia y el propósito.",
      personalLine:
        "No solo está visitando. Está siendo recibido dentro de una visión viva.",
      whyItMatters:
        "Esta experiencia le ayuda a comprender por qué esta tierra importa y por qué el trabajo debe continuar.",
      whatPeopleGain:
        "Usted se va con conexión emocional, comprensión más clara y una razón para regresar.",
      panels: {
        soundbite: {
          title: "Está entrando en algo más que una granja.",
          body:
            "Este es un lugar donde la tierra, el legado, el acceso a los alimentos, la restauración y la esperanza se mantienen unidos en una experiencia viva.",
        },
        intro: {
          title: "Lo que siente primero",
          body:
            "Aquí debe sentirse con los pies en la tierra. La tierra, el silencio, la historia y la posibilidad forman parte de su primera impresión.",
        },
        knowledge: {
          title: "Lo que se vuelve claro",
          body:
            "A medida que avanza, comienza a ver cómo se conectan la comida, el bienestar, la historia familiar, la oportunidad juvenil y la renovación comunitaria.",
        },
        purpose: {
          title: "Por qué esto le importa",
          body:
            "Esta ruta es personal porque le invita a interesarse, no solo a observar. Da sentido a lo que está viendo.",
        },
        next: {
          title: "A dónde puede ir después",
          body:
            "Desde aquí puede continuar hacia la historia, la tienda en línea, las alianzas, los eventos y la participación futura dentro del ecosistema.",
        },
      },
    },

    customer: {
      title: "Cliente",
      subtitle:
        "Comida fresca, nutrición y elecciones que apoyan su bienestar.",
      personalLine:
        "Esta ruta trata de lo que llega a su mesa, a sus hábitos y a su salud.",
      whyItMatters:
        "Esta experiencia le conecta con opciones más saludables que pueden formar parte de la vida diaria.",
      whatPeopleGain:
        "Usted obtiene una conexión más clara entre comida fresca, mejores decisiones y valor duradero.",
      panels: {
        soundbite: {
          title: "La comida fresca es personal.",
          body:
            "Lo que usted decide comer moldea la energía, el bienestar, la vida familiar y el tipo de futuro que construye alrededor de la mesa.",
        },
        intro: {
          title: "Lo que experimenta",
          body:
            "Encuentra alimentos que se sienten útiles, atractivos y reales. La experiencia busca que la elección saludable se sienta natural, no distante.",
        },
        knowledge: {
          title: "Lo que empieza a comprender",
          body:
            "La comida fresca y local no es solo un producto. Fortalece la salud, apoya la resiliencia comunitaria y reduce la dependencia de alimentos ultraprocesados.",
        },
        purpose: {
          title: "Por qué esto le importa",
          body:
            "Esta ruta le ayuda a conectar la alimentación con la acción para que la granja se convierta en parte de sus decisiones saludables repetidas.",
        },
        next: {
          title: "A dónde puede ir después",
          body:
            "Puede continuar hacia GrownBy, compras de temporada, visitas repetidas, eventos y una conexión más fuerte con la oferta de la granja.",
        },
      },
    },

    marketplace: {
      title: "GrownBy",
      subtitle:
        "La tienda en línea para comprar productos y apoyar el ecosistema.",
      personalLine:
        "Esta es la tienda en línea donde personas de todo el ecosistema pueden comprar productos y apoyar el trabajo.",
      whyItMatters:
        "GrownBy brinda a clientes, invitados, voluntarios y simpatizantes un lugar directo para comprar productos en línea.",
      whatPeopleGain:
        "Los visitantes obtienen acceso conveniente a productos en línea y una forma directa de apoyar el ecosistema.",
      panels: {
        soundbite: {
          title: "GrownBy es la tienda en línea.",
          body:
            "Aquí es donde las personas de todo el ecosistema pueden comprar productos en línea.",
        },
        intro: {
          title: "Qué significa GrownBy",
          body:
            "GrownBy sirve al lado de compra del ecosistema a través de la tienda en línea orientada al cliente.",
        },
        knowledge: {
          title: "Lo que los visitantes entienden",
          body:
            "Esta ruta deja claro a dónde van las personas para comprar productos y apoyar el trabajo a través del mercado en línea.",
        },
        purpose: {
          title: "Por qué esta ruta existe",
          body:
            "El ecosistema necesita un destino claro para comprar. GrownBy es ese destino.",
        },
        next: {
          title: "Qué viene después",
          body:
            "Los visitantes pueden entrar a la tienda, comprar productos y seguir conectados mediante apoyo repetido.",
        },
      },
    },

    grower: {
      title: "Productor",
      subtitle:
        "Los productores se registran a través del portal para participar en el ecosistema y beneficiarse del mercado.",
      personalLine:
        "Esta ruta es para productores que desean entrar al ecosistema, registrarse a través del portal y acceder a la participación en el mercado y a sus beneficios.",
      whyItMatters:
        "El registro es la puerta de entrada para que los productores formen parte del ecosistema y se beneficien de las oportunidades del mercado.",
      whatPeopleGain:
        "Los productores obtienen entrada al ecosistema, rutas de participación más claras, visibilidad y acceso a beneficios relacionados con el mercado mediante el registro.",
      panels: {
        soundbite: {
          title: "El camino del productor comienza con el registro.",
          body:
            "Los productores se registran a través del portal para convertirse en parte del ecosistema y beneficiarse del mercado.",
        },
        intro: {
          title: "Lo que significa esta ruta",
          body:
            "Esta ruta ofrece a los productores una forma clara de entrar formalmente en el ecosistema mediante el registro en el portal en lugar de permanecer fuera de sus oportunidades.",
        },
        knowledge: {
          title: "Lo que los productores comprenden",
          body:
            "El registro conecta a los productores con participación, visibilidad, alineación con el ecosistema y beneficios vinculados a la participación en el mercado.",
        },
        purpose: {
          title: "Por qué esta ruta existe",
          body:
            "Esta ruta existe para que los productores pasen del interés a la participación reconocida mediante el registro en el portal.",
        },
        next: {
          title: "Qué viene después",
          body:
            "Después de registrarse a través del portal, los productores pueden avanzar más dentro del ecosistema y acceder a los beneficios asociados con la participación en el mercado.",
        },
      },
    },

    youth: {
      title: "Fuerza Laboral Juvenil",
      subtitle:
        "Crecimiento, responsabilidad, apoyo y preparación para el futuro.",
      personalLine:
        "Esta ruta trata de volverse más fuerte, más preparado y más seguro.",
      whyItMatters:
        "Ayuda a jóvenes y familias a ver un puente real entre potencial y preparación.",
      whatPeopleGain:
        "Usted obtiene estructura, preparación, apoyo, confianza y una dirección futura más clara.",
      panels: {
        soundbite: {
          title: "Esta ruta hace crecer a las personas.",
          body:
            "No se trata solo de tareas. Se trata de confianza, preparación, responsabilidad y aprender a avanzar con apoyo.",
        },
        intro: {
          title: "Lo que experimenta",
          body:
            "Encuentra un lugar donde la orientación, la responsabilidad, el ánimo y el trabajo práctico se unen.",
        },
        knowledge: {
          title: "Lo que construye aquí",
          body:
            "Construye hábitos de trabajo, trabajo en equipo, disciplina, exposición agrícola, comprensión logística y crecimiento personal a través de la experiencia vivida.",
        },
        purpose: {
          title: "Por qué esto le importa",
          body:
            "Esta ruta da forma a lo posible al ayudar a que el potencial se convierta en preparación.",
        },
        next: {
          title: "A dónde puede ir después",
          body:
            "Puede avanzar hacia roles más profundos, aprendizaje guiado, responsabilidad, sistemas de apoyo y una dirección futura más sólida.",
        },
      },
    },

    partners: {
      title: "Socios",
      subtitle:
        "Donde el apoyo alineado crea un beneficio comunitario visible.",
      personalLine:
        "Esta ruta muestra cómo su apoyo puede verse, sentirse y comprenderse.",
      whyItMatters:
        "Ayuda a los socios a ver dónde encajan y cómo su apoyo se convierte en retorno visible.",
      whatPeopleGain:
        "Usted obtiene una comprensión más clara de cómo la colaboración puede fortalecer el acceso a los alimentos, la educación, la restauración de la tierra y el impacto local.",
      panels: {
        soundbite: {
          title: "Lo que usted apoya aquí se vuelve visible.",
          body:
            "La colaboración aquí no es abstracta. El apoyo se convierte en restauración, educación, desarrollo juvenil, acceso a alimentos y beneficio práctico que la gente puede ver.",
        },
        intro: {
          title: "Lo que experimenta",
          body:
            "Ve un ecosistema creíble donde el apoyo alineado conecta directamente con resultados visibles y valor a largo plazo.",
        },
        knowledge: {
          title: "Lo que se vuelve claro",
          body:
            "Esta ruta muestra cómo la colaboración puede fortalecer programas, eventos, aprendizaje, sistemas alimentarios y un beneficio regional más amplio.",
        },
        purpose: {
          title: "Por qué esto le importa",
          body:
            "Le brinda un lugar claro para comprender dónde importa el apoyo y cómo la inversión compartida crea retorno.",
        },
        next: {
          title: "A dónde puede ir después",
          body:
            "Puede avanzar hacia patrocinio, planificación, activación, funciones de apoyo y una alineación más profunda con el ecosistema más amplio.",
        },
      },
    },
  },

  tl: {
    guest: {
      title: "Guest",
      subtitle: "Magsimula sa pagdama sa lupa, kuwento, at layunin.",
      personalLine:
        "Hindi ka lang bumibisita. Tinatanggap ka sa isang buhay na pananaw.",
      whyItMatters:
        "Tinutulungan ka ng karanasang ito na maunawaan kung bakit mahalaga ang lupang ito at bakit dapat magpatuloy ang gawaing ito.",
      whatPeopleGain:
        "Aalis ka na may emosyonal na koneksyon, mas malinaw na pag-unawa, at dahilan para bumalik.",
      panels: {
        soundbite: {
          title: "Higit pa ito sa isang farm.",
          body:
            "Ito ay lugar kung saan ang lupa, pamana, food access, restoration, at pag-asa ay pinagsasama sa isang buhay na karanasan.",
        },
        intro: {
          title: "Ano ang una mong mararamdaman",
          body:
            "Dito dapat mong maramdaman ang pagiging grounded. Ang lupa, katahimikan, kuwento, at posibilidad ay bahagi ng iyong unang impresyon.",
        },
        knowledge: {
          title: "Ano ang luminaw",
          body:
            "Habang lumalalim ka, mas makikita mo kung paano nagkakaugnay ang pagkain, wellness, family history, youth opportunity, at community renewal.",
        },
        purpose: {
          title: "Bakit ito mahalaga sa iyo",
          body:
            "Personal ang pathway na ito dahil iniimbitahan kang magmalasakit, hindi lang tumingin. Binibigyan nito ng kahulugan ang iyong nakikita.",
        },
        next: {
          title: "Saan ka susunod pupunta",
          body:
            "Mula rito, maaari kang magpatuloy sa kuwento, online store, partnership, events, at future engagement sa ecosystem.",
        },
      },
    },

    customer: {
      title: "Customer",
      subtitle:
        "Sariwang pagkain, sustansya, at mga pagpiling sumusuporta sa iyong kabutihan.",
      personalLine:
        "Ang pathway na ito ay tungkol sa pagkain sa iyong hapag, sa iyong mga gawi, at sa iyong kalusugan.",
      whyItMatters:
        "Ikinokonekta ka ng karanasang ito sa mas malusog na mga pagpili na maaaring maging bahagi ng pang-araw-araw na buhay.",
      whatPeopleGain:
        "Mas malinaw mong mauunawaan ang ugnayan ng sariwang pagkain, mas mabuting pagpili, at pangmatagalang halaga.",
      panels: {
        soundbite: {
          title: "Personal ang sariwang pagkain.",
          body:
            "Ang pinipili mong kainin ay humuhubog sa enerhiya, wellness, buhay-pamilya, at uri ng kinabukasang binubuo mo sa hapag.",
        },
        intro: {
          title: "Ano ang iyong mararanasan",
          body:
            "Makakaranas ka ng pagkaing kapaki-pakinabang, kaakit-akit, at totoo. Nilalayon ng karanasang ito na gawing natural ang healthy choice.",
        },
        knowledge: {
          title: "Ano ang mas maiintindihan mo",
          body:
            "Ang sariwa at lokal na pagkain ay hindi lang produkto. Pinapalakas nito ang kalusugan, komunidad, at lumalaban sa sobrang pagdepende sa processed food.",
        },
        purpose: {
          title: "Bakit ito mahalaga sa iyo",
          body:
            "Tinutulungan ka ng pathway na ito na ikonekta ang nourishment sa action upang maging bahagi ng paulit-ulit mong healthy choices ang farm.",
        },
        next: {
          title: "Saan ka susunod pupunta",
          body:
            "Maaari kang magpatuloy sa GrownBy, seasonal buying, repeat visits, events, at mas matibay na koneksyon sa mga alok ng farm.",
        },
      },
    },

    marketplace: {
      title: "GrownBy",
      subtitle:
        "Ang online store para sa pagbili ng produce at pagsuporta sa ecosystem.",
      personalLine:
        "Ito ang online store kung saan ang mga tao sa buong ecosystem ay maaaring bumili ng produce at sumuporta sa gawain.",
      whyItMatters:
        "Nagbibigay ang GrownBy ng direktang lugar para sa customers, guests, volunteers, at supporters upang bumili ng produce online.",
      whatPeopleGain:
        "Nagkakaroon ang mga bisita ng madaling online access sa produce at direktang paraan upang suportahan ang ecosystem.",
      panels: {
        soundbite: {
          title: "Ang GrownBy ang online store.",
          body:
            "Dito maaaring bumili ng produce online ang mga tao sa buong ecosystem.",
        },
        intro: {
          title: "Ano ang ibig sabihin ng GrownBy",
          body:
            "Ang GrownBy ang customer-facing purchasing side ng ecosystem sa pamamagitan ng online store.",
        },
        knowledge: {
          title: "Ano ang nauunawaan ng mga bisita",
          body:
            "Nililinaw ng pathway na ito kung saan pumupunta ang mga tao upang bumili ng produce at suportahan ang gawain sa online marketplace.",
        },
        purpose: {
          title: "Bakit umiiral ang pathway na ito",
          body:
            "Kailangan ng ecosystem ng malinaw na buying destination. Ang GrownBy ang destinasyong iyon.",
        },
        next: {
          title: "Ano ang susunod",
          body:
            "Maaaring pumasok ang mga bisita sa store, bumili ng produce, at manatiling konektado sa pamamagitan ng paulit-ulit na suporta.",
        },
      },
    },

    grower: {
      title: "Grower",
      subtitle:
        "Nagpaparehistro ang growers sa portal upang makilahok sa ecosystem at makinabang sa marketplace.",
      personalLine:
        "Ang pathway na ito ay para sa growers na gustong pumasok sa ecosystem, magparehistro sa portal, at makakuha ng access sa marketplace participation at kaugnay na benepisyo.",
      whyItMatters:
        "Ang registration ang daan para maging bahagi ang growers ng ecosystem at makinabang sa marketplace opportunities nito.",
      whatPeopleGain:
        "Nagkakaroon ang growers ng entry sa ecosystem, mas malinaw na participation pathways, visibility, at access sa marketplace-related benefits sa pamamagitan ng registration.",
      panels: {
        soundbite: {
          title: "Nagsisimula sa registration ang grower journey.",
          body:
            "Nagpaparehistro ang growers sa portal upang maging bahagi ng ecosystem at makinabang sa marketplace.",
        },
        intro: {
          title: "Ano ang ibig sabihin ng pathway na ito",
          body:
            "Nagbibigay ang pathway na ito ng malinaw na paraan para pormal na makapasok ang growers sa ecosystem sa pamamagitan ng portal registration.",
        },
        knowledge: {
          title: "Ano ang mas nauunawaan ng growers",
          body:
            "Ikinokonekta ng registration ang growers sa participation, visibility, ecosystem alignment, at mga benepisyong kaugnay ng marketplace involvement.",
        },
        purpose: {
          title: "Bakit umiiral ang pathway na ito",
          body:
            "Umiiral ito upang makalipat ang growers mula sa interes tungo sa kinikilalang participation sa pamamagitan ng registration sa portal.",
        },
        next: {
          title: "Ano ang susunod",
          body:
            "Pagkatapos magparehistro sa portal, maaaring lumalim ang growers sa ecosystem at ma-access ang mga benepisyong kaugnay ng marketplace participation.",
        },
      },
    },

    youth: {
      title: "Youth Workforce",
      subtitle: "Paglago, responsibilidad, suporta, at kahandaan sa hinaharap.",
      personalLine:
        "Ang pathway na ito ay tungkol sa pagiging mas malakas, mas handa, at mas may kumpiyansa.",
      whyItMatters:
        "Tinutulungan nito ang kabataan at mga pamilya na makita ang tunay na tulay sa pagitan ng potensyal at paghahanda.",
      whatPeopleGain:
        "Nagkakaroon ka ng istruktura, kahandaan, suporta, kumpiyansa, at mas malinaw na direksyon sa hinaharap.",
      panels: {
        soundbite: {
          title: "Pinapalago ng pathway na ito ang tao.",
          body:
            "Hindi lang ito tungkol sa tasks. Ito ay tungkol sa confidence, readiness, responsibility, at pagkatutong umusad nang may suporta.",
        },
        intro: {
          title: "Ano ang iyong mararanasan",
          body:
            "Makakaranas ka ng lugar kung saan nagsasama ang guidance, accountability, encouragement, at practical work.",
        },
        knowledge: {
          title: "Ano ang nabubuo mo rito",
          body:
            "Nabubuo rito ang work habits, teamwork, discipline, agricultural exposure, logistics awareness, at personal growth sa pamamagitan ng lived experience.",
        },
        purpose: {
          title: "Bakit ito mahalaga sa iyo",
          body:
            "Binibigyan ng pathway na ito ng hugis ang posible sa pamamagitan ng pagtulong na maging paghahanda ang potensyal.",
        },
        next: {
          title: "Saan ka susunod pupunta",
          body:
            "Maaari kang lumipat sa mas malalim na roles, guided learning, responsibility, support systems, at mas matibay na direksyon sa hinaharap.",
        },
      },
    },

    partners: {
      title: "Partners",
      subtitle:
        "Kung saan ang aligned support ay lumilikha ng nakikitang benepisyo sa komunidad.",
      personalLine:
        "Ipinapakita ng pathway na ito kung paano makikita, mararamdaman, at mauunawaan ang iyong suporta.",
      whyItMatters:
        "Tinutulungan nito ang partners na makita kung saan sila nababagay at kung paano nagiging visible return ang kanilang suporta.",
      whatPeopleGain:
        "Mas malinaw mong mauunawaan kung paano mapapalakas ng collaboration ang food access, education, land restoration, at local impact.",
      panels: {
        soundbite: {
          title: "Nagiging nakikita ang sinusuportahan mo rito.",
          body:
            "Hindi abstract ang partnership dito. Nagiging restoration, education, youth development, food access, at praktikal na benepisyong nakikita ng tao ang suporta.",
        },
        intro: {
          title: "Ano ang iyong mararanasan",
          body:
            "Makikita mo ang isang credible ecosystem kung saan direktang konektado ang aligned support sa visible outcomes at long-term value.",
        },
        knowledge: {
          title: "Ano ang luminaw",
          body:
            "Ipinapakita ng pathway na ito kung paano mapapalakas ng partnership ang programs, events, learning, food systems, at mas malawak na regional benefit.",
        },
        purpose: {
          title: "Bakit ito mahalaga sa iyo",
          body:
            "Binibigyan ka nito ng malinaw na lugar upang maunawaan kung saan mahalaga ang suporta at paano lumilikha ng return ang shared investment.",
        },
        next: {
          title: "Saan ka susunod pupunta",
          body:
            "Maaari kang lumipat sa sponsorship, planning, activation, support roles, at mas malalim na alignment sa mas malawak na ecosystem.",
        },
      },
    },
  },

  it: {
    guest: {
      title: "Ospite",
      subtitle: "Inizia sentendo la terra, la storia e lo scopo.",
      personalLine:
        "Non stai solo visitando. Sei accolto dentro una visione viva.",
      whyItMatters:
        "Questa esperienza ti aiuta a capire perché questa terra conta e perché il lavoro deve continuare.",
      whatPeopleGain:
        "Te ne vai con connessione emotiva, comprensione più chiara e una ragione per tornare.",
      panels: {
        soundbite: {
          title: "Stai entrando in qualcosa di più di una fattoria.",
          body:
            "Questo è un luogo dove terra, eredità, accesso al cibo, ripristino e speranza sono tenuti insieme in un'unica esperienza viva.",
        },
        intro: {
          title: "Ciò che senti per primo",
          body:
            "Qui dovresti sentirti radicato. La terra, il silenzio, la storia e la possibilità fanno tutti parte della tua prima impressione.",
        },
        knowledge: {
          title: "Ciò che diventa chiaro",
          body:
            "Andando più a fondo, inizi a vedere come cibo, benessere, storia familiare, opportunità per i giovani e rinnovamento della comunità siano collegati.",
        },
        purpose: {
          title: "Perché questo conta per te",
          body:
            "Questo percorso è personale perché ti invita a prendertene cura, non solo a osservare. Dà significato a ciò che stai vedendo.",
        },
        next: {
          title: "Dove puoi andare dopo",
          body:
            "Da qui puoi continuare verso la storia, il negozio online, la partnership, gli eventi e il coinvolgimento futuro nell'ecosistema.",
        },
      },
    },

    customer: {
      title: "Cliente",
      subtitle:
        "Cibo fresco, nutrimento e scelte che sostengono il tuo benessere.",
      personalLine:
        "Questo percorso riguarda ciò che arriva sulla tua tavola, le tue abitudini e la tua salute.",
      whyItMatters:
        "Questa esperienza ti collega a scelte più sane che possono diventare parte della vita quotidiana.",
      whatPeopleGain:
        "Ottieni una connessione più chiara tra cibo fresco, scelte migliori e valore duraturo.",
      panels: {
        soundbite: {
          title: "Il cibo fresco è personale.",
          body:
            "Ciò che scegli di mangiare plasma energia, benessere, vita familiare e il tipo di futuro che costruisci attorno alla tavola.",
        },
        intro: {
          title: "Cosa sperimenti",
          body:
            "Incontri cibo utile, attraente e reale. L'esperienza vuole far sentire naturale la scelta salutare, non distante.",
        },
        knowledge: {
          title: "Cosa inizi a capire",
          body:
            "Il cibo fresco e locale non è solo un prodotto. Rafforza la salute, sostiene la resilienza della comunità e contrasta la dipendenza dagli alimenti ultra-processati.",
        },
        purpose: {
          title: "Perché questo conta per te",
          body:
            "Questo percorso ti aiuta a collegare nutrimento e azione così che la fattoria diventi parte delle tue scelte sane ricorrenti.",
        },
        next: {
          title: "Dove puoi andare dopo",
          body:
            "Puoi continuare verso GrownBy, acquisti stagionali, visite ripetute, eventi e una connessione più forte con l'offerta della fattoria.",
        },
      },
    },

    marketplace: {
      title: "GrownBy",
      subtitle:
        "Il negozio online per acquistare prodotti e sostenere l'ecosistema.",
      personalLine:
        "Questo è il negozio online dove le persone di tutto l'ecosistema possono acquistare prodotti e sostenere il lavoro.",
      whyItMatters:
        "GrownBy offre a clienti, ospiti, volontari e sostenitori un luogo diretto dove acquistare prodotti online.",
      whatPeopleGain:
        "I visitatori ottengono accesso comodo ai prodotti online e un modo diretto per sostenere l'ecosistema.",
      panels: {
        soundbite: {
          title: "GrownBy è il negozio online.",
          body:
            "Qui le persone di tutto l'ecosistema possono acquistare prodotti online.",
        },
        intro: {
          title: "Cosa significa GrownBy",
          body:
            "GrownBy rappresenta il lato d'acquisto rivolto al cliente dell'ecosistema attraverso il negozio online.",
        },
        knowledge: {
          title: "Cosa comprendono i visitatori",
          body:
            "Questo percorso chiarisce dove le persone vanno per acquistare prodotti e sostenere il lavoro attraverso il mercato online.",
        },
        purpose: {
          title: "Perché questo percorso esiste",
          body:
            "L'ecosistema ha bisogno di una destinazione chiara per l'acquisto. GrownBy è quella destinazione.",
        },
        next: {
          title: "Cosa viene dopo",
          body:
            "I visitatori possono entrare nel negozio, acquistare prodotti e restare connessi attraverso un sostegno ricorrente.",
        },
      },
    },

    grower: {
      title: "Coltivatore",
      subtitle:
        "I coltivatori si registrano attraverso il portale per partecipare all'ecosistema e beneficiare del marketplace.",
      personalLine:
        "Questo percorso è per i coltivatori che vogliono entrare nell'ecosistema, registrarsi attraverso il portale e ottenere accesso alla partecipazione al marketplace e ai relativi benefici.",
      whyItMatters:
        "La registrazione è la porta d'accesso che consente ai coltivatori di diventare parte dell'ecosistema e beneficiare delle sue opportunità di mercato.",
      whatPeopleGain:
        "I coltivatori ottengono accesso all'ecosistema, percorsi di partecipazione più chiari, visibilità e accesso ai benefici legati al marketplace tramite la registrazione.",
      panels: {
        soundbite: {
          title: "Il percorso del coltivatore inizia con la registrazione.",
          body:
            "I coltivatori si registrano attraverso il portale per diventare parte dell'ecosistema e beneficiare del marketplace.",
        },
        intro: {
          title: "Cosa significa questo percorso",
          body:
            "Questo percorso offre ai coltivatori un modo chiaro per entrare formalmente nell'ecosistema tramite la registrazione al portale invece di restare fuori dalle sue opportunità.",
        },
        knowledge: {
          title: "Cosa arrivano a capire i coltivatori",
          body:
            "La registrazione collega i coltivatori a partecipazione, visibilità, allineamento con l'ecosistema e benefici legati al coinvolgimento nel marketplace.",
        },
        purpose: {
          title: "Perché questo percorso esiste",
          body:
            "Questo percorso esiste per permettere ai coltivatori di passare dall'interesse a una partecipazione riconosciuta attraverso la registrazione nel portale.",
        },
        next: {
          title: "Cosa viene dopo",
          body:
            "Dopo essersi registrati attraverso il portale, i coltivatori possono approfondire il loro ruolo nell'ecosistema e accedere ai benefici associati alla partecipazione nel marketplace.",
        },
      },
    },

    youth: {
      title: "Forza Lavoro Giovanile",
      subtitle: "Crescita, responsabilità, supporto e preparazione al futuro.",
      personalLine:
        "Questo percorso riguarda il diventare più forti, più preparati e più fiduciosi.",
      whyItMatters:
        "Aiuta i giovani e le famiglie a vedere un ponte reale tra potenziale e preparazione.",
      whatPeopleGain:
        "Ottieni struttura, preparazione, supporto, fiducia e una direzione futura più chiara.",
      panels: {
        soundbite: {
          title: "Questo percorso fa crescere le persone.",
          body:
            "Non riguarda solo i compiti. Riguarda fiducia, preparazione, responsabilità e imparare ad andare avanti con supporto.",
        },
        intro: {
          title: "Cosa sperimenti",
          body:
            "Incontri un luogo dove guida, responsabilità, incoraggiamento e lavoro pratico si uniscono.",
        },
        knowledge: {
          title: "Cosa costruisci qui",
          body:
            "Qui costruisci abitudini di lavoro, lavoro di squadra, disciplina, esposizione agricola, consapevolezza logistica e crescita personale attraverso l'esperienza vissuta.",
        },
        purpose: {
          title: "Perché questo conta per te",
          body:
            "Questo percorso dà forma al possibile aiutando il potenziale a diventare preparazione.",
        },
        next: {
          title: "Dove puoi andare dopo",
          body:
            "Puoi passare a ruoli più profondi, apprendimento guidato, responsabilità, sistemi di supporto e una direzione futura più forte.",
        },
      },
    },

    partners: {
      title: "Partner",
      subtitle:
        "Dove il supporto allineato crea un beneficio visibile per la comunità.",
      personalLine:
        "Questo percorso mostra come il tuo supporto possa essere visto, sentito e compreso.",
      whyItMatters:
        "Aiuta i partner a vedere dove si inseriscono e come il loro supporto diventa un ritorno visibile.",
      whatPeopleGain:
        "Ottieni una comprensione più chiara di come la collaborazione possa rafforzare accesso al cibo, educazione, ripristino della terra e impatto locale.",
      panels: {
        soundbite: {
          title: "Ciò che sostieni qui diventa visibile.",
          body:
            "La partnership qui non è astratta. Il supporto diventa ripristino, educazione, sviluppo giovanile, accesso al cibo e beneficio pratico che le persone possono vedere.",
        },
        intro: {
          title: "Cosa sperimenti",
          body:
            "Vedi un ecosistema credibile dove il supporto allineato si collega direttamente a risultati visibili e valore a lungo termine.",
        },
        knowledge: {
          title: "Cosa diventa chiaro",
          body:
            "
