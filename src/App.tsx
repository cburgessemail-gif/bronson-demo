import React, { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  HeartPulse,
  Info,
  Leaf,
  Mic,
  ShoppingBag,
  Sprout,
  Trees,
  UserRound,
  Volume2,
  Play,
  Globe,
} from "lucide-react";

type LanguageKey = "en" | "es" | "tl" | "it" | "fr" | "he";

const LANGUAGES: { key: LanguageKey; label: string }[] = [
  { key: "en", label: "English" },
  { key: "es", label: "Español" },
  { key: "tl", label: "Tagalog" },
  { key: "it", label: "Italiano" },
  { key: "fr", label: "Français" },
  { key: "he", label: "Hebrew" },
];

const COPY = {
  en: {
    eyebrow: "Farm & Family Alliance Ecosystem Demo",
    title: "Bronson Family Farm",
    navEntrance: "Entrance",
    navStory: "Our Story",
    navRoles: "Role Pathways",
    navEvents: "View Events",
    navHealth: "Health & Nutrition",
    navMarket: "Go to Marketplace",
    voiceOn: "Voice narration on",
    badge: "The story behind the farm",
    heroTitle: "The story behind the farm",
    heroText:
      "Inspired by family farming traditions and shaped for Youngstown's future, this farm brings together legacy, land restoration, food access, agritourism, and practical community opportunity.",
    startTour: "Start Guided Tour",
    goMarketplace: "Go to Marketplace",
    openPlanner: "Open Crop Planner",
    conditionsLabel: "Seasonal Conditions",
    conditionsTitle: "Warm season planning active",
    conditionsText:
      "Field prep, seedling movement, event readiness, and seasonal coordination are active.",
    calendarLabel: "Farm Calendar",
    calendarTitle: "Living schedule",
    calendarText:
      "Seedlings, events, education, youth activities, and harvest pathways connect here.",
    languageLabel: "Choose Language",
    overviewEyebrow: "A place people want to return to",
    overviewTitle: "Living ecosystem overview",
    overviewText:
      "This living farm ecosystem is designed to help guests, customers, growers, youth, volunteers, partners, and families move toward food self-sufficiency, economic opportunity, practical wellness, and stronger community connection.",
    card1Title: "Family legacy",
    card1Text:
      "The farm carries Bronson and Lorenzana legacy into a future-focused Youngstown vision.",
    card2Title: "Land restoration",
    card2Text:
      "The project restores land while creating food, education, and agritourism opportunity.",
    card3Title: "Community future",
    card3Text:
      "This is about more than a site. It is an ecosystem for long-term return and growth.",
  },
  es: {
    eyebrow: "Demostración del Ecosistema Farm & Family Alliance",
    title: "Bronson Family Farm",
    navEntrance: "Entrada",
    navStory: "Nuestra Historia",
    navRoles: "Rutas de Roles",
    navEvents: "Ver Eventos",
    navHealth: "Salud y Nutrición",
    navMarket: "Ir al Mercado",
    voiceOn: "Narración activada",
    badge: "La historia detrás de la granja",
    heroTitle: "La historia detrás de la granja",
    heroText:
      "Inspirada en tradiciones familiares de agricultura y enfocada en el futuro de Youngstown, esta granja une legado, restauración de la tierra, acceso a alimentos, agroturismo y oportunidad comunitaria práctica.",
    startTour: "Iniciar recorrido guiado",
    goMarketplace: "Ir al Mercado",
    openPlanner: "Abrir planificador",
    conditionsLabel: "Condiciones estacionales",
    conditionsTitle: "Planificación de temporada cálida activa",
    conditionsText:
      "La preparación del terreno, el movimiento de plántulas, la preparación de eventos y la coordinación estacional están activas.",
    calendarLabel: "Calendario de la granja",
    calendarTitle: "Calendario vivo",
    calendarText:
      "Plántulas, eventos, educación, actividades juveniles y cosecha se conectan aquí.",
    languageLabel: "Elegir idioma",
    overviewEyebrow: "Un lugar al que la gente quiere volver",
    overviewTitle: "Resumen del ecosistema vivo",
    overviewText:
      "Este ecosistema agrícola vivo está diseñado para ayudar a visitantes, clientes, productores, jóvenes, voluntarios, socios y familias a avanzar hacia la autosuficiencia alimentaria, la oportunidad económica, el bienestar práctico y una conexión comunitaria más fuerte.",
    card1Title: "Legado familiar",
    card1Text:
      "La granja lleva el legado Bronson y Lorenzana hacia una visión de Youngstown orientada al futuro.",
    card2Title: "Restauración de la tierra",
    card2Text:
      "El proyecto restaura la tierra mientras crea alimentos, educación y oportunidad agroturística.",
    card3Title: "Futuro comunitario",
    card3Text:
      "Esto es más que un sitio. Es un ecosistema para retorno y crecimiento a largo plazo.",
  },
  tl: {
    eyebrow: "Farm & Family Alliance Ecosystem Demo",
    title: "Bronson Family Farm",
    navEntrance: "Pasukan",
    navStory: "Aming Kuwento",
    navRoles: "Mga Landas ng Tungkulin",
    navEvents: "Tingnan ang Mga Event",
    navHealth: "Kalusugan at Nutrisyon",
    navMarket: "Pumunta sa Marketplace",
    voiceOn: "Naka-on ang narration",
    badge: "Ang kuwento sa likod ng bukid",
    heroTitle: "Ang kuwento sa likod ng bukid",
    heroText:
      "Hinubog ng family farming traditions at ng kinabukasan ng Youngstown, pinagsasama ng bukid na ito ang legacy, land restoration, food access, agritourism, at praktikal na oportunidad para sa komunidad.",
    startTour: "Simulan ang guided tour",
    goMarketplace: "Pumunta sa Marketplace",
    openPlanner: "Buksan ang Crop Planner",
    conditionsLabel: "Pana-panahong Kalagayan",
    conditionsTitle: "Aktibo ang warm season planning",
    conditionsText:
      "Aktibo ang field prep, seedling movement, event readiness, at seasonal coordination.",
    calendarLabel: "Kalendaryo ng Bukid",
    calendarTitle: "Buhay na iskedyul",
    calendarText:
      "Nagsasama rito ang seedlings, events, education, youth activities, at harvest pathways.",
    languageLabel: "Pumili ng Wika",
    overviewEyebrow: "Lugar na gustong balikan ng mga tao",
    overviewTitle: "Buod ng buhay na ecosystem",
    overviewText:
      "Ang buhay na farm ecosystem na ito ay dinisenyo upang tulungan ang guests, customers, growers, youth, volunteers, partners, at families tungo sa food self-sufficiency, economic opportunity, practical wellness, at mas matibay na koneksyon sa komunidad.",
    card1Title: "Pamanang pampamilya",
    card1Text:
      "Dala ng bukid ang Bronson at Lorenzana legacy tungo sa makabagong bisyon para sa Youngstown.",
    card2Title: "Pagpapanumbalik ng lupa",
    card2Text:
      "Ibinabalik ng proyektong ito ang sigla ng lupa habang lumilikha ng pagkain, edukasyon, at oportunidad sa agritourism.",
    card3Title: "Kinabukasan ng komunidad",
    card3Text:
      "Higit ito sa isang lugar. Isa itong ecosystem para sa pangmatagalang pagbabalik at paglago.",
  },
  it: {
    eyebrow: "Demo Ecosistema Farm & Family Alliance",
    title: "Bronson Family Farm",
    navEntrance: "Ingresso",
    navStory: "La Nostra Storia",
    navRoles: "Percorsi di Ruolo",
    navEvents: "Vedi Eventi",
    navHealth: "Salute e Nutrizione",
    navMarket: "Vai al Marketplace",
    voiceOn: "Narrazione attiva",
    badge: "La storia dietro la fattoria",
    heroTitle: "La storia dietro la fattoria",
    heroText:
      "Ispirata dalle tradizioni agricole familiari e modellata per il futuro di Youngstown, questa fattoria unisce eredità, rigenerazione della terra, accesso al cibo, agriturismo e opportunità pratica per la comunità.",
    startTour: "Avvia tour guidato",
    goMarketplace: "Vai al Marketplace",
    openPlanner: "Apri pianificatore",
    conditionsLabel: "Condizioni stagionali",
    conditionsTitle: "Pianificazione della stagione calda attiva",
    conditionsText:
      "Preparazione del terreno, movimento delle piantine, preparazione eventi e coordinamento stagionale sono attivi.",
    calendarLabel: "Calendario della fattoria",
    calendarTitle: "Programma vivo",
    calendarText:
      "Piantine, eventi, educazione, attività giovanili e percorsi di raccolta si collegano qui.",
    languageLabel: "Scegli lingua",
    overviewEyebrow: "Un luogo in cui le persone vogliono tornare",
    overviewTitle: "Panoramica dell'ecosistema vivo",
    overviewText:
      "Questo ecosistema agricolo vivente è progettato per aiutare ospiti, clienti, coltivatori, giovani, volontari, partner e famiglie a muoversi verso autosufficienza alimentare, opportunità economica, benessere pratico e connessione comunitaria più forte.",
    card1Title: "Eredità familiare",
    card1Text:
      "La fattoria porta l'eredità Bronson e Lorenzana in una visione di Youngstown orientata al futuro.",
    card2Title: "Rigenerazione della terra",
    card2Text:
      "Il progetto rigenera la terra creando al tempo stesso cibo, educazione e opportunità agrituristica.",
    card3Title: "Futuro della comunità",
    card3Text:
      "Questo è più di un sito. È un ecosistema per ritorno e crescita a lungo termine.",
  },
  fr: {
    eyebrow: "Démo de l'écosystème Farm & Family Alliance",
    title: "Bronson Family Farm",
    navEntrance: "Entrée",
    navStory: "Notre Histoire",
    navRoles: "Parcours de Rôles",
    navEvents: "Voir les Événements",
    navHealth: "Santé et Nutrition",
    navMarket: "Aller au Marché",
    voiceOn: "Narration activée",
    badge: "L'histoire derrière la ferme",
    heroTitle: "L'histoire derrière la ferme",
    heroText:
      "Inspirée par les traditions agricoles familiales et façonnée pour l'avenir de Youngstown, cette ferme réunit héritage, restauration des terres, accès à l'alimentation, agritourisme et opportunité communautaire concrète.",
    startTour: "Commencer la visite guidée",
    goMarketplace: "Aller au Marché",
    openPlanner: "Ouvrir le planificateur",
    conditionsLabel: "Conditions saisonnières",
    conditionsTitle: "Planification de la saison chaude active",
    conditionsText:
      "La préparation du terrain, le déplacement des semis, la préparation des événements et la coordination saisonnière sont actives.",
    calendarLabel: "Calendrier de la ferme",
    calendarTitle: "Calendrier vivant",
    calendarText:
      "Semis, événements, éducation, activités jeunesse et parcours de récolte se rejoignent ici.",
    languageLabel: "Choisir la langue",
    overviewEyebrow: "Un lieu où les gens veulent revenir",
    overviewTitle: "Vue d'ensemble de l'écosystème vivant",
    overviewText:
      "Cet écosystème agricole vivant est conçu pour aider les visiteurs, clients, producteurs, jeunes, bénévoles, partenaires et familles à progresser vers l'autosuffisance alimentaire, l'opportunité économique, le bien-être concret et un lien communautaire plus fort.",
    card1Title: "Héritage familial",
    card1Text:
      "La ferme porte l'héritage Bronson et Lorenzana dans une vision de Youngstown tournée vers l'avenir.",
    card2Title: "Restauration des terres",
    card2Text:
      "Le projet restaure la terre tout en créant alimentation, éducation et opportunité agritouristique.",
    card3Title: "Avenir communautaire",
    card3Text:
      "C'est plus qu'un site. C'est un écosystème pour le retour et la croissance à long terme.",
  },
  he: {
    eyebrow: "הדגמת מערכת Farm & Family Alliance",
    title: "Bronson Family Farm",
    navEntrance: "כניסה",
    navStory: "הסיפור שלנו",
    navRoles: "מסלולי תפקידים",
    navEvents: "צפייה באירועים",
    navHealth: "בריאות ותזונה",
    navMarket: "לשוק",
    voiceOn: "קריינות פעילה",
    badge: "הסיפור שמאחורי החווה",
    heroTitle: "הסיפור שמאחורי החווה",
    heroText:
      "בהשראת מסורות חקלאות משפחתיות ומתוך מבט לעתידה של יאנגסטאון, החווה הזו מחברת בין מורשת, שיקום אדמה, גישה למזון, אגריטוריזם והזדמנות קהילתית מעשית.",
    startTour: "התחל סיור מודרך",
    goMarketplace: "לשוק",
    openPlanner: "פתח מתכנן גידול",
    conditionsLabel: "תנאים עונתיים",
    conditionsTitle: "תכנון העונה החמה פעיל",
    conditionsText:
      "הכנת שטח, תנועת שתילים, היערכות לאירועים ותיאום עונתי פעילים כעת.",
    calendarLabel: "לוח החווה",
    calendarTitle: "לוח חי",
    calendarText:
      "שתילים, אירועים, חינוך, פעילויות נוער ומסלולי קציר נפגשים כאן.",
    languageLabel: "בחר שפה",
    overviewEyebrow: "מקום שאנשים רוצים לחזור אליו",
    overviewTitle: "סקירת מערכת חיה",
    overviewText:
      "המערכת החקלאית החיה הזו נועדה לעזור לאורחים, לקוחות, מגדלים, צעירים, מתנדבים, שותפים ומשפחות להתקדם לעבר עצמאות מזון, הזדמנות כלכלית, רווחה מעשית וחיבור קהילתי חזק יותר.",
    card1Title: "מורשת משפחתית",
    card1Text:
      "החווה נושאת את מורשת ברונסון ולורנזנה אל חזון עתידי עבור יאנגסטאון.",
    card2Title: "שיקום אדמה",
    card2Text:
      "הפרויקט משקם את האדמה ובו בזמן יוצר מזון, חינוך והזדמנות לאגריטוריזם.",
    card3Title: "עתיד הקהילה",
    card3Text:
      "זה יותר מאתר. זו מערכת שלמה לחזרה ולצמיחה לטווח ארוך.",
  },
};

const BG_IMAGE =
  "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1800&q=80";

const glass =
  "backdrop-blur-xl bg-white/8 border border-white/12 shadow-[0_10px_40px_rgba(0,0,0,0.18)]";
const chip =
  "inline-flex items-center gap-2 rounded-full border border-white/14 bg-[#18362f]/65 px-5 py-3 text-white/92 shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition hover:bg-[#21463d]/80";
const smallCard = `${glass} rounded-[34px] p-7`;
const sideCard = `${glass} rounded-[40px] p-7`;

function useTypedText(text: string, enabled: boolean) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!enabled) {
      setOutput(text);
      return;
    }
    let index = 0;
    setOutput("");
    const timer = window.setInterval(() => {
      index += 1;
      setOutput(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, 12);

    return () => window.clearInterval(timer);
  }, [text, enabled]);

  return output;
}

function NavChip({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button className={chip} onClick={onClick}>
      {icon}
      <span className="text-[16px] font-medium">{label}</span>
    </button>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(32,63,47,0.62),rgba(15,38,30,0.55),rgba(60,88,50,0.35))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className="flex items-start gap-4">
        <div className="mt-1 text-white/85">{icon}</div>
        <div>
          <h3 className="text-[24px] font-semibold leading-none text-white">
            {title}
          </h3>
          <p className="mt-4 text-[18px] leading-9 text-white/82">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<LanguageKey>("en");
  const [voiceOn] = useState(true);

  const t = useMemo(() => COPY[language], [language]);
  const typedHero = useTypedText(t.heroText, voiceOn);

  return (
    <div className="min-h-screen bg-[#11291f] text-white">
      <div
        className="relative min-h-screen overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(18,34,33,0.55) 0%, rgba(21,44,40,0.48) 32%, rgba(17,36,28,0.64) 100%),
            linear-gradient(90deg, rgba(10,19,17,0.72) 0%, rgba(25,53,52,0.46) 46%, rgba(83,124,132,0.34) 100%),
            url(${BG_IMAGE})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(19,53,58,0.45),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(134,178,193,0.22),transparent_25%),radial-gradient(circle_at_70%_80%,rgba(35,95,58,0.18),transparent_20%)]" />

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-10 pt-10 md:px-10 lg:px-14">
          <div className="max-w-[980px]">
            <div className="text-[14px] uppercase tracking-[0.34em] text-[#e6ddcf]/88 md:text-[15px]">
              {t.eyebrow}
            </div>

            <h1 className="mt-3 text-[52px] font-semibold leading-none tracking-[-0.03em] text-white md:text-[64px]">
              {t.title}
            </h1>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <NavChip icon={<Trees size={22} />} label={t.navEntrance} />
            <NavChip icon={<Info size={22} />} label={t.navStory} />
            <NavChip icon={<UserRound size={22} />} label={t.navRoles} />
            <NavChip icon={<CalendarDays size={22} />} label={t.navEvents} />
            <NavChip icon={<HeartPulse size={22} />} label={t.navHealth} />
            <NavChip
              icon={<ShoppingBag size={22} />}
              label={t.navMarket}
              onClick={() =>
                window.open(
                  "https://grownby.com/farms/bronson-family-farm/shop",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            />
            <NavChip icon={<Mic size={22} />} label={t.voiceOn} />
          </div>

          <div className="mt-10 grid gap-8 xl:grid-cols-[1.55fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/10 px-8 py-4 text-[15px] uppercase tracking-[0.28em] text-white/92 backdrop-blur-xl">
                <Leaf size={18} />
                <span>{t.badge}</span>
              </div>

              <h2 className="mt-9 max-w-[900px] text-[80px] font-semibold leading-[0.92] tracking-[-0.05em] text-white md:text-[96px] xl:text-[108px]">
                {t.heroTitle}
              </h2>

              <p className="mt-8 max-w-[1120px] text-[26px] leading-[1.8] text-white/88">
                {typedHero}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-3 rounded-full bg-[#f6f2e8] px-8 py-5 text-[18px] font-semibold text-[#112018] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:bg-white">
                  <Play size={22} />
                  {t.startTour}
                </button>

                <button
                  className={chip}
                  onClick={() =>
                    window.open(
                      "https://grownby.com/farms/bronson-family-farm/shop",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <ShoppingBag size={22} />
                  <span className="text-[18px] font-medium">
                    {t.goMarketplace}
                  </span>
                </button>

                <button className={chip}>
                  <CalendarDays size={22} />
                  <span className="text-[18px] font-medium">
                    {t.openPlanner}
                  </span>
                </button>
              </div>

              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                <div className={smallCard}>
                  <div className="text-[14px] uppercase tracking-[0.28em] text-[#e6ddcf]/82">
                    {t.conditionsLabel}
                  </div>
                  <div className="mt-6 flex items-start gap-4">
                    <div className="pt-1 text-white/85">
                      <Sprout size={24} />
                    </div>
                    <div>
                      <h3 className="text-[26px] font-semibold leading-[1.15] text-white">
                        {t.conditionsTitle}
                      </h3>
                      <p className="mt-4 text-[18px] leading-9 text-white/80">
                        {t.conditionsText}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={smallCard}>
                  <div className="text-[14px] uppercase tracking-[0.28em] text-[#e6ddcf]/82">
                    {t.calendarLabel}
                  </div>
                  <div className="mt-6 flex items-start gap-4">
                    <div className="pt-1 text-white/85">
                      <CalendarDays size={24} />
                    </div>
                    <div>
                      <h3 className="text-[26px] font-semibold leading-[1.15] text-white">
                        {t.calendarTitle}
                      </h3>
                      <p className="mt-4 text-[18px] leading-9 text-white/80">
                        {t.calendarText}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={smallCard}>
                  <div className="text-[14px] uppercase tracking-[0.28em] text-[#e6ddcf]/82">
                    {t.languageLabel}
                  </div>

                  <div className="mt-6 flex items-start gap-4">
                    <div className="pt-1 text-white/85">
                      <Globe size={24} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[26px] font-semibold leading-[1.15] text-white">
                        {LANGUAGES.find((l) => l.key === language)?.label}
                      </h3>

                      <div className="mt-5 flex flex-wrap gap-3">
                        {LANGUAGES.map((lang) => {
                          const active = lang.key === language;
                          return (
                            <button
                              key={lang.key}
                              onClick={() => setLanguage(lang.key)}
                              className={`rounded-full border px-5 py-3 text-[16px] transition ${
                                active
                                  ? "border-white/22 bg-white/14 text-white"
                                  : "border-white/10 bg-[#18362f]/72 text-white/90 hover:bg-[#21463d]/80"
                              }`}
                            >
                              {lang.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={sideCard}>
              <div className="text-[14px] uppercase tracking-[0.3em] text-[#e6ddcf]/78">
                {t.overviewEyebrow}
              </div>

              <h3 className="mt-5 text-[38px] font-semibold tracking-[-0.03em] text-white md:text-[46px]">
                {t.overviewTitle}
              </h3>

              <p className="mt-7 text-[21px] leading-[1.85] text-white/84">
                {t.overviewText}
              </p>

              <div className="mt-10 space-y-5">
                <InfoCard
                  icon={<Trees size={24} />}
                  title={t.card1Title}
                  text={t.card1Text}
                />
                <InfoCard
                  icon={<Sprout size={24} />}
                  title={t.card2Title}
                  text={t.card2Text}
                />
                <InfoCard
                  icon={<Volume2 size={24} />}
                  title={t.card3Title}
                  text={t.card3Text}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
