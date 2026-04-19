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

  if (page === "guest") {
    return shell(
      <Section
        title="Guest Experience the Meaning"
        subtitle="This is not just a visit. This is why the farm exists."
      >
        <Grid4
          items={[
            [
              "Why the Land Matters",
              "This land represents restoration, stewardship, and future opportunity.",
            ],
            [
              "Why the Farm Exists",
              "Rising food costs and unhealthy substitutes create a need for local healthier pathways.",
            ],
            [
              "Family Legacy",
              "Inspired by agricultural roots, family history, and the belief that land can still nourish communities.",
            ],
            [
              "Why People Return",
              "Visitors feel purpose, welcome, beauty, learning, and hope.",
            ],
          ]}
        />
      </Section>
    );
  }

  if (page === "customer") {
    return shell(
      <Section
        title="Customer Marketplace"
        subtitle="Fresh produce, Bubble Babies, recipes, nutrition, and pickup ordering."
      >
        <Grid4
          items={[
            ["Marketplace", "Enter store ordering flow and pickup experience."],
            ["Recipes", "Simple healthy meals using seasonal produce."],
            ["Nutrition", "Learn how real food supports family wellness."],
            ["Buying Habits", "Return customers receive updates and specials."],
          ]}
        />

        <a
          href="https://grownby.com/farms/bronson-family-farm/shop"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block px-5 py-3 rounded-xl bg-lime-500 text-black font-bold"
        >
          Enter Marketplace
        </a>
      </Section>
    );
  }

  if (page === "grower") {
    return shell(
      <Section
        title="Grower Network"
        subtitle="Crop planning, supplies, collaboration, and seasonal opportunity."
      >
        <Grid4
          items={[
            ["Crop Calendar", "Plan planting windows and harvest cycles."],
            ["Supply Access", "Inputs, seedlings, tools, and grower support."],
            ["Sell Through Network", "Marketplace pathways and event sales."],
            ["Community", "Connect with local growers and producers."],
          ]}
        />
      </Section>
    );
  }

  if (page === "youth") {
    return shell(
      <Section
        title="Youth Workforce Program"
        subtitle="Hands-on pathways in agriculture, logistics, customer service, and leadership."
      >
        <Grid4
          items={[
            ["Learn", "Growing, harvesting, teamwork, responsibility."],
            ["Earn Experience", "Real project participation."],
            ["Leadership", "Confidence and communication development."],
            ["Future Pathways", "Agriculture, trades, business, entrepreneurship."],
          ]}
        />
      </Section>
    );
  }

  if (page === "supervisor") {
    return shell(
      <Section
        title="Supervisor Portal"
        subtitle="Support structure for the Youth Workforce Program."
      >
        <Grid4
          items={[
            ["Attendance", "Track participation and punctuality."],
            ["Assignments", "Manage teams and daily tasks."],
            ["Safety", "Ensure safe work environments."],
            ["Support", "Coordinate mentoring and wellness resources."],
          ]}
        />
      </Section>
    );
  }

  if (page === "partner") {
    return shell(
      <Section
        title="Partner and Funder Opportunity"
        subtitle="A place-based model for food access, youth workforce, land restoration, and economic growth."
      >
        <Grid4
          items={[
            ["118+ Acre Vision", "Transformative land use opportunity."],
            ["Food Access", "Healthy local pathways for families."],
            ["Youth Impact", "Workforce development and future readiness."],
            ["Visibility", "Meaningful community-aligned sponsorships."],
          ]}
        />
      </Section>
    );
  }

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <img
        src={heroImages[hero]}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Farm landscape"
      />
      <div className="absolute inset-0 bg-black/55" />

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
            unhealthy substitutes, community disconnection, and the need for opportunity.
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
          <QuickCard
            icon={<Sun />}
            title="Youngstown Weather"
            text="Live conditions integrated"
          />
          <QuickCard
            icon={<CalendarDays />}
            title="Events"
            text="Growers Supply Market and more"
          />
          <QuickCard
            icon={<Leaf />}
            title="Season Focus"
            text="Spring planting and community growth"
          />
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

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-2 text-white/75 max-w-3xl">{subtitle}</p>
      <div className="mt-8">{children}</div>
    </>
  );
}

function Grid4({
  items,
}: {
  items: [string, string][];
}) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((x, i) => (
        <div
          key={i}
          className="rounded-2xl p-5 bg-white/5 border border-white/10"
        >
          <div className="font-bold text-lg text-lime-300">{x[0]}</div>
          <div className="mt-2 text-white/80">{x[1]}</div>
        </div>
      ))}
    </div>
  );
}
