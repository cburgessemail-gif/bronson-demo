// APP13 FINAL POLISHED UPDATE
// PRESERVES APP13 VISUAL DESIGN + STRUCTURE
// COMPLETES PATHWAY JOURNEYS / GUIDED TOUR / LANGUAGES / ENDING
// REPLACE ENTIRE App.tsx WITH THIS FILE

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
  image: string;
  containImage?: boolean;
  title: Record<LangKey, string>;
  subtitle: Record<LangKey, string>;
  startsAs: Record<LangKey, string>;
  experiences: Record<LangKey, string[]>;
  growsInto: Record<LangKey, string[]>;
  ecosystem: Record<LangKey, string>;
  nextStep: Record<LangKey, string>;
  buttonLabel: Record<LangKey, string>;
  targetId: number;
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
  en: string,
  es: string,
  tl: string,
  it: string,
  he: string,
  fr: string
) => ({
  English: en,
  Español: es,
  Tagalog: tl,
  Italiano: it,
  עברית: he,
  Français: fr,
});

const ui = {
  English: {
    start: "Begin Guided Tour",
    next: "Next",
    back: "Back",
    pause: "Pause",
    restart: "Restart",
    pathways: "Explore Pathways",
  },
  Español: {
    start: "Comenzar Recorrido",
    next: "Siguiente",
    back: "Atrás",
    pause: "Pausa",
    restart: "Reiniciar",
    pathways: "Explorar Caminos",
  },
  Tagalog: {
    start: "Simulan ang Tour",
    next: "Susunod",
    back: "Bumalik",
    pause: "Pause",
    restart: "Restart",
    pathways: "Tingnan ang Pathways",
  },
  Italiano: {
    start: "Inizia Tour",
    next: "Avanti",
    back: "Indietro",
    pause: "Pausa",
    restart: "Ricomincia",
    pathways: "Esplora Percorsi",
  },
  עברית: {
    start: "התחל סיור",
    next: "הבא",
    back: "חזרה",
    pause: "עצור",
    restart: "התחל מחדש",
    pathways: "חקור מסלולים",
  },
  Français: {
    start: "Commencer",
    next: "Suivant",
    back: "Retour",
    pause: "Pause",
    restart: "Recommencer",
    pathways: "Explorer",
  },
};

const slides: Slide[] = [
  {
    id: 1,
    nav: "Welcome",
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
      "Bronson Family Farm is building a place-based ecosystem where food, growers, workforce, wellness, education, and community operate together.",
      "Bronson Family Farm está construyendo un ecosistema conectado.",
      "Bronson Family Farm is building a connected ecosystem.",
      "Bronson Family Farm sta costruendo un ecosistema connesso.",
      "Bronson Family Farm בונה מערכת קהילתית מחוברת.",
      "Bronson Family Farm construit un écosystème connecté."
    ),
    startsAs: tx(
      "A visitor entering the experience.",
      "Un visitante entrando.",
      "Visitor entering the experience.",
      "Un visitatore entra.",
      "מבקר נכנס לחוויה.",
      "Un visiteur entre dans l’expérience."
    ),
    experiences: tx(
      "See the ecosystem|Understand the vision|Choose a pathway",
      "Ver ecosistema|Comprender visión|Elegir camino",
      "See ecosystem|Understand vision|Choose pathway",
      "Vedere ecosistema|Comprendere visione|Scegliere percorso",
      "לראות מערכת|להבין חזון|לבחור מסלול",
      "Voir l’écosystème|Comprendre la vision|Choisir un parcours"
    )
      .English.split("|")
      .reduce((obj, _, i) => {
        obj.English = [
          "See the ecosystem",
          "Understand the vision",
          "Choose a pathway",
        ];
        obj.Español = [
          "Ver ecosistema",
          "Comprender visión",
          "Elegir camino",
        ];
        obj.Tagalog = [
          "See ecosystem",
          "Understand vision",
          "Choose pathway",
        ];
        obj.Italiano = [
          "Vedere ecosistema",
          "Comprendere visione",
          "Scegliere percorso",
        ];
        obj.עברית = ["לראות מערכת", "להבין חזון", "לבחור מסלול"];
        obj.Français = [
          "Voir l’écosystème",
          "Comprendre la vision",
          "Choisir un parcours",
        ];
        return obj;
      }, {} as Record<LangKey, string[]>),
    growsInto: tx(
      "Participant|Supporter",
      "Participante|Apoyo",
      "Participant|Supporter",
      "Partecipante|Sostenitore",
      "משתתף|תומך",
      "Participant|Soutien"
    )
      .English.split("|")
      .reduce((obj) => {
        obj.English = ["Participant", "Supporter"];
        obj.Español = ["Participante", "Apoyo"];
        obj.Tagalog = ["Participant", "Supporter"];
        obj.Italiano = ["Partecipante", "Sostenitore"];
        obj.עברית = ["משתתף", "תומך"];
        obj.Français = ["Participant", "Soutien"];
        return obj;
      }, {} as Record<LangKey, string[]>),
    ecosystem: tx(
      "Every pathway strengthens the ecosystem.",
      "Cada camino fortalece el ecosistema.",
      "Every pathway strengthens the ecosystem.",
      "Ogni percorso rafforza l’ecosistema.",
      "כל מסלול מחזק את המערכת.",
      "Chaque parcours renforce l’écosystème."
    ),
    nextStep: tx(
      "Choose how you want to experience the ecosystem.",
      "Elija cómo experimentar el ecosistema.",
      "Choose how to experience the ecosystem.",
      "Scegli come vivere l’ecosistema.",
      "בחר כיצד לחוות את המערכת.",
      "Choisissez comment découvrir l’écosystème."
    ),
    buttonLabel: tx(
      "Go to Guest Pathway",
      "Ir a Invitado",
      "Go to Guest",
      "Vai al Percorso Ospite",
      "עבור למסלול אורח",
      "Aller au Parcours"
    ),
    targetId: 2,
  },

  {
    id: 2,
    nav: "Guest",
    image: "/GrowArea.jpg",
    title: tx(
      "Guest Pathway",
      "Camino del Invitado",
      "Guest Pathway",
      "Percorso Ospite",
      "מסלול אורח",
      "Parcours Visiteur"
    ),
    subtitle: tx(
      "The visitor experiences the place, purpose, and possibilities of the farm.",
      "El visitante experimenta el propósito de la granja.",
      "Visitor experiences the purpose of the farm.",
      "Il visitatore vive lo scopo della fattoria.",
      "האורח חווה את מטרת החווה.",
      "Le visiteur découvre la mission de la ferme."
    ),
    startsAs: tx(
      "A first-time visitor.",
      "Un visitante nuevo.",
      "First-time visitor.",
      "Un nuovo visitatore.",
      "מבקר חדש.",
      "Un nouveau visiteur."
    ),
    experiences: {
      English: [
        "Explore the Historic Lansdowne Airport",
        "Understand place-based agriculture",
        "See food production in action",
      ],
      Español: [
        "Explorar el aeropuerto histórico",
        "Comprender agricultura local",
        "Ver producción alimentaria",
      ],
      Tagalog: [
        "Explore historic airport",
        "Understand agriculture",
        "See food production",
      ],
      Italiano: [
        "Esplorare aeroporto storico",
        "Comprendere agricoltura",
        "Vedere produzione alimentare",
      ],
      עברית: [
        "לחקור את שדה התעופה ההיסטורי",
        "להבין חקלאות מקומית",
        "לראות ייצור מזון",
      ],
      Français: [
        "Explorer l’aéroport historique",
        "Comprendre l’agriculture locale",
        "Voir la production alimentaire",
      ],
    },
    growsInto: {
      English: ["Supporter", "Volunteer"],
      Español: ["Apoyo", "Voluntario"],
      Tagalog: ["Supporter", "Volunteer"],
      Italiano: ["Sostenitore", "Volontario"],
      עברית: ["תומך", "מתנדב"],
      Français: ["Soutien", "Bénévole"],
    },
    ecosystem: tx(
      "Guests help spread awareness and community participation.",
      "Los invitados ayudan a crear conciencia.",
      "Guests help spread awareness.",
      "Gli ospiti aiutano la consapevolezza.",
      "אורחים מחזקים מודעות קהילתית.",
      "Les visiteurs renforcent la sensibilisation."
    ),
    nextStep: tx(
      "Continue to the Marketplace.",
      "Continuar al Mercado.",
      "Continue to Marketplace.",
      "Continua al Marketplace.",
      "המשך לשוק.",
      "Continuer vers le marché."
    ),
    buttonLabel: tx(
      "Go to Marketplace",
      "Ir al Mercado",
      "Marketplace",
      "Vai al Marketplace",
      "עבור לשוק",
      "Aller au Marché"
    ),
    targetId: 3,
  },

  {
    id: 3,
    nav: "Marketplace",
    image: "/SAM_0225.JPG",
    title: tx(
      "Marketplace Pathway",
      "Camino del Mercado",
      "Marketplace Pathway",
      "Percorso Marketplace",
      "מסלול שוק",
      "Parcours Marché"
    ),
    subtitle: tx(
      "The marketplace connects growers, food access, nutrition, and economic circulation.",
      "El mercado conecta alimentos y comunidad.",
      "Marketplace connects food and community.",
      "Il marketplace connette cibo e comunità.",
      "השוק מחבר מזון וקהילה.",
      "Le marché connecte nourriture et communauté."
    ),
    startsAs: tx(
      "A customer seeking fresh food.",
      "Un cliente buscando alimentos frescos.",
      "Customer seeking fresh food.",
      "Cliente cerca cibo fresco.",
      "לקוח מחפש מזון טרי.",
      "Client recherchant des aliments frais."
    ),
    experiences: {
      English: [
        "Purchase local produce",
        "Learn about nutrition",
        "Support regional growers",
      ],
      Español: [
        "Comprar productos locales",
        "Aprender nutrición",
        "Apoyar agricultores",
      ],
      Tagalog: [
        "Buy local produce",
        "Learn nutrition",
        "Support growers",
      ],
      Italiano: [
        "Comprare prodotti locali",
        "Imparare nutrizione",
        "Supportare coltivatori",
      ],
      עברית: [
        "לקנות תוצרת מקומית",
        "ללמוד תזונה",
        "לתמוך במגדלים",
      ],
      Français: [
        "Acheter local",
        "Apprendre la nutrition",
        "Soutenir les producteurs",
      ],
    },
    growsInto: {
      English: ["Repeat Customer", "Community Advocate"],
      Español: ["Cliente Recurrente", "Defensor"],
      Tagalog: ["Repeat Customer", "Advocate"],
      Italiano: ["Cliente Abituale", "Sostenitore"],
      עברית: ["לקוח חוזר", "תומך קהילה"],
      Français: ["Client Régulier", "Défenseur"],
    },
    ecosystem: tx(
      "Marketplace activity helps sustain growers and operations.",
      "El mercado sostiene agricultores.",
      "Marketplace sustains growers.",
      "Il marketplace sostiene coltivatori.",
      "השוק תומך במגדלים.",
      "Le marché soutient les producteurs."
    ),
    nextStep: tx(
      "Explore the Grower Pathway.",
      "Explorar agricultores.",
      "Explore Growers.",
      "Esplora coltivatori.",
      "חקור מגדלים.",
      "Explorer les producteurs."
    ),
    buttonLabel: tx(
      "Go to Growers",
      "Ir a Agricultores",
      "Go to Growers",
      "Vai ai Coltivatori",
      "עבור למגדלים",
      "Aller aux Producteurs"
    ),
    targetId: 4,
  },

  {
    id: 4,
    nav: "Growers",
    image: "/SAM_0229.JPG",
    title: tx(
      "Grower Pathway",
      "Camino del Agricultor",
      "Grower Pathway",
      "Percorso Coltivatore",
      "מסלול מגדל",
      "Parcours Producteur"
    ),
    subtitle: tx(
      "Growers gain access to tools, knowledge, market opportunities, and collaborative support.",
      "Los agricultores obtienen herramientas y apoyo.",
      "Growers gain tools and support.",
      "I coltivatori ricevono strumenti e supporto.",
      "מגדלים מקבלים כלים ותמיכה.",
      "Les producteurs reçoivent outils et soutien."
    ),
    startsAs: tx(
      "A person interested in growing.",
      "Persona interesada en cultivar.",
      "Person interested in growing.",
      "Persona interessata a coltivare.",
      "אדם המעוניין לגדל.",
      "Personne intéressée à cultiver."
    ),
    experiences: {
      English: [
        "Learn growing techniques",
        "Connect to markets",
        "Participate in the ecosystem",
      ],
      Español: [
        "Aprender cultivo",
        "Conectar mercados",
        "Participar en ecosistema",
      ],
      Tagalog: [
        "Learn growing",
        "Connect markets",
        "Participate ecosystem",
      ],
      Italiano: [
        "Imparare coltivazione",
        "Connettere mercati",
        "Partecipare ecosistema",
      ],
      עברית: [
        "ללמוד גידול",
        "להתחבר לשווקים",
        "להשתתף במערכת",
      ],
      Français: [
        "Apprendre à cultiver",
        "Accéder aux marchés",
        "Participer à l’écosystème",
      ],
    },
    growsInto: {
      English: ["Regional Supplier", "Mentor"],
      Español: ["Proveedor", "Mentor"],
      Tagalog: ["Supplier", "Mentor"],
      Italiano: ["Fornitore", "Mentore"],
      עברית: ["ספק", "מנטור"],
      Français: ["Fournisseur", "Mentor"],
    },
    ecosystem: tx(
      "Growers expand the food system and strengthen local access.",
      "Los agricultores fortalecen el sistema alimentario.",
      "Growers strengthen the food system.",
      "I coltivatori rafforzano il sistema alimentare.",
      "מגדלים מחזקים את מערכת המזון.",
      "Les producteurs renforcent le système alimentaire."
    ),
    nextStep: tx(
      "Explore the Youth Workforce Pathway.",
      "Explorar juventud.",
      "Explore Youth.",
      "Esplora gioventù.",
      "חקור נוער.",
      "Explorer la jeunesse."
    ),
    buttonLabel: tx(
      "Go to Youth Workforce",
      "Ir a Juventud",
      "Go to Youth",
      "Vai ai Giovani",
      "עבור לנוער",
      "Aller à la Jeunesse"
    ),
    targetId: 5,
  },

  {
    id: 5,
    nav: "Youth",
    image: "/SAM_0221.JPG",
    title: tx(
      "Youth Workforce Pathway",
      "Camino Juvenil",
      "Youth Workforce",
      "Percorso Giovani",
      "מסלול נוער",
      "Parcours Jeunesse"
    ),
    subtitle: tx(
      "Youth gain workforce experience, responsibility, teamwork, and purpose through outdoor learning.",
      "La juventud desarrolla habilidades y propósito.",
      "Youth develop skills and purpose.",
      "I giovani sviluppano competenze e scopo.",
      "נוער מפתח כישורים ומטרה.",
      "Les jeunes développent des compétences."
    ),
    startsAs: tx(
      "A young participant.",
      "Un joven participante.",
      "Young participant.",
      "Giovane partecipante.",
      "משתתף צעיר.",
      "Jeune participant."
    ),
    experiences: {
      English: [
        "Learn responsibility",
        "Develop workforce skills",
        "Understand food systems",
      ],
      Español: [
        "Aprender responsabilidad",
        "Desarrollar habilidades",
        "Comprender sistemas alimentarios",
      ],
      Tagalog: [
        "Learn responsibility",
        "Develop skills",
        "Understand food systems",
      ],
      Italiano: [
        "Imparare responsabilità",
        "Sviluppare competenze",
        "Comprendere sistemi alimentari",
      ],
      עברית: [
        "ללמוד אחריות",
        "לפתח כישורים",
        "להבין מערכות מזון",
      ],
      Français: [
        "Apprendre la responsabilité",
        "Développer des compétences",
        "Comprendre les systèmes alimentaires",
      ],
    },
    growsInto: {
      English: ["Future Leader", "Future Grower"],
      Español: ["Líder Futuro", "Agricultor Futuro"],
      Tagalog: ["Future Leader", "Future Grower"],
      Italiano: ["Leader Futuro", "Coltivatore Futuro"],
      עברית: ["מנהיג עתידי", "מגדל עתידי"],
      Français: ["Leader Futur", "Producteur Futur"],
    },
    ecosystem: tx(
      "Youth help sustain the future of the ecosystem.",
      "La juventud sostiene el futuro.",
      "Youth sustain the future.",
      "I giovani sostengono il futuro.",
      "הנוער מחזק את העתיד.",
      "Les jeunes soutiennent l’avenir."
    ),
    nextStep: tx(
      "Continue to Partners.",
      "Continuar a Socios.",
      "Continue to Partners.",
      "Continua ai Partner.",
      "המשך לשותפים.",
      "Continuer vers les partenaires."
    ),
    buttonLabel: tx(
      "Go to Partners",
      "Ir a Socios",
      "Go to Partners",
      "Vai ai Partner",
      "עבור לשותפים",
      "Aller aux Partenaires"
    ),
    targetId: 6,
  },

  {
    id: 6,
    nav: "Partners",
    image: "/SAM_0226.JPG",
    title: tx(
      "Partners & Community",
      "Socios y Comunidad",
      "Partners & Community",
      "Partner e Comunità",
      "שותפים וקהילה",
      "Partenaires et Communauté"
    ),
    subtitle: tx(
      "Organizations, volunteers, growers, educators, and supporters help strengthen the ecosystem together.",
      "Las organizaciones fortalecen el ecosistema.",
      "Organizations strengthen the ecosystem.",
      "Le organizzazioni rafforzano l’ecosistema.",
      "ארגונים מחזקים את המערכת.",
      "Les organisations renforcent l’écosystème."
    ),
    startsAs: tx(
      "A potential collaborator.",
      "Un colaborador potencial.",
      "Potential collaborator.",
      "Collaboratore potenziale.",
      "שותף פוטנציאלי.",
      "Collaborateur potentiel."
    ),
    experiences: {
      English: [
        "Support community wellness",
        "Invest in food access",
        "Build collaborative impact",
      ],
      Español: [
        "Apoyar bienestar",
        "Invertir en alimentos",
        "Construir impacto",
      ],
      Tagalog: [
        "Support wellness",
        "Invest food access",
        "Build impact",
      ],
      Italiano: [
        "Supportare benessere",
        "Investire accesso alimentare",
        "Costruire impatto",
      ],
      עברית: [
        "לתמוך ברווחה",
        "להשקיע בגישה למזון",
        "לבנות השפעה",
      ],
      Français: [
        "Soutenir le bien-être",
        "Investir dans l’alimentation",
        "Construire un impact",
      ],
    },
    growsInto: {
      English: ["Long-term Partner", "Regional Advocate"],
      Español: ["Socio", "Defensor"],
      Tagalog: ["Partner", "Advocate"],
      Italiano: ["Partner", "Sostenitore"],
      עברית: ["שותף", "תומך"],
      Français: ["Partenaire", "Défenseur"],
    },
    ecosystem: tx(
      "Partnerships expand the reach and sustainability of the ecosystem.",
      "Las alianzas expanden el ecosistema.",
      "Partnerships expand the ecosystem.",
      "Le partnership espandono l’ecosistema.",
      "שותפויות מרחיבות את המערכת.",
      "Les partenariats développent l’écosystème."
    ),
    nextStep: tx(
      "Continue to Feedback.",
      "Continuar a Comentarios.",
      "Continue to Feedback.",
      "Continua al Feedback.",
      "המשך למשוב.",
      "Continuer vers les avis."
    ),
    buttonLabel: tx(
      "Go to Feedback",
      "Ir a Comentarios",
      "Go to Feedback",
      "Vai al Feedback",
      "עבור למשוב",
      "Aller aux Avis"
    ),
    targetId: 7,
  },

  {
    id: 7,
    nav: "Feedback",
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    containImage: true,
    title: tx(
      "Thank You",
      "Gracias",
      "Salamat",
      "Grazie",
      "תודה",
      "Merci"
    ),
    subtitle: tx(
      "This experience invites participation, collaboration, and feedback before broader expansion.",
      "Esta experiencia invita participación y colaboración.",
      "This experience invites participation.",
      "Questa esperienza invita alla partecipazione.",
      "החוויה מזמינה השתתפות.",
      "Cette expérience invite à participer."
    ),
    startsAs: tx(
      "A viewer completing the ecosystem journey.",
      "Un espectador completando el viaje.",
      "Viewer completing the journey.",
      "Uno spettatore completa il viaggio.",
      "צופה מסיים את המסע.",
      "Un spectateur termine le parcours."
    ),
    experiences: {
      English: [
        "Reflect on the experience",
        "Share feedback",
        "Choose next involvement",
      ],
      Español: [
        "Reflexionar",
        "Compartir comentarios",
        "Elegir participación",
      ],
      Tagalog: [
        "Reflect experience",
        "Share feedback",
        "Choose involvement",
      ],
      Italiano: [
        "Riflettere",
        "Condividere feedback",
        "Scegliere coinvolgimento",
      ],
      עברית: [
        "להרהר בחוויה",
        "לשתף משוב",
        "לבחור מעורבות",
      ],
      Français: [
        "Réfléchir",
        "Partager des avis",
        "Choisir une implication",
      ],
    },
    growsInto: {
      English: ["Participant", "Supporter"],
      Español: ["Participante", "Apoyo"],
      Tagalog: ["Participant", "Supporter"],
      Italiano: ["Partecipante", "Sostenitore"],
      עברית: ["משתתף", "תומך"],
      Français: ["Participant", "Soutien"],
    },
    ecosystem: tx(
      "Feedback helps improve the ecosystem before wider implementation.",
      "Los comentarios ayudan a mejorar.",
      "Feedback improves the ecosystem.",
      "Il feedback migliora l’ecosistema.",
      "משוב משפר את המערכת.",
      "Les avis améliorent l’écosystème."
    ),
    nextStep: tx(
      "Contact: 330-275-1604 • BronsonFamilyFarm.com",
      "Contacto: 330-275-1604",
      "Contact: 330-275-1604",
      "Contatto: 330-275-1604",
      "יצירת קשר: 330-275-1604",
      "Contact : 330-275-1604"
    ),
    buttonLabel: tx(
      "Restart Experience",
      "Reiniciar",
      "Restart",
      "Ricomincia",
      "התחל מחדש",
      "Recommencer"
    ),
    targetId: 1,
  },
];

function SmartImage({ slide }: { slide: Slide }) {
  return (
    <img
      src={slide.image}
      alt={slide.nav}
      className={`hero-image ${slide.containImage ? "contain" : "cover"}`}
    />
  );
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const [language, setLanguage] = useState<LangKey>("English");
  const [guided, setGuided] = useState(false);

  const slide = slides[current];
  const t = ui[language];
  const isRTL = language === "עברית";

  useEffect(() => {
    if (!guided) return;

    const timer = window.setTimeout(() => {
      setCurrent((prev) => {
        if (prev >= slides.length - 1) {
          setGuided(false);
          return prev;
        }
        return prev + 1;
      });
    }, 9800);

    return () => window.clearTimeout(timer);
  }, [guided, current]);

  return (
    <main className="app" dir={isRTL ? "rtl" : "ltr"}>
      <style>{`
        * { box-sizing:border-box; }

        body, html, #root {
          margin:0;
          background:#000;
          color:white;
          font-family: Inter, Arial, sans-serif;
          overflow-x:hidden;
        }

        .app {
          min-height:100vh;
          padding:24px;
          background:
            radial-gradient(circle at top left, rgba(92,130,58,.18), transparent 30%),
            radial-gradient(circle at bottom right, rgba(186,127,52,.12), transparent 28%),
            #000;
        }

        .wrap {
          width:min(1450px,100%);
          margin:0 auto;
        }

        .top {
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          gap:20px;
          margin-bottom:18px;
        }

        .title {
          font-size:clamp(34px,5vw,70px);
          line-height:.95;
          margin:0;
          font-weight:300;
        }

        .subtitle {
          font-size:clamp(15px,1.4vw,20px);
          line-height:1.5;
          color:#ddd;
          max-width:900px;
          margin-top:16px;
        }

        .controls {
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          justify-content:flex-end;
        }

        button, select {
          border:none;
          border-radius:999px;
          padding:12px 18px;
          font-weight:700;
          cursor:pointer;
        }

        button {
          background:#d5b46d;
          color:#000;
        }

        select {
          background:#111;
          color:white;
          border:1px solid #333;
        }

        .hero {
          position:relative;
          overflow:hidden;
          border-radius:34px;
          min-height:72vh;
          display:flex;
          align-items:flex-end;
          margin-top:16px;
        }

        .hero-image {
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
        }

        .hero-image.cover {
          object-fit:cover;
        }

        .hero-image.contain {
          object-fit:contain;
          background:#000;
        }

        .overlay {
          position:absolute;
          inset:0;
          background:
            linear-gradient(to top, rgba(0,0,0,.88), rgba(0,0,0,.18));
        }

        .content {
          position:relative;
          z-index:2;
          width:100%;
          padding:42px;
        }

        .section {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:16px;
          margin-top:28px;
        }

        .card {
          background:rgba(255,255,255,.08);
          backdrop-filter:blur(8px);
          border:1px solid rgba(255,255,255,.08);
          border-radius:24px;
          padding:22px;
        }

        .label {
          color:#d5b46d;
          font-size:13px;
          font-weight:800;
          letter-spacing:2px;
          margin-bottom:14px;
          text-transform:uppercase;
        }

        .card h3 {
          margin:0 0 14px;
          font-size:22px;
        }

        .card ul {
          padding-left:18px;
          margin:0;
        }

        .card li {
          margin-bottom:10px;
          line-height:1.45;
          color:#f3f3f3;
        }

        .bottom {
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:18px;
          margin-top:24px;
          flex-wrap:wrap;
        }

        .next {
          font-size:18px;
          color:#e8d39c;
          max-width:850px;
          line-height:1.45;
        }

        @media(max-width:900px){
          .content{
            padding:26px;
          }

          .hero{
            min-height:unset;
          }

          .bottom{
            flex-direction:column;
            align-items:flex-start;
          }
        }
      `}</style>

      <div className="wrap">
        <div className="top">
          <div>
            <h1 className="title">{slide.title[language]}</h1>
            <div className="subtitle">{slide.subtitle[language]}</div>
          </div>

          <div className="controls">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as LangKey)}
            >
              {LANGS.map((lang) => (
                <option key={lang}>{lang}</option>
              ))}
            </select>

            <button onClick={() => setGuided(!guided)}>
              {guided ? t.pause : t.start}
            </button>

            <button
              onClick={() =>
                setCurrent((prev) => Math.max(prev - 1, 0))
              }
            >
              {t.back}
            </button>

            <button
              onClick={() =>
                setCurrent((prev) =>
                  Math.min(prev + 1, slides.length - 1)
                )
              }
            >
              {t.next}
            </button>
          </div>
        </div>

        <section className="hero">
          <SmartImage slide={slide} />
          <div className="overlay" />

          <div className="content">
            <div className="section">
              <div className="card">
                <div className="label">Starts As</div>
                <h3>{slide.startsAs[language]}</h3>
              </div>

              <div className="card">
                <div className="label">Experiences</div>

                <ul>
                  {slide.experiences[language].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <div className="label">Grows Into</div>

                <ul>
                  {slide.growsInto[language].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <div className="label">Ecosystem Impact</div>

                <h3>{slide.ecosystem[language]}</h3>
              </div>
            </div>

            <div className="bottom">
              <div className="next">{slide.nextStep[language]}</div>

              <button
                onClick={() => {
                  const nextIndex = slides.findIndex(
                    (s) => s.id === slide.targetId
                  );

                  if (nextIndex >= 0) setCurrent(nextIndex);
                }}
              >
                {slide.buttonLabel[language]}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
