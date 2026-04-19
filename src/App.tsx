import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeDollarSign,
  BookOpen,
  CalendarDays,
  Carrot,
  CheckCircle2,
  CloudSun,
  Heart,
  Home,
  Leaf,
  MapPin,
  Menu,
  PanelsTopLeft,
  PlayCircle,
  ShoppingBasket,
  Sprout,
  Star,
  Store,
  Trees,
  Users,
  UtensilsCrossed,
  Warehouse,
  X,
} from "lucide-react";

type PageKey =
  | "home"
  | "guest"
  | "customer"
  | "grower"
  | "youth"
  | "supervisor"
  | "vendor"
  | "partner"
  | "marketplace"
  | "story"
  | "calendar"
  | "events";

type RoleCard = {
  key: Exclude<PageKey, "home" | "marketplace" | "story" | "calendar" | "events">;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  tagline: string;
  summary: string;
  image: string;
  features: string[];
  primaryAction: { label: string; go: PageKey };
};

const IMAGE_MAP = {
  entrance: "/images/farm-entrance.jpg",
  guest: "/images/guest-purpose.jpg",
  customer: "/images/customer-market.jpg",
  grower: "/images/grower-network.jpg",
  youth: "/images/youth-workforce.jpg",
  supervisor: "/images/supervisor-support.jpg",
  vendor: "/images/vendor-market.jpg",
  partner: "/images/partner-impact.jpg",
  story: "/images/story-legacy.jpg",
  marketplace: "/images/marketplace-grownby.jpg",
  calendar: "/images/calendar-grow.jpg",
  events: "/images/events-farm.jpg",
};

const APP_TITLE = "Bronson Family Farm";
const APP_SUBTITLE =
  "A regenerative farm, marketplace, workforce hub, and community future.";

const roleCards: RoleCard[] = [
  {
    key: "guest",
    title: "Guest",
    icon: Trees,
    eyebrow: "Start with meaning",
    tagline: "Experience the land, the legacy, and the purpose.",
    summary:
      "Guests should understand why this land matters, why the farm exists, and why Bronson Family Farm is more than a place to visit.",
    image: IMAGE_MAP.guest,
    features: [
      "Why this land matters",
      "The story behind the vision",
      "What guests can experience",
      "Why people return",
    ],
    primaryAction: { label: "Enter Guest Experience", go: "guest" },
  },
  {
    key: "customer",
    title: "Customer",
    icon: ShoppingBasket,
    eyebrow: "Food, learning, return visits",
    tagline: "Shop, learn, plan meals, and return with purpose.",
    summary:
      "Customers move easily into the marketplace, discover Bubble Babies™, seedlings, produce, recipes, and healthier food guidance.",
    image: IMAGE_MAP.customer,
    features: [
      "Marketplace access",
      "Recipes and nutrition",
      "Bubble Babies™ and seedlings",
      "Pickup and repeat visit pathways",
    ],
    primaryAction: { label: "Open Customer Journey", go: "customer" },
  },
  {
    key: "grower",
    title: "Grower",
    icon: Sprout,
    eyebrow: "Production and planning",
    tagline: "Grow with a practical ecosystem, not a static page.",
    summary:
      "Growers should feel invited into crop planning, seasonal timing, collaboration, and a place-based supply ecosystem.",
    image: IMAGE_MAP.grower,
    features: [
      "Crop planning calendar",
      "Seasonal tasks",
      "Supplies and support",
      "Grower ecosystem vision",
    ],
    primaryAction: { label: "Open Grower Path", go: "grower" },
  },
  {
    key: "youth",
    title: "Youth Workforce",
    icon: Users,
    eyebrow: "Learning by doing",
    tagline: "From exposure to responsibility, confidence, and skill.",
    summary:
      "Youth participants should see the farm as a place for hands-on learning, teamwork, stewardship, and future pathways.",
    image: IMAGE_MAP.youth,
    features: [
      "Hands-on farm roles",
      "Learning pathways",
      "Wellness and structure",
      "Workforce readiness",
    ],
    primaryAction: { label: "Open Youth Journey", go: "youth" },
  },
  {
    key: "supervisor",
    title: "Supervisor",
    icon: PanelsTopLeft,
    eyebrow: "Youth workforce support",
    tagline: "Guide structure, support, safety, and growth.",
    summary:
      "Supervisor is part of the youth workforce program and includes oversight, encouragement, support resources, and operational coordination.",
    image: IMAGE_MAP.supervisor,
    features: [
      "Attendance and check-ins",
      "Role assignments",
      "Support staff resources",
      "Progress visibility",
    ],
    primaryAction: { label: "Open Supervisor View", go: "supervisor" },
  },
  {
    key: "vendor",
    title: "Vendor",
    icon: Store,
    eyebrow: "Growers Supply Market",
    tagline: "Show up prepared, visible, and connected to the event flow.",
    summary:
      "Vendors should see a clean path into the Growers Supply Market experience, setup expectations, and event participation value.",
    image: IMAGE_MAP.vendor,
    features: [
      "Event readiness",
      "Vendor visibility",
      "Market participation",
      "Onsite flow preview",
    ],
    primaryAction: { label: "Open Vendor Path", go: "vendor" },
  },
  {
    key: "partner",
    title: "Partner",
    icon: Heart,
    eyebrow: "Impact and alignment",
    tagline: "See the opportunity, the alignment, and the reason to join.",
    summary:
      "Partners and funders should quickly understand the land opportunity, youth impact, food access mission, and regenerative future.",
    image: IMAGE_MAP.partner,
    features: [
      "Why invest",
      "Community alignment",
      "Impact opportunities",
      "Shared future vision",
    ],
    primaryAction: { label: "Open Partner View", go: "partner" },
  },
];

const countdownTarget = new Date("2026-05-16T09:00:00-04:00");

function useCountdown(target: Date) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const diff = Math.max(0, target.getTime() - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function useTypewriter(lines: string[], speed = 18) {
  const [display, setDisplay] = useState("");
  const fullText = useMemo(() => lines.join("\n\n"), [lines]);

  useEffect(() => {
    let i = 0;
    setDisplay("");
    const id = window.setInterval(() => {
      i += 1;
      setDisplay(fullText.slice(0, i));
      if (i >= fullText.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [fullText, speed]);

  return display;
}

function formatNow() {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());
}

function bgStyle(image: string, overlay = "rgba(7,26,17,.60)") {
  return {
    backgroundImage: `linear-gradient(${overlay}, ${overlay}), url("${image}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  } as React.CSSProperties;
}

function NavButton({
  label,
  onClick,
  active,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition ${
        active
          ? "border-white/70 bg-white text-slate-900"
          : "border-white/20 bg-white/5 text-white hover:bg-white/10"
      }`}
    >
      {label}
    </button>
  );
}

function SectionCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-md">
      <div className="mb-3 inline-flex rounded-2xl bg-white/10 p-3">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-6 text-white/80">{text}</p>
    </div>
  );
}

function StatTile({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/20 p-5 text-center backdrop-blur-md">
      <div className="text-3xl font-semibold text-white">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/65">
        {label}
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<PageKey>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [tourOn, setTourOn] = useState(true);
  const [narrationOn, setNarrationOn] = useState(true);

  const countdown = useCountdown(countdownTarget);

  const currentRole = roleCards.find((r) => r.key === page);

  const homeNarration = useTypewriter(
    [
      "Welcome to Bronson Family Farm.",
      "This is not just a farm visit. It is a living ecosystem shaped by restoration, food access, workforce development, and the belief that people should want to come back again and again.",
      "Choose a pathway to enter the experience.",
    ],
    14
  );

  useEffect(() => {
    if (!narrationOn) return;
    const narrationMap: Record<PageKey, string> = {
      home:
        "Welcome to Bronson Family Farm. Choose a pathway to enter the experience.",
      guest:
        "Guest experience opens with the land, the legacy, and the reason this place exists.",
      customer:
        "Customer experience connects food, recipes, Bubble Babies, produce, and the marketplace.",
      grower:
        "Grower experience centers crop planning, supplies, ecosystem participation, and seasonal action.",
      youth:
        "Youth workforce experience emphasizes learning, responsibility, structure, and growth.",
      supervisor:
        "Supervisor experience supports the youth workforce with coordination, oversight, and care.",
      vendor:
        "Vendor experience connects to the Growers Supply Market and event readiness.",
      partner:
        "Partner experience shows alignment, impact, and investment opportunity.",
      marketplace:
        "Marketplace experience highlights Bubble Babies, seedlings, produce, pickups, and customer return pathways.",
      story:
        "The story page explains the meaning behind the land and the vision.",
      calendar:
        "The calendar page shows rhythm, season, and practical growing flow.",
      events:
        "Events page connects visitors to the market, demonstrations, and what to expect onsite.",
    };

    const utteranceText = narrationMap[page];
    if (!utteranceText || !("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(utteranceText);
    utterance.lang = "en-US";
    utterance.rate = 0.95;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);

    return () => window.speechSynthesis.cancel();
  }, [page, narrationOn]);

  function go(next: PageKey) {
    setPage(next);
    setMenuOpen(false);
  }

  const marketplaceItems = [
    {
      name: "Bubble Babies™",
      desc: "Bronson Family Farm’s seed-starting system for early growing momentum.",
      price: "Featured",
      icon: Star,
    },
    {
      name: "Seedlings",
      desc: "Tomatoes, peppers, collards, cabbage, broccoli, lettuce, spinach, kale, and more.",
      price: "Seasonal",
      icon: Sprout,
    },
    {
      name: "Fresh Produce",
      desc: "Farm-grown items available for preorder, pickup, events, and community access.",
      price: "Fresh",
      icon: Carrot,
    },
    {
      name: "Recipes & Guidance",
      desc: "Practical food education tied to healthier choices and repeat visits.",
      price: "Included",
      icon: UtensilsCrossed,
    },
  ];

  return (
    <div className="min-h-screen bg-[#09140d] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(80,145,89,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(148,97,34,0.12),transparent_24%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#08110c]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <button
            onClick={() => go("home")}
            className="flex items-center gap-3 text-left"
          >
            <div className="rounded-2xl bg-white/10 p-2">
              <Leaf className="h-5 w-5 text-emerald-200" />
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-white/55">
                Live Demo
              </div>
              <div className="text-lg font-semibold">{APP_TITLE}</div>
            </div>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            <NavButton label="Home" onClick={() => go("home")} active={page === "home"} />
            <NavButton label="Story" onClick={() => go("story")} active={page === "story"} />
            <NavButton
              label="Marketplace"
              onClick={() => go("marketplace")}
              active={page === "marketplace"}
            />
            <NavButton
              label="Calendar"
              onClick={() => go("calendar")}
              active={page === "calendar"}
            />
            <NavButton label="Events" onClick={() => go("events")} active={page === "events"} />
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => setTourOn((v) => !v)}
              className={`rounded-full border px-4 py-2 text-sm ${
                tourOn
                  ? "border-emerald-300/40 bg-emerald-200/10 text-white"
                  : "border-white/15 bg-white/5 text-white/75"
              }`}
            >
              Guided Tour {tourOn ? "On" : "Off"}
            </button>
            <button
              onClick={() => setNarrationOn((v) => !v)}
              className={`rounded-full border px-4 py-2 text-sm ${
                narrationOn
                  ? "border-amber-300/40 bg-amber-200/10 text-white"
                  : "border-white/15 bg-white/5 text-white/75"
              }`}
            >
              Narration {narrationOn ? "On" : "Off"}
            </button>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-2xl border border-white/10 bg-white/5 p-2 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0b1610] lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4 md:px-6">
              {[
                ["Home", "home"],
                ["Story", "story"],
                ["Marketplace", "marketplace"],
                ["Calendar", "calendar"],
                ["Events", "events"],
                ["Guest", "guest"],
                ["Customer", "customer"],
                ["Grower", "grower"],
                ["Youth Workforce", "youth"],
                ["Supervisor", "supervisor"],
                ["Vendor", "vendor"],
                ["Partner", "partner"],
              ].map(([label, key]) => (
                <button
                  key={key}
                  onClick={() => go(key as PageKey)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-white/90"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {page === "home" && (
        <main>
          <section
            className="relative overflow-hidden"
            style={bgStyle(IMAGE_MAP.entrance, "rgba(6,20,13,.52)")}
          >
            <div className="mx-auto grid min-h-[78vh] max-w-7xl items-end px-4 py-12 md:px-6 lg:grid-cols-[1.2fr_.8fr] lg:gap-10 lg:py-16">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/75">
                  <PlayCircle className="h-4 w-4" />
                  Final Master Demo
                </div>

                <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                  Step Into Something Different
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/86 md:text-xl">
                  {APP_SUBTITLE}
                </p>

                <p className="mt-6 max-w-2xl whitespace-pre-line rounded-3xl border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/82 backdrop-blur-md">
                  {tourOn ? homeNarration : "Choose a pathway below to enter the live experience."}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={() => go("guest")}
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]"
                  >
                    Enter Live Demo
                  </button>
                  <button
                    onClick={() => go("marketplace")}
                    className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Open Marketplace
                  </button>
                  <button
                    onClick={() => go("story")}
                    className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Why This Exists
                  </button>
                </div>
              </div>

              <div className="mt-10 grid gap-4 lg:mt-0">
                <div className="rounded-[28px] border border-white/10 bg-black/25 p-5 backdrop-blur-md">
                  <div className="mb-3 flex items-center gap-2 text-sm text-white/72">
                    <CalendarDays className="h-4 w-4" />
                    {formatNow()}
                  </div>
                  <div className="text-xl font-semibold">Growers Supply Market</div>
                  <div className="mt-1 text-sm text-white/72">May 16, 2026 • 9:00 AM–2:00 PM</div>
                  <div className="mt-4 grid grid-cols-4 gap-3">
                    <StatTile value={`${countdown.days}`} label="Days" />
                    <StatTile value={`${countdown.hours}`} label="Hours" />
                    <StatTile value={`${countdown.minutes}`} label="Minutes" />
                    <StatTile value={`${countdown.seconds}`} label="Seconds" />
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-black/25 p-5 backdrop-blur-md">
                  <div className="mb-3 flex items-center gap-2 text-sm text-white/72">
                    <CloudSun className="h-4 w-4" />
                    Youngstown Snapshot
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/8 p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/55">
                        Today
                      </div>
                      <div className="mt-2 text-2xl font-semibold">Local Weather</div>
                      <div className="mt-2 text-sm text-white/75">
                        Live weather can be embedded on deployment for a real-time look and feel.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/8 p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/55">
                        Focus
                      </div>
                      <div className="mt-2 text-2xl font-semibold">Return Value</div>
                      <div className="mt-2 text-sm text-white/75">
                        Designed to make guests, customers, growers, and partners want to come back.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-emerald-200/70">
                  Role pathways
                </div>
                <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                  Enter by purpose
                </h2>
              </div>
              <button
                onClick={() => go("events")}
                className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm md:block"
              >
                Explore Events
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {roleCards.map((role) => {
                const Icon = role.icon;
                return (
                  <div
                    key={role.key}
                    className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0d1a12]"
                  >
                    <div className="h-52" style={bgStyle(role.image, "rgba(8,20,14,.38)")} />
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="rounded-2xl bg-white/8 p-3">
                          <Icon className="h-5 w-5 text-emerald-200" />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-[0.22em] text-white/52">
                            {role.eyebrow}
                          </div>
                          <div className="text-2xl font-semibold">{role.title}</div>
                        </div>
                      </div>

                      <p className="text-base leading-7 text-white/88">{role.tagline}</p>
                      <p className="mt-3 text-sm leading-6 text-white/68">{role.summary}</p>

                      <div className="mt-5 grid gap-2">
                        {role.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm text-white/78"
                          >
                            <CheckCircle2 className="h-4 w-4 text-emerald-200" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => go(role.primaryAction.go)}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900"
                      >
                        {role.primaryAction.label}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      )}

      {page === "story" && (
        <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div
            className="overflow-hidden rounded-[34px] border border-white/10"
            style={bgStyle(IMAGE_MAP.story, "rgba(6,18,12,.58)")}
          >
            <div className="grid min-h-[72vh] items-end px-6 py-8 md:px-10 lg:grid-cols-[1fr_.95fr] lg:gap-8">
              <div className="max-w-3xl">
                <div className="text-xs uppercase tracking-[0.28em] text-emerald-200/70">
                  Why this exists
                </div>
                <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
                  Purpose, Meaning & Living Ecosystem
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                  Bronson Family Farm was not created as just another place to visit. It exists in
                  response to rising food costs, overprocessed substitutes, disconnection from land,
                  the need for healthier access, and the desire to restore both land and community.
                </p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
                  This vision carries family legacy, agricultural memory, cultural inheritance, and
                  the belief that land can still feed people, teach people, gather people, and open
                  new pathways for the future.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    onClick={() => go("guest")}
                    className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900"
                  >
                    Enter as Guest
                  </button>
                  <button
                    onClick={() => go("partner")}
                    className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
                  >
                    View Partner Opportunity
                  </button>
                </div>
              </div>

              <div className="mt-8 grid gap-4 lg:mt-0">
                <SectionCard
                  icon={Trees}
                  title="Why the Land Matters"
                  text="This land is not just scenery. It represents restoration, stewardship, and the opportunity to turn underused ground into nourishment, learning, gathering, and belonging."
                />
                <SectionCard
                  icon={Carrot}
                  title="Why the Farm Exists"
                  text="The farm responds to real need: food costs are rising, too many families are forced toward unhealthy substitutes, and communities need stronger local pathways to healthier living."
                />
                <SectionCard
                  icon={BookOpen}
                  title="Why the Story Matters"
                  text="The vision grows from family farming legacy, memory, cultural roots, and the belief that community healing can begin with land, food, and purpose."
                />
                <SectionCard
                  icon={Heart}
                  title="Why People Return"
                  text="This is not meant to feel like a one-time stop. It is designed as a place of welcome, meaning, education, beauty, and repeat connection."
                />
              </div>
            </div>
          </div>
        </main>
      )}

      {page === "marketplace" && (
        <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <section
            className="overflow-hidden rounded-[34px] border border-white/10"
            style={bgStyle(IMAGE_MAP.marketplace, "rgba(8,20,14,.50)")}
          >
            <div className="px-6 py-8 md:px-10 lg:grid lg:grid-cols-[1.1fr_.9fr] lg:gap-8">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-emerald-200/70">
                  Marketplace
                </div>
                <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
                  Food, seedlings, Bubble Babies™, and return visits
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                  The marketplace should feel alive and connected to GrownBy, preorder pickup,
                  produce access, recipes, nutrition guidance, and the everyday reasons customers
                  come back.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="https://grownby.com/farms/bronson-family-farm/shop"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900"
                  >
                    Enter GrownBy Store
                  </a>
                  <button
                    onClick={() => go("customer")}
                    className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
                  >
                    Customer Journey
                  </button>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {marketplaceItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="rounded-[28px] border border-white/10 bg-black/20 p-5 backdrop-blur-md"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <div className="rounded-2xl bg-white/10 p-3">
                            <Icon className="h-5 w-5 text-emerald-200" />
                          </div>
                          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/70">
                            {item.price}
                          </div>
                        </div>
                        <div className="text-lg font-semibold">{item.name}</div>
                        <div className="mt-2 text-sm leading-6 text-white/76">{item.desc}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 lg:mt-0">
                <div className="rounded-[30px] border border-white/10 bg-black/25 p-6 backdrop-blur-md">
                  <div className="mb-4 flex items-center gap-2 text-sm text-white/75">
                    <BadgeDollarSign className="h-4 w-4" />
                    Customer return pathway
                  </div>
                  <div className="space-y-4">
                    {[
                      "Discover Bubble Babies™, seedlings, and produce",
                      "See recipes and practical food education",
                      "Preorder through the store",
                      "Pick up at farm or market destination",
                      "Return for new offerings, events, and seasonal updates",
                    ].map((step, index) => (
                      <div
                        key={step}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-900">
                          {index + 1}
                        </div>
                        <div className="text-sm leading-6 text-white/82">{step}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[26px] border border-emerald-300/20 bg-emerald-200/10 p-5">
                    <div className="text-xs uppercase tracking-[0.24em] text-emerald-100/80">
                      Customer value
                    </div>
                    <div className="mt-2 text-xl font-semibold">More than a store</div>
                    <div className="mt-2 text-sm leading-6 text-white/80">
                      The customer experience should support healthier choices, practical meal
                      planning, repeat engagement, and a visible connection to the farm’s larger
                      mission.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {page === "calendar" && (
        <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <section
            className="overflow-hidden rounded-[34px] border border-white/10"
            style={bgStyle(IMAGE_MAP.calendar, "rgba(8,17,12,.56)")}
          >
            <div className="px-6 py-8 md:px-10">
              <div className="max-w-3xl">
                <div className="text-xs uppercase tracking-[0.28em] text-emerald-200/70">
                  Grower rhythm
                </div>
                <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
                  Seasonal crop planning and ecosystem timing
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/84">
                  The grower calendar should feel practical, seasonal, and alive — a place for
                  planning, preparing, transplanting, harvesting,
