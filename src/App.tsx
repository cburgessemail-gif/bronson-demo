import React, { useEffect, useMemo, useState } from "react";
import {
  Sprout,
  ShoppingCart,
  GraduationCap,
  ShieldCheck,
  Handshake,
  MapPin,
  Sun,
  Leaf,
  CalendarDays,
  ArrowLeft,
  Play,
} from "lucide-react";

type RoleKey =
  | "home"
  | "guest"
  | "customer"
  | "grower"
  | "youth"
  | "supervisor"
  | "partner";

export default function App() {
  const [page, setPage] = useState<RoleKey>("home");
  const [hero, setHero] = useState(0);

  const heroImages = useMemo(
    () => [
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1600&auto=format&fit=crop",
    ],
    []
  );

  useEffect(() => {
    const t = setInterval(() => {
      setHero((v) => (v + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(t);
  }, [heroImages.length]);

  const shell = (content: React.ReactNode) => (
    <div className="min-h-screen bg-gradient-to-b from-[#08130c] via-[#102217] to-[#1a2e1d] text-white">
      <header className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
        <button
          onClick={() => setPage("home")}
          className="flex items-center gap-2 text-sm hover:text-lime-300"
        >
          <ArrowLeft size={16} />
          Entrance
        </button>

        <div className="text-right">
          <div className="font-bold tracking-wide">Bronson Family Farm</div>
          <div className="text-xs text-white/70">
            Regenerative Ecosystem - Youngstown, Ohio
          </div>
        </div>
      </header>

      <main className="p-6 max-w-6xl mx-auto">{content}</main>
    </div>
  );

  const pageData: Record<string, { title: string; subtitle: string; items: [string, string][] }> = {
    guest: {
      title: "Guest Experience the Meaning",
      subtitle: "This land exists for restoration, wellness, and opportunity.",
      items: [
        ["Why the Land Matters", "Restoration and stewardship."],
        ["Why the Farm Exists", "Healthy food and pathways forward."],
        ["Family Legacy", "Inspired by generations of growers."],
        ["Why People Return", "Hope, learning, welcome, beauty."],
      ],
    },
    customer: {
      title: "Customer Marketplace",
      subtitle: "Fresh produce, Bubble Babies, recipes, nutrition.",
      items: [
        ["Marketplace", "Order and pickup produce."],
        ["Recipes", "Simple healthy meals."],
        ["Nutrition", "Learn real food benefits."],
        ["Specials", "Returning customer updates."],
      ],
    },
    grower: {
      title: "Grower Network",
      subtitle: "Planning, supplies, collaboration, sales.",
      items: [
        ["Crop Calendar", "Season planning support."],
        ["Supply Access", "Tools, seedlings, inputs."],
        ["Sell Through Network", "Marketplace pathways."],
        ["Community", "Connect with growers."],
      ],
    },
    youth: {
      title: "Youth Workforce Program",
      subtitle: "Hands-on learning, leadership, future pathways.",
      items: [
        ["Learn", "Growing and teamwork."],
        ["Earn Experience", "Real participation."],
        ["Leadership", "Confidence building."],
        ["Future Pathways", "Business, trades, agriculture."],
      ],
    },
    supervisor: {
      title: "Supervisor Portal",
      subtitle: "Support structure for youth workforce.",
      items: [
        ["Attendance", "Track participation."],
        ["Assignments", "Manage tasks."],
        ["Safety", "Safe environment."],
        ["Support", "Mentoring resources."],
      ],
    },
    partner: {
      title: "Partner Opportunity",
      subtitle: "Food access, workforce, restoration, growth.",
      items: [
        ["118+ Acre Vision", "Transformative land use."],
        ["Food Access", "Healthy local pathways."],
        ["Youth Impact", "Workforce development."],
        ["Visibility", "Community sponsorship."],
      ],
    },
  };

  if (page !== "home") {
    const p = pageData[page];
    return shell(
      <>
        <h1 className="text-4xl font-bold">{p.title}</h1>
        <p className="mt-2 text-white/75 max-w-3xl">{p.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {p.items.map((x, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 bg-white/5 border border-white/10"
            >
              <div className="font-bold text-lg text-lime-300">{x[0]}</div>
              <div className="mt-2 text-white/80">{x[1]}</div>
            </div>
          ))}
        </div>

        {page === "customer" && (
          <a
            href="https://grownby.com/farms/bronson-family-farm/shop"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block px-5 py-3 rounded-xl bg-lime-500 text-black font-bold"
          >
            Enter Marketplace
          </a>
        )}
      </>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#08130c] text-white">
      <img
        src={heroImages[hero]}
        alt="Farm"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mt-8">
          <div className="text-sm tracking-[0.4em] text-lime-300">
            WELCOME TO
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Bronson Family Farm
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-white/90">
            A regenerative ecosystem responding to rising food costs,
            unhealthy substitutes, and the need for opportunity.
          </p>

          <button
            onClick={() => setPage("guest")}
            className="mt-6 px-6 py-3 rounded-2xl bg-lime-500 text-black font-bold inline-flex gap-2 items-center"
          >
            <Play size={18} />
            Enter Live Demo
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          <QuickCard icon={<Sun />} title="Youngstown Weather" text="Live conditions integrated" />
          <QuickCard icon={<CalendarDays />} title="Events" text="Growers Supply Market and more" />
          <QuickCard icon={<Leaf />} title="Season Focus" text="Spring planting and growth" />
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <RoleCard icon={<MapPin />} title="Guest" onClick={() => setPage("guest")} />
          <RoleCard icon={<ShoppingCart />} title="Customer" onClick={() => setPage("customer")} />
          <RoleCard icon={<Sprout />} title="Grower" onClick={() => setPage("grower")} />
          <RoleCard icon={<GraduationCap />} title="Youth Worker" onClick={() => setPage("youth")} />
          <RoleCard icon={<ShieldCheck />} title="Supervisor" onClick={() => setPage("supervisor")} />
          <RoleCard icon={<Handshake />} title="Partner" onClick={() => setPage("partner")} />
        </div>
      </div>
    </div>
  );
}

function RoleCard({
  icon,
  title,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-2xl p-5 bg-white/10 backdrop-blur border border-white/10 hover:bg-white/20 transition text-left"
    >
      <div className="mb-3 text-lime-300">{icon}</div>
      <div className="font-bold text-xl">{title}</div>
    </button>
  );
}

function QuickCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl p-4 bg-white/10 backdrop-blur border border-white/10">
      <div className="text-lime-300 mb-2">{icon}</div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-white/75">{text}</div>
    </div>
  );
}
