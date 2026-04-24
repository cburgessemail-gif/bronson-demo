import { useState } from "react";

type Lang = "EN" | "ES" | "TL" | "FR";
type SectionId = "pathways" | "happening-now" | "history" | "partners" | "connect";

type Card = {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  btn: string;
  target: SectionId | "marketplace";
};

export default function App() {
  const [lang, setLang] = useState<Lang>("EN");

  const goTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openMarketplace = () => {
    window.open("https://grownby.com/farms/bronson-family-farm/shop", "_blank");
  };

  const images = {
    hero: "/GrowArea.jpg",
    guest: "/GrowArea2.jpg",
    customer: "/SAM_0225.JPG",
    marketplace: "/SAM_0249.JPG",
    grower: "/SAM_0238.JPG",
    youth: "/SAM_0222.JPG",
    partners: "/SAM_0223.JPG",
    production: "/SAM_0226.JPG",
    buyLocal: "/SAM_0229.JPG",
    events: "/SAM_0255.JPG",
    community: "/SAM_0257.JPG",
    footer: "/SAM_0249.JPG",
  };

  const text = {
    EN: {
      heroTitle: "From Youngstown’s first airport to a new future of food, learning, and community renewal.",
      heroText: "Bronson Family Farm is a regenerative farm, agritourism destination, youth workforce pathway, marketplace, and living ecosystem for the Mahoning Valley.",
      enter: "Enter the Ecosystem",
      shop: "Shop the Marketplace",
    },
    ES: {
      heroTitle: "Del primer aeropuerto de Youngstown a un nuevo futuro de alimentos, aprendizaje y renovación comunitaria.",
      heroText: "Bronson Family Farm es una granja regenerativa, destino de agroturismo, programa juvenil, mercado y ecosistema vivo para el Valle de Mahoning.",
      enter: "Entrar al Ecosistema",
      shop: "Comprar en el Mercado",
    },
    TL: {
      heroTitle: "Mula sa unang paliparan ng Youngstown tungo sa bagong kinabukasan ng pagkain, pagkatuto, at komunidad.",
      heroText: "Ang Bronson Family Farm ay isang regenerative farm, agritourism destination, youth workforce pathway, marketplace, at buhay na ecosystem para sa Mahoning Valley.",
      enter: "Pumasok sa Ecosystem",
      shop: "Mamili sa Marketplace",
    },
    FR: {
      heroTitle: "Du premier aéroport de Youngstown vers un nouvel avenir d’alimentation, d’apprentissage et de renouveau communautaire.",
      heroText: "Bronson Family Farm est une ferme régénératrice, une destination d’agritourisme, un parcours jeunesse, un marché et un écosystème vivant pour la vallée de Mahoning.",
      enter: "Entrer dans l’écosystème",
      shop: "Acheter au marché",
    },
  }[lang];

  const pathways: Card[] = [
    { title: "Guest", subtitle: "Discover the Story", desc: "Explore the land, history, purpose, and future of Bronson Family Farm.", img: images.guest, btn: "Enter as Guest", target: "history" },
    { title: "Customer", subtitle: "Eat Fresh. Live Better.", desc: "Access seasonal produce, Bubble Babies™, healthy choices, and repeat buying opportunities.", img: images.customer, btn: "Shop Fresh", target: "happening-now" },
    { title: "Marketplace", subtitle: "Support Local Commerce", desc: "Buy from Bronson Family Farm and regional growers through a modern marketplace.", img: images.marketplace, btn: "Enter Marketplace", target: "marketplace" },
    { title: "Grower", subtitle: "Grow With Us", desc: "Connect producers to market access, collaboration, training, and opportunity.", img: images.grower, btn: "Become a Grower", target: "connect" },
    { title: "Youth Workforce", subtitle: "Build Skills for the Future", desc: "Hands-on learning in agriculture, logistics, leadership, technology, and entrepreneurship.", img: images.youth, btn: "Join Program", target: "connect" },
    { title: "Partners", subtitle: "Create Community Impact", desc: "Align sponsorship, education, food access, health, workforce, and mission-driven collaboration.", img: images.partners, btn: "Partner With Us", target: "partners" },
  ];

  const proof: Card[] = [
    { title: "In Production", subtitle: "What’s Growing", desc: "Seedlings, produce, regenerative growing systems, and seasonal expansion.", img: images.production, btn: "View What’s Growing", target: "happening-now" },
    { title: "Buy Local", subtitle: "Marketplace", desc: "Shop fresh food and support local growers through the marketplace.", img: images.buyLocal, btn: "Enter Marketplace", target: "marketplace" },
    { title: "Upcoming Events", subtitle: "Gather on the Land", desc: "Tours, workshops, Growers Supply Market, and family experiences on the land.", img: images.events, btn: "View Events", target: "connect" },
    { title: "Growing Together", subtitle: "Partners", desc: "Education, sponsors, civic collaboration, workforce pathways, and partnerships.", img: images.community, btn: "See Partners", target: "partners" },
  ];

  const partners = [
    "Farm & Family Alliance, Inc.",
    "Parker Farms",
    "City of Youngstown",
    "Jubilee Gardens Inc.",
    "Central State University",
    "Home Depot",
    "Gates Drone Services",
    "Petitti Garden Centers",
    "Elliott’s Garden Center",
    "Youngstown Area Jewish Foundation",
  ];

  const handleCard = (target: Card["target"]) => {
    if (target === "marketplace") openMarketplace();
    else goTo(target);
  };

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#1f2d1f] font-sans">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white/95 px-6 py-4 shadow-sm backdrop-blur">
        <div>
          <p className="text-xs font-bold uppercase tracking-[4px] text-green-800">Developed by Bronson Family Farm</p>
          <h1 className="text-2xl font-semibold tracking-wide md:text-3xl">Bronson Family Farm</h1>
        </div>

        <div className="flex gap-2">
          {(["EN", "ES", "TL", "FR"] as Lang[]).map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`rounded-full border px-3 py-1 text-sm transition ${lang === l ? "border-green-800 bg-green-800 text-white" : "border-gray-300 bg-white text-green-800 hover:border-green-700"}`}>
              {l}
            </button>
          ))}
        </div>
      </header>

      <section className="relative flex min-h-[88vh] items-center bg-cover bg-center" style={{ backgroundImage: `url('${images.hero}')` }}>
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-5xl px-8 text-white md:px-16">
          <p className="mb-4 text-sm uppercase tracking-[4px] md:text-base">Historic Lansdowne Airport Site | Youngstown, Ohio</p>
          <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-6xl">{text.heroTitle}</h2>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/90 md:text-2xl">{text.heroText}</p>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => goTo("pathways")} className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800">{text.enter}</button>
            <button onClick={openMarketplace} className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#1f2d1f]">{text.shop}</button>
          </div>
        </div>
      </section>

      <section id="pathways" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-green-800">Pathways</p>
          <h3 className="mb-4 text-3xl font-semibold md:text-4xl">Choose Your Pathway Into the Ecosystem</h3>
          <p className="mx-auto max-w-3xl text-lg text-gray-700">A place where land, food, learning, business, and community come together.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pathways.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <img src={item.img} alt={item.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <p className="mb-2 text-sm font-bold uppercase tracking-wide text-green-700">{item.title}</p>
                <h4 className="mb-3 text-2xl font-semibold">{item.subtitle}</h4>
                <p className="mb-6 leading-7 text-gray-700">{item.desc}</p>
                <button onClick={() => handleCard(item.target)} className="w-full rounded-xl bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800">{item.btn}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="happening-now" className="bg-[#e7efe4] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-green-800">Happening Now</p>
            <h3 className="mb-4 text-3xl font-semibold md:text-4xl">Real Activity. Real Opportunity.</h3>
            <p className="mx-auto max-w-3xl text-lg text-gray-700">The demo shows production, commerce, events, workforce development, and community momentum.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {proof.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-lg">
                <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-green-700">{item.subtitle}</p>
                  <h4 className="mb-2 text-xl font-semibold">{item.title}</h4>
                  <p className="mb-5 leading-7 text-gray-700">{item.desc}</p>
                  <button onClick={() => handleCard(item.target)} className="w-full rounded-xl border border-green-700 py-3 font-semibold text-green-800 transition hover:bg-green-700 hover:text-white">{item.btn}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="mx-auto max-w-5xl px-6 py-20 text-center md:px-12">
        <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-green-800">Legacy</p>
        <h3 className="mb-6 text-3xl font-semibold md:text-4xl">A Historic Place With a Living Future</h3>
        <p className="text-lg leading-8 text-gray-700">
          Lansdowne Airport was dedicated in 1926 as Youngstown’s first airport. Today, Bronson Family Farm reconnects land, food, families, growers, education, workforce pathways, and opportunity on the same historic ground.
        </p>
      </section>

      <section id="partners" className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-green-800">Ecosystem Partners and Participants</p>
          <h3 className="text-3xl font-semibold md:text-4xl">Collaboration Becomes Action</h3>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {partners.map((partner) => (
              <span key={partner} className="rounded-full border border-green-900/15 bg-[#f7f4ec] px-5 py-3 text-sm font-semibold text-[#1f2d1f]">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="connect" className="relative bg-cover bg-center px-6 py-20 text-white md:px-12" style={{ backgroundImage: `url('${images.footer}')` }}>
        <div className="absolute inset-0 bg-[#18311d]/85" />
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <h3 className="mb-4 text-3xl font-semibold md:text-4xl">Be Part of What’s Growing</h3>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-white/85">Fresh food. Opportunity. Community renewal. Legacy in motion.</p>

          <div className="mb-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {["Visit the Farm", "Shop Fresh", "Grow With Us", "Partner With Us", "Apply Today"].map((btn) => (
              <button key={btn} onClick={() => btn === "Shop Fresh" ? openMarketplace() : btn === "Visit the Farm" ? goTo("history") : goTo("connect")} className="rounded-xl bg-white px-4 py-3 font-semibold text-[#18311d] transition hover:bg-gray-200">
                {btn}
              </button>
            ))}
          </div>

          <p className="text-white/75">Historic Lansdowne Airport Site • Youngstown, Ohio</p>
          <p className="mt-2 text-white/75">www.bronsonfamilyfarm.com</p>
        </div>
      </section>
    </div>
  );
}
