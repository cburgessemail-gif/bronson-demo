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

  const card =
    "rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer";

  const shell =
    "min-h-screen bg-cover bg-center text-white";

  const overlay =
    "min-h-screen bg-gradient-to-br from-black/80 via-black/65 to-green-950/75 px-6 py-8 md:px-14 md:py-12";

  function Layout(
    title: string,
    subtitle: string,
    bg: string,
    body: React.ReactNode
  ) {
    return (
      <div
        className={shell}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className={overlay}>
          <button
            onClick={() => setPage("home")}
            className="flex items-center gap-2 mb-10 text-white/90"
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
    return Layout(
      "Guest Experience",
      "Enter the story, purpose, and future of Bronson Family Farm.",
      homeBg,
      <div className="grid md:grid-cols-2 gap-6">
        <div className={card}>
          Rising food costs, poor nutrition, and community disconnection call
          for a new model.
        </div>
        <div className={card}>
          A regenerative ecosystem of food, jobs, learning, health, and hope.
        </div>
      </div>
    );

  if (page === "customer")
    return Layout(
      "Marketplace",
      "Fresh produce, Bubble Babies™, recipes, and healthy living.",
      marketBg,
      <div className="grid md:grid-cols-2 gap-6">
        <a
          href="https://grownby.com/farms/bronson-family-farm/shop"
          target="_blank"
          className={card}
        >
          Enter Live Store
        </a>

        <div className={card}>
          Learn how fresh food can replace overprocessed choices.
        </div>
      </div>
    );

  if (page === "grower")
    return Layout(
      "Grower Portal",
      "Production planning, market access, tools, and collaboration.",
      growBg,
      <div className="grid md:grid-cols-3 gap-6">
        <div className={card}>Crop Planning</div>
        <div className={card}>Sales Channels</div>
        <div className={card}>Shared Resources</div>
      </div>
    );

  if (page === "youth")
    return Layout(
      "Youth Workforce",
      "Confidence, skill-building, income pathways, leadership.",
      growBg,
      <div className="grid md:grid-cols-2 gap-6">
        <div className={card}>Hands-On Farm Training</div>
        <div className={card}>Career Readiness</div>
      </div>
    );

  if (page === "supervisor")
    return Layout(
      "Supervisor Portal",
      "Guidance, attendance, workflow, support systems.",
      growBg,
      <div className="grid md:grid-cols-2 gap-6">
        <div className={card}>Assignments + Operations</div>
        <div className={card}>Wellness + Resources</div>
      </div>
    );

  return (
    <div
      className={shell}
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className={overlay}>
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
          <div className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">
            Developed by Bronson Family Farm
          </div>

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

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
          <div onClick={() => setPage("guest")} className={card}>
            <Play className="mb-4" />
            <h3 className="text-2xl font-bold">Guest</h3>
            <p className="mt-2 text-white/80">Story + mission</p>
          </div>

          <div onClick={() => setPage("customer")} className={card}>
            <ShoppingCart className="mb-4" />
            <h3 className="text-2xl font-bold">Customer</h3>
            <p className="mt-2 text-white/80">Food + wellness</p>
          </div>

          <div onClick={() => setPage("grower")} className={card}>
            <Leaf className="mb-4" />
            <h3 className="text-2xl font-bold">Grower</h3>
            <p className="mt-2 text-white/80">Production + markets</p>
          </div>

          <div onClick={() => setPage("youth")} className={card}>
            <Users className="mb-4" />
            <h3 className="text-2xl font-bold">Youth Worker</h3>
            <p className="mt-2 text-white/80">Training + future</p>
          </div>

          <div onClick={() => setPage("supervisor")} className={card}>
            <Shield className="mb-4" />
            <h3 className="text-2xl font-bold">Supervisor</h3>
            <p className="mt-2 text-white/80">Oversight + support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
