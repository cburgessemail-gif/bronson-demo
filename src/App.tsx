import React, { useEffect, useMemo, useState } from "react";

const slides = [
  {
    nav: "1. Bronson Family Farm",
    image: "/GrowArea.jpg",
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
      "Youth build skills. Partners bring resources. Value-added producers expand what food can become."
    ]
  },
  {
    nav: "3. Explore the Farm",
    image: "/GrowArea.jpg",
    kicker: "PLACE · LAND · AIRPORT HISTORY",
    title: "Explore the Farm",
    text: [
      "This pathway explains the farm’s location, the airport setting, outdoor growing areas, and the future agritourism vision.",
      "The farm is becoming a living place of food, learning, and community experience."
    ]
  },
  {
    nav: "4. Guest",
    image: "/SAM_0220.JPG",
    kicker: "GUEST PATHWAY",
    title: "Learn. Engage. Be Inspired.",
    text: [
      "Guests enter the story first.",
      "They learn why the farm exists, how the ecosystem works, and how local food can strengthen families and neighborhoods."
    ]
  },
  {
    nav: "5. Customer",
    image: "/SAM_0221.JPG",
    kicker: "CUSTOMER PATHWAY",
    title: "Fresh Food, Better Choices",
    text: [
      "Customers connect to fresh, chemical-free food and practical nutrition education.",
      "The goal is to support repeat healthy choices and keep food dollars circulating locally."
    ]
  },
  {
    nav: "6. Marketplace",
    image: "/SAM_0222.JPG",
    kicker: "COMMUNITY MARKETPLACE",
    title: "Food Moves Through the System",
    text: [
      "The marketplace connects growers, customers, families, schools, businesses, and community partners.",
      "The food moves through the system so growers do not have to travel everywhere alone."
    ]
  },
  {
    nav: "7. Grower",
    image: "/SAM_0223.JPG",
    kicker: "GROWER SUPPORT SYSTEM",
    title: "Tools, Knowledge, and Markets",
    text: [
      "Growers need tools, education, supplies, visibility, and market access.",
      "This pathway supports small farms, gardeners, and community growers."
    ]
  },
  {
    nav: "8. Youth Workforce",
    image: "/SAM_0225.JPG",
    kicker: "YOUTH WORKFORCE",
    title: "Build Skills. Build Confidence. Build Futures.",
    text: [
      "Youth learn responsibility, teamwork, safety, communication, and real work habits.",
      "The farm becomes a classroom for workforce readiness."
    ]
  },
  {
    nav: "9. Partner",
    image: "/SAM_0226.JPG",
    kicker: "COMMUNITY PARTNERSHIPS",
    title: "Resources Aligned for Impact",
    text: [
      "Partners bring education, funding, health resources, tools, training, and community trust.",
      "Partnership turns individual effort into coordinated community impact."
    ]
  },
  {
    nav: "10. Value-Added",
    image: "/SAM_0229.JPG",
    kicker: "VALUE-ADDED PATHWAY",
    title: "Expanding What Food Can Become",
    text: [
      "Food can become meals, preserved goods, education, enterprise, and cultural connection.",
      "This pathway expands economic opportunity beyond the field."
    ]
  },
  {
    nav: "11. Thank You",
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    contain: true,
    kicker: "THANK YOU",
    title: "Help Us Strengthen the Ecosystem",
    text: [
      "Thank you for walking through the Bronson Family Farm connected food ecosystem.",
      "Your feedback helps shape the next stage.",
      "Contact: Constance Burgess · 330-275-1604 · cburgess@bronsonfamilyfarm.com"
    ]
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);
  const slide = slides[index];

  const progress = useMemo(() => ((index + 1) / slides.length) * 100, [index]);

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
    }, 12000);

    return () => clearTimeout(timer);
  }, [guided, index]);

  return (
    <main className="min-h-screen bg-[#10140f] text-white overflow-hidden">
      <section className="relative min-h-screen pb-28">
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: slide.contain ? "contain" : "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#10140f"
          }}
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <header className="relative z-20 px-8 pt-6">
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="tracking-[0.35em] text-xs font-bold text-[#e8d7a2]">
                BRONSON FAMILY FARM DEMO
              </p>
              <h1 className="text-4xl md:text-6xl font-light mt-2">
                Connected Food Ecosystem Experience
              </h1>
            </div>

            <select className="rounded-full bg-white/15 border border-white/30 px-5 py-3 text-white backdrop-blur-md font-semibold">
              <option className="text-black">English</option>
              <option className="text-black">Spanish</option>
              <option className="text-black">Tagalog</option>
              <option className="text-black">Italian</option>
              <option className="text-black">Hebrew</option>
              <option className="text-black">French</option>
            </select>
          </div>

          <div className="mt-5 h-2 rounded-full bg-white/25 overflow-hidden">
            <div
              className="h-full bg-[#8cc63f] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <nav className="mt-5 flex flex-wrap gap-3">
            {slides.map((item, i) => (
              <button
                key={item.nav}
                onClick={() => {
                  setGuided(false);
                  setIndex(i);
                }}
                className={`rounded-full px-4 py-2 text-sm font-bold border shadow-lg transition ${
                  i === index
                    ? "bg-[#9a6a38] border-[#e4c98b]"
                    : "bg-white/15 border-white/25 backdrop-blur-md hover:bg-white/25"
                }`}
              >
                {item.nav}
              </button>
            ))}
          </nav>
        </header>

        <article className="relative z-10 px-8 pt-10">
          <div className="max-w-3xl rounded-[2rem] bg-black/45 backdrop-blur-md border border-white/20 p-8 shadow-2xl">
            <p className="tracking-[0.35em] text-xs font-bold text-[#e8d7a2] mb-4">
              {slide.kicker}
            </p>

            <h2 className="text-5xl md:text-7xl font-light leading-none mb-6">
              {slide.title}
            </h2>

            <div className="space-y-3 text-lg md:text-xl leading-relaxed text-white/95">
              {slide.text.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setGuided(false);
                  setIndex(0);
                }}
                className="rounded-full px-6 py-3 bg-white/15 border border-white/30 backdrop-blur-md font-bold"
              >
                Start
              </button>

              <button
                onClick={() => setIndex((p) => Math.max(0, p - 1))}
                className="rounded-full px-6 py-3 bg-white/15 border border-white/30 backdrop-blur-md font-bold"
              >
                Back
              </button>

              <button
                onClick={() => setIndex((p) => Math.min(slides.length - 1, p + 1))}
                className="rounded-full px-6 py-3 bg-[#9a6a38] border border-[#e4c98b] font-bold"
              >
                Next
              </button>

              <button
                onClick={() => setGuided((p) => !p)}
                className="rounded-full px-7 py-3 bg-[#3f7f22] border border-[#9fc56a] font-bold shadow-xl"
              >
                {guided ? "Pause Tour" : "Begin Guided Tour"}
              </button>
            </div>
          </div>
        </article>

        <footer className="absolute left-8 right-8 bottom-6 z-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-6xl">
            {slides.slice(1, 11).map((item, i) => (
              <button
                key={item.nav}
                onClick={() => {
                  setGuided(false);
                  setIndex(i + 1);
                }}
                className="relative h-20 overflow-hidden rounded-2xl border border-white/25 bg-white/10 shadow-xl group"
              >
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-2 left-3 right-3 text-left">
                  <p className="text-[9px] tracking-widest font-bold text-[#e8d7a2]">
                    {item.kicker.split(" ")[0]}
                  </p>
                  <p className="text-sm font-bold leading-tight">{item.title}</p>
                </div>
              </button>
            ))}
          </div>
        </footer>
      </section>
    </main>
  );
}
