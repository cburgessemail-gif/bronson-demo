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
  Leaf,
  Store,
} from "lucide-react";

export default function App() {
  const hero =
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1800&auto=format&fit=crop";

  const card =
    "bg-white rounded-3xl shadow-xl p-6 transition hover:-translate-y-1 hover:shadow-2xl";

  const btn =
    "px-6 py-4 rounded-2xl font-semibold text-lg transition hover:scale-[1.02]";

  return (
    <div className="min-h-screen bg-[#eef3ea] text-[#10210f]">
      {/* HERO */}
      <section
        className="relative min-h-[720px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.58)),url(${hero})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 pt-6 pb-16">
          {/* top */}
          <div className="flex justify-between items-center text-white">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <MapPin size={20} />
              Bronson Family Farm • Youngstown, Ohio
            </div>

            <div className="bg-white text-black px-5 py-3 rounded-2xl flex items-center gap-3">
              <Globe size={18} />
              English
            </div>
          </div>

          {/* hero text */}
          <div className="pt-16 max-w-4xl text-white">
            <div className="text-5xl text-green-300 font-semibold mb-2">
              Welcome to
            </div>

            <h1 className="text-7xl md:text-8xl font-black leading-none mb-6">
              Bronson Family Farm
            </h1>

            <p className="text-2xl md:text-3xl leading-relaxed mb-6 text-white/95">
              A regenerative ecosystem responding to rising food costs,
              unhealthy substitutes, community disconnection, and the need for
              real opportunity.
            </p>

            <div className="text-2xl text-green-200 mb-10">
              Land • Marketplace • Growers • Youth Workforce • Community
              Partners
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://grownby.com/farms/bronson-family-farm/shop"
                target="_blank"
                className={`${btn} bg-green-600 text-white`}
              >
                <Play className="inline mr-2" size={20} />
                Enter Live Demo
              </a>

              <a
                href="https://grownby.com/farms/bronson-family-farm/shop"
                target="_blank"
                className={`${btn} bg-white/10 text-white border border-white/40`}
              >
                <ShoppingCart className="inline mr-2" size={20} />
                Visit Marketplace
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ROLE CARDS */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
          <div className={card}>
            <MapPin className="text-green-700 mb-4" size={34} />
            <h3 className="text-3xl font-bold mb-3">Guest</h3>
            <p className="text-lg">Enter the story, meaning, and mission.</p>
          </div>

          <div className={card}>
            <ShoppingCart className="text-green-700 mb-4" size={34} />
            <h3 className="text-3xl font-bold mb-3">Customer</h3>
            <p className="text-lg">Shop produce, seedlings, recipes.</p>
          </div>

          <div className={card}>
            <Sprout className="text-green-700 mb-4" size={34} />
            <h3 className="text-3xl font-bold mb-3">Grower</h3>
            <p className="text-lg">Production planning and selling paths.</p>
          </div>

          <div className={card}>
            <Users className="text-violet-700 mb-4" size={34} />
            <h3 className="text-3xl font-bold mb-3">Youth Worker</h3>
            <p className="text-lg">Skill, confidence, and future direction.</p>
          </div>

          <div className={card}>
            <ShieldCheck className="text-blue-700 mb-4" size={34} />
            <h3 className="text-3xl font-bold mb-3">Supervisor</h3>
            <p className="text-lg">Mentoring, attendance, structure.</p>
          </div>

          <div className={card}>
            <Handshake className="text-orange-600 mb-4" size={34} />
            <h3 className="text-3xl font-bold mb-3">Partner</h3>
            <p className="text-lg">Invest in land, food, community.</p>
          </div>
        </div>
      </section>

      {/* LOWER PANELS */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-5xl font-black text-green-800 mb-8">
              Why People Return
            </h2>

            <div className="grid md:grid-cols-4 gap-6 text-lg">
              <div>
                <Leaf className="text-green-700 mb-3" size={36} />
                Fresh produce, Bubble Babies™, recipes and nutrition support.
              </div>

              <div>
                <Store className="text-green-700 mb-3" size={36} />
                Grower opportunities, collaboration, seasonal markets.
              </div>

              <div>
                <Users className="text-violet-700 mb-3" size={36} />
                Youth pathways that build skill and confidence.
              </div>

              <div>
                <Sun className="text-yellow-500 mb-3" size={36} />
                A place-based model restoring land and community.
              </div>
            </div>
          </div>

          <div className="bg-[#dcead6] rounded-3xl shadow-xl p-8">
            <Sun className="text-green-800 mb-4" size={40} />
            <h3 className="text-4xl font-black text-green-800 mb-4">
              Youngstown Weather Ready
            </h3>

            <p className="text-2xl mb-8">Outdoor Experience Ready</p>

            <div className="border-t border-green-700 pt-6 text-xl">
              Built for all seasons. Built for our community.
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#07210b] text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap gap-8 justify-between text-lg">
          <div>Developed by Bronson Family Farm</div>
          <div>About the Farm</div>
          <div>Mission</div>
          <div>Programs</div>
          <div>Contact</div>
        </div>
      </footer>
    </div>
  );
}
