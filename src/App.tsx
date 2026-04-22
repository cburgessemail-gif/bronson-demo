import React, { useEffect, useMemo, useState } from "react";

type Lang = "English" | "Español" | "Filipino" | "Italiano" | "Français" | "עברית";
type View = "home" | "guest" | "customer" | "marketplace" | "grower" | "youth" | "partners";

const HERO =
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1800&q=80";

const GUEST =
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80";

const CUSTOMER =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80";

const MARKET =
  "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1400&q=80";

const GROWER =
  "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1400&q=80";

const YOUTH =
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=80";

const PARTNER =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80";

const buttonBase =
  "rounded-2xl px-4 py-3 transition-all duration-300 font-semibold shadow-lg";

const pathwayCard =
  "rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-[1.02] transition-all cursor-pointer";

export default function App() {
  const [lang, setLang] = useState<Lang>("English");
  const [voice, setVoice] = useState(false);
  const [view, setView] = useState<View>("home");

  const speak = (text: string) => {
    if (!voice || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    utter.pitch = 1;
    utter.volume = 1;
    window.speechSynthesis.speak(utter);
  };

  const copy = useMemo(
    () => ({
      English: {
        title: "Step into the ecosystem.",
        subtitle:
          "An immersive farm, food, learning, and community platform.",
        body:
          "Bronson Family Farm helps guests understand the vision, customers choose healthy food, growers access opportunity, youth build skills, and partners create impact.",
      },
      Español: {
        title: "Entre al ecosistema.",
        subtitle:
          "Una plataforma inmersiva de granja, alimentos, aprendizaje y comunidad.",
        body:
          "Bronson Family Farm conecta visión, comida saludable, oportunidades y comunidad.",
      },
      Filipino: {
        title: "Pumasok sa ecosystem.",
        subtitle:
          "Isang makabagong plataporma ng bukid, pagkain, pag-aaral at komunidad.",
        body:
          "Nag-uugnay ng layunin, masustansyang pagkain at oportunidad.",
      },
      Italiano: {
        title: "Entra nell’ecosistema.",
        subtitle:
          "Una piattaforma immersiva di fattoria, cibo, apprendimento e comunità.",
        body:
          "Visione, salute, opportunità e collaborazione.",
      },
      Français: {
        title: "Entrez dans l’écosystème.",
        subtitle:
          "Une plateforme immersive de ferme, alimentation, apprentissage et communauté.",
        body:
          "Vision, santé, opportunité et impact partagé.",
      },
      עברית: {
        title: "היכנסו לאקוסיסטם.",
        subtitle:
          "פלטפורמה חיה של חווה, מזון, למידה וקהילה.",
        body:
          "חזון, בריאות, הזדמנות וקהילה.",
      },
    }),
    []
  );

  useEffect(() => {
    speak(copy[lang].title + ". " + copy[lang].body);
  }, [lang, view]);

  const HomeCard = ({
    title,
    text,
    image,
    next,
  }: {
    title: string;
    text: string;
    image: string;
    next: View;
  }) => (
    <div className={pathwayCard} onClick={() => setView(next)}>
      <div
        className="h-44 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm opacity-90">{text}</p>
        <button className={`${buttonBase} mt-4 bg-green-700 hover:bg-green-800`}>
          Enter Pathway
        </button>
      </div>
    </div>
  );

  const DetailPage = ({
    title,
    image,
    intro,
    points,
  }: {
    title: string;
    image: string;
    intro: string;
    points: string[];
  }) => (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.65)),url(${image})` }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <button
          onClick={() => setView("home")}
          className={`${buttonBase} bg-white/20 hover:bg-white/30 mb-8`}
        >
          ← Back to Entrance
        </button>

        <h1 className="text-5xl font-black mb-4">{title}</h1>
        <p className="text-xl max-w-3xl mb-8">{intro}</p>

        <div className="grid md:grid-cols-2 gap-5">
          {points.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/10 backdrop-blur-md p-5 border border-white/20"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (view === "guest")
    return (
      <DetailPage
        title="Guest Experience"
        image={GUEST}
        intro="Walk the land. Learn the story. Understand why this exists."
        points={[
          "Historic airport transformation into a regenerative farm.",
          "Family legacy from California and the Philippines.",
          "Agritourism destination for Mahoning Valley.",
          "Events, tours, markets, wellness, nature.",
        ]}
      />
    );

  if (view === "customer")
    return (
      <DetailPage
        title="Customer Pathway"
        image={CUSTOMER}
        intro="Fresh food. Better choices. Reasons to come back."
        points={[
          "Fresh produce grown with purpose.",
          "Nutrition education and recipes.",
          "Repeat healthy buying habits.",
          "Pickup, events, marketplace access.",
        ]}
      />
    );

  if (view === "marketplace")
    return (
      <DetailPage
        title="Marketplace"
        image={MARKET}
        intro="Where attention becomes action."
        points={[
          "Buy local produce and value-added goods.",
          "Growers connect to customers.",
          "Revenue supports sustainability.",
          "Linked to GrownBy storefront ecosystem.",
        ]}
      />
    );

  if (view === "grower")
    return (
      <DetailPage
        title="Grower Network"
        image={GROWER}
        intro="Grow here. Belong here. Benefit here."
        points={[
          "Join the producer ecosystem.",
          "Training, collaboration, and markets.",
          "Shared logistics and opportunity.",
          "Return often for seasonal demand.",
        ]}
      />
    );

  if (view === "youth")
    return (
      <DetailPage
        title="Youth Workforce"
        image={YOUTH}
        intro="Learning by doing, guided by purpose."
        points={[
          "Hands-on work readiness.",
          "Agriculture, technology, responsibility.",
          "Supervisor pathway for advancement.",
          "Future-focused leadership skills.",
        ]}
      />
    );

  if (view === "partners")
    return (
      <DetailPage
        title="Partners"
        image={PARTNER}
        intro="Shared vision. Shared alignment. Shared impact."
        points={[
          "City, schools, nonprofits, health systems.",
          "Corporate sponsors and institutions.",
          "Resource alignment for community benefit.",
          "Collaborative measurable outcomes.",
        ]}
      />
    );

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.7)),url(${HERO})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="rounded-3xl bg-black/30 backdrop-blur-md p-8 border border-white/20 shadow-2xl">
          <p className="uppercase tracking-[0.35em] text-sm text-green-300">
            Living Ecosystem Demo
          </p>

          <h1 className="text-6xl font-black mt-3 mb-4">{copy[lang].title}</h1>
          <p className="text-2xl mb-2">{copy[lang].subtitle}</p>
          <p className="text-lg max-w-5xl opacity-90">{copy[lang].body}</p>

          <div className="flex flex-wrap gap-2 mt-6">
            {(["English", "Español", "Filipino", "Italiano", "Français", "עברית"] as Lang[]).map(
              (l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`${buttonBase} ${
                    lang === l
                      ? "bg-green-700"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {l}
                </button>
              )
            )}

            <button
              onClick={() => setVoice(!voice)}
              className={`${buttonBase} ${
                voice ? "bg-amber-600" : "bg-white/10 hover:bg-white/20"
              }`}
            >
              Guided Voice: {voice ? "On" : "Off"}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <HomeCard
            title="Guest"
            text="Walk the land. See the story."
            image={GUEST}
            next="guest"
          />
          <HomeCard
            title="Customer"
            text="Fresh food and nutrition."
            image={CUSTOMER}
            next="customer"
          />
          <HomeCard
            title="Marketplace"
            text="Turn interest into sustainability."
            image={MARKET}
            next="marketplace"
          />
          <HomeCard
            title="Grower"
            text="Connect producers to opportunity."
            image={GROWER}
            next="grower"
          />
          <HomeCard
            title="Youth Workforce"
            text="Build future readiness."
            image={YOUTH}
            next="youth"
          />
          <HomeCard
            title="Partners"
            text="Align resources for impact."
            image={PARTNER}
            next="partners"
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://www.bronsonfamilyfarm.com/"
            target="_blank"
            className={`${buttonBase} bg-green-700 hover:bg-green-800`}
          >
            Website
          </a>

          <a
            href="https://grownby.com/farms/bronson-family-farm/shop"
            target="_blank"
            className={`${buttonBase} bg-amber-700 hover:bg-amber-800`}
          >
            Storefront
          </a>
        </div>

        <p className="mt-8 text-sm opacity-80">
          Developed by Bronson Family Farm
        </p>
      </div>
    </div>
  );
}
