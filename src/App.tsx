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

  startsAs: Text;
  experiences: Text[];
  growsInto: Text[];
  ecosystem: Text;
  nextStep: Text;
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
    "Esperienza Ecosistema Alimentare Connesso",
    "חוויית מערכת מזון מחוברת",
    "Expérience d’un Écosystème Alimentaire Connecté"
  ),

  startsAs: tx(
    "Starts As",
    "Comienza Como",
    "Starts As",
    "Inizia Come",
    "מתחיל כ",
    "Commence Comme"
  ),

  experiences: tx(
    "Experiences",
    "Experiencias",
    "Experiences",
    "Esperienze",
    "חוויות",
    "Expériences"
  ),

  growsInto: tx(
    "Grows Into",
    "Se Convierte En",
    "Grows Into",
    "Cresce In",
    "צומח ל",
    "Devient"
  ),

  ecosystem: tx(
    "Connects Back To",
    "Conecta de Regreso",
    "Connects Back To",
    "Ricollega A",
    "מתחבר חזרה אל",
    "Reconnecte À"
  ),

  nextStep: tx(
    "Next Step",
    "Próximo Paso",
    "Next Step",
    "Prossimo Passo",
    "השלב הבא",
    "Prochaine Étape"
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
      "The ecosystem begins at the Historic Lansdowne Airport in Youngstown.",
      "El ecosistema comienza en el histórico aeropuerto Lansdowne.",
      "Nagsisimula ang ecosystem sa Historic Lansdowne Airport.",
      "L’ecosistema inizia allo storico aeroporto Lansdowne.",
      "המערכת מתחילה בשדה התעופה ההיסטורי לנסדאון.",
      "L’écosystème commence à l’aéroport historique Lansdowne."
    ),

    startsAs: tx(
      "A visitor entering a connected ecosystem experience.",
      "Un visitante entrando a una experiencia conectada.",
      "Bisitang pumapasok sa connected ecosystem.",
      "Un visitatore entra nell’ecosistema.",
      "מבקר הנכנס למערכת מחוברת.",
      "Un visiteur entrant dans un écosystème connecté."
    ),

    experiences: [
      tx(
        "Explore the ecosystem",
        "Explorar el ecosistema",
        "Tuklasin ang ecosystem",
        "Esplorare l’ecosistema",
        "לחקור את המערכת",
        "Explorer l’écosystème"
      ),

      tx(
        "Understand the mission",
        "Comprender la misión",
        "Unawain ang mission",
        "Comprendere la missione",
        "להבין את המשימה",
        "Comprendre la mission"
      ),

      tx(
        "Choose a pathway",
        "Elegir un camino",
        "Pumili ng pathway",
        "Scegliere un percorso",
        "לבחור מסלול",
        "Choisir un parcours"
      ),
    ],

    growsInto: [
      tx(
        "A connected participant",
        "Un participante conectado",
        "Connected participant",
        "Un partecipante connesso",
        "משתתף מחובר",
        "Un participant connecté"
      ),

      tx(
        "A future supporter or partner",
        "Un futuro socio o apoyo",
        "Future supporter or partner",
        "Un futuro partner",
        "תומך או שותף עתידי",
        "Un futur partenaire"
      ),
    ],

    ecosystem: tx(
      "Every pathway supports the larger ecosystem.",
      "Cada camino apoya el ecosistema.",
      "Sinusuportahan ng bawat pathway ang ecosystem.",
      "Ogni percorso sostiene l’ecosistema.",
      "כל מסלול מחזק את המערכת.",
      "Chaque parcours soutient l’écosystème."
    ),

    nextStep: tx(
      "Begin the guided tour or select a pathway.",
      "Comenzar el recorrido o elegir un camino.",
      "Simulan ang guided tour o pumili ng pathway.",
      "Iniziare il tour o scegliere un percorso.",
      "להתחיל את הסיור או לבחור מסלול.",
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
      "June 8 – August 28, 2026",
      "8 de Junio – 28 de Agosto de 2026",
      "Hunyo 8 – Agosto 28, 2026",
      "8 Giugno – 28 Agosto 2026",
      "8 ביוני – 28 באוגוסט 2026",
      "8 Juin – 28 Août 2026"
    ),

    startsAs: tx(
      "A young person entering a structured summer workforce experience.",
      "Un joven entrando a una experiencia laboral estructurada.",
      "Kabataang papasok sa structured workforce experience.",
      "Un giovane entra in un’esperienza strutturata.",
      "צעיר הנכנס לחוויית עבודה מובנית.",
      "Un jeune entrant dans une expérience structurée."
    ),

    experiences: [
      tx(
        "Parent and youth orientation",
        "Orientación para padres y jóvenes",
        "Parent at youth orientation",
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
        "Farm-based teamwork",
        "Trabajo agrícola en equipo",
        "Farm-based teamwork",
        "Lavoro agricolo di squadra",
        "עבודת צוות חקלאית",
        "Travail agricole en équipe"
      ),

      tx(
        "Proverbs, mentorship, and reflection",
        "Proverbios y mentoría",
        "Proverbs at mentorship",
        "Proverbi e mentorship",
        "פתגמים וחניכה",
        "Proverbes et mentorat"
      ),
    ],

    growsInto: [
      tx(
        "Confidence and leadership",
        "Confianza y liderazgo",
        "Confidence at leadership",
        "Fiducia e leadership",
        "ביטחון ומנהיגות",
        "Confiance et leadership"
      ),

      tx(
        "Workforce readiness",
        "Preparación laboral",
        "Workforce readiness",
        "Preparazione lavorativa",
        "מוכנות לעבודה",
        "Préparation professionnelle"
      ),

      tx(
        "Responsibility and teamwork",
        "Responsabilidad y trabajo en equipo",
        "Responsibility at teamwork",
        "Responsabilità e lavoro di squadra",
        "אחריות ועבודת צוות",
        "Responsabilité et travail d’équipe"
      ),
    ],

    ecosystem: tx(
      "Youth become future growers, marketplace participants, volunteers, entrepreneurs, and community leaders.",
      "Los jóvenes se convierten en futuros líderes y participantes.",
      "Nagiging future leaders at ecosystem participants ang youth.",
      "I giovani diventano futuri leader e partecipanti.",
      "הנוער הופך למנהיגים ומשתתפים עתידיים.",
      "Les jeunes deviennent futurs leaders et participants."
    ),

    nextStep: tx(
      "Enroll, complete orientation, and participate June 8 – August 28, 2026.",
      "Inscribirse y participar del 8 de Junio al 28 de Agosto.",
      "Mag-enroll at sumali sa program.",
      "Iscriversi e partecipare al programma.",
      "להירשם ולהשתתף בתוכנית.",
      "S’inscrire et participer au programme."
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
    }, 9000);

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
            radial-gradient(circle at 74% 36%, rgba(92,128,38,.16), transparent 34%),
            radial-gradient(circle at 15% 80%, rgba(197,139,62,.08), transparent 30%),
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
          margin: 0 0 4px;

          font-size: clamp(28px, 2.8vw, 44px);

          line-height: .92;

          font-weight: 300;
        }

        .subtitle {
          margin: 0 0 10px;

          font-size: clamp(14px, .98vw, 17px);

          line-height: 1.08;
        }

        .journey-grid {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 10px;
        }

        .journey-box {
          border: 1px solid rgba(255,255,255,.1);

          background: rgba(255,255,255,.04);

          border-radius: 16px;

          padding: 10px;
        }

        .section-title {
          color: #d8b56d;

          font-size: 9px;

          letter-spacing: 1.7px;

          font-weight: 900;

          margin-bottom: 6px;

          text-transform: uppercase;
        }

        .section-text,
        .grow-text {
          font-size: clamp(12px, .84vw, 14px);

          line-height: 1.06;
        }

        .experience-list,
        .grow-list {
          display: grid;
          gap: 5px;
        }

        .experience-row,
        .grow-row {
          display: grid;

          grid-template-columns: 18px 1fr;

          gap: 7px;
        }

        .num {
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

        .dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          margin-top: 5px;

          background: #8cc63e;
        }

        .ecosystem-box,
        .next-box {
          margin-top: 10px;

          border-radius: 16px;

          padding: 10px;
        }

        .ecosystem-box {
          border: 1px solid rgba(255,255,255,.1);

          background: rgba(255,255,255,.04);
        }

        .next-box {
          border: 1px solid rgba(216,181,109,.4);

          background: rgba(216,181,109,.08);
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
            contrast(1.05)
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

            <div className="journey-grid">

              <div className="journey-box">

                <div className="section-title">
                  {ui.startsAs[language]}
                </div>

                <div className="section-text">
                  {slide.startsAs[language]}
                </div>

              </div>

              <div className="journey-box">

                <div className="section-title">
                  {ui.experiences[language]}
                </div>

                <div className="experience-list">

                  {slide.experiences.map(
                    (item, i) => (
                      <div
                        className="experience-row"
                        key={i}
                      >
                        <div className="num">
                          {i + 1}
                        </div>

                        <div className="section-text">
                          {item[language]}
                        </div>
                      </div>
                    )
                  )}

                </div>

              </div>

              <div className="journey-box">

                <div className="section-title">
                  {ui.growsInto[language]}
                </div>

                <div className="grow-list">

                  {slide.growsInto.map(
                    (item, i) => (
                      <div
                        className="grow-row"
                        key={i}
                      >
                        <div className="dot" />

                        <div className="grow-text">
                          {item[language]}
                        </div>
                      </div>
                    )
                  )}

                </div>

              </div>

              <div className="journey-box">

                <div className="section-title">
                  {ui.ecosystem[language]}
                </div>

                <div className="section-text">
                  {slide.ecosystem[language]}
                </div>

              </div>

            </div>

            <div className="next-box">

              <div className="section-title">
                {ui.nextStep[language]}
              </div>

              <div className="section-text">
                {slide.nextStep[language]}
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
