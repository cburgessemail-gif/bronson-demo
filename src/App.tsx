import React, { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("EN");

  const pathways = [
    {
      title: "Guest",
      subtitle: "Discover the Story",
      desc: "Explore the land, history, purpose, and future of Bronson Family Farm.",
      img: "/photos/guest.jpg",
      btn: "Enter as Guest",
    },
    {
      title: "Customer",
      subtitle: "Eat Fresh. Live Better.",
      desc: "Access seasonal produce, healthy choices, events, and repeat buying opportunities.",
      img: "/photos/customer.jpg",
      btn: "Shop Fresh",
    },
    {
      title: "Marketplace",
      subtitle: "Support Local Commerce",
      desc: "Buy from Bronson Family Farm and regional growers through a modern marketplace.",
      img: "/photos/marketplace.jpg",
      btn: "Enter Marketplace",
    },
    {
      title: "Grower",
      subtitle: "Grow With Us",
      desc: "Connect producers to market access, collaboration, and opportunity.",
      img: "/photos/grower.jpg",
      btn: "Become a Grower",
    },
    {
      title: "Youth Workforce",
      subtitle: "Build Skills for the Future",
      desc: "Hands-on learning in agriculture, logistics, leadership, and entrepreneurship.",
      img: "/photos/youth.jpg",
      btn: "Join Program",
    },
    {
      title: "Partners",
      subtitle: "Create Community Impact",
      desc: "Align sponsorship, education, and mission-driven collaboration.",
      img: "/photos/partners.jpg",
      btn: "Partner With Us",
    },
  ];

  const proof = [
    {
      title: "In Production",
      desc: "Seedlings, produce, regenerative growing systems, seasonal expansion.",
      img: "/photos/production.jpg",
    },
    {
      title: "Buy Local",
      desc: "Shop fresh food and support local growers.",
      img: "/photos/buylocal.jpg",
    },
    {
      title: "Upcoming Events",
      desc: "Tours, workshops, Growers Supply Market, family experiences.",
      img: "/photos/events.jpg",
    },
    {
      title: "Growing Together",
      desc: "Education, sponsors, civic collaboration, workforce partnerships.",
      img: "/photos/community.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#1f2d1f] font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
          Bronson Family Farm
        </h1>

        <div className="flex gap-2">
          {["EN", "ES", "TL", "FR"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 rounded-full text-sm border ${
                lang === l
                  ? "bg-green-800 text-white"
                  : "bg-white text-green-800"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative min-h-[85vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/photos/home.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 max-w-4xl px-8 md:px-16 text-white">
          <p className="uppercase tracking-[4px] text-sm mb-3">
            Historic Lansdowne Airport Site | Est. 1926
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            From Youngstown’s first airport to a new future of food,
            learning, and community renewal.
          </h2>

          <p className="text-lg md:text-xl max-w-2xl mb-8 text-white/90">
            Bronson Family Farm is transforming historic land into a regenerative
            farm, agritourism destination, youth workforce pathway, and living
            ecosystem for the Mahoning Valley.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-green-700 hover:bg-green-800 rounded-xl">
              Enter the Ecosystem
            </button>

            <button className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-xl">
              Explore Pathways
            </button>
          </div>
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-semibold mb-4">
            Choose Your Pathway Into the Ecosystem
          </h3>
          <p className="text-lg text-gray-700">
            Land, food, learning, business, and community coming together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pathways.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.img}
                className="h-52 w-full object-cover"
                alt={item.title}
              />

              <div className="p-6">
                <p className="text-sm uppercase tracking-wide text-green-700 mb-1">
                  {item.title}
                </p>

                <h4 className="text-2xl font-semibold mb-2">{item.subtitle}</h4>

                <p className="text-gray-700 mb-5">{item.desc}</p>

                <button className="w-full py-3 rounded-xl bg-green-700 text-white hover:bg-green-800">
                  {item.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HAPPENING NOW */}
      <section className="py-20 bg-[#e7efe4] px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-semibold mb-4">
              Happening Now at Bronson Family Farm
            </h3>
            <p className="text-lg text-gray-700">
              Fresh activity. Real opportunities. Community momentum.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {proof.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow"
              >
                <img
                  src={item.img}
                  className="h-44 w-full object-cover"
                  alt={item.title}
                />

                <div className="p-5">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-semibold mb-6">
          A Historic Place With a Living Future
        </h3>

        <p className="text-lg text-gray-700 leading-8">
          Lansdowne Airport was dedicated in 1926 as Youngstown’s first airport.
          Today, Bronson Family Farm is helping reconnect land, food, families,
          growers, and opportunity on the same historic ground.
        </p>
      </section>

      {/* CTA FOOTER */}
      <section className="bg-[#18311d] text-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-semibold mb-4">
            Be Part of What’s Growing
          </h3>

          <p className="text-lg text-white/80 mb-10">
            Fresh food. Opportunity. Community renewal. Legacy in motion.
          </p>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {[
              "Visit the Farm",
              "Shop Fresh",
              "Grow With Us",
              "Partner With Us",
              "Apply Today",
            ].map((btn, i) => (
              <button
                key={i}
                className="py-3 px-4 bg-white text-[#18311d] rounded-xl hover:bg-gray-200"
              >
                {btn}
              </button>
            ))}
          </div>

          <p className="text-white/70">
            Historic Lansdowne Airport Site • Youngstown, Ohio
          </p>
          <p className="text-white/70 mt-2">www.bronsonfamilyfarm.com</p>
        </div>
      </section>
    </div>
  );
}
