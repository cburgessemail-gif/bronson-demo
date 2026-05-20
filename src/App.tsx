// src/App.tsx

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

const LANGS: { key: Lang; label: string }[] = [
  { key: "en", label: "English" },
  { key: "es", label: "Español" },
  { key: "tl", label: "Tagalog" },
  { key: "it", label: "Italiano" },
  { key: "he", label: "עברית" },
  { key: "fr", label: "Français" },
];

const ui = {
  en: { guided: "Guided Tour", pause: "Pause Tour", next: "Next", back: "Back", home: "Start", pathways: "Pathways", feedback: "Feedback" },
  es: { guided: "Tour Guiado", pause: "Pausar", next: "Siguiente", back: "Atrás", home: "Inicio", pathways: "Caminos", feedback: "Comentarios" },
  tl: { guided: "Guided Tour", pause: "Pause", next: "Susunod", back: "Bumalik", home: "Simula", pathways: "Pathways", feedback: "Feedback" },
  it: { guided: "Tour Guidato", pause: "Pausa", next: "Avanti", back: "Indietro", home: "Inizio", pathways: "Percorsi", feedback: "Feedback" },
  he: { guided: "סיור מודרך", pause: "עצור", next: "הבא", back: "חזור", home: "התחלה", pathways: "מסלולים", feedback: "משוב" },
  fr: { guided: "Visite Guidée", pause: "Pause", next: "Suivant", back: "Retour", home: "Début", pathways: "Parcours", feedback: "Commentaires" },
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
  pathway?: string;
  nav: string;
  eyebrow: string;
  title: string;
  image: string;
  icon: any;
  body: string;
  points: string[];
};

const copy: Record<Lang, Slide[]> = {
  en: [
    {
      id: "start",
      nav: "Start",
      eyebrow: "Bronson Family Farm • Youngstown, Ohio",
      title: "Step Into the Farm. Experience the Wonders of Life.",
      image: images.entrance,
      icon: Trees,
      body: "Bronson Family Farm is a place-based farm experience at the Historic Lansdowne Airport. This demo introduces a connected food ecosystem where food access, education, health, youth workforce, growers, partners, and marketplace activity work together.",
      points: ["Working farm rooted in Youngstown’s East Side", "Future agritourism destination", "Food access, learning, wellness, and community revitalization"],
    },
    {
      id: "place",
      nav: "Place",
      eyebrow: "Airport • Land • History • Access",
      title: "A Farm Rooted in Place",
      image: images.place,
      icon: Plane,
      body: "The Historic Lansdowne Airport setting matters. It represents movement, access, innovation, and possibility. Bronson Family Farm uses the land to grow food, teach skills, welcome families, and build a destination connected to Youngstown’s future.",
      points: ["Outdoor growing space becomes community infrastructure", "The airport creates a memorable sense of place", "The farm connects land, history, food, education, and opportunity"],
    },
    {
      id: "ecosystem",
      nav: "Ecosystem",
      eyebrow: "Food • Knowledge • People • Distribution",
      title: "What Is a Connected Food Ecosystem?",
      image: images.ecosystem,
      icon: Route,
      body: "A connected food ecosystem is a coordinated system where growers, customers, youth, partners, education, health, marketplace activity, and distribution support one another. Food, knowledge, and money circulate locally.",
      points: ["Growers receive tools, education, market access, and support", "Customers receive fresh, local, chemical-free food and nutrition education", "Youth receive workforce experience in a living classroom", "Partners align resources around food access and wellness", "The food moves — not the farmer — because distribution is coordinated"],
    },
    {
      id: "grower",
      pathway: "grower",
      nav: "Grower",
      eyebrow: "Tools • Knowledge • Support • Market Access",
      title: "Grower Pathway",
      image: images.grower,
      icon: Sprout,
      body: "The Grower Pathway helps people grow successfully. A grower may be a backyard gardener, small farmer, community grower, or value-added producer.",
      points: ["Access growing knowledge, seedlings, supplies, and demonstrations", "Learn through hands-on instruction", "Connect to markets, customers, schools, and organizations", "Participate in a system where growers are supported instead of isolated"],
    },
    {
      id: "grower-detail",
      pathway: "grower",
      nav: "Grower",
      eyebrow: "How the Grower Pathway Works",
      title: "From Learning to Market Opportunity",
      image: images.grower,
      icon: Sprout,
      body: "Growers enter the ecosystem through education, demonstrations, supplies, planning, and coordinated market opportunities. The goal is practical support that helps people grow, sell, and stay connected.",
      points: ["Learn what to grow and how to grow it", "Use farm demonstrations to build confidence", "Bring products into a coordinated marketplace", "Reduce the burden on individual growers by organizing distribution"],
    },
    {
      id: "customer",
      pathway: "customer",
      nav: "Customer",
      eyebrow: "Fresh Food • Nutrition • Healthy Choices",
      title: "Customer Pathway",
      image: images.customer,
      icon: ShoppingBasket,
      body: "The Customer Pathway helps families access fresh, local, chemical-free produce while learning how food choices support health and long-term quality of life.",
      points: ["Access fresh, local produce", "Learn practical nutrition and food-use information", "Support local growers and community circulation", "Return for repeat healthy choices"],
    },
    {
      id: "customer-detail",
      pathway: "customer",
      nav: "Customer",
      eyebrow: "How Customers Participate",
      title: "Healthy Food Becomes a Repeat Choice",
      image: images.customer,
      icon: ShoppingBasket,
      body: "Customers are not only buying food. They are participating in a local food system that connects health, family, education, growers, and community resilience.",
      points: ["Food is connected to wellness education", "Purchases support growers and the local economy", "Marketplace access makes healthy choices easier", "Families become part of the farm ecosystem"],
    },
    {
      id: "marketplace",
      pathway: "marketplace",
      nav: "Marketplace",
      eyebrow: "Sales • Access • Distribution • Sustainability",
      title: "Marketplace Pathway",
      image: images.marketplace,
      icon: Building2,
      body: "The Marketplace Pathway connects growers, customers, value-added products, education, and distribution. This is where food access, economic circulation, and sustainability come together.",
      points: ["Create a coordinated outlet for growers", "Help customers find fresh food and return", "Support value-added products and income opportunities", "Keep food and money circulating locally"],
    },
    {
      id: "marketplace-detail",
      pathway: "marketplace",
      nav: "Marketplace",
      eyebrow: "The Food Moves — Not the Farmer",
      title: "Distribution Makes the Ecosystem Work",
      image: images.marketplace,
      icon: Building2,
      body: "The marketplace is not just a sales table. It is the circulation point where products, customers, growers, schools, organizations, and community buyers can connect.",
      points: ["Growers do not have to reach every buyer alone", "The system can support schools, families, businesses, and partners", "Customers can return through a familiar marketplace experience", "Distribution strengthens long-term sustainability"],
    },
    {
      id: "youth",
      pathway: "youth",
      nav: "Youth",
      eyebrow: "Responsibility • Skills • Leadership • Future Readiness",
      title: "Youth Workforce Pathway",
      image: images.youth,
      icon: Users,
      body: "The Youth Workforce Pathway gives young people ages 14–18 real outdoor work experience. The farm becomes a living classroom where youth learn responsibility, teamwork, safety, leadership, and service.",
      points: ["Build practical work habits through farm tasks", "Learn safety, attendance, communication, and teamwork", "Develop confidence through real responsibility", "Connect workforce readiness to food, land, and community purpose"],
    },
    {
      id: "youth-detail",
      pathway: "youth",
      nav: "Youth",
      eyebrow: "A Living Classroom",
      title: "Youth Help Build the Future",
      image: images.youth,
      icon: Users,
      body: "Youth are not watching from the outside. They help build the farm, support food access, and learn how their work contributes to a larger community ecosystem.",
      points: ["Supervisors guide safety and accountability", "Youth learn through visible, meaningful work", "Progress can be connected to life skills and leadership", "The experience builds pride, responsibility, and future readiness"],
    },
    {
      id: "partners",
      pathway: "partners",
      nav: "Partners",
      eyebrow: "Collaboration • Resources • Demonstrations • Shared Impact",
      title: "Partner Pathway",
      image: images.partner,
      icon: HandHeart,
      body: "The Partner Pathway shows how public, private, nonprofit, education, health, and community partners strengthen the ecosystem.",
      points: ["Align resources around food access and wellness", "Support demonstrations, education, infrastructure, and outreach", "Create shared community benefit", "Build something no single organization can build alone"],
    },
    {
      id: "partners-detail",
      pathway: "partners",
      nav: "Partners",
      eyebrow: "Shared Investment",
      title: "Partners Turn Vision Into Capacity",
      image: images.partner,
      icon: HandHeart,
      body: "Partners help move the farm from idea to infrastructure. They bring tools, volunteers, funding, demonstrations, health education, technical assistance, and credibility.",
      points: ["Health partners support wellness education", "Education partners support learning pathways", "Business partners support tools and infrastructure", "Community partners expand trust and participation"],
    },
    {
      id: "destination",
      pathway: "destination",
      nav: "Destination",
      eyebrow: "Agritourism • Value-Added • Family Experience",
      title: "Value-Added and Agritourism Pathway",
      image: images.value,
      icon: Star,
      body: "Bronson Family Farm is growing toward a destination experience with value-added products, demonstrations, family activities, wellness experiences, youth activities, camping, mini-golf, and farm-based education.",
      points: ["Create reasons for families to visit and return", "Support value-added products and grower income", "Build agritourism as part of sustainability", "Honor family legacy, culture, food, land, and community pride"],
    },
    {
      id: "future",
      nav: "Future",
      eyebrow: "Food Security • Health • Economic Resilience",
      title: "Why This Matters Now",
      image: images.future,
      icon: Wheat,
      body: "Rising food costs, health disparities, food insecurity, and disconnected systems require local solutions. Bronson Family Farm demonstrates how agriculture, education, wellness, youth workforce, partners, and marketplace activity can strengthen community resilience.",
      points: ["Healthy food access is community infrastructure", "Growing food locally builds resilience", "Youth and families need places to learn, work, gather, and belong", "The ecosystem is a model for a stronger regional food future"],
    },
    {
      id: "thankyou",
      nav: "Thank You",
      eyebrow: "Feedback • Partnership • Participation",
      title: "Thank You for Experiencing Bronson Family Farm",
      image: images.ecosystem,
      icon: BadgeCheck,
      body: "This demo is an invitation to understand the vision, respond to the pathway that speaks to you, and help shape the next stage of Bronson Family Farm and Farm & Family Alliance.",
      points: ["What did you understand clearly?", "Which pathway felt most meaningful?", "Where do you see yourself or your organization participating?", "What support, partnership, or investment could help this grow?"],
    },
  ],

  es: [],
  tl: [],
  it: [],
  he: [],
  fr: [],
};

copy.es = copy.en.map((s) => ({
  ...s,
  eyebrow: s.eyebrow,
  title:
    s.id === "ecosystem" ? "¿Qué es un Ecosistema Alimentario Conectado?" :
    s.id === "grower" ? "Camino del Productor" :
    s.id === "customer" ? "Camino del Cliente" :
    s.id === "marketplace" ? "Camino del Mercado" :
    s.id === "youth" ? "Camino de la Fuerza Laboral Juvenil" :
    s.id === "partners" ? "Camino de Socios" :
    s.id === "destination" ? "Camino de Agroturismo y Valor Agregado" :
    s.id === "future" ? "Por Qué Importa Ahora" :
    s.id === "thankyou" ? "Gracias por Experimentar Bronson Family Farm" :
    s.title,
  body:
    s.id === "ecosystem"
      ? "Un ecosistema alimentario conectado es un sistema coordinado donde productores, clientes, jóvenes, socios, educación, salud, mercado y distribución se apoyan mutuamente. La comida, el conocimiento y el dinero circulan localmente."
      : s.body,
  points: s.points.map((p) =>
    p.replace("Growers", "Los productores")
      .replace("Customers", "Los clientes")
      .replace("Youth", "Los jóvenes")
      .replace("Partners", "Los socios")
      .replace("food", "comida")
      .replace("community", "comunidad")
  ),
}));

copy.tl = copy.en.map((s) => ({
  ...s,
  title:
    s.id === "ecosystem" ? "Ano ang Connected Food Ecosystem?" :
    s.id === "grower" ? "Grower Pathway" :
    s.id === "customer" ? "Customer Pathway" :
    s.id === "marketplace" ? "Marketplace Pathway" :
    s.id === "youth" ? "Youth Workforce Pathway" :
    s.id === "partners" ? "Partner Pathway" :
    s.id === "destination" ? "Value-Added at Agritourism Pathway" :
    s.id === "future" ? "Bakit Mahalaga Ngayon" :
    s.id === "thankyou" ? "Salamat sa Pagbisita sa Bronson Family Farm" :
    s.title,
  body:
    s.id === "ecosystem"
      ? "Ang connected food ecosystem ay pinag-uugnay ang growers, customers, kabataan, partners, edukasyon, kalusugan, marketplace, at distribution upang ang pagkain, kaalaman, at pera ay umikot sa komunidad."
      : s.body,
}));

copy.it = copy.en.map((s) => ({
  ...s,
  title:
    s.id === "ecosystem" ? "Cos’è un Ecosistema Alimentare Connesso?" :
    s.id === "grower" ? "Percorso del Coltivatore" :
    s.id === "customer" ? "Percorso del Cliente" :
    s.id === "marketplace" ? "Percorso del Marketplace" :
    s.id === "youth" ? "Percorso Giovani e Lavoro" :
    s.id === "partners" ? "Percorso dei Partner" :
    s.id === "destination" ? "Percorso Agriturismo e Valore Aggiunto" :
    s.id === "future" ? "Perché Conta Ora" :
    s.id === "thankyou" ? "Grazie per Aver Visitato Bronson Family Farm" :
    s.title,
  body:
    s.id === "ecosystem"
      ? "Un ecosistema alimentare connesso è un sistema coordinato in cui coltivatori, clienti, giovani, partner, educazione, salute, mercato e distribuzione si sostengono a vicenda."
      : s.body,
}));

copy.he = copy.en.map((s) => ({
  ...s,
  title:
    s.id === "ecosystem" ? "מהי מערכת מזון מחוברת?" :
    s.id === "grower" ? "מסלול המגדלים" :
    s.id === "customer" ? "מסלול הלקוחות" :
    s.id === "marketplace" ? "מסלול השוק" :
    s.id === "youth" ? "מסלול כוח עבודה לנוער" :
    s.id === "partners" ? "מסלול השותפים" :
    s.id === "destination" ? "מסלול תיירות חקלאית וערך מוסף" :
    s.id === "future" ? "למה זה חשוב עכשיו" :
    s.id === "thankyou" ? "תודה שחוויתם את Bronson Family Farm" :
    s.title,
  body:
    s.id === "ecosystem"
      ? "מערכת מזון מחוברת היא מערכת מתואמת שבה מגדלים, לקוחות, נוער, שותפים, חינוך, בריאות, שוק והפצה תומכים זה בזה."
      : s.body,
}));

copy.fr = copy.en.map((s) => ({
  ...s,
  title:
    s.id === "ecosystem" ? "Qu’est-ce qu’un Écosystème Alimentaire Connecté ?" :
    s.id === "grower" ? "Parcours Producteur" :
    s.id === "customer" ? "Parcours Client" :
    s.id === "marketplace" ? "Parcours Marketplace" :
    s.id === "youth" ? "Parcours Jeunesse et Travail" :
    s.id === "partners" ? "Parcours Partenaires" :
    s.id === "destination" ? "Parcours Agritourisme et Valeur Ajoutée" :
    s.id === "future" ? "Pourquoi Cela Compte Maintenant" :
    s.id === "thankyou" ? "Merci d’avoir Découvert Bronson Family Farm" :
    s.title,
  body:
    s.id === "ecosystem"
      ? "Un écosystème alimentaire connecté est un système coordonné où producteurs, clients, jeunes, partenaires, éducation, santé, marché et distribution se soutiennent mutuellement."
      : s.body,
}));

const pathwayIds = ["grower", "customer", "marketplace", "youth", "partners", "destination"];

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [current, setCurrent] = useState(0);
  const [guided, setGuided] = useState(false);

  const slides = copy[lang];
  const t = ui[lang];
  const slide = slides[current];
  const Icon = slide.icon;
  const isHebrew = lang === "he";
  const isEcosystem = slide.id === "ecosystem" || slide.id === "thankyou";

  const pathwaySlides = useMemo(
    () => slides.filter((s) => pathwayIds.includes(s.id)),
    [slides]
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
    }, 14500);

    return () => window.clearTimeout(timer);
  }, [guided, current, slides.length]);

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
      {!isEcosystem && (
        <img src={slide.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-[#102015] via-[#243a21] to-[#674a21]" />
      <div className="absolute inset-0 bg-black/20" />

      <section className="relative z-10 flex h-full flex-col">
        <header className="flex items-start justify-between gap-5 px-7 py-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-lime-200">
              <Leaf size={16} />
              {slide.eyebrow}
            </div>

            <h1 className="mt-1 text-3xl font-black tracking-tight md:text-4xl">
              {slide.title}
            </h1>

            <p className="mt-2 max-w-4xl text-base leading-relaxed text-white/90 md:text-lg">
              {slide.body}
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

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 px-7 pb-3 lg:grid-cols-[0.72fr_1.28fr]">
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
                  {slide.id !== "ecosystem" && (
                    <h2 className="text-2xl font-black md:text-3xl">{slide.title}</h2>
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

              {slide.id === "thankyou" && (
                <div className="mt-4 rounded-2xl border border-lime-200/30 bg-lime-200/15 p-4 text-base font-semibold text-lime-50">
                  Contact: Constance Burgess • 330-275-1604 • cburgess@bronsonfamilyfarm.com
                </div>
              )}
            </div>
          </div>

          <div className="flex min-h-0 flex-col justify-center gap-3">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/20 bg-black/20 shadow-2xl">
              <img
                src={slide.image}
                alt={slide.title}
                className={`h-[60vh] w-full ${
                  isEcosystem
                    ? "object-contain bg-transparent p-0"
                    : "object-cover"
                }`}
              />

              {!isEcosystem && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
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
                        current === index || slide.pathway === p.pathway
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
            <div className="h-full rounded-full bg-lime-300 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button onClick={back} disabled={current === 0} className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 text-sm font-black ring-1 ring-white/15 hover:bg-black/65 disabled:opacity-35">
                <ArrowLeft size={17} /> {t.back}
              </button>

              <button onClick={next} disabled={current === slides.length - 1} className="flex items-center gap-2 rounded-2xl bg-lime-300 px-5 py-3 text-sm font-black text-[#172111] hover:bg-lime-200 disabled:opacity-35">
                {t.next} <ArrowRight size={17} />
              </button>

              <button onClick={() => go(0)} className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 text-sm font-black ring-1 ring-white/15 hover:bg-black/65">
                <Home size={17} /> {t.home}
              </button>

              <button onClick={() => go(2)} className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 text-sm font-black ring-1 ring-white/15 hover:bg-black/65">
                <Route size={17} /> Ecosystem
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button onClick={() => setGuided((v) => !v)} className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-[#172111] hover:bg-lime-100">
                {guided ? <Pause size={17} /> : <Play size={17} />}
                {guided ? t.pause : t.guided}
              </button>

              <a href="mailto:cburgess@bronsonfamilyfarm.com?subject=Bronson%20Family%20Farm%20Demo%20Feedback" className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 text-sm font-black ring-1 ring-white/15 hover:bg-black/65">
                <Mail size={17} /> {t.feedback}
              </a>

              <div className="flex items-center gap-2 rounded-2xl bg-black/45 px-4 py-3 text-sm font-black ring-1 ring-white/15">
                <MapPin size={17} /> Youngstown, Ohio
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
