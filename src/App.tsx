import React, { useEffect, useState } from "react";
import {
  Play,
  ShoppingCart,
  Leaf,
  Users,
  Shield,
  ArrowLeft,
  MapPin,
  Sun,
  Cloud,
} from "lucide-react";

type Page =
  | "home"
  | "guest"
  | "customer"
  | "grower"
  | "youth"
  | "supervisor";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  const homeBg =
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1800&q=80";

  const marketBg =
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=80";

  const growBg =
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1800&q=80";

  const glass =
    "bg-black/45 backdrop-blur-md border border-white/20 rounded-3xl p-6 hover:bg-black/60 transition-all duration-300 cursor-pointer";

  function Shell(
    title: string,
    subtitle: string,
    bg: string,
    body: React.ReactNode
  ) {
    return (
      <div
        className="min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="min-h-screen bg-gradient-to-br from-black/75 via-black/55 to-green-950/70 px-6 py-8 md:px-14 md:py-12">
          <button
            onClick={() => setPage("home")}
            className="flex items-center gap-2 text-white/90 mb-10"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <h1 className="text-5xl md:text-7xl font-bold">{title}</h1>
          <p className="mt-4 text-xl text-white/90 max-w-3xl">{subtitle}</p>

          <div className="mt-10">{body}</div>
        </div>
      </div>
    );
  }

  if (page === "guest")
    return Shell(
      "Guest Experience",
      "Enter the story, purpose, and future of Bronson Family Farm.",
      homeBg,
      <div className="grid md:grid-cols-2 gap-6">
        <div className={glass}>
          <h3 className="text-2xl font-bold mb-3">Why It Exists</h3>
          <p>
            Rising food costs, poor nutrition, and community disconnection call
            for a new model.
          </p>
        </div>

        <div className={glass}>
          <h3 className="text-2xl font-bold mb-3">What It Becomes</h3>
          <p>
            A regenerative ecosystem of food, jobs, learning, health, and hope.
          </p>
        </div>
      </div>
    );

  if (page === "customer")
    return Shell(
      "Marketplace",
      "Fresh produce, Bubble Babies™, recipes, and healthy living.",
      marketBg,
      <div className="grid md:grid-cols-2 gap-6">
        <a
          href="https://grownby.com/farms/bronson-family-farm/shop"
          target="_blank"
          className={glass}
        >
          <h3 className="text-2xl font-bold mb-3">Enter Live Store</h3>
          <p>Shop Bronson Family Farm on GrownBy.</p>
        </a>

        <div className={glass}>
          <h3 className="text-2xl font-bold mb-3">Recipes + Nutrition</h3>
          <p>
            Learn how fresh food can replace overprocessed choices hurting our
            communities.
          </p>
        </div>
      </div>
    );

  if (page === "grower")
    return Shell(
      "Grower Portal",
      "Production planning, market access, tools, and collaboration.",
      growBg,
      <div className="grid md:grid-cols-3 gap-6">
        <div className={glass}>Crop Planning</div>
        <div className={glass}>Sales Channels</div>
        <div className={glass}>Shared Resources</div>
      </div>
    );

  if (page === "youth")
    return Shell(
      "Youth Workforce",
      "Confidence, skill-building, income pathways, leadership.",
      growBg,
      <div className="grid md:grid-cols-2 gap-6">
        <div className={glass}>Hands-On Farm Training</div>
        <div className={glass}>Career Readiness</div>
      </div>
    );

  if (page === "supervisor")
    return Shell(
      "Supervisor Portal",
      "Guidance, attendance, workflow, support systems.",
      growBg,
      <div className="grid md:grid-cols-2 gap-6">
        <div className={glass}>Assignments + Operations</div>
        <div className={glass}>Wellness + Resources</div>
      </div>
    );

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="min-h-screen bg-gradient-to-br from-black/75 via-black/55 to-green-950/70 px-6 py-8 md:px-14 md:py-12">
        <div className="flex flex-wrap gap-5 text-sm text-white/90">
          <div className="flex items-center gap-2">
            <MapPin size={16} /> Youngstown, Ohio
          </div>
          <div>{time}</div>
          <div className="flex items-center gap-2">
            <Sun size={16} /> 61°
          </div>
          <div className="flex items-center gap-2">
            <Cloud size={16} /> Clear
          </div>
        </div>

        <div className="mt-20 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight drop-shadow-2xl">
            Bronson Family Farm
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-white/95 max-w-4xl">
            A regenerative ecosystem responding to rising food costs, unhealthy
            substitutes, community disconnection, and the need for real
            opportunity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setPage("guest")}
              className="px-7 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2"
            >
              <Play size={18} />
              Enter Live Demo
            </button>

            <button
              onClick={() => setPage("customer")}
              className="px-7 py-4 rounded-full border border-white font-bold flex items-center gap-2"
            >
              <ShoppingCart size={18} />
              Visit Marketplace
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div onClick={() => setPage("guest")} className={glass}>
            <Play className="mb-4" />
            <h3 className="text-2xl font-bold">Guest</h3>
            <p className="mt-2 text-white/80">Story + mission</p>
          </div>

          <div onClick={() => setPage("customer")} className={glass}>
            <ShoppingCart className="mb-4" />
            <h3 className="text-2xl font-bold">Customer</h3>
            <p className="mt-2 text-white/80">Food + wellness</p>
          </div>

          <div onClick={() => setPage("grower")} className={glass}>
            <Leaf className="mb-4" />
            <h3 className="text-2xl font-bold">Grower</h3>
            <p className="mt-2 text-white/80">Production + markets</p>
          </div>

          <div onClick={() => setPage("youth")} className={glass}>
            <Users className="mb-4" />
            <h3 className="text-2xl font-bold">Youth Worker</h3>
            <p className="mt-2 text-white/80">Training + future</p>
          </div>

          <div onClick={() => setPage("supervisor")} className={glass}>
            <Shield className="mb-4" />
            <h3 className="text-2xl font-bold">Supervisor</h3>
            <p className="mt-2 text-white/80">Oversight + support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
