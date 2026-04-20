import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Cloud,
  ExternalLink,
  Leaf,
  MapPin,
  Play,
  Shield,
  ShoppingCart,
  Sun,
  Users,
} from "lucide-react";

type Page =
  | "home"
  | "guest"
  | "customer"
  | "grower"
  | "youth"
  | "supervisor";

type TileProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
  onClick: () => void;
};

function Tile({ icon, title, text, onClick }: TileProps) {
  return (
    <button
      onClick={onClick}
      className="group w-full rounded-[28px] border border-white/12 bg-white/8 p-6 text-left backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/12"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
        {icon}
      </div>
      <div className="text-2xl font-semibold text-white">{title}</div>
      <div className="mt-2 text-base text-white/72">{text}</div>
      <div className="mt-5 text-sm font-medium tracking-wide text-emerald-200 opacity-0 transition group-hover:opacity-100">
        Enter
      </div>
    </button>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const baseShell =
    "min-h-screen text-white overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(42,88,57,0.35),transparent_28%),radial-gradient(circle_at_top_right,rgba(118,152,91,0.16),transparent_24%),linear-gradient(135deg,#03140f_0%,#07221b_38%,#09281f_58%,#04110d_100%)]";

  const sectionCard =
    "rounded-[30px] border border-white/12 bg-black/28 backdrop-blur-xl";

  const marketplaceImage = useMemo(
    () =>
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
    []
  );

  function TopBar() {
    return (
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/78">
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>Youngstown, Ohio</span>
        </div>
        <div>{time}</div>
        <div className="flex items-center gap-2">
          <Sun size={16} />
          <span>61°</span>
        </div>
        <div className="flex items-center gap-2">
          <Cloud size={16} />
          <span>Clear</span>
        </div>
      </div>
    );
  }

  function BackButton() {
    return (
      <button
        onClick={() => setPage("home")}
        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/88 backdrop-blur-xl transition hover:bg-white/12"
      >
        <ArrowLeft size={16} />
        Home
      </button>
    );
  }

  function PageLayout({
    eyebrow,
    title,
    text,
    children,
    rightVisual,
  }: {
    eyebrow: string;
    title: string;
    text: string;
    children: React.ReactNode;
    rightVisual?: React.ReactNode;
  }) {
    return (
      <div className={baseShell}>
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-10">
          <TopBar />
          <div className="mt-8">
            <BackButton />
          </div>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-emerald-200/80">
                {eyebrow}
              </div>
              <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-7xl">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
                {text}
              </p>
              <div className="mt-10">{children}</div>
            </div>

            <div className="lg:pt-10">{rightVisual}</div>
          </div>
        </div>
      </div>
    );
  }

  if (page === "guest") {
    return (
      <PageLayout
        eyebrow="Guest Experience"
        title="See the land differently."
        text="Bronson Family Farm is designed to restore land, respond to rising food costs, reconnect community, and create meaningful opportunity through agriculture, learning, and shared purpose."
        rightVisual={
          <div
            className={`${sectionCard} min-h-[520px] p-7 shadow-2xl shadow-black/30`}
          >
            <div className="h-full rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(133,196,126,0.24),transparent_36%),linear-gradient(180deg,rgba(17,61,47,0.75),rgba(5,18,14,0.9))] p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-emerald-200/70">
                Story
              </div>
              <div className="mt-4 text-3xl font-semibold">
                From legacy to living ecosystem
              </div>
              <div className="mt-6 space-y-4 text-white/78">
                <p>Restoring the land.</p>
                <p>Growing healthy food.</p>
                <p>Building pathways for families, growers, and youth.</p>
                <p>Creating a place people want to return to again and again.</p>
              </div>
            </div>
          </div>
        }
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className={`${sectionCard} p-6`}>
            <div className="text-2xl font-semibold">Why it matters</div>
            <p className="mt-3 text-white/75">
              Healthy food access, local opportunity, education, and community
              rebuilding belong together.
            </p>
          </div>
          <div className={`${sectionCard} p-6`}>
            <div className="text-2xl font-semibold">What it becomes</div>
            <p className="mt-3 text-white/75">
              A regenerative farm ecosystem with food, training, marketplace
              access, and belonging.
            </p>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (page === "customer") {
    return (
      <PageLayout
        eyebrow="Marketplace"
        title="Fresh food. Real choices."
        text="Shop produce, seedlings, Bubble Babies™, and connected food experiences. This space should feel alive, welcoming, and centered on healthy choices instead of overprocessed substitutes."
        rightVisual={
          <div
            className={`${sectionCard} overflow-hidden shadow-2xl shadow-black/30`}
          >
            <div className="relative h-[560px]">
              <img
                src={marketplaceImage}
                alt="Fresh produce marketplace"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="text-xs uppercase tracking-[0.35em] text-emerald-200/85">
                  Live Marketplace
                </div>
                <div className="mt-3 text-3xl font-semibold text-white">
                  Bronson Family Farm x GrownBy
                </div>
                <p className="mt-3 max-w-lg text-white/82">
                  Produce, seedlings, Bubble Babies™, recipes, and healthier
                  pathways for families.
                </p>
                <a
                  href="https://grownby.com/farms/bronson-family-farm/shop"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
                >
                  Enter Live Store
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        }
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className={`${sectionCard} p-6`}>
            <div className="text-2xl font-semibold">Food + wellness</div>
            <p className="mt-3 text-white/75">
              Shop fresh food and connect it to better eating habits, nutrition,
              and family meals.
            </p>
          </div>
          <div className={`${sectionCard} p-6`}>
            <div className="text-2xl font-semibold">Recipes + guidance</div>
            <p className="mt-3 text-white/75">
              Make healthy choices easier, clearer, and more practical.
            </p>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (page === "grower") {
    return (
      <PageLayout
        eyebrow="Grower Portal"
        title="Plan, grow, and reach market."
        text="Production planning, shared resources, and stronger pathways to selling, collaboration, and long-term growth."
        rightVisual={
          <div className={`${sectionCard} min-h-[520px] p-7`}>
            <div className="grid h-full gap-5">
              <div className="rounded-[24px] border border-white/10 bg-white/8 p-6">
                <div className="text-xl font-semibold">Crop planning</div>
                <div className="mt-2 text-white/75">
                  Seasonal planning and production pathways.
                </div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/8 p-6">
                <div className="text-xl font-semibold">Market access</div>
                <div className="mt-2 text-white/75">
                  Multiple channels to move produce and products.
                </div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/8 p-6">
                <div className="text-xl font-semibold">Shared ecosystem</div>
                <div className="mt-2 text-white/75">
                  Collaboration, learning, and community support.
                </div>
              </div>
            </div>
          </div>
        }
      >
        <div className="grid gap-5 md:grid-cols-3">
          <div className={`${sectionCard} p-6`}>Calendar</div>
          <div className={`${sectionCard} p-6`}>Sales Channels</div>
          <div className={`${sectionCard} p-6`}>Training</div>
        </div>
      </PageLayout>
    );
  }

  if (page === "youth") {
    return (
      <PageLayout
        eyebrow="Youth Workforce"
        title="Learn by doing."
        text="Build confidence, skills, work habits, and future direction through hands-on experience connected to food systems, land stewardship, and real opportunity."
        rightVisual={
          <div className={`${sectionCard} min-h-[520px] p-7`}>
            <div className="h-full rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,93,69,0.62),rgba(7,24,18,0.9))] p-8">
              <div className="text-3xl font-semibold">Youth pathways</div>
              <div className="mt-6 grid gap-4 text-white/80">
                <div>Hands-on farm learning</div>
                <div>Leadership and responsibility</div>
                <div>Career readiness</div>
                <div>Supportive supervision</div>
              </div>
            </div>
          </div>
        }
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className={`${sectionCard} p-6`}>Training</div>
          <div className={`${sectionCard} p-6`}>Future Direction</div>
        </div>
      </PageLayout>
    );
  }

  if (page === "supervisor") {
    return (
      <PageLayout
        eyebrow="Supervisor Portal"
        title="Guide the pathway."
        text="Support workflow, attendance, safety, encouragement, and access to resources that help youth and teams succeed."
        rightVisual={
          <div className={`${sectionCard} min-h-[520px] p-7`}>
            <div className="grid h-full gap-5">
              <div className="rounded-[24px] border border-white/10 bg-white/8 p-6">
                Attendance + assignments
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/8 p-6">
                Support systems
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/8 p-6">
                Wellness resources
              </div>
            </div>
          </div>
        }
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className={`${sectionCard} p-6`}>Operations</div>
          <div className={`${sectionCard} p-6`}>Support</div>
        </div>
      </PageLayout>
    );
  }

  return (
    <div className={baseShell}>
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-10">
        <TopBar />

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.35em] text-emerald-200/75">
              Developed by Bronson Family Farm
            </div>

            <h1 className="mt-5 text-5xl font-semibold leading-[0.95] md:text-8xl">
              Bronson Family
              <br />
              Farm
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 md:text-2xl md:leading-10">
              A regenerative ecosystem responding to rising food costs,
              unhealthy substitutes, community disconnection, and the need for
              real opportunity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setPage("guest")}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.01]"
              >
                <Play size={18} />
                Enter Live Demo
              </button>

              <button
                onClick={() => setPage("customer")}
                className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/12"
              >
                <ShoppingCart size={18} />
                Visit Marketplace
              </button>
            </div>
          </div>

          <div
            className={`${sectionCard} relative min-h-[520px] overflow-hidden p-6 shadow-2xl shadow-black/35`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(130,186,120,0.22),transparent_20%),radial-gradient(circle_at_70%_35%,rgba(85,145,110,0.22),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_18%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-emerald-200/72">
                  Ecosystem
                </div>
                <div className="mt-4 text-3xl font-semibold leading-tight">
                  Land.
                  <br />
                  Marketplace.
                  <br />
                  Growers.
                  <br />
                  Youth workforce.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  Community
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  Food Access
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  Training
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  Opportunity
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          <Tile
            icon={<Play size={22} />}
            title="Guest"
            text="Story, mission, and meaning"
            onClick={() => setPage("guest")}
          />
          <Tile
            icon={<ShoppingCart size={22} />}
            title="Customer"
            text="Food, recipes, and wellness"
            onClick={() => setPage("customer")}
          />
          <Tile
            icon={<Leaf size={22} />}
            title="Grower"
            text="Production and market access"
            onClick={() => setPage("grower")}
          />
          <Tile
            icon={<Users size={22} />}
            title="Youth Worker"
            text="Training and future direction"
            onClick={() => setPage("youth")}
          />
          <Tile
            icon={<Shield size={22} />}
            title="Supervisor"
            text="Guidance, workflow, and support"
            onClick={() => setPage("supervisor")}
          />
        </div>
      </div>
    </div>
  );
}
