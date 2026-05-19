import React, { useEffect, useMemo, useState } from "react";

const IMG = {
  ecosystem: "/ConnectFoodEcosystem_withimages.jpeg",
  farm: "/GrowArea.jpg",
  guest: "/SAM_0220.JPG",
  customer: "/SAM_0221.JPG",
  marketplace: "/SAM_0222.JPG",
  grower: "/SAM_0223.JPG",
  youth: "/SAM_0225.JPG",
  partner: "/SAM_0226.JPG",
  value: "/SAM_0229.JPG",
};

const copy = {
  en: {
    begin: "Begin Guided Tour",
    pause: "Pause Tour",
    start: "Start",
    back: "Back",
    next: "Next",
  },
};

const slides = [
  {
    id: "farm",
    nav: "1. Bronson Family Farm",
    image: IMG.farm,
    kicker: "BRONSON FAMILY FARM DEMO",
    title: "Enter the Farm",
    text: [
      "Bronson Family Farm begins with land, legacy, food, and community.",
      "This is not just a farm site. It is a place-based food ecosystem growing from the Historic Lansdowne Airport in Youngstown.",
      "The goal is to help food, knowledge, opportunity, and resources circulate locally.",
    ],
  },
  {
    id: "ecosystem",
    nav: "2. Connected Ecosystem",
    image: IMG.ecosystem,
    contain: true,
    kicker: "A CONNECTED FOOD ECOSYSTEM",
    title: "Growing Opportunity Together",
    text: [
      "An ecosystem means the parts do not stand alone.",
      "Guests learn the story. Customers access fresh food. Growers connect to tools and markets. Youth build skills. Partners bring resources.",
      "The benefit is that food moves through a coordinated system, so growers do not have to travel everywhere alone.",
    ],
  },
  {
    id: "explore",
    nav: "3. Explore the Farm",
    image: IMG.farm,
    kicker: "PLACE · LAND · AIRPORT HISTORY",
    title: "Explore the Farm",
    text: [
      "Bronson Family Farm grows within a unique place: the Historic Lansdowne Airport.",
      "The farm is being shaped as outdoor growing space, food access infrastructure, and a future agritourism destination.",
      "This pathway helps visitors understand the land, the growing areas, and why place matters.",
    ],
  },
  {
    id: "guest",
    nav: "4. Guest",
    image: IMG.guest,
    kicker: "GUEST PATHWAY",
    title: "Learn. Engage. Be Inspired.",
    text: [
      "Guests enter the story first.",
      "They learn why the farm exists, how the ecosystem works, and how local food can strengthen families and neighborhoods.",
      "The guest pathway turns curiosity into connection.",
    ],
  },
  {
    id: "customer",
    nav: "5. Customer",
    image: IMG.customer,
    kicker: "CUSTOMER PATHWAY",
    title: "Fresh Food, Better Choices",
    text: [
      "Customers are connected to fresh, chemical-free food and practical nutrition education.",
      "The goal is not only to sell food, but to support repeat healthy choices.",
      "Customers help keep food dollars circulating in the community.",
    ],
  },
  {
    id: "marketplace",
    nav: "6. Marketplace",
    image: IMG.marketplace,
    kicker: "COMMUNITY MARKETPLACE",
    title: "Food Moves Through the System",
    text: [
      "The marketplace connects growers, customers, families, schools, businesses, and community partners.",
      "Growers should not have to carry the whole burden of distribution alone.",
      "Bronson Family Farm and Farm & Family Alliance help organize the movement of food, money, and opportunity.",
    ],
  },
  {
    id: "grower",
    nav: "7. Grower",
    image: IMG.grower,
    kicker: "GROWER SUPPORT SYSTEM",
    title: "Tools, Knowledge, and Markets",
    text: [
      "Growers need more than land. They need tools, education, supplies, visibility, and market access.",
      "This pathway supports small farms, gardeners, and community growers with practical knowledge and connection.",
      "Stronger growers help create a stronger regional food system.",
    ],
  },
  {
    id: "youth",
    nav: "8. Youth Workforce",
    image: IMG.youth,
    kicker: "YOUTH WORKFORCE DEVELOPMENT",
    title: "Build Skills. Build Confidence. Build Futures.",
    text: [
      "Youth learn responsibility, teamwork, safety, communication, and real work habits in an outdoor farm environment.",
      "The farm becomes a classroom for workforce readiness.",
      "This pathway helps young people see themselves as part of the future food system.",
    ],
  },
  {
    id: "partner",
    nav: "9. Partner",
    image: IMG.partner,
    kicker: "COMMUNITY PARTNERSHIPS",
    title: "Resources Aligned for Impact",
    text: [
      "Partners bring education, funding, health resources, tools, training, and community trust.",
      "The ecosystem works because each partner strengthens a different part of the whole.",
      "Partnership turns individual effort into coordinated community impact.",
    ],
  },
  {
    id: "value",
    nav: "10. Value-Added",
    image: IMG.value,
    kicker: "VALUE-ADDED PATHWAY",
    title: "Expanding What Food Can Become",
    text: [
      "Value-added production creates new opportunities from what is grown.",
      "Food can become meals, preserved goods, education, enterprise, and cultural connection.",
      "This pathway helps expand economic opportunity beyond the field.",
    ],
  },
  {
    id: "thanks",
    nav: "11. Thank You",
    image: IMG.ecosystem,
    contain: true,
    kicker: "THANK YOU",
    title: "Help Us Strengthen the Ecosystem",
    text: [
      "Thank you for walking through the Bronson Family Farm connected food ecosystem.",
      "Your feedback helps shape the next stage of this work.",
      "Contact: Constance Burgess · 330-275-1604 · cburgess@bronsonfamilyfarm.com",
    ],
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);
  const [language, setLanguage] = useState("English");

  const slide = slides[index];
  const t = copy.en;

  const progress = useMemo(
    () => ((index + 1) / slides.length) * 100,
    [index]
  );

  useEffect(() => {
    if (!guided) return;
    const timer = window.setTimeout(() => {
      setIndex((prev) => {
        if (prev >= slides.length - 1) {
          setGuided(false);
          return prev;
        }
        return prev + 1;
      });
    }, 11000);
    return () => window.clearTimeout(timer);
  }, [guided, index]);

  const goNext = () => setIndex((prev) => Math.min(prev + 1, slides.length - 1));
  const goBack = () => setIndex((prev) => Math.max(prev - 1, 0));
  const goStart = () => {
    setGuided(false);
    setIndex(0);
  };

  return (
    <main className="min-h-screen bg-[#151812] text-white overflow-hidden">
      <section className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: slide.contain ? "contain" : "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#151812",
          }}
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/85 to-transparent" />

        <header className="relative z-20 px-8 pt-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="tracking-[0.3em] text-xs font-bold text-[#e8d7a2]">
                BRONSON FAMILY FARM DEMO
              </p>
              <h1 className="text-3xl md:text-5xl font-light leading-tight mt-2">
                Connected Food Ecosystem Experience
              </h1>
            </div>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="rounded-full bg-white/15 backdrop-blur-md border border-white/30 px-5 py-3 text-white font-semibold"
            >
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
              className="h-full bg-[#83a846] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <nav className="mt-5 flex flex-wrap gap-3">
            {slides.map((item, i) => (
              <button
                key={item.id}
                onClick={() => {
                  setGuided(false);
                  setIndex(i);
                }}
                className={`rounded-full px-4 py-2 text-sm font-bold shadow-lg border transition ${
                  i === index
                    ? "bg-[#8a6236] text-white border-[#d8c08a]"
                    : "bg-white/15 backdrop-blur-md text-white border-white/25 hover:bg-white/25"
                }`}
              >
                {item.nav}
              </button>
            ))}
          </nav>
        </header>

        <article className="relative z-10 min-h-[62vh] flex items-end px-8 pb-28">
          <div className="max-w-4xl rounded-[2rem] bg-black/35 backdrop-blur-md border border-white/20 p-8 md:p-10 shadow-2xl">
            <p className="tracking-[0.35em] text-xs font-bold text-[#e8d7a2] mb-4">
              {slide.kicker}
            </p>

            <h2 className="text-5xl md:text-7xl font-light leading-[0.95] mb-6">
              {slide.title}
            </h2>

            <div className="space-y-3 text-lg md:text-xl leading-relaxed text-white/92 max-w-3xl">
              {slide.text.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={goStart}
                className="rounded-full px-6 py-3 bg-white/15 backdrop-blur-md border border-white/30 font-bold hover:bg-white/25"
              >
                {t.start}
              </button>

              <button
                onClick={goBack}
                disabled={index === 0}
                className="rounded-full px-6 py-3 bg-white/15 backdrop-blur-md border border-white/30 font-bold hover:bg-white/25 disabled:opacity-40"
              >
                {t.back}
              </button>

              <button
                onClick={goNext}
                disabled={index === slides.length - 1}
                className="rounded-full px-6 py-3 bg-[#8a6236] border border-[#d8c08a] font-bold hover:bg-[#9c7040] disabled:opacity-40"
              >
                {t.next}
              </button>

              <button
                onClick={() => setGuided((prev) => !prev)}
                className="rounded-full px-7 py-3 bg-[#3f781f] border border-[#9fc56a] font-bold shadow-xl hover:bg-[#4f8e27]"
              >
                {guided ? t.pause : t.begin}
              </button>
            </div>
          </div>
        </article>

        <footer className="absolute bottom-5 left-8 right-8 z-20">
          <div className="flex flex-wrap gap-3">
            {slides.slice(1, 10).map((item, i) => (
              <button
                key={item.id}
                onClick={() => {
                  setGuided(false);
                  setIndex(i + 1);
                }}
                className="group relative h-24 w-44 overflow-hidden rounded-2xl border border-white/25 bg-white/10 shadow-xl"
              >
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute bottom-2 left-3 right-3 text-left">
                  <p className="text-[10px] font-bold tracking-widest text-[#e8d7a2]">
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
