// ===============================
// UPDATED BRONSON FAMILY FARM DEMO
// POLISHED EXPERIENCE VERSION
// Replace entire App.tsx
// ===============================

import { useEffect, useState } from "react";

const languages = {
  English: {
    title: "Connected Food Ecosystem Experience",
    enter: "Enter the Farm",
    begin: "Begin Guided Tour",
    next: "Next",
    back: "Back",
    start: "Start",
    intro: [
      "Historic Lansdowne Airport",
      "Youngstown, Ohio",
      "118+ acres of growing opportunity",
      "Food. Knowledge. Workforce. Community.",
      "A connected ecosystem designed to circulate resources locally."
    ]
  },

  Español: {
    title: "Experiencia del Ecosistema Alimentario Conectado",
    enter: "Entrar a la Granja",
    begin: "Comenzar Recorrido Guiado",
    next: "Siguiente",
    back: "Atrás",
    start: "Inicio",
    intro: [
      "Aeropuerto Histórico Lansdowne",
      "Youngstown, Ohio",
      "Más de 118 acres de oportunidad agrícola",
      "Alimentos. Conocimiento. Fuerza laboral. Comunidad.",
      "Un ecosistema conectado diseñado para circular recursos localmente."
    ]
  },

  Tagalog: {
    title: "Konektadong Karanasan sa Ecosystem ng Pagkain",
    enter: "Pumasok sa Bukid",
    begin: "Simulan ang Guided Tour",
    next: "Susunod",
    back: "Bumalik",
    start: "Simula",
    intro: [
      "Makasaysayang Lansdowne Airport",
      "Youngstown, Ohio",
      "Mahigit 118 acres ng oportunidad",
      "Pagkain. Kaalaman. Trabaho. Komunidad.",
      "Isang konektadong ecosystem para sa lokal na komunidad."
    ]
  }
};

const slides = [
  {
    title: "1. Bronson Family Farm",
    image: "/images/ConnectFoodEcosystem_withimages.jpeg",
    content: "intro"
  },

  {
    title: "2. Connected Ecosystem",
    image: "/images/ConnectFoodEcosystem_withimages.jpeg",
    content:
      "Bronson Family Farm is a connected ecosystem where growers, families, youth, businesses, schools, and partners work together to strengthen food access and community resilience."
  },

  {
    title: "3. Explore the Farm",
    image: "/images/GrowArea.jpg",
    content:
      "Explore the Historic Lansdowne Airport growing areas. Learn how place-based agriculture transforms land into opportunity, education, nutrition, and economic circulation."
  },

  {
    title: "4. Guest",
    image: "/images/SAM_0220.JPG",
    content:
      "Guests experience a working farm ecosystem focused on food access, education, wellness, and community participation."
  },

  {
    title: "5. Customer",
    image: "/images/SAM_0221.JPG",
    content:
      "Customers gain access to fresh, local, chemical-free produce while supporting a community-centered food system."
  },

  {
    title: "6. Marketplace",
    image: "/images/SAM_0222.JPG",
    content:
      "The marketplace circulates food locally so growers can focus on growing while the ecosystem manages coordination and distribution."
  },

  {
    title: "7. Grower",
    image: "/images/SAM_0223.JPG",
    content:
      "Growers receive support, education, tools, visibility, and access to shared market opportunities."
  },

  {
    title: "8. Youth Workforce",
    image: "/images/SAM_0225.JPG",
    content:
      "Youth workforce pathways build leadership, responsibility, agriculture skills, entrepreneurship, and future readiness."
  },

  {
    title: "9. Partner",
    image: "/images/SAM_0226.JPG",
    content:
      "Partners strengthen the ecosystem through education, investment, collaboration, infrastructure, and shared impact."
  },

  {
    title: "10. Value-Added",
    image: "/images/SAM_0229.JPG",
    content:
      "Value-added opportunities include culinary production, preservation, agritourism, events, wellness programming, and future expansion."
  },

  {
    title: "11. Thank You",
    image: "/images/ConnectFoodEcosystem_withimages.jpeg",
    content:
      "Thank you for experiencing the Bronson Family Farm ecosystem. Your feedback, participation, and partnership help grow stronger communities."
  }
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [guided, setGuided] = useState(false);
  const [language, setLanguage] = useState("English");

  const lang = languages[language];

  useEffect(() => {
    if (!guided) return;

    const timing =
      current === 1 ||
      current === 6 ||
      current === 8
        ? 9000
        : 6500;

    const timer = setTimeout(() => {
      setCurrent((prev) =>
        prev < slides.length - 1 ? prev + 1 : prev
      );
    }, timing);

    return () => clearTimeout(timer);
  }, [current, guided]);

  const slide = slides[current];

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">

      {/* TOP HEADER */}

      <div className="px-10 pt-8 flex justify-between items-start">

        <div>
          <div className="tracking-[6px] text-[#d6b36a] text-sm font-semibold mb-3">
            BRONSON FAMILY FARM DEMO
          </div>

          <h1 className="text-5xl md:text-6xl leading-[0.95] font-light max-w-4xl">
            {lang.title}
          </h1>
        </div>

        {/* LANGUAGE */}

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent text-white outline-none text-lg"
          >
            {Object.keys(languages).map((l) => (
              <option key={l} value={l} className="text-black">
                {l}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* PROGRESS */}

      <div className="px-10 mt-6">
        <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
          <div
            className="h-full bg-[#9acd32] transition-all duration-700"
            style={{
              width: `${((current + 1) / slides.length) * 100}%`
            }}
          />
        </div>
      </div>

      {/* PATHWAYS */}

      <div className="px-10 mt-5 flex flex-wrap gap-3">

        {slides.map((s, i) => {

          const active = i === current;
          const completed = i < current;

          return (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`
                px-5 py-3 rounded-full border transition-all duration-500
                ${
                  active
                    ? "bg-[#c99852] border-[#f3d39a] text-white shadow-lg shadow-[#c99852]/40"
                    : completed
                    ? "bg-[#446b2c] border-[#9acd32] text-white"
                    : "bg-[#1f1f1f] border-white/20 text-white hover:bg-[#2f2f2f]"
                }
              `}
            >
              {s.title}
            </button>
          );
        })}
      </div>

      {/* MAIN EXPERIENCE */}

      <div className="grid lg:grid-cols-2 gap-8 px-10 pt-8 pb-10 items-center">

        {/* LEFT PANEL */}

        <div className="bg-[#050505] border border-white/10 rounded-[30px] p-10">

          <div className="tracking-[6px] text-[#d6b36a] text-sm font-semibold mb-4">
            BRONSON FAMILY FARM DEMO
          </div>

          <h2 className="text-6xl leading-[0.95] font-light mb-8">
            {lang.enter}
          </h2>

          {/* CONTENT */}

          {slide.content === "intro" ? (

            <div className="space-y-6 text-3xl leading-tight font-light">

              {lang.intro.map((line, i) => (
                <div
                  key={i}
                  className="animate-fadeIn"
                >
                  {line}
                </div>
              ))}

            </div>

          ) : (

            <div className="text-2xl leading-relaxed text-white/90">
              {slide.content}
            </div>

          )}

          {/* CONTROLS */}

          <div className="flex flex-wrap gap-4 mt-10">

            <button
              onClick={() => setCurrent(0)}
              className="px-8 py-4 rounded-full bg-[#1f1f1f] border border-white/20 hover:bg-[#2f2f2f]"
            >
              {lang.start}
            </button>

            <button
              onClick={() =>
                setCurrent((prev) =>
                  prev > 0 ? prev - 1 : 0
                )
              }
              className="px-8 py-4 rounded-full bg-[#1f1f1f] border border-white/20 hover:bg-[#2f2f2f]"
            >
              {lang.back}
            </button>

            <button
              onClick={() =>
                setCurrent((prev) =>
                  prev < slides.length - 1
                    ? prev + 1
                    : prev
                )
              }
              className="px-8 py-4 rounded-full bg-[#c99852] hover:bg-[#ddb375]"
            >
              {lang.next}
            </button>

            <button
              onClick={() => setGuided(!guided)}
              className={`px-8 py-4 rounded-full transition-all duration-500 ${
                guided
                  ? "bg-[#9acd32] text-black"
                  : "bg-[#3f7f1f]"
              }`}
            >
              {guided
                ? "Pause Guided Tour"
                : lang.begin}
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}

        <div className="relative mt-6 lg:mt-16">

          <div className="absolute inset-0 bg-black/20 rounded-[30px]" />

          <img
            src={slide.image}
            alt={slide.title}
            className="
              w-full
              h-[700px]
              object-cover
              rounded-[30px]
              border
              border-white/10
              brightness-110
              contrast-110
            "
          />

          {/* SLIDE COUNTER */}

          <div className="absolute top-5 right-5 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-sm">
            {current + 1} / {slides.length}
          </div>

        </div>
      </div>
    </div>
  );
}
