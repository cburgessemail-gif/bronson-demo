import React, { useEffect, useMemo, useState } from "react";

const slides = [
  {
    id: 1,
    title: "A Connected Food Ecosystem",
    subtitle: "People. Resources. Opportunity. Circulating Together.",
    image: "/GrowArea.jpg",
    featureImage: "/ConnectFoodEcosystem_withimages.jpeg",
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
      "The airport environment provides open outdoor growing space, transportation access, visibility, and room for long-term ecosystem growth.",
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
      "This pathway introduces guests to how agriculture, education, health, workforce development, and community reinvestment connect together.",
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
      "Instead of every grower searching independently for customers, the ecosystem helps organize food distribution so products, money, and opportunity circulate locally.",
  },
  {
    id: 6,
    title: "Grower Support System",
    subtitle: "Tools. Education. Infrastructure. Opportunity.",
    image: "/SAM_0229.JPG",
    section: "PATHWAY 4",
    body:
      "Growers receive demonstrations, technical support, tools, educational resources, irrigation knowledge, and market opportunities.",
    detail:
      "The ecosystem lowers barriers for growers by connecting them to practical support systems, shared resources, and collaborative learning opportunities.",
  },
  {
    id: 7,
    title: "Youth Workforce Development",
    subtitle: "The farm becomes an outdoor classroom.",
    image: "/SAM_0308.JPG",
    section: "PATHWAY 5",
    body:
      "Youth participants build responsibility, leadership, teamwork, communication, and workforce skills through real outdoor learning experiences.",
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

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const back = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white font-sans">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-[2500ms]"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

      <div className="absolute top-5 right-5 z-30 rounded-full border border-white/20 bg-black/40 px-5 py-2 font-bold">
        {current + 1} / {slides.length}
      </div>

      <div className="relative z-20 flex h-full items-center justify-between gap-8 px-6 pb-32 pt-16">
        <section className="w-[27%] max-w-[380px]">
          <div className="mb-5 tracking-[5px] text-[#e7c98a] text-sm font-bold">
            BRONSON FAMILY FARM
          </div>

          <h1 className="text-3xl font-black leading-tight">
            {slide.title}
          </h1>

          <div className="mt-3 text-[#e6cf96] text-lg font-semibold leading-snug">
            {slide.subtitle}
          </div>

          <div className="mt-5 rounded-3xl border border-[#caa04d]/30 bg-black/55 p-5 backdrop-blur-md">
            <div className="mb-3 text-xs font-bold tracking-[3px] text-[#e6cf96]">
              {slide.section}
            </div>

            <div className="text-[15px] leading-relaxed text-white/90">
              {slide.body}
            </div>
          </div>

          <div className="mt-4 max-h-[190px] overflow-y-auto rounded-3xl border border-[#caa04d]/30 bg-black/50 p-5 backdrop-blur-md">
            <div className="mb-3 text-sm font-black tracking-[2px] text-[#f1d08a]">
              WHAT THIS PATHWAY EXPLAINS
            </div>

            <div className="text-[14px] leading-relaxed text-white/85">
              {slide.detail}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={() => {
                setCurrent(0);
                setPlaying(true);
              }}
              className="rounded-full bg-[#c99732] px-5 py-3 font-black text-black transition hover:scale-105"
            >
              Guided Tour
            </button>

            <button
              onClick={() => setPlaying(false)}
              className="rounded-full border border-white/20 bg-black/55 px-5 py-3 font-bold text-white"
            >
              Pause Tour
            </button>

            <button
              onClick={back}
              className="rounded-full border border-white/20 bg-black/55 px-5 py-3 font-bold text-white"
            >
              Back
            </button>

            <button
              onClick={next}
              className="rounded-full bg-[#c99732] px-5 py-3 font-black text-black"
            >
              Next
            </button>
          </div>
        </section>

        <section className="flex h-full w-[69%] items-center justify-center">
          <div className="max-h-[72vh] w-full max-w-[1080px] overflow-hidden rounded-[34px] border border-white/10 bg-black/20 shadow-2xl backdrop-blur-md">
            <img
              src={slide.featureImage || slide.image}
              alt={slide.title}
              className="h-full max-h-[72vh] w-full object-contain"
            />
          </div>
        </section>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md">
        <div className="flex gap-3 overflow-x-auto pb-1">
          {slides.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setCurrent(index)}
              className={`min-w-[160px] overflow-hidden rounded-2xl border transition-all ${
                current === index
                  ? "scale-[1.02] border-[#d8a64b]"
                  : "border-white/10 opacity-75"
              }`}
            >
              <div
                className="relative h-[74px] bg-cover bg-center"
                style={{ backgroundImage: `url(${s.featureImage || s.image})` }}
              >
                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute bottom-2 left-2 right-2 text-left">
                  <div className="text-[12px] font-bold leading-tight text-white">
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
