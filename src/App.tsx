import React from "react";
import {
  MapPin,
  Globe,
  Play,
  ShoppingCart,
  Sprout,
  Users,
  ShieldCheck,
  Handshake,
  Sun,
} from "lucide-react";

export default function App() {
  const hero =
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2200&auto=format&fit=crop";

  const card =
    "bg-white text-[#10210f] rounded-3xl shadow-2xl p-6 hover:-translate-y-1 transition";

  const button =
    "inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-bold text-lg";

  return (
    <div className="w-full min-h-screen bg-[#edf3ea] overflow-x-hidden">
      {/* HERO */}
      <section
        className="w-full min-h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.60)),url(${hero})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-8">
          {/* top */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <MapPin size={20} />
              Bronson Family Farm • Youngstown, Ohio
            </div>

            <div className="bg-white text-black rounded-2xl px-5 py-3 flex items-center gap-2 font-semibold">
              <Globe size={18} />
              English
            </div>
          </div>

          {/* hero content */}
          <div className="pt-24 max-w-5xl">
            <div className="text-green-300 text-4xl font-semibold mb-3">
              Welcome to
            </div>

            <h1 className="text-7xl md:text-8xl font-black leading-none mb-8">
              Bronson Family Farm
            </h1>

            <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-white/95">
              A regenerative ecosystem responding to rising food costs,
              unhealthy substitutes, community disconnection, and the need for
              real opportunity.
            </p>

            <div className="text-2xl text-green-200 mb-10">
              Land • Marketplace • Growers • Youth Workforce • Community
              Partners
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#roles" className={`${button} bg-green-600 text-white`}>
                <Play size={20} />
                Enter Live Demo
              </a>

              <a
                href="https://grownby.com/farms/bronson-family-farm/shop"
                target="_blank"
                rel="noreferrer"
                className={`${button} bg-white/10 border border-white/40 text-white`}
              >
                <ShoppingCart size={20} />
                Visit Marketplace
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section id="roles" className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className={card}>
            <MapPin className="text-green-700 mb-4" size={34} />
            <h3 className="text-3xl font-black mb-3">Guest</h3>
            <p>Enter the story, meaning, and mission of the land.</p>
          </div>

          <div className={card}>
            <ShoppingCart className="text-green-700 mb-4" size={34} />
            <h3 className="text-3xl font-black mb-3">Customer</h3>
            <p>Shop produce, seedlings, Bubble Babies™, and recipes.</p>
          </div>

          <div className={card}>
            <Sprout className="text-green-700 mb-4" size={34} />
            <h3 className="text-3xl font-black mb-3">Grower</h3>
            <p>Production planning, pathways, and market access.</p>
          </div>

          <div className={card}>
            <Users className="text-violet-700 mb-4" size={34} />
            <h3 className="text-3xl font-black mb-3">Youth Worker</h3>
            <p>Skill, confidence, training, and future direction.</p>
          </div>

          <div className={card}>
            <ShieldCheck className="text-blue-700 mb-4" size={34} />
            <h3 className="text-3xl font-black mb-3">Supervisor</h3>
            <p>Mentoring, attendance, structure, and support.</p>
          </div>

          <div className={card}>
            <Handshake className="text-orange-600 mb-4" size={34} />
            <h3 className="text-3xl font-black mb-3">Partner</h3>
            <p>Invest in food, land restoration, and community.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#07210b] text-white">
        <div className="max-w-7xl mx-auto px-8 py-6 text-lg font-medium">
          Developed by Bronson Family Farm
        </div>
      </footer>
    </div>
  );
}
