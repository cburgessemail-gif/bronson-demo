import React, { useEffect, useMemo, useRef, useState } from "react";
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
  RotateCcw,
  Route,
  ShoppingBasket,
  Sprout,
  Star,
  Tractor,
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

const text = {
  en: {
    enter: "Enter the Farm Experience",
    guided: "Guided Tour",
    pause: "Pause",
    next: "Next",
    back: "Back",
    start: "Start",
    jump: "Jump to Pathways",
    feedback: "Share Feedback",
    home: "Home",
    title: "Bronson Family Farm",
    subtitle:
      "A connected food ecosystem growing health, opportunity, education, and community in Youngstown, Ohio.",
  },
  es: {
    enter: "Entrar a la experiencia",
    guided: "Tour guiado",
    pause: "Pausa",
    next: "Siguiente",
    back: "Atrás",
    start: "Inicio",
    jump: "Ver caminos",
    feedback: "Comentarios",
    home: "Inicio",
    title: "Bronson Family Farm",
    subtitle:
      "Un ecosistema alimentario conectado que cultiva salud, oportunidad, educación y comunidad.",
  },
  tl: {
    enter: "Pumasok sa Karanasan",
    guided: "Guided Tour",
    pause: "Pause",
    next: "Susunod",
    back: "Bumalik",
    start: "Simula",
    jump: "Pathways",
    feedback: "Feedback",
    home: "Home",
    title: "Bronson Family Farm",
    subtitle:
      "Isang konektadong food ecosystem para sa kalusugan, oportunidad, edukasyon, at komunidad.",
  },
  it: {
    enter: "Entra nell’esperienza",
    guided: "Tour guidato",
    pause: "Pausa",
    next: "Avanti",
    back: "Indietro",
    start: "Inizio",
    jump: "Percorsi",
    feedback: "Feedback",
    home: "Home",
    title: "Bronson Family Farm",
    subtitle:
      "Un ecosistema alimentare connesso per salute, opportunità, educazione e comunità.",
  },
  he: {
    enter: "היכנסו לחוויה",
    guided: "סיור מודרך",
    pause: "עצור",
    next: "הבא",
    back: "חזור",
    start: "התחלה",
    jump: "מסלולים",
    feedback: "משוב",
    home: "בית",
    title: "Bronson Family Farm",
    subtitle:
      "מערכת מזון מחוברת לבריאות, הזדמנות, חינוך וקהילה.",
  },
  fr: {
    enter: "Entrer dans l’expérience",
    guided: "Visite guidée",
    pause: "Pause",
    next: "Suivant",
    back: "Retour",
    start: "Début",
    jump: "Parcours",
    feedback: "Commentaires",
    home: "Accueil",
    title: "Bronson Family Farm",
    subtitle:
      "Un écosystème alimentaire connecté pour la santé, l’opportunité, l’éducation et la communauté.",
  },
};

type Slide = {
  id: string;
  label: string;
  title: string;
  eyebrow: string;
  image: string;
  icon: any;
  tone: string;
  points: string[];
  body: string;
  cta?: string;
};

const slides: Slide[] = [
  {
    id: "entrance",
    label: "Entrance",
    title: "Step Into the Farm. Experience the Wonders of Life.",
    eyebrow: "Bronson Family Farm • Youngstown, Ohio",
    image: images.entrance,
    icon: Trees,
    tone: "from-emerald-950/95 via-lime-950/80 to-amber-950/90",
    body:
      "This demo introduces Bronson Family Farm as a place-based, working farm and future agritourism destination. The experience begins with land, food, history, health, and community coming together.",
    points: [
      "Historic Lansdowne Airport setting",
      "Outdoor growing, education, and community participation",
      "A living model for local food access and opportunity",
    ],
    cta: "Begin the guided ecosystem experience",
  },
  {
    id: "place",
    label: "Place",
    title: "A Farm Rooted in Place",
    eyebrow: "Airport • Land • History • Access",
    image: images.place,
    icon: Plane,
    tone: "from-stone-950/95 via-emerald-950/75 to-sky-950/80",
    body:
      "Bronson Family Farm is located at the Historic Lansdowne Airport, a private functioning airfield in Youngstown. The site represents movement, connection, and possibility. Open land becomes productive growing space, and the airport story becomes part of a larger community future.",
    points: [
      "The farm connects agriculture with place-based revitalization",
      "The site supports outdoor growing, education, gathering, and demonstration",
      "The long-term vision includes agritourism, family activities, wellness, and destination experiences",
    ],
  },
  {
    id: "ecosystem",
    label: "Ecosystem",
    title: "What Is a Connected Food Ecosystem?",
    eyebrow: "Food • Knowledge • People • Distribution",
    image: images.ecosystem,
    icon: Route,
    tone: "from-green-950/95 via-emerald-900/75 to-yellow-950/80",
    body:
      "A connected food ecosystem is not one program. It is a coordinated system where growers, customers, youth, partners, markets, education, wellness, and distribution work together. Food, knowledge, and money circulate locally instead of leaving the community.",
    points: [
      "Growers receive tools, education, markets, and support",
      "Customers receive fresh, local, chemical-free food and health education",
      "Youth gain workforce experience while helping feed the community",
      "Partners align resources around food access, wellness, and opportunity",
    ],
    cta: "Select a pathway or continue the guided tour",
  },
  {
    id: "grower",
    label: "Grower",
    title: "Grower Pathway",
    eyebrow: "Tools • Knowledge • Support • Market Access",
    image: images.grower,
    icon: Sprout,
    tone: "from-lime-950/95 via-green-900/75 to-emerald-950/90",
    body:
      "The grower pathway helps people grow successfully. A grower may be a backyard gardener, small farmer, community grower, value-added producer, or someone learning how to begin. Bronson Family Farm brings together supplies, demonstrations, education, and market connection.",
    points: [
      "Growers learn through demonstrations and hands-on instruction",
      "The farm helps connect growers to customers, schools, organizations, and regional opportunities",
      "The food moves — not the farmer — because the ecosystem helps organize distribution",
      "The goal is to make growing possible, practical, and economically meaningful",
    ],
  },
  {
    id: "customer",
    label: "Customer",
    title: "Customer Pathway",
    eyebrow: "Fresh Food • Nutrition • Healthy Choices",
    image: images.customer,
    icon: ShoppingBasket,
    tone: "from-orange-950/95 via-amber-900/75 to-green-950/90",
    body:
      "The customer pathway focuses on access to fresh, local, chemical-free produce and practical nutrition education. Customers are not only buying food. They are participating in a local system that supports health, families, growers, and community resilience.",
    points: [
      "Fresh produce supports wellness and better food choices",
      "Customers learn where food comes from and why it matters",
      "Local purchasing keeps value circulating in the community",
      "The marketplace makes healthy choices easier to repeat",
    ],
  },
  {
    id: "marketplace",
    label: "Marketplace",
    title: "Marketplace Pathway",
    eyebrow: "Circulation • Sales • Access • Sustainability",
    image: images.marketplace,
    icon: Building2,
    tone: "from-yellow-950/95 via-orange-900/75 to-emerald-950/90",
    body:
      "The marketplace pathway turns interest into participation and revenue. It connects growers, customers, value-added products, education, and distribution. The marketplace is where food access, economic circulation, and sustainability come together.",
    points: [
      "Customers can discover products and return for future purchases",
      "Growers gain a coordinated outlet instead of operating alone",
      "Value-added products create additional revenue opportunities",
      "The system is designed to support long-term sustainability",
    ],
  },
  {
    id: "youth",
    label: "Youth Workforce",
    title: "Youth Workforce Pathway",
    eyebrow: "Responsibility • Skills • Leadership • Future Readiness",
    image: images.youth,
    icon: Users,
    tone: "from-sky-950/95 via-emerald-950/75 to-slate-950/90",
    body:
      "The youth workforce pathway gives young people ages 14–18 real outdoor work experience. The farm becomes a living classroom where youth learn agriculture, teamwork, responsibility, communication, safety, leadership, and the value of feeding a community.",
    points: [
      "Youth learn through meaningful farm-based work",
      "Supervisors support attendance, safety, growth, and accountability",
      "Participants build confidence and practical work habits",
      "The pathway connects food, workforce development, and future opportunity",
    ],
  },
  {
    id: "partner",
    label: "Partners",
    title: "Partner Pathway",
    eyebrow: "Collaboration • Resources • Demonstrations • Shared Impact",
    image: images.partner,
    icon: HandHeart,
    tone: "from-teal-950/95 via-green-950/75 to-stone-950/90",
    body:
      "Partners strengthen the ecosystem by bringing resources, expertise, tools, education, health services, demonstrations, funding, and community trust. Public, private, nonprofit, education, and health partners help build something no single organization can build alone.",
    points: [
      "Partners help expand food access and community wellness",
      "Demonstrations and resources make learning visible",
      "Shared investment supports infrastructure and sustainability",
      "The ecosystem creates a place where partners can align around measurable community benefit",
    ],
  },
  {
    id: "value",
    label: "Value-Added",
    title: "Value-Added and Agritourism Pathway",
    eyebrow: "Experience • Products • Destination • Family Legacy",
    image: images.value,
    icon: Star,
    tone: "from-purple-950/95 via-amber-950/75 to-green-950/90",
    body:
      "Bronson Family Farm is growing toward a destination experience. Value-added products, demonstrations, family activities, wellness experiences, camping, mini-golf, youth activities, and farm-based education can help transform the land into a place people return to.",
    points: [
      "Agritourism creates new ways for families to experience the farm",
      "Value-added products help growers increase income",
      "Activities create reasons to visit, learn, purchase, and return",
      "The destination vision supports legacy, culture, and community pride",
    ],
  },
  {
    id: "future",
    label: "Future",
    title: "Why This Matters Now",
    eyebrow: "Food Security • Health • Economic Resilience",
    image: images.future,
    icon: Wheat,
    tone: "from-red-950/95 via-orange-950/75 to-emerald-950/90",
    body:
      "Rising food costs, food insecurity, health disparities, and disconnected systems require new local solutions. Bronson Family Farm demonstrates how agriculture, education, wellness, youth workforce development, partners, and marketplaces can work together to strengthen the community.",
    points: [
      "Healthy food access is community infrastructure",
      "Growing food locally builds resilience",
      "Youth and families need places to learn, work, gather, and belong",
      "The ecosystem is a model for building a stronger regional food future",
    ],
  },
  {
    id: "thankyou",
    label: "Thank You",
    title: "Thank You for Experiencing Bronson Family Farm",
    eyebrow: "Feedback • Partnership • Participation",
    image: images.ecosystem,
    icon: BadgeCheck,
    tone: "from-emerald-950/95 via-lime-950/75 to-stone-950/90",
    body:
      "This is a living ecosystem. Your feedback, partnership, and participation help shape the next stage of Bronson Family Farm and Farm & Family Alliance.",
    points: [
      "What did you understand clearly?",
      "What pathway felt most meaningful?",
      "Where do you see yourself or your organization participating?",
      "What support, partnership, or investment could help this grow?",
    ],
    cta: "Contact: Constance Burgess • 330-275-1604 • cburgess@bronsonfamilyfarm.com",
  },
];

const pathwaySlides = slides.filter((s) =>
  ["grower", "customer", "marketplace", "youth", "partner", "value"].includes(
    s.id
  )
);

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [current, setCurrent] = useState(0);
  const [guided, setGuided] = useState(false);
  const timerRef = useRef<number | null>(null);

  const t = text[lang];
  const slide = slides[current];
  const Icon = slide.icon;

  const isHebrew = lang === "he";

  useEffect(() => {
    if (!guided) return;

    timerRef.current = window.setTimeout(() => {
      setCurrent((prev) => {
        if (prev >= slides.length - 1) {
          setGuided(false);
          return prev;
        }
        return prev + 1;
      });
    }, 12500);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
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

      <div className={`absolute inset-0 bg-gradient-to-br ${slide.tone}`} />
      <div className="absolute inset-0 bg-black/25" />

      <section className="relative z-10 flex h-full flex-col">
        <header className="flex items-start justify-between gap-6 px-8 py-5">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-lime-200">
              <Leaf size={18} />
              {slide.eyebrow}
            </div>
            <h1 className="mt-2 text-4xl font-black tracking-tight md:text-6xl">
              {current === 0 ? t.title : slide.title}
            </h1>
            <p className="mt-2 max-w-4xl text-lg leading-relaxed text-white/90 md:text-xl">
              {current === 0 ? t.subtitle : slide.body}
            </p>
          </div>

          <div className="flex max-w-lg flex-wrap justify-end gap-2">
            {LANGS.map((item) => (
              <button
                key={item.key}
                onClick={() => setLang(item.key)}
                className={`rounded-full border px-3 py-1.5 text-sm font-semibold backdrop-blur ${
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

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-5 px-8 pb-4 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex min-h-0 flex-col justify-center">
            <div className="rounded-[2rem] border border-white/15 bg-black/35 p-6 shadow-2xl backdrop-blur-md md:p-8">
              <div className="mb-5 flex items-center gap-4">
                <div className="rounded-2xl bg-white/15 p-4 ring-1 ring-white/20">
                  <Icon size={34} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-200">
                    {slide.label}
                  </p>
                  <h2 className="text-3xl font-black md:text-5xl">
                    {slide.title}
                  </h2>
                </div>
              </div>

              <div className="grid gap-3">
                {slide.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex gap-3 rounded-2xl bg-white/10 p-4 text-base leading-relaxed ring-1 ring-white/10 md:text-lg"
                  >
                    <ChevronRight className="mt-1 shrink-0 text-lime-200" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>

              {slide.cta && (
                <div className="mt-5 rounded-2xl border border-lime-200/30 bg-lime-200/15 p-4 text-lg font-semibold text-lime-50">
                  {slide.cta}
                </div>
              )}
            </div>
          </div>

          <div className="flex min-h-0 flex-col justify-center gap-4">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-black/30 shadow-2xl">
              <img
                src={slide.image}
                alt={slide.title}
                className={`h-[43vh] w-full ${
                  slide.id === "ecosystem" || slide.id === "thankyou"
                    ? "object-contain bg-white/95 p-3"
                    : "object-cover"
                }`}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-xl font-black">{slide.label}</p>
                <p className="text-sm text-white/80">
                  {current + 1} of {slides.length}
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-black/35 p-4 backdrop-blur-md">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-lime-200">
                <Route size={17} />
                Pathway Navigation
              </div>

              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {pathwaySlides.map((p) => {
                  const PIcon = p.icon;
                  const index = slides.findIndex((s) => s.id === p.id);
                  return (
                    <button
                      key={p.id}
                      onClick={() => go(index)}
                      className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm font-semibold transition ${
                        current === index
                          ? "border-lime-200 bg-lime-200 text-[#172111]"
                          : "border-white/15 bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      <PIcon size={16} />
                      {p.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <footer className="px-8 pb-5">
          <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/15">
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
                className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 font-bold ring-1 ring-white/15 hover:bg-black/65 disabled:opacity-35"
              >
                <ArrowLeft size={18} />
                {t.back}
              </button>

              <button
                onClick={next}
                disabled={current === slides.length - 1}
                className="flex items-center gap-2 rounded-2xl bg-lime-300 px-5 py-3 font-black text-[#172111] hover:bg-lime-200 disabled:opacity-35"
              >
                {t.next}
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => go(0)}
                className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 font-bold ring-1 ring-white/15 hover:bg-black/65"
              >
                <Home size={18} />
                {t.home}
              </button>

              <button
                onClick={() => go(3)}
                className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 font-bold ring-1 ring-white/15 hover:bg-black/65"
              >
                <Route size={18} />
                {t.jump}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setGuided((v) => !v)}
                className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-black text-[#172111] hover:bg-lime-100"
              >
                {guided ? <Pause size={18} /> : <Play size={18} />}
                {guided ? t.pause : t.guided}
              </button>

              <button
                onClick={() => {
                  setGuided(false);
                  go(0);
                }}
                className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 font-bold ring-1 ring-white/15 hover:bg-black/65"
              >
                <RotateCcw size={18} />
                {t.start}
              </button>

              <a
                href="https://www.bronsonfamilyfarm.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 font-bold ring-1 ring-white/15 hover:bg-black/65"
              >
                <Globe2 size={18} />
                Website
              </a>

              <a
                href="mailto:cburgess@bronsonfamilyfarm.com?subject=Bronson%20Family%20Farm%20Demo%20Feedback"
                className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 font-bold ring-1 ring-white/15 hover:bg-black/65"
              >
                <Mail size={18} />
                {t.feedback}
              </a>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
