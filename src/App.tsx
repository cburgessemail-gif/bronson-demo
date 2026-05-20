// src/App.tsx
// Bronson Family Farm Final Ecosystem Demo

import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronRight,
  HandHeart,
  Home,
  Leaf,
  Mail,
  MapPin,
  Pause,
  Plane,
  Play,
  Route,
  ShoppingBasket,
  Sprout,
  Star,
  Trees,
  Users,
  Wheat,
} from "lucide-react";

type Lang = "en" | "es" | "tl" | "it" | "he" | "fr";

const LANGS = [
  { key: "en", label: "English" },
  { key: "es", label: "Español" },
  { key: "tl", label: "Tagalog" },
  { key: "it", label: "Italiano" },
  { key: "he", label: "עברית" },
  { key: "fr", label: "Français" },
];

const images = {
  entrance: "/GrowArea.jpg",
  place: "/SAM_0223.JPG",
  ecosystem: "/ConnectFoodEcosystem_withimages.jpeg",
  grower: "/SAM_0220.JPG",
  customer: "/SAM_0226.JPG",
  marketplace: "/SAM_0229.JPG",
  youth: "/SAM_0221.JPG",
  partners: "/SAM_0225.JPG",
  destination: "/SAM_0222.JPG",
  future: "/GrowArea2.jpg",
};

const translations: any = {
  en: {
    guided: "Guided Tour",
    pause: "Pause Tour",
    next: "Next",
    back: "Back",
    home: "Start",
    pathways: "Pathways",
    feedback: "Send Feedback",
    finalQuestion: "Where do you see yourself in the ecosystem?",
  },
  es: {
    guided: "Tour Guiado",
    pause: "Pausar",
    next: "Siguiente",
    back: "Atrás",
    home: "Inicio",
    pathways: "Caminos",
    feedback: "Enviar Comentarios",
    finalQuestion: "¿Dónde se ve usted en el ecosistema?",
  },
  tl: {
    guided: "Guided Tour",
    pause: "Pause",
    next: "Susunod",
    back: "Bumalik",
    home: "Simula",
    pathways: "Pathways",
    feedback: "Feedback",
    finalQuestion: "Saan mo nakikita ang sarili mo sa ecosystem?",
  },
  it: {
    guided: "Tour Guidato",
    pause: "Pausa",
    next: "Avanti",
    back: "Indietro",
    home: "Inizio",
    pathways: "Percorsi",
    feedback: "Feedback",
    finalQuestion: "Dove ti vedi nell’ecosistema?",
  },
  he: {
    guided: "סיור מודרך",
    pause: "עצור",
    next: "הבא",
    back: "חזור",
    home: "התחלה",
    pathways: "מסלולים",
    feedback: "שלח משוב",
    finalQuestion: "איפה אתה רואה את עצמך במערכת?",
  },
  fr: {
    guided: "Visite Guidée",
    pause: "Pause",
    next: "Suivant",
    back: "Retour",
    home: "Début",
    pathways: "Parcours",
    feedback: "Commentaires",
    finalQuestion: "Où vous voyez-vous dans l’écosystème ?",
  },
};

type Slide = {
  id: string;
  nav: string;
  title: string;
  eyebrow: string;
  body: string;
  image: string;
  icon: any;
  pathway?: string;
  points: string[];
  decision?: string[];
};

const slides: Slide[] = [
  {
    id: "start",
    nav: "Start",
    title: "Step Into the Farm. Experience the Wonders of Life.",
    eyebrow: "Bronson Family Farm • Youngstown, Ohio",
    body:
      "Bronson Family Farm is a connected food ecosystem where growers, customers, youth, partners, education, wellness, and marketplace activity work together to strengthen community resilience.",
    image: images.entrance,
    icon: Trees,
    points: [
      "A working farm rooted in Youngstown’s East Side",
      "A future agritourism destination",
      "Food access, learning, wellness, and community revitalization",
    ],
  },

  {
    id: "place",
    nav: "Place",
    title: "A Farm Rooted in Place",
    eyebrow: "Airport • Land • History • Access",
    body:
      "The Historic Lansdowne Airport setting represents movement, innovation, and possibility. Bronson Family Farm transforms open land into productive growing space and community infrastructure.",
    image: images.place,
    icon: Plane,
    points: [
      "Outdoor growing space becomes community infrastructure",
      "The airport creates a memorable sense of place",
      "The farm connects land, food, education, and opportunity",
    ],
  },

  {
    id: "ecosystem",
    nav: "Ecosystem",
    title: "What Is a Connected Food Ecosystem?",
    eyebrow: "Food • Knowledge • People • Distribution",
    body:
      "A connected food ecosystem is a coordinated system where growers, customers, youth, education, health, marketplace activity, and distribution support one another. Food, knowledge, and money circulate locally.",
    image: images.ecosystem,
    icon: Route,
    points: [
      "Growers receive support, education, and market access",
      "Customers receive fresh, local, chemical-free food",
      "Youth receive workforce experience in a living classroom",
      "Partners align resources around food access and wellness",
      "The food moves — not the farmer — because distribution is coordinated",
    ],
  },

  {
    id: "grower",
    pathway: "grower",
    nav: "Grower",
    title: "Grower Pathway",
    eyebrow: "Tools • Knowledge • Market Access",
    body:
      "The Grower Pathway helps people grow successfully through demonstrations, supplies, support, and coordinated marketplace access.",
    image: images.grower,
    icon: Sprout,
    points: [
      "Learn through hands-on demonstrations",
      "Access seedlings, tools, and knowledge",
      "Connect to markets and customers",
      "Participate in a coordinated ecosystem",
    ],
    decision: [
      "I want to grow food",
      "I want to learn how to grow",
      "I already grow and want support",
      "I want market access",
    ],
  },

  {
    id: "customer",
    pathway: "customer",
    nav: "Customer",
    title: "Customer Pathway",
    eyebrow: "Fresh Food • Nutrition • Wellness",
    body:
      "The Customer Pathway connects families to fresh, local, chemical-free produce while strengthening local growers and community food access.",
    image: images.customer,
    icon: ShoppingBasket,
    points: [
      "Access healthier food choices",
      "Support local growers",
      "Learn practical nutrition",
      "Return to the marketplace experience",
    ],
    decision: [
      "I want healthier food choices",
      "I want to support local growers",
      "I want to feed my family better",
      "I want to return to this marketplace",
    ],
  },

  {
    id: "marketplace",
    pathway: "marketplace",
    nav: "Marketplace",
    title: "Marketplace Pathway",
    eyebrow: "Circulation • Sustainability • Distribution",
    body:
      "The marketplace connects growers, customers, value-added products, and distribution. It keeps food and money circulating locally.",
    image: images.marketplace,
    icon: Building2,
    points: [
      "Food reaches customers through coordinated distribution",
      "Growers are supported instead of isolated",
      "Value-added products create new opportunities",
      "Local circulation strengthens sustainability",
    ],
    decision: [
      "I want to participate in the local food economy",
      "I want to buy local",
      "I want to support food access",
      "I want to help strengthen the marketplace",
    ],
  },

  {
    id: "youth",
    pathway: "youth",
    nav: "Youth Workforce",
    title: "Youth Workforce Pathway",
    eyebrow: "Leadership • Skills • Responsibility",
    body:
      "Youth ages 14–18 gain real workforce experience while helping feed the community. The farm becomes a living classroom.",
    image: images.youth,
    icon: Users,
    points: [
      "Learn responsibility and teamwork",
      "Build confidence through meaningful work",
      "Develop workforce readiness",
      "Connect food, purpose, and community",
    ],
    decision: [
      "I want my child involved",
      "I want workforce experience",
      "I want to mentor youth",
      "I want to support youth opportunities",
    ],
  },

  {
    id: "partners",
    pathway: "partners",
    nav: "Partners",
    title: "Partner Pathway",
    eyebrow: "Collaboration • Shared Impact",
    body:
      "Partners strengthen the ecosystem through demonstrations, resources, health education, infrastructure, funding, and collaboration.",
    image: images.partners,
    icon: HandHeart,
    points: [
      "Align resources around wellness and food access",
      "Support infrastructure and outreach",
      "Create measurable community benefit",
      "Build together instead of alone",
    ],
    decision: [
      "I see where my organization fits",
      "I want to collaborate",
      "I want to sponsor or support",
      "I want to bring resources or demonstrations",
    ],
  },

  {
    id: "destination",
    pathway: "destination",
    nav: "Destination",
    title: "Agritourism and Destination Pathway",
    eyebrow: "Experience • Family • Community",
    body:
      "Bronson Family Farm is growing toward a destination experience where families can learn, gather, experience nature, and return.",
    image: images.destination,
    icon: Star,
    points: [
      "Family activities and demonstrations",
      "Value-added products and experiences",
      "Agritourism and wellness opportunities",
      "A place people return to",
    ],
    decision: [
      "I want to visit",
      "I want to bring my family",
      "I want to experience the farm",
      "I want to help build this destination",
    ],
  },

  {
    id: "future",
    nav: "Future",
    title: "Why This Matters Now",
    eyebrow: "Food Security • Wellness • Resilience",
    body:
      "Rising food costs, food insecurity, and disconnected systems require local solutions. Bronson Family Farm demonstrates how agriculture, education, wellness, workforce development, and marketplace activity can strengthen communities.",
    image: images.future,
    icon: Wheat,
    points: [
      "Healthy food access is community infrastructure",
      "Growing food locally builds resilience",
      "Youth and families need places to belong",
      "The ecosystem is a model for regional food sustainability",
    ],
  },

  {
    id: "thankyou",
    nav: "Thank You",
    title: "Thank You for Experiencing Bronson Family Farm",
    eyebrow: "Feedback • Participation • Partnership",
    body:
      "This demo is an invitation to understand the ecosystem and discover where you belong within it.",
    image: images.ecosystem,
    icon: BadgeCheck,
    points: [
      "What pathway connected with you most?",
      "Where do you see yourself participating?",
      "What questions or ideas do you have?",
      "How can we continue the conversation?",
    ],
  },
];

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [current, setCurrent] = useState(0);
  const [guided, setGuided] = useState(false);

  const slide = slides[current];
  const t = translations[lang];
  const Icon = slide.icon;

  const isHebrew = lang === "he";
  const isEcosystem = slide.id === "ecosystem" || slide.id === "thankyou";

  const pathwaySlides = useMemo(
    () => slides.filter((s) => s.pathway),
    []
  );

  useEffect(() => {
    if (!guided) return;

    const timer = window.setTimeout(() => {
      setCurrent((prev) => {
        if (prev >= slides.length - 1) {
          setGuided(false);
          return prev;
        }
        return prev + 1;
      });
    }, 15000);

    return () => window.clearTimeout(timer);
  }, [guided, current]);

  const next = () =>
    setCurrent((prev) => Math.min(prev + 1, slides.length - 1));

  const back = () =>
    setCurrent((prev) => Math.max(prev - 1, 0));

  const go = (index: number) => setCurrent(index);

  return (
    <main
      dir={isHebrew ? "rtl" : "ltr"}
      className="relative h-screen w-screen overflow-hidden bg-[#132016] text-white"
    >
      {!isEcosystem && (
        <img
          src={slide.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-[#102015] via-[#243a21] to-[#674a21]" />
      <div className="absolute inset-0 bg-black/25" />

      <section className="relative z-10 flex h-full flex-col">

        <header className="flex items-start justify-between gap-6 px-7 py-4">

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-lime-200">
              <Leaf size={16} />
              {slide.eyebrow}
            </div>

            <h1 className="mt-1 text-3xl font-black tracking-tight md:text-5xl">
              {slide.title}
            </h1>

            <p className="mt-3 max-w-4xl text-base leading-relaxed text-white/90 md:text-lg">
              {slide.body}
            </p>
          </div>

          <div className="flex max-w-md flex-wrap justify-end gap-2">
            {LANGS.map((item: any) => (
              <button
                key={item.key}
                onClick={() => setLang(item.key)}
                className={`rounded-full border px-3 py-1 text-xs font-bold backdrop-blur ${
                  lang === item.key
                    ? "border-white bg-white text-[#132016]"
                    : "border-white/25 bg-black/25 text-white hover:bg-white/15"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </header>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 px-7 pb-3 lg:grid-cols-[0.7fr_1.3fr]">

          <div className="flex min-h-0 flex-col justify-center">

            <div className="rounded-[1.8rem] border border-white/15 bg-black/25 p-5 shadow-2xl backdrop-blur-md">

              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-2xl bg-white/15 p-4 ring-1 ring-white/20">
                  <Icon size={32} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-200">
                    {slide.nav}
                  </p>

                  {!isEcosystem && (
                    <h2 className="text-2xl font-black md:text-3xl">
                      {slide.title}
                    </h2>
                  )}
                </div>
              </div>

              <div className="grid gap-2">
                {slide.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex gap-3 rounded-2xl bg-white/10 p-3 text-sm leading-relaxed ring-1 ring-white/10 md:text-base"
                  >
                    <ChevronRight className="mt-1 shrink-0 text-lime-200" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>

              {slide.decision && (
                <div className="mt-5">
                  <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-lime-200">
                    Possible Next Step
                  </div>

                  <div className="grid gap-2">
                    {slide.decision.map((d, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-lime-200/20 bg-lime-200/10 px-4 py-3 text-sm font-semibold text-lime-50"
                      >
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.id === "thankyou" && (
                <div className="mt-6 space-y-3">

                  <div className="rounded-2xl border border-lime-200/25 bg-lime-200/10 p-4">
                    <div className="text-lg font-black text-lime-100">
                      {t.finalQuestion}
                    </div>
                  </div>

                  <div className="grid gap-2">

                    <button className="rounded-xl bg-white/10 px-4 py-3 text-left font-semibold hover:bg-white/20">
                      I want to grow food
                    </button>

                    <button className="rounded-xl bg-white/10 px-4 py-3 text-left font-semibold hover:bg-white/20">
                      I want healthier food choices
                    </button>

                    <button className="rounded-xl bg-white/10 px-4 py-3 text-left font-semibold hover:bg-white/20">
                      I want my youth involved
                    </button>

                    <button className="rounded-xl bg-white/10 px-4 py-3 text-left font-semibold hover:bg-white/20">
                      I want to collaborate or partner
                    </button>

                    <button className="rounded-xl bg-white/10 px-4 py-3 text-left font-semibold hover:bg-white/20">
                      I want to support the destination vision
                    </button>

                  </div>

                  <div className="rounded-2xl border border-lime-200/25 bg-lime-200/10 p-4">
                    <div className="text-sm text-lime-50">
                      Share this experience with others and continue the conversation.
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">

                      <a
                        href="mailto:?subject=Bronson Family Farm Ecosystem Demo"
                        className="rounded-xl bg-white px-4 py-2 text-sm font-black text-[#172111]"
                      >
                        Share by Email
                      </a>

                      <a
                        href="sms:&body=Take a look at the Bronson Family Farm ecosystem demo."
                        className="rounded-xl bg-white px-4 py-2 text-sm font-black text-[#172111]"
                      >
                        Share by Text
                      </a>

                    </div>

                    <div className="mt-5 rounded-xl bg-black/25 p-4">
                      <div className="text-sm font-bold uppercase tracking-[0.2em] text-lime-200">
                        Contact & Feedback
                      </div>

                      <div className="mt-2 text-sm">
                        Constance Burgess
                      </div>

                      <div className="text-sm">
                        330-275-1604
                      </div>

                      <div className="text-sm">
                        cburgess@bronsonfamilyfarm.com
                      </div>

                      <a
                        href="mailto:cburgess@bronsonfamilyfarm.com?subject=Bronson%20Family%20Farm%20Demo%20Feedback"
                        className="mt-4 inline-flex rounded-xl bg-lime-300 px-4 py-2 text-sm font-black text-[#172111]"
                      >
                        {t.feedback}
                      </a>
                    </div>
                  </div>

                </div>
              )}
            </div>
          </div>

          <div className="flex min-h-0 flex-col justify-center gap-3">

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/20 bg-black/20 shadow-2xl">

              <img
                src={slide.image}
                alt={slide.title}
                className={`h-[62vh] w-full ${
                  isEcosystem
                    ? "object-contain bg-transparent"
                    : "object-cover"
                }`}
              />

              {!isEcosystem && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                  <p className="text-xl font-black">{slide.nav}</p>

                  <p className="text-sm text-white/80">
                    {current + 1} of {slides.length}
                  </p>
                </div>
              )}
            </div>

            <div className="rounded-[1.8rem] border border-white/15 bg-black/25 p-4 backdrop-blur-md">

              <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-lime-200">
                <Route size={16} />
                {t.pathways}
              </div>

              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">

                {pathwaySlides.map((p) => {
                  const PIcon = p.icon;
                  const index = slides.findIndex((s) => s.id === p.id);

                  return (
                    <button
                      key={p.id}
                      onClick={() => go(index)}
                      className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-xs font-bold transition md:text-sm ${
                        current === index
                          ? "border-lime-200 bg-lime-200 text-[#172111]"
                          : "border-white/15 bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      <PIcon size={15} />
                      {p.nav}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <footer className="px-7 pb-4">

          <div className="mb-3 h-2 overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-lime-300 transition-all duration-500"
              style={{
                width: `${((current + 1) / slides.length) * 100}%`,
              }}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">

            <div className="flex flex-wrap items-center gap-2">

              <button
                onClick={back}
                disabled={current === 0}
                className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 text-sm font-black ring-1 ring-white/15 hover:bg-black/65 disabled:opacity-35"
              >
                <ArrowLeft size={17} />
                {t.back}
              </button>

              <button
                onClick={next}
                disabled={current === slides.length - 1}
                className="flex items-center gap-2 rounded-2xl bg-lime-300 px-5 py-3 text-sm font-black text-[#172111] hover:bg-lime-200 disabled:opacity-35"
              >
                {t.next}
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => go(0)}
                className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 text-sm font-black ring-1 ring-white/15 hover:bg-black/65"
              >
                <Home size={17} />
                {t.home}
              </button>

            </div>

            <div className="flex flex-wrap items-center gap-2">

              <button
                onClick={() => setGuided((v) => !v)}
                className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-[#172111] hover:bg-lime-100"
              >
                {guided ? <Pause size={17} /> : <Play size={17} />}
                {guided ? t.pause : t.guided}
              </button>

              <div className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 text-sm font-black ring-1 ring-white/15">
                <MapPin size={17} />
                Youngstown, Ohio
              </div>

            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
