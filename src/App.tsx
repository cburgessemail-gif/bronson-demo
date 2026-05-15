import React, { useEffect, useMemo, useRef, useState } from "react";

const TOUR_TIMING = {
  slideDuration: 13500,
  deepSlideDuration: 16000,
};

const slides = [
  {
    id: "entrance",
    title: "Bronson Family Farm",
    subtitle: "A guided ecosystem experience",
    image: "/GrowArea.jpg",
    deep: true,
    text: "Welcome to Bronson Family Farm. This is more than a farm. It is a place-based food ecosystem designed to help growers, families, youth, customers, partners, and the community move together toward food access, workforce development, health, education, local food circulation, and regional revitalization.",
  },
  {
    id: "place",
    title: "The Place",
    subtitle: "Historic Lansdowne Airport • Youngstown, Ohio",
    image: "/SAM_0220.JPG",
    deep: true,
    text: "Bronson Family Farm is being developed on land connected to the Historic Lansdowne Airport. What was once a place of transportation and movement is now becoming a place of food production, learning, workforce development, agritourism, and community gathering.",
  },
  {
    id: "guest",
    title: "Guest Pathway",
    subtitle: "Understand the vision",
    image: "/SAM_0221.JPG",
    pathway: "Guest",
    text: "Guests experience the atmosphere, story, purpose, and future of the ecosystem. The guided experience introduces visitors to growing areas, demonstrations, sustainability, community engagement, and the importance of local food systems.",
    detail: "This pathway helps visitors understand what the farm is becoming and why the ecosystem matters.",
  },
  {
    id: "customer",
    title: "Customer Pathway",
    subtitle: "Fresh, chemical-free food",
    image: "/SAM_0222.JPG",
    pathway: "Customer",
    text: "Customers gain access to fresh, chemical-free produce grown locally with care. The ecosystem supports healthier food choices, nutrition awareness, family wellness, and stronger connections between growers and consumers.",
    detail: "This pathway connects families to food, nutrition, wellness, and repeat healthy choices.",
  },
  {
    id: "marketplace",
    title: "Marketplace Pathway",
    subtitle: "Food and money circulate locally",
    image: "/SAM_0223.JPG",
    deep: true,
    pathway: "Marketplace",
    text: "The marketplace pathway helps food move efficiently through the ecosystem. Growers should not have to carry the burden of distribution alone. Bronson Family Farm works to connect growers with schools, markets, organizations, institutions, and community buyers so the food moves — not the farmer.",
    detail: "This pathway turns interest into purchasing power, distribution, and sustainability.",
  },
  {
    id: "grower",
    title: "Grower Pathway",
    subtitle: "Tools, supplies, demonstrations, and support",
    image: "/SAM_0225.JPG",
    deep: true,
    pathway: "Grower",
    text: "Growers need more than land. They need education, demonstrations, tools, infrastructure ideas, networking, and market opportunities. The Growers Supply Market was created to help growers learn, prepare, build confidence, and grow more successfully.",
    detail: "This pathway connects producers to tools, knowledge, market participation, and opportunity.",
  },
  {
    id: "youth",
    title: "Youth Workforce Pathway",
    subtitle: "Skills, leadership, and future readiness",
    image: "/SAM_0226.JPG",
    deep: true,
    pathway: "Youth Workforce",
    text: "Youth workforce development is integrated directly into the ecosystem. Young people gain hands-on experience in leadership, responsibility, communication, teamwork, food handling, growing practices, customer engagement, and outdoor work readiness.",
    detail: "This pathway builds responsibility, practical skills, confidence, and future readiness.",
  },
  {
    id: "partners",
    title: "Partner Pathway",
    subtitle: "Shared impact and collaboration",
    image: "/SAM_0229.JPG",
    pathway: "Partner",
    text: "Partners help strengthen the ecosystem through collaboration, education, workforce support, health programming, tools, supplies, demonstrations, funding, and community engagement that creates long-term shared benefit.",
    detail: "This pathway aligns resources, collaboration, and community benefit.",
  },
  {
    id: "future",
    title: "Future Destination",
    subtitle: "Agritourism and family experiences",
    image: "/SAM_0230.JPG",
    deep: true,
    text: "The long-term vision includes agritourism, family camping, educational experiences, an 18-hole mini-golf course, food education, children’s activities, value-added products, and destination experiences that reconnect people to land, food, and community.",
  },
  {
    id: "closing",
    title: "Thank You",
    subtitle: "Help us grow the ecosystem together",
    image: "/GrowArea2.jpg",
    deep: true,
    closing: true,
    text: "Thank you for experiencing the Bronson Family Farm ecosystem demo. Your feedback, ideas, partnerships, and support help strengthen the vision for local food access, growers, youth workforce development, health, education, and community revitalization throughout Youngstown and beyond.",
  },
];

const pathwayLabels = [
  "Guest",
  "Customer",
  "Marketplace",
  "Grower",
  "Youth Workforce",
  "Partner",
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const current = slides[index];
  const isLast = index === slides.length - 1;

  const clearTourTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const goToSlide = (newIndex: number) => {
    clearTourTimer();
    setIndex(Math.max(0, Math.min(newIndex, slides.length - 1)));
  };

  const startGuidedTour = () => {
    clearTourTimer();
    setIndex(0);
    setGuided(true);
    setPaused(false);
  };

  const togglePause = () => {
    clearTourTimer();
    setPaused((prev) => !prev);
  };

  const explorePathway = (label: string) => {
    const target = slides.findIndex((slide) => slide.pathway === label);
    setGuided(false);
    setPaused(false);
    goToSlide(target);
  };

  useEffect(() => {
    clearTourTimer();

    if (!guided || paused) return;

    const duration = current.deep
      ? TOUR_TIMING.deepSlideDuration
      : TOUR_TIMING.slideDuration;

    timerRef.current = window.setTimeout(() => {
      setIndex((prev) => {
        if (prev + 1 >= slides.length) {
          setGuided(false);
          return prev;
        }
        return prev + 1;
      });
    }, duration);

    return clearTourTimer;
  }, [guided, paused, index, current.deep]);

  const progress = useMemo(
    () => ((index + 1) / slides.length) * 100,
    [index]
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#101510] text-white">
      <section className="relative min-h-screen">
        <img
          src={current.image}
          alt={current.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-6 md:px-12">
          <header className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-lime-200">
                Bronson Family Farm
              </p>

              <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
                {current.title}
              </h1>

              <p className="mt-4 text-lg text-lime-100 md:text-2xl">
                {current.subtitle}
              </p>
            </div>

            <div className="rounded-full bg-white/15 px-5 py-3 text-sm font-semibold backdrop-blur">
              {index + 1} / {slides.length}
            </div>
          </header>

          <section className="max-w-5xl rounded-[2rem] bg-black/45 p-6 shadow-2xl backdrop-blur-md md:p-9">
            <p className="text-xl leading-relaxed md:text-3xl md:leading-relaxed">
              {current.text}
            </p>

            {current.detail && (
              <div className="mt-5 rounded-3xl bg-lime-300/90 p-5 text-black">
                <h3 className="text-lg font-bold">
                  Why this pathway matters
                </h3>
                <p className="mt-2 text-base leading-relaxed">
                  {current.detail}
                </p>
              </div>
            )}

            {current.closing && (
              <div className="mt-6 rounded-3xl bg-black/35 p-5 backdrop-blur">
                <h3 className="text-xl font-bold text-lime-200">
                  Contact Constance Burgess
                </h3>
                <p className="mt-3">330-275-1604</p>
                <p>cburgess@bronsonfamilyfarm.com</p>
                <p>www.bronsonfamilyfarm.com</p>
              </div>
            )}
          </section>

          <footer className="space-y-4 pb-2">
            <div className="h-2 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-lime-300 transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={startGuidedTour}
                  className="rounded-full bg-lime-300 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-xl"
                >
                  Guided Tour
                </button>

                {guided && (
                  <button
                    onClick={togglePause}
                    className="rounded-full bg-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white backdrop-blur"
                  >
                    {paused ? "Resume" : "Pause"}
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => goToSlide(index - 1)}
                  disabled={index === 0}
                  className="rounded-full bg-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white backdrop-blur disabled:opacity-30"
                >
                  Back
                </button>

                {!isLast && (
                  <button
                    onClick={() => goToSlide(index + 1)}
                    className="rounded-full bg-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white backdrop-blur"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {pathwayLabels.map((label) => (
                <button
                  key={label}
                  onClick={() => explorePathway(label)}
                  className="rounded-full bg-lime-300/90 px-4 py-2 text-xs font-bold uppercase tracking-wide text-black"
                >
                  {label}
                </button>
              ))}
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
