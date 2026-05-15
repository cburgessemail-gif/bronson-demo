import React, { useEffect, useMemo, useRef, useState } from "react";

const TOUR_TIMING = {
  slideDuration: 12000,
  deepSlideDuration: 14500,
  transitionDuration: 650,
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
    text: "Guests experience the atmosphere, story, purpose, and future of the ecosystem. The guided experience introduces visitors to growing areas, demonstrations, sustainability, community engagement, and the importance of local food systems.",
  },

  {
    id: "customer",
    title: "Customer Pathway",
    subtitle: "Fresh, chemical-free food",
    image: "/SAM_0222.JPG",
    text: "Customers gain access to fresh, chemical-free produce grown locally with care. The ecosystem supports healthier food choices, nutrition awareness, family wellness, and stronger connections between growers and consumers.",
  },

  {
    id: "marketplace",
    title: "Marketplace Pathway",
    subtitle: "Food and money circulate locally",
    image: "/SAM_0223.JPG",
    deep: true,
    text: "The marketplace pathway is designed to help food move efficiently through the ecosystem. Growers should not have to carry the burden of distribution alone. Bronson Family Farm works to connect growers with schools, markets, organizations, institutions, and community buyers so the food moves — not the farmer.",
  },

  {
    id: "grower",
    title: "Grower Pathway",
    subtitle: "Tools, supplies, demonstrations, and support",
    image: "/SAM_0225.JPG",
    deep: true,
    text: "Growers need more than land. They need education, demonstrations, tools, infrastructure ideas, networking, and market opportunities. The Growers Supply Market was created to help growers learn, prepare, build confidence, and grow more successfully.",
  },

  {
    id: "youth",
    title: "Youth Workforce Pathway",
    subtitle: "Skills, leadership, and future readiness",
    image: "/SAM_0226.JPG",
    deep: true,
    text: "Youth workforce development is integrated directly into the ecosystem. Young people gain hands-on experience in leadership, responsibility, communication, teamwork, food handling, growing practices, customer engagement, and outdoor work readiness.",
  },

  {
    id: "partners",
    title: "Partner Pathway",
    subtitle: "Shared impact and collaboration",
    image: "/SAM_0229.JPG",
    text: "Partners help strengthen the ecosystem through collaboration, education, workforce support, health programming, tools, supplies, demonstrations, funding, and community engagement that creates long-term shared benefit.",
  },

  {
    id: "future",
    title: "Future Destination",
    subtitle: "Agritourism and family experiences",
    image: "/SAM_0230.JPG",
    deep: true,
    text: "The long-term vision includes agritourism, family camping, educational experiences, an 18-hole mini-golf course, food education, children’s activities, value-added products, and destination experiences that reconnect people to land, food, and community.",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [guided, setGuided] = useState(false);
  const [paused, setPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const timerRef = useRef<number | null>(null);

  const current = slides[index];

  const clearTourTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const goToSlide = (newIndex: number) => {
    clearTourTimer();

    setTransitioning(true);

    setTimeout(() => {
      setIndex(newIndex);
      setTransitioning(false);
    }, TOUR_TIMING.transitionDuration);
  };

  const nextSlide = () => {
    const next =
      index + 1 >= slides.length
        ? 0
        : index + 1;

    goToSlide(next);
  };

  const previousSlide = () => {
    const previous =
      index - 1 < 0
        ? slides.length - 1
        : index - 1;

    goToSlide(previous);
  };

  const startGuidedTour = () => {
    clearTourTimer();
    setGuided(true);
    setPaused(false);
    setIndex(0);
  };

  const pauseTour = () => {
    clearTourTimer();
    setPaused(true);
  };

  const resumeTour = () => {
    clearTourTimer();
    setPaused(false);
  };

  const togglePause = () => {
    if (paused) {
      resumeTour();
    } else {
      pauseTour();
    }
  };

  useEffect(() => {
    clearTourTimer();

    if (!guided || paused || transitioning) return;

    const duration = current.deep
      ? TOUR_TIMING.deepSlideDuration
      : TOUR_TIMING.slideDuration;

    timerRef.current = window.setTimeout(() => {
      setIndex((prev) =>
        prev + 1 >= slides.length
          ? 0
          : prev + 1
      );
    }, duration);

    return clearTourTimer;
  }, [
    guided,
    paused,
    transitioning,
    index,
    current.deep,
  ]);

  const progress = useMemo(() => {
    return (
      ((index + 1) / slides.length) * 100
    );
  }, [index]);

  return (
    <main className="min-h-screen bg-[#101510] text-white overflow-hidden">
      <section className="relative min-h-screen">
        <img
          src={current.image}
          alt={current.title}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[650ms] ${
            transitioning
              ? "scale-105 opacity-40"
              : "scale-100 opacity-100"
          }`}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-6 md:px-12">
          <header className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-4xl">
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

          <section className="max-w-5xl rounded-[2rem] bg-black/40 p-6 shadow-2xl backdrop-blur-md md:p-10">
            <p className="text-xl leading-relaxed md:text-3xl md:leading-relaxed">
              {current.text}
            </p>
          </section>

          <footer className="space-y-5 pb-2">
            <div className="h-2 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-lime-300 transition-all duration-700"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={startGuidedTour}
                  className="rounded-full bg-lime-300 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-xl transition hover:scale-[1.02] hover:bg-lime-200"
                >
                  Guided Tour
                </button>

                <button
                  onClick={togglePause}
                  className="rounded-full bg-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/30"
                >
                  {paused ? "Resume" : "Pause"}
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={previousSlide}
                  className="rounded-full bg-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/30"
                >
                  Back
                </button>

                <button
                  onClick={nextSlide}
                  className="rounded-full bg-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/30"
                >
                  Next
                </button>
              </div>
            </div>

            <nav className="flex flex-wrap gap-2">
              {slides.map((slide, slideIndex) => (
                <button
                  key={slide.id}
                  onClick={() =>
                    goToSlide(slideIndex)
                  }
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                    slideIndex === index
                      ? "bg-lime-300 text-black"
                      : "bg-white/15 text-white hover:bg-white/25"
                  }`}
                >
                  {slide.title}
                </button>
              ))}
            </nav>
          </footer>
        </div>
      </section>
    </main>
  );
}
