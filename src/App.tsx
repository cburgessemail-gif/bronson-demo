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
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2200&auto=format&fit=crop";

  const card =
    "bg-white rounded-3xl shadow-2xl p-6 hover:-translate-y-1 transition-all duration-300";

  const btn =
    "inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-bold text-lg no-underline";

  return (
    <main className="min-h-screen w-full bg-[#eef4ea] text-[#10210f] overflow-x-hidden">
      {/* HERO */}
      <section
        className="w-full text-white"
        style={{
          minHeight: "100vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.58)), url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 pt-6 pb-24">
          {/* top bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <MapPin size={20} />
              Bronson Family Farm • Youngstown, Ohio
            </div>

            <div className="bg-white text-[#111] rounded-2xl px-5 py-3 flex items-center gap-2 font-semibold">
              <Globe size={18} />
              English
            </div>
          </div>

          {/* hero text */}
          <div className="max-w-5xl pt-24">
            <div className="text-green-300 text-4xl font-semibold mb-3">
              Welcome to
            </div>

            <h1 className="text-7xl md:text-8xl font-black leading-none mb-8">
              Bronson Family Farm
            </h1>

            <p className="text-2xl md:text-3xl leading-relaxed text-white/95 mb-8">
              A regenerative ecosystem responding to rising food costs,
              unhealthy substitutes, community disconnection, and the need for
              real opportunity.
            </p>

            <div className="text-2xl text-green-200 mb-10">
              Land • Marketplace • Growers • Youth Workforce • Community
              Partners
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#roles" className={`${btn} bg-green-600 text-white`}>
                <Play size={20} />
                Enter Live Demo
              </a>

              <a
                href="https://grownby.com/farms/bronson-family-farm/shop"
                target="_blank"
                rel="noreferrer"
                className={`${btn} bg-white/10 border border-white/40 text-white`}
              >
                <ShoppingCart size={20} />
                Visit Marketplace
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ROLE CARDS */}
      <section id="roles" className="max-w-7xl mx-auto px-8 py-14 -mt-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className={card}>
            <MapPin className="text-green-700 mb-4" size={34} />
            <h3 className="text-3xl font-black mb-3">Guest</h3>
            <p className="text-lg">Enter the story, meaning, and mission.</p>
          </div>

          <div className={card}>
            <ShoppingCart className="text-green-700 mb-4" size={34} />
            <h3 className="text-3xl font-black mb-3">Customer</h3>
            <p className="text-lg">Shop produce, seedlings, recipes.</p>
          </div>

          <div className={card}>
            <Sprout className="text-green-700 mb-4" size={34} />
            <h3 className="text-3xl font-black mb-3">Grower</h3>
            <p className="text-lg">Production planning and selling paths.</p>
          </div>

          <div className={card}>
            <Users className="text-violet-700 mb-4" size={34} />
            <h3 className="text-3xl font-black mb-3">Youth Worker</h3>
            <p className="text-lg">Skill, confidence, future direction.</p>
          </div>

          <div className={card}>
            <ShieldCheck className="text-blue-700 mb-4" size={34} />
            <h3 className="text-3xl font-black mb-3">Supervisor</h3>
            <p className="text-lg">Mentoring, attendance, structure.</p>
          </div>

          <div className={card}>
            <Handshake className="text-orange-600 mb-4" size={34} />
            <h3 className="text-3xl font-black mb-3">Partner</h3>
            <p className="text-lg">Invest in land, food, community.</p>
          </div>
        </div>
      </section>

      {/* LOWER SECTION */}
      <section className="max-w-7xl mx-auto px-8 pb-14">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-5xl font-black text-green-800 mb-8">
              Why People Return
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 text-lg">
              <div>
                <Leaf className="text-green-700 mb-3" size={34} />
                Fresh produce, Bubble Babies™, recipes.
              </div>

              <div>
                <Store className="text-green-700 mb-3" size={34} />
                Grower collaboration and markets.
              </div>

              <div>
                <Users className="text-violet-700 mb-3" size={34} />
                Youth pathways building confidence.
              </div>

              <div>
                <Sun className="text-yellow-500 mb-3" size={34} />
                Restoring land and community.
              </div>
            </div>
          </div>

          <div className="bg-[#dcead6] rounded-3xl shadow-xl p-8">
            <Sun className="text-green-800 mb-4" size={42} />
            <h3 className="text-4xl font-black text-green-800 mb-4">
              Youngstown Ready
            </h3>

            <p className="text-2xl mb-6">Outdoor Experience Ready</p>

            <div className="border-t border-green-700 pt-6 text-lg">
              Built for all seasons. Built for our community.
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#07210b] text-white">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-wrap gap-6 justify-between text-lg">
          <div>Developed by Bronson Family Farm</div>
          <div>Mission</div>
          <div>Programs</div>
          <div>Contact</div>
        </div>
      </footer>
    </main>
  );
}
