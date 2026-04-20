import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#06130d] via-[#0d2419] to-[#08110c] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Header */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          <p className="text-sm tracking-[0.3em] uppercase text-green-300">
            Developed by Bronson Family Farm
          </p>

          <h1 className="text-5xl md:text-7xl font-light mt-4 tracking-tight">
            Bronson Family Farm
          </h1>

          <p className="mt-5 text-lg text-white/70 max-w-4xl leading-relaxed">
            An ecosystem for food, learning, wellness, workforce, and community return.
          </p>

          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/45">
            Serving Mahoning Valley through regenerative agriculture, education,
            marketplace access, and partnership.
          </p>
        </div>

        {/* Controls */}
        <div className="grid md:grid-cols-4 gap-4 mt-6">
          {["Weather", "Marketplace", "Language", "Guided Voice"].map((x) => (
            <button
              key={x}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left hover:bg-white/10 transition"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-white/45">
                {x}
              </div>
            </button>
          ))}
        </div>

        {/* Title */}
        <div className="mt-10 mb-6">
          <p className="text-sm uppercase tracking-[0.25em] text-green-300">
            Choose a pathway
          </p>

          <div className="w-full h-2 bg-white/10 rounded-full mt-3 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-green-400 to-lime-300 rounded-full" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">

          {[
            {
              n: "01",
              title: "Guest",
              mission:
                "Understand the vision, story, and purpose of Bronson Family Farm.",
              outcome:
                "Guests leave understanding why this land matters and why the work should continue.",
            },
            {
              n: "02",
              title: "Customer",
              mission:
                "Guide people toward fresh food, nutrition, and repeat healthy choices.",
              outcome:
                "Customers leave informed, connected to healthier food choices, and ready to return regularly.",
            },
            {
              n: "03",
              title: "Marketplace",
              mission:
                "Convert interest into purchasing power and long-term sustainability.",
              outcome:
                "Visitors clearly understand how to buy, support the mission, and keep the ecosystem sustainable.",
            },
            {
              n: "04",
              title: "Grower",
              mission:
                "Connect producers to opportunity and meaningful market participation.",
              outcome:
                "Growers understand there is a real place for them to participate, sell, learn, and grow.",
            },
            {
              n: "05",
              title: "Youth Workforce",
              mission:
                "Build skills, responsibility, and future readiness.",
              outcome:
                "Young people and families understand this pathway leads to growth and support.",
            },
            {
              n: "06",
              title: "Partners",
              mission:
                "Align resources and collaboration for community benefit.",
              outcome:
                "Partners understand where they fit and what shared impact can look like.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-300/20 flex items-center justify-center text-green-300 font-semibold">
                  {card.n}
                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Pathway
                </p>
              </div>

              <h2 className="text-3xl font-light mt-6">{card.title}</h2>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Mission
                </p>
                <p className="mt-2 text-white/80 leading-relaxed">
                  {card.mission}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Outcome
                </p>
                <p className="mt-2 text-white/70 leading-relaxed">
                  {card.outcome}
                </p>
              </div>

              <button className="mt-8 w-full rounded-2xl bg-green-500/15 border border-green-300/20 py-4 hover:bg-green-500/25 transition">
                Open Pathway →
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-white/50 text-sm">
          Built so people understand the mission, receive value, and have a reason to return again.
        </div>

      </div>
    </div>
  );
}
