import { useEffect, useState } from "react"

const roles = ["guest", "customer", "grower", "youth", "supervisor"] as const
type Role = (typeof roles)[number]
type LangKey = "en" | "es" | "tl" | "it" | "he" | "patwa"

const languages = {
  en: {
    name: "English",
    voice: "en-US",
    intro: "Welcome to Bronson Family Farm. Choose your path to begin.",
    actions: "Choose Your Path",
  },
  es: {
    name: "Español",
    voice: "es-ES",
    intro: "Bienvenido. Elija su camino.",
    actions: "Elige tu camino",
  },
  tl: {
    name: "Tagalog",
    voice: "tl-PH",
    intro: "Maligayang pagdating. Piliin ang iyong landas.",
    actions: "Piliin ang landas",
  },
  it: {
    name: "Italiano",
    voice: "it-IT",
    intro: "Benvenuto. Scegli il tuo percorso.",
    actions: "Scegli il percorso",
  },
  he: {
    name: "Hebrew",
    voice: "he-IL",
    intro: "ברוכים הבאים. בחר מסלול.",
    actions: "בחר מסלול",
  },
  patwa: {
    name: "Patwa",
    voice: "en-JM",
    intro: "Welcome. Choose yuh path.",
    actions: "Choose yuh path",
  },
}

const products = [
  { name: "Collards", benefit: "Supports heart health" },
  { name: "Tomatoes", benefit: "Rich in antioxidants" },
  { name: "Spinach", benefit: "Iron and brain support" },
  { name: "Peppers", benefit: "Boost immune system" },
]

export default function App() {
  const [role, setRole] = useState<Role | null>(null)
  const [lang, setLang] = useState<LangKey>("en")
  const [view, setView] = useState("home")
  const [weather, setWeather] = useState("Loading...")

  // WEATHER
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&current_weather=true`)
        .then(r => r.json())
        .then(d => setWeather(`${d.current_weather.temperature}°`))
    })
  }, [])

  // VOICE
  useEffect(() => {
    const utter = new SpeechSynthesisUtterance(languages[lang].intro)
    utter.lang = languages[lang].voice
    speechSynthesis.cancel()
    speechSynthesis.speak(utter)
  }, [lang])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white">

      {/* HEADER */}
      <div className="flex justify-between p-4">
        <h1 className="text-xl font-light">Bronson Family Farm</h1>

        <select
          onChange={(e) => setLang(e.target.value as LangKey)}
          className="text-black px-2"
        >
          {Object.entries(languages).map(([k, v]) => (
            <option key={k} value={k}>{v.name}</option>
          ))}
        </select>
      </div>

      {/* ENTRY EXPERIENCE */}
      {!role && (
        <div className="text-center mt-20 px-6">
          <h2 className="text-3xl mb-6">{languages[lang].actions}</h2>

          <div className="flex justify-center flex-wrap gap-4">
            {roles.map(r => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className="bg-white/20 px-6 py-3 rounded capitalize hover:bg-white/40"
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CUSTOMER */}
      {role === "customer" && (
        <div className="px-6">

          <div className="flex gap-4 mb-6 flex-wrap">
            <button onClick={() => setView("market")} className="bg-yellow-500 px-3 py-2 rounded text-black">
              Marketplace
            </button>
            <button onClick={() => setView("nutrition")} className="bg-white/20 px-3 py-2 rounded">
              Nutrition
            </button>
          </div>

          {view === "market" && (
            <div>
              <h2 className="text-2xl mb-4">Fresh Products</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {products.map(p => (
                  <div key={p.name} className="bg-white/10 p-4 rounded">
                    <h3 className="text-xl">{p.name}</h3>
                    <p>{p.benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {view === "nutrition" && (
            <div>
              <h2 className="text-2xl mb-4">Nutrition</h2>
              <p>Fresh food supports long-term health and energy.</p>
            </div>
          )}
        </div>
      )}

      {/* GROWER */}
      {role === "grower" && (
        <div className="px-6">
          <h2 className="text-2xl mb-4">Grower Pathway</h2>
          <p>Register → Grow → Sell through Marketplace → Build income.</p>
        </div>
      )}

      {/* YOUTH */}
      {role === "youth" && (
        <div className="px-6">
          <h2 className="text-2xl mb-4">Youth Workforce</h2>
          <p>Learn skills → Work → Earn → Build future pathways.</p>
        </div>
      )}

      {/* SUPERVISOR */}
      {role === "supervisor" && (
        <div className="px-6">
          <h2 className="text-2xl mb-4">Supervisor</h2>
          <p>Track progress, manage workforce, support development.</p>
        </div>
      )}

      {/* WEATHER */}
      <div className="text-center mt-10 text-sm">
        🌤 Weather: {weather}
      </div>

    </div>
  )
}
