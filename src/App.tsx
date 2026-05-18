import React, { useEffect, useMemo, useState } from "react";

const slides = [
  {
    id: 1,
    title: "A Connected Food Ecosystem",
    subtitle: "People. Resources. Opportunity. Circulating Together.",
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    section: "ECOSYSTEM OVERVIEW",
    body:
      "Bronson Family Farm is a place-based ecosystem where growers, families, youth, partners, resources, and opportunities work together so food, knowledge, and economic value circulate locally and strengthen the whole community.",
    detail:
      "Each section of the ecosystem wheel represents a role in the system. Visitors can follow each pathway to understand how food, knowledge, opportunity, and resources move through the community.",
  },

  {
    id: 2,
    title: "The Place",
    subtitle: "Historic Lansdowne Airport • Youngstown, Ohio",
    image: "/GrowArea.jpg",
    section: "PLACE-BASED INFRASTRUCTURE",
    body:
      "Bronson Family Farm operates on historic airport property where overlooked land is being transformed into infrastructure for food production, workforce development, education, and agritourism.",
    detail:
      "The airport environment provides open outdoor growing space, transportation access, visibility, and room for long-term ecosystem growth. The farm is rooted in place, history, and community revitalization.",
  },

  {
    id: 3,
    title: "Explore the Farm",
    subtitle: "Understanding the land, story, and purpose.",
    image: "/SAM_0238.JPG",
    section: "PATHWAY 1",
    body:
      "Visitors experience the airport property, outdoor growing areas, demonstrations, and educational spaces that explain why local food systems matter.",
    detail:
      "This pathway introduces guests to the ecosystem story. People begin to understand how agriculture, education, health, workforce development, and community reinvestment connect together.",
  },

  {
    id: 4,
    title: "Healthy Food Access",
    subtitle: "Fresh food. Chemical-free produce. Stronger families.",
    image: "/SAM_0274.JPG",
    section: "PATHWAY 2",
    body:
      "Families gain access to fresh produce, seedlings, nutrition education, and healthier food choices connected to local growers and community support systems.",
    detail:
      "The ecosystem increases access to nutritious food while helping families reconnect to growing, cooking, wellness, and healthier long-term outcomes.",
  },

  {
    id: 5,
    title: "Community Marketplace",
    subtitle: "The food moves — not the farmer.",
    image: "/SAM_0281.JPG",
    section: "PATHWAY 3",
    body:
      "The marketplace connects growers to schools, businesses, organizations, institutions, and community buyers through a coordinated local food system.",
    detail:
      "Instead of every grower searching independently for customers, the ecosystem helps organize food distribution so products, money, and opportunity circulate more efficiently throughout the region.",
  },

  {
    id: 6,
    title: "Grower Support System",
    subtitle: "Tools. Education. Infrastructure. Opportunity.",
    image: "/SAM_0229.JPG",
    section: "PATHWAY 4",
    body:
      "Growers receive demonstrations, technical support, tools, educational resources, irrigation knowledge, and market opportunities that help them become more sustainable and successful.",
    detail:
      "The ecosystem lowers barriers for local growers by connecting them to practical support systems, shared resources, and collaborative learning opportunities.",
  },

  {
    id: 7,
    title: "Youth Workforce Development",
    subtitle: "The farm becomes an outdoor classroom.",
    image: "/SAM_0308.JPG",
    section: "PATHWAY 5",
    body:
      "Youth participants build responsibility, leadership, teamwork, communication, and workforce skills through real outdoor learning experiences connected to agriculture and community service.",
    detail:
      "The ecosystem prepares young people for future careers while teaching ownership, discipline, environmental awareness, and community engagement.",
  },

  {
    id: 8,
    title: "Community Partnerships",
    subtitle: "Collaboration strengthens the ecosystem.",
    image: "/SAM_0303.JPG",
    section: "PATHWAY 6",
    body:
      "Community partnerships align education, workforce development, agriculture, health, business, and nonprofit collaboration around local food system growth.",
    detail:
      "Partners include the City of Youngstown, Central State University, Ohio State University, Farm & Family Alliance, Parker Farms, Home Depot, Flying High, Jubilee Gardens, Inc., Elliott's Garden Center, Petitti Garden Centers, The Airport Association, and other community organizations.",
  },

  {
    id: 9,
    title: "Future Growth",
    subtitle: "Building a regional agritourism destination.",
    image: "/SAM_0257.JPG",
    section: "FUTURE VISION",
    body:
      "The ecosystem continues growing toward expanded education, agritourism, workforce opportunities, camping, food distribution, family engagement, and regional collaboration.",
    detail:
      "Future plans include expanded growers markets, agritourism experiences, educational demonstrations, family attractions, and year-round ecosystem participation.",
  },

  {
    id: 10,
    title: "The Purpose",
    subtitle: "Growing opportunity for all.",
    image: "/SAM_0299.JPG",
    section: "THE MISSION",
    body:
      "Bronson Family Farm exists to strengthen communities through food access, education, workforce development, agriculture, partnerships, and local economic circulation.",
    detail:
      "The ecosystem is designed so people can enter, learn, grow, participate, work, partner, reinvest, and help strengthen the future of the community.",
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);

  const slide = useMemo(() => slides[current], [current]);

  useEffect(() => {
    if (!playing) return;

    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9500);

    return () => clearTimeout(timer);
  }, [current, playing]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const back = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-black text-white relative font-sans">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-[2500ms]"
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

      {/* Top */}
      <div className="absolute top-6 left-6 z-30">
        <div className="tracking-[5px] text-[#e7c98a] text-sm font-bold">
          BRONSON FAMILY FARM
        </div>

        <div className="text-white/90 text-xl font-black mt-6 leading-none max-w-[380px]">
          {slide.title}
        </div>

        <div className="mt-4 text-[#e6cf96] text-lg font-semibold leading-snug max-w-[380px]">
          {slide.subtitle}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center justify-between px-6 pt-24 pb-36 gap-8">
        {/* LEFT */}
        <div className="w-[28%] max-w-[390px] flex flex-col gap-4">
          <div className="bg-black/50 border border-[#caa04d]/30 rounded-3xl p-5 backdrop-blur-md">
            <div className="text-[#e6cf96] text-xs tracking-[3px] font-bold mb-3">
              {slide.section}
            </div>

            <div className="text-white/92 text-[15px] leading-relaxed">
              {slide.body}
            </div>
          </div>

          <div className="bg-black/45 border border-[#caa04d]/30 rounded-3xl p-5 backdrop-blur-md max-h-[220px] overflow-y-auto">
            <div className="text-[#f1d08a] text-sm font-black tracking-[2px] mb-3">
              WHAT THIS PATHWAY EXPLAINS
            </div>

            <div className="text-white/88 text-[14px] leading-relaxed">
              {slide.detail}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setPlaying(true)}
              className="px-5 py-3 rounded-full bg-[#c99732] text-black font-black hover:scale-105 transition"
            >
              Guided Tour
            </button>

            <button
              onClick={() => setPlaying(false)}
              className="px-5 py-3 rounded-full bg-black/55 border border-white/20 text-white font-bold"
            >
              Pause Tour
            </button>

            <button
              onClick={back}
              className="px-5 py-3 rounded-full bg-black/55 border border-white/20 text-white font-bold"
            >
              Back
            </button>

            <button
              onClick={next}
              className="px-5 py-3 rounded-full bg-[#c99732] text-black font-black"
            >
              Next
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="w-[68%] h-full flex items-center justify-center">
          <div className="w-full max-w-[1120px] rounded-[38px] overflow-hidden border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl">
            <img
              src={
                current === 0
                  ? "/ConnectFoodEcosystem_withimages.jpeg"
                  : slide.image
              }
              alt={slide.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Counter */}
      <div className="absolute top-5 right-5 z-30 bg-black/40 border border-white/20 rounded-full px-5 py-2 text-white font-bold">
        {current + 1} / {slides.length}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-black/45 backdrop-blur-md border-t border-white/10 px-4 py-3">
        <div className="flex gap-3 overflow-x-auto pb-1">
          {slides.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setCurrent(index)}
              className={`min-w-[170px] transition-all rounded-2xl overflow-hidden border ${
                current === index
                  ? "border-[#d8a64b] scale-[1.02]"
                  : "border-white/10 opacity-75"
              }`}
            >
              <div
                className="h-[82px] bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${s.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute bottom-2 left-2 right-2 text-left">
                  <div className="text-white text-[12px] font-bold leading-tight">
                    {s.title}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
