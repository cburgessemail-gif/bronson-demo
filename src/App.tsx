import React, { useEffect, useMemo, useState } from "react";

type ScreenKey =
  | "entrance"
  | "ecosystem"
  | "explore"
  | "guest"
  | "customer"
  | "marketplace"
  | "grower"
  | "youth"
  | "partners"
  | "valueadded"
  | "feedback";

const IMG = {
  ecosystem: "/ConnectFoodEcosystem_withimages.jpeg",
  entrance: "/GrowArea.jpg",
  explore: "/SAM_0220.JPG",
  guest: "/SAM_0221.JPG",
  customer: "/SAM_0222.JPG",
  marketplace: "/SAM_0223.JPG",
  grower: "/SAM_0225.JPG",
  youth: "/SAM_0226.JPG",
  partners: "/SAM_0229.JPG",
  valueadded: "/SAM_0223.JPG",
};

const screens: Record<
  ScreenKey,
  {
    nav: string;
    title: string;
    subtitle: string;
    image?: string;
    body: string[];
    next?: ScreenKey;
    accent?: string;
  }
> = {
  entrance: {
    nav: "Bronson Family Farm",
    title: "Bronson Family Farm",
    subtitle:
      "A place-based food ecosystem growing from Youngstown’s historic Lansdowne Airport.",
    image: IMG.entrance,
    accent: "#6f7d4d",
    body: [
      "This demo introduces Bronson Family Farm as more than a farm. It is a connected ecosystem where land, people, food, education, workforce, and marketplace activity work together.",
      "The farm is located at a private, functioning airfield. That makes this place unique: agriculture, history, aviation, open land, and community opportunity all meet here.",
      "The goal is to help food, knowledge, and money circulate locally so growers, families, youth, businesses, and partners can all participate in a healthier regional food system.",
    ],
    next: "ecosystem",
  },

  ecosystem: {
    nav: "A Connected Ecosystem",
    title: "Growing Opportunity Together",
    subtitle:
      "Each pathway has a role. Together, they create movement, opportunity, and circulation.",
    image: IMG.ecosystem,
    accent: "#7a5c36",
    body: [
      "An ecosystem means the parts do not stand alone. Guests learn the story. Customers access fresh food. Growers connect to tools and markets. Youth build skills. Partners bring resources. Value-added producers expand what food can become.",
      "The benefit is that the food moves through a coordinated system. Growers do not have to travel everywhere alone. Bronson Family Farm and Farm & Family Alliance help organize the connections.",
    ],
    next: "explore",
  },

  explore: {
    nav: "Explore the Farm",
    title: "Explore the Farm",
    subtitle:
      "The airport, the land, the growing space, and the future agritourism destination.",
    image: IMG.explore,
    accent: "#6b705c",
    body: [
      "Bronson Family Farm grows from a place with history. The Lansdowne Airport setting creates a rare opportunity to build food access, outdoor learning, agritourism, and community gathering in one location.",
      "The outdoor growing areas demonstrate how unused or underused land can become productive. The farm is designed to teach, feed, employ, and inspire.",
      "Future development may include agritourism experiences such as camping, a children’s zone, RC activities, mini-golf, farm education, and family-friendly events.",
    ],
    next: "guest",
  },

  guest: {
    nav: "Guest",
    title: "Guest Pathway",
    subtitle:
      "For visitors who need to understand the vision, story, and purpose.",
    image: IMG.guest,
    accent: "#8a6f48",
    body: [
      "The guest pathway introduces people to the farm’s story: why it exists, where it is located, and how it connects food access to community growth.",
      "Guests experience the farm as a place of learning, not just a place to visit. They see the land, the history, the partnerships, and the possibilities.",
      "The goal is for every guest to leave understanding that food insecurity can be addressed through land, education, distribution, and community participation.",
    ],
    next: "customer",
  },

  customer: {
    nav: "Customer",
    title: "Customer Pathway",
    subtitle:
      "For families and residents seeking fresh, chemical-free food and repeat access.",
    image: IMG.customer,
    accent: "#7f4f24",
    body: [
      "The customer pathway helps people understand how to access fresh, locally grown, chemical-free food through the Bronson Family Farm marketplace experience.",
      "Customers are not just buying food. They are helping circulate dollars locally, support growers, and strengthen a healthier food system.",
      "The pathway encourages repeat healthy choices by connecting customers to produce, seedlings, education, recipes, nutrition, and seasonal availability.",
    ],
    next: "marketplace",
  },

  marketplace: {
    nav: "Marketplace",
    title: "Marketplace Pathway",
    subtitle:
      "Where food, growers, customers, and local dollars connect.",
    image: IMG.marketplace,
    accent: "#9a6735",
    body: [
      "The marketplace pathway explains how food moves through the ecosystem. The farmer does not have to carry the whole system alone. The food moves through coordinated distribution.",
      "The marketplace can connect growers to families, schools, businesses, events, and community partners.",
      "This is how local food becomes local economic activity: produce, seedlings, value-added products, education, and community demand begin to support one another.",
    ],
    next: "grower",
  },

  grower: {
    nav: "Grower",
    title: "Grower Pathway",
    subtitle:
      "For farmers, gardeners, and community growers who need tools, knowledge, and markets.",
    image: IMG.grower,
    accent: "#5f6f52",
    body: [
      "The grower pathway provides education, demonstrations, tools, seedlings, soil knowledge, companion planting guidance, and access to market opportunities.",
      "Growers need more than inspiration. They need practical support: supplies, timing, pest knowledge, irrigation planning, crop selection, food safety basics, and trusted relationships.",
      "Bronson Family Farm functions as a growers supply market by bringing together people, knowledge, and tools so the community can grow successfully.",
    ],
    next: "youth",
  },

  youth: {
    nav: "Youth Workforce",
    title: "Youth Workforce Pathway",
    subtitle:
      "Building responsibility, skill, confidence, and future readiness.",
    image: IMG.youth,
    accent: "#8b5e34",
    body: [
      "The youth workforce pathway turns the farm into an outdoor learning and work-readiness environment.",
      "Young people learn responsibility, teamwork, safety, growing skills, customer service, operations, media, and entrepreneurship.",
      "The farm gives youth a real place to practice life skills while contributing to food access and community wellness.",
    ],
    next: "partners",
  },

  partners: {
    nav: "Partner",
    title: "Partner Pathway",
    subtitle:
      "Aligning resources, expertise, and collaboration for community benefit.",
    image: IMG.partners,
    accent: "#6d597a",
    body: [
      "The partner pathway shows how organizations, businesses, educators, funders, and public partners can support the ecosystem.",
      "Partners may contribute tools, demonstrations, education, volunteers, funding, workforce support, health resources, marketing, or technical expertise.",
      "The purpose is alignment: each partner strengthens the whole system rather than working in isolation.",
    ],
    next: "valueadded",
  },

  valueadded: {
    nav: "Value-Added",
    title: "Value-Added Pathway",
    subtitle:
      "Helping food become products, enterprise, education, and sustainability.",
    image: IMG.valueadded,
    accent: "#99582a",
    body: [
      "The value-added pathway expands what local food can become: prepared foods, preserved foods, farm products, culinary education, small business opportunities, and seasonal income.",
      "This pathway supports entrepreneurship and helps reduce waste by turning harvests into useful products.",
      "It also connects agriculture to culinary arts, family traditions, nutrition, and community enterprise.",
    ],
    next: "feedback",
  },

  feedback: {
    nav: "Thank You",
    title: "Thank You",
    subtitle:
      "Your feedback helps us improve the Bronson Family Farm ecosystem demo.",
    accent: "#5c6b35",
    body: [
      "Thank you for walking through this demo experience.",
      "Bronson Family Farm is building a place-based food ecosystem for growers, families, youth, customers, partners, and the broader community.",
      "To share feedback, ask questions, or explore partnership opportunities, contact Constance Burgess at 330-275-1604 or cburgess@bronsonfamilyfarm.com.",
    ],
  },
};

const order: ScreenKey[] = [
  "entrance",
  "ecosystem",
  "explore",
  "guest",
  "customer",
  "marketplace",
  "grower",
  "youth",
  "partners",
  "valueadded",
  "feedback",
];

export default function App() {
  const [current, setCurrent] = useState<ScreenKey>("entrance");
  const [guided, setGuided] = useState(false);
  const [language, setLanguage] = useState("English");

  const screen = screens[current];
  const index = order.indexOf(current);

  useEffect(() => {
    if (!guided) return;

    if (current === "feedback") {
      setGuided(false);
      return;
    }

    const timer = window.setTimeout(() => {
      if (screen.next) setCurrent(screen.next);
    }, 9000);

    return () => window.clearTimeout(timer);
  }, [guided, current, screen.next]);

  const progress = useMemo(() => ((index + 1) / order.length) * 100, [index]);

  const goStart = () => {
    setGuided(false);
    setCurrent("entrance");
  };

  const goBack = () => {
    setGuided(false);
    if (index > 0) setCurrent(order[index - 1]);
  };

  const goNext = () => {
    setGuided(false);
    if (screen.next) setCurrent(screen.next);
  };

  return (
    <main style={styles.page}>
      <section style={styles.shell}>
        <header style={styles.header}>
          <div>
            <p style={styles.kicker}>Bronson Family Farm Demo</p>
            <h1 style={styles.mainTitle}>
              Connected Food Ecosystem Experience
            </h1>
          </div>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={styles.select}
          >
            <option>English</option>
            <option>Spanish</option>
            <option>Tagalog</option>
            <option>Italian</option>
            <option>Hebrew</option>
            <option>French</option>
          </select>
        </header>

        <div style={styles.progressOuter}>
          <div style={{ ...styles.progressInner, width: `${progress}%` }} />
        </div>

        <nav style={styles.pathwayNav}>
          {order.map((key, i) => (
            <button
              key={key}
              onClick={() => {
                setGuided(false);
                setCurrent(key);
              }}
              style={{
                ...styles.pathButton,
                background: current === key ? screen.accent || "#6f7d4d" : "#fff",
                color: current === key ? "#fff" : "#3f3f2f",
              }}
            >
              {i + 1}. {screens[key].nav}
            </button>
          ))}
        </nav>

        <section style={styles.card}>
          <div style={styles.imageWrap}>
            {screen.image ? (
              <img
                src={screen.image}
                alt={screen.title}
                style={styles.image}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <div style={styles.noImage}>Bronson Family Farm</div>
            )}
          </div>

          <div style={styles.content}>
            <p style={{ ...styles.sectionLabel, color: screen.accent }}>
              {language}
            </p>

            <h2 style={styles.title}>{screen.title}</h2>
            <h3 style={styles.subtitle}>{screen.subtitle}</h3>

            <div style={styles.body}>
              {screen.body.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>

            <div style={styles.controls}>
              <button style={styles.secondary} onClick={goStart}>
                Start
              </button>

              <button
                style={styles.secondary}
                onClick={goBack}
                disabled={index === 0}
              >
                Back
              </button>

              {current !== "feedback" && (
                <button
                  style={{
                    ...styles.primary,
                    background: screen.accent || "#6f7d4d",
                  }}
                  onClick={goNext}
                >
                  Next
                </button>
              )}

              <button
                style={{
                  ...styles.primary,
                  background: guided ? "#9a3412" : "#3f6212",
                }}
                onClick={() => setGuided((v) => !v)}
              >
                {guided ? "Pause Guided Tour" : "Begin Guided Tour"}
              </button>
            </div>
          </div>
        </section>

        <footer style={styles.footer}>
          <span>Bronson Family Farm</span>
          <span>Farm & Family Alliance</span>
          <span>Developed by Bronson Family Farm</span>
        </footer>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #f6f0df 0%, #efe3c8 45%, #d9c7a1 100%)",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    color: "#2f2a1d",
    padding: "24px",
    boxSizing: "border-box",
  },
  shell: {
    maxWidth: "1180px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    alignItems: "center",
    marginBottom: "14px",
  },
  kicker: {
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontSize: "12px",
    fontWeight: 800,
    color: "#6b5f43",
  },
  mainTitle: {
    margin: "4px 0 0",
    fontSize: "clamp(26px, 4vw, 44px)",
    lineHeight: 1.05,
  },
  select: {
    padding: "10px 14px",
    borderRadius: "999px",
    border: "1px solid #c8b78f",
    background: "#fffaf0",
    fontWeight: 700,
  },
  progressOuter: {
    height: "10px",
    background: "#fff8e8",
    borderRadius: "999px",
    overflow: "hidden",
    marginBottom: "16px",
    border: "1px solid #d8c69d",
  },
  progressInner: {
    height: "100%",
    background: "#6f7d4d",
    transition: "width 600ms ease",
  },
  pathwayNav: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "18px",
  },
  pathButton: {
    border: "1px solid #d6c49d",
    borderRadius: "999px",
    padding: "8px 12px",
    cursor: "pointer",
    fontWeight: 800,
    fontSize: "13px",
    boxShadow: "0 2px 8px rgba(60, 45, 20, 0.08)",
  },
  card: {
    display: "grid",
    gridTemplateColumns: "minmax(280px, 48%) 1fr",
    gap: "24px",
    background: "rgba(255, 250, 240, 0.95)",
    border: "1px solid #d6c49d",
    borderRadius: "28px",
    boxShadow: "0 20px 60px rgba(70, 52, 24, 0.18)",
    padding: "22px",
    alignItems: "stretch",
  },
  imageWrap: {
    minHeight: "430px",
    borderRadius: "24px",
    overflow: "hidden",
    background: "#d8c69d",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  noImage: {
    fontSize: "28px",
    fontWeight: 900,
    color: "#fff",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "10px 6px",
  },
  sectionLabel: {
    margin: 0,
    fontSize: "13px",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
  },
  title: {
    margin: "8px 0 4px",
    fontSize: "clamp(30px, 5vw, 56px)",
    lineHeight: 1,
  },
  subtitle: {
    margin: "0 0 18px",
    fontSize: "clamp(18px, 2vw, 25px)",
    lineHeight: 1.25,
    color: "#5d5139",
  },
  body: {
    fontSize: "18px",
    lineHeight: 1.58,
    color: "#352f21",
  },
  controls: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "18px",
  },
  primary: {
    border: "none",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: 900,
    boxShadow: "0 8px 18px rgba(60, 45, 20, 0.18)",
  },
  secondary: {
    border: "1px solid #c8b78f",
    color: "#3f3f2f",
    background: "#fff",
    padding: "12px 18px",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: 900,
  },
  footer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
    marginTop: "16px",
    fontSize: "13px",
    fontWeight: 800,
    color: "#5d5139",
    paddingBottom: "20px",
  },
};
