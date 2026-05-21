import { useEffect, useMemo, useState } from "react";

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
  journeySteps: MultiText[];
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

  const slides: Slide[] = useMemo(
    () => [
      {
        id: 1,
        nav: "Bronson Family Farm",
        image: "/ConnectFoodEcosystem_withimages.jpeg",
        containImage: true,
        title: tx("Enter the Farm", "Entrar a la Granja", "Pumasok sa Bukid", "Entra nella Fattoria", "כניסה לחווה", "Entrer dans la Ferme"),
        subtitle: tx("The ecosystem begins at the Historic Lansdowne Airport in Youngstown.", "El ecosistema comienza en el histórico aeropuerto Lansdowne.", "Nagsisimula ang ecosystem sa Historic Lansdowne Airport.", "L’ecosistema inizia allo storico aeroporto Lansdowne.", "המערכת מתחילה בשדה התעופה ההיסטורי לנסדאון.", "L’écosystème commence à l’aéroport historique Lansdowne."),
        startsAs: tx("A visitor entering a connected farm experience.", "Un visitante entrando a una experiencia conectada.", "Bisitang pumapasok sa connected farm experience.", "Un visitatore entra in un’esperienza connessa.", "מבקר הנכנס לחוויית חווה מחוברת.", "Un visiteur entrant dans une expérience connectée."),
        experiences: [
          tx("See the ecosystem", "Ver el ecosistema", "Tingnan ang ecosystem", "Vedere l’ecosistema", "לראות את המערכת", "Voir l’écosystème"),
          tx("Understand the mission", "Comprender la misión", "Unawain ang mission", "Comprendere la missione", "להבין את המשימה", "Comprendre la mission"),
          tx("Choose a pathway", "Elegir un camino", "Pumili ng pathway", "Scegliere un percorso", "לבחור מסלול", "Choisir un parcours"),
        ],
        growsInto: [
          tx("A connected participant", "Un participante conectado", "A connected participant", "Un partecipante connesso", "משתתף מחובר", "Un participant connecté"),
          tx("A future supporter or partner", "Un futuro apoyo o socio", "Future supporter or partner", "Futuro sostenitore o partner", "תומך או שותף עתידי", "Futur soutien ou partenaire"),
        ],
        ecosystem: tx("Every pathway supports the larger ecosystem.", "Cada camino apoya el ecosistema mayor.", "Every pathway supports the larger ecosystem.", "Ogni percorso sostiene l’ecosistema più ampio.", "כל מסלול תומך במערכת הרחבה.", "Chaque parcours soutient l’écosystème plus large."),
        nextStep: tx("Begin the guided tour or select a pathway.", "Comience el recorrido o seleccione un camino.", "Simulan ang tour o pumili ng pathway.", "Inizia il tour o scegli un percorso.", "התחל סיור או בחר מסלול.", "Commencer la visite ou choisir un parcours."),
        journeySteps: [
          tx("Enter the farm story", "Entrar en la historia de la granja", "Enter the farm story", "Entrare nella storia della fattoria", "להיכנס לסיפור החווה", "Entrer dans l’histoire de la ferme"),
          tx("Understand why this place matters", "Entender por qué este lugar importa", "Understand why this place matters", "Capire perché questo luogo conta", "להבין מדוע המקום חשוב", "Comprendre pourquoi ce lieu compte"),
          tx("Choose how to participate", "Elegir cómo participar", "Choose how to participate", "Scegliere come partecipare", "לבחור כיצד להשתתף", "Choisir comment participer"),
          tx("Move into a role-based pathway", "Avanzar a un camino por función", "Move into a role-based pathway", "Passare a un percorso per ruolo", "לעבור למסלול לפי תפקיד", "Passer à un parcours par rôle"),
        ],
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
        startsAs: tx("Separate needs: food, learning, work, market, and health.", "Necesidades separadas: alimentos, aprendizaje, trabajo, mercado y salud.", "Hiwa-hiwalay na needs: food, learning, work, market, health.", "Bisogni separati: cibo, apprendimento, lavoro, mercato e salute.", "צרכים נפרדים: מזון, למידה, עבודה, שוק ובריאות.", "Besoins séparés : nourriture, apprentissage, travail, marché et santé."),
        experiences: [
          tx("Connect people", "Conectar personas", "Connect people", "Connettere persone", "לחבר אנשים", "Relier les personnes"),
          tx("Move resources", "Mover recursos", "Move resources", "Muovere risorse", "להזרים משאבים", "Faire circuler les ressources"),
          tx("Build opportunity", "Crear oportunidades", "Build opportunity", "Creare opportunità", "לבנות הזדמנות", "Créer l’opportunité"),
        ],
        growsInto: [
          tx("Local food infrastructure", "Infraestructura alimentaria local", "Local food infrastructure", "Infrastruttura alimentare locale", "תשתית מזון מקומית", "Infrastructure alimentaire locale"),
          tx("Community-powered system", "Sistema impulsado por la comunidad", "Community-powered system", "Sistema comunitario", "מערכת שמונעת על ידי קהילה", "Système porté par la communauté"),
        ],
        ecosystem: tx("The ecosystem turns individual participation into shared community benefit.", "El ecosistema convierte la participación individual en beneficio comunitario.", "Ginagawa ng ecosystem ang participation bilang community benefit.", "L’ecosistema trasforma la partecipazione in beneficio comune.", "המערכת הופכת השתתפות אישית לתועלת קהילתית.", "L’écosystème transforme la participation en bénéfice partagé."),
        nextStep: tx("Decide where you connect.", "Decida dónde se conecta.", "Piliin kung saan ka konektado.", "Decidi dove connetterti.", "בחר היכן להתחבר.", "Décidez où vous vous connectez."),
        journeySteps: [
          tx("See the whole system", "Ver todo el sistema", "See the whole system", "Vedere l’intero sistema", "לראות את כל המערכת", "Voir tout le système"),
          tx("Recognize how needs connect", "Reconocer cómo se conectan las necesidades", "Recognize how needs connect", "Riconoscere come i bisogni si collegano", "להכיר כיצד צרכים מתחברים", "Reconnaître comment les besoins se relient"),
          tx("Match people to roles", "Conectar personas con funciones", "Match people to roles", "Abbinare persone e ruoli", "להתאים אנשים לתפקידים", "Associer les personnes aux rôles"),
          tx("Build shared community value", "Crear valor comunitario compartido", "Build shared community value", "Creare valore comunitario condiviso", "לבנות ערך קהילתי משותף", "Créer une valeur communautaire partagée"),
        ],
        buttonLabel: tx("Explore the Farm", "Explorar la Granja", "Tuklasin ang Bukid", "Esplora la Fattoria", "סיור בחווה", "Explorer la Ferme"),
        targetId: 3,
      },
      {
        id: 3,
        nav: "Explore the Farm",
        image: "/GrowArea.jpg",
        title: tx("Explore the Farm", "Explorar la Granja", "Tuklasin ang Bukid", "Esplora la Fattoria", "סיור בחווה", "Explorer la Ferme"),
        subtitle: tx("Agriculture rooted in place, history, and purpose.", "Agricultura con lugar, historia y propósito.", "Pagsasaka na may lugar, history, at purpose.", "Agricoltura radicata in luogo, storia e scopo.", "חקלאות המחוברת למקום, היסטוריה ומטרה.", "Agriculture enracinée dans le lieu, l’histoire et le but."),
        startsAs: tx("Historic land with untapped community potential.", "Tierra histórica con potencial comunitario.", "Historic land na may community potential.", "Terra storica con potenziale comunitario.", "קרקע היסטורית עם פוטנציאל קהילתי.", "Terre historique avec potentiel communautaire."),
        experiences: [
          tx("Enter the airport site", "Entrar al sitio", "Pumasok sa site", "Entrare nel sito", "להיכנס לאתר", "Entrer sur le site"),
          tx("See outdoor growing", "Ver cultivo exterior", "Makita ang outdoor growing", "Vedere coltivazione esterna", "לראות גידול חוץ", "Voir la culture extérieure"),
          tx("Imagine future systems", "Imaginar sistemas futuros", "Isipin ang future systems", "Immaginare sistemi futuri", "לדמיין מערכות עתידיות", "Imaginer les systèmes futurs"),
        ],
        growsInto: [
          tx("Food and learning destination", "Destino de alimentos y aprendizaje", "Food and learning destination", "Destinazione cibo e apprendimento", "יעד מזון ולמידה", "Destination alimentaire et éducative"),
          tx("Agritourism opportunity", "Oportunidad de agroturismo", "Agritourism opportunity", "Opportunità agrituristica", "הזדמנות לתיירות חקלאית", "Opportunité d’agritourisme"),
        ],
        ecosystem: tx("The place becomes the physical home for growing, teaching, gathering, and distributing.", "El lugar se convierte en hogar físico para cultivar, enseñar y distribuir.", "Ang lugar ang nagiging home for growing, teaching, gathering, distribution.", "Il luogo diventa casa fisica per coltivare, insegnare e distribuire.", "המקום הופך לבית פיזי לגידול, הוראה, מפגש והפצה.", "Le lieu devient la base pour cultiver, enseigner, réunir et distribuer."),
        nextStep: tx("Experience the land as a destination.", "Experimente la tierra como destino.", "Maranasan ang land bilang destination.", "Vivi la terra come destinazione.", "לחוות את הקרקע כיעד.", "Découvrir la terre comme destination."),
        journeySteps: [
          tx("Arrive at the Historic Lansdowne Airport site", "Llegar al histórico aeropuerto Lansdowne", "Arrive at the Historic Lansdowne Airport site", "Arrivare allo storico aeroporto Lansdowne", "להגיע לאתר שדה התעופה לנסדאון", "Arriver au site historique de Lansdowne"),
          tx("See the outdoor growing area", "Ver el área de cultivo exterior", "See the outdoor growing area", "Vedere l’area di coltivazione esterna", "לראות את אזור הגידול", "Voir la zone de culture extérieure"),
          tx("Understand land, access, and infrastructure needs", "Entender tierra, acceso e infraestructura", "Understand land, access, and infrastructure needs", "Capire terra, accesso e infrastruttura", "להבין קרקע, גישה ותשתית", "Comprendre le terrain, l’accès et l’infrastructure"),
          tx("Imagine the farm as a learning destination", "Imaginar la granja como destino educativo", "Imagine the farm as a learning destination", "Immaginare la fattoria come destinazione educativa", "לדמיין את החווה כיעד למידה", "Imaginer la ferme comme destination éducative"),
        ],
        buttonLabel: tx("Go to Guest Journey", "Ir al Invitado", "Pumunta sa Guest", "Vai all’Ospite", "לעבור לאורח", "Aller au parcours invité"),
        targetId: 4,
      },
      {
        id: 4,
        nav: "Guest",
        image: "/SAM_0220.JPG",
        title: tx("Guest Journey", "Recorrido del Invitado", "Guest Journey", "Percorso Ospite", "מסלול אורח", "Parcours Invité"),
        subtitle: tx("Guests experience the story, land, food, and purpose.", "Los invitados viven la historia, la tierra y el propósito.", "Guests experience story, land, food, and purpose.", "Gli ospiti vivono storia, terra, cibo e scopo.", "האורחים חווים סיפור, קרקע, מזון ומטרה.", "Les invités découvrent histoire, terre, nourriture et but."),
        startsAs: tx("A curious visitor.", "Un visitante curioso.", "Curious visitor.", "Un visitatore curioso.", "מבקר סקרן.", "Un visiteur curieux."),
        experiences: [
          tx("Arrive", "Llegar", "Dumating", "Arrivare", "להגיע", "Arriver"),
          tx("Learn the story", "Aprender la historia", "Matuto ng story", "Conoscere la storia", "ללמוד את הסיפור", "Apprendre l’histoire"),
          tx("Feel invited", "Sentirse invitado", "Ma-feel invited", "Sentirsi invitato", "להרגיש מוזמן", "Se sentir invité"),
        ],
        growsInto: [
          tx("Supporter", "Apoyo", "Supporter", "Sostenitore", "תומך", "Soutien"),
          tx("Participant", "Participante", "Participant", "Partecipante", "משתתף", "Participant"),
        ],
        ecosystem: tx("Guests help carry the story outward and invite others in.", "Los invitados comparten la historia e invitan a otros.", "Guests share the story and invite others.", "Gli ospiti portano la storia ad altri.", "האורחים נושאים את הסיפור ומזמינים אחרים.", "Les invités partagent l’histoire et invitent d’autres personnes."),
        nextStep: tx("Visit, share, or invite someone else.", "Visite, comparta o invite a alguien.", "Bumisita, mag-share, o mag-imbita.", "Visita, condividi o invita qualcuno.", "לבקר, לשתף או להזמין מישהו.", "Visiter, partager ou inviter quelqu’un."),
        journeySteps: [
          tx("Arrive as a visitor", "Llegar como visitante", "Arrive as a visitor", "Arrivare come visitatore", "להגיע כמבקר", "Arriver comme visiteur"),
          tx("Learn the story and purpose", "Aprender la historia y el propósito", "Learn the story and purpose", "Conoscere la storia e lo scopo", "ללמוד את הסיפור והמטרה", "Apprendre l’histoire et le but"),
          tx("Experience food, land, and people", "Vivir alimentos, tierra y personas", "Experience food, land, and people", "Vivere cibo, terra e persone", "לחוות מזון, קרקע ואנשים", "Découvrir nourriture, terre et personnes"),
          tx("Share the story with others", "Compartir la historia con otros", "Share the story with others", "Condividere la storia con altri", "לשתף את הסיפור עם אחרים", "Partager l’histoire avec d’autres"),
        ],
        buttonLabel: tx("Go to Customer Journey", "Ir al Cliente", "Pumunta sa Customer", "Vai al Cliente", "לעבור ללקוח", "Aller au parcours client"),
        targetId: 5,
      },
      {
        id: 5,
        nav: "Customer",
        image: "/SAM_0221.JPG",
        title: tx("Customer Journey", "Recorrido del Cliente", "Customer Journey", "Percorso Cliente", "מסלול לקוח", "Parcours Client"),
        subtitle: tx("Customers support healthy choices and local circulation.", "Los clientes apoyan salud y circulación local.", "Customers support health and local circulation.", "I clienti sostengono salute e circolazione locale.", "לקוחות תומכים בבריאות ובכלכלה מקומית.", "Les clients soutiennent santé et circulation locale."),
        startsAs: tx("A family or buyer seeking fresh food.", "Una familia o comprador buscando alimentos frescos.", "Family or buyer seeking fresh food.", "Una famiglia o cliente cerca cibo fresco.", "משפחה או קונה שמחפש מזון טרי.", "Une famille ou acheteur cherchant des aliments frais."),
        experiences: [
          tx("Discover produce", "Descubrir productos", "Discover produce", "Scoprire prodotti", "לגלות תוצרת", "Découvrir les produits"),
          tx("Learn nutrition value", "Aprender valor nutricional", "Learn nutrition value", "Capire valore nutrizionale", "להבין ערך תזונתי", "Comprendre la valeur nutritionnelle"),
          tx("Buy or pre-order", "Comprar o preordenar", "Buy or pre-order", "Comprare o preordinare", "לקנות או להזמין מראש", "Acheter ou précommander"),
        ],
        growsInto: [
          tx("Repeat customer", "Cliente frecuente", "Repeat customer", "Cliente abituale", "לקוח חוזר", "Client régulier"),
          tx("Healthier household", "Hogar más saludable", "Healthier household", "Famiglia più sana", "משפחה בריאה יותר", "Foyer plus sain"),
        ],
        ecosystem: tx("Customer purchases keep money and food circulating locally.", "Las compras mantienen dinero y alimentos circulando localmente.", "Purchases keep food and money local.", "Gli acquisti mantengono cibo e denaro locali.", "קניות משאירות מזון וכסף בקהילה.", "Les achats gardent nourriture et argent dans la communauté."),
        nextStep: tx("Buy fresh food and return regularly.", "Comprar alimentos frescos y volver.", "Buy fresh food and return.", "Comprare cibo fresco e tornare.", "לקנות מזון טרי ולחזור.", "Acheter des aliments frais et revenir."),
        journeySteps: [
          tx("Discover fresh food and seedlings", "Descubrir alimentos frescos y plantas", "Discover fresh food and seedlings", "Scoprire cibo fresco e piantine", "לגלות מזון טרי ושתילים", "Découvrir aliments frais et plants"),
          tx("Understand nutrition and seasonal value", "Entender nutrición y valor de temporada", "Understand nutrition and seasonal value", "Capire nutrizione e valore stagionale", "להבין תזונה וערך עונתי", "Comprendre nutrition et valeur saisonnière"),
          tx("Purchase or preorder from the marketplace", "Comprar o preordenar en el mercado", "Purchase or preorder from the marketplace", "Acquistare o preordinare dal mercato", "לקנות או להזמין מראש מהשוק", "Acheter ou précommander au marché"),
          tx("Return as a repeat customer", "Volver como cliente frecuente", "Return as a repeat customer", "Tornare come cliente abituale", "לחזור כלקוח קבוע", "Revenir comme client régulier"),
        ],
        buttonLabel: tx("Go to Marketplace", "Ir al Mercado", "Pumunta sa Marketplace", "Vai al Mercato", "לעבור לשוק", "Aller au marché"),
        targetId: 6,
      },
      {
        id: 6,
        nav: "Marketplace",
        image: "/GrowersSupplyMarket.jpg",
        title: tx("Marketplace Journey", "Recorrido del Mercado", "Marketplace Journey", "Percorso Mercato", "מסלול שוק", "Parcours Marché"),
        subtitle: tx("The food moves. The grower does not have to travel everywhere.", "La comida se mueve. El agricultor no viaja a todas partes.", "The food moves. The grower does not travel everywhere.", "Il cibo si muove. Il coltivatore non va ovunque.", "המזון נע. המגדל לא נוסע לכל מקום.", "La nourriture circule. Le producteur ne va pas partout."),
        startsAs: tx("Separate growers and separate buyers.", "Productores y compradores separados.", "Separate growers and buyers.", "Coltivatori e clienti separati.", "מגדלים וקונים נפרדים.", "Producteurs et acheteurs séparés."),
        experiences: [
          tx("List products", "Listar productos", "List products", "Elencare prodotti", "לפרסם מוצרים", "Lister les produits"),
          tx("Connect buyers", "Conectar compradores", "Connect buyers", "Collegare clienti", "לחבר קונים", "Relier les acheteurs"),
          tx("Coordinate pickup", "Coordinar recogida", "Coordinate pickup", "Coordinare ritiro", "לתאם איסוף", "Coordonner le retrait"),
          tx("Support local growers", "Apoyar agricultores locales", "Support local growers", "Sostenere coltivatori locali", "לתמוך במגדלים מקומיים", "Soutenir les producteurs locaux"),
        ],
        growsInto: [
          tx("Regional food hub", "Centro regional de alimentos", "Regional food hub", "Centro alimentare regionale", "מרכז מזון אזורי", "Carrefour alimentaire régional"),
          tx("Stronger grower economy", "Economía agrícola más fuerte", "Stronger grower economy", "Economia agricola più forte", "כלכלת מגדלים חזקה יותר", "Économie agricole renforcée"),
        ],
        ecosystem: tx("The marketplace connects growers, customers, institutions, distribution, and community purchasing power.", "El mercado conecta agricultores, clientes, instituciones, distribución y poder de compra comunitario.", "Marketplace connects growers, customers, institutions, distribution, and community purchasing power.", "Il mercato collega coltivatori, clienti, istituzioni, distribuzione e potere d’acquisto comunitario.", "השוק מחבר מגדלים, לקוחות, מוסדות, הפצה וכוח קנייה קהילתי.", "Le marché relie producteurs, clients, institutions, distribution et pouvoir d’achat communautaire."),
        nextStep: tx("Shop, sell, supply, preorder, or help build the regional market.", "Comprar, vender, proveer, preordenar o construir el mercado regional.", "Shop, sell, supply, preorder, or help build the regional market.", "Comprare, vendere, fornire, preordinare o costruire il mercato regionale.", "לקנות, למכור, לספק, להזמין מראש או לבנות את השוק האזורי.", "Acheter, vendre, fournir, précommander ou aider à construire le marché régional."),
        journeySteps: [
          tx("Bring growers and buyers into one system", "Reunir agricultores y compradores en un sistema", "Bring growers and buyers into one system", "Portare coltivatori e clienti in un sistema", "לחבר מגדלים וקונים למערכת אחת", "Réunir producteurs et acheteurs dans un système"),
          tx("List products and available supply", "Listar productos y oferta disponible", "List products and available supply", "Elencare prodotti e disponibilità", "לפרסם מוצרים ומלאי", "Lister produits et disponibilité"),
          tx("Coordinate pickup, orders, and distribution", "Coordinar recogida, pedidos y distribución", "Coordinate pickup, orders, and distribution", "Coordinare ritiro, ordini e distribuzione", "לתאם איסוף, הזמנות והפצה", "Coordonner retrait, commandes et distribution"),
          tx("Strengthen grower income and food access", "Fortalecer ingresos agrícolas y acceso a alimentos", "Strengthen grower income and food access", "Rafforzare reddito agricolo e accesso al cibo", "לחזק הכנסות מגדלים וגישה למזון", "Renforcer revenu des producteurs et accès alimentaire"),
        ],
        buttonLabel: tx("Go to Grower Journey", "Ir al Agricultor", "Pumunta sa Grower", "Vai al Coltivatore", "לעבור למגדל", "Aller au producteur"),
        targetId: 7,
      },
      {
        id: 7,
        nav: "Grower",
        image: "/SAM_0223.JPG",
        title: tx("Grower Journey", "Recorrido del Agricultor", "Grower Journey", "Percorso Coltivatore", "מסלול מגדל", "Parcours Producteur"),
        subtitle: tx("Growers need tools, knowledge, visibility, and market support.", "Los agricultores necesitan herramientas, conocimiento y mercado.", "Growers need tools, knowledge, visibility, and market support.", "I coltivatori hanno bisogno di strumenti e mercato.", "מגדלים צריכים כלים, ידע ושוק.", "Les producteurs ont besoin d’outils, de savoir et de marché."),
        startsAs: tx("A grower with land, interest, or potential.", "Un agricultor con tierra, interés o potencial.", "Grower with land, interest, or potential.", "Un coltivatore con interesse o potenziale.", "מגדל עם קרקע, עניין או פוטנציאל.", "Un producteur avec terre, intérêt ou potentiel."),
        experiences: [
          tx("Learn methods", "Aprender métodos", "Learn methods", "Imparare metodi", "ללמוד שיטות", "Apprendre des méthodes"),
          tx("Access tools", "Acceder a herramientas", "Access tools", "Accedere strumenti", "לקבל כלים", "Accéder aux outils"),
          tx("Reach markets", "Llegar a mercados", "Reach markets", "Raggiungere mercati", "להגיע לשווקים", "Atteindre les marchés"),
        ],
        growsInto: [
          tx("Confident producer", "Productor seguro", "Confident producer", "Produttore sicuro", "יצרן בטוח", "Producteur confiant"),
          tx("Regional food contributor", "Colaborador alimentario regional", "Regional food contributor", "Contributore regionale", "תורם למזון אזורי", "Contributeur alimentaire régional"),
        ],
        ecosystem: tx("Growers are the production base of the ecosystem.", "Los agricultores son la base productiva del ecosistema.", "Growers are the production base.", "I coltivatori sono la base produttiva.", "המגדלים הם בסיס הייצור.", "Les producteurs sont la base productive."),
        nextStep: tx("Become a grower or strengthen what you already grow.", "Conviértase en agricultor o fortalezca lo que cultiva.", "Become a grower or strengthen what you grow.", "Diventa coltivatore o rafforza ciò che coltivi.", "להפוך למגדל או לחזק את מה שכבר גדל.", "Devenir producteur ou renforcer ce que vous cultivez."),
        journeySteps: [
          tx("Identify what you want to grow", "Identificar lo que quiere cultivar", "Identify what you want to grow", "Identificare cosa vuoi coltivare", "לזהות מה תרצה לגדל", "Identifier ce que vous voulez cultiver"),
          tx("Learn methods, tools, and seasonal planning", "Aprender métodos, herramientas y planificación", "Learn methods, tools, and seasonal planning", "Imparare metodi, strumenti e pianificazione", "ללמוד שיטות, כלים ותכנון עונתי", "Apprendre méthodes, outils et planification"),
          tx("Connect to market and support systems", "Conectar con mercado y sistemas de apoyo", "Connect to market and support systems", "Collegarsi al mercato e ai supporti", "להתחבר לשוק ולמערכות תמיכה", "Se connecter au marché et aux soutiens"),
          tx("Grow into a producer within the ecosystem", "Crecer como productor dentro del ecosistema", "Grow into a producer within the ecosystem", "Crescere come produttore nell’ecosistema", "להתפתח כיצרן במערכת", "Devenir producteur dans l’écosystème"),
        ],
        buttonLabel: tx("Go to Youth Workforce", "Ir al Programa Juvenil", "Pumunta sa Youth Workforce", "Vai ai Giovani", "לעבור לנוער", "Aller au programme jeunesse"),
        targetId: 8,
      },
      {
        id: 8,
        nav: "Youth Workforce",
        image: "/SAM_0225.JPG",
        title: tx("Youth Workforce Program Pathway", "Ruta del Programa Juvenil", "Youth Workforce Program Pathway", "Percorso Programma Giovani", "מסלול תוכנית נוער", "Parcours Programme Jeunesse"),
        subtitle: tx("June 8 – August 28, 2026 | 9:00 AM – 2:00 PM | Monday–Friday", "8 de junio – 28 de agosto de 2026 | 9:00 AM – 2:00 PM | lunes a viernes", "June 8 – August 28, 2026 | 9:00 AM – 2:00 PM | Monday–Friday", "8 giugno – 28 agosto 2026 | 9:00–14:00 | lunedì–venerdì", "8 ביוני – 28 באוגוסט 2026 | 9:00–14:00 | שני–שישי", "8 juin – 28 août 2026 | 9 h – 14 h | lundi–vendredi"),
        startsAs: tx("A young person enters a structured summer work experience with adult supervisors, parent connection, safety expectations, and daily learning.", "Un joven entra en una experiencia laboral estructurada con supervisores, conexión familiar, seguridad y aprendizaje diario.", "A young person enters structured summer work with supervisors, parent connection, safety, and daily learning.", "Un giovane entra in un’esperienza estiva strutturata con supervisori, famiglie, sicurezza e apprendimento.", "צעיר נכנס לחוויית עבודה קיצית מובנית עם מדריכים, הורים, בטיחות ולמידה יומית.", "Un jeune entre dans une expérience de travail structurée avec supervision, lien parental, sécurité et apprentissage quotidien."),
        experiences: [
          tx("1. Online orientation with youth and parents", "1. Orientación virtual con jóvenes y padres", "1. Online orientation with youth and parents", "1. Orientamento online con giovani e genitori", "1. הכוונה מקוונת עם נוער והורים", "1. Orientation en ligne avec jeunes et parents"),
          tx("2. Safety rules, PPE, attendance, and expectations", "2. Seguridad, PPE, asistencia y expectativas", "2. Safety rules, PPE, attendance, and expectations", "2. Sicurezza, DPI, presenza e aspettative", "2. כללי בטיחות, ציוד מגן, נוכחות וציפיות", "2. Sécurité, EPI, présence et attentes"),
          tx("3. Daily supervised farm work teams", "3. Equipos diarios de trabajo agrícola supervisado", "3. Daily supervised farm work teams", "3. Squadre agricole giornaliere supervisionate", "3. צוותי עבודה חקלאית בפיקוח", "3. Équipes agricoles supervisées chaque jour"),
          tx("4. Skill-building: growing, tools, teamwork, responsibility", "4. Habilidades: cultivo, herramientas, equipo y responsabilidad", "4. Skill-building: growing, tools, teamwork, responsibility", "4. Competenze: coltivazione, strumenti, squadra e responsabilità", "4. מיומנויות: גידול, כלים, עבודת צוות ואחריות", "4. Compétences : culture, outils, équipe et responsabilité"),
          tx("5. Proverbs, reflection, and life lessons", "5. Proverbios, reflexión y lecciones de vida", "5. Proverbs, reflection, and life lessons", "5. Proverbi, riflessione e lezioni di vita", "5. פתגמים, הרהור ושיעורי חיים", "5. Proverbes, réflexion et leçons de vie"),
          tx("6. Parent updates and connection", "6. Actualizaciones y conexión con padres", "6. Parent updates and connection", "6. Aggiornamenti e collegamento con i genitori", "6. עדכוני הורים וחיבור משפחתי", "6. Mises à jour et lien avec les parents"),
          tx("7. Progress, leadership, and completion", "7. Progreso, liderazgo y finalización", "7. Progress, leadership, and completion", "7. Progresso, leadership e completamento", "7. התקדמות, מנהיגות והשלמה", "7. Progrès, leadership et achèvement"),
        ],
        growsInto: [
          tx("Workforce readiness", "Preparación laboral", "Workforce readiness", "Preparazione al lavoro", "מוכנות לעבודה", "Préparation professionnelle"),
          tx("Confidence and responsibility", "Confianza y responsabilidad", "Confidence and responsibility", "Fiducia e responsabilità", "ביטחון ואחריות", "Confiance et responsabilité"),
          tx("Future growers, workers, entrepreneurs, and leaders", "Futuros agricultores, trabajadores, empresarios y líderes", "Future growers, workers, entrepreneurs, and leaders", "Futuri coltivatori, lavoratori, imprenditori e leader", "מגדלים, עובדים, יזמים ומנהיגים עתידיים", "Futurs producteurs, travailleurs, entrepreneurs et leaders"),
        ],
        ecosystem: tx("Youth are not just workers. They are learning how food, land, responsibility, family, and community connect.", "Los jóvenes no solo trabajan. Aprenden cómo se conectan alimentos, tierra, responsabilidad, familia y comunidad.", "Youth are not just workers. They learn how food, land, responsibility, family, and community connect.", "I giovani non sono solo lavoratori. Imparano come cibo, terra, responsabilità, famiglia e comunità si collegano.", "הנוער אינו רק כוח עבודה. הם לומדים כיצד מזון, קרקע, אחריות, משפחה וקהילה מתחברים.", "Les jeunes ne sont pas seulement des travailleurs. Ils apprennent comment nourriture, terre, responsabilité, famille et communauté se relient."),
        nextStep: tx("Complete orientation, join a supervised team, build skills, and finish the program ready for the next opportunity.", "Completar orientación, unirse a un equipo supervisado, desarrollar habilidades y terminar listo para la próxima oportunidad.", "Complete orientation, join a supervised team, build skills, and finish ready for the next opportunity.", "Completare l’orientamento, unirsi a un team supervisionato, sviluppare competenze e prepararsi alla prossima opportunità.", "להשלים הכוונה, להצטרף לצוות בפיקוח, לבנות מיומנויות ולהיות מוכן להזדמנות הבאה.", "Compléter l’orientation, rejoindre une équipe supervisée, développer des compétences et être prêt pour la prochaine opportunité."),
        journeySteps: [
          tx("Register and attend parent/youth orientation", "Registrarse y asistir a orientación de padres/jóvenes", "Register and attend parent/youth orientation", "Registrarsi e partecipare all’orientamento", "להירשם ולהשתתף בהכוונת הורים/נוער", "S’inscrire et assister à l’orientation"),
          tx("Learn safety, PPE, attendance, and expectations", "Aprender seguridad, PPE, asistencia y expectativas", "Learn safety, PPE, attendance, and expectations", "Imparare sicurezza, DPI, presenza e aspettative", "ללמוד בטיחות, ציוד מגן ונוכחות", "Apprendre sécurité, EPI, présence et attentes"),
          tx("Work in supervised farm teams", "Trabajar en equipos agrícolas supervisados", "Work in supervised farm teams", "Lavorare in squadre supervisionate", "לעבוד בצוותי חווה בפיקוח", "Travailler en équipes supervisées"),
          tx("Build skills through tools, growing, teamwork, and responsibility", "Desarrollar habilidades con herramientas, cultivo, equipo y responsabilidad", "Build skills through tools, growing, teamwork, and responsibility", "Sviluppare competenze con strumenti, coltivazione e responsabilità", "לבנות מיומנויות דרך כלים, גידול, צוות ואחריות", "Développer compétences par outils, culture, équipe et responsabilité"),
          tx("Reflect through proverbs and life lessons", "Reflexionar con proverbios y lecciones de vida", "Reflect through proverbs and life lessons", "Riflettere con proverbi e lezioni di vita", "להרהר דרך פתגמים ושיעורי חיים", "Réfléchir avec proverbes et leçons de vie"),
          tx("Finish with progress, leadership, and next opportunity", "Terminar con progreso, liderazgo y próxima oportunidad", "Finish with progress, leadership, and next opportunity", "Finire con progresso, leadership e prossima opportunità", "לסיים עם התקדמות, מנהיגות והזדמנות הבאה", "Terminer avec progrès, leadership et prochaine opportunité"),
        ],
        buttonLabel: tx("Go to Partner Journey", "Ir al Socio", "Pumunta sa Partner", "Vai al Partner", "לעבור לשותף", "Aller au partenaire"),
        targetId: 9,
      },
      {
        id: 9,
        nav: "Partner",
        image: "/PartnerJourney.jpg",
        title: tx("Partner Journey", "Recorrido del Socio", "Partner Journey", "Percorso Partner", "מסלול שותף", "Parcours Partenaire"),
        subtitle: tx("Partners align resources, knowledge, infrastructure, and impact.", "Los socios alinean recursos, conocimiento e impacto.", "Partners align resources, knowledge, infrastructure, and impact.", "I partner allineano risorse e impatto.", "שותפים מחברים משאבים והשפעה.", "Les partenaires alignent ressources et impact."),
        startsAs: tx("An organization with resources or aligned mission.", "Una organización con recursos o misión alineada.", "Organization with resources or aligned mission.", "Un’organizzazione con risorse o missione affine.", "ארגון עם משאבים או משימה מתאימה.", "Une organisation avec ressources ou mission alignée."),
        experiences: [
          tx("Identify shared need", "Identificar necesidad compartida", "Identify shared need", "Identificare bisogno comune", "לזהות צורך משותף", "Identifier un besoin partagé"),
          tx("Align resources", "Alinear recursos", "Align resources", "Allineare risorse", "ליישר משאבים", "Aligner les ressources"),
          tx("Collaborate", "Colaborar", "Collaborate", "Collaborare", "לשתף פעולה", "Collaborer"),
        ],
        growsInto: [
          tx("Impact partner", "Socio de impacto", "Impact partner", "Partner d’impatto", "שותף השפעה", "Partenaire d’impact"),
          tx("Community investor", "Inversionista comunitario", "Community investor", "Investitore comunitario", "משקיע קהילתי", "Investisseur communautaire"),
        ],
        ecosystem: tx("Partners expand capacity, credibility, education, funding, and services.", "Los socios amplían capacidad, credibilidad, educación, fondos y servicios.", "Partners expand capacity, credibility, education, funding, services.", "I partner ampliano capacità, credibilità e servizi.", "שותפים מרחיבים יכולת, אמינות, חינוך ומימון.", "Les partenaires renforcent capacité, crédibilité, éducation et financement."),
        nextStep: tx("Partner, sponsor, educate, fund, or volunteer.", "Asociarse, patrocinar, educar, financiar o servir.", "Partner, sponsor, educate, fund, or volunteer.", "Collaborare, sponsorizzare, educare o finanziare.", "לשתף פעולה, לתת חסות, לחנך, לממן או להתנדב.", "Collaborer, parrainer, éduquer, financer ou servir."),
        journeySteps: [
          tx("Identify a shared community need", "Identificar una necesidad comunitaria compartida", "Identify a shared community need", "Identificare un bisogno comunitario condiviso", "לזהות צורך קהילתי משותף", "Identifier un besoin communautaire partagé"),
          tx("Decide what resource, expertise, or support can be aligned", "Decidir qué recurso, experiencia o apoyo se puede alinear", "Decide what resource, expertise, or support can be aligned", "Decidere quali risorse o competenze allineare", "להחליט אילו משאבים או מומחיות לחבר", "Décider quelles ressources ou expertises aligner"),
          tx("Create a practical collaboration", "Crear una colaboración práctica", "Create a practical collaboration", "Creare una collaborazione pratica", "ליצור שיתוף פעולה מעשי", "Créer une collaboration pratique"),
          tx("Strengthen capacity, credibility, funding, and services", "Fortalecer capacidad, credibilidad, fondos y servicios", "Strengthen capacity, credibility, funding, and services", "Rafforzare capacità, credibilità, finanziamenti e servizi", "לחזק יכולת, אמינות, מימון ושירותים", "Renforcer capacité, crédibilité, financement et services"),
        ],
        buttonLabel: tx("Go to Value-Added", "Ir a Valor Agregado", "Pumunta sa Value-Added", "Vai al Valore Aggiunto", "לעבור לערך מוסף", "Aller à la valeur ajoutée"),
        targetId: 10,
      },
      {
        id: 10,
        nav: "Value-Added",
        image: "/ValueAddedJourney.jpg",
        title: tx("Value-Added Journey", "Recorrido de Valor Agregado", "Value-Added Journey", "Percorso Valore Aggiunto", "מסלול ערך מוסף", "Parcours Valeur Ajoutée"),
        subtitle: tx("The farm grows beyond food into education, tourism, wellness, and enterprise.", "La granja crece hacia educación, turismo, bienestar y empresa.", "The farm grows into education, tourism, wellness, and enterprise.", "La fattoria cresce in educazione, turismo e impresa.", "החווה מתפתחת לחינוך, תיירות ויזמות.", "La ferme devient éducation, tourisme, bien-être et entreprise."),
        startsAs: tx("Fresh food and raw farm products.", "Alimentos frescos y productos agrícolas.", "Fresh food and raw products.", "Cibo fresco e prodotti agricoli.", "מזון טרי ותוצרת חקלאית.", "Aliments frais et produits agricoles."),
        experiences: [
          tx("Create products", "Crear productos", "Create products", "Creare prodotti", "ליצור מוצרים", "Créer des produits"),
          tx("Teach skills", "Enseñar habilidades", "Teach skills", "Insegnare competenze", "ללמד מיומנויות", "Enseigner des compétences"),
          tx("Host experiences", "Crear experiencias", "Host experiences", "Ospitare esperienze", "לאפשר חוויות", "Accueillir des expériences"),
        ],
        growsInto: [
          tx("New revenue", "Nuevos ingresos", "New revenue", "Nuove entrate", "הכנסה חדשה", "Nouveaux revenus"),
          tx("Entrepreneurship", "Emprendimiento", "Entrepreneurship", "Imprenditoria", "יזמות", "Entrepreneuriat"),
        ],
        ecosystem: tx("Value-added activity creates income that helps sustain the ecosystem.", "El valor agregado crea ingresos que sostienen el ecosistema.", "Value-added creates income to sustain the ecosystem.", "Il valore aggiunto sostiene l’ecosistema.", "ערך מוסף מייצר הכנסה שמחזיקה את המערכת.", "La valeur ajoutée crée des revenus qui soutiennent l’écosystème."),
        nextStep: tx("Create, teach, preserve, sell, or invest.", "Crear, enseñar, conservar, vender o invertir.", "Create, teach, preserve, sell, or invest.", "Creare, insegnare, conservare, vendere o investire.", "ליצור, ללמד, לשמר, למכור או להשקיע.", "Créer, enseigner, préserver, vendre ou investir."),
        journeySteps: [
          tx("Begin with farm products, skills, and experiences", "Comenzar con productos, habilidades y experiencias", "Begin with farm products, skills, and experiences", "Iniziare con prodotti, competenze ed esperienze", "להתחיל במוצרים, מיומנויות וחוויות", "Commencer avec produits, compétences et expériences"),
          tx("Turn produce into education, preservation, tourism, or enterprise", "Convertir productos en educación, conservación, turismo o empresa", "Turn produce into education, preservation, tourism, or enterprise", "Trasformare prodotti in educazione, conservazione, turismo o impresa", "להפוך תוצרת לחינוך, שימור, תיירות או יזמות", "Transformer produits en éducation, conservation, tourisme ou entreprise"),
          tx("Create revenue that supports sustainability", "Crear ingresos que apoyan la sostenibilidad", "Create revenue that supports sustainability", "Creare entrate che sostengono la sostenibilità", "ליצור הכנסה שתומכת בקיימות", "Créer des revenus qui soutiennent la durabilité"),
          tx("Expand the farm into a destination and learning economy", "Expandir la granja como destino y economía educativa", "Expand the farm into a destination and learning economy", "Espandere la fattoria come destinazione ed economia educativa", "להרחיב את החווה ליעד וכלכלת למידה", "Développer la ferme comme destination et économie d’apprentissage"),
        ],
        buttonLabel: tx("Go to Feedback", "Ir a Comentarios", "Pumunta sa Feedback", "Vai al Feedback", "לעבור למשוב", "Aller aux commentaires"),
        targetId: 11,
      },
      {
        id: 11,
        nav: "Feedback",
        image: "/ConnectFoodEcosystem_withimages.jpeg",
        containImage: true,
        title: tx("Thank You", "Gracias", "Salamat", "Grazie", "תודה", "Merci"),
        subtitle: tx("This demo is an invitation to respond, participate, and shape what comes next.", "Esta demo invita a responder, participar y formar lo que sigue.", "This demo invites response, participation, and next steps.", "Questa demo invita a rispondere e partecipare.", "ההדגמה מזמינה להגיב ולהשתתף.", "Cette démo invite à répondre et participer."),
        startsAs: tx("A viewer who has completed the ecosystem journey.", "Un espectador que completó el recorrido.", "Viewer who completed the journey.", "Uno spettatore che ha completato il percorso.", "צופה שסיים את המסע.", "Un spectateur ayant terminé le parcours."),
        experiences: [
          tx("Review roles", "Revisar funciones", "Review roles", "Rivedere ruoli", "לסקור תפקידים", "Revoir les rôles"),
          tx("Choose connection", "Elegir conexión", "Choose connection", "Scegliere connessione", "לבחור חיבור", "Choisir une connexion"),
          tx("Share feedback", "Compartir comentarios", "Share feedback", "Condividere feedback", "לשתף משוב", "Partager un avis"),
        ],
        growsInto: [
          tx("Participant", "Participante", "Participant", "Partecipante", "משתתף", "Participant"),
          tx("Supporter", "Apoyo", "Supporter", "Sostenitore", "תומך", "Soutien"),
        ],
        ecosystem: tx("Feedback helps refine the ecosystem before sharing it more widely.", "Los comentarios ayudan a mejorar el ecosistema.", "Feedback helps improve the ecosystem.", "Il feedback migliora l’ecosistema.", "משוב עוזר לשפר את המערכת.", "Les avis aident à améliorer l’écosystème."),
        nextStep: tx("Contact: 330-275-1604 | cburgess@bronsonfamilyfarm.com", "Contacto: 330-275-1604 | cburgess@bronsonfamilyfarm.com", "Contact: 330-275-1604 | cburgess@bronsonfamilyfarm.com", "Contatto: 330-275-1604 | cburgess@bronsonfamilyfarm.com", "יצירת קשר: 330-275-1604 | cburgess@bronsonfamilyfarm.com", "Contact : 330-275-1604 | cburgess@bronsonfamilyfarm.com"),
        journeySteps: [
          tx("Review the ecosystem", "Revisar el ecosistema", "Review the ecosystem", "Rivedere l’ecosistema", "לסקור את המערכת", "Revoir l’écosystème"),
          tx("Choose your connection", "Elegir su conexión", "Choose your connection", "Scegliere la connessione", "לבחור את החיבור שלך", "Choisir votre connexion"),
          tx("Share feedback", "Compartir comentarios", "Share feedback", "Condividere feedback", "לשתף משוב", "Partager un avis"),
          tx("Contact Bronson Family Farm", "Contactar a Bronson Family Farm", "Contact Bronson Family Farm", "Contattare Bronson Family Farm", "ליצור קשר עם ברונסון פמילי פארם", "Contacter Bronson Family Farm"),
        ],
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

  const startGuidedOverview = () => {
    if (guidedTour) {
      setGuidedTour(false);
      return;
    }

    setCurrent(0);
    window.setTimeout(() => setGuidedTour(true), 120);
  };


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
    }, 18000);

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
          font-family: "Inter", "Segoe UI", Arial, Helvetica, sans-serif;
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

        .tour-note {
          margin: -4px 0 12px;
          color: rgba(255,250,240,0.78);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.01em;
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
          padding: 10px 12px;
          font-size: 13px;
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
          font-size: clamp(28px, 3.7vw, 50px);
          line-height: 0.96;
          margin: 4px 0 8px;
          letter-spacing: -0.04em;
        }
        .subtitle {
          font-size: clamp(15px, 1.25vw, 19px);
          line-height: 1.25;
          color: #fff4cf;
          margin: 0;
          font-weight: 700;
        }
        .journey-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 20px;
          padding: 10px 12px;
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
          font-size: 13px;
        }
        ul {
          margin: 0;
          padding-left: 18px;
        }
        li {
          margin: 3px 0;
          line-height: 1.22;
          font-size: 13px;
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
  
        .tour-note {
          margin: -4px 0 12px;
          color: rgba(255,250,240,0.78);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.01em;
        }
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
            onClick={() => {
              setGuidedTour(false);
              goToId(slide.id);
            }}
            className={active.id === slide.id ? "active" : ""}
          >
            {slide.id}. {slide.nav}
          </button>
        ))}
      </section>

      <div className="tour-note">
        Guided Overview gives a slow walkthrough of the whole ecosystem. Pathway buttons let viewers explore each journey on their own.
      </div>

      <section className="stage">
        <div className="content-panel">
          <div>
            <div className="eyebrow">Bronson Family Farm Demo</div>
            <h1>{t(active.title)}</h1>
            <p className="subtitle">{t(active.subtitle)}</p>
          </div>

          <div className="journey-grid">
            <div className="card">
              <div className="card-title">Starts As</div>
              <p>{t(active.startsAs)}</p>
            </div>

            <div className="card">
              <div className="card-title">Experiences</div>
              <ul>
                {active.experiences.map((item, index) => (
                  <li key={index}>{t(item)}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="card-title">Grows Into</div>
              <ul>
                {active.growsInto.map((item, index) => (
                  <li key={index}>{t(item)}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="card-title">Connects Back To</div>
              <p>{t(active.ecosystem)}</p>
            </div>

            <div className="card full">
              <div className="card-title">Individual Journey</div>
              <ul>
                {active.journeySteps.map((item, index) => (
                  <li key={index}>{t(item)}</li>
                ))}
              </ul>
            </div>

            <div className="card full">
              <div className="card-title">Next Step</div>
              <p>{t(active.nextStep)}</p>
            </div>
          </div>

          <div className="actions">
            <div className="nav-row">
              <button onClick={() => { setGuidedTour(false); goToId(1); }}>Start</button>
              <button onClick={() => { setGuidedTour(false); back(); }}>Back</button>
              <button className="active" onClick={() => { setGuidedTour(false); next(); }}>Next</button>
              <button className={guidedTour ? "active" : "primary"} onClick={startGuidedOverview}>
                {guidedTour ? "Pause Tour" : "Guided Overview"}
              </button>
              <button className="primary" onClick={() => { setGuidedTour(false); goToId(11); }}>Share Feedback</button>
            </div>

            <button className="primary" onClick={() => { setGuidedTour(false); goToId(active.targetId); }}>
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
