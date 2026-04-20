import React, { useMemo, useState, useEffect } from "react";
import {
  ShoppingCart,
  Sprout,
  Users,
  ShieldCheck,
  Handshake,
  MapPin,
  ArrowLeft,
  Play,
  Globe,
  Sun,
} from "lucide-react";

type View =
  | "home"
  | "guest"
  | "customer"
  | "grower"
  | "youth"
  | "supervisor"
  | "partner";

const photos = [
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop",
];

export default function App() {
  const [view, setView] = useState<View>("home");
  const [photo, setPhoto] = useState(0);
  const [lang, setLang] = useState("English");

  useEffect(() => {
    const t = setInterval(() => {
      setPhoto((p) => (p + 1) % photos.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const bg = useMemo(() => photos[photo], [photo]);

  const roleData = {
    guest: {
      title: "Guest Experience",
      icon: <MapPin size={28} />,
      text: "Enter the land, understand the mission, and discover why this farm matters to Youngstown.",
      cta: "Return to Entrance",
    },
    customer: {
      title: "Customer Marketplace",
      icon: <ShoppingCart size={28} />,
      text: "Buy produce, seedlings, Bubble Babies™, access recipes, nutrition guidance, and support local growers.",
      cta: "Open GrownBy Marketplace",
      link: "https://grownby.com/farms/bronson-family-farm/shop",
    },
    grower: {
      title: "Grower Pathway",
      icon: <Sprout size={28} />,
      text: "Crop planning, production support, selling channels, shared ecosystem growth.",
      cta: "Return to Entrance",
    },
    youth: {
      title: "Youth Workforce",
      icon: <Users size={28} />,
      text: "Hands-on training, confidence building, attendance habits, teamwork, future pathways.",
      cta: "Return to Entrance",
    },
    supervisor: {
      title: "Supervisor Support",
      icon: <ShieldCheck size={28} />,
      text: "Mentoring, safety, structure, accountability, and wellness support.",
      cta: "Return to Entrance",
    },
    partner: {
      title: "Partner Vision",
      icon: <Handshake size={28} />,
      text: "Invest in land restoration, food access, workforce development, and community growth.",
      cta: "Return to Entrance",
    },
  };

  const current =
    view !== "home" ? roleData[view as keyof typeof roleData] : null;

  const btn =
    "rounded-2xl px-5 py-3 font-semibold transition hover:scale-[1.02]";

  return (
    <div
      className="min-h-screen text-white bg-cover bg-center duration-700"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.65)),url(${bg})`,
      }}
    >
      <div className="backdrop-blur-[1px] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* TOP BAR */}
          <div className="flex flex-wrap gap-3 justify-between items-center mb-8">
            <div className="text-lg font-semibold">
              Bronson Family Farm • Youngstown, Ohio
            </div>

            <div className="flex gap-2 items-center bg-white/10 rounded-2xl px-3 py-2">
              <Globe size={18} />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent outline-none text-white"
              >
                <option className="text-black">English</option>
                <option className="text-black">Spanish</option>
                <option className="text-black">Tagalog</option>
                <option className="text-black">Italian</option>
                <option className="text-black">Patwa</option>
                <option className="text-black">Hebrew</option>
              </select>
            </div>
          </div>

          {/* HOME */}
          {view === "home" && (
            <>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-xl mb-2">Welcome to</p>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5">
                    Bronson Family Farm
                  </h1>

                  <p className="text-xl md:text-2xl text-white/95 mb-4">
                    A regenerative ecosystem responding to rising food costs,
                    unhealthy substitutes, community disconnection, and the need
                    for real opportunity.
                  </p>

                  <p className="text-lg text-white/85 mb-8">
                    Land • Marketplace • Growers • Youth Workforce • Community
                    Partners
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    <button
                      onClick={() => setView("guest")}
                      className={`${btn} bg-green-600`}
                    >
                      <Play className="inline mr-2" size={18} />
                      Enter Live Demo
                    </button>

                    <a
                      href="https://grownby.com/farms/bronson-family-farm/shop"
                      target="_blank"
                      className={`${btn} bg-white/15`}
                    >
                      Visit Marketplace
                    </a>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      ["guest", "Guest", <MapPin size={22} />],
                      ["customer", "Customer", <ShoppingCart size={22} />],
                      ["grower", "Grower", <Sprout size={22} />],
                      ["youth", "Youth Worker", <Users size={22} />],
                      ["supervisor", "Supervisor", <ShieldCheck size={22} />],
                      ["partner", "Partner", <Handshake size={22} />],
                    ].map((r: any) => (
                      <button
                        key={r[0]}
                        onClick={() => setView(r[0])}
                        className="bg-white/10 hover:bg-white/20 rounded-3xl p-5 text-left transition"
                      >
                        <div className="mb-3">{r[2]}</div>
                        <div className="text-xl font-bold">{r[1]}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 rounded-[2rem] p-6 backdrop-blur-md">
                  <div className="text-2xl font-bold mb-4">
                    Why People Return
                  </div>

                  <div className="space-y-4 text-white/90">
                    <div>
                      Fresh produce, seedlings, Bubble Babies™, recipes and
                      nutrition support.
                    </div>
                    <div>
                      Grower opportunities, collaboration, and seasonal markets.
                    </div>
                    <div>
                      Youth pathways that build skill, confidence, and purpose.
                    </div>
                    <div>
                      A place-based model restoring land and strengthening
                      community.
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-2xl bg-green-600/30">
                    <Sun className="inline mr-2" size={18} />
                    Youngstown Weather Ready • Outdoor Experience Ready
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ROLE PAGES */}
          {view !== "home" && current && (
            <div className="max-w-5xl">
              <button
                onClick={() => setView("home")}
                className="mb-8 bg-white/15 px-4 py-2 rounded-xl"
              >
                <ArrowLeft className="inline mr-2" size={18} />
                Back to Entrance
              </button>

              <div className="bg-white/10 rounded-[2rem] p-8 backdrop-blur-md">
                <div className="mb-4">{current.icon}</div>

                <h2 className="text-4xl md:text-6xl font-bold mb-5">
                  {current.title}
                </h2>

                <p className="text-xl text-white/90 mb-8">{current.text}</p>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-black/20 rounded-3xl p-5">
                    <div className="text-2xl font-bold mb-3">What This Means</div>
                    <p>
                      This pathway is designed to create repeated value so people
                      want to return again and again.
                    </p>
                  </div>

                  <div className="bg-black/20 rounded-3xl p-5">
                    <div className="text-2xl font-bold mb-3">Next Step</div>

                    {view === "customer" ? (
                      <a
                        href="https://grownby.com/farms/bronson-family-farm/shop"
                        target="_blank"
                        className="inline-block bg-green-600 rounded-2xl px-5 py-3 font-semibold"
                      >
                        Open Marketplace
                      </a>
                    ) : (
                      <button
                        onClick={() => setView("home")}
                        className="bg-white/15 rounded-2xl px-5 py-3"
                      >
                        Return to Ecosystem
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="pt-12 text-sm text-white/70">
            Developed by Bronson Family Farm
          </div>
        </div>
      </div>
    </div>
  );
}
