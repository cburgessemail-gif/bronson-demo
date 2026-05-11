import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Sprout,
  Users,
  ShoppingBasket,
  GraduationCap,
  Handshake,
  MapPin,
  Plane,
  HeartPulse,
  Leaf,
  Globe2,
  MessageSquare,
  Send,
  CheckCircle2,
  Menu,
  X,
  Tractor,
  Tent,
  Camera,
  Building2,
  ShieldCheck,
} from "lucide-react";

// BRONSON FAMILY FARM COMPLETED GUIDED DEMO
// Replace your current App.tsx with this full file.
// Keep image files inside /public/images/ or /public/.
// The demo uses safe image fallbacks so broken paths do not blank the page.

const BRAND = {
  farm: "Bronson Family Farm",
  alliance: "Farm & Family Alliance",
  developedBy: "Developed by Bronson Family Farm",
  location: "Historic Lansdowne Airport • Youngstown, Ohio",
  event: "Growers Supply Market",
  eventDate: "Saturday, May 16, 2026 • 9:00 AM – 2:00 PM",
  invite: "By invitation only • Registration through Eventbrite",
  website: "https://www.bronsonfamilyfarm.com/",
  grownby: "https://grownby.com/farms/bronson-family-farm/shop",
  eventbrite: "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator",
};

const imagePaths = {
  hero: ["/images/GrowArea.jpg", "/GrowArea.jpg", "/images/GrowArea2.jpg", "/GrowArea2.jpg"],
  guest: ["/images/GrowArea2.jpg", "/GrowArea2.jpg", "/images/SAM_0181.JPG", "/SAM_0181.JPG"],
  customer: ["/images/produce.jpg", "/produce.jpg", "/images/seedlings.jpg", "/seedlings.jpg", "/images/SAM_0200.JPG"],
  marketplace: ["/images/marketplace.jpg", "/marketplace.jpg", "/images/market-table.jpg", "/market-table.jpg", "/images/bubble-babies.jpg", "/bubble-babies.jpg"],
  grower: ["/images/grower.jpg", "/grower.jpg", "/images/GrowArea3.jpg", "/GrowArea3.jpg", "/images/SAM_0191.JPG"],
  youth: ["/images/youth-workforce.jpg", "/youth-workforce.jpg", "/images/rc-toys.jpg", "/rc-toys.jpg", "/images/SAM_0210.JPG"],
  partner: ["/images/partners.jpg", "/partners.jpg", "/images/airport.jpg", "/airport.jpg", "/images/SAM_0170.JPG"],
  destination: ["/images/agritourism.jpg", "/agritourism.jpg", "/images/farm-road.jpg", "/farm-road.jpg", "/images/SAM_0165.JPG"],
};

function SmartImage({ paths, alt, className = "" }: { paths: string[]; alt: string; className?: string }) {
  const [index, setIndex] = useState(0);
  const fallback =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'>
        <defs>
          <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
            <stop stop-color='#20351f'/><stop offset='.5' stop-color='#5d6f36'/><stop offset='1' stop-color='#d9b46f'/>
          </linearGradient>
        </defs>
        <rect width='1200' height='800' fill='url(#g)'/>
        <circle cx='970' cy='150' r='90' fill='#f4d58d' opacity='.65'/>
        <path d='M0 590 C220 480 370 650 600 540 C810 445 940 540 1200 455 L1200 800 L0 800 Z' fill='#172617' opacity='.85'/>
        <path d='M0 670 C220 560 440 715 640 610 C840 510 990 600 1200 540 L1200 800 L0 800 Z' fill='#2f4a27' opacity='.9'/>
        <text x='70' y='120' font-family='Georgia, serif' font-size='54' fill='#fff8df'>Bronson Family Farm</text>
        <text x='72' y='178' font-family='Arial, sans-serif' font-size='27' fill='#fff8df' opacity='.92'>Guided ecosystem demo</text>
      </svg>`);

  const src = index < paths.length ? paths[index] : fallback;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setIndex((i) => i + 1)}
    />
  );
}

const translations = {
  en: {
    label: "English",
    start: "Start Guided Tour",
    next: "Next",
    back: "Back",
    jump: "Jump to Pathway",
    home: "Farm Entrance",
    respond: "Leave Demo Feedback",
    register: "Eventbrite Registration",
    shop: "Visit Marketplace",
    complete: "Complete Demo Journey",
    introTitle: "Step into the Farm. Experience the wonders of life.",
    introBody:
      "This demo guides guests, customers, growers, youth, and partners through a place-based food ecosystem at the Historic Lansdowne Airport in Youngstown. The purpose is not simply to sell produce. The purpose is to help food, tools, knowledge, skills, and opportunity circulate through the community.",
    ecosystem: "A guided food ecosystem where the food moves, not the farmer.",
  },
  es: {
    label: "Español",
    start: "Comenzar Recorrido",
    next: "Siguiente",
    back: "Atrás",
    jump: "Ir a Ruta",
    home: "Entrada de la Granja",
    respond: "Dejar Comentario",
    register: "Registro Eventbrite",
    shop: "Visitar Mercado",
    complete: "Completar Recorrido",
    introTitle: "Entre a la granja. Experimente las maravillas de la vida.",
    introBody:
      "Esta demostración guía a visitantes, clientes, agricultores, jóvenes y socios por un ecosistema alimentario ubicado en el histórico aeropuerto Lansdowne en Youngstown.",
    ecosystem: "Un ecosistema guiado donde se mueve la comida, no el agricultor.",
  },
  tl: {
    label: "Tagalog",
    start: "Simulan ang Gabay",
    next: "Susunod",
    back: "Bumalik",
    jump: "Pumunta sa Landas",
    home: "Pasukan ng Bukid",
    respond: "Mag-iwan ng Tugon",
    register: "Eventbrite Registration",
    shop: "Pumunta sa Marketplace",
    complete: "Tapusin ang Demo",
    introTitle: "Pumasok sa bukid. Damhin ang himala ng buhay.",
    introBody:
      "Ginagabayan ng demo na ito ang mga bisita, mamimili, grower, kabataan, at partners sa isang food ecosystem sa Historic Lansdowne Airport sa Youngstown.",
    ecosystem: "Isang gabay na food ecosystem kung saan gumagalaw ang pagkain, hindi ang farmer.",
  },
  it: {
    label: "Italiano",
    start: "Inizia il Tour",
    next: "Avanti",
    back: "Indietro",
    jump: "Vai al Percorso",
    home: "Ingresso della Fattoria",
    respond: "Lascia Feedback",
    register: "Registrazione Eventbrite",
    shop: "Visita il Mercato",
    complete: "Completa il Demo",
    introTitle: "Entra nella fattoria. Vivi le meraviglie della vita.",
    introBody:
      "Questa demo guida ospiti, clienti, coltivatori, giovani e partner attraverso un ecosistema alimentare presso lo storico aeroporto Lansdowne di Youngstown.",
    ecosystem: "Un ecosistema guidato dove si muove il cibo, non il contadino.",
  },
  he: {
    label: "עברית",
    start: "התחל סיור מודרך",
    next: "הבא",
    back: "חזרה",
    jump: "מעבר למסלול",
    home: "כניסה לחווה",
    respond: "השאר משוב",
    register: "הרשמה באיוונטברייט",
    shop: "בקרו בשוק",
    complete: "סיום מסע ההדגמה",
    introTitle: "היכנסו לחווה. חוו את פלאי החיים.",
    introBody:
      "הדגמה זו מובילה אורחים, לקוחות, מגדלים, נוער ושותפים דרך מערכת מזון קהילתית בשדה התעופה ההיסטורי לנסדאון ביונגסטאון.",
    ecosystem: "מערכת מזון מודרכת שבה המזון נע, לא החקלאי.",
  },
  fr: {
    label: "Français",
    start: "Commencer la visite",
    next: "Suivant",
    back: "Retour",
    jump: "Aller au parcours",
    home: "Entrée de la ferme",
    respond: "Laisser un avis",
    register: "Inscription Eventbrite",
    shop: "Visiter le marché",
    complete: "Terminer la démo",
    introTitle: "Entrez dans la ferme. Découvrez les merveilles de la vie.",
    introBody:
      "Cette démonstration guide les visiteurs, clients, producteurs, jeunes et partenaires à travers un écosystème alimentaire situé à l’aéroport historique de Lansdowne à Youngstown.",
    ecosystem: "Un écosystème guidé où la nourriture circule, pas le producteur.",
  },
};

type Lang = keyof typeof translations;

type Step = {
  id: string;
  nav: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  image: string[];
  bullets: string[];
  details: string;
  actionLabel: string;
  actionHref?: string;
  secondaryLabel?: string;
  secondaryTarget?: string;
};

const steps: Step[] = [
  {
    id: "entrance",
    nav: "Entrance",
    title: "Farm Entrance",
    subtitle: "Begin at the Historic Lansdowne Airport.",
    icon: MapPin,
    image: imagePaths.hero,
    bullets: [
      "Bronson Family Farm is transforming airport-adjacent land into food, learning, and community infrastructure.",
      "The guided journey explains who should come, why it matters, and how each person fits into the ecosystem.",
      "This is the starting point for guests, customers, growers, youth, and partners.",
    ],
    details:
      "The land is part of the story. The airport setting gives the farm a rare place-based identity: open land, history, movement, visibility, and the possibility of becoming an agritourism destination. The demo begins here so visitors understand they are entering more than a market. They are entering a community system.",
    actionLabel: "Begin the Guided Tour",
    secondaryLabel: "View Event Details",
    secondaryTarget: "event",
  },
  {
    id: "history",
    nav: "History",
    title: "History, Legacy & Place",
    subtitle: "A family and community story rooted in land, food, and opportunity.",
    icon: Plane,
    image: imagePaths.partner,
    bullets: [
      "The Historic Lansdowne Airport gives the project a memorable identity and destination opportunity.",
      "The Bronson and Lorenzana family legacy connects agriculture, service, education, faith, and community development.",
      "The farm invites Youngstown to see unused and underused land as a living resource.",
    ],
    details:
      "This pathway explains why the farm matters beyond a growing season. Bronson Family Farm is designed as a legacy project: food production, youth development, health, education, and entrepreneurship working together in one place. The story connects family history to Youngstown’s future.",
    actionLabel: "Continue to the Ecosystem",
    secondaryLabel: "Jump to Partners",
    secondaryTarget: "partners",
  },
  {
    id: "ecosystem",
    nav: "Ecosystem",
    title: "What the Ecosystem Means",
    subtitle: "Food, tools, knowledge, and opportunity moving through the community.",
    icon: Sprout,
    image: imagePaths.grower,
    bullets: [
      "Growers do not have to operate alone or travel everywhere to find customers, tools, and support.",
      "The food moves through managed distribution to families, schools, businesses, events, and community partners.",
      "Farm & Family Alliance supports the wraparound structure: volunteers, youth workforce, education, and partner coordination.",
    ],
    details:
      "An ecosystem means each role strengthens the others. Customers create demand. Growers supply quality food. Youth gain skills. Partners contribute resources. The marketplace creates circulation. The farm becomes a coordination point for food access, workforce readiness, and regional collaboration.",
    actionLabel: "Meet the Guest Pathway",
    secondaryLabel: "Go to Marketplace",
    secondaryTarget: "marketplace",
  },
  {
    id: "guest",
    nav: "Guest",
    title: "Guest Pathway",
    subtitle: "Understand the vision, story, and purpose.",
    icon: Users,
    image: imagePaths.guest,
    bullets: [
      "Guests are introduced to the farm through a clear, welcoming journey instead of scattered information.",
      "They learn why the event is by invitation only and why registration supports security and planning.",
      "They leave understanding the farm as a destination, not just a field.",
    ],
    details:
      "The guest experience is designed to create belonging and clarity. A guest can arrive curious and leave able to explain the farm’s purpose: food access, health, growers, youth, land use, and economic circulation. This pathway supports tours, events, sponsors, families, and first-time visitors.",
    actionLabel: "Continue to Customer Pathway",
    secondaryLabel: "Register for Event",
    actionHref: BRAND.eventbrite,
  },
  {
    id: "customer",
    nav: "Customer",
    title: "Customer Pathway",
    subtitle: "Fresh food, nutrition, and repeat healthy choices.",
    icon: HeartPulse,
    image: imagePaths.customer,
    bullets: [
      "Customers learn how to buy seedlings, produce, herbs, and farm-based products through the marketplace.",
      "The pathway emphasizes nutrition, chemical-free growing, food quality, and trust.",
      "Customers are guided toward repeat participation instead of one-time purchases.",
    ],
    details:
      "The customer pathway connects healthy food to daily life. It explains how local food can support families, seniors, schools, and community wellness. The emphasis is not only access, but confidence: knowing where the food comes from, how it is grown, and how to keep choosing fresh food.",
    actionLabel: "Visit Marketplace",
    actionHref: BRAND.grownby,
    secondaryLabel: "Continue to Grower Pathway",
    secondaryTarget: "grower",
  },
  {
    id: "marketplace",
    nav: "Marketplace",
    title: "Marketplace Pathway",
    subtitle: "Convert interest into purchasing power and sustainability.",
    icon: ShoppingBasket,
    image: imagePaths.marketplace,
    bullets: [
      "The marketplace helps food and dollars circulate locally instead of leaving the community.",
      "Bubble Babies™, seedlings, produce, herbs, and value-added products can be organized for ordering and pickup.",
      "The system can support SNAP-aware shopping logic and accessible purchasing pathways.",
    ],
    details:
      "The marketplace is where the ecosystem becomes practical. It gives customers a place to buy, growers a place to participate, and partners a way to support food access. The long-term purpose is coordinated distribution: food moves to the people, not every farmer chasing every market alone.",
    actionLabel: "Open Online Store",
    actionHref: BRAND.grownby,
    secondaryLabel: "Continue to Grower Pathway",
    secondaryTarget: "grower",
  },
  {
    id: "grower",
    nav: "Grower",
    title: "Grower Pathway",
    subtitle: "Connect producers to opportunity, tools, and market participation.",
    icon: Tractor,
    image: imagePaths.grower,
    bullets: [
      "Growers come for practical support: tools, demonstrations, knowledge, seedlings, supplies, and market access.",
      "The Growers Supply Market is not a farmers market. It is a resource and connection event for people who grow food.",
      "The ecosystem reduces isolation by linking growers to buyers, partners, youth workforce, and distribution support.",
    ],
    details:
      "The grower need is the center of this event. Growers need affordable tools, soil knowledge, pest strategies, seed starts, irrigation ideas, distribution options, and trusted relationships. This pathway shows why a grower should come: to leave better equipped than they arrived.",
    actionLabel: "See Youth Workforce",
    secondaryLabel: "Register for Growers Supply Market",
    actionHref: BRAND.eventbrite,
  },
  {
    id: "youth",
    nav: "Youth Workforce",
    title: "Youth Workforce Pathway",
    subtitle: "Build skills, responsibility, and future readiness.",
    icon: GraduationCap,
    image: imagePaths.youth,
    bullets: [
      "Youth learn responsibility through outdoor, skill-based work connected to food, land, technology, and service.",
      "The pathway can include attendance, progress badges, supervisor observations, safety rules, and parent communication.",
      "RC activities, farm operations, marketplace support, media, and agritourism can create multiple learning tracks.",
    ],
    details:
      "The youth workforce is not busywork. It is a structured development pathway. Young people learn how food grows, how teams operate, how safety matters, how customers are served, and how local economies work. The farm becomes a living classroom.",
    actionLabel: "Continue to Partners",
    secondaryLabel: "View Agritourism Future",
    secondaryTarget: "destination",
  },
  {
    id: "partners",
    nav: "Partners",
    title: "Partner Pathway",
    subtitle: "Align resources, collaboration, and community benefit.",
    icon: Handshake,
    image: imagePaths.partner,
    bullets: [
      "Partners can support tools, education, health, workforce, art, culinary, logistics, media, infrastructure, and funding.",
      "The system gives partners a visible role in solving practical community needs.",
      "Partnership is organized around action: what each partner brings, who benefits, and how the community is strengthened.",
    ],
    details:
      "The partner pathway is built for foundations, businesses, schools, health organizations, city departments, universities, and civic groups. Partners do not have to guess how to help. The demo shows clear entry points: event participation, supplies, education, sponsorship, youth workforce, and infrastructure investment.",
    actionLabel: "See Destination Vision",
    secondaryLabel: "Leave Partner Feedback",
    secondaryTarget: "feedback",
  },
  {
    id: "destination",
    nav: "Destination",
    title: "Agritourism Destination Vision",
    subtitle: "A memorable farm experience that can grow over time.",
    icon: Tent,
    image: imagePaths.destination,
    bullets: [
      "The long-term vision includes camping, an 18-hole mini-golf course, kids zone, RC activities, farm experiences, and food education.",
      "Agritourism creates revenue while keeping the community connected to land, food, and learning.",
      "The destination model can become replicable for other communities seeking food access and economic renewal.",
    ],
    details:
      "The farm can become a place where families visit, youth learn, growers connect, and partners see their investment at work. Agritourism is not separate from food access. It helps sustain the ecosystem so the mission can continue.",
    actionLabel: "Review Event Day",
    secondaryLabel: "Go to Feedback",
    secondaryTarget: "feedback",
  },
  {
    id: "event",
    nav: "Event Day",
    title: "Growers Supply Market",
    subtitle: `${BRAND.eventDate} • ${BRAND.invite}`,
    icon: ShieldCheck,
    image: imagePaths.marketplace,
    bullets: [
      "This is not a farmers market. It is a grower-centered supply, demonstration, education, and connection event.",
      "Participants may include growers, gardeners, youth programs, health educators, artists, culinary partners, vendors, and resource providers.",
      "The farm is off-grid. Outdoor setup, registration, check-in, safety, water, sanitation, parking, and teardown are part of the event plan.",
    ],
    details:
      "Growers should come because the event addresses real needs: how to grow, what tools help, where to find supplies, how to connect with markets, and how to participate in a larger food ecosystem. The event is designed to make growing food feel possible, organized, and supported.",
    actionLabel: "Register on Eventbrite",
    actionHref: BRAND.eventbrite,
    secondaryLabel: "Complete Demo Journey",
    secondaryTarget: "feedback",
  },
  {
    id: "feedback",
    nav: "Feedback",
    title: "Complete the Demo Journey",
    subtitle: "The end of the demo is a response point, not a dead end.",
    icon: MessageSquare,
    image: imagePaths.hero,
    bullets: [
      "Visitors can identify their role: guest, customer, grower, youth, volunteer, partner, funder, or sponsor.",
      "They can leave comments, ask for follow-up, or choose the next step that fits them.",
      "The demo closes by inviting action while reinforcing the full ecosystem story.",
    ],
    details:
      "A completed demo should not leave people wondering what to do next. This final step collects interest and directs each person to the right action: register, shop, partner, sponsor, volunteer, or request a conversation.",
    actionLabel: "Return to Farm Entrance",
    secondaryLabel: "Visit Bronson Family Farm Website",
    actionHref: BRAND.website,
  },
];

function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [stepIndex, setStepIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [feedback, setFeedback] = useState({ name: "", role: "", message: "" });
  const t = translations[lang];
  const step = steps[stepIndex];
  const progress = Math.round(((stepIndex + 1) / steps.length) * 100);

  const next = () => setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  const back = () => setStepIndex((i) => Math.max(i - 1, 0));
  const go = (id: string) => {
    const found = steps.findIndex((s) => s.id === id);
    if (found >= 0) setStepIndex(found);
    setMenuOpen(false);
  };

  const Icon = step.icon;

  const roleOptions = useMemo(
    () => ["Guest", "Customer", "Grower", "Youth Workforce", "Volunteer", "Partner", "Funder/Sponsor", "Media", "Other"],
    []
  );

  const primaryAction = () => {
    if (step.actionHref) window.open(step.actionHref, "_blank", "noopener,noreferrer");
    else next();
  };

  const secondaryAction = () => {
    if (step.secondaryTarget) go(step.secondaryTarget);
    else if (step.actionHref) window.open(step.actionHref, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#f8f3e7] text-[#172617]">
      <header className="sticky top-0 z-50 border-b border-[#d9caa5] bg-[#f8f3e7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <button onClick={() => go("entrance")} className="flex items-center gap-3 text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#243b22] text-[#fff8df] shadow-md">
              <Leaf size={22} />
            </div>
            <div>
              <div className="font-serif text-lg font-bold leading-tight md:text-xl">{BRAND.farm}</div>
              <div className="text-xs font-medium text-[#6a5a35]">{BRAND.developedBy}</div>
            </div>
          </button>

          <nav className="hidden items-center gap-2 lg:flex">
            {steps.slice(0, 9).map((s, i) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                  i === stepIndex ? "bg-[#243b22] text-white" : "text-[#35472b] hover:bg-[#e8dec5]"
                }`}
              >
                {s.nav}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="rounded-full border border-[#c9b887] bg-white px-3 py-2 text-sm font-semibold shadow-sm"
              aria-label="Language"
            >
              {Object.entries(translations).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="rounded-full bg-[#243b22] p-2 text-white lg:hidden"
              aria-label="Open menu"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <div className="h-1 bg-[#e4d7b8]">
          <div className="h-1 bg-[#6c7a35] transition-all" style={{ width: `${progress}%` }} />
        </div>

        {menuOpen && (
          <div className="border-t border-[#d9caa5] bg-[#fffaf0] px-4 py-4 lg:hidden">
            <div className="grid grid-cols-2 gap-2">
              {steps.map((s) => (
                <button
                  key={s.id}
                  onClick={() => go(s.id)}
                  className={`rounded-xl px-3 py-3 text-left text-sm font-semibold ${
                    s.id === step.id ? "bg-[#243b22] text-white" : "bg-white text-[#243b22]"
                  }`}
                >
                  {s.nav}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#20351f] via-[#3e552e] to-[#d9b46f]" />
          <SmartImage paths={step.image} alt={step.title} className="absolute inset-0 h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#142214]/95 via-[#142214]/70 to-transparent" />

          <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-4 py-16 md:px-8 lg:grid-cols-[1.05fr_.95fr]">
            <div className="text-[#fff8df]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f4d58d]/50 bg-black/25 px-4 py-2 text-sm font-semibold backdrop-blur">
                <Globe2 size={17} /> {BRAND.location}
              </div>
              <h1 className="font-serif text-4xl font-black leading-tight md:text-6xl">
                {stepIndex === 0 ? t.introTitle : step.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#fff3cf] md:text-xl">
                {stepIndex === 0 ? t.introBody : step.subtitle}
              </p>
              <p className="mt-5 max-w-2xl rounded-2xl border border-[#f4d58d]/40 bg-black/25 p-4 text-base font-semibold leading-7 text-[#fff8df]">
                {t.ecosystem}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={primaryAction}
                  className="inline-flex items-center gap-2 rounded-full bg-[#f4d58d] px-6 py-3 font-bold text-[#172617] shadow-xl transition hover:scale-[1.02]"
                >
                  {stepIndex === 0 ? t.start : step.actionLabel} <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => go("marketplace")}
                  className="inline-flex items-center gap-2 rounded-full border border-[#fff8df]/60 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <ShoppingBasket size={18} /> {t.shop}
                </button>
                <button
                  onClick={() => go("feedback")}
                  className="inline-flex items-center gap-2 rounded-full border border-[#fff8df]/60 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <MessageSquare size={18} /> {t.respond}
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#fff8df]/25 bg-[#fff8df]/95 p-4 shadow-2xl backdrop-blur">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <SmartImage paths={step.image} alt={step.title} className="h-[330px] w-full object-cover" />
                <div className="absolute left-4 top-4 rounded-full bg-[#243b22] p-3 text-white shadow-lg">
                  <Icon size={26} />
                </div>
              </div>
              <div className="p-5">
                <div className="mb-2 text-sm font-bold uppercase tracking-[.2em] text-[#8b6f2d]">
                  Step {stepIndex + 1} of {steps.length}
                </div>
                <h2 className="font-serif text-3xl font-black text-[#172617]">{step.title}</h2>
                <p className="mt-3 leading-7 text-[#3b4d32]">{step.details}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr]">
            <aside className="rounded-[2rem] border border-[#dfd0aa] bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold">{t.jump}</h3>
                <span className="rounded-full bg-[#eef0df] px-3 py-1 text-sm font-bold text-[#4a5c27]">{progress}%</span>
              </div>
              <div className="space-y-2">
                {steps.map((s, i) => {
                  const SIcon = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => go(s.id)}
                      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                        i === stepIndex
                          ? "bg-[#243b22] text-white shadow-md"
                          : "bg-[#fbf7ed] text-[#243b22] hover:bg-[#efe3c6]"
                      }`}
                    >
                      <SIcon size={19} />
                      <span className="font-bold">{s.nav}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-[#dfd0aa] bg-white p-6 shadow-sm md:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-full bg-[#243b22] p-3 text-white">
                    <Icon size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-[.18em] text-[#8b6f2d]">Guided pathway</div>
                    <h2 className="font-serif text-3xl font-black">{step.title}</h2>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {step.bullets.map((bullet) => (
                    <div key={bullet} className="rounded-2xl bg-[#f8f3e7] p-5">
                      <CheckCircle2 className="mb-3 text-[#5c6f2e]" />
                      <p className="font-semibold leading-7 text-[#2c3f27]">{bullet}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={back}
                    disabled={stepIndex === 0}
                    className="inline-flex items-center gap-2 rounded-full border border-[#c9b887] bg-white px-5 py-3 font-bold text-[#243b22] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowLeft size={18} /> {t.back}
                  </button>
                  <button
                    onClick={primaryAction}
                    className="inline-flex items-center gap-2 rounded-full bg-[#243b22] px-5 py-3 font-bold text-white shadow-md"
                  >
                    {step.actionLabel} <ArrowRight size={18} />
                  </button>
                  {step.secondaryLabel && (
                    <button
                      onClick={secondaryAction}
                      className="inline-flex items-center gap-2 rounded-full bg-[#f4d58d] px-5 py-3 font-bold text-[#172617]"
                    >
                      {step.secondaryLabel}
                    </button>
                  )}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <InfoCard icon={Building2} title="Place-Based" text="Rooted at the Historic Lansdowne Airport with a long-term destination opportunity." />
                <InfoCard icon={Leaf} title="Chemical-Free Food" text="Focus on trusted, quality food, seedlings, herbs, and practical growing support." />
                <InfoCard icon={Camera} title="Memorable Experience" text="Designed for tours, registration, partner review, media, and community engagement." />
              </div>

              {step.id === "feedback" && (
                <div className="rounded-[2rem] border border-[#dfd0aa] bg-white p-6 shadow-sm md:p-8">
                  <h2 className="font-serif text-3xl font-black">Demo Feedback / Interest Form</h2>
                  <p className="mt-2 leading-7 text-[#3b4d32]">
                    This section lets the demo visitor respond. In production, connect this form to HubSpot, Supabase, Airtable, Google Forms, or your CRM.
                  </p>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <input
                      value={feedback.name}
                      onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
                      placeholder="Name"
                      className="rounded-2xl border border-[#c9b887] px-4 py-3"
                    />
                    <select
                      value={feedback.role}
                      onChange={(e) => setFeedback({ ...feedback, role: e.target.value })}
                      className="rounded-2xl border border-[#c9b887] px-4 py-3"
                    >
                      <option value="">Select your role</option>
                      {roleOptions.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                    <textarea
                      value={feedback.message}
                      onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
                      placeholder="What would you like to do next?"
                      className="min-h-[130px] rounded-2xl border border-[#c9b887] px-4 py-3 md:col-span-2"
                    />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      onClick={() => alert("Demo response captured visually. Connect this button to your CRM or form endpoint for live collection.")}
                      className="inline-flex items-center gap-2 rounded-full bg-[#243b22] px-6 py-3 font-bold text-white"
                    >
                      <Send size={18} /> Submit Demo Response
                    </button>
                    <button
                      onClick={() => window.open(BRAND.eventbrite, "_blank", "noopener,noreferrer")}
                      className="rounded-full bg-[#f4d58d] px-6 py-3 font-bold text-[#172617]"
                    >
                      {t.register}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d9caa5] bg-[#1d301d] px-4 py-10 text-[#fff8df] md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl font-black">{BRAND.farm}</h2>
            <p className="mt-3 max-w-2xl leading-7 text-[#efe3c6]">
              A guided ecosystem experience connecting food access, growers, marketplace participation, youth workforce, partners, and agritourism at the Historic Lansdowne Airport in Youngstown, Ohio.
            </p>
            <p className="mt-4 text-sm font-bold text-[#f4d58d]">{BRAND.developedBy}</p>
          </div>
          <FooterLink title="Website" label="BronsonFamilyFarm.com" href={BRAND.website} />
          <FooterLink title="Marketplace" label="GrownBy Store" href={BRAND.grownby} />
        </div>
      </footer>
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-[#dfd0aa] bg-white p-6 shadow-sm">
      <div className="mb-4 inline-flex rounded-full bg-[#eef0df] p-3 text-[#4a5c27]">
        <Icon size={24} />
      </div>
      <h3 className="font-serif text-2xl font-bold">{title}</h3>
      <p className="mt-2 leading-7 text-[#3b4d32]">{text}</p>
    </div>
  );
}

function FooterLink({ title, label, href }: { title: string; label: string; href: string }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-[#f4d58d]">{title}</h3>
      <a href={href} target="_blank" rel="noreferrer" className="font-bold underline decoration-[#f4d58d] underline-offset-4">
        {label}
      </a>
    </div>
  );
}

export default App;
