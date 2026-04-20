import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  const pathways = [
    {
      id: "guest",
      title: "Guest",
      subtitle: "Understand the vision, story, and purpose.",
      mission:
        "Guests leave understanding why this land matters and why the work should continue.",
    },
    {
      id: "customer",
      title: "Customer",
      subtitle: "Fresh food, nutrition, and repeat healthy choices.",
      mission:
        "Customers leave informed and connected to healthier food choices.",
    },
    {
      id: "marketplace",
      title: "Marketplace",
      subtitle: "Convert interest into purchasing power.",
      mission:
        "Marketplace visitors support long-term sustainability.",
    },
    {
      id: "grower",
      title: "Grower",
      subtitle: "Connect producers to opportunity.",
      mission:
        "Growers discover participation, markets, and growth.",
    },
    {
      id: "youth",
      title: "Youth Workforce",
      subtitle: "Build skills, responsibility, readiness.",
      mission:
        "Young people grow through real pathways and support.",
    },
    {
      id: "partners",
      title: "Partners",
      subtitle: "Align resources for community benefit.",
      mission:
        "Partners understand where they fit and create impact.",
    },
  ];

  const current = pathways.find((p) => p.id === page);

  if (page !== "home" && current) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#06261c] via-[#0b4b37] to-[#0f6b49] text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={() => setPage("home")}
            className="mb-8 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10"
          >
            ← Back
          </button>

          <div className="rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-xl p-10">
            <div className="text-sm uppercase tracking-[0.3em] text-yellow-200">
              Mission Pathway
            </div>

            <h1 className="text-6xl font-bold mt-5">{current.title}</h1>

            <p className="mt-6 text-2xl text-white/80 max-w-3xl leading-relaxed">
              {current.subtitle}
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-10">
              {[
                "Sound Bite",
                "Intro",
                "Knowledge",
                "Purpose",
                "Next",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-black/20 border border-white/10 p-6"
                >
                  <div className="text-xs uppercase tracking-[0.25em] text-white/50">
                    {item}
                  </div>
                  <div className="mt-3 text-lg text-white/80">
                    Meaningful content connected to mission outcome.
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-green-900/40 border border-green-300/20 p-7">
              <div className="text-xs uppercase tracking-[0.25em] text-green-200">
                Outcome
              </div>
              <div className="mt-3 text-2xl text-white/85 leading-relaxed">
                {current.mission}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#123]">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#06261c] via-[#08442f] to-[#0b5e3f] text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-sm tracking-[0.3em] uppercase text-green-200">
            Mission-Driven Ecosystem Demo
          </div>

          <h1 className="text-6xl font-bold mt-3">Bronson Family Farm</h1>

          <p className="mt-4 text-xl text-white/80 max-w-4xl leading-relaxed">
            An ecosystem for food, learning, wellness, workforce, and community return.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {["Home", "Guest", "Customer", "Marketplace", "Grower", "Youth Workforce", "Partners"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    setPage(
                      item === "Home"
                        ? "home"
                        : item.toLowerCase().replaceAll(" ", "")
                    )
                  }
                  className="px-5 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="rounded-[36px] bg-gradient-to-br from-[#075234] via-[#0a6a42] to-[#158058] text-white p-10 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="inline-block px-5 py-2 rounded-full bg-white/10 text-sm uppercase tracking-[0.25em]">
                Step into the ecosystem
              </div>

              <h2 className="text-7xl font-bold leading-[0.95] mt-6">
                Bronson Family Farm
                <br />
                is more than a farm.
              </h2>

              <p className="mt-8 text-2xl text-white/80 leading-relaxed">
                A regenerative ecosystem connecting land, food access,
                marketplace activity, growers, youth workforce development,
                education, and partnership in Youngstown and the Mahoning Valley.
              </p>

              <div className="mt-8 rounded-3xl bg-black/20 border border-white/10 p-7">
                <div className="text-sm uppercase tracking-[0.25em] text-yellow-200">
                  Mission
                </div>
                <p className="mt-4 text-2xl leading-relaxed text-white/85">
                  Restore land, grow healthy food, create opportunity, and build
                  community systems for the Mahoning Valley Area.
                </p>
              </div>

              <div className="flex gap-4 mt-8 flex-wrap">
                <button
                  onClick={() => setPage("marketplace")}
                  className="px-8 py-5 rounded-2xl bg-yellow-300 text-black font-bold text-xl"
                >
                  Enter Marketplace
                </button>

                <button className="px-8 py-5 rounded-2xl bg-white/10 border border-white/10 text-xl">
                  Begin Guided Tour
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl bg-white/10 border border-white/10 p-8">
                <div className="text-6xl font-bold text-yellow-200">118+</div>
                <div className="mt-2 text-2xl font-semibold">
                  acres of vision and possibility
                </div>
                <p className="mt-4 text-xl text-white/75">
                  A destination for food access, agritourism, education,
                  workforce pathways, and community return.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 border border-white/10 p-8">
                <div className="text-6xl font-bold text-yellow-200">6</div>
                <div className="mt-2 text-2xl font-semibold">
                  mission pathways
                </div>
                <p className="mt-4 text-xl text-white/75">
                  Every pathway is built to achieve a specific outcome.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 border border-white/10 p-8">
                <div className="text-2xl font-semibold">Return Again</div>
                <p className="mt-4 text-xl text-white/75">
                  Built so visitors, customers, growers, youth, and partners
                  always have a reason to come back.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pathway Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {pathways.map((p) => (
            <button
              key={p.id}
              onClick={() => setPage(p.id)}
              className="text-left rounded-3xl bg-white border border-black/5 p-7 shadow-sm hover:shadow-xl transition"
            >
              <div className="text-sm uppercase tracking-[0.25em] text-green-700">
                Pathway
              </div>

              <h3 className="text-3xl font-bold mt-3 text-[#123]">
                {p.title}
              </h3>

              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                {p.subtitle}
              </p>

              <div className="mt-6 text-green-700 font-semibold">
                Open Pathway →
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
