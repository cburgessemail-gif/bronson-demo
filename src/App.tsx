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
  pine: "#0f5d43",
  gold: "#e8cf69",
  text: "#173629",
  muted: "#5a6d63",
};

const layerOrder: LayerKey[] = [
  "soundbite",
  "intro",
  "knowledge",
  "purpose",
  "next",
];

const LANG_OPTIONS: { key: LanguageKey; label: string; dir?: "ltr" | "rtl" }[] = [
  { key: "en", label: "English", dir: "ltr" },
  { key: "es", label: "Español", dir: "ltr" },
  { key: "tl", label: "Tagalog", dir: "ltr" },
  { key: "it", label: "Italiano", dir: "ltr" },
  { key: "fr", label: "Français", dir: "ltr" },
  { key: "he", label: "עברית", dir: "rtl" },
];

const UI: Record<
  LanguageKey,
  {
    topTag: string;
    home: string;
    story: string;
    weather: string;
    grownBy: string;
    language: string;
    heroTitle: string;
    heroSubtitle: string;
    heroBody: string;
    personalInvitation: string;
    beginJourney: string;
    openStore: string;
    enterAsGuest: string;
    enterAsCustomer: string;
    enterGrownBy: string;
    whyItMatters: string;
    storyValue: string;
    whereThisLeads: string;
    journeyProgress: string;
    whyThisExists: string;
    whatThisCreates: string;
    forYou: string;
    prev: string;
    next: string;
    backHome: string;
    ourStoryTitle: string;
    ourStoryBody1: string;
    ourStoryBody2: string;
  }
> = {
  en: {
    topTag: "Living Ecosystem Experience",
    home: "Home",
    story: "Our Story",
    weather: "Weather",
    grownBy: "GrownBy",
    language: "Language",
    heroTitle: "Bronson Family Farm",
    heroSubtitle: "More than a farm.",
    heroBody:
      "This is a place where people are meant to feel welcomed, seen, nourished, and connected to something larger than themselves.",
    personalInvitation:
      "This experience is designed to feel personal. Each pathway speaks to a different kind of visitor, need, and future.",
    beginJourney: "Begin Your Journey",
    openStore: "Open GrownBy",
    enterAsGuest: "Enter as Guest",
    enterAsCustomer: "Enter as Customer",
    enterGrownBy: "Enter GrownBy",
    whyItMatters: "Why It Matters",
    storyValue: "Story Value",
    whereThisLeads: "Where This Leads",
    journeyProgress: "Journey Progress",
    whyThisExists: "Why This Exists",
    whatThisCreates: "What This Creates",
    forYou: "For You",
    prev: "Prev",
    next: "Next",
    backHome: "Back Home",
    ourStoryTitle: "Our Story",
    ourStoryBody1:
      "Inspired by family farming traditions and shaped for Youngstown’s future, Bronson Family Farm connects land restoration, food access, agritourism, education, and opportunity.",
    ourStoryBody2:
      "The Bronson and Lorenzana legacy now moves into a new generation of purpose.",
  },
  es: {
    topTag: "Experiencia de Ecosistema Vivo",
    home: "Inicio",
    story: "Nuestra Historia",
    weather: "Clima",
    grownBy: "GrownBy",
    language: "Idioma",
    heroTitle: "Bronson Family Farm",
    heroSubtitle: "Más que una granja.",
    heroBody:
      "Este es un lugar donde las personas deben sentirse bienvenidas, vistas, nutridas y conectadas con algo más grande que ellas mismas.",
    personalInvitation:
      "Esta experiencia está diseñada para sentirse personal. Cada ruta habla a un tipo diferente de visitante, necesidad y futuro.",
    beginJourney: "Comience su recorrido",
    openStore: "Abrir GrownBy",
    enterAsGuest: "Entrar como visitante",
    enterAsCustomer: "Entrar como cliente",
    enterGrownBy: "Entrar a GrownBy",
    whyItMatters: "Por qué importa",
    storyValue: "Valor de la historia",
    whereThisLeads: "A dónde conduce",
    journeyProgress: "Progreso del recorrido",
    whyThisExists: "Por qué existe",
    whatThisCreates: "Lo que esto crea",
    forYou: "Para usted",
    prev: "Anterior",
    next: "Siguiente",
    backHome: "Volver al inicio",
    ourStoryTitle: "Nuestra Historia",
    ourStoryBody1:
      "Inspirada en tradiciones agrícolas familiares y pensada para el futuro de Youngstown, Bronson Family Farm conecta restauración de la tierra, acceso a alimentos, agroturismo, educación y oportunidad.",
    ourStoryBody2:
      "El legado de Bronson y Lorenzana entra ahora en una nueva generación de propósito.",
  },
  tl: {
    topTag: "Living Ecosystem Experience",
    home: "Home",
    story: "Aming Kuwento",
    weather: "Panahon",
    grownBy: "GrownBy",
    language: "Wika",
    heroTitle: "Bronson Family Farm",
    heroSubtitle: "Higit pa sa isang farm.",
    heroBody:
      "Ito ay lugar kung saan ang mga tao ay dapat makaramdam ng pagtanggap, pagkilala, pag-aaruga, at koneksyon sa mas malaking layunin.",
    personalInvitation:
      "Ang karanasang ito ay ginawa upang maging personal. Bawat pathway ay para sa ibang uri ng bisita, pangangailangan, at kinabukasan.",
    beginJourney: "Simulan ang paglalakbay",
    openStore: "Buksan ang GrownBy",
    enterAsGuest: "Pumasok bilang bisita",
    enterAsCustomer: "Pumasok bilang customer",
    enterGrownBy: "Pumasok sa GrownBy",
    whyItMatters: "Bakit ito mahalaga",
    storyValue: "Halaga ng kuwento",
    whereThisLeads: "Saan ito patungo",
    journeyProgress: "Pag-usad ng paglalakbay",
    whyThisExists: "Bakit ito umiiral",
    whatThisCreates: "Ano ang nililikha nito",
    forYou: "Para sa iyo",
    prev: "Bumalik",
    next: "Susunod",
    backHome: "Balik Home",
    ourStoryTitle: "Aming Kuwento",
    ourStoryBody1:
      "Hinubog ng mga tradisyon ng family farming at iniaayon sa kinabukasan ng Youngstown, ang Bronson Family Farm ay nag-uugnay sa pagpapanumbalik ng lupa, access sa pagkain, agritourism, edukasyon, at oportunidad.",
    ourStoryBody2:
      "Ang pamana ng Bronson at Lorenzana ay pumapasok ngayon sa bagong henerasyon ng layunin.",
  },
  it: {
    topTag: "Esperienza Ecosistema Vivo",
    home: "Home",
    story: "La Nostra Storia",
    weather: "Meteo",
    grownBy: "GrownBy",
    language: "Lingua",
    heroTitle: "Bronson Family Farm",
    heroSubtitle: "Più di una fattoria.",
    heroBody:
      "Questo è un luogo in cui le persone dovrebbero sentirsi accolte, viste, nutrite e connesse a qualcosa di più grande di loro.",
    personalInvitation:
      "Questa esperienza è pensata per essere personale. Ogni percorso parla a un diverso tipo di visitatore, bisogno e futuro.",
    beginJourney: "Inizia il tuo viaggio",
    openStore: "Apri GrownBy",
    enterAsGuest: "Entra come ospite",
    enterAsCustomer: "Entra come cliente",
    enterGrownBy: "Entra in GrownBy",
    whyItMatters: "Perché conta",
    storyValue: "Valore della storia",
    whereThisLeads: "Dove conduce",
    journeyProgress: "Progresso del percorso",
    whyThisExists: "Perché esiste",
    whatThisCreates: "Cosa crea",
    forYou: "Per te",
    prev: "Indietro",
    next: "Avanti",
    backHome: "Torna alla Home",
    ourStoryTitle: "La Nostra Storia",
    ourStoryBody1:
      "Ispirata alle tradizioni agricole familiari e orientata al futuro di Youngstown, Bronson Family Farm collega il ripristino della terra, l’accesso al cibo, l’agriturismo, l’educazione e l’opportunità.",
    ourStoryBody2:
      "L’eredità Bronson e Lorenzana entra ora in una nuova generazione di scopo.",
  },
  fr: {
    topTag: "Expérience d’Écosystème Vivant",
    home: "Accueil",
    story: "Notre Histoire",
    weather: "Météo",
    grownBy: "GrownBy",
    language: "Langue",
    heroTitle: "Bronson Family Farm",
    heroSubtitle: "Bien plus qu’une ferme.",
    heroBody:
      "C’est un lieu où chacun doit se sentir accueilli, vu, nourri et relié à quelque chose de plus grand que soi.",
    personalInvitation:
      "Cette expérience est conçue pour être personnelle. Chaque parcours parle à un type différent de visiteur, de besoin et d’avenir.",
    beginJourney: "Commencez votre parcours",
    openStore: "Ouvrir GrownBy",
    enterAsGuest: "Entrer comme invité",
    enterAsCustomer: "Entrer comme client",
    enterGrownBy: "Entrer dans GrownBy",
    whyItMatters: "Pourquoi cela compte",
    storyValue: "Valeur de l’histoire",
    whereThisLeads: "Où cela mène",
    journeyProgress: "Progression du parcours",
    whyThisExists: "Pourquoi cela existe",
    whatThisCreates: "Ce que cela crée",
    forYou: "Pour vous",
    prev: "Précédent",
    next: "Suivant",
    backHome: "Retour à l’accueil",
    ourStoryTitle: "Notre Histoire",
    ourStoryBody1:
      "Inspirée par les traditions agricoles familiales et tournée vers l’avenir de Youngstown, Bronson Family Farm relie la restauration des terres, l’accès à l’alimentation, l’agritourisme, l’éducation et l’opportunité.",
    ourStoryBody2:
      "L’héritage Bronson et Lorenzana entre maintenant dans une nouvelle génération de sens.",
  },
  he: {
    topTag: "חוויית מערכת אקולוגית חיה",
    home: "בית",
    story: "הסיפור שלנו",
    weather: "מזג אוויר",
    grownBy: "GrownBy",
    language: "שפה",
    heroTitle: "Bronson Family Farm",
    heroSubtitle: "יותר מחווה.",
    heroBody:
      "זהו מקום שבו אנשים אמורים להרגיש רצויים, נראים, מוזנים ומחוברים למשהו גדול מהם.",
    personalInvitation:
      "החוויה הזו נועדה להרגיש אישית. כל מסלול מדבר אל סוג אחר של מבקר, צורך ועתיד.",
    beginJourney: "התחילו את המסע",
    openStore: "פתחו את GrownBy",
    enterAsGuest: "היכנסו כאורח",
    enterAsCustomer: "היכנסו כלקוח",
    enterGrownBy: "היכנסו ל-GrownBy",
    whyItMatters: "למה זה חשוב",
    storyValue: "ערך הסיפור",
    whereThisLeads: "לאן זה מוביל",
    journeyProgress: "התקדמות המסע",
    whyThisExists: "למה זה קיים",
    whatThisCreates: "מה זה יוצר",
    forYou: "בשבילך",
    prev: "הקודם",
    next: "הבא",
    backHome: "חזרה לבית",
    ourStoryTitle: "הסיפור שלנו",
    ourStoryBody1:
      "בהשראת מסורות חקלאות משפחתיות ומתוך מבט לעתיד של Youngstown, Bronson Family Farm מחברת בין שיקום הקרקע, גישה למזון, אגריטוריזם, חינוך והזדמנות.",
    ourStoryBody2:
      "מורשת Bronson ו-Lorenzana נכנסת כעת לדור חדש של משמעות.",
  },
};

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function pageShell(): React.CSSProperties {
  return {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, rgba(16,92,63,.10), transparent 22%), radial-gradient(circle at bottom right, rgba(232,207,105,.10), transparent 24%), linear-gradient(180deg,#f4efe5 0%,#edf5ee 45%,#f7f7f7 100%)",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
    color: FOREST.text,
  };
}

function glassNav(): React.CSSProperties {
  return {
    background: "linear-gradient(135deg, rgba(8,44,31,.96), rgba(11,94,67,.92))",
    color: "#fff",
    borderRadius: 26,
    padding: 22,
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 20px 50px rgba(0,0,0,.16)",
    border: "1px solid rgba(255,255,255,.08)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  };
}

function softCard(): React.CSSProperties {
  return {
    background: "rgba(255,255,255,.92)",
    borderRadius: 30,
    padding: 24,
    boxShadow: "0 18px 44px rgba(0,0,0,.08)",
    border: "1px solid rgba(20,50,39,.05)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  };
}

function HeroImage({
  src,
  height = 430,
  overlay = true,
  children,
}: {
  src: string;
  height?: number;
  overlay?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        height,
        borderRadius: 34,
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        boxShadow: "0 28px 70px rgba(0,0,0,.18)",
      }}
    >
      {overlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.22) 45%, rgba(0,0,0,.50))",
          }}
        />
      )}
      {children && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "end",
            padding: 30,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function Card({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return <div style={{ ...softCard(), ...style }}>{children}</div>;
}

function SolidButton({
  children,
  onClick,
  gold = false,
  full = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  gold?: boolean;
  full?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "14px 22px",
        borderRadius: 999,
        border: "1px solid rgba(0,0,0,.04)",
        background: gold ? FOREST.gold : FOREST.pine,
        color: gold ? "#2a2613" : "#fff",
        fontWeight: 800,
        cursor: "pointer",
        fontSize: 16,
        width: full ? "100%" : undefined,
        boxShadow: gold
          ? "0 10px 24px rgba(232,207,105,.28)"
          : "0 10px 24px rgba(11,94,67,.24)",
        transition: "transform .18s ease, box-shadow .18s ease, opacity .18s ease",
      }}
    >
      {children}
    </button>
  );
}

function GhostButton({
  children,
  onClick,
  active = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "13px 16px",
        borderRadius: 18,
        border: active ? "1px solid transparent" : "1px solid rgba(0,0,0,.05)",
        background: active
          ? "linear-gradient(135deg, #0b5e43, #6f8f3d)"
          : "rgba(239,244,240,.92)",
        color: active ? "#fff" : FOREST.text,
        cursor: "pointer",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: ".12em",
        fontSize: 12,
        textAlign: "left",
        boxShadow: active ? "0 10px 24px rgba(11,94,67,.20)" : "none",
      }}
    >
      {children}
    </button>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        letterSpacing: ".26em",
        textTransform: "uppercase",
        color: "#7f9086",
        fontWeight: 800,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<PageKey>("home");
  const [layer, setLayer] = useState<LayerKey>("soundbite");
  const [lang, setLang] = useState<LanguageKey>("en");

  const ui = UI[lang];
  const dir = LANG_OPTIONS.find((l) => l.key === lang)?.dir ?? "ltr";

  const active =
    page !== "home" && page !== "story"
      ? pathways[page as keyof typeof pathways]
      : null;

  const progress = useMemo(() => {
    return ((layerOrder.indexOf(layer) + 1) / layerOrder.length) * 100;
  }, [layer]);

  return (
    <div style={pageShell()} dir={dir}>
      <style>{`
        *{box-sizing:border-box}
        button,select{font-family:inherit}
        button:hover{transform:translateY(-1px)}
        @media(max-width:1000px){
          .grid2,.grid3,.gridUtility,.gridPersonal{grid-template-columns:1fr!important}
        }
      `}</style>

      <div style={{ maxWidth: 1450, margin: "0 auto", padding: 20 }}>
        <div style={glassNav()}>
          <div>
            <div style={{ fontSize: 28, fontWeight: 800 }}>{ui.heroTitle}</div>
            <div style={{ opacity: 0.85, fontSize: 16 }}>{ui.heroSubtitle}</div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <SolidButton onClick={() => setPage("home")}>{ui.home}</SolidButton>
            <SolidButton onClick={() => setPage("story")}>{ui.story}</SolidButton>
            <SolidButton onClick={() => openExternal(WEATHER_URL)}>
              {ui.weather}
            </SolidButton>
            <SolidButton gold onClick={() => setPage("marketplace")}>
              {ui.grownBy}
            </SolidButton>

            <select
              aria-label={ui.language}
              value={lang}
              onChange={(e) => setLang(e.target.value as LanguageKey)}
              style={{
                padding: "13px 16px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.18)",
                background: "rgba(255,255,255,.10)",
                color: "#fff",
                fontSize: 15,
                fontWeight: 700,
                outline: "none",
              }}
            >
              {LANG_OPTIONS.map((option) => (
                <option
                  key={option.key}
                  value={option.key}
                  style={{ color: "#173629", background: "#ffffff" }}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {page === "home" && (
          <>
            <div style={{ marginTop: 24 }}>
              <HeroImage src={IMAGES.home} height={550}>
                <div style={{ position: "relative", zIndex: 1, color: "#fff", maxWidth: 900 }}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "9px 14px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,.12)",
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: ".24em",
                      fontWeight: 800,
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                  >
                    {ui.topTag}
                  </div>

                  <div
                    style={{
                      marginTop: 18,
                      fontSize: 56,
                      lineHeight: 1.02,
                      fontWeight: 800,
                      letterSpacing: "-.035em",
                      textShadow: "0 8px 28px rgba(0,0,0,.24)",
                    }}
                  >
                    {ui.heroTitle}
                  </div>

                  <div
                    style={{
                      marginTop: 10,
                      fontSize: 28,
                      color: "rgba(255,255,255,.92)",
                      textShadow: "0 6px 20px rgba(0,0,0,.22)",
                    }}
                  >
                    {ui.heroSubtitle}
                  </div>

                  <div
                    style={{
                      marginTop: 18,
                      fontSize: 21,
                      lineHeight: 1.8,
                      maxWidth: 780,
                      color: "rgba(255,255,255,.94)",
                    }}
                  >
                    {ui.heroBody}
                  </div>
                </div>
              </HeroImage>
            </div>

            <div
              className="grid2"
              style={{
                display: "grid",
                gridTemplateColumns: "1.15fr .85fr",
                gap: 22,
                marginTop: 22,
              }}
            >
              <Card>
                <div
                  style={{
                    fontSize: 23,
                    lineHeight: 1.85,
                    color: FOREST.muted,
                  }}
                >
                  A regenerative ecosystem for food access, marketplace
                  activity, growers, youth workforce development, education,
                  and community return.
                </div>

                <div
                  className="gridPersonal"
                  style={{
                    marginTop: 24,
                    display: "grid",
                    gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                    gap: 16,
                  }}
                >
                  <Card
                    style={{
                      padding: 18,
                      background:
                        "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                      boxShadow: "none",
                    }}
                  >
                    <div style={{ fontSize: 38, fontWeight: 800 }}>Feel</div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: FOREST.muted,
                      }}
                    >
                      the welcome, the land, and the meaning.
                    </div>
                  </Card>

                  <Card
                    style={{
                      padding: 18,
                      background:
                        "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                      boxShadow: "none",
                    }}
                  >
                    <div style={{ fontSize: 38, fontWeight: 800 }}>See</div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: FOREST.muted,
                      }}
                    >
                      how food, people, and purpose fit together.
                    </div>
                  </Card>

                  <Card
                    style={{
                      padding: 18,
                      background:
                        "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                      boxShadow: "none",
                    }}
                  >
                    <div style={{ fontSize: 38, fontWeight: 800 }}>Return</div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: FOREST.muted,
                      }}
                    >
                      with deeper connection and clearer purpose.
                    </div>
                  </Card>
                </div>

                <div
                  style={{
                    marginTop: 26,
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <SolidButton
                    onClick={() => {
                      setPage("guest");
                      setLayer("soundbite");
                    }}
                  >
                    {ui.beginJourney}
                  </SolidButton>
                  <SolidButton gold onClick={() => openExternal(STORE_URL)}>
                    {ui.openStore}
                  </SolidButton>
                </div>
              </Card>

              <Card>
                <Label>{ui.language}</Label>
                <div
                  style={{
                    marginTop: 18,
                    fontSize: 21,
                    lineHeight: 1.9,
                    color: FOREST.muted,
                  }}
                >
                  {ui.personalInvitation}
                </div>

                <div
                  className="gridUtility"
                  style={{ display: "grid", gap: 12, marginTop: 24 }}
                >
                  <SolidButton full onClick={() => setPage("guest")}>
                    {ui.enterAsGuest}
                  </SolidButton>
                  <SolidButton full onClick={() => setPage("customer")}>
                    {ui.enterAsCustomer}
                  </SolidButton>
                  <SolidButton gold full onClick={() => setPage("marketplace")}>
                    {ui.enterGrownBy}
                  </SolidButton>
                </div>
              </Card>
            </div>

            <div
              className="grid3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 22,
                marginTop: 24,
              }}
            >
              {Object.entries(pathways).map(([key, p]) => (
                <Card key={key} style={{ padding: 0 }}>
                  <HeroImage src={p.image} height={220} overlay={false} />
                  <div style={{ padding: 22 }}>
                    <div
                      style={{
                        fontSize: 30,
                        fontWeight: 800,
                        letterSpacing: "-.02em",
                      }}
                    >
                      {p.title}
                    </div>

                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 18,
                        lineHeight: 1.72,
                        color: FOREST.muted,
                      }}
                    >
                      {p.subtitle}
                    </div>

                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 16,
                        lineHeight: 1.75,
                        color: "#74867b",
                      }}
                    >
                      {p.personalLine}
                    </div>

                    <div style={{ marginTop: 18 }}>
                      <SolidButton
                        full
                        onClick={() => {
                          setPage(key as PageKey);
                          setLayer("soundbite");
                        }}
                      >
                        Open Pathway
                      </SolidButton>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {page === "story" && (
          <>
            <div style={{ marginTop: 24 }}>
              <HeroImage src={IMAGES.story} height={520} />
            </div>

            <Card style={{ marginTop: 24 }}>
              <div style={{ fontSize: 54, fontWeight: 800 }}>{ui.ourStoryTitle}</div>

              <div
                style={{
                  marginTop: 22,
                  fontSize: 22,
                  lineHeight: 1.85,
                  color: FOREST.muted,
                }}
              >
                {ui.ourStoryBody1}
              </div>

              <div
                style={{
                  marginTop: 18,
                  fontSize: 22,
                  lineHeight: 1.85,
                  color: FOREST.muted,
                }}
              >
                {ui.ourStoryBody2}
              </div>

              <div
                className="grid2"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 18,
                  marginTop: 26,
                }}
              >
                <Card
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                    boxShadow: "none",
                  }}
                >
                  <Label>{ui.storyValue}</Label>
                  <div
                    style={{
                      marginTop: 14,
                      fontSize: 18,
                      lineHeight: 1.8,
                      color: FOREST.muted,
                    }}
                  >
                    The story gives people a reason to care. It helps them feel
                    the purpose before they ever take another step.
                  </div>
                </Card>

                <Card
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                    boxShadow: "none",
                  }}
                >
                  <Label>{ui.whereThisLeads}</Label>
                  <div
                    style={{
                      marginTop: 14,
                      fontSize: 18,
                      lineHeight: 1.8,
                      color: FOREST.muted,
                    }}
                  >
                    The story leads into food, youth development, partnership,
                    GrownBy, education, and return visits that feel meaningful.
                  </div>
                </Card>
              </div>

              <div
                style={{
                  marginTop: 24,
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <SolidButton onClick={() => setPage("guest")}>
                  {ui.enterAsGuest}
                </SolidButton>
                <SolidButton gold onClick={() => setPage("marketplace")}>
                  {ui.enterGrownBy}
                </SolidButton>
              </div>
            </Card>
          </>
        )}

        {active && (
          <>
            <div style={{ marginTop: 24 }}>
              <HeroImage src={active.image} height={440}>
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    color: "#fff",
                    maxWidth: 820,
                  }}
                >
                  <div
                    style={{
                      fontSize: 50,
                      lineHeight: 1,
                      fontWeight: 800,
                      letterSpacing: "-.03em",
                    }}
                  >
                    {active.title}
                  </div>
                  <div
                    style={{
                      marginTop: 14,
                      fontSize: 24,
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,.92)",
                    }}
                  >
                    {active.personalLine}
                  </div>
                </div>
              </HeroImage>
            </div>

            <div
              className="grid2"
              style={{
                display: "grid",
                gridTemplateColumns: ".85fr 1.15fr",
                gap: 22,
                marginTop: 22,
              }}
            >
              <Card>
                <div
                  style={{
                    fontSize: 52,
                    lineHeight: 1,
                    fontWeight: 800,
                    letterSpacing: "-.03em",
                  }}
                >
                  {active.title}
                </div>

                <div
                  style={{
                    marginTop: 12,
                    fontSize: 18,
                    lineHeight: 1.75,
                    color: FOREST.muted,
                  }}
                >
                  {active.subtitle}
                </div>

                <div style={{ marginTop: 22 }}>
                  <Label>{ui.journeyProgress}</Label>
                  <div
                    style={{
                      marginTop: 10,
                      width: "100%",
                      height: 10,
                      borderRadius: 999,
                      background: "#e4ece5",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${progress}%`,
                        height: "100%",
                        borderRadius: 999,
                        background:
                          "linear-gradient(90deg,#0b5e43 0%, #d8ec77 100%)",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gap: 10, marginTop: 20 }}>
                  {layerOrder.map((l) => (
                    <GhostButton
                      key={l}
                      active={layer === l}
                      onClick={() => setLayer(l)}
                    >
                      {l}
                    </GhostButton>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: 18,
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <SolidButton
                    onClick={() =>
                      setLayer(layerOrder[Math.max(layerOrder.indexOf(layer) - 1, 0)])
                    }
                  >
                    {ui.prev}
                  </SolidButton>

                  <SolidButton
                    gold
                    onClick={() =>
                      setLayer(layerOrder[Math.min(layerOrder.indexOf(layer) + 1, 4)])
                    }
                  >
                    {ui.next}
                  </SolidButton>
                </div>

                <div style={{ marginTop: 18 }}>
                  <SolidButton full onClick={() => setPage("home")}>
                    {ui.backHome}
                  </SolidButton>
                </div>
              </Card>

              <Card>
                <div
                  style={{
                    fontSize: 56,
                    lineHeight: 1,
                    fontWeight: 800,
                  }}
                >
                  {active.panels[layer].title}
                </div>

                <div
                  style={{
                    marginTop: 22,
                    fontSize: 23,
                    lineHeight: 1.82,
                    color: FOREST.muted,
                  }}
                >
                  {active.panels[layer].body}
                </div>

                <div
                  className="grid2"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 18,
                    marginTop: 26,
                  }}
                >
                  <Card
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                      boxShadow: "none",
                    }}
                  >
                    <Label>{ui.whyThisExists}</Label>
                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 18,
                        lineHeight: 1.8,
                        color: FOREST.muted,
                      }}
                    >
                      {active.whyItMatters}
                    </div>
                  </Card>

                  <Card
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                      boxShadow: "none",
                    }}
                  >
                    <Label>{ui.whatThisCreates}</Label>
                    <div
                      style={{
                        marginTop: 14,
                        fontSize: 18,
                        lineHeight: 1.8,
                        color: FOREST.muted,
                      }}
                    >
                      {active.whatPeopleGain}
                    </div>
                  </Card>
                </div>

                <div
                  style={{
                    marginTop: 24,
                    padding: 20,
                    borderRadius: 24,
                    background:
                      "linear-gradient(180deg, rgba(248,251,248,.98), rgba(240,246,241,.96))",
                  }}
                >
                  <Label>{ui.forYou}</Label>
                  <div
                    style={{
                      marginTop: 12,
                      fontSize: 19,
                      lineHeight: 1.85,
                      color: FOREST.muted,
                    }}
                  >
                    {active.personalLine}
                  </div>
                </div>

                {page === "marketplace" && (
                  <div style={{ marginTop: 26 }}>
                    <SolidButton gold onClick={() => openExternal(STORE_URL)}>
                      {ui.openStore}
                    </SolidButton>
                  </div>
                )}
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
