import React, { useEffect, useMemo, useState } from "react";

type Lang = "en" | "es" | "tl" | "it" | "he" | "fr";

const EVENTBRITE_URL =
  "https://www.eventbrite.com/e/bronson-family-farm-growers-supply-market-tickets-1984126092554?aff=oddtdtcreator";

const GROWNBY_URL = "https://grownby.com/farms/bronson-family-farm/shop";

const translations = {
  en: {
    startTour: "Guided Tour",
    pauseTour: "Pause Tour",
    next: "Next",
    back: "Back",
    start: "Start",
    pathways: "Pathways",
    feedback: "Share Feedback",
    contact: "Contact",
  },
  es: {
    startTour: "Recorrido Guiado",
    pauseTour: "Pausar Recorrido",
    next: "Siguiente",
    back: "Atrás",
    start: "Inicio",
    pathways: "Caminos",
    feedback: "Compartir Opinión",
    contact: "Contacto",
  },
  tl: {
    startTour: "Gabay na Paglilibot",
    pauseTour: "I-pause ang Paglilibot",
    next: "Susunod",
    back: "Balik",
    start: "Simula",
    pathways: "Mga Landas",
    feedback: "Magbigay ng Feedback",
    contact: "Makipag-ugnayan",
  },
  it: {
    startTour: "Tour Guidato",
    pauseTour: "Pausa Tour",
    next: "Avanti",
    back: "Indietro",
    start: "Inizio",
    pathways: "Percorsi",
    feedback: "Condividi Feedback",
    contact: "Contatto",
  },
  he: {
    startTour: "סיור מודרך",
    pauseTour: "השהה סיור",
    next: "הבא",
    back: "חזור",
    start: "התחלה",
    pathways: "מסלולים",
    feedback: "שלח משוב",
    contact: "צור קשר",
  },
  fr: {
    startTour: "Visite Guidée",
    pauseTour: "Pause",
    next: "Suivant",
    back: "Retour",
    start: "Début",
    pathways: "Parcours",
    feedback: "Partager un avis",
    contact: "Contact",
  },
};

const slideText = {
  en: [
    {
      id: "entrance",
      label: "Entrance",
      title: "Bronson Family Farm",
      subtitle: "Step into the Farm. Experience the wonders of life.",
      body: "This demo introduces a place-based food ecosystem growing from the Historic Lansdowne Airport in Youngstown. The farm connects land, food, growers, youth, families, partners, and future destination experiences.",
      image: "/GrowArea.jpg",
      cta: "Begin the Journey",
    },
    {
      id: "place",
      label: "Explore the Farm",
      title: "The Place-Based Farm Experience",
      subtitle: "A working airport landscape becoming a food and agritourism destination.",
      body: "Bronson Family Farm is rooted in real land, real history, and real community need. Visitors learn about the airport setting, outdoor growing areas, future infrastructure, and how land can become a classroom, market, wellness space, and destination.",
      image: "/SAM_0220.JPG",
      cta: "Explore the Place",
    },
    {
      id: "ecosystem",
      label: "Ecosystem",
      title: "The Connected Food Ecosystem",
      subtitle: "Food, knowledge, tools, people, and opportunity moving together.",
      body: "An ecosystem means every part has a role. Guests learn the vision. Customers access fresh food. Growers receive support. Youth build skills. Partners strengthen capacity. The food moves through the system so the community does not have to carry the burden alone.",
      image: "/ConnectFoodEcosystem_withimages.jpeg",
      cta: "See How It Works",
    },
    {
      id: "guest",
      label: "Guest",
      title: "Guest Pathway",
      subtitle: "Understand the vision, story, and purpose.",
      body: "Guests enter through story. They learn why the farm exists, why the airport matters, how food access connects to health, and how this destination can become a community asset for Youngstown and the Mahoning Valley.",
      image: "/SAM_0221.JPG",
      cta: "Enter as Guest",
    },
    {
      id: "customer",
      label: "Customer",
      title: "Customer Pathway",
      subtitle: "Fresh food, nutrition, and repeat healthy choices.",
      body: "Customers connect to produce, seedlings, herbs, Bubble Babies™, and future value-added products. The goal is more than buying food. It is helping families make healthy choices again and again through access, education, and trust.",
      image: "/SAM_0222.JPG",
      cta: "Shop the Marketplace",
      link: GROWNBY_URL,
    },
    {
      id: "marketplace",
      label: "Marketplace",
      title: "Marketplace Pathway",
      subtitle: "Turning interest into purchasing power and sustainability.",
      body: "The marketplace helps food, dollars, and opportunity circulate locally. It supports produce sales, grower supplies, online ordering, future SNAP-friendly access, and a coordinated distribution model where the food moves through the ecosystem.",
      image: "/SAM_0223.JPG",
      cta: "Visit Marketplace",
      link: GROWNBY_URL,
    },
    {
      id: "grower",
      label: "Grower",
      title: "Grower Pathway",
      subtitle: "Tools, knowledge, demonstrations, and market participation.",
      body: "Growers receive support through supplies, demonstrations, soil knowledge, seedling access, shared learning, and market connection. Bronson Family Farm functions as a growers supply market that reduces isolation and helps people grow successfully.",
      image: "/SAM_0225.JPG",
      cta: "Grow With Us",
    },
    {
      id: "youth",
      label: "Youth Workforce",
      title: "Youth Workforce Pathway",
      subtitle: "More than a job. We are building our future.",
      body: "Youth ages 14–18 build responsibility, teamwork, safety awareness, outdoor work habits, customer service, agriculture knowledge, and leadership. The pathway helps young people see themselves as part of the future food system.",
      image: "/SAM_0226.JPG",
      cta: "Youth Opportunity",
    },
    {
      id: "partners",
      label: "Partners",
      title: "Partner Pathway",
      subtitle: "Aligning resources for community benefit.",
      body: "Partners bring education, health, workforce development, art, culinary training, supplies, funding, and visibility. Each partner strengthens the ecosystem so the farm can serve more people with greater impact.",
      image: "/SAM_0229.JPG",
      cta: "Partner With Us",
    },
    {
      id: "destination",
      label: "Destination",
      title: "Future Agritourism Destination",
      subtitle: "A place people want to visit, learn from, and return to.",
      body: "The future includes camping, youth activities, RC experiences, mini-golf, sensory spaces, food demonstrations, grower education, and family-centered events. The destination grows from the farm’s purpose: food, health, land, learning, and legacy.",
      image: "/GrowArea2.jpg",
      cta: "See the Future",
    },
    {
      id: "feedback",
      label: "Feedback",
      title: "Thank You for Experiencing the Demo",
      subtitle: "Your feedback helps shape what comes next.",
      body: "Bronson Family Farm is building a connected food ecosystem. Please share what was clear, what needs more explanation, and where you see yourself in the ecosystem.",
      image: "/ConnectFoodEcosystem_withimages.jpeg",
      cta: "Share Feedback",
    },
  ],
};

const langOptions: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "tl", label: "Tagalog" },
  { code: "it", label: "Italiano" },
  { code: "he", label: "עברית" },
  { code: "fr", label: "Français" },
];

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [current, setCurrent] = useState(0);
  const [guided, setGuided] = useState(false);

  const ui = translations[lang];
  const slides = slideText.en;
  const slide = slides[current];

  const isFinal = current === slides.length - 1;
  const progress = useMemo(
    () => `${((current + 1) / slides.length) * 100}%`,
    [current]
  );

  useEffect(() => {
    if (!guided) return;

    const timer = setTimeout(() => {
      setCurrent((prev) => {
        if (prev >= slides.length - 1) {
          setGuided(false);
          return prev;
        }
        return prev + 1;
      });
    }, 9500);

    return () => clearTimeout(timer);
  }, [guided, current, slides.length]);

  const goNext = () => {
    setGuided(false);
    setCurrent((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const goBack = () => {
    setGuided(false);
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const goStart = () => {
    setGuided(false);
    setCurrent(0);
  };

  const handleCTA = () => {
    if (slide.link) {
      window.open(slide.link, "_blank");
      return;
    }

    if (slide.id === "feedback") {
      window.location.href =
        "mailto:cburgess@bronsonfamilyfarm.com?subject=Bronson%20Family%20Farm%20Demo%20Feedback";
      return;
    }

    goNext();
  };

  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#182414] text-[#fff8e8]">
      <div className="relative min-h-screen">
        <img
          src={slide.image}
          alt={slide.title}
          className={`absolute inset-0 h-full w-full ${
            slide.id === "ecosystem" || slide.id === "feedback"
              ? "object-contain bg-[#1a2818]"
              : "object-cover"
          }`}
          onError={(e) => {
            e.currentTarget.src = "/ConnectFoodEcosystem_withimages.jpeg";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#14210f]/90 via-[#26361e]/68 to-[#4c3a1f]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10190d]/95 via-transparent to-[#10190d]/50" />

        <header className="relative z-20 flex items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#f0c978]">
              Bronson Family Farm
            </p>
            <h1 className="text-2xl font-semibold md:text-3xl">
              Guided Ecosystem Demo
            </h1>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="rounded-full border border-white/25 bg-[#24331d]/90 px-4 py-2 text-sm font-semibold text-white"
            >
              {langOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>

            <button
              onClick={() => setGuided((prev) => !prev)}
              className="rounded-full bg-[#f0c978] px-5 py-2 text-sm font-bold text-[#17220f] shadow-lg"
            >
              {guided ? ui.pauseTour : ui.startTour}
            </button>
          </div>
        </header>

        <section className="relative z-10 flex min-h-[calc(100vh-88px)] items-end px-6 pb-6">
          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.95fr)_380px]">
            <article className="max-w-5xl rounded-[2rem] border border-white/15 bg-[#13200f]/70 p-6 shadow-2xl backdrop-blur-md md:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#f0c978]/40 bg-[#f0c978]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ffd98b]">
                  {current + 1} / {slides.length}
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#e7d8b8]">
                  {slide.label}
                </span>
              </div>

              <h2 className="max-w-4xl text-4xl font-bold leading-[0.95] text-[#fff8e8] md:text-6xl">
                {slide.title}
              </h2>

              <p className="mt-4 max-w-4xl text-xl font-semibold leading-tight text-[#f0c978] md:text-2xl">
                {slide.subtitle}
              </p>

              <p className="mt-5 max-w-4xl text-lg leading-relaxed text-[#f6ead0] md:text-xl">
                {slide.body}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={handleCTA}
                  className="rounded-full bg-[#f0c978] px-6 py-3 text-sm font-bold text-[#17220f] shadow-xl"
                >
                  {slide.cta}
                </button>

                {isFinal && (
                  <a
                    href="mailto:cburgess@bronsonfamilyfarm.com?subject=Bronson%20Family%20Farm%20Demo%20Feedback"
                    className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white"
                  >
                    {ui.contact}
                  </a>
                )}
              </div>
            </article>

            <aside className="rounded-[2rem] border border-white/15 bg-[#13200f]/70 p-4 shadow-2xl backdrop-blur-md">
              <div className="mb-4">
                <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-[#e7d8b8]">
                  <span>{ui.pathways}</span>
                  <span>{current + 1}/{slides.length}</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full rounded-full bg-[#f0c978] transition-all duration-500"
                    style={{ width: progress }}
                  />
                </div>
              </div>

              <div className="grid max-h-[43vh] gap-2 overflow-y-auto pr-1">
                {slides.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setGuided(false);
                      setCurrent(index);
                    }}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                      current === index
                        ? "border-[#f0c978] bg-[#f0c978] text-[#17220f]"
                        : "border-white/15 bg-white/8 text-[#fff8e8] hover:bg-white/15"
                    }`}
                  >
                    <span className="mr-2 opacity-70">{index + 1}.</span>
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <button
                  onClick={goBack}
                  disabled={current === 0}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-3 text-sm font-bold disabled:opacity-35"
                >
                  {ui.back}
                </button>

                <button
                  onClick={goStart}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-3 text-sm font-bold"
                >
                  {ui.start}
                </button>

                <button
                  onClick={goNext}
                  disabled={current === slides.length - 1}
                  className="rounded-full bg-[#f0c978] px-3 py-3 text-sm font-bold text-[#17220f] disabled:opacity-35"
                >
                  {ui.next}
                </button>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
