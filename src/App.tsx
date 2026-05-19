import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

const slides = [
  {
    nav: "1. Bronson Family Farm",
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    contain: true,
    kicker: "BRONSON FAMILY FARM DEMO",
    title: "Enter the Farm",
    text: [
      "Bronson Family Farm begins with land, legacy, food, and community.",
      "This is a place-based food ecosystem growing from the Historic Lansdowne Airport in Youngstown.",
      "The goal is to help food, knowledge, opportunity, and resources circulate locally."
    ]
  },
  {
    nav: "2. Connected Ecosystem",
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    contain: true,
    kicker: "CONNECTED FOOD ECOSYSTEM",
    title: "Growing Opportunity Together",
    text: [
      "An ecosystem means the parts do not stand alone.",
      "Guests learn the story. Customers access fresh food. Growers connect to tools and markets.",
      "Youth build skills. Partners bring resources. Value-added producers expand what food can become.",
      "The food moves through the system so growers do not have to carry distribution alone."
    ]
  },
  {
    nav: "3. Explore the Farm",
    image: "/GrowArea.jpg",
    kicker: "PLACE · LAND · AIRPORT HISTORY",
    title: "Explore the Farm",
    text: [
      "Bronson Family Farm grows from the Historic Lansdowne Airport in Youngstown.",
      "The farm combines outdoor growing, education, agritourism, and community engagement.",
      "Visitors experience the land, the story, the vision, and the future of the farm.",
      "This is infrastructure for a connected food ecosystem."
    ]
  },
  {
    nav: "4. Guest",
    image: "/SAM_0220.JPG",
    kicker: "GUEST PATHWAY",
    title: "Learn. Engage. Be Inspired.",
    text: [
      "Guests enter the story first.",
      "They learn how food, knowledge, and opportunity circulate together.",
      "The guest pathway transforms curiosity into understanding and connection.",
      "Visitors experience a living ecosystem instead of simply attending an event."
    ]
  },
  {
    nav: "5. Customer",
    image: "/SAM_0221.JPG",
    kicker: "CUSTOMER PATHWAY",
    title: "Fresh Food. Better Choices.",
    text: [
      "Customers connect to fresh, chemical-free food and nutrition education.",
      "The ecosystem supports healthier food access for families and communities.",
      "Every purchase helps strengthen growers and circulate food dollars locally.",
      "The goal is long-term healthy choices and stronger communities."
    ]
  },
  {
    nav: "6. Marketplace",
    image: "/SAM_0222.JPG",
    kicker: "COMMUNITY MARKETPLACE",
    title: "Food Moves Through the System",
    text: [
      "The marketplace connects growers, families, schools, businesses, and organizations.",
      "Bronson Family Farm helps organize food distribution throughout the ecosystem.",
      "The food moves through the system so growers do not have to travel everywhere alone.",
      "The marketplace becomes a circulation point for food, relationships, and opportunity."
    ]
  },
  {
    nav: "7. Grower",
    image: "/SAM_0223.JPG",
    kicker: "GROWER SUPPORT SYSTEM",
    title: "Tools. Knowledge. Markets.",
    text: [
      "Growers need more than land.",
      "They need tools, supplies, education, visibility, partnerships, and market access.",
      "This pathway supports gardeners, urban growers, and small farms.",
      "Stronger growers help build a stronger regional food system."
    ]
  },
  {
    nav: "8. Youth Workforce",
    image: "/SAM_0225.JPG",
    kicker: "YOUTH WORKFORCE DEVELOPMENT",
    title: "Build Skills. Build Confidence. Build Futures.",
    text: [
      "Youth gain real-world work experience in an outdoor farm environment.",
      "The pathway teaches teamwork, communication, responsibility, and leadership.",
      "The farm becomes a classroom for workforce readiness and personal growth.",
      "Youth begin to see themselves as part of the future food ecosystem."
    ]
  },
  {
    nav: "9. Partner",
    image: "/SAM_0226.JPG",
    kicker: "COMMUNITY PARTNERSHIPS",
    title: "Resources Aligned for Impact",
    text: [
      "Partners strengthen different parts of the ecosystem.",
      "They bring education, funding, tools, health resources, workforce support, and expertise.",
      "The ecosystem succeeds because organizations work together instead of independently.",
      "Partnership transforms individual effort into coordinated community impact."
    ]
  },
  {
    nav: "10. Value-Added",
    image: "/SAM_0229.JPG",
    kicker: "VALUE-ADDED PATHWAY",
    title: "Expanding What Food Can Become",
    text: [
      "Food can become meals, products, education, business opportunity, and cultural connection.",
      "Value-added production increases sustainability and economic opportunity.",
      "This pathway extends the impact of what growers produce.",
      "The ecosystem supports both growing and transformation."
    ]
  },
  {
    nav: "11. Thank You",
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    contain: true,
    kicker: "THANK YOU",
    title: "Help Us Strengthen the Ecosystem",
    text: [
      "Thank you for experiencing the Bronson Family Farm ecosystem demo.",
      "This work is about strengthening communities through food, knowledge, and opportunity.",
      "Your feedback helps shape the future of the ecosystem.",
      "Constance Burgess · 330-275-1604 · cburgess@bronsonfamilyfarm.com"
    ]
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);
  const slide = slides[index];

  const progress = useMemo(() => ((index + 1) / slides.length) * 100, [index]);

  useEffect(() => {
    document.title = "Bronson Family Farm";
  }, []);

  useEffect(() => {
    if (!guided) return;

    const timer = setTimeout(() => {
      setIndex((prev) => {
        if (prev >= slides.length - 1) {
          setGuided(false);
          return prev;
        }
        return prev + 1;
      });
    }, 11000);

    return () => clearTimeout(timer);
  }, [guided, index]);

  return (
    <main className="demo">
      <section className="hero">
        <div
          className="background"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: slide.contain ? "58%" : "cover",
            backgroundPosition: slide.contain ? "right center" : "center center",
            backgroundRepeat: "no-repeat"
          }}
        />

        <div className="overlay" />

        <header className="top">
          <div>
            <p className="kicker">BRONSON FAMILY FARM DEMO</p>
            <h1>Connected Food Ecosystem Experience</h1>
          </div>

          <select>
            <option>English</option>
            <option>Spanish</option>
            <option>Tagalog</option>
            <option>Italian</option>
            <option>Hebrew</option>
            <option>French</option>
          </select>
        </header>

        <div className="progress">
          <span style={{ width: `${progress}%` }} />
        </div>

        <nav className="nav">
          {slides.map((item, i) => (
            <button
              key={item.nav}
              className={i === index ? "active" : ""}
              onClick={() => {
                setGuided(false);
                setIndex(i);
              }}
            >
              {item.nav}
            </button>
          ))}
        </nav>

        <section className="content">
          <div className="panel">
            <p className="kicker">{slide.kicker}</p>
            <h2>{slide.title}</h2>

            {slide.text.map((line) => (
              <p key={line}>{line}</p>
            ))}

            <div className="controls">
              <button
                onClick={() => {
                  setGuided(false);
                  setIndex(0);
                }}
              >
                Start
              </button>

              <button onClick={() => setIndex((prev) => Math.max(0, prev - 1))}>
                Back
              </button>

              <button
                className="next"
                onClick={() =>
                  setIndex((prev) => Math.min(slides.length - 1, prev + 1))
                }
              >
                Next
              </button>

              <button className="guided" onClick={() => setGuided((prev) => !prev)}>
                {guided ? "Pause Tour" : "Begin Guided Tour"}
              </button>
            </div>
          </div>
        </section>

        <footer className="footerCards">
          {slides.slice(1).map((item, i) => (
            <button
              key={item.nav}
              className="card"
              onClick={() => {
                setGuided(false);
                setIndex(i + 1);
              }}
            >
              <img src={item.image} alt={item.title} />
              <div className="cardOverlay" />
              <div className="cardText">
                <span>{item.kicker.split(" ")[0]}</span>
                <strong>{item.title}</strong>
              </div>
            </button>
          ))}
        </footer>
      </section>
    </main>
  );
}
