import React, { useEffect, useState } from "react";
import {
  MapPin,
  ShoppingCart,
  Leaf,
  Users,
  Shield,
  Play,
  ExternalLink,
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
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  const hero =
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=80";

  const overlay = "bg-gradient-to-br from-black/75 via-black/55 to-green-950/65";

  const card =
    "rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer";

  function Layout(
    title: string,
    text: string,
    body: React.ReactNode
  ) {
    return (
      <div
        className="min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className={`min-h-screen ${overlay} px-6 py-8 md:px-14 md:py-12`}>
          <button
            onClick={() => setPage("home")}
            className="mb-10 text-sm uppercase tracking-[0.3em] text-white/80"
          >
            Bronson Family Farm
          </button>

          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-xl">
            {title}
          </h1>

          <p className="mt-5 text-xl max-w-3xl text-white/95">{text}</p>

          <div className="mt-10">{body}</div>

          <button
            onClick={() => setPage("home")}
            className="mt-10 px-6 py-3 rounded-full bg-white text-black font-bold"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  if (page === "guest")
    return Layout(
      "Guest Experience",
      "Enter the story, meaning, and mission of the land.",
      <div className="grid md:grid-cols-2 gap-6">
        <div className={card}>
          <h3 className="text-2xl font-bold mb-3">The Mission</h3>
          <p>Restore land. Grow food. Build opportunity.</p>
        </div>
        <div className={card}>
          <h3 className="text-2xl font-bold mb-3">The Place</h3>
          <p>Historic Lansdowne Airport reimagined as a living ecosystem.</p>
        </div>
      </div>
    );

  if (page === "customer")
    return Layout(
      "Marketplace",
      "Fresh produce, seedlings, Bubble Babies™, recipes, and wellness.",
      <div className="grid md:grid-cols-2 gap-6">
        <a
          href="https://grownby.com/farms/bronson-family-farm/shop"
          target="_blank"
          className={card}
        >
          <h3 className="text-2xl font-bold mb-3">Enter Live Store</h3>
          <p>Shop Bronson Family Farm on GrownBy.</p>
        </a>

        <div className={card}>
          <h3 className="text-2xl font-bold mb-3">Recipes + Nutrition</h3>
          <p>Learn healthier meal choices for your family.</p>
        </div>
      </div>
    );

  if (page === "grower")
    return Layout(
      "Grower Portal",
      "Planning, production, and market access.",
      <div className="grid md:grid-cols-3 gap-6">
        <div className={card}>Crop Calendar</div>
        <div className={card}>Sales Channels</div>
        <div className={card}>Training Support</div>
      </div>
    );

  if (page === "youth")
    return Layout(
      "Youth Workforce",
      "Skill. Confidence. Direction.",
      <div className="grid md:grid-cols-2 gap-6">
        <div className={card}>Hands-On Learning</div>
        <div className={card}>Career Pathways</div>
      </div>
    );

  if (page === "supervisor")
    return Layout(
      "Supervisor Portal",
      "Guidance, workflow, support.",
      <div className="grid md:grid-cols-2 gap-6">
        <div className={card}>Attendance + Assignments</div>
        <div className={card}>Wellness Resources</div>
      </div>
    );

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className={`min-h-screen ${overlay} px-6 py-8 md:px-14 md:py-12`}>
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

        <div className="mt-16 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight drop-shadow-2xl">
            Bronson Family Farm
          </h1>

          <p className="mt-6 text-xl md:text-2xl max-w-4xl text-white/95">
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

            <a
              href="https://grownby.com/farms/bronson-family-farm/shop"
              target="_blank"
              className="px-7 py-4 rounded-full border border-white font-bold flex items-center gap-2"
            >
              <ExternalLink size={18} />
              Visit Marketplace
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <div onClick={() => setPage("guest")} className={card}>
            <MapPin className="mb-4" />
            <h3 className="text-2xl font-bold">Guest</h3>
          </div>

          <div onClick={() => setPage("customer")} className={card}>
            <ShoppingCart className="mb-4" />
            <h3 className="text-2xl font-bold">Customer</h3>
          </div>

          <div onClick={() => setPage("grower")} className={card}>
            <Leaf className="mb-4" />
            <h3 className="text-2xl font-bold">Grower</h3>
          </div>

          <div onClick={() => setPage("youth")} className={card}>
            <Users className="mb-4" />
            <h3 className="text-2xl font-bold">Youth Worker</h3>
          </div>

          <div onClick={() => setPage("supervisor")} className={card}>
            <Shield className="mb-4" />
            <h3 className="text-2xl font-bold">Supervisor</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
