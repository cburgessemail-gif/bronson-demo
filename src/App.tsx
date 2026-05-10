import React, { useMemo, useState } from "react";

const eventbriteUrl =
  "https://www.eventbrite.com/e/1984126092554?aff=oddtdtcreator";

const grownByUrl = "https://grownby.com/farms/bronson-family-farm/shop";

type Lang = "en" | "es" | "tl" | "it" | "he" | "fr";

const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "tl", label: "Tagalog" },
  { code: "it", label: "Italian" },
  { code: "he", label: "Hebrew" },
  { code: "fr", label: "French" },
];

const copy = {
  en: {
    nav: ["History", "Marketplace", "Youth", "Investment", "Register"],
    brandSub: "Guided Ecosystem Demo",
    heroEyebrow: "Growers Supply Market · May 16, 2026 · By Invitation Only",
    heroTitle: "Food Security Begins Locally.",
    heroBody:
      "Bronson Family Farm is building a place-based food ecosystem rooted in land, legacy, food access, youth workforce, marketplace development, partnership, and investment.",
    begin: "Begin Guided Tour",
    shop: "Shop Farm Store",
    register: "Register",
    back: "Back",
    next: "Next",
    guidedStop: "Guided Tour Stop",
    complete: "Complete",
    current: "Current Stop",
    jump: "Jump To Any Stop",
    historyTitle: "History Includes The Airport.",
    historyBody:
      "Bronson Family Farm is located near the Historic Lansdowne Airport area in Youngstown. The airport is part of the story because this land represents movement, possibility, transportation, enterprise, and overlooked community infrastructure. The farm transforms this place into a living food system where land that once symbolized flight can now also symbolize food security, learning, health, and local resilience.",
    finalTitle: "This Is More Than A Farm.",
    finalBody:
      "Bronson Family Farm is a guided ecosystem for food, wellness, airport history, family legacy, youth workforce, marketplace development, partnership, and investment.",
  },
  es: {
    nav: ["Historia", "Mercado", "Juventud", "Inversión", "Registro"],
    brandSub: "Demostración Guiada del Ecosistema",
    heroEyebrow: "Mercado de Suministros para Cultivadores · 16 de mayo de 2026 · Solo por invitación",
    heroTitle: "La seguridad alimentaria comienza localmente.",
    heroBody:
      "Bronson Family Farm está creando un ecosistema alimentario basado en la tierra, el legado, el acceso a alimentos, la juventud, el mercado, las alianzas y la inversión.",
    begin: "Comenzar Recorrido",
    shop: "Comprar en la Tienda",
    register: "Registrarse",
    back: "Atrás",
    next: "Siguiente",
    guidedStop: "Parada del Recorrido",
    complete: "Completo",
    current: "Parada Actual",
    jump: "Ir A Una Parada",
    historyTitle: "La historia incluye el aeropuerto.",
    historyBody:
      "Bronson Family Farm está ubicada cerca del área histórica del Aeropuerto Lansdowne en Youngstown. El aeropuerto forma parte de la historia porque esta tierra representa movimiento, posibilidad, transporte, empresa e infraestructura comunitaria olvidada. La granja transforma este lugar en un sistema alimentario vivo donde la tierra que antes simbolizaba vuelo ahora también simboliza seguridad alimentaria, aprendizaje, salud y resiliencia local.",
    finalTitle: "Esto es más que una granja.",
    finalBody:
      "Bronson Family Farm es un ecosistema guiado para alimentos, bienestar, historia del aeropuerto, legado familiar, juventud, mercado, alianzas e inversión.",
  },
  tl: {
    nav: ["Kasaysayan", "Pamilihan", "Kabataan", "Pamumuhunan", "Rehistro"],
    brandSub: "Gabay na Demo ng Ecosystem",
    heroEyebrow: "Growers Supply Market · Mayo 16, 2026 · Imbitasyon Lamang",
    heroTitle: "Nagsisimula sa lokal ang seguridad sa pagkain.",
    heroBody:
      "Ang Bronson Family Farm ay bumubuo ng food ecosystem na nakaugat sa lupa, pamana, access sa pagkain, kabataan, pamilihan, pakikipagtulungan, at pamumuhunan.",
    begin: "Simulan ang Gabay",
    shop: "Mamili sa Farm Store",
    register: "Magparehistro",
    back: "Bumalik",
    next: "Susunod",
    guidedStop: "Hinto ng Gabay",
    complete: "Tapos",
    current: "Kasalukuyang Hinto",
    jump: "Pumili ng Hinto",
    historyTitle: "Kasama sa kasaysayan ang airport.",
    historyBody:
      "Ang Bronson Family Farm ay malapit sa makasaysayang Lansdowne Airport area sa Youngstown. Bahagi ang airport ng kuwento dahil ang lupang ito ay sumisimbolo sa galaw, posibilidad, transportasyon, negosyo, at nakaligtaang imprastraktura ng komunidad. Ginagawa ng farm ang lugar na ito bilang buhay na sistema ng pagkain kung saan ang dating simbolo ng paglipad ay nagiging simbolo rin ng seguridad sa pagkain, pagkatuto, kalusugan, at lokal na katatagan.",
    finalTitle: "Higit ito sa isang bukid.",
    finalBody:
      "Ang Bronson Family Farm ay isang gabay na ecosystem para sa pagkain, kalusugan, kasaysayan ng airport, pamana ng pamilya, kabataan, pamilihan, pakikipagtulungan, at pamumuhunan.",
  },
  it: {
    nav: ["Storia", "Mercato", "Giovani", "Investimento", "Registrati"],
    brandSub: "Demo Guidata dell’Ecosistema",
    heroEyebrow: "Growers Supply Market · 16 maggio 2026 · Solo su invito",
    heroTitle: "La sicurezza alimentare comincia localmente.",
    heroBody:
      "Bronson Family Farm sta costruendo un ecosistema alimentare radicato nella terra, nella storia familiare, nell’accesso al cibo, nei giovani, nel mercato, nelle partnership e negli investimenti.",
    begin: "Inizia il Tour",
    shop: "Negozio della Fattoria",
    register: "Registrati",
    back: "Indietro",
    next: "Avanti",
    guidedStop: "Tappa del Tour",
    complete: "Completo",
    current: "Tappa Attuale",
    jump: "Vai a una Tappa",
    historyTitle: "La storia include l’aeroporto.",
    historyBody:
      "Bronson Family Farm si trova vicino all’area storica dell’Aeroporto Lansdowne a Youngstown. L’aeroporto fa parte della storia perché questa terra rappresenta movimento, possibilità, trasporto, impresa e infrastruttura comunitaria dimenticata. La fattoria trasforma questo luogo in un sistema alimentare vivo, dove una terra che un tempo simboleggiava il volo ora simboleggia anche sicurezza alimentare, apprendimento, salute e resilienza locale.",
    finalTitle: "È più di una fattoria.",
    finalBody:
      "Bronson Family Farm è un ecosistema guidato per cibo, benessere, storia dell’aeroporto, eredità familiare, giovani, mercato, partnership e investimento.",
  },
  he: {
    nav: ["היסטוריה", "שוק", "נוער", "השקעה", "הרשמה"],
    brandSub: "הדגמת מערכת מודרכת",
    heroEyebrow: "שוק אספקה למגדלים · 16 במאי 2026 · בהזמנה בלבד",
    heroTitle: "ביטחון תזונתי מתחיל מקומית.",
    heroBody:
      "חוות משפחת ברונסון בונה מערכת מזון מקומית המבוססת על אדמה, מורשת, גישה למזון, נוער, שוק, שותפויות והשקעה.",
    begin: "התחל סיור",
    shop: "חנות החווה",
    register: "הרשמה",
    back: "חזרה",
    next: "הבא",
    guidedStop: "תחנת סיור",
    complete: "הושלם",
    current: "תחנה נוכחית",
    jump: "מעבר לתחנה",
    historyTitle: "ההיסטוריה כוללת את שדה התעופה.",
    historyBody:
      "חוות משפחת ברונסון נמצאת ליד אזור שדה התעופה ההיסטורי Lansdowne ביונגסטאון. שדה התעופה הוא חלק מהסיפור משום שהאדמה הזו מסמלת תנועה, אפשרות, תחבורה, יזמות ותשתית קהילתית שנשכחה. החווה הופכת את המקום למערכת מזון חיה, שבה אדמה שסימלה פעם טיסה מסמלת כיום גם ביטחון תזונתי, למידה, בריאות וחוסן מקומי.",
    finalTitle: "זו יותר מחווה.",
    finalBody:
      "חוות משפחת ברונסון היא מערכת מודרכת למזון, בריאות, היסטוריית שדה התעופה, מורשת משפחתית, נוער, שוק, שותפויות והשקעה.",
  },
  fr: {
    nav: ["Histoire", "Marché", "Jeunesse", "Investissement", "Inscription"],
    brandSub: "Démo Guidée de l’Écosystème",
    heroEyebrow: "Marché des Fournitures pour Producteurs · 16 mai 2026 · Sur invitation seulement",
    heroTitle: "La sécurité alimentaire commence localement.",
    heroBody:
      "Bronson Family Farm construit un écosystème alimentaire enraciné dans la terre, l’héritage, l’accès à la nourriture, la jeunesse, le marché, les partenariats et l’investissement.",
    begin: "Commencer la Visite",
    shop: "Boutique de la Ferme",
    register: "S’inscrire",
    back: "Retour",
    next: "Suivant",
    guidedStop: "Étape de la Visite",
    complete: "Terminé",
    current: "Étape Actuelle",
    jump: "Aller à Une Étape",
    historyTitle: "L’histoire inclut l’aéroport.",
    historyBody:
      "Bronson Family Farm est située près de la zone historique de l’aéroport Lansdowne à Youngstown. L’aéroport fait partie de l’histoire parce que cette terre représente le mouvement, la possibilité, le transport, l’entreprise et une infrastructure communautaire oubliée. La ferme transforme ce lieu en système alimentaire vivant, où une terre qui symbolisait autrefois le vol symbolise maintenant aussi la sécurité alimentaire, l’apprentissage, la santé et la résilience locale.",
    finalTitle: "C’est plus qu’une ferme.",
    finalBody:
      "Bronson Family Farm est un écosystème guidé pour l’alimentation, le bien-être, l’histoire de l’aéroport, l’héritage familial, la jeunesse, le marché, les partenariats et l’investissement.",
  },
};

const stopCopy = {
  en: [
    ["Welcome", "Food Security Begins Locally.", "The farm begins with a simple truth: communities need land, food, knowledge, and opportunity close to home."],
    ["Airport History", "The Airport Is Part Of The Story.", "Near Historic Lansdowne Airport, Bronson Family Farm turns a place associated with movement and possibility into food security infrastructure."],
    ["Guest", "Guests Experience The Vision First.", "Guests enter through story and place before being invited to shop, grow, volunteer, partner, or invest."],
    ["Customer", "Healthy Communities Begin With Healthy Food.", "Customers connect to produce, seedlings, Bubble Babies™, and repeat healthy choices."],
    ["Marketplace", "The Marketplace Converts Interest Into Action.", "Growers Supply Market brings together food, tools, demonstrations, learning, and purchasing power."],
    ["Grower", "Growers Are Entrepreneurs.", "Small growers gain access to knowledge, supplies, seedlings, peer support, and market pathways."],
    ["Youth Workforce", "Outdoor Work Becomes Confidence.", "Youth build responsibility, safety, teamwork, leadership, and future readiness outdoors."],
    ["Partners", "Collaboration Strengthens Communities.", "Partners align health, food, workforce, education, infrastructure, and community resources."],
    ["Value-Added", "Food Can Become Enterprise.", "Prepared foods, herbs, edible flowers, packaging, and creativity become economic opportunity."],
    ["Investment", "Support Builds Capacity.", "Investment expands infrastructure, water, storage, security, workforce, and long-term sustainability."],
    ["Participants", "Who Will Be There — Doing What.", "Participants make the ecosystem visible through produce, art, workforce, tools, education, and demonstrations."],
    ["Register", "Experience The Farm In Person.", "Growers Supply Market is by invitation only and requires Eventbrite registration."],
  ],
  es: [
    ["Bienvenida", "La seguridad alimentaria comienza localmente.", "La granja comienza con una verdad simple: las comunidades necesitan tierra, alimentos, conocimiento y oportunidad cerca de casa."],
    ["Historia del Aeropuerto", "El aeropuerto es parte de la historia.", "Cerca del histórico Aeropuerto Lansdowne, Bronson Family Farm transforma un lugar de movimiento y posibilidad en infraestructura alimentaria."],
    ["Invitado", "Los invitados primero experimentan la visión.", "Los invitados entran por la historia y el lugar antes de comprar, cultivar, voluntariar, asociarse o invertir."],
    ["Cliente", "Las comunidades saludables comienzan con comida saludable.", "Los clientes se conectan con productos frescos, plántulas, Bubble Babies™ y decisiones saludables repetidas."],
    ["Mercado", "El mercado convierte el interés en acción.", "Growers Supply Market une alimentos, herramientas, demostraciones, aprendizaje y poder de compra."],
    ["Cultivador", "Los cultivadores son emprendedores.", "Los pequeños cultivadores acceden a conocimiento, suministros, plántulas, apoyo y mercados."],
    ["Juventud", "El trabajo al aire libre crea confianza.", "Los jóvenes desarrollan responsabilidad, seguridad, trabajo en equipo, liderazgo y preparación futura."],
    ["Socios", "La colaboración fortalece comunidades.", "Los socios alinean salud, alimentos, empleo, educación, infraestructura y recursos comunitarios."],
    ["Valor Agregado", "La comida puede convertirse en empresa.", "Alimentos preparados, hierbas, flores comestibles, empaque y creatividad se convierten en oportunidad económica."],
    ["Inversión", "El apoyo construye capacidad.", "La inversión expande infraestructura, agua, almacenamiento, seguridad, fuerza laboral y sostenibilidad."],
    ["Participantes", "Quién estará allí — haciendo qué.", "Los participantes muestran el ecosistema con productos, arte, empleo, herramientas, educación y demostraciones."],
    ["Registro", "Experimente la granja en persona.", "Growers Supply Market es solo por invitación y requiere registro por Eventbrite."],
  ],
  tl: [
    ["Maligayang Pagdating", "Nagsisimula sa lokal ang seguridad sa pagkain.", "Nagsisimula ang farm sa simpleng katotohanan: kailangan ng komunidad ang lupa, pagkain, kaalaman, at oportunidad malapit sa tahanan."],
    ["Kasaysayan ng Airport", "Bahagi ng kuwento ang airport.", "Malapit sa Historic Lansdowne Airport, ginagawa ng Bronson Family Farm ang lugar ng galaw at posibilidad bilang imprastraktura ng pagkain."],
    ["Bisita", "Unang nararanasan ng bisita ang bisyon.", "Pumapasok ang bisita sa kuwento at lugar bago mamili, magtanim, magboluntaryo, makipag-partner, o mamuhunan."],
    ["Mamimili", "Nagsisimula sa masustansyang pagkain ang malusog na komunidad.", "Kumokonekta ang mamimili sa produce, seedlings, Bubble Babies™, at malusog na pagpili."],
    ["Pamilihan", "Ginagawang aksyon ng pamilihan ang interes.", "Pinagsasama ng Growers Supply Market ang pagkain, kagamitan, demo, pagkatuto, at pagbili."],
    ["Grower", "Ang growers ay entrepreneurs.", "Nakakakuha ang maliliit na growers ng kaalaman, supplies, seedlings, suporta, at market pathways."],
    ["Kabataan", "Nagiging kumpiyansa ang outdoor work.", "Natututo ang kabataan ng responsibilidad, kaligtasan, teamwork, leadership, at readiness."],
    ["Partners", "Pinapalakas ng collaboration ang komunidad.", "Pinag-uugnay ng partners ang health, pagkain, workforce, edukasyon, imprastraktura, at resources."],
    ["Value-Added", "Ang pagkain ay maaaring maging negosyo.", "Prepared foods, herbs, edible flowers, packaging, at creativity ay nagiging oportunidad."],
    ["Pamumuhunan", "Ang suporta ay bumubuo ng kapasidad.", "Pinapalawak ng investment ang imprastraktura, tubig, storage, security, workforce, at sustainability."],
    ["Participants", "Sino ang naroon — at ano ang gagawin.", "Ipinapakita ng participants ang ecosystem sa produce, art, workforce, tools, education, at demos."],
    ["Rehistro", "Maranasan ang farm nang personal.", "Ang Growers Supply Market ay imbitasyon lamang at kailangan ang Eventbrite registration."],
  ],
  it: [
    ["Benvenuto", "La sicurezza alimentare comincia localmente.", "La fattoria inizia con una verità semplice: le comunità hanno bisogno di terra, cibo, conoscenza e opportunità vicino a casa."],
    ["Storia dell’Aeroporto", "L’aeroporto fa parte della storia.", "Vicino allo storico Aeroporto Lansdowne, Bronson Family Farm trasforma un luogo di movimento e possibilità in infrastruttura alimentare."],
    ["Ospite", "Gli ospiti vivono prima la visione.", "Gli ospiti entrano attraverso storia e luogo prima di comprare, coltivare, fare volontariato, collaborare o investire."],
    ["Cliente", "Le comunità sane iniziano con cibo sano.", "I clienti si collegano a prodotti freschi, piantine, Bubble Babies™ e scelte sane ripetute."],
    ["Mercato", "Il mercato trasforma interesse in azione.", "Growers Supply Market unisce cibo, strumenti, dimostrazioni, apprendimento e potere d’acquisto."],
    ["Coltivatore", "I coltivatori sono imprenditori.", "I piccoli coltivatori accedono a conoscenza, forniture, piantine, supporto e mercati."],
    ["Giovani", "Il lavoro all’aperto crea fiducia.", "I giovani sviluppano responsabilità, sicurezza, lavoro di squadra, leadership e preparazione futura."],
    ["Partner", "La collaborazione rafforza le comunità.", "I partner collegano salute, cibo, lavoro, educazione, infrastruttura e risorse comunitarie."],
    ["Valore Aggiunto", "Il cibo può diventare impresa.", "Cibi preparati, erbe, fiori edibili, packaging e creatività diventano opportunità economica."],
    ["Investimento", "Il supporto crea capacità.", "L’investimento espande infrastruttura, acqua, deposito, sicurezza, forza lavoro e sostenibilità."],
    ["Partecipanti", "Chi sarà presente — e cosa farà.", "I partecipanti rendono visibile l’ecosistema con prodotti, arte, lavoro, strumenti, educazione e demo."],
    ["Registrazione", "Vivi la fattoria di persona.", "Growers Supply Market è solo su invito e richiede registrazione Eventbrite."],
  ],
  he: [
    ["ברוכים הבאים", "ביטחון תזונתי מתחיל מקומית.", "החווה מתחילה באמת פשוטה: קהילות צריכות אדמה, מזון, ידע והזדמנות קרוב לבית."],
    ["היסטוריית שדה התעופה", "שדה התעופה הוא חלק מהסיפור.", "ליד שדה התעופה ההיסטורי Lansdowne, החווה הופכת מקום של תנועה ואפשרות לתשתית מזון."],
    ["אורח", "האורחים חווים קודם את החזון.", "האורחים נכנסים דרך סיפור ומקום לפני קנייה, גידול, התנדבות, שותפות או השקעה."],
    ["לקוח", "קהילות בריאות מתחילות במזון בריא.", "לקוחות מתחברים לתוצרת, שתילים, Bubble Babies™ ובחירות בריאות חוזרות."],
    ["שוק", "השוק הופך עניין לפעולה.", "Growers Supply Market מחבר מזון, כלים, הדגמות, למידה וכוח קנייה."],
    ["מגדל", "מגדלים הם יזמים.", "מגדלים קטנים מקבלים ידע, אספקה, שתילים, תמיכה ונתיבי שוק."],
    ["נוער", "עבודה בחוץ בונה ביטחון.", "נוער מפתח אחריות, בטיחות, עבודת צוות, מנהיגות ומוכנות לעתיד."],
    ["שותפים", "שיתוף פעולה מחזק קהילות.", "שותפים מחברים בריאות, מזון, עבודה, חינוך, תשתית ומשאבים קהילתיים."],
    ["ערך מוסף", "מזון יכול להפוך לעסק.", "מזון מוכן, עשבים, פרחים אכילים, אריזה ויצירתיות הופכים להזדמנות."],
    ["השקעה", "תמיכה בונה יכולת.", "השקעה מרחיבה תשתית, מים, אחסון, אבטחה, כוח עבודה וקיימות."],
    ["משתתפים", "מי יהיה שם — ומה יעשה.", "המשתתפים מציגים את המערכת דרך תוצרת, אמנות, עבודה, כלים, חינוך והדגמות."],
    ["הרשמה", "חוו את החווה באופן אישי.", "Growers Supply Market הוא בהזמנה בלבד ודורש הרשמה ב-Eventbrite."],
  ],
  fr: [
    ["Bienvenue", "La sécurité alimentaire commence localement.", "La ferme commence avec une vérité simple : les communautés ont besoin de terre, de nourriture, de connaissances et d’opportunités près de chez elles."],
    ["Histoire de l’Aéroport", "L’aéroport fait partie de l’histoire.", "Près de l’aéroport historique Lansdowne, Bronson Family Farm transforme un lieu de mouvement et de possibilité en infrastructure alimentaire."],
    ["Invité", "Les invités découvrent d’abord la vision.", "Les invités entrent par l’histoire et le lieu avant d’acheter, cultiver, faire du bénévolat, collaborer ou investir."],
    ["Client", "Les communautés en santé commencent par une alimentation saine.", "Les clients accèdent aux produits frais, plants, Bubble Babies™ et choix sains répétés."],
    ["Marché", "Le marché transforme l’intérêt en action.", "Growers Supply Market réunit aliments, outils, démonstrations, apprentissage et pouvoir d’achat."],
    ["Producteur", "Les producteurs sont entrepreneurs.", "Les petits producteurs accèdent aux connaissances, fournitures, plants, soutien et marchés."],
    ["Jeunesse", "Le travail extérieur crée la confiance.", "Les jeunes développent responsabilité, sécurité, travail d’équipe, leadership et préparation future."],
    ["Partenaires", "La collaboration renforce les communautés.", "Les partenaires relient santé, alimentation, emploi, éducation, infrastructure et ressources communautaires."],
    ["Valeur Ajoutée", "La nourriture peut devenir entreprise.", "Aliments préparés, herbes, fleurs comestibles, emballage et créativité deviennent opportunité économique."],
    ["Investissement", "Le soutien crée la capacité.", "L’investissement développe infrastructure, eau, stockage, sécurité, main-d’œuvre et durabilité."],
    ["Participants", "Qui sera là — et fera quoi.", "Les participants rendent l’écosystème visible par les produits, l’art, le travail, les outils, l’éducation et les démonstrations."],
    ["Inscription", "Vivez la ferme en personne.", "Growers Supply Market est sur invitation seulement et nécessite une inscription Eventbrite."],
  ],
};

const images = [
  "/GrowArea.jpg",
  "/GrowArea2.jpg",
  "/SAM_0220.JPG",
  "/SAM_0249.JPG",
  "/SAM_0255.JPG",
  "/SAM_0281.JPG",
  "/Samaeera2.jpg",
  "/SAM_0301.JPG",
  "/culniary_edibleflowers.jpeg",
  "/SAM_0313.JPG",
  "/SAM_0299.JPG",
  "/SAM_0308.JPG",
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const [language, setLanguage] = useState<Lang>("en");
  const [activeIndex, setActiveIndex] = useState(0);

  const c = copy[language];
  const stops = stopCopy[language].map((s, i) => ({
    label: s[0],
    title: s[1],
    body: s[2],
    image: images[i],
  }));

  const active = stops[activeIndex];
  const progress = useMemo(
    () => Math.round(((activeIndex + 1) / stops.length) * 100),
    [activeIndex, stops.length]
  );

  function goToStop(index: number) {
    setActiveIndex(index);
    setTimeout(() => scrollTo("tour"), 30);
  }

  const nextIndex = (activeIndex + 1) % stops.length;
  const backIndex = (activeIndex - 1 + stops.length) % stops.length;

  return (
    <>
      <style>{css}</style>

      <main dir={language === "he" ? "rtl" : "ltr"}>
        <nav className="nav">
          <button className="brand" onClick={() => goToStop(0)}>
            <strong>Bronson Family Farm</strong>
            <span>{c.brandSub}</span>
          </button>

          <div className="navLinks">
            <button onClick={() => goToStop(1)}>{c.nav[0]}</button>
            <button onClick={() => goToStop(4)}>{c.nav[1]}</button>
            <button onClick={() => goToStop(6)}>{c.nav[2]}</button>
            <button onClick={() => goToStop(9)}>{c.nav[3]}</button>
            <a href={eventbriteUrl} target="_blank" rel="noreferrer">{c.nav[4]}</a>
          </div>
        </nav>

        <section className="hero">
          <img src="/GrowArea.jpg" />
          <div className="shade" />

          <div className="heroText">
            <p className="eyebrow">{c.heroEyebrow}</p>
            <h1>{c.heroTitle}</h1>
            <p>{c.heroBody}</p>

            <div className="languagePanel">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={language === l.code ? "lang activeLang" : "lang"}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <div className="buttons">
              <button onClick={() => scrollTo("tour")} className="goldBtn">{c.begin}</button>
              <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="glassBtn">{c.register}</a>
              <a href={grownByUrl} target="_blank" rel="noreferrer" className="glassBtn">{c.shop}</a>
            </div>
          </div>
        </section>

        <section id="tour" className="section">
          <p className="kicker">
            {c.guidedStop} {activeIndex + 1} / {stops.length}
          </p>

          <h2>{active.label}: {active.title}</h2>

          <div className="progressRow">
            <span>{progress}% {c.complete}</span>
            <span>{c.current}: {active.label}</span>
          </div>

          <div className="bar">
            <div style={{ width: `${progress}%` }} />
          </div>

          <div className="tourGrid">
            <div className="imageFrame">
              <img src={active.image} />
            </div>

            <div className="storyCard">
              <p className="kicker">{active.label}</p>
              <h3>{active.title}</h3>
              <p>{active.body}</p>

              <div className="buttons">
                <button onClick={() => goToStop(backIndex)} className="outlineBtn">
                  {c.back}: {stops[backIndex].label}
                </button>

                {activeIndex === 3 ? (
                  <a href={grownByUrl} target="_blank" rel="noreferrer" className="darkBtn">
                    {c.shop}
                  </a>
                ) : activeIndex === 11 ? (
                  <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="darkBtn">
                    {c.register}
                  </a>
                ) : (
                  <button onClick={() => goToStop(nextIndex)} className="darkBtn">
                    {c.next}: {stops[nextIndex].label}
                  </button>
                )}

                <button onClick={() => goToStop(nextIndex)} className="outlineBtn">
                  {c.next}
                </button>
              </div>
            </div>
          </div>

          <p className="jumpTitle">{c.jump}</p>
          <div className="jumpGrid">
            {stops.map((s, i) => (
              <button
                key={i}
                onClick={() => goToStop(i)}
                className={i === activeIndex ? "jump activeJump" : "jump"}
              >
                <span>{i + 1}</span>
                {s.label}
              </button>
            ))}
          </div>
        </section>

        <section className="historyBlock">
          <div>
            <p className="kicker light">{stops[1].label}</p>
            <h2>{c.historyTitle}</h2>
            <p>{c.historyBody}</p>
            <button onClick={() => goToStop(1)} className="goldBtn">
              {c.nav[0]}
            </button>
          </div>
          <img src="/GrowArea2.jpg" />
        </section>

        <section className="final">
          <p className="kicker gold">Bronson Family Farm</p>
          <h2>{c.finalTitle}</h2>
          <p>{c.finalBody}</p>

          <div className="buttons centered">
            <button onClick={() => goToStop(0)} className="goldBtn">
              {c.begin}
            </button>
            <a href={eventbriteUrl} target="_blank" rel="noreferrer" className="goldBtn">
              {c.register}
            </a>
            <a href={grownByUrl} target="_blank" rel="noreferrer" className="glassBtn">
              {c.shop}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

const css = `
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:#F5F1E6;color:#1C1C1C;font-family:Inter,Arial,sans-serif}
button,a{font-family:inherit}
button{cursor:pointer}
a{text-decoration:none}
.nav{position:sticky;top:0;z-index:50;display:flex;justify-content:space-between;align-items:center;padding:16px 6vw;background:rgba(245,241,230,.95);backdrop-filter:blur(16px);border-bottom:1px solid #d9cfbb}
.brand{border:0;background:transparent;text-align:left}
.brand strong{display:block;color:#173C2D;font-size:22px;font-weight:950}
.brand span{display:block;font-size:12px;text-transform:uppercase;letter-spacing:.18em;color:#7b705f;font-weight:800}
.navLinks{display:flex;gap:10px;flex-wrap:wrap}
.navLinks button,.navLinks a{border:0;padding:10px 16px;border-radius:99px;background:white;color:#173C2D;font-weight:900;box-shadow:0 6px 18px rgba(0,0,0,.06)}
.hero{position:relative;min-height:94vh;display:flex;align-items:center;overflow:hidden}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.84),rgba(0,0,0,.5),rgba(0,0,0,.18))}
.heroText{position:relative;z-index:2;max-width:1150px;padding:90px 6vw;color:white}
.eyebrow,.kicker{text-transform:uppercase;letter-spacing:.25em;font-size:13px;font-weight:950;color:#7b705f}
.eyebrow{display:inline-block;color:#E7D7A3;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.28);border-radius:99px;padding:12px 18px}
h1{font-size:clamp(54px,8vw,106px);line-height:.92;margin:28px 0;font-weight:950;letter-spacing:-4px}
.heroText p:not(.eyebrow){font-size:25px;line-height:1.55;max-width:900px}
.languagePanel{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}
.lang{border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);color:white;border-radius:99px;padding:10px 16px;font-weight:900}
.activeLang{background:#E7D7A3;color:#173C2D}
.buttons{display:flex;gap:14px;flex-wrap:wrap;margin-top:32px}
.centered{justify-content:center}
.goldBtn,.glassBtn,.darkBtn,.outlineBtn{display:inline-block;border-radius:99px;padding:16px 24px;font-weight:950;font-size:16px;border:0}
.goldBtn{background:#E7D7A3;color:#173C2D}
.glassBtn{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.35);color:white}
.darkBtn{background:#173C2D;color:white}
.outlineBtn{background:#F5F1E6;color:#173C2D;border:1px solid #d9cfbb}
.section{max-width:1320px;margin:auto;padding:88px 6vw}
h2{font-size:clamp(42px,6vw,72px);line-height:1;margin:18px 0;color:#173C2D;font-weight:950;letter-spacing:-3px}
.progressRow{display:flex;justify-content:space-between;margin-top:35px;font-weight:950;color:#173C2D}
.bar{height:13px;border-radius:99px;overflow:hidden;background:#ddd2bd;margin:10px 0 35px}
.bar div{height:100%;background:#173C2D}
.tourGrid{display:grid;grid-template-columns:1.05fr .95fr;gap:38px;align-items:stretch}
.imageFrame{height:640px;border-radius:42px;overflow:hidden;box-shadow:0 28px 60px rgba(0,0,0,.18)}
.imageFrame img,.historyBlock img{width:100%;height:100%;object-fit:cover}
.storyCard{background:white;border-radius:42px;padding:50px;box-shadow:0 28px 60px rgba(0,0,0,.12)}
h3{font-size:clamp(34px,4vw,54px);line-height:1.05;margin:18px 0;color:#173C2D;font-weight:950;letter-spacing:-2px}
.storyCard p{font-size:22px;line-height:1.6;color:#555}
.jumpTitle{margin-top:36px;font-weight:950;color:#173C2D}
.jumpGrid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-top:12px}
.jump{border:0;border-radius:18px;background:white;color:#173C2D;padding:14px;font-weight:950;box-shadow:0 12px 25px rgba(0,0,0,.07)}
.jump span{display:block;color:#7b705f;font-size:12px}
.activeJump{background:#173C2D;color:white}
.historyBlock{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center;background:#173C2D;color:white;padding:90px 6vw}
.historyBlock h2{color:white}
.historyBlock p{font-size:23px;line-height:1.65;color:rgba(255,255,255,.86)}
.historyBlock img{height:560px;border-radius:42px;box-shadow:0 28px 60px rgba(0,0,0,.25)}
.light,.gold{color:#E7D7A3}
.final{text-align:center;padding:110px 6vw;background:linear-gradient(135deg,#10281d,#173C2D,#2a241b);color:white}
.final h2{color:white}
.final p{max-width:920px;margin:30px auto;font-size:25px;line-height:1.6;color:rgba(255,255,255,.86)}
@media(max-width:900px){
.nav{align-items:flex-start;gap:12px;flex-direction:column}
.navLinks{gap:8px}
.navLinks button,.navLinks a{font-size:13px;padding:9px 12px}
.tourGrid,.historyBlock{grid-template-columns:1fr}
.jumpGrid{grid-template-columns:repeat(2,1fr)}
.imageFrame,.historyBlock img{height:420px}
h1{letter-spacing:-2px}
.heroText p:not(.eyebrow),.storyCard p,.historyBlock p{font-size:20px}
.storyCard{padding:32px}
}
`;
