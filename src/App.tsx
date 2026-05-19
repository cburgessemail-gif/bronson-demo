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

const navLabels = [
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
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);
  const [language, setLanguage] = useState("English");

  const slide = baseSlides[index];

  const progress = useMemo(() => {
    return ((index + 1) / baseSlides.length) * 100;
  }, [index]);

  useEffect(() => {
    document.title = "Bronson Family Farm";
  }, []);

  useEffect(() => {
    if (!guided) return;

    const timer = setTimeout(() => {
      setIndex((prev) => {
        if (prev >= baseSlides.length - 1) {
          setGuided(false);
          return prev;
        }

        return prev + 1;
      });
    }, 9500);

    return () => clearTimeout(timer);
  }, [guided, index]);

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#10140f",
        color: "#fff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${slide.image})`,
          backgroundSize: slide.contain ? "48%" : "cover",
          backgroundPosition: slide.contain
            ? "right 58%"
            : "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#10140f",
          opacity: 0.22,
          transition: "all .7s ease",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,.98), rgba(0,0,0,.86), rgba(0,0,0,.55)), linear-gradient(to top, rgba(0,0,0,.96), transparent 48%)",
        }}
      />

      <section
        style={{
          position: "relative",
          zIndex: 2,
          height: "100vh",
          padding: "20px 40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 24,
            flexShrink: 0,
          }}
        >
          <div>
            <p
              style={{
                letterSpacing: ".32em",
                color: "#e8d7a2",
                fontWeight: 800,
                fontSize: 12,
                margin: "0 0 8px",
              }}
            >
              BRONSON FAMILY FARM DEMO
            </p>

            <h1
              style={{
                fontSize: "clamp(32px, 4.1vw, 56px)",
                lineHeight: 0.95,
                fontWeight: 400,
                margin: 0,
                maxWidth: 760,
              }}
            >
              Connected Food Ecosystem Experience
            </h1>
          </div>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              height: 46,
              borderRadius: 999,
              padding: "0 22px",
              background: "rgba(255,255,255,.18)",
              color: "white",
              fontWeight: 800,
              fontSize: 16,
              border: "1px solid rgba(255,255,255,.35)",
            }}
          >
            <option>English</option>
            <option>Spanish</option>
            <option>Tagalog</option>
            <option>Italian</option>
            <option>Hebrew</option>
            <option>French</option>
          </select>
        </header>

        <div
          style={{
            height: 8,
            background: "rgba(255,255,255,.28)",
            borderRadius: 99,
            margin: "16px 0 16px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "#8cc63f",
              borderRadius: 99,
            }}
          />
        </div>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 22,
            flexShrink: 0,
            maxWidth: "920px",
          }}
        >
          {navLabels.map((label, i) => (
            <button
              key={label}
              onClick={() => {
                setGuided(false);
                setIndex(i);
              }}
              style={{
                borderRadius: 999,
                padding: "9px 15px",
                color: "white",
                fontWeight: 800,
                fontSize: 14,
                border: "1px solid rgba(255,255,255,.3)",
                background:
                  i === index
                    ? "#9a6a38"
                    : "rgba(255,255,255,.15)",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        <article
          style={{
            width: "min(760px, 52vw)",
            maxHeight: "calc(100vh - 245px)",
            overflow: "hidden",
            borderRadius: 28,
            padding: "30px 36px",
            background: "rgba(0,0,0,.72)",
            border: "1px solid rgba(255,255,255,.18)",
            boxShadow: "0 22px 55px rgba(0,0,0,.45)",
          }}
        >
          <p
            style={{
              letterSpacing: ".32em",
              color: "#e8d7a2",
              fontWeight: 800,
              fontSize: 12,
              margin: "0 0 8px",
            }}
          >
            {slide.kicker}
          </p>

          <h2
            style={{
              fontSize: "clamp(40px, 4.8vw, 64px)",
              lineHeight: 0.94,
              fontWeight: 400,
              margin: "0 0 18px",
            }}
          >
            {slide.title}
          </h2>

          <div
            style={{
              maxHeight: "160px",
              overflow: "hidden",
            }}
          >
            {slide.text.map((line) => (
              <p
                key={line}
                style={{
                  fontSize: "clamp(15px, 1.2vw, 18px)",
                  lineHeight: 1.32,
                  margin: "0 0 9px",
                }}
              >
                {line}
              </p>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginTop: 22,
            }}
          >
            <button
              onClick={() => setIndex(0)}
              style={buttonStyle}
            >
              Start
            </button>

            <button
              onClick={() =>
                setIndex((p) => Math.max(0, p - 1))
              }
              style={buttonStyle}
            >
              Back
            </button>

            <button
              onClick={() =>
                setIndex((p) =>
                  Math.min(baseSlides.length - 1, p + 1)
                )
              }
              style={{
                ...buttonStyle,
                background: "#9a6a38",
                borderColor: "#e4c98b",
              }}
            >
              Next
            </button>

            <button
              onClick={() => setGuided((p) => !p)}
              style={{
                ...buttonStyle,
                background: "#3f7f22",
                borderColor: "#9fc56a",
              }}
            >
              {guided ? "Pause Tour" : "Begin Guided Tour"}
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}

const buttonStyle: any = {
  borderRadius: 999,
  padding: "10px 16px",
  color: "white",
  fontWeight: 800,
  fontSize: 14,
  border: "1px solid rgba(255,255,255,.3)",
  background: "rgba(255,255,255,.15)",
  cursor: "pointer",
};
