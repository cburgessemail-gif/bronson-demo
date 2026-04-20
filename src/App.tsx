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
    const run = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    run();
    const t = setInterval(run, 1000);
    return () => clearInterval(t);
  }, []);

  const hero =
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1800&q=80";

  const glass =
    "bg-black/45 border border-white/20 backdrop-blur-md rounded-3xl p-6 hover:bg-black/60 transition-all duration-300 cursor-pointer";

  const shell = (title: string, text: string, content: React.ReactNode) => (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="min-h-screen bg-black/65 px-6 py-8 md:px-14 md:py-12">
        <button
          onClick={() => setPage("home")}
          className="mb-10 text-sm uppercase tracking-[0.25em] text-white/80"
        >
          Bronson Family Farm
        </button>

        <h1 className="text-5xl md:text-7xl font-bold">{title}</h1>
        <p className="mt-4 text-xl text-white/90 max-w-3xl">{text}</p>

        <div className="mt-10">{content}</div>

        <button
          onClick={() => setPage("home")}
          className="mt-10 px-6 py-3 rounded-full bg-white text-black font-bold"
        >
          Return
        </button>
      </div>
    </div>
  );

  if (page === "guest")
    return shell(
      "Guest Experience",
      "Story. Purpose. Meaning. Legacy.",
      <div className="grid md:grid-cols-2 gap-6">
        <div className={glass}>
          <h3 className="text-2xl font-bold mb-3">The Mission</h3>
          <p>
            Restore land, grow food, build opportunity, reconnect community.
          </p>
        </div>
        <div className={glass}>
          <h3 className="text-2xl font-bold mb-3">The Place</h3>
          <p>
            Historic Lansdowne Airport transformed into a regenerative farm.
          </p>
        </div>
      </div>
    );

  if (page === "customer")
    return shell(
      "Marketplace",
      "Fresh food. Seedlings. Bubble Babies™. Wellness.",
      <div className="grid md:grid-cols-2 gap-6">
        <a
          href="https://grownby.com/farms/bronson-family-farm/shop"
          target="_blank"
          className={glass}
        >
          <h3 className="text-2xl font-bold mb-3">Live Store</h3>
          <p>Enter GrownBy marketplace.</p>
        </a>
        <div className={glass}>
          <h3 className="text-2xl font-bold mb-3">Recipes</h3>
          <p>Healthy meals and smarter food choices.</p>
        </div>
      </div>
    );

  if (page === "grower")
    return shell(
      "Grower Portal",
      "Planning. Production. Sales.",
      <div className="grid md:grid-cols-3 gap-6">
        <div className={glass}>Crop Calendar</div>
        <div className={glass}>Market Access</div>
        <div className={glass}>Training</div>
      </div>
    );

  if (page === "youth")
    return shell(
      "Youth Workforce",
      "Skills. Confidence. Future.",
      <div className="grid md:grid-cols-2 gap-6">
        <div className={glass}>Hands-On Training</div>
        <div className={glass}>Career Pathways</div>
      </div>
    );

  if (page === "supervisor")
    return shell(
      "Supervisor",
      "Guidance. Safety. Support.",
      <div className="grid md:grid-cols-2 gap-6">
        <div className={glass}>Attendance + Workflow</div>
        <div className={glass}>Wellness Resources</div>
      </div>
    );

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="min-h-screen bg-black/65 px-6 py-8 md:px-14 md:py-12">
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
          <h1 className="text-6xl md:text-8xl font-bold leading-tight drop-shadow-xl">
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
          <div onClick={() => setPage("guest")} className={glass}>
            <MapPin className="mb-4" />
            <h3 className="text-2xl font-bold">Guest</h3>
          </div>

          <div onClick={() => setPage("customer")} className={glass}>
            <ShoppingCart className="mb-4" />
            <h3 className="text-2xl font-bold">Customer</h3>
          </div>

          <div onClick={() => setPage("grower")} className={glass}>
            <Leaf className="mb-4" />
            <h3 className="text-2xl font-bold">Grower</h3>
          </div>

          <div onClick={() => setPage("youth")} className={glass}>
            <Users className="mb-4" />
            <h3 className="text-2xl font-bold">Youth Worker</h3>
          </div>

          <div onClick={() => setPage("supervisor")} className={glass}>
            <Shield className="mb-4" />
            <h3 className="text-2xl font-bold">Supervisor</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
