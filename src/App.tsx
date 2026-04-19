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
  ExternalLink,
  Users,
  BookOpen,
  Tractor,
  HeartHandshake,
} from "lucide-react";

type RoleKey =
  | "home"
  | "guest"
  | "customer"
  | "grower"
  | "youth"
  | "supervisor"
  | "partner";

type CardItem = {
  title: string;
  text: string;
};

type PageConfig = {
  title: string;
  subtitle: string;
  intro: string;
  image: string;
  items: CardItem[];
  actionLabel?: string;
  actionHref?: string;
};

export default function App() {
  const [page, setPage] = useState<RoleKey>("home");
  const [hero, setHero] = useState(0);

  const heroImages = useMemo(
    () => [
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1800&auto=format&fit=crop",
    ],
    []
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHero((v) => (v + 1) % heroImages.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [heroImages.length]);

  const pageConfig: Record<Exclude<RoleKey, "home">, PageConfig> = {
    guest: {
      title: "Guest Experience",
      subtitle: "Step into the meaning of the land, the mission, and the vision.",
      intro:
        "This is not just a farm visit. Bronson Family Farm exists to restore land, reconnect people to real food, and create opportunity through agriculture, education, and community presence.",
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop",
      items: [
        {
          title: "Why the Land Matters",
          text: "The land represents restoration, stewardship, and a living future for Youngstown families.",
        },
        {
          title: "Why the Farm Exists",
          text: "Rising food costs and unhealthy substitutes make local, nourishing pathways more important than ever.",
        },
        {
          title: "Family Legacy",
          text: "The vision is rooted in agricultural heritage, intergenerational learning, and service to community.",
        },
        {
          title: "Why People Return",
          text: "Visitors come back for beauty, education, belonging, and a sense that this place has purpose.",
        },
      ],
    },
    customer: {
      title: "Customer Marketplace",
      subtitle: "Fresh produce, Bubble Babies, recipes, nutrition, and returning-customer value.",
      intro:
        "Customers are not just buying produce. They are entering a healthier ecosystem with access to food, seasonal learning, practical recipes, and a marketplace rooted in local relationships.",
      image:
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1600&auto=format&fit=crop",
      items: [
        {
          title: "Marketplace Access",
          text: "Order produce and seedlings through the Bronson Family Farm GrownBy store.",
        },
        {
          title: "Recipes and Guidance",
          text: "Simple meal inspiration helps customers turn fresh ingredients into usable family meals.",
        },
        {
          title: "Nutrition Learning",
          text: "Customers gain practical understanding of how real food supports wellness and prevention.",
        },
        {
          title: "Return and Reconnect",
          text: "The ecosystem is designed to welcome people back again and again.",
        },
      ],
      actionLabel: "Enter Marketplace",
      actionHref: "https://grownby.com/farms/bronson-family-farm/shop",
    },
    grower: {
      title: "Grower Network",
      subtitle: "Planning, production, supplies, collaboration, and sales pathways.",
      intro:
        "Growers belong here as producers, collaborators, and ecosystem participants. This pathway supports seasonal planning, shared learning, and routes into market activity and visibility.",
      image:
        "https://images.unsplash.com/photo-1463123081488-789f998ac9c4?q=80&w=1600&auto=format&fit=crop",
      items: [
        {
          title: "Crop Planning",
          text: "Planting windows, harvest timing, and seasonal coordination support successful production.",
        },
        {
          title: "Supply and Resource Access",
          text: "Seedlings, materials, inputs, and farm knowledge can be organized through the ecosystem.",
        },
        {
          title: "Sales Pathways",
          text: "Growers can connect to events, local selling opportunities, and shared visibility.",
        },
        {
          title: "Grower Community",
          text: "The network is meant to strengthen returning participation and ongoing collaboration.",
        },
      ],
    },
    youth: {
      title: "Youth Workforce Program",
      subtitle: "Hands-on learning in agriculture, responsibility, teamwork, and future readiness.",
      intro:
        "This pathway introduces youth to real work, real expectations, and real possibility. It is designed to connect agriculture to life skills, leadership, and future employment directions.",
      image:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1600&auto=format&fit=crop",
      items: [
        {
          title: "Learn by Doing",
          text: "Youth engage directly in growing, harvesting, setup, care, and team-based work.",
        },
        {
          title: "Workforce Readiness",
          text: "Attendance, communication, task completion, and responsibility become visible habits.",
        },
        {
          title: "Confidence and Leadership",
          text: "The program helps participants build voice, discipline, and presence.",
        },
        {
          title: "Future Pathways",
          text: "Agriculture, entrepreneurship, culinary work, logistics, and trades all connect here.",
        },
      ],
    },
    supervisor: {
      title: "Supervisor Portal",
      subtitle: "Oversight, structure, accountability, and support for the youth workforce pathway.",
      intro:
        "Supervisors help hold the youth workforce experience together. This role supports daily coordination, accountability, mentoring, safety, and the practical needs of a working program.",
      image:
        "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1600&auto=format&fit=crop",
      items: [
        {
          title: "Attendance and Participation",
          text: "Track presence, punctuality, and engagement across the program.",
        },
        {
          title: "Task Coordination",
          text: "Assign work, guide teams, and help create a rhythm for the day.",
        },
        {
          title: "Safety and Environment",
          text: "Support safe work practices and a stable, respectful learning environment.",
        },
        {
          title: "Support Resources",
          text: "Supervisors help connect youth to the guidance structures surrounding the program.",
        },
      ],
    },
    partner: {
      title: "Partner and Funder Pathway",
      subtitle: "A place-based ecosystem for food access, land restoration, youth development, and economic growth.",
      intro:
        "Partners do not enter a simple sponsorship page. They enter a working vision for community transformation through regenerative agriculture, local systems building, and visible public benefit.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
      items: [
        {
          title: "118+ Acre Vision",
          text: "The land can support agriculture, events, learning, and long-term community-serving use.",
        },
        {
          title: "Food Access and Wellness",
          text: "The model responds to high food costs and the need for healthier local options.",
        },
        {
          title: "Youth and Workforce Impact",
          text: "Partnership helps build practical pathways for future workers and leaders.",
        },
        {
          title: "Aligned Visibility",
          text: "Sponsors and collaborators can be visibly connected to meaningful local transformation.",
        },
      ],
    },
  };

  if (page !== "home") {
    const config = pageConfig[page];

    return (
      <AppShell onHome={() => setPage("home")}>
        <section className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-lime-200">
              <Leaf size={14} />
              Bronson Family Farm
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              {config.title}
            </h1>

            <p className="mt-3 max-w-3xl text-lg text-white/80">
              {config.subtitle}
            </p>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 text-white/88 backdrop-blur-sm">
              {config.intro}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {config.items.map((item) => (
                <InfoCard key={item.title} title={item.title} text={item.text} />
              ))}
            </div>

            {config.actionHref && config.actionLabel && (
              <a
                href={config.actionHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-lime-400 px-6 py-3 font-bold text-black transition hover:scale-[1.01]"
              >
                {config.actionLabel}
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          <aside className="lg:pl-2">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl">
              <div
                className="h-[240px] w-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,.18), rgba(0,0,0,.38)), url(${config.image})`,
                }}
              />
              <div className="p-5">
                <div className="text-sm uppercase tracking-[0.25em] text-lime-300">
                  Pathway Purpose
                </div>
                <div className="mt-3 text-white/80">
                  Each role is meant to lead people somewhere useful inside the ecosystem, not leave them in a static presentation.
                </div>

                <div className="mt-5 grid gap-3">
                  <MiniLine
                    icon={<MapPin size={16} />}
                    text="Clear role identity"
                  />
                  <MiniLine
                    icon={<Users size={16} />}
                    text="Resource connection"
                  />
                  <MiniLine
                    icon={<BookOpen size={16} />}
                    text="Ongoing learning"
                  />
                  <MiniLine
                    icon={<HeartHandshake size={16} />}
                    text="Reason to return"
                  />
                </div>
              </div>
            </div>
          </aside>
        </section>
      </AppShell>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#08130c] bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(4,10,7,.72), rgba(8,19,12,.8)), url(${heroImages[hero]})`,
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-lime-200">
              <Sprout size={14} />
              Welcome to
            </div>

            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
              Bronson Family Farm
            </h1>

            <p className="mt-5 max-w-3xl text-lg text-white/88 md:text-xl">
              A regenerative ecosystem responding to rising food costs,
              unhealthy substitutes, community disconnection, and the need for
              real opportunity.
            </p>

            <p className="mt-4 max-w-3xl text-white/72">
              This demo introduces the land, the marketplace, the grower
              network, the youth workforce pathway, and the partnership vision
              in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setPage("guest")}
                className="inline-flex items-center gap-2 rounded-2xl bg-lime-400 px-6 py-3 font-bold text-black transition hover:scale-[1.01]"
              >
                <Play size={18} />
                Enter Live Demo
              </button>

              <a
                href="https://grownby.com/farms/bronson-family-farm/shop"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Visit Marketplace
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <QuickCard
                icon={<Sun />}
                title="Youngstown Weather"
                text="Live conditions can be integrated into the ecosystem experience."
              />
              <QuickCard
                icon={<CalendarDays />}
                title="Events and Markets"
                text="Support Growers Supply Market, farm activities, and returning visits."
              />
              <QuickCard
                icon={<Leaf />}
                title="Seasonal Focus"
                text="Spring planting, local food access, and visible community growth."
              />
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-black/20 p-4 shadow-2xl backdrop-blur-md">
            <div className="overflow-hidden rounded-[24px] border border-white/10">
              <div
                className="h-[260px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,.35)), url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600&auto=format&fit=crop)",
                }}
              />
            </div>

            <div className="mt-5 px-2">
              <div className="text-sm uppercase tracking-[0.25em] text-lime-300">
                Ecosystem Overview
              </div>
              <p className="mt-3 text-white/80">
                The purpose is not simply to show pages. It is to show why the
                farm matters, how people participate, and where each pathway can
                lead.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <MiniTile
                  icon={<ShoppingCart size={18} />}
                  label="Marketplace"
                />
                <MiniTile
                  icon={<Tractor size={18} />}
                  label="Grower Pathway"
                />
                <MiniTile
                  icon={<GraduationCap size={18} />}
                  label="Youth Workforce"
                />
                <MiniTile
                  icon={<Handshake size={18} />}
                  label="Partner Vision"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <RoleCard
            icon={<MapPin />}
            title="Guest"
            text="Enter the story, meaning, and mission of the land."
            onClick={() => setPage("guest")}
          />
          <RoleCard
            icon={<ShoppingCart />}
            title="Customer"
            text="Shop produce, access recipes, and return through the marketplace."
            onClick={() => setPage("customer")}
          />
          <RoleCard
            icon={<Sprout />}
            title="Grower"
            text="Explore planning, production, and local selling pathways."
            onClick={() => setPage("grower")}
          />
          <RoleCard
            icon={<GraduationCap />}
            title="Youth Worker"
            text="See how the workforce pathway builds skill, confidence, and future direction."
            onClick={() => setPage("youth")}
          />
          <RoleCard
            icon={<ShieldCheck />}
            title="Supervisor"
            text="Support attendance, mentoring, safety, and youth structure."
            onClick={() => setPage("supervisor")}
          />
          <RoleCard
            icon={<Handshake />}
            title="Partner"
            text="View the ecosystem as a visible investment in land, food, and community."
            onClick={() => setPage("partner")}
          />
        </div>
      </div>
    </div>
  );
}

function AppShell({
  children,
  onHome,
}: {
  children: React.ReactNode;
  onHome: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#08130c] via-[#102217] to-[#1a2e1d] text-white">
      <header className="border-b border-white/10 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <button
            onClick={onHome}
            className="inline-flex items-center gap-2 text-sm text-white/85 transition hover:text-lime-300"
          >
            <ArrowLeft size={16} />
            Entrance
          </button>

          <div className="text-right">
            <div className="font-bold tracking-wide">Bronson Family Farm</div>
            <div className="text-xs text-white/65">
              Regenerative Ecosystem · Youngstown, Ohio
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  );
}

function RoleCard({
  icon,
  title,
  text,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-[28px] border border-white/10 bg-white/8 p-5 text-left backdrop-blur-sm transition hover:bg-white/12"
    >
      <div className="mb-3 text-lime-300">{icon}</div>
      <div className="text-xl font-bold">{title}</div>
      <div className="mt-2 text-sm leading-6 text-white/75">{text}</div>
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
    <div className="rounded-[24px] border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
      <div className="mb-2 text-lime-300">{icon}</div>
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/72">{text}</div>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
      <div className="text-lg font-bold text-lime-300">{title}</div>
      <div className="mt-2 text-white/80">{text}</div>
    </div>
  );
}

function MiniTile({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/6 p-3 text-sm text-white/85">
      <div className="mb-2 text-lime-300">{icon}</div>
      <div>{label}</div>
    </div>
  );
}

function MiniLine({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/82">
      <div className="text-lime-300">{icon}</div>
      <div>{text}</div>
    </div>
  );
}
