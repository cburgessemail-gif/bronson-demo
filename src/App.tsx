import React, { useMemo, useState } from "react";

type ScreenKey =
  | "home"
  | "story"
  | "guest"
  | "customer"
  | "grower"
  | "producer"
  | "youth"
  | "supervisor"
  | "marketplace"
  | "calendar"
  | "events"
  | "education"
  | "nutrition"
  | "recipes"
  | "weather";

type LanguageKey = "en" | "es" | "tl" | "it" | "patwa" | "he";

const images = {
  home: "/GrowArea2.jpg",
  story: "/SAM_0220.JPG",
  guest: "/SAM_0221.JPG",
  customer: "/SAM_0222.JPG",
  grower: "/SAM_0223.JPG",
  producer: "/SAM_0229.JPG",
  youth: "/SAM_0238.JPG",
  supervisor: "/SAM_0249.JPG",
  marketplace: "/SAM_0257.JPG",
  calendar: "/SAM_0274.JPG",
  events: "/SAM_0275.JPG",
  education: "/SAM_0281.JPG",
  nutrition: "/SAM_0282.JPG",
  recipes: "/SAM_0286.JPG",
  weather: "/SAM_0288.JPG",
  gallery1: "/SAM_0289.JPG",
  gallery2: "/SAM_0290.JPG",
  gallery3: "/SAM_0291.JPG",
  gallery4: "/SAM_0293.JPG",
  gallery5: "/SAM_0301.JPG",
  gallery6: "/SAM_0303.JPG",
};

const labels: Record<LanguageKey, Record<string, string>> = {
  en: {
    title: "Bronson Family Farm",
    subtitle: "A living farm ecosystem, not just a website.",
    back: "Back to Entrance",
    language: "Language",
    story: "Our Story",
    guest: "Guest",
    customer: "Customer",
    grower: "Grower",
    producer: "Value-Added Producer",
    youth: "Youth Workforce",
    supervisor: "Supervisor",
    marketplace: "Marketplace",
    calendar: "Crop Planning",
    events: "Events",
    education: "Education",
    nutrition: "Nutrition",
    recipes: "Recipes",
    weather: "Weather",
    enter: "Enter Pathway",
  },
  es: {
    title: "Bronson Family Farm",
    subtitle: "Un ecosistema agrícola vivo, no solo un sitio web.",
    back: "Volver al Inicio",
    language: "Idioma",
    story: "Nuestra Historia",
    guest: "Invitado",
    customer: "Cliente",
    grower: "Productor",
    producer: "Productor de Valor Agregado",
    youth: "Fuerza Laboral Juvenil",
    supervisor: "Supervisor",
    marketplace: "Mercado",
    calendar: "Planificación de Cultivos",
    events: "Eventos",
    education: "Educación",
    nutrition: "Nutrición",
    recipes: "Recetas",
    weather: "Clima",
    enter: "Entrar",
  },
  tl: {
    title: "Bronson Family Farm",
    subtitle: "Isang buhay na farm ecosystem, hindi lang website.",
    back: "Bumalik sa Simula",
    language: "Wika",
    story: "Kuwento",
    guest: "Bisita",
    customer: "Customer",
    grower: "Grower",
    producer: "Producer",
    youth: "Youth Workforce",
    supervisor: "Supervisor",
    marketplace: "Marketplace",
    calendar: "Crop Planning",
    events: "Events",
    education: "Education",
    nutrition: "Nutrition",
    recipes: "Recipes",
    weather: "Weather",
    enter: "Pumasok",
  },
  it: {
    title: "Bronson Family Farm",
    subtitle: "Un ecosistema agricolo vivo, non solo un sito web.",
    back: "Torna all'Ingresso",
    language: "Lingua",
    story: "La Nostra Storia",
    guest: "Ospite",
    customer: "Cliente",
    grower: "Coltivatore",
    producer: "Produttore",
    youth: "Forza Lavoro Giovanile",
    supervisor: "Supervisore",
    marketplace: "Mercato",
    calendar: "Pianificazione",
    events: "Eventi",
    education: "Educazione",
    nutrition: "Nutrizione",
    recipes: "Ricette",
    weather: "Meteo",
    enter: "Entra",
  },
  patwa: {
    title: "Bronson Family Farm",
    subtitle: "A living farm ecosystem, not just one website.",
    back: "Back to Entrance",
    language: "Language",
    story: "Wi Story",
    guest: "Guest",
    customer: "Customer",
    grower: "Grower",
    producer: "Producer",
    youth: "Youth Workforce",
    supervisor: "Supervisor",
    marketplace: "Marketplace",
    calendar: "Crop Planning",
    events: "Events",
    education: "Education",
    nutrition: "Nutrition",
    recipes: "Recipes",
    weather: "Weather",
    enter: "Enter",
  },
  he: {
    title: "Bronson Family Farm",
    subtitle: "מערכת חקלאית חיה, לא רק אתר אינטרנט.",
    back: "חזרה לכניסה",
    language: "שפה",
    story: "הסיפור שלנו",
    guest: "אורח",
    customer: "לקוח",
    grower: "מגדל",
    producer: "יצרן",
    youth: "כוח עבודה לנוער",
    supervisor: "מפקח",
    marketplace: "שוק",
    calendar: "תכנון גידולים",
    events: "אירועים",
    education: "חינוך",
    nutrition: "תזונה",
    recipes: "מתכונים",
    weather: "מזג אוויר",
    enter: "כניסה",
  },
};

const content: Record<
  ScreenKey,
  { titleKey: string; image: string; description: string; links: ScreenKey[] }
> = {
  home: {
    titleKey: "story",
    image: images.home,
    description:
      "Step into the farm. Experience something different. This platform connects food, land, education, wellness, workforce pathways, and marketplace access.",
    links: ["story", "guest", "customer", "grower", "youth", "marketplace"],
  },
  story: {
    titleKey: "story",
    image: images.story,
    description:
      "Bronson Family Farm blends family legacy, regenerative growing, education, agritourism, and community restoration.",
    links: ["events", "education", "marketplace"],
  },
  guest: {
    titleKey: "guest",
    image: images.guest,
    description:
      "Guests discover events, atmosphere, the farm story, and ways to return as visitors, supporters, or volunteers.",
    links: ["events", "weather", "story"],
  },
  customer: {
    titleKey: "customer",
    image: images.customer,
    description:
      "Customers move from discovery to marketplace access, nutrition guidance, recipes, and repeat engagement.",
    links: ["marketplace", "nutrition", "recipes"],
  },
  grower: {
    titleKey: "grower",
    image: images.grower,
    description:
      "Growers access crop planning, education, events, and collaboration within the ecosystem.",
    links: ["calendar", "education", "events"],
  },
  producer: {
    titleKey: "producer",
    image: images.producer,
    description:
      "Value-added producers can connect to branding, prepared goods, farm sales, and local ecosystem opportunities.",
    links: ["marketplace", "events", "education"],
  },
  youth: {
    titleKey: "youth",
    image: images.youth,
    description:
      "The youth workforce pathway introduces hands-on learning, food systems, work readiness, and land stewardship.",
    links: ["supervisor", "calendar", "education"],
  },
  supervisor: {
    titleKey: "supervisor",
    image: images.supervisor,
    description:
      "Supervisors support the youth workforce with structure, guidance, wellness support, and logistics.",
    links: ["youth", "education", "events"],
  },
  marketplace: {
    titleKey: "marketplace",
    image: images.marketplace,
    description:
      "The marketplace is the bridge to farm commerce, seasonal produce, seedlings, and returning customers.",
    links: ["customer", "nutrition", "recipes"],
  },
  calendar: {
    titleKey: "calendar",
    image: images.calendar,
    description:
      "Crop planning reflects timing, seasonality, grower coordination, and a useful year-round farm rhythm.",
    links: ["grower", "weather", "events"],
  },
  events: {
    titleKey: "events",
    image: images.events,
    description:
      "Events welcome the public through demonstrations, agritourism, education, and repeated farm experiences.",
    links: ["guest", "marketplace", "education"],
  },
  education: {
    titleKey: "education",
    image: images.education,
    description:
      "Education supports growers, customers, youth, and partners with practical farm and food system knowledge.",
    links: ["nutrition", "recipes", "grower"],
  },
  nutrition: {
    titleKey: "nutrition",
    image: images.nutrition,
    description:
      "Nutrition helps visitors compare natural foods and overprocessed foods while supporting healthier choices.",
    links: ["recipes", "marketplace", "customer"],
  },
  recipes: {
    titleKey: "recipes",
    image: images.recipes,
    description:
      "Recipes give families reasons to return by showing practical ways to use produce in everyday meals.",
    links: ["marketplace", "nutrition", "customer"],
  },
  weather: {
    titleKey: "weather",
    image: images.weather,
    description:
      "Weather helps the platform feel seasonal, alive, and connected to day-to-day farm conditions.",
    links: ["calendar", "guest", "events"],
  },
};

const cards: ScreenKey[] = [
  "story",
  "guest",
  "customer",
  "grower",
  "producer",
  "youth",
  "supervisor",
  "marketplace",
  "calendar",
  "events",
  "education",
  "nutrition",
  "recipes",
  "weather",
];

function App() {
  const [language, setLanguage] = useState<LanguageKey>("en");
  const [screen, setScreen] = useState<ScreenKey>("home");

  const t = labels[language];
  const current = content[screen];

  const gallery = useMemo(
    () => [
      images.gallery1,
      images.gallery2,
      images.gallery3,
      images.gallery4,
      images.gallery5,
      images.gallery6,
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#0f1f17] text-white">
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${current.image})` }}
      >
        <div className="min-h-screen bg-black/60">
          <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
            <header className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-white/15 bg-white/10 p-4 backdrop-blur-md md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-semibold">{t.title}</h1>
                <p className="text-sm text-white/80">{t.subtitle}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setScreen("home")}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
                >
                  {t.back}
                </button>

                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as LanguageKey)}
                  className="rounded-full border border-white/20 bg-[#183125] px-4 py-2 text-sm text-white outline-none"
                >
                  <option value="en">{t.language}: English</option>
                  <option value="es">{t.language}: Español</option>
                  <option value="tl">{t.language}: Tagalog</option>
                  <option value="it">{t.language}: Italiano</option>
                  <option value="patwa">{t.language}: Patwa</option>
                  <option value="he">{t.language}: עברית</option>
                </select>
              </div>
            </header>

            {screen === "home" ? (
              <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[2rem] border border-white/15 bg-black/35 p-6 backdrop-blur-md md:p-8">
                  <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
                    {t.subtitle}
                  </h2>

                  <p className="mt-5 max-w-3xl text-lg leading-8 text-white/88">
                    {content.home.description}
                  </p>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {cards.map((card) => (
                      <button
                        key={card}
                        onClick={() => setScreen(card)}
                        className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 text-left transition hover:scale-[1.02] hover:bg-white/15"
                      >
                        <div
                          className="h-36 bg-cover bg-center"
                          style={{ backgroundImage: `url(${content[card].image})` }}
                        />
                        <div className="p-4">
                          <div className="text-lg font-semibold">{t[content[card].titleKey]}</div>
                          <div className="mt-1 text-sm text-white/75">{t.enter}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-[2rem] border border-white/15 bg-black/35 p-6 backdrop-blur-md">
                    <div className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d9f0b8]">
                      Farm Atmosphere
                    </div>
                    <div className="text-3xl font-semibold">Youngstown</div>
                    <div className="mt-1 text-white/85">Mostly Seasonal. Always alive.</div>
                    <p className="mt-4 text-sm leading-7 text-white/75">
                      A welcoming place for learning, food access, agritourism, and community return.
                    </p>
                  </div>

                  <div className="rounded-[2rem] border border-white/15 bg-black/35 p-6 backdrop-blur-md">
                    <div className="mb-4 text-sm uppercase tracking-[0.2em] text-[#d9f0b8]">
                      Gallery
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {gallery.map((img, i) => (
                        <div
                          key={i}
                          className="h-28 rounded-2xl bg-cover bg-center"
                          style={{ backgroundImage: `url(${img})` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[2rem] border border-white/15 bg-black/35 p-6 backdrop-blur-md md:p-8">
                  <div className="mb-3 text-sm uppercase tracking-[0.22em] text-[#d9f0b8]">
                    {t[current.titleKey]}
                  </div>

                  <h2 className="text-4xl font-semibold md:text-5xl">{t[current.titleKey]}</h2>

                  <p className="mt-6 max-w-3xl text-lg leading-8 text-white/88">
                    {current.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {current.links.map((link) => (
                      <button
                        key={link}
                        onClick={() => setScreen(link)}
                        className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/20"
                      >
                        {t[content[link].titleKey]}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div
                    className="h-[360px] rounded-[2rem] border border-white/15 bg-cover bg-center"
                    style={{ backgroundImage: `url(${current.image})` }}
                  />

                  <div className="rounded-[2rem] border border-white/15 bg-black/35 p-6 backdrop-blur-md">
                    <div className="mb-4 text-sm uppercase tracking-[0.2em] text-[#d9f0b8]">
                      More from the Farm
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {gallery.slice(0, 4).map((img, i) => (
                        <div
                          key={i}
                          className="h-28 rounded-2xl bg-cover bg-center"
                          style={{ backgroundImage: `url(${img})` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
