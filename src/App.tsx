import React, { useEffect, useMemo, useRef, useState } from "react";

type LanguageKey = "en" | "es" | "tl" | "fr" | "it" | "he";
type RoleKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";
type StageKey = "soundbite" | "intro" | "knowledge" | "purpose" | "next";

type TranslatedText = Record<LanguageKey, string>;

type StageContent = {
  label: string;
  title: TranslatedText;
  body: TranslatedText;
  bullets?: TranslatedText[];
  cta?: {
    label: TranslatedText;
    href?: string;
    action?: "next" | "home" | "guide";
  };
};

type RoleContent = {
  key: RoleKey;
  shortLabel: string;
  title: TranslatedText;
  mission: TranslatedText;
  subtitle: TranslatedText;
  color: string;
  image: string;
  accent: string;
  outcome: TranslatedText;
  stages: Record<StageKey, StageContent>;
};

const LANGUAGES: { key: LanguageKey; label: string; speech: string; dir?: "ltr" | "rtl" }[] =
  [
    { key: "en", label: "English", speech: "en-US", dir: "ltr" },
    { key: "es", label: "Español", speech: "es-ES", dir: "ltr" },
    { key: "tl", label: "Tagalog", speech: "fil-PH", dir: "ltr" },
    { key: "fr", label: "Français", speech: "fr-FR", dir: "ltr" },
    { key: "it", label: "Italiano", speech: "it-IT", dir: "ltr" },
    { key: "he", label: "עברית", speech: "he-IL", dir: "rtl" },
  ];

const STAGE_ORDER: StageKey[] = ["soundbite", "intro", "knowledge", "purpose", "next"];

const BRAND = {
  farmName: "Bronson Family Farm",
  alliance: "Farm & Family Alliance",
  website: "https://www.bronsonfamilyfarm.com/",
  store: "https://grownby.com/farms/bronson-family-farm/shop",
  eventbrite: "https://www.eventbrite.com/",
  weather: "https://www.accuweather.com/en/us/youngstown/44503/minute-weather-forecast/330121",
};

const IMAGES = {
  hero:
    "/images/entrance.jpg",
  guest:
    "/images/guest.jpg",
  customer:
    "/images/customer-nutrition.jpg",
  marketplace:
    "/images/marketplace-storefront.jpg",
  grower:
    "/images/grower-network.jpg",
  youth:
    "/images/youth-workforce.jpg",
  partners:
    "/images/partners.jpg",
};

const t = (text: TranslatedText, lang: LanguageKey) => text[lang] || text.en;

const appData: Record<RoleKey, RoleContent> = {
  guest: {
    key: "guest",
    shortLabel: "Guest",
    color: "rgba(96, 148, 111, 0.16)",
    accent: "#95d5a6",
    image: IMAGES.guest,
    title: {
      en: "Guest Pathway",
      es: "Ruta del Invitado",
      tl: "Landas ng Bisita",
      fr: "Parcours Visiteur",
      it: "Percorso Ospite",
      he: "מסלול אורח",
    },
    subtitle: {
      en: "Understand the vision, story, and purpose of the land.",
      es: "Comprende la visión, la historia y el propósito de la tierra.",
      tl: "Unawain ang bisyon, kuwento, at layunin ng lupain.",
      fr: "Comprendre la vision, l’histoire et la raison d’être du site.",
      it: "Comprendere la visione, la storia e lo scopo del luogo.",
      he: "להבין את החזון, הסיפור והמטרה של האדמה.",
    },
    mission: {
      en: "The guest pathway helps visitors understand why this place exists, what is being restored here, and how the farm connects land, food, people, and legacy.",
      es: "La ruta del invitado ayuda a los visitantes a comprender por qué existe este lugar, qué se está restaurando aquí y cómo la granja conecta tierra, alimentos, personas y legado.",
      tl: "Tinutulungan ng landas ng bisita ang mga tao na maunawaan kung bakit umiiral ang lugar na ito, ano ang nire-restore dito, at paano inuugnay ng bukid ang lupa, pagkain, tao, at pamana.",
      fr: "Le parcours visiteur aide à comprendre pourquoi ce lieu existe, ce qui y est restauré et comment la ferme relie la terre, l’alimentation, les personnes et l’héritage.",
      it: "Il percorso ospite aiuta a capire perché questo luogo esiste, cosa viene ripristinato qui e come la fattoria collega terra, cibo, persone ed eredità.",
      he: "מסלול האורח מסייע להבין מדוע המקום הזה קיים, מה משוקם כאן, וכיצד החווה מחברת בין אדמה, מזון, אנשים ומורשת.",
    },
    outcome: {
      en: "Outcome: Guests leave understanding the story and wanting to return.",
      es: "Resultado: Los invitados se van comprendiendo la historia y queriendo regresar.",
      tl: "Kinalabasan: Umaalis ang mga bisita na nauunawaan ang kuwento at gustong bumalik.",
      fr: "Résultat : les visiteurs repartent en comprenant l’histoire et en voulant revenir.",
      it: "Risultato: gli ospiti comprendono la storia e vogliono tornare.",
      he: "תוצאה: האורחים עוזבים כשהם מבינים את הסיפור ורוצים לחזור.",
    },
    stages: {
      soundbite: {
        label: "Sound Bite",
        title: {
          en: "Step into the land behind the vision.",
          es: "Entre en la tierra detrás de la visión.",
          tl: "Pumasok sa lupang nasa likod ng bisyon.",
          fr: "Entrez dans la terre derrière la vision.",
          it: "Entra nella terra dietro la visione.",
          he: "היכנסו אל האדמה שמאחורי החזון.",
        },
        body: {
          en: "This is more than a farm. It is a regenerative place where story, land restoration, food access, and family legacy meet.",
          es: "Esto es más que una granja. Es un lugar regenerativo donde se unen la historia, la restauración de la tierra, el acceso a alimentos y el legado familiar.",
          tl: "Higit ito sa isang bukid. Isa itong regeneratibong lugar kung saan nagtatagpo ang kuwento, pagpapanumbalik ng lupa, access sa pagkain, at pamana ng pamilya.",
          fr: "C’est plus qu’une ferme. C’est un lieu régénératif où se rejoignent histoire, restauration de la terre, accès à l’alimentation et héritage familial.",
          it: "È più di una fattoria. È un luogo rigenerativo dove si incontrano storia, recupero della terra, accesso al cibo ed eredità familiare.",
          he: "זה יותר מחווה. זהו מקום מתחדש שבו נפגשים סיפור, שיקום קרקע, גישה למזון ומורשת משפחתית.",
        },
        cta: {
          label: {
            en: "Continue",
            es: "Continuar",
            tl: "Magpatuloy",
            fr: "Continuer",
            it: "Continua",
            he: "המשך",
          },
          action: "next",
        },
      },
      intro: {
        label: "Intro",
        title: {
          en: "Why this place matters",
          es: "Por qué importa este lugar",
          tl: "Bakit mahalaga ang lugar na ito",
          fr: "Pourquoi ce lieu compte",
          it: "Perché questo luogo conta",
          he: "למה המקום הזה חשוב",
        },
        body: {
          en: "Bronson Family Farm grows from family memory, agricultural heritage, and a commitment to transform underused land into a place of nourishment, beauty, and opportunity for Youngstown.",
          es: "Bronson Family Farm surge de la memoria familiar, la herencia agrícola y el compromiso de transformar tierras subutilizadas en un lugar de alimento, belleza y oportunidad para Youngstown.",
          tl: "Ang Bronson Family Farm ay nagmumula sa alaala ng pamilya, pamana sa agrikultura, at pangakong gawing lugar ng pagkain, ganda, at oportunidad para sa Youngstown ang hindi gaanong nagagamit na lupa.",
          fr: "Bronson Family Farm naît de la mémoire familiale, d’un héritage agricole et d’un engagement à transformer des terres sous-utilisées en un lieu de nourriture, de beauté et d’opportunités pour Youngstown.",
          it: "Bronson Family Farm nasce dalla memoria familiare, dall’eredità agricola e dall’impegno a trasformare terreni sottoutilizzati in un luogo di nutrimento, bellezza e opportunità per Youngstown.",
          he: "חוות ברונסון נולדה מזיכרון משפחתי, מורשת חקלאית ומחויבות להפוך קרקע לא מנוצלת למקום של הזנה, יופי והזדמנות עבור יאנגסטאון.",
        },
        bullets: [
          {
            en: "Restoring the land through regenerative growing",
            es: "Restaurando la tierra mediante cultivo regenerativo",
            tl: "Pagpapanumbalik ng lupa sa pamamagitan ng regenerative growing",
            fr: "Restaurer la terre grâce à l’agriculture régénératrice",
            it: "Ripristino della terra attraverso coltivazione rigenerativa",
            he: "שיקום הקרקע באמצעות חקלאות מתחדשת",
          },
          {
            en: "Connecting people to food, learning, and place",
            es: "Conectando a las personas con alimentos, aprendizaje y lugar",
            tl: "Pag-uugnay ng mga tao sa pagkain, pagkatuto, at lugar",
            fr: "Relier les personnes à l’alimentation, à l’apprentissage et au lieu",
            it: "Collegare le persone a cibo, apprendimento e luogo",
            he: "חיבור אנשים למזון, ללמידה ולמקום",
          },
          {
            en: "Building a legacy that serves families and community",
            es: "Construyendo un legado que sirve a las familias y a la comunidad",
            tl: "Pagbuo ng pamanang naglilingkod sa mga pamilya at komunidad",
            fr: "Construire un héritage au service des familles et de la communauté",
            it: "Costruire un’eredità al servizio di famiglie e comunità",
            he: "בניית מורשת המשרתת משפחות וקהילה",
          },
        ],
        cta: {
          label: {
            en: "Show me more",
            es: "Muéstrame más",
            tl: "Ipakita pa",
            fr: "Montrez-moi plus",
            it: "Mostrami di più",
            he: "הראה לי עוד",
          },
          action: "next",
        },
      },
      knowledge: {
        label: "Knowledge",
        title: {
          en: "What guests discover",
          es: "Lo que descubren los invitados",
          tl: "Ano ang natutuklasan ng mga bisita",
          fr: "Ce que découvrent les visiteurs",
          it: "Cosa scoprono gli ospiti",
          he: "מה האורחים מגלים",
        },
        body: {
          en: "Guests encounter a living ecosystem: growing areas, educational experiences, community events, family stories, and a vision that blends agriculture, agritourism, stewardship, and belonging.",
          es: "Los invitados encuentran un ecosistema vivo: áreas de cultivo, experiencias educativas, eventos comunitarios, historias familiares y una visión que combina agricultura, agroturismo, cuidado y pertenencia.",
          tl: "Natutuklasan ng mga bisita ang isang buhay na ecosystem: mga taniman, pang-edukasyong karanasan, pangkomunidad na mga kaganapan, kuwento ng pamilya, at bisyong pinagsasama ang agrikultura, agritourism, pangangalaga, at pag-aari.",
          fr: "Les visiteurs découvrent un écosystème vivant : zones de culture, expériences éducatives, événements communautaires, récits familiaux et une vision mêlant agriculture, agritourisme, soin du lieu et appartenance.",
          it: "Gli ospiti scoprono un ecosistema vivente: aree di coltivazione, esperienze educative, eventi comunitari, storie familiari e una visione che unisce agricoltura, agriturismo, cura del territorio e appartenenza.",
          he: "האורחים פוגשים מערכת אקולוגית חיה: אזורי גידול, חוויות לימודיות, אירועי קהילה, סיפורי משפחה וחזון המשלב חקלאות, אגריטוריזם, שמירה ושייכות.",
        },
        bullets: [
          {
            en: "The story of the land and its future",
            es: "La historia de la tierra y su futuro",
            tl: "Ang kuwento ng lupa at ng kinabukasan nito",
            fr: "L’histoire de la terre et de son avenir",
            it: "La storia della terra e del suo futuro",
            he: "הסיפור של האדמה ועתידה",
          },
          {
            en: "How food, learning, and healing connect",
            es: "Cómo se conectan la comida, el aprendizaje y la sanación",
            tl: "Paano nag-uugnay ang pagkain, pagkatuto, at paghilom",
            fr: "Comment l’alimentation, l’apprentissage et la guérison se rejoignent",
            it: "Come si collegano cibo, apprendimento e guarigione",
            he: "כיצד מזון, למידה וריפוי מתחברים",
          },
          {
            en: "Why people come back again and again",
            es: "Por qué la gente regresa una y otra vez",
            tl: "Bakit paulit-ulit na bumabalik ang mga tao",
            fr: "Pourquoi les gens reviennent encore et encore",
            it: "Perché le persone tornano ancora e ancora",
            he: "מדוע אנשים חוזרים שוב ושוב",
          },
        ],
        cta: {
          label: {
            en: "Why it matters",
            es: "Por qué importa",
            tl: "Bakit mahalaga",
            fr: "Pourquoi c’est important",
            it: "Perché conta",
            he: "למה זה חשוב",
          },
          action: "next",
        },
      },
      purpose: {
        label: "Purpose",
        title: {
          en: "Mission outcome",
          es: "Resultado de la misión",
          tl: "Kinalabasan ng misyon",
          fr: "Résultat de la mission",
          it: "Esito della missione",
          he: "תוצאת המשימה",
        },
        body: {
          en: "The guest journey is designed to move people from curiosity to understanding. Visitors do not just see the farm. They understand the mission and why this work belongs in the community.",
          es: "El recorrido del invitado está diseñado para llevar a las personas de la curiosidad al entendimiento. Los visitantes no solo ven la granja. Comprenden la misión y por qué este trabajo pertenece a la comunidad.",
          tl: "Ang paglalakbay ng bisita ay idinisenyo upang dalhin ang mga tao mula sa kuryosidad tungo sa pag-unawa. Hindi lamang nila nakikita ang bukid. Nauunawaan nila ang misyon at kung bakit mahalaga ang gawaing ito sa komunidad.",
          fr: "Le parcours visiteur est conçu pour faire passer les personnes de la curiosité à la compréhension. Elles ne voient pas seulement la ferme. Elles comprennent la mission et pourquoi ce travail appartient à la communauté.",
          it: "Il percorso ospite è pensato per portare le persone dalla curiosità alla comprensione. Non vedono soltanto la fattoria. Comprendono la missione e perché questo lavoro appartiene alla comunità.",
          he: "מסלול האורח נועד להעביר אנשים מסקרנות להבנה. הם לא רק רואים את החווה. הם מבינים את המשימה ומדוע העבודה הזאת שייכת לקהילה.",
        },
        cta: {
          label: {
            en: "Where can I go next?",
            es: "¿A dónde puedo ir después?",
            tl: "Saan ako susunod pupunta?",
            fr: "Où puis-je aller ensuite ?",
            it: "Dove posso andare dopo?",
            he: "לאן אפשר להמשיך מכאן?",
          },
          action: "next",
        },
      },
      next: {
        label: "Next",
        title: {
          en: "Choose your next destination",
          es: "Elige tu próximo destino",
          tl: "Piliin ang susunod mong destinasyon",
          fr: "Choisissez votre prochaine destination",
          it: "Scegli la tua prossima destinazione",
          he: "בחרו את היעד הבא שלכם",
        },
        body: {
          en: "Guests can continue into food, marketplace, grower, youth workforce, or partner pathways to see how the vision becomes action.",
          es: "Los invitados pueden continuar hacia las rutas de alimentos, mercado, productores, fuerza laboral juvenil o socios para ver cómo la visión se convierte en acción.",
          tl: "Maaaring magpatuloy ang mga bisita sa mga landas ng pagkain, marketplace, grower, youth workforce, o partners upang makita kung paano nagiging aksyon ang bisyon.",
          fr: "Les visiteurs peuvent poursuivre vers les parcours alimentation, marché, producteurs, jeunesse ou partenaires pour voir comment la vision devient action.",
          it: "Gli ospiti possono continuare nei percorsi cibo, mercato, coltivatori, lavoro giovanile o partner per vedere come la visione diventa azione.",
          he: "האורחים יכולים להמשיך למסלולי מזון, שוק, מגדלים, כוח עבודה צעיר או שותפים כדי לראות כיצד החזון הופך לפעולה.",
        },
        cta: {
          label: {
            en: "Back home",
            es: "Volver al inicio",
            tl: "Bumalik sa home",
            fr: "Retour à l’accueil",
            it: "Torna alla home",
            he: "חזרה לדף הבית",
          },
          action: "home",
        },
      },
    },
  },

  customer: {
    key: "customer",
    shortLabel: "Customer",
    color: "rgba(200, 170, 90, 0.16)",
    accent: "#f6d365",
    image: IMAGES.customer,
    title: {
      en: "Customer Pathway",
      es: "Ruta del Cliente",
      tl: "Landas ng Customer",
      fr: "Parcours Client",
      it: "Percorso Cliente",
      he: "מסלול לקוח",
    },
    subtitle: {
      en: "Fresh food, nutrition, and repeat healthy choices.",
      es: "Alimentos frescos, nutrición y decisiones saludables repetidas.",
      tl: "Sariwang pagkain, nutrisyon, at paulit-ulit na malusog na pagpili.",
      fr: "Produits frais, nutrition et choix sains répétés.",
      it: "Cibo fresco, nutrizione e scelte sane ripetute.",
      he: "מזון טרי, תזונה ובחירות בריאות חוזרות.",
    },
    mission: {
      en: "The customer pathway helps people connect healthy food with everyday life, making it easier to choose freshness, nutrition, and local produce again and again.",
      es: "La ruta del cliente ayuda a las personas a conectar la comida saludable con la vida diaria, facilitando elegir frescura, nutrición y productos locales una y otra vez.",
      tl: "Tinutulungan ng landas ng customer ang mga tao na iugnay ang masustansyang pagkain sa pang-araw-araw na buhay, upang mas madaling pumili ng sariwa, masustansya, at lokal na ani nang paulit-ulit.",
      fr: "Le parcours client aide les personnes à relier une alimentation saine à la vie quotidienne, pour choisir plus facilement fraîcheur, nutrition et production locale encore et encore.",
      it: "Il percorso cliente aiuta le persone a collegare il cibo sano alla vita quotidiana, rendendo più facile scegliere freschezza, nutrizione e prodotti locali più volte.",
      he: "מסלול הלקוח מסייע לחבר בין מזון בריא לחיי היומיום, כך שקל יותר לבחור טריות, תזונה ותוצרת מקומית שוב ושוב.",
    },
    outcome: {
      en: "Outcome: Customers return for fresh food and healthier routines.",
      es: "Resultado: Los clientes regresan por comida fresca y rutinas más saludables.",
      tl: "Kinalabasan: Bumabalik ang mga customer para sa sariwang pagkain at mas malusog na gawain.",
      fr: "Résultat : les clients reviennent pour des produits frais et de meilleures habitudes.",
      it: "Risultato: i clienti tornano per cibo fresco e abitudini più sane.",
      he: "תוצאה: לקוחות חוזרים בשביל מזון טרי והרגלים בריאים יותר.",
    },
    stages: {
      soundbite: {
        label: "Sound Bite",
        title: {
          en: "Food that supports life, not just appetite.",
          es: "Comida que apoya la vida, no solo el apetito.",
          tl: "Pagkaing sumusuporta sa buhay, hindi lang sa gana.",
          fr: "Une alimentation qui soutient la vie, pas seulement l’appétit.",
          it: "Cibo che sostiene la vita, non solo l’appetito.",
          he: "מזון שתומך בחיים, לא רק בתיאבון.",
        },
        body: {
          en: "Customers are invited into a healthier relationship with food through local produce, practical learning, and repeat access to fresh options.",
          es: "Se invita a los clientes a una relación más saludable con la comida mediante productos locales, aprendizaje práctico y acceso repetido a opciones frescas.",
          tl: "Inaanyayahan ang mga customer sa mas malusog na ugnayan sa pagkain sa pamamagitan ng lokal na ani, praktikal na pagkatuto, at paulit-ulit na access sa sariwang pagpipilian.",
          fr: "Les clients sont invités à une relation plus saine avec l’alimentation grâce à des produits locaux, un apprentissage pratique et un accès répété à des options fraîches.",
          it: "I clienti sono invitati a un rapporto più sano con il cibo attraverso prodotti locali, apprendimento pratico e accesso continuo a opzioni fresche.",
          he: "הלקוחות מוזמנים לקשר בריא יותר עם אוכל באמצעות תוצרת מקומית, למידה מעשית וגישה חוזרת לאפשרויות טריות.",
        },
        cta: {
          label: {
            en: "Continue",
            es: "Continuar",
            tl: "Magpatuloy",
            fr: "Continuer",
            it: "Continua",
            he: "המשך",
          },
          action: "next",
        },
      },
      intro: {
        label: "Intro",
        title: {
          en: "A customer experience built around access",
          es: "Una experiencia del cliente construida alrededor del acceso",
          tl: "Isang customer experience na nakatuon sa access",
          fr: "Une expérience client construite autour de l’accès",
          it: "Un’esperienza cliente costruita intorno all’accesso",
          he: "חוויית לקוח הבנויה סביב גישה",
        },
        body: {
          en: "The customer journey makes healthy choices easier. It brings people closer to real food, seasonal offerings, practical information, and simple reasons to come back.",
          es: "El recorrido del cliente facilita las decisiones saludables. Acerca a las personas a comida real, ofertas de temporada, información práctica y razones simples para volver.",
          tl: "Pinapadali ng customer journey ang mga malusog na pagpili. Inilalapit nito ang mga tao sa tunay na pagkain, pana-panahong alok, praktikal na impormasyon, at simpleng dahilan para bumalik.",
          fr: "Le parcours client facilite les choix sains. Il rapproche les personnes d’une vraie alimentation, d’offres saisonnières, d’informations pratiques et de raisons simples de revenir.",
          it: "Il percorso cliente rende più facili le scelte sane. Avvicina le persone a cibo vero, offerte stagionali, informazioni pratiche e semplici motivi per tornare.",
          he: "מסלול הלקוח הופך בחירות בריאות לקלות יותר. הוא מקרב אנשים לאוכל אמיתי, להצעות עונתיות, למידע מעשי ולסיבות פשוטות לחזור.",
        },
        bullets: [
          {
            en: "Fresh produce and seasonal availability",
            es: "Productos frescos y disponibilidad estacional",
            tl: "Sariwang ani at pana-panahong availability",
            fr: "Produits frais et disponibilité saisonnière",
            it: "Prodotti freschi e disponibilità stagionale",
            he: "תוצרת טרייה וזמינות עונתית",
          },
          {
            en: "Practical nutrition and food education",
            es: "Nutrición práctica y educación alimentaria",
            tl: "Praktikal na nutrisyon at edukasyon sa pagkain",
            fr: "Nutrition pratique et éducation alimentaire",
            it: "Nutrizione pratica ed educazione alimentare",
            he: "תזונה מעשית וחינוך למזון",
          },
          {
            en: "Reasons to return and shop again",
            es: "Razones para volver y comprar otra vez",
            tl: "Mga dahilan upang bumalik at muling mamili",
            fr: "Des raisons de revenir et d’acheter à nouveau",
            it: "Motivi per tornare e acquistare di nuovo",
            he: "סיבות לחזור ולקנות שוב",
          },
        ],
        cta: {
          label: {
            en: "Show customer knowledge",
            es: "Mostrar conocimiento del cliente",
            tl: "Ipakita ang customer knowledge",
            fr: "Montrer les connaissances client",
            it: "Mostra le informazioni cliente",
            he: "הצג ידע ללקוח",
          },
          action: "next",
        },
      },
      knowledge: {
        label: "Knowledge",
        title: {
          en: "How the customer pathway teaches",
          es: "Cómo enseña la ruta del cliente",
          tl: "Paano nagtuturo ang landas ng customer",
          fr: "Comment le parcours client enseigne",
          it: "Come il percorso cliente educa",
          he: "איך מסלול הלקוח מלמד",
        },
        body: {
          en: "Customers learn what fresh food looks like, why nutrition matters, how local food strengthens families, and how healthier choices can fit into regular life.",
          es: "Los clientes aprenden cómo se ve la comida fresca, por qué importa la nutrición, cómo la comida local fortalece a las familias y cómo las decisiones más saludables pueden encajar en la vida diaria.",
          tl: "Natututo ang mga customer kung ano ang hitsura ng sariwang pagkain, bakit mahalaga ang nutrisyon, paano pinapalakas ng lokal na pagkain ang mga pamilya, at paano maisasama ang mas malusog na pagpili sa araw-araw na buhay.",
          fr: "Les clients découvrent à quoi ressemble une alimentation fraîche, pourquoi la nutrition compte, comment l’alimentation locale renforce les familles et comment des choix plus sains peuvent s’intégrer à la vie quotidienne.",
          it: "I clienti imparano com’è il cibo fresco, perché la nutrizione conta, come il cibo locale rafforza le famiglie e come scelte più sane possano entrare nella vita quotidiana.",
          he: "הלקוחות לומדים איך נראה מזון טרי, למה תזונה חשובה, איך מזון מקומי מחזק משפחות ואיך בחירות בריאות יותר משתלבות בחיי היום-יום.",
        },
        bullets: [
          {
            en: "Fresh food over overprocessed substitutes",
            es: "Comida fresca en lugar de sustitutos ultraprocesados",
            tl: "Sariwang pagkain kaysa sa sobrang processed na kapalit",
            fr: "Des aliments frais plutôt que des substituts ultra-transformés",
            it: "Cibo fresco invece di sostituti ultra-processati",
            he: "מזון טרי במקום חלופות מעובדות יתר על המידה",
          },
          {
            en: "Simple learning people can use right away",
            es: "Aprendizaje simple que la gente puede usar de inmediato",
            tl: "Simpleng pagkatutong magagamit agad ng mga tao",
            fr: "Un apprentissage simple utilisable immédiatement",
            it: "Apprendimento semplice da usare subito",
            he: "למידה פשוטה שאפשר להשתמש בה מיד",
          },
          {
            en: "Healthy choice becomes repeat choice",
            es: "La elección saludable se convierte en elección repetida",
            tl: "Ang malusog na pagpili ay nagiging paulit-ulit na pagpili",
            fr: "Le choix sain devient un choix répété",
            it: "La scelta sana diventa una scelta ripetuta",
            he: "בחירה בריאה הופכת לבחירה חוזרת",
          },
        ],
        cta: {
          label: {
            en: "Purpose of this pathway",
            es: "Propósito de esta ruta",
            tl: "Layunin ng landas na ito",
            fr: "Objectif de ce parcours",
            it: "Scopo di questo percorso",
            he: "מטרת המסלול הזה",
          },
          action: "next",
        },
      },
      purpose: {
        label: "Purpose",
        title: {
          en: "Mission outcome",
          es: "Resultado de la misión",
          tl: "Kinalabasan ng misyon",
          fr: "Résultat de la mission",
          it: "Esito della missione",
          he: "תוצאת המשימה",
        },
        body: {
          en: "The customer pathway is successful when people trust the food, understand the value of freshness, and return because healthy eating feels possible and local.",
          es: "La ruta del cliente tiene éxito cuando las personas confían en la comida, comprenden el valor de la frescura y regresan porque
