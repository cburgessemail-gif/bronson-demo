import { useEffect, useMemo, useState } from "react";

/*
  FINAL UPDATE RULE:
  Layout/design preserved from App (13).tsx.
  Only content, pathway depth, labels, and image assignments are improved.
*/

type LangKey = "English" | "Español" | "Tagalog" | "Italiano" | "עברית" | "Français";

type MultiText = Record<LangKey, string>;

type Slide = {
  id: number;
  nav: string;
  image: string;
  containImage?: boolean;
  title: MultiText;
  subtitle: MultiText;
  startsAs: MultiText;
  experiences: MultiText[];
  growsInto: MultiText[];
  ecosystem: MultiText;
  nextStep: MultiText;
  buttonLabel: MultiText;
  targetId: number;
};

const LANGS: LangKey[] = ["English", "Español", "Tagalog", "Italiano", "עברית", "Français"];

const tx = (
  English: string,
  Español: string,
  Tagalog: string,
  Italiano: string,
  עברית: string,
  Français: string
): MultiText => ({ English, Español, Tagalog, Italiano, עברית, Français });

export default function App() {
  const [lang, setLang] = useState<LangKey>("English");
  const [current, setCurrent] = useState(0);
  const [guidedTour, setGuidedTour] = useState(false);

  const t = (value: MultiText) => value[lang] || value.English;

  const labels = {
    startsAs: tx("Starts As", "Comienza Como", "Nagsisimula Bilang", "Inizia Come", "מתחיל כ", "Commence Comme"),
    experiences: tx("Experiences", "Experimenta", "Nararanasan", "Sperimenta", "חווה", "Expériences"),
    growsInto: tx("Grows Into", "Se Convierte En", "Lumalaki Bilang", "Diventa", "מתפתח ל", "Devient"),
    connects: tx("Connects Back To", "Conecta Con", "Kumokonekta Sa", "Si Ricollega A", "מתחבר ל", "Se Relie À"),
    nextStep: tx("Next Step", "Próximo Paso", "Susunod na Hakbang", "Prossimo Passo", "הצעד הבא", "Prochaine Étape"),
    start: tx("Start", "Inicio", "Simula", "Inizio", "התחלה", "Début"),
    back: tx("Back", "Atrás", "Bumalik", "Indietro", "חזרה", "Retour"),
    next: tx("Next", "Siguiente", "Susunod", "Avanti", "הבא", "Suivant"),
    beginTour: tx("Begin Guided Tour", "Comenzar Recorrido", "Simulan ang Guided Tour", "Inizia Visita Guidata", "התחל סיור מודרך", "Commencer la visite"),
    pauseTour: tx("Pause Tour", "Pausar Recorrido", "I-pause ang Tour", "Pausa Visita", "עצור סיור", "Pause"),
    feedback: tx("Share Feedback", "Compartir Comentarios", "Magbigay ng Feedback", "Condividi Feedback", "שלח משוב", "Partager un avis"),
  };

  const slides: Slide[] = useMemo(
    () => [
      {
        id: 1,
        nav: "Bronson Family Farm",
        image: "/ConnectFoodEcosystem_withimages.jpeg",
        containImage: true,
        title: tx("Enter the Farm", "Entrar a la Granja", "Pumasok sa Bukid", "Entra nella Fattoria", "כניסה לחווה", "Entrer dans la Ferme"),
        subtitle: tx("The ecosystem begins at the Historic Lansdowne Airport in Youngstown.", "El ecosistema comienza en el histórico aeropuerto Lansdowne en Youngstown.", "Nagsisimula ang ecosystem sa Historic Lansdowne Airport sa Youngstown.", "L’ecosistema inizia allo storico aeroporto Lansdowne a Youngstown.", "המערכת מתחילה בשדה התעופה ההיסטורי לנסדאון ביונגסטאון.", "L’écosystème commence à l’aéroport historique Lansdowne à Youngstown."),
        startsAs: tx("A visitor entering a connected farm experience.", "Un visitante entrando a una experiencia agrícola conectada.", "Bisitang pumapasok sa connected farm experience.", "Un visitatore entra in un’esperienza agricola connessa.", "מבקר הנכנס לחוויית חווה מחוברת.", "Un visiteur entrant dans une expérience agricole connectée."),
        experiences: [
          tx("The farm story, land, and purpose", "La historia, tierra y propósito", "Story, lupa, at purpose", "Storia, terra e scopo", "הסיפור, הקרקע והמטרה", "L’histoire, la terre et le but"),
          tx("The connected food ecosystem", "El ecosistema alimentario conectado", "Connected food ecosystem", "L’ecosistema alimentare connesso", "מערכת המזון המחוברת", "L’écosystème alimentaire connecté"),
          tx("A choice of pathways", "Una selección de caminos", "Pagpili ng pathways", "Una scelta di percorsi", "בחירת מסלולים", "Un choix de parcours"),
        ],
        growsInto: [
          tx("A participant with a clear next step", "Un participante con un próximo paso claro", "Participant na may malinaw na next step", "Un partecipante con un passo chiaro", "משתתף עם צעד הבא ברור", "Un participant avec une prochaine étape claire"),
          tx("A supporter, customer, grower, partner, or investor", "Un apoyo, cliente, agricultor, socio o inversionista", "Supporter, customer, grower, partner, or investor", "Sostenitore, cliente, coltivatore, partner o investitore", "תומך, לקוח, מגדל, שותף או משקיע", "Soutien, client, producteur, partenaire ou investisseur"),
        ],
        ecosystem: tx("Every person enters from a different need, but each pathway strengthens the larger food system.", "Cada persona entra desde una necesidad distinta, pero cada camino fortalece el sistema alimentario mayor.", "Bawat tao ay pumapasok mula sa ibang need, pero bawat pathway strengthens the larger food system.", "Ogni persona entra da un bisogno diverso, ma ogni percorso rafforza il sistema alimentare.", "כל אדם נכנס מצורך אחר, אך כל מסלול מחזק את מערכת המזון הרחבה.", "Chaque personne entre par un besoin différent, mais chaque parcours renforce le système alimentaire."),
        nextStep: tx("Begin the guided tour or select the pathway that matches your role.", "Comience el recorrido o seleccione el camino que coincide con su función.", "Simulan ang tour o pumili ng pathway na tumutugma sa role mo.", "Inizia la visita o scegli il percorso adatto al tuo ruolo.", "התחל את הסיור או בחר את המסלול המתאים לתפקידך.", "Commencez la visite ou choisissez le parcours qui correspond à votre rôle."),
        buttonLabel: tx("See the Ecosystem", "Ver el Ecosistema", "Tingnan ang Ecosystem", "Vedere l’Ecosistema", "לראות את המערכת", "Voir l’Écosystème"),
        targetId: 2,
      },

      {
        id: 2,
        nav: "Ecosystem",
        image: "/ConnectFoodEcosystem_withimages.jpeg",
        containImage: true,
        title: tx("Connected Food Ecosystem", "Ecosistema Alimentario Conectado", "Connected Food Ecosystem", "Ecosistema Alimentare Connesso", "מערכת מזון מחוברת", "Écosystème Alimentaire Connecté"),
        subtitle: tx("A living network where each role strengthens the whole.", "Una red viva donde cada función fortalece el conjunto.", "Buhay na network kung saan bawat role ay mahalaga.", "Una rete viva dove ogni ruolo rafforza il tutto.", "מערכת חיה שבה כל תפקיד מחזק את הכלל.", "Un réseau vivant où chaque rôle renforce l’ensemble."),
        startsAs: tx("Separate needs: food, learning, work, market access, health, and community connection.", "Necesidades separadas: alimentos, aprendizaje, trabajo, mercado, salud y conexión comunitaria.", "Hiwa-hiwalay na needs: food, learning, work, market, health, and community.", "Bisogni separati: cibo, apprendimento, lavoro, mercato, salute e comunità.", "צרכים נפרדים: מזון, למידה, עבודה, שוק, בריאות וקהילה.", "Besoins séparés : nourriture, apprentissage, travail, marché, santé et communauté."),
        experiences: [
          tx("Connect people to purpose", "Conectar personas con propósito", "Connect people to purpose", "Connettere persone allo scopo", "לחבר אנשים למטרה", "Relier les personnes au but"),
          tx("Move resources through the community", "Mover recursos por la comunidad", "Move resources through the community", "Faire circolare risorse nella comunità", "להעביר משאבים בקהילה", "Faire circuler les ressources"),
          tx("Build opportunity around food", "Crear oportunidades alrededor de los alimentos", "Build opportunity around food", "Creare opportunità intorno al cibo", "לבנות הזדמנות סביב מזון", "Créer des opportunités autour de la nourriture"),
        ],
        growsInto: [
          tx("Local food infrastructure", "Infraestructura alimentaria local", "Local food infrastructure", "Infrastruttura alimentare locale", "תשתית מזון מקומית", "Infrastructure alimentaire locale"),
          tx("A community-powered system", "Un sistema impulsado por la comunidad", "Community-powered system", "Sistema sostenuto dalla comunità", "מערכת שמונעת על ידי קהילה", "Système porté par la communauté"),
        ],
        ecosystem: tx("The ecosystem turns individual participation into shared community benefit.", "El ecosistema convierte la participación individual en beneficio comunitario compartido.", "Ginagawa ng ecosystem ang participation bilang shared community benefit.", "L’ecosistema trasforma la partecipazione in beneficio comune.", "המערכת הופכת השתתפות אישית לתועלת קהילתית.", "L’écosystème transforme la participation en bénéfice partagé."),
        nextStep: tx("Decide where you connect: guest, customer, grower, youth, partner, marketplace, or investor.", "Decida dónde se conecta: visitante, cliente, agricultor, joven, socio, mercado o inversionista.", "Piliin kung saan ka konektado: guest, customer, grower, youth, partner, marketplace, or investor.", "Decidi dove connetterti: ospite, cliente, coltivatore, giovane, partner, mercato o investitore.", "בחר היכן להתחבר: אורח, לקוח, מגדל, נוער, שותף, שוק או משקיע.", "Décidez où vous vous connectez : invité, client, producteur, jeune, partenaire, marché ou investisseur."),
        buttonLabel: tx("Explore the Farm", "Explorar la Granja", "Tuklasin ang Bukid", "Esplora la Fattoria", "סיור בחווה", "Explorer la Ferme"),
        targetId: 3,
      },

      {
        id: 3,
        nav: "Explore the Farm",
        image: "/GrowArea.jpg",
        title: tx("Explore the Farm", "Explorar la Granja", "Tuklasin ang Bukid", "Esplora la Fattoria", "סיור בחווה", "Explorer la Ferme"),
        subtitle: tx("Agriculture rooted in place, history, land use, and community purpose.", "Agricultura basada en lugar, historia, uso de la tierra y propósito comunitario.", "Pagsasaka na nakaugat sa lugar, history, land use, at community purpose.", "Agricoltura radicata nel luogo, nella storia e nello scopo comunitario.", "חקלאות המחוברת למקום, היסטוריה, שימוש בקרקע ומטרה קהילתית.", "Agriculture enracinée dans le lieu, l’histoire et le but communautaire."),
        startsAs: tx("Historic land with untapped food, learning, and agritourism potential.", "Tierra histórica con potencial para alimentos, aprendizaje y agroturismo.", "Historic land na may potential para sa food, learning, and agritourism.", "Terra storica con potenziale alimentare, educativo e agrituristico.", "קרקע היסטורית עם פוטנציאל למזון, למידה ותיירות חקלאית.", "Terre historique avec potentiel alimentaire, éducatif et agritouristique."),
        experiences: [
          tx("Enter the Historic Lansdowne Airport site", "Entrar al sitio histórico del aeropuerto Lansdowne", "Pumasok sa Historic Lansdowne Airport site", "Entrare nel sito storico dell’aeroporto Lansdowne", "להיכנס לאתר שדה התעופה ההיסטורי לנסדאון", "Entrer sur le site historique de l’aéroport Lansdowne"),
          tx("See outdoor growing and land transformation", "Ver cultivo exterior y transformación de la tierra", "Makita ang outdoor growing at land transformation", "Vedere coltivazione esterna e trasformazione del terreno", "לראות גידול חוץ ושינוי הקרקע", "Voir la culture extérieure et la transformation du terrain"),
          tx("Imagine water, solar, storage, youth work, and visitor experiences", "Imaginar agua, solar, almacenamiento, trabajo juvenil y experiencias", "Imagine water, solar, storage, youth work, and visitor experiences", "Immaginare acqua, solare, deposito, lavoro giovanile ed esperienze", "לדמיין מים, סולארי, אחסון, עבודת נוער וחוויות מבקרים", "Imaginer eau, solaire, stockage, travail jeunesse et expériences"),
        ],
        growsInto: [
          tx("A food and learning destination", "Un destino de alimentos y aprendizaje", "Food and learning destination", "Una destinazione di cibo e apprendimento", "יעד מזון ולמידה", "Destination alimentaire et éducative"),
          tx("A visible community asset", "Un recurso comunitario visible", "Visible community asset", "Un bene comunitario visibile", "נכס קהילתי גלוי", "Un atout communautaire visible"),
        ],
        ecosystem: tx("The place becomes the physical home for growing, teaching, gathering, distributing, and building a regional food model.", "El lugar se convierte en hogar físico para cultivar, enseñar, reunir, distribuir y construir un modelo alimentario regional.", "Ang lugar ang nagiging home for growing, teaching, gathering, distribution, and regional food model.", "Il luogo diventa casa fisica per coltivare, insegnare, riunire, distribuire e costruire un modello alimentare regionale.", "המקום הופך לבית פיזי לגידול, הוראה, מפגש, הפצה ובניית מודל מזון אזורי.", "Le lieu devient la base pour cultiver, enseigner, réunir, distribuer et bâtir un modèle alimentaire régional."),
        nextStep: tx("Experience the land as a destination and decide how you want to participate.", "Experimente la tierra como destino y decida cómo quiere participar.", "Maranasan ang land bilang destination at piliin kung paano makikilahok.", "Vivi la terra come destinazione e decidi come partecipare.", "לחוות את הקרקע כיעד ולהחליט כיצד להשתתף.", "Découvrir la terre comme destination et choisir comment participer."),
        buttonLabel: tx("Go to Guest Journey", "Ir al Invitado", "Pumunta sa Guest", "Vai all’Ospite", "לעבור לאורח", "Aller au parcours invité"),
        targetId: 4,
      },

      {
        id: 4,
        nav: "Guest",
        image: "/SAM_0220.JPG",
        title: tx("Guest Journey", "Recorrido del Invitado", "Guest Journey", "Percorso Ospite", "מסלול אורח", "Parcours Invité"),
        subtitle: tx("Guests experience the story, land, food, people, and purpose.", "Los invitados viven la historia, la tierra, los alimentos, las personas y el propósito.", "Guests experience story, land, food, people, and purpose.", "Gli ospiti vivono storia, terra, cibo, persone e scopo.", "האורחים חווים סיפור, קרקע, מזון, אנשים ומטרה.", "Les invités découvrent histoire, terre, nourriture, personnes et but."),
        startsAs: tx("A curious visitor who wants to understand what Bronson Family Farm is becoming.", "Un visitante curioso que quiere entender en qué se está convirtiendo Bronson Family Farm.", "Curious visitor who wants to understand what Bronson Family Farm is becoming.", "Un visitatore curioso che vuole capire cosa sta diventando Bronson Family Farm.", "מבקר סקרן שרוצה להבין למה Bronson Family Farm מתפתחת.", "Un visiteur curieux qui veut comprendre ce que devient Bronson Family Farm."),
        experiences: [
          tx("Arrives and feels welcomed", "Llega y se siente bienvenido", "Arrives and feels welcomed", "Arriva e si sente accolto", "מגיע ומרגיש מוזמן", "Arrive et se sent accueilli"),
          tx("Learns the farm story and ecosystem model", "Aprende la historia de la granja y el modelo del ecosistema", "Learns the farm story and ecosystem model", "Conosce la storia della fattoria e il modello", "לומד את סיפור החווה והמודל", "Découvre l’histoire et le modèle"),
          tx("Sees where they can connect", "Ve dónde puede conectarse", "Sees where they can connect", "Vede dove può connettersi", "רואה היכן אפשר להתחבר", "Voit où se connecter"),
        ],
        growsInto: [
          tx("A supporter who carries the story outward", "Un apoyo que comparte la historia", "Supporter who carries the story outward", "Un sostenitore che condivide la storia", "תומך שמעביר את הסיפור הלאה", "Un soutien qui partage l’histoire"),
          tx("A returning participant", "Un participante que regresa", "Returning participant", "Un partecipante che ritorna", "משתתף שחוזר", "Un participant qui revient"),
        ],
        ecosystem: tx("Guests help build visibility, trust, word-of-mouth, and community invitation.", "Los invitados ayudan a crear visibilidad, confianza, recomendaciones e invitación comunitaria.", "Guests help build visibility, trust, word-of-mouth, and invitation.", "Gli ospiti costruiscono visibilità, fiducia e invito comunitario.", "האורחים בונים נראות, אמון והזמנה קהילתית.", "Les invités renforcent visibilité, confiance et invitation communautaire."),
        nextStep: tx("Visit again, share the farm, invite someone, volunteer, or choose another pathway.", "Visitar otra vez, compartir la granja, invitar a alguien, ser voluntario o elegir otro camino.", "Visit again, share the farm, invite someone, volunteer, or choose another pathway.", "Tornare, condividere, invitare, fare volontariato o scegliere un altro percorso.", "לבקר שוב, לשתף, להזמין, להתנדב או לבחור מסלול אחר.", "Revenir, partager, inviter, servir ou choisir un autre parcours."),
        buttonLabel: tx("Go to Customer Journey", "Ir al Cliente", "Pumunta sa Customer", "Vai al Cliente", "לעבור ללקוח", "Aller au parcours client"),
        targetId: 5,
      },

      {
        id: 5,
        nav: "Customer",
        image: "/SAM_0221.JPG",
        title: tx("Customer Journey", "Recorrido del Cliente", "Customer Journey", "Percorso Cliente", "מסלול לקוח", "Parcours Client"),
        subtitle: tx("Customers connect fresh food to repeat healthy choices.", "Los clientes conectan alimentos frescos con decisiones saludables repetidas.", "Customers connect fresh food to repeat healthy choices.", "I clienti collegano cibo fresco a scelte sane ripetute.", "לקוחות מחברים מזון טרי לבחירות בריאות חוזרות.", "Les clients relient aliments frais et choix sains répétés."),
        startsAs: tx("A family, household, or buyer seeking fresh food, seedlings, or local options.", "Una familia, hogar o comprador buscando alimentos frescos, plántulas u opciones locales.", "Family, household, or buyer seeking fresh food, seedlings, or local options.", "Una famiglia o cliente cerca cibo fresco, piantine o opzioni locali.", "משפחה או קונה שמחפש מזון טרי, שתילים או אפשרויות מקומיות.", "Une famille ou acheteur cherchant aliments frais, plants ou options locales."),
        experiences: [
          tx("Discovers produce, seedlings, and farm offerings", "Descubre productos, plántulas y ofertas de la granja", "Discovers produce, seedlings, and farm offerings", "Scopre prodotti, piantine e offerte", "מגלה תוצרת, שתילים והצעות החווה", "Découvre produits, plants et offres"),
          tx("Learns nutrition and growing value", "Aprende valor nutricional y de cultivo", "Learns nutrition and growing value", "Apprende valore nutrizionale e agricolo", "לומד ערך תזונתי וחקלאי", "Comprend la valeur nutritionnelle et agricole"),
          tx("Buys, preorders, returns, and shares", "Compra, preordena, regresa y comparte", "Buys, preorders, returns, and shares", "Compra, preordina, ritorna e condivide", "קונה, מזמין מראש, חוזר ומשתף", "Achète, précommande, revient et partage"),
        ],
        growsInto: [
          tx("A repeat customer", "Un cliente frecuente", "Repeat customer", "Cliente abituale", "לקוח חוזר", "Client régulier"),
          tx("A healthier household connected to local food", "Un hogar más saludable conectado a alimentos locales", "Healthier household connected to local food", "Famiglia più sana collegata al cibo locale", "משפחה בריאה יותר המחוברת למזון מקומי", "Foyer plus sain relié à l’alimentation locale"),
        ],
        ecosystem: tx("Customer purchases keep food, dollars, and trust circulating locally.", "Las compras mantienen alimentos, dinero y confianza circulando localmente.", "Purchases keep food, money, and trust local.", "Gli acquisti mantengono cibo, denaro e fiducia locali.", "קניות משאירות מזון, כסף ואמון בקהילה.", "Les achats gardent nourriture, argent et confiance localement."),
        nextStep: tx("Shop, preorder, return for pickup, invite another family, or become a grower.", "Comprar, preordenar, regresar por recogida, invitar a otra familia o convertirse en agricultor.", "Shop, preorder, return for pickup, invite another family, or become a grower.", "Comprare, preordinare, ritirare, invitare una famiglia o diventare coltivatore.", "לקנות, להזמין מראש, לאסוף, להזמין משפחה אחרת או להפוך למגדל.", "Acheter, précommander, revenir, inviter une famille ou devenir producteur."),
        buttonLabel: tx("Go to Marketplace", "Ir al Mercado", "Pumunta sa Marketplace", "Vai al Mercato", "לעבור לשוק", "Aller au marché"),
        targetId: 6,
      },

      {
        id: 6,
        nav: "Marketplace",
        image: "/Marketplace.png",
        title: tx("Marketplace Journey", "Recorrido del Mercado", "Marketplace Journey", "Percorso Mercato", "מסלול שוק", "Parcours Marché"),
        subtitle: tx("The marketplace turns interest into purchasing power and sustainability.", "El mercado convierte el interés en poder de compra y sostenibilidad.", "Marketplace turns interest into purchasing power and sustainability.", "Il mercato trasforma l’interesse in acquisto e sostenibilità.", "השוק הופך עניין לכוח קנייה וקיימות.", "Le marché transforme l’intérêt en pouvoir d’achat et durabilité."),
        startsAs: tx("Separate growers, buyers, products, tools, and community needs.", "Agricultores, compradores, productos, herramientas y necesidades comunitarias separados.", "Separate growers, buyers, products, tools, and community needs.", "Coltivatori, clienti, prodotti, strumenti e bisogni separati.", "מגדלים, קונים, מוצרים, כלים וצרכים קהילתיים נפרדים.", "Producteurs, acheteurs, produits, outils et besoins séparés."),
        experiences: [
          tx("Find produce, seedlings, tools, and demonstrations", "Encontrar productos, plántulas, herramientas y demostraciones", "Find produce, seedlings, tools, and demonstrations", "Trovare prodotti, piantine, strumenti e dimostrazioni", "למצוא תוצרת, שתילים, כלים והדגמות", "Trouver produits, plants, outils et démonstrations"),
          tx("Connect buyers to local growers", "Conectar compradores con agricultores locales", "Connect buyers to local growers", "Collegare clienti a coltivatori locali", "לחבר קונים למגדלים מקומיים", "Relier acheteurs et producteurs locaux"),
          tx("Coordinate sales, preorders, pickup, and participation", "Coordinar ventas, preórdenes, recogida y participación", "Coordinate sales, preorders, pickup, and participation", "Coordinare vendite, preordini, ritiro e partecipazione", "לתאם מכירות, הזמנות, איסוף והשתתפות", "Coordonner ventes, précommandes, retrait et participation"),
        ],
        growsInto: [
          tx("A regional growers supply market", "Un mercado regional de suministros para agricultores", "Regional growers supply market", "Mercato regionale per coltivatori", "שוק אזורי לציוד ותוצרת מגדלים", "Marché régional pour producteurs"),
          tx("A stronger grower economy", "Una economía agrícola más fuerte", "Stronger grower economy", "Economia agricola più forte", "כלכלת מגדלים חזקה יותר", "Économie agricole renforcée"),
        ],
        ecosystem: tx("The marketplace connects growers, customers, institutions, demonstrations, distribution, and community purchasing power.", "El mercado conecta agricultores, clientes, instituciones, demostraciones, distribución y poder de compra comunitario.", "Marketplace connects growers, customers, institutions, demonstrations, distribution, and purchasing power.", "Il mercato collega coltivatori, clienti, istituzioni, dimostrazioni, distribuzione e potere d’acquisto.", "השוק מחבר מגדלים, לקוחות, מוסדות, הדגמות, הפצה וכוח קנייה קהילתי.", "Le marché relie producteurs, clients, institutions, démonstrations, distribution et pouvoir d’achat."),
        nextStep: tx("Shop, sell, supply, demonstrate, preorder, sponsor, or help build the regional market.", "Comprar, vender, proveer, demostrar, preordenar, patrocinar o construir el mercado regional.", "Shop, sell, supply, demonstrate, preorder, sponsor, or build the regional market.", "Comprare, vendere, fornire, dimostrare, preordinare, sponsorizzare o costruire il mercato.", "לקנות, למכור, לספק, להדגים, להזמין מראש, לתת חסות או לבנות את השוק.", "Acheter, vendre, fournir, démontrer, précommander, parrainer ou construire le marché."),
        buttonLabel: tx("Go to Grower Journey", "Ir al Agricultor", "Pumunta sa Grower", "Vai al Coltivatore", "לעבור למגדל", "Aller au producteur"),
        targetId: 7,
      },

      {
        id: 7,
        nav: "Grower",
        image: "/SAM_0223.JPG",
        title: tx("Grower Journey", "Recorrido del Agricultor", "Grower Journey", "Percorso Coltivatore", "מסלול מגדל", "Parcours Producteur"),
        subtitle: tx("Growers need tools, knowledge, visibility, technical help, and market support.", "Los agricultores necesitan herramientas, conocimiento, visibilidad, ayuda técnica y mercado.", "Growers need tools, knowledge, visibility, technical help, and market support.", "I coltivatori hanno bisogno di strumenti, conoscenza, visibilità e mercato.", "מגדלים צריכים כלים, ידע, נראות, סיוע טכני ושוק.", "Les producteurs ont besoin d’outils, de savoir, de visibilité, d’aide technique et de marché."),
        startsAs: tx("A person with land, interest, skill, potential, or a desire to grow.", "Una persona con tierra, interés, habilidad, potencial o deseo de cultivar.", "Person with land, interest, skill, potential, or desire to grow.", "Una persona con terra, interesse, capacità o desiderio di coltivare.", "אדם עם קרקע, עניין, יכולת, פוטנציאל או רצון לגדל.", "Une personne avec terre, intérêt, compétence ou désir de cultiver."),
        experiences: [
          tx("Learns growing methods and seasonal planning", "Aprende métodos de cultivo y planificación estacional", "Learns growing methods and seasonal planning", "Impara metodi di coltivazione e pianificazione stagionale", "לומד שיטות גידול ותכנון עונתי", "Apprend méthodes de culture et planification"),
          tx("Accesses tools, supplies, demonstrations, and peer support", "Accede a herramientas, suministros, demostraciones y apoyo", "Accesses tools, supplies, demos, and peer support", "Accede a strumenti, forniture, dimostrazioni e supporto", "מקבל כלים, ציוד, הדגמות ותמיכה", "Accède aux outils, fournitures, démonstrations et soutien"),
          tx("Connects to customers and market opportunities", "Se conecta con clientes y oportunidades de mercado", "Connects to customers and market opportunities", "Si collega a clienti e opportunità di mercato", "מתחבר ללקוחות ולהזדמנויות שוק", "Se relie aux clients et au marché"),
        ],
        growsInto: [
          tx("A confident producer", "Un productor seguro", "Confident producer", "Produttore sicuro", "יצרן בטוח", "Producteur confiant"),
          tx("A contributor to regional food access", "Un colaborador del acceso alimentario regional", "Contributor to regional food access", "Contributore all’accesso alimentare regionale", "תורם לנגישות מזון אזורית", "Contributeur à l’accès alimentaire régional"),
        ],
        ecosystem: tx("Growers are the production base of the ecosystem. Without growers, the market has no food to move.", "Los agricultores son la base productiva del ecosistema. Sin agricultores, el mercado no tiene alimentos para mover.", "Growers are the production base. Without growers, the market has no food to move.", "I coltivatori sono la base produttiva. Senza coltivatori, il mercato non ha cibo.", "המגדלים הם בסיס הייצור. בלי מגדלים, לשוק אין מזון להעביר.", "Les producteurs sont la base productive. Sans eux, le marché n’a rien à distribuer."),
        nextStep: tx("Decide: Do I want to become a grower, strengthen what I grow, or sell through the ecosystem?", "Decidir: ¿Quiero ser agricultor, fortalecer lo que cultivo o vender por el ecosistema?", "Decide: Do I want to become a grower, strengthen what I grow, or sell through the ecosystem?", "Decidere: voglio diventare coltivatore, migliorare o vendere tramite l’ecosistema?", "להחליט: האם להפוך למגדל, לחזק את מה שאני מגדל או למכור דרך המערכת?", "Décider : devenir producteur, renforcer ma culture ou vendre par l’écosystème ?"),
        buttonLabel: tx("Go to Youth Workforce", "Ir al Programa Juvenil", "Pumunta sa Youth Workforce", "Vai ai Giovani", "לעבור לנוער", "Aller au programme jeunesse"),
        targetId: 8,
      },

      {
        id: 8,
        nav: "Youth Workforce",
        image: "/SAM_0225.JPG",
        title: tx("Youth Workforce Program Pathway", "Ruta del Programa Juvenil", "Youth Workforce Program Pathway", "Percorso Programma Giovani", "מסלול תוכנית נוער", "Parcours Programme Jeunesse"),
        subtitle: tx("June 8 – August 28, 2026 | 9:00 AM – 2:00 PM | Monday–Friday", "8 de junio – 28 de agosto de 2026 | 9:00 AM – 2:00 PM | lunes a viernes", "June 8 – August 28, 2026 | 9:00 AM – 2:00 PM | Monday–Friday", "8 giugno – 28 agosto 2026 | 9:00–14:00 | lunedì–venerdì", "8 ביוני – 28 באוגוסט 2026 | 9:00–14:00 | שני–שישי", "8 juin – 28 août 2026 | 9 h – 14 h | lundi–vendredi"),
        startsAs: tx("A young person entering a structured summer work experience with supervisors, parent connection, safety, and daily expectations.", "Un joven entrando a una experiencia laboral estructurada con supervisores, conexión familiar, seguridad y expectativas diarias.", "Young person entering structured summer work with supervisors, parent connection, safety, and expectations.", "Un giovane entra in un’esperienza estiva strutturata con supervisori, genitori, sicurezza e aspettative.", "צעיר נכנס לחוויית עבודה קיצית מובנית עם מדריכים, הורים, בטיחות וציפיות יומיות.", "Un jeune entre dans une expérience de travail structurée avec supervision, lien parental, sécurité et attentes."),
        experiences: [
          tx("Online orientation with youth and parents", "Orientación virtual con jóvenes y padres", "Online orientation with youth and parents", "Orientamento online con giovani e genitori", "הכוונה מקוונת עם נוער והורים", "Orientation en ligne avec jeunes et parents"),
          tx("Safety rules, PPE, attendance, and daily responsibility", "Seguridad, PPE, asistencia y responsabilidad diaria", "Safety rules, PPE, attendance, and daily responsibility", "Sicurezza, DPI, presenza e responsabilità quotidiana", "בטיחות, ציוד מגן, נוכחות ואחריות יומית", "Sécurité, EPI, présence et responsabilité"),
          tx("Farm teams, proverbs, reflection, parent updates, and progress", "Equipos agrícolas, proverbios, reflexión, padres y progreso", "Farm teams, proverbs, reflection, parent updates, and progress", "Squadre agricole, proverbi, riflessione, genitori e progresso", "צוותי חווה, פתגמים, הרהור, הורים והתקדמות", "Équipes agricoles, proverbes, réflexion, parents et progrès"),
        ],
        growsInto: [
          tx("Workforce readiness", "Preparación laboral", "Workforce readiness", "Preparazione al lavoro", "מוכנות לעבודה", "Préparation professionnelle"),
          tx("Confidence, responsibility, leadership, and future opportunity", "Confianza, responsabilidad, liderazgo y oportunidad futura", "Confidence, responsibility, leadership, and future opportunity", "Fiducia, responsabilità, leadership e opportunità futura", "ביטחון, אחריות, מנהיגות והזדמנות עתידית", "Confiance, responsabilité, leadership et opportunité"),
        ],
        ecosystem: tx("Youth are not just workers. They learn how food, land, family, discipline, responsibility, and community connect.", "Los jóvenes no solo trabajan. Aprenden cómo alimentos, tierra, familia, disciplina, responsabilidad y comunidad se conectan.", "Youth are not just workers. They learn how food, land, family, discipline, responsibility, and community connect.", "I giovani non sono solo lavoratori. Imparano come cibo, terra, famiglia, disciplina, responsabilità e comunità si collegano.", "הנוער אינו רק כוח עבודה. הם לומדים כיצד מזון, קרקע, משפחה, משמעת, אחריות וקהילה מתחברים.", "Les jeunes ne sont pas seulement des travailleurs. Ils apprennent comment nourriture, terre, famille, discipline, responsabilité et communauté se relient."),
        nextStep: tx("Complete orientation, join a supervised team, build skills, and finish ready for the next opportunity.", "Completar orientación, unirse a un equipo supervisado, desarrollar habilidades y terminar listo para la próxima oportunidad.", "Complete orientation, join a supervised team, build skills, and finish ready for the next opportunity.", "Completare l’orientamento, unirsi a un team supervisionato, sviluppare competenze e prepararsi.", "להשלים הכוונה, להצטרף לצוות בפיקוח, לבנות מיומנויות ולהיות מוכן להזדמנות הבאה.", "Compléter l’orientation, rejoindre une équipe supervisée, développer des compétences et être prêt."),
        buttonLabel: tx("Go to Partner Journey", "Ir al Socio", "Pumunta sa Partner", "Vai al Partner", "לעבור לשותף", "Aller au partenaire"),
        targetId: 9,
      },

      {
        id: 9,
        nav: "Partner",
        image: "/SAM_0226.JPG",
        title: tx("Partner Journey", "Recorrido del Socio", "Partner Journey", "Percorso Partner", "מסלול שותף", "Parcours Partenaire"),
        subtitle: tx("Partners align resources, knowledge, infrastructure, and impact.", "Los socios alinean recursos, conocimiento, infraestructura e impacto.", "Partners align resources, knowledge, infrastructure, and impact.", "I partner allineano risorse, conoscenza, infrastruttura e impatto.", "שותפים מחברים משאבים, ידע, תשתית והשפעה.", "Les partenaires alignent ressources, savoir, infrastructure et impact."),
        startsAs: tx("An organization, funder, school, business, agency, or community leader with aligned mission.", "Una organización, financiador, escuela, negocio, agencia o líder comunitario con misión alineada.", "Organization, funder, school, business, agency, or leader with aligned mission.", "Un’organizzazione, finanziatore, scuola, impresa, agenzia o leader con missione affine.", "ארגון, מממן, בית ספר, עסק, סוכנות או מנהיג עם משימה מתאימה.", "Une organisation, financeur, école, entreprise, agence ou leader avec mission alignée."),
        experiences: [
          tx("Identifies a shared need", "Identifica una necesidad compartida", "Identifies a shared need", "Identifica un bisogno condiviso", "מזהה צורך משותף", "Identifie un besoin partagé"),
          tx("Aligns resources, demonstrations, funding, or services", "Alinea recursos, demostraciones, fondos o servicios", "Aligns resources, demonstrations, funding, or services", "Allinea risorse, dimostrazioni, fondi o servizi", "מיישר משאבים, הדגמות, מימון או שירותים", "Aligne ressources, démonstrations, financement ou services"),
          tx("Collaborates through a specific role", "Colabora mediante un rol específico", "Collaborates through a specific role", "Collabora con un ruolo specifico", "משתף פעולה בתפקיד ברור", "Collabore avec un rôle précis"),
        ],
        growsInto: [
          tx("An impact partner", "Un socio de impacto", "Impact partner", "Partner d’impatto", "שותף השפעה", "Partenaire d’impact"),
          tx("A community investor in food, youth, and health", "Un inversionista comunitario en alimentos, juventud y salud", "Community investor in food, youth, and health", "Investitore comunitario in cibo, giovani e salute", "משקיע קהילתי במזון, נוער ובריאות", "Investisseur communautaire en alimentation, jeunesse et santé"),
        ],
        ecosystem: tx("Partners expand capacity, credibility, education, funding, services, and long-term sustainability.", "Los socios amplían capacidad, credibilidad, educación, fondos, servicios y sostenibilidad.", "Partners expand capacity, credibility, education, funding, services, and sustainability.", "I partner ampliano capacità, credibilità, educazione, fondi, servizi e sostenibilità.", "שותפים מרחיבים יכולת, אמינות, חינוך, מימון, שירותים וקיימות.", "Les partenaires renforcent capacité, crédibilité, éducation, financement, services et durabilité."),
        nextStep: tx("Choose a role: sponsor, teach, fund, volunteer, provide supplies, advise, or collaborate.", "Elegir un rol: patrocinar, enseñar, financiar, servir, proveer, aconsejar o colaborar.", "Choose a role: sponsor, teach, fund, volunteer, supply, advise, or collaborate.", "Scegliere un ruolo: sponsorizzare, insegnare, finanziare, servire, fornire, consigliare o collaborare.", "לבחור תפקיד: חסות, הוראה, מימון, התנדבות, ציוד, ייעוץ או שיתוף פעולה.", "Choisir un rôle : parrainer, enseigner, financer, servir, fournir, conseiller ou collaborer."),
        buttonLabel: tx("Go to Value-Added", "Ir a Valor Agregado", "Pumunta sa Value-Added", "Vai al Valore Aggiunto", "לעבור לערך מוסף", "Aller à la valeur ajoutée"),
        targetId: 10,
      },

      {
        id: 10,
        nav: "Value-Added",
        image: "/SAM_0229.JPG",
        title: tx("Value-Added Journey", "Recorrido de Valor Agregado", "Value-Added Journey", "Percorso Valore Aggiunto", "מסלול ערך מוסף", "Parcours Valeur Ajoutée"),
        subtitle: tx("The farm grows beyond food into education, wellness, tourism, preservation, and enterprise.", "La granja crece más allá de alimentos hacia educación, bienestar, turismo, conservación y empresa.", "The farm grows beyond food into education, wellness, tourism, preservation, and enterprise.", "La fattoria cresce oltre il cibo: educazione, benessere, turismo, conservazione e impresa.", "החווה מתפתחת מעבר למזון לחינוך, בריאות, תיירות, שימור ויזמות.", "La ferme va au-delà de la nourriture : éducation, bien-être, tourisme, conservation et entreprise."),
        startsAs: tx("Fresh food, farm products, skills, stories, and community knowledge.", "Alimentos frescos, productos agrícolas, habilidades, historias y conocimiento comunitario.", "Fresh food, farm products, skills, stories, and community knowledge.", "Cibo fresco, prodotti agricoli, competenze, storie e conoscenza comunitaria.", "מזון טרי, תוצרת, מיומנויות, סיפורים וידע קהילתי.", "Aliments frais, produits agricoles, compétences, histoires et savoir communautaire."),
        experiences: [
          tx("Creates products, workshops, demonstrations, and learning experiences", "Crea productos, talleres, demostraciones y experiencias de aprendizaje", "Creates products, workshops, demonstrations, and learning experiences", "Crea prodotti, laboratori, dimostrazioni ed esperienze", "יוצר מוצרים, סדנאות, הדגמות וחוויות למידה", "Crée produits, ateliers, démonstrations et expériences"),
          tx("Teaches cooking, preserving, growing, and entrepreneurship", "Enseña cocina, conservación, cultivo y emprendimiento", "Teaches cooking, preserving, growing, and entrepreneurship", "Insegna cucina, conservazione, coltivazione e imprenditoria", "מלמד בישול, שימור, גידול ויזמות", "Enseigne cuisine, conservation, culture et entrepreneuriat"),
          tx("Turns farm activity into income and community education", "Convierte la actividad agrícola en ingresos y educación comunitaria", "Turns farm activity into income and community education", "Trasforma l’attività agricola in reddito ed educazione", "הופך פעילות חקלאית להכנסה וחינוך קהילתי", "Transforme l’activité agricole en revenus et éducation"),
        ],
        growsInto: [
          tx("New revenue streams", "Nuevos ingresos", "New revenue streams", "Nuove entrate", "מקורות הכנסה חדשים", "Nouveaux revenus"),
          tx("Local entrepreneurship and reduced waste", "Emprendimiento local y menos desperdicio", "Local entrepreneurship and reduced waste", "Imprenditoria locale e meno spreco", "יזמות מקומית והפחתת בזבוז", "Entrepreneuriat local et réduction du gaspillage"),
        ],
        ecosystem: tx("Value-added activity helps sustain the ecosystem by extending the life, use, and value of what is grown.", "El valor agregado sostiene el ecosistema extendiendo la vida, uso y valor de lo cultivado.", "Value-added sustains the ecosystem by extending the life, use, and value of what is grown.", "Il valore aggiunto sostiene l’ecosistema estendendo vita, uso e valore del raccolto.", "ערך מוסף מחזיק את המערכת על ידי הארכת חיי ושימוש התוצרת.", "La valeur ajoutée soutient l’écosystème en prolongeant la vie, l’usage et la valeur des récoltes."),
        nextStep: tx("Create, teach, preserve, sell, host, sponsor, or invest in the next phase.", "Crear, enseñar, conservar, vender, organizar, patrocinar o invertir en la próxima fase.", "Create, teach, preserve, sell, host, sponsor, or invest in the next phase.", "Creare, insegnare, conservare, vendere, ospitare, sponsorizzare o investire.", "ליצור, ללמד, לשמר, למכור, לארח, לתת חסות או להשקיע.", "Créer, enseigner, préserver, vendre, accueillir, parrainer ou investir."),
        buttonLabel: tx("Go to Future Vision", "Ir a Visión Futura", "Pumunta sa Future Vision", "Vai alla Visione Futura", "לעבור לחזון עתידי", "Aller à la vision future"),
        targetId: 11,
      },

      {
        id: 11,
        nav: "Future Vision",
        image: "/GrowArea2.jpg",
        title: tx("Future Vision", "Visión Futura", "Future Vision", "Visione Futura", "חזון עתידי", "Vision Future"),
        subtitle: tx("Infrastructure turns the model into a durable regional food and learning destination.", "La infraestructura convierte el modelo en un destino regional duradero de alimentos y aprendizaje.", "Infrastructure turns the model into a durable regional food and learning destination.", "L’infrastruttura trasforma il modello in una destinazione alimentare ed educativa duratura.", "תשתית הופכת את המודל ליעד אזורי יציב למזון ולמידה.", "L’infrastructure transforme le modèle en destination régionale durable."),
        startsAs: tx("A promising off-grid farm model with major community potential.", "Un modelo agrícola prometedor fuera de la red con gran potencial comunitario.", "Promising off-grid farm model with major community potential.", "Un modello agricolo off-grid promettente con grande potenziale.", "מודל חווה מבטיח מחוץ לרשת עם פוטנציאל קהילתי גדול.", "Un modèle agricole hors réseau prometteur avec fort potentiel."),
        experiences: [
          tx("Needs water, solar, storage, wash stations, security, and equipment", "Necesita agua, solar, almacenamiento, estaciones de lavado, seguridad y equipo", "Needs water, solar, storage, wash stations, security, and equipment", "Ha bisogno di acqua, solare, deposito, lavaggio, sicurezza e attrezzature", "צריך מים, סולארי, אחסון, עמדות שטיפה, ביטחון וציוד", "A besoin d’eau, solaire, stockage, lavage, sécurité et équipement"),
          tx("Builds capacity for year-round use and safer operations", "Crea capacidad para uso todo el año y operaciones seguras", "Builds capacity for year-round use and safer operations", "Costruisce capacità per uso annuale e operazioni sicure", "בונה יכולת לשימוש כל השנה ולתפעול בטוח", "Renforce l’usage annuel et les opérations sûres"),
          tx("Creates a destination for food, youth, education, and agritourism", "Crea un destino para alimentos, jóvenes, educación y agroturismo", "Creates a destination for food, youth, education, and agritourism", "Crea una destinazione per cibo, giovani, educazione e agriturismo", "יוצר יעד למזון, נוער, חינוך ותיירות חקלאית", "Crée une destination pour alimentation, jeunesse, éducation et agritourisme"),
        ],
        growsInto: [
          tx("A sustainable regional asset", "Un recurso regional sostenible", "Sustainable regional asset", "Risorsa regionale sostenibile", "נכס אזורי בר קיימא", "Atout régional durable"),
          tx("A fundable community food infrastructure model", "Un modelo financiable de infraestructura alimentaria comunitaria", "Fundable community food infrastructure model", "Modello finanziabile di infrastruttura alimentare comunitaria", "מודל תשתית מזון קהילתי שניתן לממן", "Modèle finançable d’infrastructure alimentaire communautaire"),
        ],
        ecosystem: tx("Investment strengthens every pathway: guest, customer, grower, youth, partner, marketplace, and value-added enterprise.", "La inversión fortalece cada camino: visitante, cliente, agricultor, joven, socio, mercado y empresa de valor agregado.", "Investment strengthens every pathway: guest, customer, grower, youth, partner, marketplace, and value-added enterprise.", "L’investimento rafforza ogni percorso: ospite, cliente, coltivatore, giovani, partner, mercato e valore aggiunto.", "השקעה מחזקת כל מסלול: אורח, לקוח, מגדל, נוער, שותף, שוק וערך מוסף.", "L’investissement renforce chaque parcours : invité, client, producteur, jeunesse, partenaire, marché et valeur ajoutée."),
        nextStep: tx("Decide whether to invest, sponsor, fund infrastructure, advise, or help build the next phase.", "Decidir si invertir, patrocinar, financiar infraestructura, asesorar o ayudar a construir la próxima fase.", "Decide whether to invest, sponsor, fund infrastructure, advise, or help build the next phase.", "Decidere se investire, sponsorizzare, finanziare infrastrutture, consigliare o costruire la prossima fase.", "להחליט אם להשקיע, לתת חסות, לממן תשתית, לייעץ או לבנות את השלב הבא.", "Décider d’investir, parrainer, financer l’infrastructure, conseiller ou bâtir la prochaine phase."),
        buttonLabel: tx("Go to Feedback", "Ir a Comentarios", "Pumunta sa Feedback", "Vai al Feedback", "לעבור למשוב", "Aller aux commentaires"),
        targetId: 12,
      },

      {
        id: 12,
        nav: "Feedback",
        image: "/ConnectFoodEcosystem_withimages.jpeg",
        containImage: true,
        title: tx("Thank You", "Gracias", "Salamat", "Grazie", "תודה", "Merci"),
        subtitle: tx("This demo is an invitation to respond, participate, and shape what comes next.", "Esta demo invita a responder, participar y formar lo que sigue.", "This demo invites response, participation, and next steps.", "Questa demo invita a rispondere e partecipare.", "ההדגמה מזמינה להגיב ולהשתתף.", "Cette démo invite à répondre et participer."),
        startsAs: tx("A viewer who has completed the ecosystem journey.", "Un espectador que completó el recorrido del ecosistema.", "Viewer who completed the ecosystem journey.", "Uno spettatore che ha completato il percorso.", "צופה שסיים את מסע המערכת.", "Un spectateur ayant terminé le parcours."),
        experiences: [
          tx("Reviews the roles and pathways", "Revisa los roles y caminos", "Reviews roles and pathways", "Rivede ruoli e percorsi", "סוקר תפקידים ומסלולים", "Revoit les rôles et parcours"),
          tx("Chooses where they connect", "Elige dónde se conecta", "Chooses where they connect", "Sceglie dove connettersi", "בוחר היכן להתחבר", "Choisit où se connecter"),
          tx("Shares feedback or requests contact", "Comparte comentarios o solicita contacto", "Shares feedback or requests contact", "Condivide feedback o chiede contatto", "משתף משוב או מבקש קשר", "Partage un avis ou demande contact"),
        ],
        growsInto: [
          tx("Participant, supporter, partner, customer, grower, volunteer, or investor", "Participante, apoyo, socio, cliente, agricultor, voluntario o inversionista", "Participant, supporter, partner, customer, grower, volunteer, or investor", "Partecipante, sostenitore, partner, cliente, coltivatore, volontario o investitore", "משתתף, תומך, שותף, לקוח, מגדל, מתנדב או משקיע", "Participant, soutien, partenaire, client, producteur, bénévole ou investisseur"),
        ],
        ecosystem: tx("Feedback helps refine the ecosystem before sharing it more widely with funders, partners, growers, and the community.", "Los comentarios ayudan a mejorar el ecosistema antes de compartirlo con financiadores, socios, agricultores y la comunidad.", "Feedback helps refine the ecosystem before sharing it more widely.", "Il feedback migliora l’ecosistema prima di condividerlo ampiamente.", "משוב עוזר לשפר את המערכת לפני שיתוף רחב יותר.", "Les avis aident à améliorer l’écosystème avant un partage plus large."),
        nextStep: tx("Contact: 330-275-1604 | cburgess@bronsonfamilyfarm.com", "Contacto: 330-275-1604 | cburgess@bronsonfamilyfarm.com", "Contact: 330-275-1604 | cburgess@bronsonfamilyfarm.com", "Contatto: 330-275-1604 | cburgess@bronsonfamilyfarm.com", "יצירת קשר: 330-275-1604 | cburgess@bronsonfamilyfarm.com", "Contact : 330-275-1604 | cburgess@bronsonfamilyfarm.com"),
        buttonLabel: tx("Start Over", "Comenzar de Nuevo", "Start Over", "Ricomincia", "להתחיל מחדש", "Recommencer"),
        targetId: 1,
      },
    ],
    []
  );

  const active = slides[current];
  const isRTL = lang === "עברית";
  const progress = `${(current / (slides.length - 1)) * 100}%`;

  const goToId = (id: number) => {
    const index = slides.findIndex((slide) => slide.id === id);
    if (index >= 0) setCurrent(index);
  };

  const next = () => setCurrent((prev) => Math.min(prev + 1, slides.length - 1));
  const back = () => setCurrent((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    if (!guidedTour) return;

    const timer = window.setInterval(() => {
      setCurrent((prev) => {
        if (prev >= slides.length - 1) {
          setGuidedTour(false);
          return prev;
        }
        return prev + 1;
      });
    }, 14000);

    return () => window.clearInterval(timer);
  }, [guidedTour, slides.length]);

  const pathwayButtons = slides;

  return (
    <main className="demo-shell" dir={isRTL ? "rtl" : "ltr"}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #020403; }
        .demo-shell {
          min-height: 100vh;
          width: 100%;
          background:
            radial-gradient(circle at top left, rgba(245, 221, 161, 0.18), transparent 28%),
            radial-gradient(circle at bottom right, rgba(144, 171, 94, 0.22), transparent 35%),
            linear-gradient(135deg, #020403 0%, #101c0d 45%, #2f421e 100%);
          color: #fffaf0;
          font-family: Georgia, "Times New Roman", serif;
          padding: 18px;
          overflow-x: hidden;
        }
        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 12px;
        }
        .brand {
          color: #f3ce6d;
          letter-spacing: 0.42em;
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 900;
          margin-bottom: 8px;
        }
        .main-title {
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(34px, 5vw, 66px);
          line-height: .88;
          margin: 0;
          letter-spacing: -0.06em;
        }
        .language-row, .nav-row, .pathway-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }
        button, select {
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.09);
          color: #fffaf0;
          border-radius: 999px;
          padding: 10px 16px;
          font-weight: 900;
          cursor: pointer;
          backdrop-filter: blur(10px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.12);
        }
        select option { color: #1f2a1b; }
        button:hover, select:hover { background: rgba(255,255,255,0.18); }
        button.active, .primary {
          background: linear-gradient(135deg, #d89a3c, #f2d27c);
          color: #22331d;
          border-color: rgba(255,255,255,0.25);
        }
        .progress {
          height: 8px;
          background: rgba(255,255,255,0.18);
          border-radius: 999px;
          overflow: hidden;
          margin: 18px 0 12px;
        }
        .progress div {
          height: 100%;
          background: linear-gradient(90deg, #81c341, #f2d27c);
          width: ${progress};
          transition: width 0.35s ease;
        }
        .pathway-row {
          margin-bottom: 14px;
        }
        .pathway-row button {
          font-size: 13px;
          padding: 9px 14px;
        }
        .stage {
          height: calc(100vh - 245px);
          min-height: 590px;
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 18px;
          align-items: stretch;
        }
        .image-panel, .content-panel {
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(6, 8, 6, 0.74);
          box-shadow: 0 24px 80px rgba(0,0,0,0.38);
        }
        .image-panel {
          position: relative;
          min-height: 100%;
        }
        .image-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .image-panel.contain img {
          object-fit: contain;
          padding: 18px;
          background: linear-gradient(135deg, rgba(253,244,214,0.94), rgba(232,220,176,0.9));
        }
        .image-label {
          position: absolute;
          left: 18px;
          bottom: 18px;
          right: 18px;
          background: rgba(4, 8, 4, 0.74);
          border: 1px solid rgba(255,255,255,0.20);
          border-radius: 20px;
          padding: 12px 14px;
          font-size: 15px;
        }
        .content-panel {
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 14px;
        }
        .eyebrow {
          color: #f2d27c;
          font-size: 12px;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          font-weight: 900;
          margin-bottom: 8px;
        }
        h1 {
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(32px, 4.2vw, 58px);
          line-height: 0.96;
          margin: 4px 0 8px;
          letter-spacing: -0.04em;
        }
        .subtitle {
          font-size: clamp(16px, 1.4vw, 22px);
          line-height: 1.25;
          color: #fff4cf;
          margin: 0;
          font-weight: 700;
        }
        .journey-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 20px;
          padding: 12px 14px;
        }
        .card.full { grid-column: 1 / -1; }
        .card-title {
          color: #f2d27c;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          margin-bottom: 7px;
          font-weight: 900;
        }
        .card p {
          margin: 0;
          line-height: 1.25;
          font-size: 15px;
        }
        ul {
          margin: 0;
          padding-left: 18px;
        }
        li {
          margin: 3px 0;
          line-height: 1.22;
          font-size: 14px;
        }
        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          justify-content: space-between;
          padding-top: 4px;
        }
        @media (max-width: 1050px) {
          .stage {
            height: auto;
            min-height: auto;
            grid-template-columns: 1fr;
          }
          .image-panel { height: 340px; }
          .journey-grid { grid-template-columns: 1fr; }
          .main-title { font-size: 42px; }
        }
      `}</style>

      <section className="topbar">
        <div>
          <div className="brand">Bronson Family Farm Demo</div>
          <h1 className="main-title">Connected Food Ecosystem<br />Experience</h1>
        </div>

        <div className="language-row">
          <select value={lang} onChange={(event) => setLang(event.target.value as LangKey)}>
            {LANGS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </section>

      <div className="progress"><div /></div>

      <section className="pathway-row">
        {pathwayButtons.map((slide) => (
          <button
            key={slide.id}
            onClick={() => goToId(slide.id)}
            className={active.id === slide.id ? "active" : ""}
          >
            {slide.id}. {slide.nav}
          </button>
        ))}
      </section>

      <section className="stage">
        <div className="content-panel">
          <div>
            <div className="eyebrow">Bronson Family Farm Demo</div>
            <h1>{t(active.title)}</h1>
            <p className="subtitle">{t(active.subtitle)}</p>
          </div>

          <div className="journey-grid">
            <div className="card">
              <div className="card-title">{t(labels.startsAs)}</div>
              <p>{t(active.startsAs)}</p>
            </div>

            <div className="card">
              <div className="card-title">{t(labels.experiences)}</div>
              <ul>
                {active.experiences.map((item, index) => (
                  <li key={index}>{t(item)}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="card-title">{t(labels.growsInto)}</div>
              <ul>
                {active.growsInto.map((item, index) => (
                  <li key={index}>{t(item)}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="card-title">{t(labels.connects)}</div>
              <p>{t(active.ecosystem)}</p>
            </div>

            <div className="card full">
              <div className="card-title">{t(labels.nextStep)}</div>
              <p>{t(active.nextStep)}</p>
            </div>
          </div>

          <div className="actions">
            <div className="nav-row">
              <button onClick={() => goToId(1)}>{t(labels.start)}</button>
              <button onClick={back}>{t(labels.back)}</button>
              <button className="active" onClick={next}>{t(labels.next)}</button>
              <button className={guidedTour ? "active" : "primary"} onClick={() => setGuidedTour((value) => !value)}>
                {guidedTour ? t(labels.pauseTour) : t(labels.beginTour)}
              </button>
              <button className="primary" onClick={() => goToId(12)}>{t(labels.feedback)}</button>
            </div>

            <button className="primary" onClick={() => goToId(active.targetId)}>
              {t(active.buttonLabel)}
            </button>
          </div>
        </div>

        <div className={`image-panel ${active.containImage ? "contain" : ""}`}>
          <img
            src={active.image}
            alt={active.nav}
            onError={(event) => {
              event.currentTarget.src = "/ConnectFoodEcosystem_withimages.jpeg";
              event.currentTarget.parentElement?.classList.add("contain");
            }}
          />
          <div className="image-label">
            <strong>{active.nav}</strong><br />
            {t(active.subtitle)}
          </div>
        </div>
      </section>
    </main>
  );
}
