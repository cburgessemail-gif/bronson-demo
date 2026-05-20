// src/App.tsx
// Bronson Family Farm Demo Recovery Build
// Self-contained demo: no website button, ecosystem image restored, guided pathway experience.

import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronRight,
  Globe2,
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

const LANGS: { key: Lang; label: string }[] = [
  { key: "en", label: "English" },
  { key: "es", label: "Español" },
  { key: "tl", label: "Tagalog" },
  { key: "it", label: "Italiano" },
  { key: "he", label: "עברית" },
  { key: "fr", label: "Français" },
];

const ui = {
  en: {
    guided: "Guided Tour",
    pause: "Pause Tour",
    next: "Next",
    back: "Back",
    home: "Start",
    pathways: "Pathways",
    feedback: "Feedback",
    title: "Bronson Family Farm",
    subtitle:
      "A connected food ecosystem growing health, opportunity, education, and community in Youngstown, Ohio.",
  },
  es: {
    guided: "Tour Guiado",
    pause: "Pausar",
    next: "Siguiente",
    back: "Atrás",
    home: "Inicio",
    pathways: "Caminos",
    feedback: "Comentarios",
    title: "Bronson Family Farm",
    subtitle:
      "Un ecosistema alimentario conectado que cultiva salud, oportunidad, educación y comunidad.",
  },
  tl: {
    guided: "Guided Tour",
    pause: "Pause",
    next: "Susunod",
    back: "Bumalik",
    home: "Simula",
    pathways: "Pathways",
    feedback: "Feedback",
    title: "Bronson Family Farm",
    subtitle:
      "Isang konektadong food ecosystem para sa kalusugan, oportunidad, edukasyon, at komunidad.",
  },
  it: {
    guided: "Tour Guidato",
    pause: "Pausa",
    next: "Avanti",
    back: "Indietro",
    home: "Inizio",
    pathways: "Percorsi",
    feedback: "Feedback",
    title: "Bronson Family Farm",
    subtitle:
      "Un ecosistema alimentare connesso per salute, opportunità, educazione e comunità.",
  },
  he: {
    guided: "סיור מודרך",
    pause: "עצור",
    next: "הבא",
    back: "חזור",
    home: "התחלה",
    pathways: "מסלולים",
    feedback: "משוב",
    title: "Bronson Family Farm",
    subtitle: "מערכת מזון מחוברת לבריאות, הזדמנות, חינוך וקהילה.",
  },
  fr: {
    guided: "Visite Guidée",
    pause: "Pause",
    next: "Suivant",
    back: "Retour",
    home: "Début",
    pathways: "Parcours",
    feedback: "Commentaires",
    title: "Bronson Family Farm",
    subtitle:
      "Un écosystème alimentaire connecté pour la santé, l’opportunité, l’éducation et la communauté.",
  },
};

const images = {
  entrance: "/GrowArea.jpg",
  place: "/SAM_0223.JPG",
  ecosystem: "/ConnectFoodEcosystem_withimages.jpeg",
  grower: "/SAM_0220.JPG",
  customer: "/SAM_0226.JPG",
  marketplace: "/SAM_0229.JPG",
  youth: "/SAM_0221.JPG",
  partner: "/SAM_0225.JPG",
  value: "/SAM_0222.JPG",
  future: "/GrowArea2.jpg",
};

type Slide = {
  id: string;
  nav: string;
  eyebrow: string;
  title: string;
  image: string;
  icon: any;
  layout: "hero" | "ecosystem" | "pathway" | "closing";
  body: string;
  points: string[];
};

const slides: Slide[] = [
  {
    id: "entrance",
    nav: "Start",
    eyebrow: "Bronson Family Farm • Youngstown, Ohio",
    title: "Step Into the Farm. Experience the Wonders of Life.",
    image: images.entrance,
    icon: Trees,
    layout: "hero",
    body:
      "Bronson Family Farm is a place-based farm experience at the Historic Lansdowne Airport. This demo introduces the farm as a connected food ecosystem where food access, education, health, youth workforce, growers, partners, and marketplace activity work together.",
    points: [
      "A working farm rooted in Youngstown’s East Side",
      "A future agritourism destination",
      "A model for food access, learning, and community revitalization",
    ],
  },
  {
    id: "place",
    nav: "Place",
    eyebrow: "Airport • Land • History • Access",
    title: "A Farm Rooted in Place",
    image: images.place,
    icon: Plane,
    layout: "pathway",
    body:
      "The Historic Lansdowne Airport setting matters. It represents movement, access, innovation, and possibility. Bronson Family Farm uses the land to grow food, teach skills, welcome families, and build a destination experience connected to the history and future of Youngstown.",
    points: [
      "Outdoor growing space becomes community infrastructure",
      "The airport location creates a memorable sense of place",
      "The farm connects land, history, food, education, and economic opportunity",
    ],
  },
  {
    id: "ecosystem",
    nav: "Ecosystem",
    eyebrow: "Food • Knowledge • People • Distribution",
    title: "What Is a Connected Food Ecosystem?",
    image: images.ecosystem,
    icon: Route,
    layout: "ecosystem",
    body:
      "A connected food ecosystem is not one program. It is a coordinated system where growers, customers, youth, partners, education, health, marketplace activity, and distribution support one another. Food, knowledge, and money circulate locally.",
    points: [
      "Growers receive tools, education, market access, and support",
      "Customers receive fresh, local, chemical-free food and nutrition education",
      "Youth receive real workforce experience in a living classroom",
      "Partners align resources around food access, wellness, and opportunity",
      "The food moves — not the farmer — because the system helps coordinate distribution",
    ],
  },
  {
    id: "grower",
    nav: "Grower",
    eyebrow: "Tools • Knowledge • Support • Market Access",
    title: "Grower Pathway",
    image: images.grower,
    icon: Sprout,
    layout: "pathway",
    body:
      "The Grower Pathway helps people grow successfully. A grower may be a backyard gardener, small farmer, community grower, or value-added producer. Bronson Family Farm brings together supplies, demonstrations, education, peer support, and market connection.",
    points: [
      "Learn through hands-on demonstrations",
      "Access tools, supplies, seedlings, and growing knowledge",
      "Connect to customers, schools, organizations, and regional opportunities",
      "Participate in a system where distribution is coordinated and growers are supported",
    ],
  },
  {
    id: "customer",
    nav: "Customer",
    eyebrow: "Fresh Food • Nutrition • Healthy Choices",
    title: "Customer Pathway",
    image: images.customer,
    icon: ShoppingBasket,
    layout: "pathway",
    body:
      "The Customer Pathway focuses on access to fresh, local, chemical-free produce and practical nutrition education. Customers are not only buying food. They are participating in a local system that supports health, families, growers, and community resilience.",
    points: [
      "Access fresh, local, chemical-free produce",
      "Learn how food choices impact health and wellness",
      "Support local growers and community economic circulation",
      "Return to the marketplace for repeat healthy choices",
    ],
  },
  {
    id: "marketplace",
    nav: "Marketplace",
    eyebrow: "Sales • Access • Distribution • Sustainability",
    title: "Marketplace Pathway",
    image: images.marketplace,
    icon: Building2,
    layout: "pathway",
    body:
      "The Marketplace Pathway turns interest into participation and revenue. It connects growers, customers, value-added products, education, and distribution. This is where food access, economic circulation, and sustainability come together.",
    points: [
      "Create a coordinated outlet for growers",
      "Help customers find fresh food and return for future purchases",
      "Support value-added products and new income opportunities",
      "Keep food and money circulating in the local community",
    ],
  },
  {
    id: "youth",
    nav: "Youth",
    eyebrow: "Responsibility • Skills • Leadership • Future Readiness",
    title: "Youth Workforce Pathway",
    image: images.youth,
    icon: Users,
    layout: "pathway",
    body:
      "The Youth Workforce Pathway gives young people ages 14–18 real outdoor work experience. The farm becomes a living classroom where youth learn agriculture, teamwork, safety, communication, responsibility, and leadership while helping feed the community.",
    points: [
      "Build practical work habits through meaningful farm tasks",
      "Learn safety, attendance, communication, and teamwork",
      "Develop confidence through real responsibility",
      "Connect workforce readiness to food, land, and community purpose",
    ],
  },
  {
    id: "partner",
    nav: "Partners",
    eyebrow: "Collaboration • Resources • Demonstrations • Shared Impact",
    title: "Partner Pathway",
    image: images.partner,
    icon: HandHeart,
    layout: "pathway",
    body:
      "The Partner Pathway shows how public, private, nonprofit, education, health, and community partners strengthen the ecosystem. Partners bring tools, knowledge, demonstrations, funding, health education, volunteers, and credibility.",
    points: [
      "Align resources around food access and wellness",
      "Support demonstrations, education, infrastructure, and outreach",
      "Create shared community benefit through collaboration",
      "Help build a destination no single organization can build alone",
    ],
  },
  {
    id: "value",
    nav: "Destination",
    eyebrow: "Agritourism • Value-Added • Family Experience",
    title: "Value-Added and Agritourism Pathway",
    image: images.value,
    icon: Star,
    layout: "pathway",
    body:
      "Bronson Family Farm is growing toward a destination experience. Value-added products, demonstrations, family activities, wellness experiences, youth activities, camping, mini-golf, and farm-based education can help transform the land into a place people return to.",
    points: [
      "Create reasons for families to visit, learn, purchase, and return",
      "Support value-added products and grower income",
      "Build agritourism as part of long-term sustainability",
      "Honor family legacy, culture, food, land, and community pride",
    ],
  },
  {
    id: "future",
    nav: "Future",
    eyebrow: "Food Security • Health • Economic Resilience",
    title: "Why This Matters Now",
    image: images.future,
    icon: Wheat,
    layout: "pathway",
    body:
      "Rising food costs, health disparities, food insecurity, and disconnected systems require new local solutions. Bronson Family Farm demonstrates how agriculture, education, wellness, youth workforce, partners, and marketplace activity can work together to strengthen community resilience.",
    points: [
      "Healthy food access is community infrastructure",
      "Growing food locally builds resilience",
      "Youth and families need places to learn, work, gather, and belong",
      "The ecosystem is a model for a stronger regional food future",
    ],
  },
  {
    id: "thankyou",
    nav: "Thank You",
    eyebrow: "Feedback • Partnership • Participation",
    title: "Thank You for Experiencing Bronson Family Farm",
    image: images.ecosystem,
    icon: BadgeCheck,
    layout: "closing",
    body:
      "This demo is an invitation to understand the vision, respond to the pathway that speaks to you, and help shape the next stage of Bronson Family Farm and Farm & Family Alliance.",
    points: [
      "What did you understand clearly?",
      "Which pathway felt most meaningful?",
      "Where do you see yourself or your organization participating?",
      "What support, partnership, or investment could help this grow?",
    ],
  },
];

const pathwayIds = ["grower", "customer", "marketplace", "youth", "partner", "value"];

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [current, setCurrent] = useState(0);
  const [guided, setGuided] = useState(false);

  const t = ui[lang];
  const slide = slides[current];
  const Icon = slide.icon;
  const isHebrew = lang === "he";

  const pathwaySlides = useMemo(
    () => slides.filter((s) => pathwayIds.includes(s.id)),
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
    }, 13500);

    return () => window.clearTimeout(timer);
  }, [guided, current]);

  const go = (index: number) => {
    setCurrent(Math.max(0, Math.min(index, slides.length - 1)));
  };

  const next = () => go(current + 1);
  const back = () => go(current - 1);

  const progress = ((current + 1) / slides.length) * 100;

  return (
    <main
      dir={isHebrew ? "rtl" : "ltr"}
      className="relative h-screen w-screen overflow-hidden bg-[#132016] text-white"
    >
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#102015]/95 via-[#23391f]/88 to-[#62451f]/88" />
      <div className="absolute inset-0 bg-black/25" />

      <section className="relative z-10 flex h-full flex-col">
        <header className="flex items-start justify-between gap-5 px-7 py-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-lime-200">
              <Leaf size={16} />
              {slide.eyebrow}
            </div>

            <h1 className="mt-1 text-4xl font-black tracking-tight md:text-5xl">
              {current === 0 ? t.title : slide.title}
            </h1>

            <p className="mt-2 max-w-4xl text-base leading-relaxed text-white/90 md:text-lg">
              {current === 0 ? t.subtitle : slide.body}
            </p>
          </div>

          <div className="flex max-w-md flex-wrap justify-end gap-2">
            {LANGS.map((item) => (
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

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 px-7 pb-3 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex min-h-0 flex-col justify-center">
            <div className="rounded-[1.8rem] border border-white/15 bg-black/35 p-5 shadow-2xl backdrop-blur-md">
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-2xl bg-white/15 p-4 ring-1 ring-white/20">
                  <Icon size={32} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-200">
                    {slide.nav}
                  </p>
                  <h2 className="text-3xl font-black md:text-4xl">
                    {slide.title}
                  </h2>
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

              {slide.id === "thankyou" && (
                <div className="mt-4 rounded-2xl border border-lime-200/30 bg-lime-200/15 p-4 text-base font-semibold text-lime-50">
                  Contact: Constance Burgess • 330-275-1604 •
                  cburgess@bronsonfamilyfarm.com
                </div>
              )}
            </div>
          </div>

          <div className="flex min-h-0 flex-col justify-center gap-3">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/20 bg-black/30 shadow-2xl">
              <img
                src={slide.image}
                alt={slide.title}
                className={`h-[48vh] w-full ${
                  slide.layout === "ecosystem" || slide.layout === "closing"
                    ? "object-contain bg-white/95 p-3"
                    : "object-cover"
                }`}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                <p className="text-xl font-black">{slide.nav}</p>
                <p className="text-sm text-white/80">
                  {current + 1} of {slides.length}
                </p>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/15 bg-black/35 p-4 backdrop-blur-md">
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
              style={{ width: `${progress}%` }}
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

              <button
                onClick={() => go(2)}
                className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 text-sm font-black ring-1 ring-white/15 hover:bg-black/65"
              >
                <Globe2 size={17} />
                Ecosystem
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

              <a
                href="mailto:cburgess@bronsonfamilyfarm.com?subject=Bronson%20Family%20Farm%20Demo%20Feedback"
                className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 text-sm font-black ring-1 ring-white/15 hover:bg-black/65"
              >
                <Mail size={17} />
                {t.feedback}
              </a>

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
