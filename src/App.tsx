import React, { useEffect, useMemo, useState } from "react";

type Lang = "English" | "Español" | "Filipino" | "Italiano" | "Français" | "עברית";
type View =
  | "home"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners";

type PathwayKey = Exclude<View, "home">;

const IMAGES = {
  home: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1800&q=80",
  guest:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80",
  customer:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
  marketplace:
    "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80",
  grower:
    "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1600&q=80",
  youth:
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1600&q=80",
  partners:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
};

const SITE_URL = "https://www.bronsonfamilyfarm.com/";
const STOREFRONT_URL = "https://grownby.com/farms/bronson-family-farm/shop";

const translations = {
  English: {
    ecosystem: "Living ecosystem demo",
    title: "Step into the ecosystem.",
    subtitle: "An immersive farm, food, learning, and community platform.",
    summary:
      "Bronson Family Farm is a living ecosystem where guests understand the vision, customers discover fresh food and nutrition, growers connect to opportunity, youth build future readiness, partners align resources, and the marketplace turns interest into sustainability.",
    language: "Language",
    voice: "Guided voice",
    on: "On",
    off: "Off",
    choose: "Choose a pathway",
    website: "Website",
    storefront: "Storefront",
    enter: "Enter pathway",
    back: "Back to entrance",
    liveLinks: "Live links",
    developed: "Developed by Bronson Family Farm",
    missionLabel: "Mission",
    soundbiteLabel: "Sound bite",
    introLabel: "Introduction",
    knowledgeLabel: "What this pathway delivers",
    summaryLabel: "Purpose outcome",
    nextLabel: "Next step",
  },
  Español: {
    ecosystem: "Demostración del ecosistema vivo",
    title: "Entre al ecosistema.",
    subtitle: "Una plataforma inmersiva de granja, alimentos, aprendizaje y comunidad.",
    summary:
      "Bronson Family Farm es un ecosistema vivo donde los visitantes comprenden la visión, los clientes descubren alimentos frescos y nutrición, los productores acceden a oportunidades, los jóvenes desarrollan preparación para el futuro, los socios alinean recursos y el mercado convierte el interés en sostenibilidad.",
    language: "Idioma",
    voice: "Narración guiada",
    on: "Activada",
    off: "Desactivada",
    choose: "Elija una ruta",
    website: "Sitio web",
    storefront: "Tienda",
    enter: "Entrar",
    back: "Volver a la entrada",
    liveLinks: "Enlaces en vivo",
    developed: "Desarrollado por Bronson Family Farm",
    missionLabel: "Misión",
    soundbiteLabel: "Mensaje",
    introLabel: "Introducción",
    knowledgeLabel: "Lo que ofrece esta ruta",
    summaryLabel: "Resultado del propósito",
    nextLabel: "Siguiente paso",
  },
  Filipino: {
    ecosystem: "Demo ng buhay na ecosystem",
    title: "Pumasok sa ecosystem.",
    subtitle: "Isang makabagong plataporma ng bukid, pagkain, pag-aaral, at komunidad.",
    summary:
      "Ang Bronson Family Farm ay isang buhay na ecosystem kung saan nauunawaan ng mga bisita ang bisyon, natutuklasan ng mga customer ang sariwang pagkain at nutrisyon, nakakakuha ng oportunidad ang mga grower, naghahanda ang kabataan para sa hinaharap, nagkakaisa ang mga partner, at ginagawang matatag ang interes sa marketplace.",
    language: "Wika",
    voice: "Gabay na boses",
    on: "Bukas",
    off: "Patay",
    choose: "Pumili ng landas",
    website: "Website",
    storefront: "Storefront",
    enter: "Pumasok",
    back: "Bumalik sa simula",
    liveLinks: "Mga live na link",
    developed: "Binuo ng Bronson Family Farm",
    missionLabel: "Misyon",
    soundbiteLabel: "Mabilis na mensahe",
    introLabel: "Panimula",
    knowledgeLabel: "Ano ang ibinibigay ng landas na ito",
    summaryLabel: "Kinalabasan ng layunin",
    nextLabel: "Susunod na hakbang",
  },
  Italiano: {
    ecosystem: "Demo dell'ecosistema vivo",
    title: "Entra nell’ecosistema.",
    subtitle: "Una piattaforma immersiva di fattoria, cibo, apprendimento e comunità.",
    summary:
      "Bronson Family Farm è un ecosistema vivo in cui gli ospiti comprendono la visione, i clienti scoprono cibo fresco e nutrizione, i coltivatori trovano opportunità, i giovani costruiscono il proprio futuro, i partner allineano le risorse e il marketplace trasforma l’interesse in sostenibilità.",
    language: "Lingua",
    voice: "Voce guidata",
    on: "Attiva",
    off: "Disattiva",
    choose: "Scegli un percorso",
    website: "Sito web",
    storefront: "Negozio",
    enter: "Entra",
    back: "Torna all’ingresso",
    liveLinks: "Link attivi",
    developed: "Sviluppato da Bronson Family Farm",
    missionLabel: "Missione",
    soundbiteLabel: "Messaggio breve",
    introLabel: "Introduzione",
    knowledgeLabel: "Cosa offre questo percorso",
    summaryLabel: "Risultato dello scopo",
    nextLabel: "Prossimo passo",
  },
  Français: {
    ecosystem: "Démo de l’écosystème vivant",
    title: "Entrez dans l’écosystème.",
    subtitle: "Une plateforme immersive de ferme, alimentation, apprentissage et communauté.",
    summary:
      "Bronson Family Farm est un écosystème vivant où les visiteurs comprennent la vision, les clients découvrent une nourriture fraîche et la nutrition, les producteurs accèdent à des opportunités, les jeunes développent leur avenir, les partenaires alignent les ressources, et le marché transforme l’intérêt en durabilité.",
    language: "Langue",
    voice: "Voix guidée",
    on: "Activée",
    off: "Désactivée",
    choose: "Choisissez un parcours",
    website: "Site web",
    storefront: "Boutique",
    enter: "Entrer",
    back: "Retour à l’entrée",
    liveLinks: "Liens en direct",
    developed: "Développé par Bronson Family Farm",
    missionLabel: "Mission",
    soundbiteLabel: "Message clé",
    introLabel: "Introduction",
    knowledgeLabel: "Ce que ce parcours apporte",
    summaryLabel: "Résultat attendu",
    nextLabel: "Étape suivante",
  },
  עברית: {
    ecosystem: "הדגמת המערכת החיה",
    title: "היכנסו לאקוסיסטם.",
    subtitle: "פלטפורמה חיה של חווה, מזון, למידה וקהילה.",
    summary:
      "Bronson Family Farm היא מערכת חיה שבה אורחים מבינים את החזון, לקוחות מגלים מזון טרי ותזונה, מגדלים מתחברים להזדמנויות, צעירים בונים מוכנות לעתיד, שותפים מיישרים משאבים, והשוק הופך עניין לקיימות.",
    language: "שפה",
    voice: "קול מודרך",
    on: "פועל",
    off: "כבוי",
    choose: "בחרו מסלול",
    website: "אתר",
    storefront: "חנות",
    enter: "כניסה",
    back: "חזרה לכניסה",
    liveLinks: "קישורים חיים",
    developed: "פותח על ידי Bronson Family Farm",
    missionLabel: "משימה",
    soundbiteLabel: "מסר קצר",
    introLabel: "מבוא",
    knowledgeLabel: "מה המסלול הזה מספק",
    summaryLabel: "תוצאת המטרה",
    nextLabel: "השלב הבא",
  },
} as const;

const pathwayContent = {
  guest: {
    title: "Guest",
    soundbite: "Walk the land. See the story. Understand why this exists.",
    mission:
      "Help guests understand the vision, story, and purpose of Bronson Family Farm.",
    intro:
      "This pathway introduces visitors to the land, the legacy, and the reason the ecosystem exists. It is designed to move a person from curiosity to understanding.",
    knowledge: [
      "Bronson Family Farm blends agriculture, agritourism, community learning, and place-based transformation.",
      "The farm honors family legacy, including farming roots connected to California and the Philippines.",
      "The site is connected to a larger vision for food access, wellness, education, and belonging in the Mahoning Valley.",
      "Guests are invited to experience the farm as a destination, not just a place to visit once.",
    ],
    purpose:
      "A guest leaves understanding the meaning of the land and why the farm matters.",
    next:
      "Continue to the website, attend an event, or explore another pathway to deepen engagement.",
  },
  customer: {
    title: "Customer",
    soundbite: "Fresh food. Better choices. Reasons to come back.",
    mission:
      "Help customers connect fresh food and nutrition to repeat healthy choices.",
    intro:
      "This pathway focuses on healthy food, access, value, and trust. It shows why customers return to Bronson Family Farm for produce, education, and community-centered food experiences.",
    knowledge: [
      "Customers gain access to fresh produce, seedlings, seasonal goods, and market offerings.",
      "Nutrition is part of the experience, with food choices connected to health, learning, and family wellbeing.",
      "The ecosystem supports repeated engagement through markets, preorders, pickups, events, and storytelling.",
      "The customer pathway is meant to build confidence, familiarity, and lasting connection to healthy food.",
    ],
    purpose:
      "A customer leaves understanding that Bronson Family Farm offers fresh food, practical value, and a reason to return.",
    next:
      "Visit the storefront, browse farm offerings, or attend a market event to continue the experience.",
  },
  marketplace: {
    title: "Marketplace",
    soundbite: "Where attention becomes action.",
    mission:
      "Convert interest into purchasing power and long-term sustainability.",
    intro:
      "This pathway is the bridge between interest and exchange. It shows how attention becomes buying, support, market participation, and economic circulation within the ecosystem.",
    knowledge: [
      "The marketplace supports produce sales, value-added items, seasonal promotions, and vendor participation.",
      "It creates a visible channel for customers and supporters to act on what they have learned.",
      "It connects the ecosystem to real transactions that support sustainability and growth.",
      "It is aligned with the GrownBy storefront and other selling opportunities connected to the farm.",
    ],
    purpose:
      "A visitor leaves understanding that the marketplace is where the ecosystem becomes economically active.",
    next:
      "Open the storefront to shop, support, preorder, or continue into the grower pathway.",
  },
  grower: {
    title: "Grower",
    soundbite: "Grow here. Belong here. Benefit here.",
    mission:
      "Connect producers and growers to opportunity and market participation.",
    intro:
      "This pathway shows how growers become part of a broader ecosystem. It is about registration, inclusion, collaboration, and access to participation in a welcoming grower network.",
    knowledge: [
      "Growers are invited into a supportive ecosystem rather than left to work in isolation.",
      "The pathway connects producers to opportunity, visibility, markets, and shared growth.",
      "Participation can include selling, learning, networking, planning, and returning for seasonal engagement.",
      "The visual and functional design is meant to feel friendly, useful, and worth returning to again and again.",
    ],
    purpose:
      "A grower leaves understanding that the ecosystem offers belonging, opportunity, and a pathway to participation.",
    next:
      "Register interest, connect to the marketplace, or continue into partnership and workforce opportunities.",
  },
  youth: {
    title: "Youth Workforce",
    soundbite: "Learning by doing, guided by purpose.",
    mission:
      "Build skills, responsibility, and future readiness through hands-on experience.",
    intro:
      "This pathway centers applied learning. It positions the farm as a place where youth gain exposure, practical skill, responsibility, and confidence through meaningful work.",
    knowledge: [
      "Youth engage with agriculture, teamwork, responsibility, and real-world expectations.",
      "The pathway can include guided roles, structured learning, supervision, and growth over time.",
      "It is tied to future readiness, leadership, and community contribution rather than just temporary activity.",
      "The supervisor dimension belongs within the youth workforce pathway and supports growth in responsibility.",
    ],
    purpose:
      "A young person or supporter leaves understanding that the farm helps build work ethic, skills, and future direction.",
    next:
      "Explore workforce programming, partnership support, or the guest pathway to understand the full setting.",
  },
  partners: {
    title: "Partners",
    soundbite: "Shared vision. Shared alignment. Shared impact.",
    mission:
      "Align resources and collaboration for community benefit.",
    intro:
      "This pathway is for institutions, sponsors, civic leaders, funders, schools, and aligned collaborators. It shows how the ecosystem creates a place for shared work and measurable community benefit.",
    knowledge: [
      "Partners can align support around workforce development, food access, education, wellness, events, and community engagement.",
      "The ecosystem makes room for nonprofit, institutional, civic, and business collaboration.",
      "The pathway communicates why support matters and how it can connect to visible outcomes.",
      "It helps partners see Bronson Family Farm as a place-based platform for meaningful coordination and action.",
    ],
    purpose:
      "A partner leaves understanding where their support fits and how collaboration can create measurable impact.",
    next:
      "Visit the website, connect for collaboration, or explore guest and marketplace pathways for broader context.",
  },
} as const;

function getVoiceLocale(lang: Lang) {
  switch (lang) {
    case "Español":
      return "es-ES";
    case "Filipino":
      return "fil-PH";
    case "Italiano":
      return "it-IT";
    case "Français":
      return "fr-FR";
    case "עברית":
      return "he-IL";
    default:
      return "en-US";
  }
}

export default function App() {
  const [lang, setLang] = useState<Lang>("English");
  const [view, setView] = useState<View>("home");
  const [voiceOn, setVoiceOn] = useState(false);
  const [voicesLoaded, setVoicesLoaded] = useState(0);

  const t = translations[lang];
  const isRTL = lang === "עברית";

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;

    const loadVoices = () => setVoicesLoaded(window.speechSynthesis.getVoices().length);
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const speechText = useMemo(() => {
    if (view === "home") {
      return `${t.title} ${t.subtitle} ${t.summary}`;
    }
    const content = pathwayContent[view as PathwayKey];
    return `${content.title}. ${content.soundbite}. ${content.mission}. ${content.purpose}. ${content.next}`;
  }, [view, lang, t]);

  useEffect(() => {
    if (!voiceOn) {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      return;
    }

    if (!("speechSynthesis" in window)) return;

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 0.93;
    utterance.pitch = 1.0;
    utterance.volume = 1;
    utterance.lang = getVoiceLocale(lang);

    const availableVoices = window.speechSynthesis.getVoices();
    const matchedVoice =
      availableVoices.find((v) =>
        v.lang.toLowerCase().startsWith(getVoiceLocale(lang).toLowerCase().split("-")[0])
      ) || availableVoices.find((v) => v.lang.toLowerCase().startsWith("en"));

    if (matchedVoice) utterance.voice = matchedVoice;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);

    return () => window.speechSynthesis.cancel();
  }, [speechText, voiceOn, lang, voicesLoaded]);

  const currentImage = view === "home" ? IMAGES.home : IMAGES[view];

  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    width: "100%",
    color: "#f8f5ee",
    backgroundImage: `linear-gradient(rgba(16, 28, 18, 0.70), rgba(10, 18, 12, 0.82)), url(${currentImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    fontFamily:
      '"Segoe UI", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
    direction: isRTL ? "rtl" : "ltr",
  };

  const shellStyle: React.CSSProperties = {
    maxWidth: 1320,
    margin: "0 auto",
    padding: "28px 22px 40px",
  };

  const glassStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.20)",
    boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderRadius: 28,
  };

  const pillButton = (active: boolean): React.CSSProperties => ({
    border: "1px solid rgba(255,255,255,0.20)",
    background: active ? "linear-gradient(135deg, #486b41, #6b8e58)" : "rgba(255,255,255,0.10)",
    color: "#fff",
    padding: "10px 14px",
    borderRadius: 999,
    cursor: "pointer",
    fontWeight: 700,
    fontSize: 15,
    boxShadow: active ? "0 12px 28px rgba(88,125,72,0.35)" : "none",
  });

  const linkButtonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "12px 18px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 800,
    color: "#fff",
    background: "linear-gradient(135deg, #6c8f53, #8ea86c)",
    boxShadow: "0 14px 30px rgba(0,0,0,0.18)",
    border: "1px solid rgba(255,255,255,0.18)",
  };

  const secondaryLinkButtonStyle: React.CSSProperties = {
    ...linkButtonStyle,
    background: "linear-gradient(135deg, #9c7044, #c28a4c)",
  };

  const entranceCardStyle: React.CSSProperties = {
    ...glassStyle,
    padding: 24,
    overflow: "hidden",
  };

  const homeGridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 22,
    marginTop: 26,
  };

  const pathwayCardStyle: React.CSSProperties = {
    ...glassStyle,
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 180ms ease, box-shadow 180ms ease",
  };

  const panelStyle: React.CSSProperties = {
    ...glassStyle,
    padding: 22,
  };

  const sectionHeadingStyle: React.CSSProperties = {
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: "#d8e6c8",
    marginBottom: 8,
    fontWeight: 800,
  };

  const knowledgeListStyle: React.CSSProperties = {
    margin: 0,
    paddingInlineStart: isRTL ? 18 : 22,
    lineHeight: 1.75,
    fontSize: 17,
  };

  const renderHome = () => {
    const pathwayCards: Array<{
      key: PathwayKey;
      title: string;
      text: string;
      image: string;
    }> = [
      {
        key: "guest",
        title: "Guest",
        text: "Walk the land. See the story. Understand why this exists.",
        image: IMAGES.guest,
      },
      {
        key: "customer",
        title: "Customer",
        text: "Fresh food. Better choices. Reasons to come back.",
        image: IMAGES.customer,
      },
      {
        key: "marketplace",
        title: "Marketplace",
        text: "Where attention becomes action.",
        image: IMAGES.marketplace,
      },
      {
        key: "grower",
        title: "Grower",
        text: "Grow here. Belong here. Benefit here.",
        image: IMAGES.grower,
      },
      {
        key: "youth",
        title: "Youth Workforce",
        text: "Learning by doing, guided by purpose.",
        image: IMAGES.youth,
      },
      {
        key: "partners",
        title: "Partners",
        text: "Shared vision. Shared alignment. Shared impact.",
        image: IMAGES.partners,
      },
    ];

    return (
      <>
        <div style={entranceCardStyle}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 18,
            }}
          >
            <div style={{ maxWidth: 820 }}>
              <div
                style={{
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: "0.24em",
                  color: "#d9e7cc",
                  fontWeight: 800,
                  marginBottom: 10,
                }}
              >
                {t.ecosystem}
              </div>

              <h1
                style={{
                  fontSize: "clamp(40px, 7vw, 84px)",
                  lineHeight: 0.95,
                  margin: "0 0 14px",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                }}
              >
                {t.title}
              </h1>

              <div
                style={{
                  fontSize: "clamp(18px, 2.2vw, 28px)",
                  fontWeight: 600,
                  marginBottom: 14,
                  color: "#f1f5e8",
                }}
              >
                {t.subtitle}
              </div>

              <div
                style={{
                  fontSize: "clamp(16px, 1.5vw, 20px)",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.94)",
                  maxWidth: 1000,
                }}
              >
                {t.summary}
              </div>
            </div>

            <div
              style={{
                width: "min(100%, 320px)",
                minHeight: 220,
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 22px 50px rgba(0,0,0,0.24)",
                backgroundImage: `url(${IMAGES.home})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 16,
              marginTop: 24,
            }}
          >
            <div>
              <div style={sectionHeadingStyle}>{t.language}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {(Object.keys(translations) as Lang[]).map((language) => (
                  <button
                    key={language}
                    onClick={() => setLang(language)}
                    style={pillButton(lang === language)}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div style={sectionHeadingStyle}>{t.voice}</div>
              <button onClick={() => setVoiceOn((v) => !v)} style={pillButton(voiceOn)}>
                {voiceOn ? t.on : t.off}
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#d9e7cc",
          }}
        >
          {t.choose}
        </div>

        <div style={homeGridStyle}>
          {pathwayCards.map((card) => (
            <div
              key={card.key}
              style={pathwayCardStyle}
              onClick={() => setView(card.key)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 28px 56px rgba(0,0,0,0.28)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 80px rgba(0,0,0,0.28)";
              }}
            >
              <div
                style={{
                  height: 190,
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.12), rgba(0,0,0,0.30)), url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div style={{ padding: 20 }}>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 900,
                    marginBottom: 8,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {card.title}
                </div>
                <div
                  style={{
                    fontSize: 17,
                    lineHeight: 1.5,
                    color: "rgba(255,255,255,0.92)",
                    minHeight: 74,
                  }}
                >
                  {card.text}
                </div>
                <button
                  style={{
                    marginTop: 16,
                    ...pillButton(true),
                    padding: "12px 18px",
                    background: "linear-gradient(135deg, #4d6f43, #6a9155)",
                  }}
                >
                  {t.enter}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ ...panelStyle, marginTop: 24 }}>
          <div style={sectionHeadingStyle}>{t.liveLinks}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a href={SITE_URL} target="_blank" rel="noreferrer" style={linkButtonStyle}>
              {t.website}
            </a>
            <a href={STOREFRONT_URL} target="_blank" rel="noreferrer" style={secondaryLinkButtonStyle}>
              {t.storefront}
            </a>
          </div>
          <div style={{ marginTop: 18, fontSize: 15, color: "rgba(255,255,255,0.88)" }}>
            {t.developed}
          </div>
        </div>
      </>
    );
  };

  const renderDetail = (key: PathwayKey) => {
    const content = pathwayContent[key];

    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: isRTL ? "flex-end" : "flex-start",
            marginBottom: 18,
          }}
        >
          <button onClick={() => setView("home")} style={pillButton(true)}>
            ← {t.back}
          </button>
        </div>

        <div style={{ ...glassStyle, overflow: "hidden" }}>
          <div
            style={{
              minHeight: 310,
              backgroundImage: `linear-gradient(rgba(8, 18, 10, 0.35), rgba(8, 18, 10, 0.62)), url(${IMAGES[key]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "end",
            }}
          >
            <div style={{ padding: 28, width: "100%" }}>
              <div
                style={{
                  fontSize: 14,
                  textTransform: "uppercase",
                  letterSpacing: "0.20em",
                  color: "#d8e6c8",
                  fontWeight: 800,
                  marginBottom: 10,
                }}
              >
                {t.soundbiteLabel}
              </div>

              <h1
                style={{
                  fontSize: "clamp(38px, 6vw, 70px)",
                  lineHeight: 0.95,
                  margin: "0 0 10px",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                }}
              >
                {content.title}
              </h1>

              <div
                style={{
                  fontSize: "clamp(18px, 2vw, 28px)",
                  lineHeight: 1.35,
                  maxWidth: 860,
                  fontWeight: 650,
                  color: "#fbfff5",
                }}
              >
                {content.soundbite}
              </div>
            </div>
          </div>

          <div style={{ padding: 22 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 18,
              }}
            >
              <div style={panelStyle}>
                <div style={sectionHeadingStyle}>{t.missionLabel}</div>
                <div style={{ fontSize: 18, lineHeight: 1.6 }}>{content.mission}</div>
              </div>

              <div style={panelStyle}>
                <div style={sectionHeadingStyle}>{t.introLabel}</div>
                <div style={{ fontSize: 18, lineHeight: 1.6 }}>{content.intro}</div>
              </div>

              <div style={panelStyle}>
                <div style={sectionHeadingStyle}>{t.summaryLabel}</div>
                <div style={{ fontSize: 18, lineHeight: 1.6 }}>{content.purpose}</div>
              </div>

              <div style={panelStyle}>
                <div style={sectionHeadingStyle}>{t.nextLabel}</div>
                <div style={{ fontSize: 18, lineHeight: 1.6 }}>{content.next}</div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.25fr) minmax(320px, 0.75fr)",
                gap: 22,
                marginTop: 24,
              }}
            >
              <div style={panelStyle}>
                <div style={sectionHeadingStyle}>{t.knowledgeLabel}</div>
                <ul style={knowledgeListStyle}>
                  {content.knowledge.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: 12 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "grid", gap: 18 }}>
                <div
                  style={{
                    ...panelStyle,
                    minHeight: 240,
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.10)), url(${IMAGES[key]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div style={panelStyle}>
                  <div style={sectionHeadingStyle}>{t.liveLinks}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                    <a href={SITE_URL} target="_blank" rel="noreferrer" style={linkButtonStyle}>
                      {t.website}
                    </a>
                    {(key === "marketplace" || key === "customer" || key === "grower") && (
                      <a
                        href={STOREFRONT_URL}
                        target="_blank"
                        rel="noreferrer"
                        style={secondaryLinkButtonStyle}
                      >
                        {t.storefront}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 18, fontSize: 15, color: "rgba(255,255,255,0.88)" }}>
              {t.developed}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div style={pageStyle}>
      <div style={shellStyle}>
        {view === "home" ? renderHome() : renderDetail(view as PathwayKey)}
      </div>
    </div>
  );
}
