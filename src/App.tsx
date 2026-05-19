import React, { useEffect, useMemo, useState } from "react";

const baseSlides = [
  {
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    contain: true,
    kicker: "BRONSON FAMILY FARM DEMO",
    title: "Enter the Farm",
    text: [
      "Bronson Family Farm begins with land, legacy, food, and community.",
      "This place-based ecosystem grows from the Historic Lansdowne Airport in Youngstown.",
      "The goal is to circulate food, knowledge, opportunity, and resources locally.",
    ],
  },
  {
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    contain: true,
    kicker: "CONNECTED FOOD ECOSYSTEM",
    title: "Growing Opportunity Together",
    text: [
      "An ecosystem means the parts do not stand alone.",
      "Guests learn. Customers access fresh food. Growers connect to tools and markets.",
      "Youth build skills. Partners bring resources. Food moves through a coordinated system.",
    ],
  },
  {
    image: "/GrowArea.jpg",
    kicker: "PLACE · LAND · AIRPORT HISTORY",
    title: "Explore the Farm",
    text: [
      "This pathway introduces the airport setting, outdoor growing areas, and future agritourism vision.",
      "Visitors experience the land, the story, and the purpose of the farm.",
    ],
  },
  {
    image: "/SAM_0220.JPG",
    kicker: "GUEST PATHWAY",
    title: "Learn. Engage. Be Inspired.",
    text: [
      "Guests enter the story first.",
      "They learn why the farm exists and how local food strengthens families and neighborhoods.",
    ],
  },
  {
    image: "/SAM_0221.JPG",
    kicker: "CUSTOMER PATHWAY",
    title: "Fresh Food. Better Choices.",
    text: [
      "Customers connect to fresh, chemical-free food and nutrition education.",
      "Every purchase helps strengthen growers and keep food dollars circulating locally.",
    ],
  },
  {
    image: "/SAM_0222.JPG",
    kicker: "COMMUNITY MARKETPLACE",
    title: "Food Moves Through the System",
    text: [
      "The marketplace connects growers, families, schools, businesses, and community buyers.",
      "Growers do not have to travel everywhere alone. The ecosystem helps organize distribution.",
    ],
  },
  {
    image: "/SAM_0223.JPG",
    kicker: "GROWER SUPPORT SYSTEM",
    title: "Tools. Knowledge. Markets.",
    text: [
      "Growers need tools, supplies, education, visibility, and market access.",
      "This pathway supports gardeners, urban growers, and small farms.",
    ],
  },
  {
    image: "/SAM_0225.JPG",
    kicker: "YOUTH WORKFORCE",
    title: "Build Skills. Build Futures.",
    text: [
      "Youth gain real-world work experience in an outdoor farm environment.",
      "The farm becomes a classroom for responsibility, teamwork, safety, and leadership.",
    ],
  },
  {
    image: "/SAM_0226.JPG",
    kicker: "COMMUNITY PARTNERSHIPS",
    title: "Resources Aligned for Impact",
    text: [
      "Partners bring education, funding, tools, health resources, workforce support, and expertise.",
      "Partnership turns individual effort into coordinated community impact.",
    ],
  },
  {
    image: "/SAM_0229.JPG",
    kicker: "VALUE-ADDED PATHWAY",
    title: "Expanding What Food Can Become",
    text: [
      "Food can become meals, products, education, enterprise, and cultural connection.",
      "This pathway expands opportunity beyond the field.",
    ],
  },
  {
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    contain: true,
    kicker: "THANK YOU",
    title: "Help Us Strengthen the Ecosystem",
    text: [
      "Thank you for experiencing the Bronson Family Farm ecosystem demo.",
      "Your feedback helps shape the next stage.",
      "Constance Burgess · 330-275-1604 · cburgess@bronsonfamilyfarm.com",
    ],
  },
];

const languages: any = {
  English: {
    title: "Connected Food Ecosystem Experience",
    nav: [
      "1. Bronson Family Farm",
      "2. Connected Ecosystem",
      "3. Explore the Farm",
      "4. Guest",
      "5. Customer",
      "6. Marketplace",
      "7. Grower",
      "8. Youth Workforce",
      "9. Partner",
      "10. Value-Added",
      "11. Thank You",
    ],
    buttons: {
      start: "Start",
      back: "Back",
      next: "Next",
      begin: "Begin Guided Tour",
      pause: "Pause Tour",
    },
    slides: baseSlides,
  },

  Spanish: {
    title: "Experiencia de Ecosistema Alimentario Conectado",
    nav: [
      "1. Granja Bronson",
      "2. Ecosistema Conectado",
      "3. Explorar la Granja",
      "4. Invitado",
      "5. Cliente",
      "6. Mercado",
      "7. Productor",
      "8. Jóvenes",
      "9. Socio",
      "10. Valor Agregado",
      "11. Gracias",
    ],
    buttons: {
      start: "Inicio",
      back: "Atrás",
      next: "Siguiente",
      begin: "Iniciar Recorrido",
      pause: "Pausar Recorrido",
    },
    slides: baseSlides.map((s, i) => ({
      ...s,
      ...(i === 0 && {
        title: "Entrar a la Granja",
        text: [
          "Bronson Family Farm comienza con tierra, legado, alimentos y comunidad.",
          "Este ecosistema crece desde el histórico Aeropuerto Lansdowne en Youngstown.",
          "La meta es circular alimentos, conocimiento, oportunidades y recursos localmente.",
        ],
      }),
      ...(i === 1 && {
        title: "Creciendo Oportunidades Juntos",
        kicker: "ECOSISTEMA ALIMENTARIO CONECTADO",
        text: [
          "Un ecosistema significa que las partes no están solas.",
          "Los invitados aprenden. Los clientes acceden a alimentos frescos. Los productores se conectan a herramientas y mercados.",
          "Los jóvenes desarrollan habilidades. Los socios aportan recursos.",
        ],
      }),
    })),
  },

  Tagalog: {
    title: "Karanasan sa Konektadong Food Ecosystem",
    nav: [
      "1. Bronson Family Farm",
      "2. Konektadong Ecosystem",
      "3. Tuklasin ang Farm",
      "4. Panauhin",
      "5. Customer",
      "6. Marketplace",
      "7. Grower",
      "8. Kabataan",
      "9. Partner",
      "10. Value-Added",
      "11. Salamat",
    ],
    buttons: {
      start: "Simula",
      back: "Balik",
      next: "Susunod",
      begin: "Simulan ang Tour",
      pause: "I-pause ang Tour",
    },
    slides: baseSlides.map((s, i) => ({
      ...s,
      ...(i === 0 && {
        title: "Pumasok sa Farm",
        text: [
          "Nagsisimula ang Bronson Family Farm sa lupa, pamana, pagkain, at komunidad.",
          "Ang ecosystem na ito ay lumalago mula sa Historic Lansdowne Airport sa Youngstown.",
          "Layunin nitong paikotin ang pagkain, kaalaman, oportunidad, at resources sa komunidad.",
        ],
      }),
    })),
  },

  Italian: {
    title: "Esperienza di Ecosistema Alimentare Connesso",
    nav: [
      "1. Bronson Family Farm",
      "2. Ecosistema Connesso",
      "3. Esplora la Fattoria",
      "4. Ospite",
      "5. Cliente",
      "6. Mercato",
      "7. Coltivatore",
      "8. Giovani",
      "9. Partner",
      "10. Valore Aggiunto",
      "11. Grazie",
    ],
    buttons: {
      start: "Inizio",
      back: "Indietro",
      next: "Avanti",
      begin: "Inizia Tour Guidato",
      pause: "Pausa Tour",
    },
    slides: baseSlides.map((s, i) => ({
      ...s,
      ...(i === 0 && {
        title: "Entra nella Fattoria",
        text: [
          "Bronson Family Farm nasce da terra, eredità, cibo e comunità.",
          "Questo ecosistema cresce dallo storico Lansdowne Airport di Youngstown.",
          "L’obiettivo è far circolare cibo, conoscenza, opportunità e risorse localmente.",
        ],
      }),
    })),
  },

  Hebrew: {
    title: "חוויה של מערכת מזון מחוברת",
    nav: [
      "1. חוות ברונסון",
      "2. מערכת מחוברת",
      "3. לחקור את החווה",
      "4. אורח",
      "5. לקוח",
      "6. שוק",
      "7. מגדל",
      "8. נוער",
      "9. שותף",
      "10. ערך מוסף",
      "11. תודה",
    ],
    buttons: {
      start: "התחלה",
      back: "חזרה",
      next: "הבא",
      begin: "התחל סיור",
      pause: "השהה סיור",
    },
    slides: baseSlides.map((s, i) => ({
      ...s,
      ...(i === 0 && {
        title: "להיכנס לחווה",
        text: [
          "Bronson Family Farm מתחילה באדמה, מורשת, מזון וקהילה.",
          "המערכת הזו צומחת מאזור Historic Lansdowne Airport ביונגסטאון.",
          "המטרה היא לחבר מזון, ידע, הזדמנות ומשאבים בקהילה.",
        ],
      }),
    })),
  },

  French: {
    title: "Expérience d’un Écosystème Alimentaire Connecté",
    nav: [
      "1. Ferme Bronson",
      "2. Écosystème Connecté",
      "3. Explorer la Ferme",
      "4. Invité",
      "5. Client",
      "6. Marché",
      "7. Producteur",
      "8. Jeunesse",
      "9. Partenaire",
      "10. Valeur Ajoutée",
      "11. Merci",
    ],
    buttons: {
      start: "Début",
      back: "Retour",
      next: "Suivant",
      begin: "Commencer la Visite",
      pause: "Pause",
    },
    slides: baseSlides.map((s, i) => ({
      ...s,
      ...(i === 0 && {
        title: "Entrer dans la Ferme",
        text: [
          "Bronson Family Farm commence avec la terre, l’héritage, la nourriture et la communauté.",
          "Cet écosystème grandit depuis l’historique Lansdowne Airport à Youngstown.",
          "Le but est de faire circuler nourriture, savoir, opportunités et ressources localement.",
        ],
      }),
    })),
  },
};

export default function App() {
  const [language, setLanguage] = useState("English");
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);

  const data = languages[language];
  const slide = data.slides[index];

  const progress = useMemo(
    () => ((index + 1) / data.slides.length) * 100,
    [index, data.slides.length]
  );

  useEffect(() => {
    document.title = "Bronson Family Farm";
  }, []);

  useEffect(() => {
    if (!guided) return;

    const timer = setTimeout(() => {
      setIndex((prev) => {
        if (prev >= data.slides.length - 1) {
          setGuided(false);
          return prev;
        }
        return prev + 1;
      });
    }, 9500);

    return () => clearTimeout(timer);
  }, [guided, index, data.slides.length]);

  return (
    <main style={styles.main}>
      <div
        style={{
          ...styles.bg,
          backgroundImage: `url(${slide.image})`,
          backgroundSize: slide.contain ? "48%" : "cover",
          backgroundPosition: slide.contain ? "right 58%" : "center",
        }}
      />

      <div style={styles.overlay} />

      <section style={styles.screen}>
        <header style={styles.header}>
          <div>
            <p style={styles.kicker}>BRONSON FAMILY FARM DEMO</p>
            <h1 style={styles.h1}>{data.title}</h1>
          </div>

          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setGuided(false);
              setIndex(0);
            }}
            style={styles.select}
          >
            {Object.keys(languages).map((lang) => (
              <option key={lang}>{lang}</option>
            ))}
          </select>
        </header>

        <div style={styles.progress}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }} />
        </div>

        <nav style={styles.nav}>
          {data.nav.map((label: string, i: number) => (
            <button
              key={label}
              onClick={() => {
                setGuided(false);
                setIndex(i);
              }}
              style={{
                ...styles.navButton,
                ...(i === index ? styles.activeButton : {}),
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        <article style={styles.panel}>
          <p style={styles.kicker}>{slide.kicker}</p>

          <h2 style={styles.h2}>{slide.title}</h2>

          <div style={styles.textBlock}>
            {slide.text.map((line: string) => (
              <p key={line} style={styles.p}>
                {line}
              </p>
            ))}
          </div>

          <div style={styles.controls}>
            <button style={styles.controlButton} onClick={() => setIndex(0)}>
              {data.buttons.start}
            </button>

            <button
              style={styles.controlButton}
              onClick={() => setIndex((p) => Math.max(0, p - 1))}
            >
              {data.buttons.back}
            </button>

            <button
              style={{ ...styles.controlButton, ...styles.nextButton }}
              onClick={() =>
                setIndex((p) => Math.min(data.slides.length - 1, p + 1))
              }
            >
              {data.buttons.next}
            </button>

            <button
              style={{ ...styles.controlButton, ...styles.guidedButton }}
              onClick={() => setGuided((p) => !p)}
            >
              {guided ? data.buttons.pause : data.buttons.begin}
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}

const styles: any = {
  main: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    background: "#10140f",
    color: "#fff",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  bg: {
    position: "absolute",
    inset: 0,
    backgroundRepeat: "no-repeat",
    backgroundColor: "#10140f",
    opacity: 0.42,
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to right, rgba(0,0,0,.96), rgba(0,0,0,.78), rgba(0,0,0,.30)), linear-gradient(to top, rgba(0,0,0,.95), transparent 48%)",
  },
  screen: {
    position: "relative",
    zIndex: 2,
    height: "100vh",
    padding: "20px 40px",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    gap: 24,
    flexShrink: 0,
  },
  kicker: {
    letterSpacing: ".32em",
    color: "#e8d7a2",
    fontWeight: 800,
    fontSize: 12,
    margin: "0 0 8px",
  },
  h1: {
    fontSize: "clamp(32px, 4.1vw, 56px)",
    lineHeight: 0.95,
    fontWeight: 400,
    margin: 0,
    maxWidth: 920,
  },
  select: {
    height: 46,
    borderRadius: 999,
    padding: "0 22px",
    background: "rgba(255,255,255,.18)",
    color: "white",
    fontWeight: 800,
    fontSize: 16,
    border: "1px solid rgba(255,255,255,.35)",
  },
  progress: {
    height: 8,
    background: "rgba(255,255,255,.28)",
    borderRadius: 99,
    margin: "16px 0 16px",
    flexShrink: 0,
  },
  progressFill: {
    height: "100%",
    background: "#8cc63f",
    borderRadius: 99,
  },
  nav: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 22,
    flexShrink: 0,
  },
  navButton: {
    borderRadius: 999,
    padding: "9px 15px",
    color: "white",
    fontWeight: 800,
    fontSize: 14,
    border: "1px solid rgba(255,255,255,.3)",
    background: "rgba(255,255,255,.15)",
    cursor: "pointer",
  },
  activeButton: {
    background: "#9a6a38",
    borderColor: "#e4c98b",
  },
  panel: {
    width: "min(760px, 52vw)",
    maxHeight: "calc(100vh - 245px)",
    overflow: "hidden",
    borderRadius: 28,
    padding: "30px 36px",
    background: "rgba(0,0,0,.72)",
    border: "1px solid rgba(255,255,255,.18)",
    boxShadow: "0 22px 55px rgba(0,0,0,.45)",
  },
  h2: {
    fontSize: "clamp(40px, 4.8vw, 64px)",
    lineHeight: 0.94,
    fontWeight: 400,
    margin: "0 0 18px",
  },
  textBlock: {
    maxHeight: "160px",
    overflow: "hidden",
  },
  p: {
    fontSize: "clamp(15px, 1.2vw, 18px)",
    lineHeight: 1.32,
    margin: "0 0 9px",
  },
  controls: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 22,
  },
  controlButton: {
    borderRadius: 999,
    padding: "10px 16px",
    color: "white",
    fontWeight: 800,
    fontSize: 14,
    border: "1px solid rgba(255,255,255,.3)",
    background: "rgba(255,255,255,.15)",
    cursor: "pointer",
  },
  nextButton: {
    background: "#9a6a38",
    borderColor: "#e4c98b",
  },
  guidedButton: {
    background: "#3f7f22",
    borderColor: "#9fc56a",
  },
};
