import React, { useEffect, useState } from "react";

type Lang = "en" | "es" | "tl" | "it" | "he" | "fr";

const EVENTBRITE =
  "https://www.eventbrite.com/e/bronson-family-farm-growers-supply-market-tickets-1984126092554?aff=oddtdtcreator";

const GROWNBY = "https://grownby.com/farms/bronson-family-farm/shop";
const EMAIL = "cburgess@bronsonfamilyfarm.com";
const PHONE = "330-275-1604";

const languages: Record<Lang, string> = {
  en: "English",
  es: "Español",
  tl: "Tagalog",
  it: "Italiano",
  he: "עברית",
  fr: "Français",
};

const ui: Record<Lang, any> = {
  en: {
    startTour: "Start Guided Tour",
    explore: "Explore Yourself",
    back: "Back",
    next: "Next",
    home: "Start",
    pause: "Pause Tour",
    resume: "Resume Tour",
    choose: "Choose a Pathway",
    feedback: "Share Feedback",
    contact: "Contact Us",
    visitStore: "Visit Marketplace",
    register: "Event Registration",
    call: "Call",
  },
  es: {
    startTour: "Iniciar recorrido guiado",
    explore: "Explorar",
    back: "Atrás",
    next: "Siguiente",
    home: "Inicio",
    pause: "Pausar recorrido",
    resume: "Continuar recorrido",
    choose: "Elija un camino",
    feedback: "Compartir comentarios",
    contact: "Contáctenos",
    visitStore: "Visitar mercado",
    register: "Registro del evento",
    call: "Llamar",
  },
  tl: {
    startTour: "Simulan ang Guided Tour",
    explore: "Mag-explore",
    back: "Bumalik",
    next: "Susunod",
    home: "Simula",
    pause: "I-pause ang Tour",
    resume: "Ipagpatuloy ang Tour",
    choose: "Pumili ng Pathway",
    feedback: "Magbigay ng Feedback",
    contact: "Makipag-ugnayan",
    visitStore: "Bisitahin ang Marketplace",
    register: "Mag-register",
    call: "Tumawag",
  },
  it: {
    startTour: "Avvia tour guidato",
    explore: "Esplora",
    back: "Indietro",
    next: "Avanti",
    home: "Inizio",
    pause: "Pausa tour",
    resume: "Riprendi tour",
    choose: "Scegli un percorso",
    feedback: "Invia feedback",
    contact: "Contattaci",
    visitStore: "Visita il mercato",
    register: "Registrazione evento",
    call: "Chiama",
  },
  he: {
    startTour: "התחל סיור מודרך",
    explore: "חקירה עצמאית",
    back: "חזרה",
    next: "הבא",
    home: "התחלה",
    pause: "השהה סיור",
    resume: "המשך סיור",
    choose: "בחרו מסלול",
    feedback: "שליחת משוב",
    contact: "צור קשר",
    visitStore: "כניסה לשוק",
    register: "הרשמה לאירוע",
    call: "התקשר",
  },
  fr: {
    startTour: "Commencer la visite guidée",
    explore: "Explorer",
    back: "Retour",
    next: "Suivant",
    home: "Début",
    pause: "Pause",
    resume: "Reprendre",
    choose: "Choisissez un parcours",
    feedback: "Partager un avis",
    contact: "Nous contacter",
    visitStore: "Visiter le marché",
    register: "Inscription",
    call: "Appeler",
  },
};

const slides = [
  {
    key: "welcome",
    title: "Welcome to Bronson Family Farm",
    subtitle: "Step into the farm. Experience the wonders of life.",
    image: "/GrowArea.jpg",
    type: "intro",
    body: [
      "Bronson Family Farm is a place-based food ecosystem growing from Youngstown’s Historic Lansdowne Airport.",
      "This demo shows how land, food, growers, youth workforce, marketplace activity, partners, and community education connect into one system.",
      "Each pathway helps a viewer understand where they fit, what need is being met, and what decision they can make next.",
    ],
    decision: "Begin the guided experience or choose your own pathway.",
  },
  {
    key: "place",
    title: "The Place: Historic Lansdowne Airport",
    subtitle: "A farm growing from a unique Youngstown location.",
    image: "/Grow Area.png",
    body: [
      "Bronson Family Farm is not just a garden or a market. It is a growing destination rooted in land, history, and local need.",
      "The farm uses outdoor growing space at the Historic Lansdowne Airport to demonstrate food production, learning, health, and community-centered economic activity.",
      "The airport setting makes the work memorable, visible, and different.",
    ],
    need: "The community needs access to fresh food, practical growing knowledge, and a place where people can see opportunity being built.",
    role: "The farm becomes the place where the story starts.",
    benefit: "Visitors understand that this is a destination, not just a single event.",
    destination: "Continue into the ecosystem and see how each role connects.",
  },
  {
    key: "ecosystem",
    title: "A Connected Food Ecosystem",
    subtitle: "Food, people, knowledge, tools, and opportunity working together.",
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    body: [
      "An ecosystem is a connected system where every part supports the whole.",
      "At Bronson Family Farm, growers, customers, youth, partners, volunteers, value-added producers, and marketplace activity all connect.",
      "The food moves through the system so families, schools, businesses, and community partners do not have to figure everything out alone.",
    ],
    need: "People need fresh, chemical-free food, but growers also need tools, markets, training, support, and coordination.",
    role: "The ecosystem organizes the relationships so food and money can circulate locally.",
    benefit: "The farmer does not have to move everywhere. The food, knowledge, and opportunity move through the ecosystem.",
    destination: "Choose a pathway and decide how you want to participate.",
  },
  {
    key: "guest",
    title: "Guest Pathway",
    subtitle: "Come see, learn, and understand the vision.",
    image: "/SAM_0220.JPG",
    body: [
      "The guest pathway introduces visitors to the farm, the airport, the growing areas, and the purpose behind the work.",
      "Guests experience the farm as a destination for learning, food access, health, and community connection.",
      "This pathway helps people understand the story before they decide how they want to participate.",
    ],
    need: "Many people need to see the vision before they understand why it matters.",
    role: "Guests become witnesses, learners, storytellers, and future supporters.",
    benefit: "A guest can share the story with family, neighbors, funders, schools, businesses, and community partners.",
    destination: "Decide whether to visit, share, volunteer, support, or introduce the farm to someone else.",
  },
  {
    key: "customer",
    title: "Customer Pathway",
    subtitle: "Fresh, local, chemical-free food connected to healthier choices.",
    image: "/SAM_0281.JPG",
    body: [
      "The customer pathway helps people understand how to access fresh food and support local growing.",
      "Customers are not only buying food. They are helping create a local food economy.",
      "Every purchase supports growers, youth workforce, education, and community food access.",
    ],
    need: "Families need better access to fresh, chemical-free food and trusted local sources.",
    role: "Customers create demand that helps the ecosystem become sustainable.",
    benefit: "Food dollars stay connected to local growers, youth, and community benefit.",
    destination: "Decide what to buy, how to order, and how to keep supporting the marketplace.",
    action: "marketplace",
  },
  {
    key: "grower",
    title: "Grower Pathway",
    subtitle: "Do I want to become a grower?",
    image: "/SAM_0274.JPG",
    body: [
      "The grower pathway is for people who want to grow food, improve their growing, or connect their production to a larger system.",
      "Growers may need soil knowledge, seeds, compost, fencing, tools, irrigation, pest guidance, marketing, and a place to sell.",
      "Bronson Family Farm helps growers see that they do not have to grow alone.",
    ],
    need: "Many people want to grow but need supplies, education, confidence, demonstrations, and market connection.",
    role: "Growers produce food and help expand community food access.",
    benefit: "Growers become part of a network that supports learning, production, distribution, and sales.",
    destination: "Decide whether to start growing, improve your growing, join the network, or request support.",
  },
  {
    key: "marketplace",
    title: "Marketplace Pathway",
    subtitle: "Where interest becomes purchasing power.",
    image: "/SAM_0301.JPG",
    body: [
      "The marketplace pathway connects customers to food and growers to opportunity.",
      "This is where produce, seedlings, value-added products, education, and community demand begin to move together.",
      "The marketplace helps the ecosystem become financially sustainable while keeping the mission centered on food access.",
    ],
    need: "Growers need buyers. Customers need access. The community needs food dollars to circulate locally.",
    role: "The marketplace organizes buying, selling, visibility, and repeat participation.",
    benefit: "It gives people a practical next step: shop, sell, support, or share.",
    destination: "Decide whether to purchase, become a vendor, sponsor the market, or help expand access.",
    action: "marketplace",
  },
  {
    key: "youth",
    title: "Youth Workforce Pathway",
    subtitle: "More than a job. Building our future.",
    image: "/SAM_0255.JPG",
    body: [
      "The youth workforce pathway gives young people structured, supervised, outdoor work connected to real community needs.",
      "Youth learn safety, responsibility, communication, teamwork, food systems, and practical work habits.",
      "They are helping build a destination while gaining skills they can carry forward.",
    ],
    need: "Young people need meaningful work experiences that build confidence, responsibility, and future readiness.",
    role: "Youth help grow, prepare, organize, welcome, document, and support farm activity.",
    benefit: "The farm becomes a living classroom and a workforce development site.",
    destination: "Decide whether to participate, supervise, sponsor, refer youth, or support the program.",
  },
  {
    key: "partners",
    title: "Partner Pathway",
    subtitle: "Aligning resources for community benefit.",
    image: "/Partners.png",
    body: [
      "The partner pathway shows how organizations, businesses, schools, funders, and public agencies can connect to shared outcomes.",
      "Partners may provide education, supplies, funding, health services, equipment, volunteers, technical assistance, or visibility.",
      "No single organization has to carry the full system alone.",
    ],
    need: "The community needs coordinated resources, not scattered efforts.",
    role: "Partners strengthen the ecosystem by contributing what they do best.",
    benefit: "Partnership turns individual resources into collective impact.",
    destination: "Decide whether to fund, sponsor, teach, donate, volunteer, refer, or collaborate.",
  },
  {
    key: "jubilee",
    title: "Seed-to-Community Pathway",
    subtitle: "Jubilee Gardens, Inc. made so much possible through seed donation.",
    image: "/Seeds_Jubilee Gardens.png",
    body: [
      "Seeds are the beginning of the food system.",
      "Jubilee Gardens, Inc. provided generous seed donations that helped make farm production, community sharing, Bubble Babies™, and grower education possible.",
      "This pathway shows how one donation can multiply into food, learning, seedlings, and community participation.",
    ],
    need: "Growers and communities need affordable access to seeds and starting materials.",
    role: "Seed donors help launch production and expand access.",
    benefit: "Seeds become seedlings, food, education, and community momentum.",
    destination: "Decide whether to donate seeds, sponsor supplies, support education, or help distribute growing resources.",
  },
  {
    key: "csu",
    title: "Education + Training Pathway",
    subtitle: "Central State University representation and grower education.",
    image: "/CSU_MParker.png",
    body: [
      "Education is part of the ecosystem.",
      "Central State University representation connects farming knowledge, training, and agricultural learning to the work happening at Bronson Family Farm.",
      "This pathway helps growers and participants understand that food production requires knowledge, planning, and continued learning.",
    ],
    need: "New and emerging growers need practical agricultural education.",
    role: "Education partners help translate knowledge into action.",
    benefit: "Participants gain confidence, skill, and access to trusted information.",
    destination: "Decide whether to attend training, request guidance, teach, or connect educational resources.",
  },
  {
    key: "valueadded",
    title: "Value-Added Pathway",
    subtitle: "Turning food knowledge into products, skills, and enterprise.",
    image: "/culniary_edibleflowers.jpeg",
    body: [
      "The value-added pathway helps participants think beyond raw produce.",
      "Food can become education, prepared products, culinary learning, demonstrations, and small enterprise opportunities.",
      "Parker Farms and culinary partners help show how growers can expand value through knowledge and creativity.",
    ],
    need: "Growers and entrepreneurs need ways to increase value and create income from food.",
    role: "Value-added education connects growing to enterprise.",
    benefit: "Participants see how food can support business, culture, nutrition, and creativity.",
    destination: "Decide whether to learn, create, package, sell, teach, or partner.",
  },
  {
    key: "health",
    title: "Health + Nutrition Pathway",
    subtitle: "Food access is health access.",
    image: "/Queens Village.png",
    body: [
      "The health pathway connects fresh food, nutrition education, wellness, and community care.",
      "Food is not separate from health. What people can access, afford, and understand affects their daily lives.",
      "The ecosystem creates space for health education, screenings, family engagement, and culturally meaningful wellness activities.",
    ],
    need: "Families need food that supports health, not just calories.",
    role: "Health and wellness partners help connect food to prevention, education, and quality of life.",
    benefit: "The farm becomes a place where nourishment, learning, and wellness meet.",
    destination: "Decide whether to attend, teach, screen, refer, sponsor, or share health resources.",
  },
  {
    key: "infrastructure",
    title: "Infrastructure Pathway",
    subtitle: "Fencing, compost, water, tools, and supplies make growing possible.",
    image: "/Deer Fencing.png",
    body: [
      "Growing requires infrastructure.",
      "Fencing protects crops. Compost builds soil. Tools, water, storage, and equipment allow growers to work safely and productively.",
      "Home Depot’s fencing support and Elliott’s compost support are examples of how practical resources directly strengthen the farm.",
    ],
    need: "Food production cannot grow without physical infrastructure and reliable supplies.",
    role: "Infrastructure partners help turn land into a productive growing environment.",
    benefit: "Every donated material becomes part of the farm’s ability to grow and serve.",
    destination: "Decide whether to donate materials, sponsor equipment, volunteer, or support site development.",
  },
  {
    key: "media",
    title: "Story + Media Pathway",
    subtitle: "The community needs to see what is being built.",
    image: "/WKBN Interview.png",
    body: [
      "The story pathway helps the farm communicate clearly with the public, partners, funders, growers, and families.",
      "Media, interviews, photography, flyers, QR codes, and digital tools help people understand the vision.",
      "When the story is shared well, more people can find their place in the ecosystem.",
    ],
    need: "People cannot support what they do not understand or see.",
    role: "Storytellers, media partners, and community messengers help carry the vision outward.",
    benefit: "The farm becomes easier to explain, share, fund, and join.",
    destination: "Decide whether to share the story, invite media, create content, or connect new supporters.",
  },
  {
    key: "future",
    title: "Future Destination",
    subtitle: "Growing into an agritourism and community food destination.",
    image: "/SAM_0313.JPG",
    body: [
      "Bronson Family Farm is growing toward a larger destination.",
      "The future includes expanded growing, youth workforce, marketplace activity, education, camping, RC activities, family experiences, sensory spaces, and future attractions such as mini-golf.",
      "The goal is to create a place where food, learning, family, health, and local enterprise come together.",
    ],
    need: "The community needs hopeful places where people can learn, gather, work, eat, and build together.",
    role: "The farm becomes a destination for food, family, education, and opportunity.",
    benefit: "A stronger ecosystem can create jobs, support growers, feed families, and attract investment.",
    destination: "Decide how you want to help build what comes next.",
  },
  {
    key: "feedback",
    title: "Thank You + Feedback",
    subtitle: "Your response helps shape the next version.",
    image: "/GrowArea2.jpg",
    body: [
      "Thank you for walking through the Bronson Family Farm demo.",
      "This experience is designed to help viewers understand the ecosystem, choose a pathway, and see how they may participate.",
      "Please share what was clear, what moved you, what was missing, and how you would like to connect.",
    ],
    need: "The farm needs feedback, relationships, and aligned support.",
    role: "Viewers become contributors by responding, sharing, connecting, or partnering.",
    benefit: "Feedback helps improve the demo, strengthen the message, and prepare the farm for funding and partnership conversations.",
    destination: "Share feedback, contact Bronson Family Farm, visit the marketplace, or return to the beginning.",
    action: "feedback",
  },
];

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);

  const t = ui[lang];
  const slide = slides[index];

  useEffect(() => {
    if (!guided) return;
    if (index >= slides.length - 1) {
      setGuided(false);
      return;
    }

    const timer = setTimeout(() => {
      setIndex((current) => Math.min(current + 1, slides.length - 1));
    }, 9500);

    return () => clearTimeout(timer);
  }, [guided, index]);

  const goTo = (nextIndex: number) => {
    setGuided(false);
    setIndex(Math.max(0, Math.min(nextIndex, slides.length - 1)));
  };

  const startGuided = () => {
    setIndex(0);
    setGuided(true);
  };

  const next = () => goTo(index + 1);
  const back = () => goTo(index - 1);

  return (
    <main className="demo">
      <div className="background">
        <img src={slide.image} alt="" />
      </div>

      <div className="wash" />

      <section className="frame">
        <header className="header">
          <div>
            <p className="kicker">Bronson Family Farm</p>
            <h1>{slide.title}</h1>
            <p className="subtitle">{slide.subtitle}</p>
          </div>

          <div className="headerControls">
            <select value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
              {Object.entries(languages).map(([code, label]) => (
                <option value={code} key={code}>
                  {label}
                </option>
              ))}
            </select>

            <button onClick={startGuided}>{t.startTour}</button>

            <button onClick={() => setGuided((v) => !v)}>
              {guided ? t.pause : t.resume}
            </button>
          </div>
        </header>

        <div className="mainGrid">
          <aside className="pathways">
            <h2>{t.choose}</h2>

            {slides.map((item, i) => (
              <button
                key={item.key}
                className={i === index ? "active" : ""}
                onClick={() => goTo(i)}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                {item.title}
              </button>
            ))}
          </aside>

          <section className="story">
            <div className="storyInner">
              {slide.body.map((line: string, i: number) => (
                <p key={i}>{line}</p>
              ))}

              {slide.need && (
                <div className="journey">
                  <div>
                    <strong>Need Being Met</strong>
                    <p>{slide.need}</p>
                  </div>
                  <div>
                    <strong>Role in the Ecosystem</strong>
                    <p>{slide.role}</p>
                  </div>
                  <div>
                    <strong>Benefit</strong>
                    <p>{slide.benefit}</p>
                  </div>
                  <div>
                    <strong>Final Destination / Decision</strong>
                    <p>{slide.destination}</p>
                  </div>
                </div>
              )}

              {slide.decision && (
                <div className="decision">
                  <strong>Decision:</strong> {slide.decision}
                </div>
              )}

              <div className="actions">
                {slide.action === "marketplace" && (
                  <a href={GROWNBY} target="_blank" rel="noreferrer">
                    {t.visitStore}
                  </a>
                )}

                {slide.action === "feedback" && (
                  <>
                    <a
                      href={`mailto:${EMAIL}?subject=Bronson Family Farm Demo Feedback`}
                    >
                      {t.feedback}
                    </a>
                    <a href={`mailto:${EMAIL}`}>{t.contact}</a>
                    <a href={`tel:${PHONE}`}>
                      {t.call}: {PHONE}
                    </a>
                  </>
                )}

                {slide.key === "welcome" && (
                  <>
                    <button onClick={startGuided}>{t.startTour}</button>
                    <button onClick={() => goTo(2)}>{t.explore}</button>
                  </>
                )}

                {slide.key !== "welcome" && slide.key !== "feedback" && (
                  <>
                    <a
                      href={`mailto:${EMAIL}?subject=Bronson Family Farm Pathway: ${slide.title}`}
                    >
                      {t.contact}
                    </a>
                    <a href={EVENTBRITE} target="_blank" rel="noreferrer">
                      {t.register}
                    </a>
                  </>
                )}
              </div>
            </div>
          </section>
        </div>

        <footer className="footer">
          <button onClick={back} disabled={index === 0}>
            {t.back}
          </button>

          <div className="progress">
            <span>
              {index + 1} / {slides.length}
            </span>
            <div>
              <i style={{ width: `${((index + 1) / slides.length) * 100}%` }} />
            </div>
          </div>

          <button onClick={() => goTo(0)}>{t.home}</button>

          <button onClick={next} disabled={index === slides.length - 1}>
            {t.next}
          </button>
        </footer>
      </section>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          background: #172515;
        }

        .demo {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          color: #fff8e6;
        }

        .background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: saturate(1.08) brightness(0.9);
        }

        .wash {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(circle at 25% 20%, rgba(244, 208, 113, 0.22), transparent 28%),
            linear-gradient(90deg, rgba(19, 37, 20, 0.94), rgba(54, 42, 23, 0.76), rgba(18, 35, 20, 0.92));
        }

        .frame {
          position: relative;
          z-index: 2;
          width: min(1240px, calc(100vw - 28px));
          height: calc(100vh - 28px);
          margin: 14px auto;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 30px;
          background: rgba(20, 40, 22, 0.74);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.42);
          backdrop-filter: blur(9px);
          overflow: hidden;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          padding: 22px 26px 14px;
          flex-shrink: 0;
        }

        .kicker {
          margin: 0 0 5px;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #f1ca70;
          font-weight: 900;
        }

        h1 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 4.1rem);
          line-height: 0.95;
          max-width: 760px;
        }

        .subtitle {
          margin: 10px 0 0;
          font-size: clamp(1rem, 1.6vw, 1.3rem);
          color: #fff1c8;
          max-width: 760px;
        }

        .headerControls {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
          flex-wrap: wrap;
          max-width: 460px;
        }

        select,
        button,
        a {
          border: 0;
          border-radius: 999px;
          padding: 10px 15px;
          font-weight: 800;
          font-size: 0.92rem;
        }

        select {
          background: #fff8e6;
          color: #21371f;
        }

        button,
        a {
          background: #efc86c;
          color: #21371f;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        button:hover,
        a:hover {
          filter: brightness(1.06);
        }

        button:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .mainGrid {
          flex: 1;
          min-height: 0;
          display: grid;
          grid-template-columns: 310px 1fr;
          gap: 16px;
          padding: 0 22px 14px;
        }

        .pathways {
          overflow: auto;
          border-radius: 24px;
          padding: 16px;
          background: rgba(255, 248, 230, 0.13);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .pathways h2 {
          margin: 0 0 12px;
          font-size: 1.25rem;
          color: #ffe39c;
        }

        .pathways button {
          width: 100%;
          margin: 5px 0;
          padding: 10px 11px;
          border-radius: 15px;
          justify-content: flex-start;
          gap: 8px;
          background: rgba(255, 248, 230, 0.92);
          color: #24391f;
          text-align: left;
          font-size: 0.86rem;
        }

        .pathways button span {
          opacity: 0.7;
          font-size: 0.75rem;
        }

        .pathways button.active {
          background: #efc86c;
          outline: 3px solid rgba(255, 255, 255, 0.2);
        }

        .story {
          min-height: 0;
          border-radius: 24px;
          background: rgba(255, 248, 230, 0.13);
          border: 1px solid rgba(255, 255, 255, 0.18);
          overflow: auto;
        }

        .storyInner {
          min-height: 100%;
          padding: clamp(22px, 3.5vw, 44px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .story p {
          font-size: clamp(1rem, 1.45vw, 1.22rem);
          line-height: 1.46;
          margin: 0 0 12px;
          max-width: 920px;
        }

        .journey {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin: 14px 0 16px;
        }

        .journey div,
        .decision {
          background: rgba(20, 36, 18, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-left: 5px solid #efc86c;
          border-radius: 18px;
          padding: 13px 15px;
        }

        .journey strong,
        .decision strong {
          display: block;
          margin-bottom: 5px;
          color: #ffe39c;
          font-size: 0.95rem;
        }

        .journey p {
          margin: 0;
          font-size: 0.98rem;
          line-height: 1.35;
        }

        .decision {
          font-size: 1.02rem;
          margin-bottom: 15px;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 4px;
        }

        .footer {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 22px 20px;
        }

        .progress {
          flex: 1;
          min-width: 160px;
        }

        .progress span {
          display: block;
          text-align: center;
          font-size: 0.88rem;
          color: #fff1c8;
          margin-bottom: 5px;
        }

        .progress div {
          height: 8px;
          background: rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          overflow: hidden;
        }

        .progress i {
          display: block;
          height: 100%;
          background: #efc86c;
          border-radius: 999px;
        }

        @media (max-width: 900px) {
          .frame {
            height: auto;
            min-height: calc(100vh - 20px);
            margin: 10px auto;
          }

          .header {
            flex-direction: column;
          }

          .mainGrid {
            grid-template-columns: 1fr;
          }

          .pathways {
            max-height: 210px;
          }

          .journey {
            grid-template-columns: 1fr;
          }

          .footer {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </main>
  );
}
