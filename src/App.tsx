import React, { useEffect, useMemo, useState } from "react";

type LanguageKey = "en" | "es" | "tl" | "it" | "fr" | "he";
type PathwayKey =
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

type SectionKey = "soundbite" | "intro" | "knowledge" | "purpose" | "next";

type TranslatedText = Record<LanguageKey, string>;

type JourneySection = {
  key: SectionKey;
  title: string;
  text: TranslatedText;
};

type JourneyCard = {
  id: PathwayKey;
  label: string;
  mission: string;
  outcome: string;
  accent: string;
  image: string;
  bullets: string[];
  sections: JourneySection[];
};

const LANGUAGES: { key: LanguageKey; label: string }[] = [
  { key: "en", label: "English" },
  { key: "es", label: "Español" },
  { key: "tl", label: "Tagalog" },
  { key: "it", label: "Italiano" },
  { key: "fr", label: "Français" },
  { key: "he", label: "עברית" },
];

const IMAGE_MAP: Record<PathwayKey | "hero", string> = {
  hero:
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80",
  guest:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
  customer:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
  marketplace:
    "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
  grower:
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
  youth:
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
  partners:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
};

const sectionTitleMap: Record<SectionKey, string> = {
  soundbite: "Sound Bite",
  intro: "Introduction",
  knowledge: "Knowledge",
  purpose: "Purpose",
  next: "Next",
};

const PATHWAYS: JourneyCard[] = [
  {
    id: "guest",
    label: "Guest",
    mission: "Understand the vision, story, and purpose of Bronson Family Farm.",
    outcome:
      "Guests leave understanding why this land matters and why the work should continue.",
    accent: "from-amber-200/80 via-orange-200/60 to-emerald-100/60",
    image: IMAGE_MAP.guest,
    bullets: [
      "Step into the land, story, and mission.",
      "Understand how agriculture, wellness, and community connect.",
      "See why this work matters to Youngstown and the Mahoning Valley.",
    ],
    sections: [
      {
        key: "soundbite",
        title: sectionTitleMap.soundbite,
        text: {
          en: "A welcoming entry experience that turns curiosity into understanding.",
          es: "Una experiencia de entrada acogedora que convierte la curiosidad en comprensión.",
          tl: "Isang mainit na panimulang karanasan na ginagawang pag-unawa ang kuryosidad.",
          it: "Un'esperienza di ingresso accogliente che trasforma la curiosità in comprensione.",
          fr: "Une expérience d'accueil qui transforme la curiosité en compréhension.",
          he: "חוויית כניסה מזמינה שהופכת סקרנות להבנה.",
        },
      },
      {
        key: "intro",
        title: sectionTitleMap.intro,
        text: {
          en: "Bronson Family Farm is a regenerative farm and community-centered ecosystem developed to serve Mahoning Valley through food, learning, wellness, workforce, and partnership.",
          es: "Bronson Family Farm es una granja regenerativa y un ecosistema comunitario creado para servir al Valle de Mahoning mediante alimentos, aprendizaje, bienestar, fuerza laboral y alianzas.",
          tl: "Ang Bronson Family Farm ay isang regenerative farm at community-centered ecosystem na binuo upang maglingkod sa Mahoning Valley sa pamamagitan ng pagkain, pagkatuto, wellness, trabaho, at pakikipagtulungan.",
          it: "Bronson Family Farm è una fattoria rigenerativa e un ecosistema centrato sulla comunità, creato per servire la Mahoning Valley attraverso cibo, apprendimento, benessere, lavoro e partnership.",
          fr: "Bronson Family Farm est une ferme régénérative et un écosystème centré sur la communauté, conçu pour servir la Mahoning Valley par l'alimentation, l'apprentissage, le bien-être, l'emploi et les partenariats.",
          he: "Bronson Family Farm היא חווה מתחדשת ומערכת קהילתית שנבנתה כדי לשרת את עמק מהונינג באמצעות מזון, למידה, בריאות, תעסוקה ושותפויות.",
        },
      },
      {
        key: "knowledge",
        title: sectionTitleMap.knowledge,
        text: {
          en: "This pathway reveals the land, the story, the need, and the opportunity. It shows how food access, healing, youth development, grower support, and community return live together in one place.",
          es: "Esta ruta revela la tierra, la historia, la necesidad y la oportunidad. Muestra cómo el acceso a alimentos, la sanación, el desarrollo juvenil, el apoyo a productores y el beneficio comunitario conviven en un solo lugar.",
          tl: "Ipinapakita ng landas na ito ang lupain, kuwento, pangangailangan, at oportunidad. Ipinapakita nito kung paano nagsasama-sama sa iisang lugar ang food access, healing, youth development, grower support, at community return.",
          it: "Questo percorso rivela la terra, la storia, il bisogno e l'opportunità. Mostra come accesso al cibo, guarigione, sviluppo giovanile, supporto ai coltivatori e ritorno alla comunità convivano in un unico luogo.",
          fr: "Ce parcours révèle la terre, l'histoire, le besoin et l'opportunité. Il montre comment l'accès à l'alimentation, la guérison, le développement des jeunes, le soutien aux producteurs et le retour à la communauté coexistent en un seul lieu.",
          he: "המסלול הזה חושף את האדמה, הסיפור, הצורך וההזדמנות. הוא מראה כיצד גישה למזון, ריפוי, פיתוח נוער, תמיכה במגדלים ותועלת לקהילה חיים יחד במקום אחד.",
        },
      },
      {
        key: "purpose",
        title: sectionTitleMap.purpose,
        text: {
          en: "Mission outcome: the guest understands the farm's vision, purpose, and why continued support matters.",
          es: "Resultado de la misión: el visitante comprende la visión y el propósito de la granja, y por qué es importante seguir apoyándola.",
          tl: "Layunin ng misyon: nauunawaan ng bisita ang bisyon at layunin ng bukid, at kung bakit mahalaga ang patuloy na suporta.",
          it: "Risultato della missione: l'ospite comprende la visione e lo scopo della fattoria e perché il sostegno continuo è importante.",
          fr: "Résultat de la mission : le visiteur comprend la vision et l'objectif de la ferme, ainsi que l'importance d'un soutien continu.",
          he: "תוצאת המשימה: האורח מבין את חזון החווה, מטרתה, ומדוע תמיכה מתמשכת חשובה.",
        },
      },
      {
        key: "next",
        title: sectionTitleMap.next,
        text: {
          en: "Next step: continue into Customer, Marketplace, Youth Workforce, Grower, or Partners to see how the ecosystem becomes active.",
          es: "Próximo paso: continúe hacia Cliente, Mercado, Fuerza Laboral Juvenil, Productor o Socios para ver cómo el ecosistema cobra vida.",
          tl: "Susunod na hakbang: magpatuloy sa Customer, Marketplace, Youth Workforce, Grower, o Partners upang makita kung paano nagiging aktibo ang ecosystem.",
          it: "Passo successivo: continua in Cliente, Marketplace, Forza lavoro giovanile, Coltivatore o Partner per vedere come l'ecosistema prende vita.",
          fr: "Étape suivante : poursuivez vers Client, Marché, Jeunesse, Producteur ou Partenaires pour voir comment l'écosystème prend vie.",
          he: "השלב הבא: המשיכו למסלולי לקוח, שוק, כוח עבודה לנוער, מגדל או שותפים כדי לראות כיצד המערכת האקולוגית הופכת לפעילה.",
        },
      },
    ],
  },
  {
    id: "customer",
    label: "Customer",
    mission: "Encourage repeat healthy choices through fresh food and nutrition learning.",
    outcome:
      "Customers understand that better food choices can improve everyday life and community health.",
    accent: "from-lime-200/80 via-emerald-200/60 to-teal-100/60",
    image: IMAGE_MAP.customer,
    bullets: [
      "Fresh food and nutrition education together.",
      "Healthy choices become easier, clearer, and more practical.",
      "Customers see value in coming back again and again.",
    ],
    sections: [
      {
        key: "soundbite",
        title: sectionTitleMap.soundbite,
        text: {
          en: "Fresh food with practical knowledge that supports healthier living.",
          es: "Alimentos frescos con conocimiento práctico que apoya una vida más saludable.",
          tl: "Sariwang pagkain na may praktikal na kaalaman para sa mas malusog na pamumuhay.",
          it: "Cibo fresco con conoscenze pratiche per sostenere una vita più sana.",
          fr: "Des aliments frais accompagnés de connaissances pratiques pour une vie plus saine.",
          he: "מזון טרי עם ידע מעשי התומך בחיים בריאים יותר.",
        },
      },
      {
        key: "intro",
        title: sectionTitleMap.intro,
        text: {
          en: "The customer pathway centers on food access, produce education, and making healthy choices easier for individuals and families.",
          es: "La ruta del cliente se centra en el acceso a alimentos, la educación sobre productos y en facilitar elecciones saludables para personas y familias.",
          tl: "Nakatuon ang customer pathway sa food access, produce education, at pagpapadali ng healthy choices para sa mga indibidwal at pamilya.",
          it: "Il percorso cliente si concentra sull'accesso al cibo, sull'educazione ai prodotti e sul rendere più semplici le scelte salutari per individui e famiglie.",
          fr: "Le parcours client met l'accent sur l'accès à l'alimentation, l'éducation autour des produits et la facilitation de choix sains pour les individus et les familles.",
          he: "מסלול הלקוח מתמקד בגישה למזון, בחינוך לתוצרת ובהפיכת בחירות בריאות לקלות יותר עבור יחידים ומשפחות.",
        },
      },
      {
        key: "knowledge",
        title: sectionTitleMap.knowledge,
        text: {
          en: "Customers discover produce, learn food value, compare options, and connect better choices to household wellness. This pathway shows that nutrition is not abstract. It is daily life.",
          es: "Los clientes descubren productos, aprenden el valor de los alimentos, comparan opciones y conectan mejores decisiones con el bienestar del hogar. Esta ruta muestra que la nutrición no es abstracta. Es la vida diaria.",
          tl: "Natutuklasan ng mga customer ang produce, natututuhan ang halaga ng pagkain, naghahambing ng mga pagpipilian, at inuugnay ang mas mabubuting desisyon sa kalusugan ng tahanan. Ipinapakita ng landas na ito na ang nutrisyon ay bahagi ng araw-araw na buhay.",
          it: "I clienti scoprono i prodotti, imparano il valore del cibo, confrontano le opzioni e collegano scelte migliori al benessere della famiglia. Questo percorso mostra che la nutrizione non è astratta. È vita quotidiana.",
          fr: "Les clients découvrent les produits, comprennent la valeur des aliments, comparent les options et relient de meilleurs choix au bien-être du foyer. Ce parcours montre que la nutrition n'est pas abstraite. C'est la vie quotidienne.",
          he: "הלקוחות מגלים תוצרת, לומדים את ערך המזון, משווים אפשרויות ומחברים בחירות טובות יותר לבריאות הבית. המסלול הזה מראה שתזונה אינה דבר מופשט. היא חלק מחיי היומיום.",
        },
      },
      {
        key: "purpose",
        title: sectionTitleMap.purpose,
        text: {
          en: "Mission outcome: customers connect fresh food, nutrition, and repeat healthy choices.",
          es: "Resultado de la misión: los clientes conectan alimentos frescos, nutrición y decisiones saludables repetidas.",
          tl: "Layunin ng misyon: naiuugnay ng mga customer ang sariwang pagkain, nutrisyon, at paulit-ulit na healthy choices.",
          it: "Risultato della missione: i clienti collegano cibo fresco, nutrizione e scelte salutari ripetute.",
          fr: "Résultat de la mission : les clients relient aliments frais, nutrition et choix sains répétés.",
          he: "תוצאת המשימה: הלקוחות מחברים בין מזון טרי, תזונה ובחירות בריאות חוזרות.",
        },
      },
      {
        key: "next",
        title: sectionTitleMap.next,
        text: {
          en: "Next step: move into Marketplace to purchase, preorder, or support the broader grower ecosystem.",
          es: "Próximo paso: pase al Mercado para comprar, hacer pedidos anticipados o apoyar el ecosistema más amplio de productores.",
          tl: "Susunod na hakbang: pumunta sa Marketplace para bumili, mag-preorder, o suportahan ang mas malawak na grower ecosystem.",
          it: "Passo successivo: entra nel Marketplace per acquistare, prenotare o sostenere l'ecosistema più ampio dei coltivatori.",
          fr: "Étape suivante : passez au Marché pour acheter, précommander ou soutenir l'écosystème élargi des producteurs.",
          he: "השלב הבא: עברו לשוק כדי לרכוש, להזמין מראש או לתמוך במערכת המגדלים הרחבה יותר.",
        },
      },
    ],
  },
  {
    id: "marketplace",
    label: "Marketplace",
    mission:
      "Convert interest into purchasing power, visibility, and sustainability.",
    outcome:
      "Visitors see the marketplace as a living channel for produce, products, grower participation, and farm sustainability.",
    accent: "from-yellow-200/80 via-amber-100/60 to-orange-100/50",
    image: IMAGE_MAP.marketplace,
    bullets: [
      "The marketplace gives the ecosystem economic life.",
      "It connects customers, growers, and value-added opportunities.",
      "It demonstrates how mission and revenue can support each other.",
    ],
    sections: [
      {
        key: "soundbite",
        title: sectionTitleMap.soundbite,
        text: {
          en: "Where community interest becomes visible support and real purchasing activity.",
          es: "Donde el interés comunitario se convierte en apoyo visible y actividad real de compra.",
          tl: "Kung saan ang interes ng komunidad ay nagiging nakikitang suporta at totoong pagbili.",
          it: "Dove l'interesse della comunità diventa sostegno visibile e reale attività di acquisto.",
          fr: "Là où l'intérêt de la communauté devient un soutien visible et un véritable acte d'achat.",
          he: "המקום שבו עניין קהילתי הופך לתמיכה נראית ולפעילות רכישה ממשית.",
        },
      },
      {
        key: "intro",
        title: sectionTitleMap.intro,
        text: {
          en: "The marketplace pathway shows how Bronson Family Farm can turn story, product, and participation into sustainable activity through the GrownBy-connected ecosystem.",
          es: "La ruta del mercado muestra cómo Bronson Family Farm puede convertir historia, producto y participación en actividad sostenible mediante un ecosistema conectado con GrownBy.",
          tl: "Ipinapakita ng marketplace pathway kung paano ginagawang sustainable activity ng Bronson Family Farm ang kuwento, produkto, at partisipasyon sa pamamagitan ng GrownBy-connected ecosystem.",
          it: "Il percorso marketplace mostra come Bronson Family Farm possa trasformare storia, prodotto e partecipazione in attività sostenibile attraverso l'ecosistema connesso a GrownBy.",
          fr: "Le parcours marché montre comment Bronson Family Farm peut transformer histoire, produit et participation en activité durable grâce à un écosystème connecté à GrownBy.",
          he: "מסלול השוק מראה כיצד Bronson Family Farm יכולה להפוך סיפור, מוצר והשתתפות לפעילות בת-קיימא באמצעות המערכת המחוברת ל-GrownBy.",
        },
      },
      {
        key: "knowledge",
        title: sectionTitleMap.knowledge,
        text: {
          en: "This is not only a store. It is a sustainability engine. It supports produce sales, seedling sales, preorders, events, grower visibility, and return pathways that invite people back into the ecosystem.",
          es: "Esto no es solo una tienda. Es un motor de sostenibilidad. Apoya ventas de productos, plántulas, pedidos anticipados, eventos, visibilidad para productores y rutas de retorno que invitan a la gente a volver al ecosistema.",
          tl: "Hindi lang ito tindahan. Isa itong sustainability engine. Sinusuportahan nito ang bentahan ng produce, seedlings, preorders, events, grower visibility, at return pathways na nagbabalik sa mga tao sa ecosystem.",
          it: "Non è solo un negozio. È un motore di sostenibilità. Sostiene vendite di prodotti, piantine, preordini, eventi, visibilità dei coltivatori e percorsi di ritorno che invitano le persone a rientrare nell'ecosistema.",
          fr: "Ce n'est pas seulement une boutique. C'est un moteur de durabilité. Il soutient les ventes de produits, de semis, les précommandes, les événements, la visibilité des producteurs et des parcours de retour qui font revenir les gens dans l'écosystème.",
          he: "זה לא רק חנות. זה מנוע קיימות. הוא תומך במכירות תוצרת, מכירות שתילים, הזמנות מוקדמות, אירועים, נראות למגדלים ומסלולי חזרה שמזמינים אנשים לשוב למערכת.",
        },
      },
      {
        key: "purpose",
        title: sectionTitleMap.purpose,
        text: {
          en: "Mission outcome: the marketplace converts attention into revenue, participation, and long-term sustainability.",
          es: "Resultado de la misión: el mercado convierte la atención en ingresos, participación y sostenibilidad a largo plazo.",
          tl: "Layunin ng misyon: ginagawang kita, partisipasyon, at pangmatagalang sustainability ng marketplace ang atensyon.",
          it: "Risultato della missione: il marketplace converte attenzione in ricavi, partecipazione e sostenibilità a lungo termine.",
          fr: "Résultat de la mission : le marché transforme l'attention en revenus, en participation et en durabilité à long terme.",
          he: "תוצאת המשימה: השוק ממיר תשומת לב להכנסות, השתתפות וקיימות ארוכת טווח.",
        },
      },
      {
        key: "next",
        title: sectionTitleMap.next,
        text: {
          en: "Next step: enter the live marketplace or continue to Grower to see how producers benefit from participating.",
          es: "Próximo paso: entre al mercado en vivo o continúe a Productor para ver cómo se benefician los productores al participar.",
          tl: "Susunod na hakbang: pumasok sa live marketplace o magpatuloy sa Grower para makita kung paano nakikinabang ang mga producer sa paglahok.",
          it: "Passo successivo: entra nel marketplace live oppure vai a Coltivatore per vedere come i produttori beneficiano della partecipazione.",
          fr: "Étape suivante : entrez dans le marché en direct ou poursuivez vers Producteur pour voir comment les producteurs bénéficient de leur participation.",
          he: "השלב הבא: היכנסו לשוק החי או המשיכו למסלול המגדל כדי לראות כיצד יצרנים נהנים מההשתתפות.",
        },
      },
    ],
  },
  {
    id: "grower",
    label: "Grower",
    mission: "Connect producers to opportunity, visibility, and market participation.",
    outcome:
      "Growers understand that the ecosystem gives them a pathway into shared visibility, sales, learning, and support.",
    accent: "from-green-200/80 via-emerald-100/60 to-lime-100/50",
    image: IMAGE_MAP.grower,
    bullets: [
      "Growers register through the portal and gain ecosystem benefits.",
      "The marketplace is a benefit of the grower pathway.",
      "Visibility, support, and opportunity are built into participation.",
    ],
    sections: [
      {
        key: "soundbite",
        title: sectionTitleMap.soundbite,
        text: {
          en: "A pathway that helps growers move from isolation to opportunity.",
          es: "Una ruta que ayuda a los productores a pasar del aislamiento a la oportunidad.",
          tl: "Isang landas na tumutulong sa mga grower na mula sa pag-iisa ay mapunta sa oportunidad.",
          it: "Un percorso che aiuta i coltivatori a passare dall'isolamento all'opportunità.",
          fr: "Un parcours qui aide les producteurs à passer de l'isolement à l'opportunité.",
          he: "מסלול שעוזר למגדלים לעבור מבידוד להזדמנות.",
        },
      },
      {
        key: "intro",
        title: sectionTitleMap.intro,
        text: {
          en: "The grower pathway is designed for producers who need visibility, structure, and a way into markets, collaboration, and support.",
          es: "La ruta del productor está diseñada para quienes necesitan visibilidad, estructura y una vía hacia mercados, colaboración y apoyo.",
          tl: "Ang grower pathway ay para sa mga producer na nangangailangan ng visibility, structure, at paraan papunta sa markets, collaboration, at support.",
          it: "Il percorso coltivatore è progettato per produttori che hanno bisogno di visibilità, struttura e accesso a mercati, collaborazione e supporto.",
          fr: "Le parcours producteur est conçu pour les producteurs qui ont besoin de visibilité, de structure et d'un accès aux marchés, à la collaboration et au soutien.",
          he: "מסלול המגדל מיועד ליצרנים הזקוקים לנראות, למבנה ולדרך לשווקים, לשיתוף פעולה ולתמיכה.",
        },
      },
      {
        key: "knowledge",
        title: sectionTitleMap.knowledge,
        text: {
          en: "Growers do not just appear in the marketplace. They enter through this pathway, register through the portal, and gain benefits that include market participation, exposure, support, and a stronger connection to community demand.",
          es: "Los productores no aparecen simplemente en el mercado. Entran por esta ruta, se registran en el portal y obtienen beneficios que incluyen participación en el mercado, exposición, apoyo y una conexión más fuerte con la demanda comunitaria.",
          tl: "Hindi basta lumilitaw ang mga grower sa marketplace. Dumaraan sila sa landas na ito, nagrerehistro sa portal, at nakakakuha ng mga benepisyo tulad ng market participation, exposure, support, at mas matibay na koneksyon sa community demand.",
          it: "I coltivatori non compaiono semplicemente nel marketplace. Entrano attraverso questo percorso, si registrano nel portale e ottengono benefici che includono partecipazione al mercato, visibilità, supporto e una connessione più forte con la domanda della comunità.",
          fr: "Les producteurs n'apparaissent pas simplement dans le marché. Ils entrent par ce parcours, s'inscrivent via le portail et obtiennent des avantages comprenant la participation au marché, la visibilité, le soutien et un lien plus fort avec la demande communautaire.",
          he: "מגדלים לא פשוט מופיעים בשוק. הם נכנסים דרך המסלול הזה, נרשמים דרך הפורטל ומקבלים יתרונות הכוללים השתתפות בשוק, חשיפה, תמיכה וקשר חזק יותר לביקוש הקהילתי.",
        },
      },
      {
        key: "purpose",
        title: sectionTitleMap.purpose,
        text: {
          en: "Mission outcome: growers connect to opportunity and can benefit from the ecosystem and the marketplace.",
          es: "Resultado de la misión: los productores se conectan con oportunidades y pueden beneficiarse del ecosistema y del mercado.",
          tl: "Layunin ng misyon: nakakakonekta ang mga grower sa oportunidad at nakikinabang sila sa ecosystem at marketplace.",
          it: "Risultato della missione: i coltivatori si collegano alle opportunità e possono beneficiare dell'ecosistema e del marketplace.",
          fr: "Résultat de la mission : les producteurs se connectent à des opportunités et peuvent bénéficier de l'écosystème et du marché.",
          he: "תוצאת המשימה: המגדלים מתחברים להזדמנויות ויכולים ליהנות מהמערכת האקולוגית ומהשוק.",
        },
      },
      {
        key: "next",
        title: sectionTitleMap.next,
        text: {
          en: "Next step: go to Marketplace to see the public-facing benefit, or continue to Partners for collaboration support.",
          es: "Próximo paso: vaya al Mercado para ver el beneficio visible al público o continúe a Socios para apoyo colaborativo.",
          tl: "Susunod na hakbang: pumunta sa Marketplace para makita ang public-facing benefit, o magpatuloy sa Partners para sa collaboration support.",
          it: "Passo successivo: vai al Marketplace per vedere il beneficio rivolto al pubblico, oppure continua a Partner per il supporto collaborativo.",
          fr: "Étape suivante : allez au Marché pour voir l'avantage visible au public, ou poursuivez vers Partenaires pour le soutien à la collaboration.",
          he: "השלב הבא: עברו לשוק כדי לראות את התועלת הפומבית, או המשיכו לשותפים לתמיכה בשיתוף פעולה.",
        },
      },
    ],
  },
  {
    id: "youth",
    label: "Youth Workforce",
    mission: "Build skills, responsibility, and future readiness.",
    outcome:
      "Young people and families see that the farm is a pathway into work, discipline, learning, and long-term development.",
    accent: "from-sky-200/80 via-cyan-100/60 to-blue-100/50",
    image: IMAGE_MAP.youth,
    bullets: [
      "Youth learn through real roles, not only ideas.",
      "Supervisors and support systems matter.",
      "This pathway connects work, growth, and future readiness.",
    ],
    sections: [
      {
        key: "soundbite",
        title: sectionTitleMap.soundbite,
        text: {
          en: "A pathway where young people build responsibility through real experience.",
          es: "Una ruta donde los jóvenes desarrollan responsabilidad mediante experiencia real.",
          tl: "Isang landas kung saan ang kabataan ay nagkakaroon ng responsibilidad sa pamamagitan ng tunay na karanasan.",
          it: "Un percorso in cui i giovani costruiscono responsabilità attraverso esperienze reali.",
          fr: "Un parcours où les jeunes développent leur sens des responsabilités par une expérience réelle.",
          he: "מסלול שבו צעירים בונים אחריות דרך ניסיון אמיתי.",
        },
      },
      {
        key: "intro",
        title: sectionTitleMap.intro,
        text: {
          en: "The youth workforce pathway demonstrates how the farm can help build work ethic, skills, confidence, and future readiness for young people.",
          es: "La ruta de fuerza laboral juvenil demuestra cómo la granja puede ayudar a desarrollar ética de trabajo, habilidades, confianza y preparación para el futuro en los jóvenes.",
          tl: "Ipinapakita ng youth workforce pathway kung paano nakatutulong ang farm sa pagbuo ng work ethic, skills, confidence, at future readiness ng kabataan.",
          it: "Il percorso forza lavoro giovanile dimostra come la fattoria possa aiutare a costruire etica del lavoro, competenze, fiducia e preparazione al futuro per i giovani.",
          fr: "Le parcours jeunesse montre comment la ferme peut aider à développer l'éthique de travail, les compétences, la confiance et la préparation à l'avenir chez les jeunes.",
          he: "מסלול כוח העבודה לנוער מדגים כיצד החווה יכולה לעזור לבנות מוסר עבודה, מיומנויות, ביטחון ומוכנות לעתיד עבור צעירים.",
        },
      },
      {
        key: "knowledge",
        title: sectionTitleMap.knowledge,
        text: {
          en: "This pathway includes role-based learning, structure, supervision, and supportive resources. The supervisor role belongs here. Support staff resources, including behavioral health support when needed, strengthen the pathway and help young people succeed.",
          es: "Esta ruta incluye aprendizaje basado en roles, estructura, supervisión y recursos de apoyo. El rol de supervisor pertenece aquí. Los recursos de apoyo, incluido apoyo de salud conductual cuando sea necesario, fortalecen la ruta y ayudan a que los jóvenes tengan éxito.",
          tl: "Kasama sa pathway na ito ang role-based learning, structure, supervision, at supportive resources. Dito kabilang ang supervisor role. Ang support staff resources, kabilang ang behavioral health support kapag kailangan, ay nagpapalakas sa landas at tumutulong sa tagumpay ng kabataan.",
          it: "Questo percorso include apprendimento basato sui ruoli, struttura, supervisione e risorse di supporto. Il ruolo di supervisore appartiene qui. Le risorse di supporto, compreso il sostegno alla salute comportamentale quando necessario, rafforzano il percorso e aiutano i giovani ad avere successo.",
          fr: "Ce parcours comprend un apprentissage par rôles, une structure, une supervision et des ressources de soutien. Le rôle de superviseur appartient ici. Les ressources de soutien, y compris le soutien en santé comportementale lorsque nécessaire, renforcent ce parcours et aident les jeunes à réussir.",
          he: "המסלול הזה כולל למידה מבוססת תפקידים, מבנה, פיקוח ומשאבי תמיכה. תפקיד המפקח שייך כאן. משאבי תמיכה לצוות, כולל תמיכה בבריאות התנהגותית בעת הצורך, מחזקים את המסלול ועוזרים לצעירים להצליח.",
        },
      },
      {
        key: "purpose",
        title: sectionTitleMap.purpose,
        text: {
          en: "Mission outcome: youth build skills, responsibility, and future readiness in a supported environment.",
          es: "Resultado de la misión: los jóvenes desarrollan habilidades, responsabilidad y preparación para el futuro en un entorno de apoyo.",
          tl: "Layunin ng misyon: nagkakaroon ang kabataan ng skills, responsibility, at future readiness sa isang suportadong kapaligiran.",
          it: "Risultato della missione: i giovani sviluppano competenze, responsabilità e preparazione al futuro in un ambiente di supporto.",
          fr: "Résultat de la mission : les jeunes développent compétences, responsabilité et préparation à l'avenir dans un environnement soutenant.",
          he: "תוצאת המשימה: הנוער בונה מיומנויות, אחריות ומוכנות לעתיד בסביבה תומכת.",
        },
      },
      {
        key: "next",
        title: sectionTitleMap.next,
        text: {
          en: "Next step: continue to Partners to see how schools, employers, and support organizations can align around youth development.",
          es: "Próximo paso: continúe a Socios para ver cómo escuelas, empleadores y organizaciones de apoyo pueden alinearse en torno al desarrollo juvenil.",
          tl: "Susunod na hakbang: magpatuloy sa Partners upang makita kung paano maaaring magkaisa ang mga paaralan, employer, at support organizations para sa youth development.",
          it: "Passo successivo: continua verso Partner per vedere come scuole, datori di lavoro e organizzazioni di supporto possano allinearsi intorno allo sviluppo dei giovani.",
          fr: "Étape suivante : poursuivez vers Partenaires pour voir comment les écoles, les employeurs et les organisations de soutien peuvent s'aligner autour du développement des jeunes.",
          he: "השלב הבא: המשיכו לשותפים כדי לראות כיצד בתי ספר, מעסיקים וארגוני תמיכה יכולים להתיישר סביב פיתוח נוער.",
        },
      },
    ],
  },
  {
    id: "partners",
    label: "Partners",
    mission: "Align resources and collaboration for community benefit.",
    outcome:
      "Partners see a place to contribute expertise, resources, pathways, and shared impact.",
    accent: "from-violet-200/80 via-fuchsia-100/60 to-rose-100/50",
    image: IMAGE_MAP.partners,
    bullets: [
      "Partnership is a participation pathway, not a logo wall.",
      "Schools, funders, agencies, and businesses all have a role.",
      "This pathway shows how aligned resources can strengthen the whole ecosystem.",
    ],
    sections: [
      {
        key: "soundbite",
        title: sectionTitleMap.soundbite,
        text: {
          en: "A collaboration pathway that turns aligned resources into shared community benefit.",
          es: "Una ruta de colaboración que convierte recursos alineados en beneficio comunitario compartido.",
          tl: "Isang collaboration pathway na ginagawang shared community benefit ang aligned resources.",
          it: "Un percorso di collaborazione che trasforma risorse allineate in beneficio condiviso per la comunità.",
          fr: "Un parcours de collaboration qui transforme des ressources alignées en bénéfice partagé pour la communauté.",
          he: "מסלול שיתוף פעולה שהופך משאבים מיושרים לתועלת קהילתית משותפת.",
        },
      },
      {
        key: "intro",
        title: sectionTitleMap.intro,
        text: {
          en: "The partner pathway is where institutions, organizations, and aligned supporters see where they fit and how they can strengthen outcomes.",
          es: "La ruta de socios es donde instituciones, organizaciones y aliados ven dónde encajan y cómo pueden fortalecer resultados.",
          tl: "Ang partner pathway ay kung saan nakikita ng mga institusyon, organisasyon, at aligned supporters kung saan sila nababagay at kung paano nila mapapalakas ang outcomes.",
          it: "Il percorso partner è il luogo in cui istituzioni, organizzazioni e sostenitori allineati vedono dove si inseriscono e come possono rafforzare i risultati.",
          fr: "Le parcours partenaires est l'endroit où les institutions, les organisations et les soutiens alignés voient leur place et la manière dont ils peuvent renforcer les résultats.",
          he: "מסלול השותפים הוא המקום שבו מוסדות, ארגונים ותומכים מיושרים רואים היכן הם משתלבים וכיצד הם יכולים לחזק תוצאות.",
        },
      },
      {
        key: "knowledge",
        title: sectionTitleMap.knowledge,
        text: {
          en: "Partners can support events, programming, workforce pathways, technical help, donations, education, infrastructure, and public visibility. This pathway demonstrates that aligned collaboration expands community value.",
          es: "Los socios pueden apoyar eventos, programación, rutas laborales, ayuda técnica, donaciones, educación, infraestructura y visibilidad pública. Esta ruta demuestra que la colaboración alineada amplía el valor comunitario.",
          tl: "Maaaring suportahan ng mga partner ang events, programming, workforce pathways, technical help, donations, education, infrastructure, at public visibility. Ipinapakita ng landas na ito na ang aligned collaboration ay nagpapalawak ng community value.",
          it: "I partner possono sostenere eventi, programmi, percorsi di lavoro, aiuto tecnico, donazioni, educazione, infrastrutture e visibilità pubblica. Questo percorso dimostra che la collaborazione allineata amplia il valore per la comunità.",
          fr: "Les partenaires peuvent soutenir les événements, les programmes, les parcours professionnels, l'aide technique, les dons, l'éducation, l'infrastructure et la visibilité publique. Ce parcours montre qu'une collaboration alignée élargit la valeur communautaire.",
          he: "שותפים יכולים לתמוך באירועים, בתוכניות, במסלולי תעסוקה, בסיוע טכני, בתרומות, בחינוך, בתשתיות ובנראות ציבורית. המסלול הזה מדגים ששיתוף פעולה מיושר מרחיב את הערך לקהילה.",
        },
      },
      {
        key: "purpose",
        title: sectionTitleMap.purpose,
        text: {
          en: "Mission outcome: partners understand how to align resources and contribute to community benefit.",
          es: "Resultado de la misión: los socios entienden cómo alinear recursos y contribuir al beneficio comunitario.",
          tl: "Layunin ng misyon: nauunawaan ng mga partner kung paano i-align ang resources at mag-ambag sa community benefit.",
          it: "Risultato della missione: i partner comprendono come allineare le risorse e contribuire al beneficio della comunità.",
          fr: "Résultat de la mission : les partenaires comprennent comment aligner les ressources et contribuer au bénéfice de la communauté.",
          he: "תוצאת המשימה: השותפים מבינים כיצד ליישר משאבים ולתרום לתועלת הקהילה.",
        },
      },
      {
        key: "next",
        title: sectionTitleMap.next,
        text: {
          en: "Next step: return to the home view, explore another pathway, or enter the live marketplace.",
          es: "Próximo paso: regrese a la vista principal, explore otra ruta o entre al mercado en vivo.",
          tl: "Susunod na hakbang: bumalik sa home view, tuklasin ang ibang pathway, o pumasok sa live marketplace.",
          it: "Passo successivo: torna alla vista principale, esplora un altro percorso oppure entra nel marketplace live.",
          fr: "Étape suivante : revenez à l'accueil, explorez un autre parcours ou entrez dans le marché en direct.",
          he: "השלב הבא: חזרו למסך הבית, חקרו מסלול נוסף או היכנסו לשוק החי.",
        },
      },
    ],
  },
];

const LIVE_LINKS: Record<string, string> = {
  website: "https://www.bronsonfamilyfarm.com/",
  marketplace: "https://grownby.com/farms/bronson-family-farm/shop",
  eventbrite: "https://www.eventbrite.com/",
  weather:
    "https://www.accuweather.com/en/us/youngstown/44503/minute-weather-forecast/330121",
};

const LOGOS = [
  "Bronson Family Farm",
  "Farm & Family Alliance",
  "City of Youngstown",
  "Home Depot",
  "Petitti Garden Centers",
  "Elliott's Garden Center",
  "Central State University",
  "Jewish Community Center",
];

function useTypewriter(text: string, isOn: boolean, speed = 18) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!isOn) {
      setDisplay("");
      return;
    }
    let i = 0;
    setDisplay("");
    const timer = window.setInterval(() => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) {
        window.clearInterval(timer);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [text, isOn, speed]);

  return display;
}

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function PathButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm md:text-base transition-all border ${
        active
          ? "bg-white text-stone-900 border-white shadow-lg"
          : "bg-white/10 text-white border-white/20 hover:bg-white/20"
      }`}
    >
      {label}
    </button>
  );
}

function SectionPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-2 text-xs md:text-sm transition-all border ${
        active
          ? "bg-stone-900 text-white border-stone-900"
          : "bg-white text-stone-700 border-stone-200 hover:border-stone-400"
      }`}
    >
      {label}
    </button>
  );
}

function LogoChip({ label }: { label: string }) {
  return (
    <div className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs md:text-sm text-white/90">
      {label}
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<LanguageKey>("en");
  const [guidedMode, setGuidedMode] = useState(true);
  const [pathwayId, setPathwayId] = useState<PathwayKey>("guest");
  const [sectionKey, setSectionKey] = useState<SectionKey>("soundbite");
  const [progress, setProgress] = useState(1);

  const pathway = useMemo(
    () => PATHWAYS.find((p) => p.id === pathwayId) || PATHWAYS[0],
    [pathwayId]
  );

  const currentSection = useMemo(
    () =>
      pathway.sections.find((section) => section.key === sectionKey) ||
      pathway.sections[0],
    [pathway, sectionKey]
  );

  const guidedText = useTypewriter(currentSection.text[language], guidedMode, 14);

  useEffect(() => {
    const sectionIndex = pathway.sections.findIndex((s) => s.key === sectionKey);
    setProgress(sectionIndex + 1);
  }, [pathway, sectionKey]);

  const nextSection = () => {
    const currentIndex = pathway.sections.findIndex((s) => s.key === sectionKey);
    if (currentIndex < pathway.sections.length - 1) {
      setSectionKey(pathway.sections[currentIndex + 1].key);
      return;
    }

    const pathwayIndex = PATHWAYS.findIndex((p) => p.id === pathway.id);
    const nextPath = PATHWAYS[(pathwayIndex + 1) % PATHWAYS.length];
    setPathwayId(nextPath.id);
    setSectionKey("soundbite");
  };

  const previousSection = () => {
    const currentIndex = pathway.sections.findIndex((s) => s.key === sectionKey);
    if (currentIndex > 0) {
      setSectionKey(pathway.sections[currentIndex - 1].key);
      return;
    }

    const pathwayIndex = PATHWAYS.findIndex((p) => p.id === pathway.id);
    const prevPath =
      PATHWAYS[(pathwayIndex - 1 + PATHWAYS.length) % PATHWAYS.length];
    setPathwayId(prevPath.id);
    setSectionKey("next");
  };

  const switchPathway = (id: PathwayKey) => {
    setPathwayId(id);
    setSectionKey("soundbite");
  };

  return (
    <div className="min-h-screen bg-[#f7f1e7] text-stone-900">
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(25,25,20,0.74), rgba(56,70,38,0.65), rgba(120,89,54,0.45)), url(${IMAGE_MAP.hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.20),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.16),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-white/80">
                  Developed by Bronson Family Farm
                </div>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Bronson Family Farm
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/90 md:text-lg md:leading-8">
                  An ecosystem for food, learning, wellness, workforce, and
                  community return.
                </p>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/80 md:text-base">
                  Serving Mahoning Valley through regenerative agriculture,
                  education, marketplace access, and partnership.
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Language
                </div>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.key}
                      onClick={() => setLanguage(lang.key)}
                      className={`rounded-full px-3 py-2 text-xs md:text-sm transition-all ${
                        language === lang.key
                          ? "bg-white text-stone-900"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => setGuidedMode((v) => !v)}
                    className={`rounded-full px-3 py-2 text-xs md:text-sm ${
                      guidedMode
                        ? "bg-emerald-300 text-stone-900"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    Guided Voice {guidedMode ? "On" : "Off"}
                  </button>

                  <button
                    onClick={() => {
                      setPathwayId("guest");
                      setSectionKey("soundbite");
                    }}
                    className="rounded-full bg-white/10 px-3 py-2 text-xs text-white hover:bg-white/20 md:text-sm"
                  >
                    Home
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md md:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/80">
                    Choose a pathway
                  </div>
                  <div className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/80">
                    A complete pathway-based demo
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {PATHWAYS.map((p) => (
                    <PathButton
                      key={p.id}
                      label={p.label}
                      active={pathway.id === p.id}
                      onClick={() => switchPathway(p.id)}
                    />
                  ))}
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-[1fr_1.1fr]">
                  <div
                    className={`relative min-h-[300px] overflow-hidden rounded-[1.75rem] border border-white/25 bg-gradient-to-br ${pathway.accent} p-4 md:p-5`}
                  >
                    <div
                      className="absolute inset-0 opacity-35"
                      style={{
                        backgroundImage: `url(${pathway.image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-white/10" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                        <div className="inline-flex rounded-full bg-white/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-stone-800">
                          {pathway.label}
                        </div>
                        <h2 className="mt-3 max-w-xl text-2xl font-semibold text-white md:text-4xl">
                          {pathway.mission}
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/90 md:text-base">
                          {pathway.outcome}
                        </p>
                      </div>

                      <div className="mt-6 grid gap-2">
                        {pathway.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className="rounded-2xl border border-white/15 bg-black/20 px-3 py-3 text-sm text-white/95"
                          >
                            {bullet}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] bg-white/95 p-4 shadow-xl md:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                          Guided sequence
                        </div>
                        <div className="mt-1 text-lg font-semibold text-stone-900">
                          {pathway.label} Journey
                        </div>
                      </div>

                      <div className="rounded-full bg-stone-100 px-3 py-2 text-sm text-stone-700">
                        {progress} / {pathway.sections.length}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {pathway.sections.map((section) => (
                        <SectionPill
                          key={section.key}
                          label={section.title}
                          active={sectionKey === section.key}
                          onClick={() => setSectionKey(section.key)}
                        />
                      ))}
                    </div>

                    <div className="mt-5 rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4 min-h-[260px]">
                      <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                        {currentSection.title}
                      </div>
                      <p className="mt-4 text-base leading-8 text-stone-800 md:text-lg">
                        {guidedMode ? guidedText || " " : currentSection.text[language]}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <button
                        onClick={previousSection}
                        className="rounded-full border border-stone-300 px-4 py-3 text-sm text-stone-700 hover:border-stone-500"
                      >
                        Back
                      </button>
                      <button
                        onClick={nextSection}
                        className="rounded-full bg-stone-900 px-4 py-3 text-sm text-white hover:bg-stone-800"
                      >
                        Continue
                      </button>
                      <button
                        onClick={() => openExternal(LIVE_LINKS.marketplace)}
                        className="rounded-full bg-emerald-600 px-4 py-3 text-sm text-white hover:bg-emerald-500"
                      >
                        Enter Marketplace
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
                  <div className="text-xs uppercase tracking-[0.25em] text-white/75">
                    Live actions
                  </div>
                  <div className="mt-4 grid gap-3">
                    <button
                      onClick={() => openExternal(LIVE_LINKS.website)}
                      className="rounded-2xl bg-white/90 px-4 py-4 text-left text-stone-900 hover:bg-white"
                    >
                      <div className="text-sm font-semibold">Visit Website</div>
                      <div className="mt-1 text-xs text-stone-600">
                        Open the Bronson Family Farm website
                      </div>
                    </button>

                    <button
                      onClick={() => openExternal(LIVE_LINKS.marketplace)}
                      className="rounded-2xl bg-white/90 px-4 py-4 text-left text-stone-900 hover:bg-white"
                    >
                      <div className="text-sm font-semibold">Open GrownBy Marketplace</div>
                      <div className="mt-1 text-xs text-stone-600">
                        Browse the live farm store and ecosystem entry point
                      </div>
                    </button>

                    <button
                      onClick={() => openExternal(LIVE_LINKS.weather)}
                      className="rounded-2xl bg-white/90 px-4 py-4 text-left text-stone-900 hover:bg-white"
                    >
                      <div className="text-sm font-semibold">Youngstown Weather</div>
                      <div className="mt-1 text-xs text-stone-600">
                        Check live weather conditions
                      </div>
                    </button>

                    <button
                      onClick={() => openExternal(LIVE_LINKS.eventbrite)}
                      className="rounded-2xl bg-white/90 px-4 py-4 text-left text-stone-900 hover:bg-white"
                    >
                      <div className="text-sm font-semibold">Event Registration</div>
                      <div className="mt-1 text-xs text-stone-600">
                        Placeholder link for check-in and event journeys
                      </div>
                    </button>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-xl">
                  <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                    Mission snapshot
                  </div>
                  <div className="mt-3 text-xl font-semibold text-stone-900">
                    {pathway.label}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-stone-700">
                    {currentSection.text[language]}
                  </p>
                  <div className="mt-5 rounded-2xl bg-stone-50 p-4">
                    <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                      Outcome
                    </div>
                    <p className="mt-2 text-sm leading-7 text-stone-700">
                      {pathway.outcome}
                    </p>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/15 bg-stone-900 p-5 shadow-2xl">
                  <div className="text-xs uppercase tracking-[0.25em] text-white/60">
                    Aligned supporters
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {LOGOS.map((logo) => (
                      <LogoChip key={logo} label={logo} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-sm">
                <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                  Guest mission
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  Understand the vision, story, and purpose of Bronson Family
                  Farm.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-sm">
                <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                  Customer mission
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  Encourage fresh food, nutrition learning, and repeat healthy
                  choices.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-sm">
                <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                  Marketplace mission
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  Convert interest into purchasing power and sustainability.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-sm">
                <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                  Grower mission
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  Connect producers to opportunity and market participation
                  through the portal.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-sm">
                <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                  Youth Workforce mission
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  Build skills, responsibility, and future readiness with
                  supervision and support.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-sm">
                <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                  Partners mission
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  Align resources and collaboration for community benefit.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                    Demo footer
                  </div>
                  <div className="mt-2 text-lg font-semibold text-stone-900">
                    Co-owned by Bronson Family Farm and Farm & Family Alliance
                  </div>
                  <p className="mt-2 text-sm leading-7 text-stone-700">
                    This demo is designed to help guests, customers, growers,
                    youth, and partners understand how the ecosystem works and
                    where they fit within it.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => switchPathway("guest")}
                    className="rounded-full border border-stone-300 px-4 py-3 text-sm text-stone-700 hover:border-stone-500"
                  >
                    Start Tour Again
                  </button>
                  <button
                    onClick={() => openExternal(LIVE_LINKS.marketplace)}
                    className="rounded-full bg-stone-900 px-4 py-3 text-sm text-white hover:bg-stone-800"
                  >
                    Enter Store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f7f1e7] to-transparent" />
      </div>
    </div>
  );
}
