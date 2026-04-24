import { useMemo, useState } from "react";

type Partner = {
  name: string;
  sub: string;
};

type Pathway = {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  btn: string;
  target: string;
};

export default function App() {
  const [lang, setLang] = useState("EN");

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openMarketplace = () => {
    window.open(
      "https://grownby.com/farms/bronson-family-farm/shop",
      "_blank"
    );
  };

  const languageNames: Record<string, string> = {
    EN: "English",
    ES: "Español",
    TL: "Tagalog",
    FR: "Français",
    HE: "עברית",
  };

  const copy = useMemo(
    () => ({
      heroTag: "Historic Lansdowne Airport Site | Est. 1926",
      heroTitle:
        "From Youngstown’s first airport to a new future of food, learning, and community renewal.",
      heroDesc:
        "Bronson Family Farm is transforming historic land into a regenerative farm, agritourism destination, youth workforce pathway, and living ecosystem for the Mahoning Valley.",
      enter: "Enter the Ecosystem",
      explore: "Explore Pathways",
      pathways: "Choose Your Pathway",
      pathwaysDesc:
        "Every pathway is designed to create value, belonging, opportunity, and a reason to return.",
      partners: "Community & Strategic Partners",
      finalTitle: "Be Part of What’s Growing",
      finalDesc:
        "Fresh food. Opportunity. Renewal. A place where people, land, and purpose meet again.",
    }),
    [lang]
  );

  const images = {
    hero: "/images/SAM_0249.JPG",
    guest: "/images/GrowArea2.jpg",
    customer: "/images/SAM_0225.JPG",
    marketplace: "/images/SAM_0249.JPG",
    grower: "/images/SAM_0238.JPG",
    youth: "/images/SAM_0222.JPG",
    partners: "/images/SAM_0223.JPG",
    footer: "/images/SAM_0249.JPG",
  };

  const pathways: Pathway[] = [
    {
      title: "Guest",
      subtitle: "Discover the Story",
      desc:
        "Understand the vision, experience the land, and see why this place matters now.",
      img: images.guest,
      btn: "Enter as Guest",
      target: "partners",
    },
    {
      title: "Customer",
      subtitle: "Eat Fresh. Live Better.",
      desc:
        "Access seasonal produce, healthy choices, and a reason to keep coming back.",
      img: images.customer,
      btn: "Shop Fresh",
      target: "final",
    },
    {
      title: "Marketplace",
      subtitle: "Support Local Commerce",
      desc:
        "Turn interest into buying power that supports farms and local growth.",
      img: images.marketplace,
      btn: "Open Marketplace",
      target: "marketplace",
    },
    {
      title: "Grower",
      subtitle: "Grow With Us",
      desc:
        "Connect growers to opportunity, visibility, and participation.",
      img: images.grower,
      btn: "Learn More",
      target: "partners",
    },
    {
      title: "Youth Workforce",
      subtitle: "Build Skills for the Future",
      desc:
        "Hands-on pathways in responsibility, teamwork, and leadership.",
      img: images.youth,
      btn: "Get Involved",
      target: "final",
    },
    {
      title: "Partners",
      subtitle: "Create Community Impact",
      desc:
        "Align institutions, sponsors, educators, and civic partners.",
      img: images.partners,
      btn: "View Partners",
      target: "partners",
    },
  ];

  const partnerCards: Partner[] = [
    { name: "Farm & Family Alliance, Inc.", sub: "Nonprofit Community Partner" },
    { name: "Parker Farms", sub: "Marketplace & Growing Partner" },
    { name: "City of Youngstown", sub: "Community Alignment" },
    { name: "Gates Drone Services", sub: "Official Aerial Imaging Partner" },
    { name: "Julilee Gardens Inc.", sub: "Community Growing Partner" },
    { name: "Youngstown Area Jewish Federation", sub: "Community Support" },
    { name: "Central State University", sub: "Agriculture & Education Support" },
    { name: "The Home Depot Boardman #3805", sub: "Community Build Support" },
    { name: "Elliott's Garden Center", sub: "Garden & Grow Support" },
    { name: "Petitti Garden Centers", sub: "Regional Garden Support" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#1f2d1f]">
      <header className="sticky top-0 z-50 border-b border-[#d9ddcf] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-semibold">Bronson Family Farm</h1>
            <p className="text-xs uppercase tracking-[0.22em] text-[#577053]">
              Regenerative Farm Ecosystem
            </p>
          </div>

          <div className="flex gap-2">
            {["EN", "ES", "TL", "FR", "HE"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-3 py-1 text-sm ${
                  lang === l
                    ? "bg-[#244b2d] text-white"
                    : "border border-[#cfd6c4] bg-white text-[#244b2d]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={images.hero}
          alt="Aerial view of Bronson Family Farm"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-4xl">
            <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white">
              {copy.heroTag}
            </p>

            <h2 className="text-5xl font-semibold leading-tight text-white md:text-7xl">
              {copy.heroTitle}
            </h2>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-white/90">
              {copy.heroDesc}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => goTo("pathways")}
                className="rounded-2xl bg-[#2e6a3b] px-7 py-3 text-white"
              >
                {copy.enter}
              </button>

              <button
                onClick={() => goTo("pathways")}
                className="rounded-2xl border border-white px-7 py-3 text-white"
              >
                {copy.explore}
              </button>
            </div>

            <p className="mt-6 text-sm text-white/80">
              Live language view: {languageNames[lang]}
            </p>
          </div>
        </div>
      </section>

      <section id="pathways" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h3 className="text-4xl font-semibold">{copy.pathways}</h3>
          <p className="mt-4 text-lg text-[#556255]">{copy.pathwaysDesc}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pathways.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border border-[#e2e6d9] bg-white shadow"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[#6b8b67]">
                  {item.title}
                </p>
                <h4 className="mt-2 text-2xl font-semibold">
                  {item.subtitle}
                </h4>
                <p className="mt-3 min-h-[88px] text-[#5a6457]">
                  {item.desc}
                </p>

                <button
                  onClick={() =>
                    item.target === "marketplace"
                      ? openMarketplace()
                      : goTo(item.target)
                  }
                  className="mt-4 w-full rounded-2xl bg-[#245730] py-3 text-white"
                >
                  {item.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="partners"
        className="bg-[#eef2e7] px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h3 className="text-4xl font-semibold">{copy.partners}</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {partnerCards.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-[#d9ddcf] bg-white p-5 shadow"
              >
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="mt-2 text-sm text-[#5a6457]">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="final"
        className="relative overflow-hidden px-6 py-20 text-white"
      >
        <img
          src={images.footer}
          alt="Bronson Family Farm"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(17,41,22,0.88)]" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <h3 className="text-4xl font-semibold">{copy.finalTitle}</h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/85">
            {copy.finalDesc}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {[
              "Visit the Farm",
              "Shop Fresh",
              "Grow With Us",
              "Partner With Us",
              "Apply Today",
            ].map((btn) => (
              <button
                key={btn}
                onClick={() =>
                  btn === "Shop Fresh"
                    ? openMarketplace()
                    : goTo("partners")
                }
                className="rounded-2xl bg-white px-4 py-3 text-[#18311d]"
              >
                {btn}
              </button>
            ))}
          </div>

          <p className="mt-12 text-sm uppercase tracking-[0.18em] text-white/70">
            Historic Lansdowne Airport Site • Youngstown, Ohio
          </p>

          <p className="mt-2 text-white/80">
            www.bronsonfamilyfarm.com
          </p>
        </div>
      </section>
    </div>
  );
}
