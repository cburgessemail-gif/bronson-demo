import { useEffect, useMemo, useState } from "react";

type LangKey =
  | "English"
  | "Español"
  | "Tagalog"
  | "Italiano"
  | "עברית"
  | "Français";

type Text = Record<LangKey, string>;

type Slide = {
  id: number;
  nav: string;
  image: string;
  containImage?: boolean;

  title: Text;
  subtitle: Text;

  purpose: Text;
  need: Text;

  journey: Text[];

  benefits: Text[];

  connection: Text;

  decision: Text;
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
): Text => ({
  English: en,
  Español: es,
  Tagalog: tl,
  Italiano: it,
  עברית: he,
  Français: fr,
});

const ui = {
  demo: tx(
    "BRONSON FAMILY FARM DEMO",
    "DEMO DE BRONSON FAMILY FARM",
    "BRONSON FAMILY FARM DEMO",
    "DEMO BRONSON FAMILY FARM",
    "הדגמת BRONSON FAMILY FARM",
    "DÉMO BRONSON FAMILY FARM"
  ),

  mainTitle: tx(
    "Connected Food Ecosystem Experience",
    "Experiencia del Ecosistema Alimentario Conectado",
    "Connected Food Ecosystem Experience",
    "Esperienza dell’Ecosistema Alimentare Connesso",
    "חוויית מערכת מזון מחוברת",
    "Expérience d’un Écosystème Alimentaire Connecté"
  ),

  purpose: tx(
    "Purpose",
    "Propósito",
    "Purpose",
    "Scopo",
    "מטרה",
    "Objectif"
  ),

  need: tx(
    "Need Being Met",
    "Necesidad Atendida",
    "Need Being Met",
    "Bisogno Risolto",
    "צורך שנענה",
    "Besoin Satisfait"
  ),

  journey: tx(
    "Journey",
    "Recorrido",
    "Journey",
    "Percorso",
    "מסע",
    "Parcours"
  ),

  benefits: tx(
    "Benefits",
    "Beneficios",
    "Benefits",
    "Benefici",
    "יתרונות",
    "Bénéfices"
  ),

  connection: tx(
    "Ecosystem Connection",
    "Conexión del Ecosistema",
    "Ecosystem Connection",
    "Connessione Ecosistema",
    "חיבור למערכת",
    "Connexion Écosystème"
  ),

  decision: tx(
    "Final Decision",
    "Decisión Final",
    "Final Decision",
    "Decisione Finale",
    "החלטה סופית",
    "Décision Finale"
  ),

  start: tx(
    "Start",
    "Inicio",
    "Simula",
    "Inizio",
    "התחלה",
    "Début"
  ),

  back: tx(
    "Back",
    "Atrás",
    "Bumalik",
    "Indietro",
    "חזרה",
    "Retour"
  ),

  next: tx(
    "Next",
    "Siguiente",
    "Susunod",
    "Avanti",
    "הבא",
    "Suivant"
  ),

  guided: tx(
    "Begin Guided Tour",
    "Comenzar Recorrido",
    "Simulan ang Tour",
    "Inizia Tour",
    "התחל סיור",
    "Commencer"
  ),

  pause: tx(
    "Pause Tour",
    "Pausar",
    "I-pause",
    "Pausa",
    "עצור",
    "Pause"
  ),

  feedback: tx(
    "Share Feedback",
    "Compartir Comentarios",
    "Magbigay ng Feedback",
    "Condividi Feedback",
    "שלח משוב",
    "Partager un Avis"
  ),
};

const slides: Slide[] = [
  {
    id: 1,
    nav: "Bronson Family Farm",
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    containImage: true,

    title: tx(
      "Enter the Farm",
      "Entrar a la Granja",
      "Pumasok sa Bukid",
      "Entra nella Fattoria",
      "כניסה לחווה",
      "Entrer dans la Ferme"
    ),

    subtitle: tx(
      "The journey begins at the Historic Lansdowne Airport in Youngstown.",
      "El recorrido comienza en el histórico Aeropuerto Lansdowne.",
      "Nagsisimula ang paglalakbay sa Historic Lansdowne Airport.",
      "Il viaggio inizia allo storico Lansdowne Airport.",
      "המסע מתחיל בשדה התעופה ההיסטורי לנסדאון.",
      "Le parcours commence à l’aéroport historique Lansdowne."
    ),

    purpose: tx(
      "Introduce the connected ecosystem experience.",
      "Introducir la experiencia del ecosistema conectado.",
      "Ipakilala ang connected ecosystem experience.",
      "Introdurre l’esperienza dell’ecosistema connesso.",
      "להציג את חוויית המערכת המחוברת.",
      "Présenter l’expérience de l’écosystème connecté."
    ),

    need: tx(
      "Food, education, workforce, health, and community must be connected locally.",
      "Los alimentos, educación y comunidad deben conectarse localmente.",
      "Ang pagkain, edukasyon, trabaho, at komunidad ay dapat konektado.",
      "Cibo, educazione e comunità devono essere collegati localmente.",
      "מזון, חינוך וקהילה צריכים להיות מחוברים מקומית.",
      "La nourriture, l’éducation et la communauté doivent être reliées localement."
    ),

    journey: [
      tx(
        "Enter the ecosystem",
        "Entrar al ecosistema",
        "Pumasok sa ecosystem",
        "Entrare nell’ecosistema",
        "להיכנס למערכת",
        "Entrer dans l’écosystème"
      ),

      tx(
        "Understand the purpose",
        "Comprender el propósito",
        "Unawain ang layunin",
        "Capire lo scopo",
        "להבין את המטרה",
        "Comprendre l’objectif"
      ),

      tx(
        "Choose your pathway",
        "Elegir su camino",
        "Piliin ang pathway",
        "Scegliere il percorso",
        "לבחור מסלול",
        "Choisir un parcours"
      ),
    ],

    benefits: [
      tx(
        "Clear understanding of the ecosystem",
        "Comprensión clara del ecosistema",
        "Malinaw na pag-unawa sa ecosystem",
        "Chiara comprensione dell’ecosistema",
        "הבנה ברורה של המערכת",
        "Compréhension claire de l’écosystème"
      ),

      tx(
        "Introduction to community opportunity",
        "Introducción a oportunidades comunitarias",
        "Panimula sa community opportunity",
        "Introduzione alle opportunità comunitarie",
        "היכרות עם הזדמנויות קהילתיות",
        "Introduction aux opportunités communautaires"
      ),
    ],

    connection: tx(
      "This pathway introduces every role in the ecosystem.",
      "Este camino presenta cada función del ecosistema.",
      "Ipinapakilala ng pathway na ito ang bawat role.",
      "Questo percorso introduce ogni ruolo dell’ecosistema.",
      "מסלול זה מציג את כל התפקידים במערכת.",
      "Ce parcours présente chaque rôle dans l’écosystème."
    ),

    decision: tx(
      "Begin the tour or select a pathway.",
      "Comience el recorrido o seleccione un camino.",
      "Simulan ang tour o pumili ng pathway.",
      "Inizia il tour o scegli un percorso.",
      "התחל סיור או בחר מסלול.",
      "Commencer la visite ou choisir un parcours."
    ),
  },

  {
    id: 8,
    nav: "Youth Workforce",
    image: "/SAM_0225.JPG",

    title: tx(
      "Youth Workforce Journey",
      "Recorrido Juvenil",
      "Youth Workforce Journey",
      "Percorso Giovani",
      "מסלול נוער",
      "Parcours Jeunesse"
    ),

    subtitle: tx(
      "Young people build responsibility, skill, leadership, and confidence.",
      "Los jóvenes desarrollan responsabilidad y liderazgo.",
      "Nagkakaroon ng responsibility at leadership ang youth.",
      "I giovani sviluppano responsabilità e leadership.",
      "צעירים בונים אחריות ומנהיגות.",
      "Les jeunes développent responsabilité et leadership."
    ),

    purpose: tx(
      "Provide a structured summer workforce and leadership experience.",
      "Brindar una experiencia estructurada de trabajo y liderazgo.",
      "Magbigay ng structured workforce experience.",
      "Fornire un’esperienza strutturata di lavoro e leadership.",
      "לספק חוויית עבודה ומנהיגות מובנית.",
      "Offrir une expérience structurée de travail et leadership."
    ),

    need: tx(
      "Youth need structure, mentorship, outdoor learning, accountability, and future readiness.",
      "Los jóvenes necesitan estructura, mentoría y preparación futura.",
      "Kailangan ng youth ng structure, mentorship, at future readiness.",
      "I giovani hanno bisogno di struttura e preparazione futura.",
      "צעירים צריכים מסגרת, חניכה והכנה לעתיד.",
      "Les jeunes ont besoin de structure et préparation."
    ),

    journey: [
      tx(
        "Parent and youth orientation",
        "Orientación para padres y jóvenes",
        "Orientation ng parent at youth",
        "Orientamento genitori e giovani",
        "הכוונת הורים ונוער",
        "Orientation parents et jeunes"
      ),

      tx(
        "Safety, PPE, and expectations",
        "Seguridad y expectativas",
        "Safety, PPE, at expectations",
        "Sicurezza e aspettative",
        "בטיחות וציפיות",
        "Sécurité et attentes"
      ),

      tx(
        "Farm-based team participation",
        "Participación en equipos agrícolas",
        "Farm-based teamwork",
        "Partecipazione agricola",
        "עבודת צוות חקלאית",
        "Participation agricole"
      ),

      tx(
        "Leadership and life-skill growth",
        "Crecimiento de liderazgo y habilidades",
        "Leadership at life skills",
        "Leadership e crescita personale",
        "פיתוח מנהיגות וכישורי חיים",
        "Leadership et compétences de vie"
      ),
    ],

    benefits: [
      tx(
        "Workforce readiness",
        "Preparación laboral",
        "Workforce readiness",
        "Preparazione lavorativa",
        "מוכנות לעבודה",
        "Préparation professionnelle"
      ),

      tx(
        "Confidence and teamwork",
        "Confianza y trabajo en equipo",
        "Confidence at teamwork",
        "Fiducia e lavoro di squadra",
        "ביטחון ועבודת צוות",
        "Confiance et travail d’équipe"
      ),

      tx(
        "Parent engagement and visibility",
        "Participación de padres",
        "Parent engagement",
        "Coinvolgimento dei genitori",
        "מעורבות הורים",
        "Implication des parents"
      ),
    ],

    connection: tx(
      "Youth become future growers, leaders, customers, and ecosystem participants.",
      "Los jóvenes se convierten en futuros líderes y participantes.",
      "Nagiging future leaders at ecosystem participants ang youth.",
      "I giovani diventano futuri leader e partecipanti.",
      "הנוער הופך למנהיגים ומשתתפים עתידיים.",
      "Les jeunes deviennent futurs leaders et participants."
    ),

    decision: tx(
      "Do I want youth to participate in this summer workforce experience?",
      "¿Quiero que los jóvenes participen en esta experiencia?",
      "Gusto ko bang sumali ang youth sa experience na ito?",
      "Voglio che i giovani partecipino?",
      "האם אני רוצה שנוער ישתתף בחוויה הזו?",
      "Est-ce que je veux que les jeunes participent?"
    ),
  },
];

function SmartImage({
  slide,
}: {
  slide: Slide;
}) {
  const [src, setSrc] = useState(slide.image);

  useEffect(() => {
    setSrc(slide.image);
  }, [slide.image]);

  return (
    <img
      src={src}
      alt={slide.nav}
      onError={() => {
        if (!src.startsWith("/images/")) {
          setSrc(`/images${slide.image}`);
        }
      }}
      className={`hero-image ${
        slide.containImage ? "contain" : "cover"
      }`}
    />
  );
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const [language, setLanguage] =
    useState<LangKey>("English");
  const [guided, setGuided] = useState(false);

  const slide = slides[current];

  const progress = useMemo(
    () => ((current + 1) / slides.length) * 100,
    [current]
  );

  useEffect(() => {
    if (!guided) return;

    if (current === slides.length - 1) {
      setGuided(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setCurrent((p) =>
        Math.min(p + 1, slides.length - 1)
      );
    }, 9500);

    return () => window.clearTimeout(timer);
  }, [guided, current]);

  const feedback = () => {
    window.location.href =
      "mailto:cburgess@bronsonfamilyfarm.com";
  };

  return (
    <main className="app">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          margin: 0;
          height: 100%;
          background: #000;
          color: white;
          font-family: Inter, Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .app {
          height: 100vh;
          overflow: hidden;

          background:
            radial-gradient(circle at 72% 38%, rgba(99,135,43,.16), transparent 34%),
            radial-gradient(circle at 18% 80%, rgba(191,139,72,.1), transparent 28%),
            #000;
        }

        .wrap {
          width: min(1480px, calc(100vw - 44px));
          height: 100vh;

          margin: 0 auto;

          padding: 14px 0 12px;

          display: flex;
          flex-direction: column;
        }

        .header {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: flex-start;
        }

        .eyebrow {
          color: #d8b56d;
          letter-spacing: 6px;
          font-size: 10px;
          font-weight: 900;
          margin-bottom: 6px;
        }

        .main-title {
          margin: 0;

          max-width: 760px;

          font-size: clamp(30px, 3.2vw, 50px);

          line-height: .92;

          font-weight: 300;

          letter-spacing: -2px;
        }

        .language {
          background: rgba(255,255,255,.1);

          color: white;

          border: 1px solid rgba(255,255,255,.25);

          border-radius: 999px;

          padding: 12px 18px;

          font-size: 18px;

          outline: none;
        }

        .language option {
          color: black;
        }

        .progress {
          height: 6px;

          background: rgba(255,255,255,.18);

          border-radius: 999px;

          overflow: hidden;

          margin-top: 14px;
        }

        .progress-fill {
          height: 100%;

          background: linear-gradient(
            90deg,
            #8cc63e,
            #d7b56d
          );

          transition: width .6s ease;
        }

        .nav {
          display: flex;

          flex-wrap: wrap;

          gap: 8px;

          margin-top: 14px;
        }

        .nav-button {
          border: 1px solid rgba(255,255,255,.22);

          background: rgba(255,255,255,.1);

          color: white;

          border-radius: 999px;

          padding: 9px 15px;

          font-size: 14px;

          font-weight: 900;

          cursor: pointer;
        }

        .nav-button.active {
          background: linear-gradient(
            135deg,
            #b77b38,
            #d2a85d
          );
        }

        .nav-button.done {
          background: rgba(70,112,39,.75);
        }

        .stage {
          flex: 1;

          min-height: 0;

          display: grid;

          grid-template-columns: .98fr 1.02fr;

          gap: 28px;

          padding-top: 18px;
        }

        .panel,
        .image-card {
          height: 100%;

          min-height: 0;

          border-radius: 30px;

          border: 1px solid rgba(255,255,255,.12);

          background: rgba(4,4,4,.86);

          overflow: hidden;
        }

        .panel {
          padding: 18px 28px 16px;

          display: flex;

          flex-direction: column;
        }

        .slide-title {
          margin: 0 0 5px;

          font-size: clamp(26px, 2.6vw, 42px);

          line-height: .92;

          font-weight: 300;
        }

        .subtitle {
          margin: 0 0 10px;

          font-size: clamp(14px, 1vw, 17px);

          line-height: 1.12;
        }

        .ecosystem-grid {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 10px;
        }

        .ecosystem-box {
          border: 1px solid rgba(255,255,255,.11);

          background: rgba(255,255,255,.04);

          border-radius: 16px;

          padding: 10px;

          min-height: 104px;
        }

        .section-title {
          color: #d8b56d;

          font-size: 9px;

          letter-spacing: 1.8px;

          font-weight: 900;

          margin-bottom: 6px;

          text-transform: uppercase;
        }

        .section-text {
          font-size: clamp(12px, .85vw, 14px);

          line-height: 1.1;
        }

        .journey-list,
        .benefits-list {
          display: grid;

          gap: 5px;
        }

        .journey-step,
        .benefit-row {
          display: grid;

          grid-template-columns: 18px 1fr;

          gap: 7px;
        }

        .journey-number {
          width: 17px;

          height: 17px;

          border-radius: 50%;

          background: #d8b56d;

          color: #111;

          font-size: 10px;

          font-weight: 900;

          display: flex;

          align-items: center;

          justify-content: center;
        }

        .benefit-dot {
          width: 7px;

          height: 7px;

          margin-top: 5px;

          border-radius: 50%;

          background: #9acd32;
        }

        .journey-text,
        .benefit-text {
          font-size: clamp(12px, .84vw, 14px);

          line-height: 1.06;
        }

        .decision {
          margin-top: 10px;

          border: 1px solid rgba(216,181,109,.45);

          background: rgba(216,181,109,.1);

          border-radius: 16px;

          padding: 10px;
        }

        .decision-text {
          font-size: clamp(13px, .9vw, 15px);

          line-height: 1.1;
        }

        .controls {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;

          margin-top: auto;

          padding-top: 10px;
        }

        .control {
          border: 1px solid rgba(255,255,255,.22);

          border-radius: 999px;

          padding: 8px 13px;

          color: white;

          font-size: 12px;

          font-weight: 900;

          cursor: pointer;

          background: rgba(255,255,255,.1);
        }

        .gold {
          background: linear-gradient(
            135deg,
            #b77b38,
            #d2a85d
          );
        }

        .green {
          background: linear-gradient(
            135deg,
            #3f7f1f,
            #78a933
          );
        }

        .image-card {
          position: relative;
        }

        .hero-image {
          width: 100%;

          height: 100%;

          display: block;

          filter:
            brightness(1.12)
            contrast(1.06)
            saturate(1.06);
        }

        .hero-image.cover {
          object-fit: cover;
        }

        .hero-image.contain {
          object-fit: contain;

          background: #050505;

          padding: 8px;
        }

        .counter {
          position: absolute;

          top: 18px;

          right: 18px;

          z-index: 2;

          background: rgba(0,0,0,.62);

          border: 1px solid rgba(255,255,255,.18);

          border-radius: 999px;

          padding: 8px 14px;

          font-weight: 900;

          font-size: 18px;
        }

        .image-label {
          position: absolute;

          left: 18px;

          bottom: 18px;

          z-index: 2;

          max-width: calc(100% - 36px);

          background: rgba(0,0,0,.68);

          border: 1px solid rgba(255,255,255,.16);

          border-radius: 18px;

          padding: 12px 14px;
        }

        .image-label strong {
          display: block;

          font-size: 17px;
        }

        .image-label span {
          display: block;

          margin-top: 4px;

          font-size: 13px;

          color: rgba(255,255,255,.82);
        }

        @media (max-width: 1100px) {
          html,
          body,
          #root,
          .app {
            height: auto;

            overflow: auto;
          }

          .wrap {
            height: auto;
          }

          .stage {
            grid-template-columns: 1fr;
          }

          .image-card {
            height: 420px;
          }
        }
      `}</style>

      <div className="wrap">

        <header className="header">

          <div>
            <div className="eyebrow">
              {ui.demo[language]}
            </div>

            <h1 className="main-title">
              {ui.mainTitle[language]}
            </h1>
          </div>

          <select
            className="language"
            value={language}
            onChange={(e) =>
              setLanguage(
                e.target.value as LangKey
              )
            }
          >
            {LANGS.map((l) => (
              <option
                key={l}
                value={l}
              >
                {l}
              </option>
            ))}
          </select>

        </header>

        <div className="progress">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <nav className="nav">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`
                nav-button
                ${i === current ? "active" : ""}
                ${i < current ? "done" : ""}
              `}
              onClick={() => {
                setCurrent(i);
                setGuided(false);
              }}
            >
              {s.id}. {s.nav}
            </button>
          ))}
        </nav>

        <section className="stage">

          <article className="panel">

            <div className="eyebrow">
              {ui.demo[language]}
            </div>

            <h2 className="slide-title">
              {slide.title[language]}
            </h2>

            <p className="subtitle">
              {slide.subtitle[language]}
            </p>

            <div className="ecosystem-grid">

              <div className="ecosystem-box">
                <div className="section-title">
                  {ui.purpose[language]}
                </div>

                <div className="section-text">
                  {slide.purpose[language]}
                </div>
              </div>

              <div className="ecosystem-box">
                <div className="section-title">
                  {ui.need[language]}
                </div>

                <div className="section-text">
                  {slide.need[language]}
                </div>
              </div>

              <div className="ecosystem-box">

                <div className="section-title">
                  {ui.journey[language]}
                </div>

                <div className="journey-list">

                  {slide.journey.map(
                    (step, i) => (
                      <div
                        className="journey-step"
                        key={i}
                      >
                        <div className="journey-number">
                          {i + 1}
                        </div>

                        <div className="journey-text">
                          {step[language]}
                        </div>
                      </div>
                    )
                  )}

                </div>
              </div>

              <div className="ecosystem-box">

                <div className="section-title">
                  {ui.benefits[language]}
                </div>

                <div className="benefits-list">

                  {slide.benefits.map(
                    (benefit, i) => (
                      <div
                        className="benefit-row"
                        key={i}
                      >
                        <div className="benefit-dot" />

                        <div className="benefit-text">
                          {benefit[language]}
                        </div>
                      </div>
                    )
                  )}

                </div>
              </div>

            </div>

            <div className="decision">

              <div className="section-title">
                {ui.connection[language]}
              </div>

              <div className="decision-text">
                {slide.connection[language]}
              </div>

            </div>

            <div className="decision">

              <div className="section-title">
                {ui.decision[language]}
              </div>

              <div className="decision-text">
                {slide.decision[language]}
              </div>

            </div>

            <div className="controls">

              <button
                className="control"
                onClick={() => {
                  setCurrent(0);
                  setGuided(false);
                }}
              >
                {ui.start[language]}
              </button>

              <button
                className="control"
                onClick={() =>
                  setCurrent((p) =>
                    Math.max(p - 1, 0)
                  )
                }
              >
                {ui.back[language]}
              </button>

              <button
                className="control gold"
                onClick={() =>
                  setCurrent((p) =>
                    Math.min(
                      p + 1,
                      slides.length - 1
                    )
                  )
                }
              >
                {ui.next[language]}
              </button>

              <button
                className="control green"
                onClick={() =>
                  setGuided((p) => !p)
                }
              >
                {guided
                  ? ui.pause[language]
                  : ui.guided[language]}
              </button>

              <button
                className="control gold"
                onClick={feedback}
              >
                {ui.feedback[language]}
              </button>

            </div>

          </article>

          <aside className="image-card">

            <SmartImage slide={slide} />

            <div className="counter">
              {current + 1} / {slides.length}
            </div>

            <div className="image-label">

              <strong>
                {slide.nav}
              </strong>

              <span>
                {slide.subtitle[language]}
              </span>

            </div>

          </aside>

        </section>

      </div>
    </main>
  );
}
