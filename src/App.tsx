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

type Role =
  | "home"
  | "guest"
  | "customer"
  | "grower"
  | "youth"
  | "supervisor";

export default function App() {
  const [page, setPage] = useState<Role>("home");
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  const bg =
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1800&q=80";

  const card =
    "bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all cursor-pointer";

  const Back = () => (
    <button
      onClick={() => setPage("home")}
      className="mt-8 px-5 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
    >
      Back to Entrance
    </button>
  );

  const shell = (title: string, text: string, body?: React.ReactNode) => (
    <div
      className="min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="min-h-screen bg-black/60 p-8 md:p-14">
        <button
          onClick={() => setPage("home")}
          className="mb-8 text-sm tracking-widest uppercase opacity-80"
        >
          Bronson Family Farm
        </button>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl max-w-3xl text-white/90">{text}</p>

        <div className="mt-10">{body}</div>

        <Back />
      </div>
    </div>
  );

  if (page === "guest")
    return shell(
      "Guest Experience",
      "Enter the story, meaning, and mission of the land.",
      <div className="grid md:grid-cols-2 gap-6">
        <div className={card}>
          <h3 className="text-2xl font-bold mb-2">Why This Exists</h3>
          <p>
            A regenerative response to rising food costs, unhealthy substitutes,
            and community disconnection.
          </p>
        </div>
        <div className={card}>
          <h3 className="text-2xl font-bold mb-2">The Land</h3>
          <p>
            Historic Lansdowne Airport transformed into a living ecosystem for
            families, growers, and opportunity.
          </p>
        </div>
      </div>
    );

  if (page === "customer")
    return shell(
      "Customer Marketplace",
      "Fresh produce, Bubble Babies™, recipes, wellness, and access.",
      <div className="grid md:grid-cols-2 gap-6">
        <a
          href="https://grownby.com/farms/bronson-family-farm/shop"
          target="_blank"
          className={card}
        >
          <h3 className="text-2xl font-bold mb-2">Enter Live Marketplace</h3>
          <p>Shop Bronson Family Farm on GrownBy.</p>
        </a>

        <div className={card}>
          <h3 className="text-2xl font-bold mb-2">Nutrition & Recipes</h3>
          <p>
            Learn healthier meal choices and how to cook fresh vegetables with
            confidence.
          </p>
        </div>
      </div>
    );

  if (page === "grower")
    return shell(
      "Grower Network",
      "Production planning, pathways, tools, and market access.",
      <div className="grid md:grid-cols-3 gap-6">
        <div className={card}>
          <h3 className="font-bold text-xl mb-2">Crop Planning</h3>
          <p>What to plant and when in Northeast Ohio.</p>
        </div>
        <div className={card}>
          <h3 className="font-bold text-xl mb-2">Sell Channels</h3>
          <p>Farm markets, wholesale, community sales, online.</p>
        </div>
        <div className={card}>
          <h3 className="font-bold text-xl mb-2">Support</h3>
          <p>Training, mentorship, and collaboration.</p>
        </div>
      </div>
    );

  if (page === "youth")
    return shell(
      "Youth Workforce",
      "Skill, confidence, training, income, future direction.",
      <div className="grid md:grid-cols-2 gap-6">
        <div className={card}>
          <h3 className="text-2xl font-bold mb-2">Hands-On Tracks</h3>
          <p>Agriculture, logistics, technology, media, customer service.</p>
        </div>
        <div className={card}>
          <h3 className="text-2xl font-bold mb-2">Career Pathways</h3>
          <p>From first job experience to entrepreneurship.</p>
        </div>
      </div>
    );

  if (page === "supervisor")
    return shell(
      "Supervisor Portal",
      "Guidance, safety, attendance, support systems.",
      <div className="grid md:grid-cols-2 gap-6">
        <div className={card}>
          <h3 className="text-2xl font-bold mb-2">Team Oversight</h3>
          <p>Assignments, check-in, daily workflow.</p>
        </div>
        <div className={card}>
          <h3 className="text-2xl font-bold mb-2">Wellness Support</h3>
          <p>Wraparound care and partner resources.</p>
        </div>
      </div>
    );

  return (
    <div
      className="min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="min-h-screen bg-black/60 px-6 py-8 md:px-14 md:py-12">
        <div className="flex flex-wrap gap-4 items-center text-sm text-white/90">
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

        <div className="mt-14 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Bronson Family Farm
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-white/90">
            A regenerative ecosystem responding to rising food costs, unhealthy
            substitutes, community disconnection, and the need for real
            opportunity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setPage("guest")}
              className="px-6 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2"
            >
              <Play size={18} />
              Enter Live Demo
            </button>

            <a
              href="https://grownby.com/farms/bronson-family-farm/shop"
              target="_blank"
              className="px-6 py-4 rounded-full border border-white font-bold flex items-center gap-2"
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
            <p className="mt-2">Story, mission, purpose.</p>
          </div>

          <div onClick={() => setPage("customer")} className={card}>
            <ShoppingCart className="mb-4" />
            <h3 className="text-2xl font-bold">Customer</h3>
            <p className="mt-2">Shop + recipes + wellness.</p>
          </div>

          <div onClick={() => setPage("grower")} className={card}>
            <Leaf className="mb-4" />
            <h3 className="text-2xl font-bold">Grower</h3>
            <p className="mt-2">Planning + pathways.</p>
          </div>

          <div onClick={() => setPage("youth")} className={card}>
            <Users className="mb-4" />
            <h3 className="text-2xl font-bold">Youth Worker</h3>
            <p className="mt-2">Training + future.</p>
          </div>

          <div onClick={() => setPage("supervisor")} className={card}>
            <Shield className="mb-4" />
            <h3 className="text-2xl font-bold">Supervisor</h3>
            <p className="mt-2">Oversight + support.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
