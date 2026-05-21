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
        nav: "Enter the Farm",
        image: "/ConnectFoodEcosystem_withimages.jpeg",
        containImage: true,
        title: tx("Enter the Farm", "Entrar a la Granja", "Pumasok sa Bukid", "Entra nella Fattoria", "כניסה לחווה", "Entrer dans la Ferme"),
        subtitle: tx("A connected food ecosystem rooted at the Historic Lansdowne Airport.", "Un ecosistema alimentario conectado en el histórico aeropuerto Lansdowne.", "Connected food ecosystem sa Historic Lansdowne Airport.", "Un ecosistema alimentare connesso nello storico aeroporto Lansdowne.", "מערכת מזון מחוברת בשדה התעופה ההיסטורי לנסדאון.", "Un écosystème alimentaire connecté à l’aéroport historique Lansdowne."),
        startsAs: tx("A viewer entering a real place with history, land, food, and community purpose.", "Una persona entrando a un lugar real con historia, tierra, alimentos y propósito comunitario.", "Viewer entering a real place with history, land, food, and community purpose.", "Una persona entra in un luogo reale con storia, terra, cibo e scopo comunitario.", "צופה הנכנס למקום אמיתי עם היסטוריה, קרקע, מזון ומטרה קהילתית.", "Une personne entre dans un lieu réel avec histoire, terre, nourriture et but communautaire."),
        experiences: [
          tx("See the whole ecosystem map", "Ver el mapa del ecosistema", "See the whole ecosystem map", "Vedere la mappa dell’ecosistema", "לראות את מפת המערכת", "Voir la carte complète de l’écosystème"),
          tx("Understand how each role connects", "Comprender cómo se conecta cada rol", "Understand how each role connects", "Comprendere come ogni ruolo si collega", "להבין כיצד כל תפקיד מתחבר", "Comprendre comment chaque rôle se relie"),
          tx("Choose a pathway or begin the guided tour", "Elegir un camino o comenzar el recorrido", "Choose a pathway or begin the guided tour", "Scegliere un percorso o iniziare il tour", "לבחור מסלול או להתחיל סיור מודרך", "Choisir un parcours ou commencer la visite guidée"),
        ],
        growsInto: [
          tx("An informed participant", "Un participante informado", "Informed participant", "Un partecipante informato", "משתתף מיודע", "Un participant informé"),
          tx("A future customer, grower, volunteer, partner, or investor", "Cliente, agricultor, voluntario, socio o inversionista futuro", "Future customer, grower, volunteer, partner, or investor", "Futuro cliente, coltivatore, volontario, partner o investitore", "לקוח, מגדל, מתנדב, שותף או משקיע עתידי", "Futur client, producteur, bénévole, partenaire ou investisseur"),
        ],
        ecosystem: tx("The demo begins with the full system so every journey stays connected to the whole.", "La demo empieza con el sistema completo para que cada recorrido permanezca conectado.", "The demo begins with the full system so every journey stays connected.", "La demo inizia con il sistema completo così ogni percorso resta connesso.", "ההדגמה מתחילה במערכת כולה כדי שכל מסע יישאר מחובר.", "La démo commence par le système complet afin que chaque parcours reste connecté."),
        nextStep: tx("Begin the guided tour or select the pathway that matches your role.", "Comience el recorrido o seleccione el camino que coincide con su rol.", "Begin the guided tour or select the pathway that matches your role.", "Inizia la visita guidata o scegli il percorso che corrisponde al tuo ruolo.", "התחל את הסיור או בחר את המסלול המתאים לתפקידך.", "Commencez la visite ou choisissez le parcours qui correspond à votre rôle."),
        buttonLabel: tx("See the Ecosystem", "Ver el Ecosistema", "See the Ecosystem", "Vedere l’Ecosistema", "לראות את המערכת", "Voir l’Écosystème"),
        targetId: 2,
      },
      {
        id: 2,
        nav: "Ecosystem",
        image: "/ConnectFoodEcosystem_withimages.jpeg",
        containImage: true,
        title: tx("Connected Food Ecosystem", "Ecosistema Alimentario Conectado", "Connected Food Ecosystem", "Ecosistema Alimentare Connesso", "מערכת מזון מחוברת", "Écosystème Alimentaire Connecté"),
        subtitle: tx("A living network where each role strengthens the whole.", "Una red viva donde cada función fortalece el conjunto.", "Living network where every role strengthens the whole.", "Una rete viva dove ogni ruolo rafforza il tutto.", "רשת חיה שבה כל תפקיד מחזק את הכלל.", "Un réseau vivant où chaque rôle renforce l’ensemble."),
        startsAs: tx("Separate needs: food access, learning, work, growing, market access, wellness, and investment.", "Necesidades separadas: alimentos, aprendizaje, trabajo, cultivo, mercado, bienestar e inversión.", "Separate needs: food access, learning, work, growing, market access, wellness, and investment.", "Bisogni separati: cibo, apprendimento, lavoro, coltivazione, mercato, benessere e investimento.", "צרכים נפרדים: מזון, למידה, עבודה, גידול, שוק, בריאות והשקעה.", "Besoins séparés : nourriture, apprentissage, travail, culture, marché, bien-être et investissement."),
        experiences: [
          tx("Connect people to food and purpose", "Conectar personas con alimentos y propósito", "Connect people to food and purpose", "Collegare persone a cibo e scopo", "לחבר אנשים למזון ולמטרה", "Relier les personnes à la nourriture et au but"),
          tx("Move resources through one shared system", "Mover recursos por un sistema compartido", "Move resources through one shared system", "Muovere risorse in un sistema condiviso", "להזרים משאבים במערכת משותפת", "Faire circuler les ressources dans un système partagé"),
          tx("Create clear pathways for participation", "Crear caminos claros para participar", "Create clear pathways for participation", "Creare percorsi chiari di partecipazione", "ליצור מסלולי השתתפות ברורים", "Créer des parcours clairs de participation"),
        ],
        growsInto: [
          tx("Local food infrastructure", "Infraestructura alimentaria local", "Local food infrastructure", "Infrastruttura alimentare locale", "תשתית מזון מקומית", "Infrastructure alimentaire locale"),
          tx("A community-powered regional food system", "Un sistema alimentario regional impulsado por la comunidad", "Community-powered regional food system", "Sistema alimentare regionale guidato dalla comunità", "מערכת מזון אזורית שמונעת על ידי הקהילה", "Un système alimentaire régional porté par la communauté"),
        ],
        ecosystem: tx("Every role contributes: guests carry the story, customers circulate dollars, growers produce, youth build skills, partners add capacity, and the marketplace moves food.", "Cada rol contribuye: visitantes comparten la historia, clientes circulan dinero, agricultores producen, jóvenes aprenden, socios amplían capacidad y el mercado mueve alimentos.", "Every role contributes: guests carry the story, customers circulate dollars, growers produce, youth build skills, partners add capacity, and the marketplace moves food.", "Ogni ruolo contribuisce: ospiti portano la storia, clienti fanno circolare denaro, coltivatori producono, giovani imparano, partner aggiungono capacità e il mercato muove cibo.", "כל תפקיד תורם: אורחים נושאים את הסיפור, לקוחות מזינים כלכלה, מגדלים מייצרים, נוער בונה מיומנויות, שותפים מוסיפים יכולת והשוק מזיז מזון.", "Chaque rôle contribue : invités partagent l’histoire, clients font circuler l’argent, producteurs cultivent, jeunes apprennent, partenaires renforcent la capacité et le marché fait circuler la nourriture."),
        nextStep: tx("Decide where you connect and what action you are ready to take.", "Decida dónde se conecta y qué acción está listo para tomar.", "Decide where you connect and what action you are ready to take.", "Decidi dove ti connetti e quale azione sei pronto a fare.", "בחר היכן להתחבר ואיזו פעולה לבצע.", "Décidez où vous vous connectez et quelle action vous êtes prêt à prendre."),
        buttonLabel: tx("Explore the Farm", "Explorar la Granja", "Explore the Farm", "Esplora la Fattoria", "סיור בחווה", "Explorer la Ferme"),
        targetId: 3,
      },
      {
        id: 3,
        nav: "Explore the Farm",
        image: "/GrowArea.jpg",
        title: tx("Explore the Farm", "Explorar la Granja", "Explore the Farm", "Esplora la Fattoria", "סיור בחווה", "Explorer la Ferme"),
        subtitle: tx("Agriculture rooted in airport history, place, infrastructure, and purpose.", "Agricultura basada en historia aeroportuaria, lugar, infraestructura y propósito.", "Agriculture rooted in airport history, place, infrastructure, and purpose.", "Agricoltura radicata nella storia dell’aeroporto, nel luogo, nell’infrastruttura e nello scopo.", "חקלאות המחוברת להיסטוריית שדה התעופה, למקום, לתשתית ולמטרה.", "Agriculture enracinée dans l’histoire de l’aéroport, le lieu, l’infrastructure et le but."),
        startsAs: tx("A historic aviation site with land, access, visibility, and untapped community potential.", "Un sitio histórico de aviación con tierra, acceso, visibilidad y potencial comunitario.", "Historic aviation site with land, access, visibility, and community potential.", "Un sito storico dell’aviazione con terra, accesso, visibilità e potenziale comunitario.", "אתר תעופה היסטורי עם קרקע, גישה, נראות ופוטנציאל קהילתי.", "Un site aéronautique historique avec terre, accès, visibilité et potentiel communautaire."),
        experiences: [
          tx("Enter a functioning airport environment", "Entrar a un entorno aeroportuario activo", "Enter a functioning airport environment", "Entrare in un ambiente aeroportuale attivo", "להיכנס לסביבת שדה תעופה פעילה", "Entrer dans un environnement aéroportuaire actif"),
          tx("See FAA-approved growing areas beside aviation infrastructure", "Ver áreas de cultivo aprobadas por la FAA junto a infraestructura aérea", "See FAA-approved growing areas beside aviation infrastructure", "Vedere aree di coltivazione approvate dalla FAA accanto all’infrastruttura aeronautica", "לראות אזורי גידול מאושרים ליד תשתית תעופה", "Voir des zones de culture approuvées près de l’infrastructure aéronautique"),
          tx("Understand movement: people, food, resources, and opportunity", "Comprender el movimiento: personas, alimentos, recursos y oportunidad", "Understand movement: people, food, resources, and opportunity", "Comprendere il movimento: persone, cibo, risorse e opportunità", "להבין תנועה: אנשים, מזון, משאבים והזדמנות", "Comprendre le mouvement : personnes, nourriture, ressources et opportunité"),
          tx("Imagine the site as a food, learning, and agritourism destination", "Imaginar el sitio como destino de alimentos, aprendizaje y agroturismo", "Imagine the site as a food, learning, and agritourism destination", "Immaginare il sito come destinazione di cibo, apprendimento e agriturismo", "לדמיין את המקום כיעד מזון, למידה ותיירות חקלאית", "Imaginer le site comme destination alimentaire, éducative et agritouristique"),
        ],
        growsInto: [
          tx("A place-based food distribution and learning hub", "Un centro local de distribución de alimentos y aprendizaje", "Place-based food distribution and learning hub", "Un hub locale di distribuzione alimentare e apprendimento", "מרכז מקומי להפצת מזון ולמידה", "Un carrefour local de distribution alimentaire et d’apprentissage"),
          tx("A destination where aviation legacy supports community resilience", "Un destino donde el legado de aviación apoya la resiliencia comunitaria", "Destination where aviation legacy supports community resilience", "Una destinazione dove l’eredità dell’aviazione sostiene la resilienza comunitaria", "יעד שבו מורשת התעופה תומכת בחוסן קהילתי", "Une destination où l’héritage aéronautique soutient la résilience communautaire"),
        ],
        ecosystem: tx("The airport history gives the farm identity: movement through the air becomes movement of food, education, resources, and opportunity.", "La historia del aeropuerto da identidad a la granja: el movimiento por el aire se convierte en movimiento de alimentos, educación, recursos y oportunidad.", "The airport history gives the farm identity: movement through the air becomes movement of food, education, resources, and opportunity.", "La storia dell’aeroporto dà identità alla fattoria: il movimento nell’aria diventa movimento di cibo, educazione, risorse e opportunità.", "היסטוריית שדה התעופה מעניקה לחווה זהות: תנועה באוויר הופכת לתנועת מזון, חינוך, משאבים והזדמנות.", "L’histoire de l’aéroport donne une identité à la ferme : le mouvement aérien devient mouvement de nourriture, d’éducation, de ressources et d’opportunités."),
        nextStep: tx("Experience the land as the physical home of the ecosystem.", "Viva la tierra como el hogar físico del ecosistema.", "Experience the land as the physical home of the ecosystem.", "Vivi la terra come casa fisica dell’ecosistema.", "לחוות את הקרקע כבית הפיזי של המערכת.", "Découvrir la terre comme base physique de l’écosystème."),
        buttonLabel: tx("Go to Guest Journey", "Ir al Invitado", "Go to Guest Journey", "Vai all’Ospite", "לעבור לאורח", "Aller au parcours invité"),
        targetId: 4,
      },
      {
        id: 4,
        nav: "Guest",
        image: "/SAM_0220.JPG",
        title: tx("Guest Journey", "Recorrido del Invitado", "Guest Journey", "Percorso Ospite", "מסלול אורח", "Parcours Invité"),
        subtitle: tx("Guests discover the land, the story, the people, and the invitation to participate.", "Los invitados descubren la tierra, la historia, la gente y la invitación a participar.", "Guests discover the land, story, people, and invitation to participate.", "Gli ospiti scoprono terra, storia, persone e invito a partecipare.", "האורחים מגלים את הקרקע, הסיפור, האנשים וההזמנה להשתתף.", "Les invités découvrent la terre, l’histoire, les personnes et l’invitation à participer."),
        startsAs: tx("A curious visitor entering a destination that feels different from a typical farm or market.", "Un visitante curioso entrando a un destino diferente a una granja o mercado típico.", "Curious visitor entering a destination different from a typical farm or market.", "Un visitatore curioso entra in una destinazione diversa da una fattoria o mercato tipico.", "מבקר סקרן הנכנס ליעד שונה מחווה או שוק רגיל.", "Un visiteur curieux entre dans une destination différente d’une ferme ou d’un marché ordinaire."),
        experiences: [
          tx("Arrive at the historic airport farm setting", "Llegar al entorno agrícola del aeropuerto histórico", "Arrive at the historic airport farm setting", "Arrivare nel contesto agricolo dell’aeroporto storico", "להגיע לסביבת החווה בשדה התעופה ההיסטורי", "Arriver dans le cadre agricole de l’aéroport historique"),
          tx("Learn why food access and land use matter", "Aprender por qué importan el acceso a alimentos y el uso de la tierra", "Learn why food access and land use matter", "Capire perché contano accesso al cibo e uso della terra", "ללמוד למה גישה למזון ושימוש בקרקע חשובים", "Apprendre pourquoi l’accès à la nourriture et l’usage de la terre comptent"),
          tx("Meet pathways for customers, growers, youth, partners, and marketplace activity", "Conocer caminos para clientes, agricultores, jóvenes, socios y mercado", "Meet pathways for customers, growers, youth, partners, and marketplace activity", "Conoscere percorsi per clienti, coltivatori, giovani, partner e mercato", "להכיר מסלולים ללקוחות, מגדלים, נוער, שותפים ושוק", "Découvrir les parcours clients, producteurs, jeunes, partenaires et marché"),
        ],
        growsInto: [
          tx("Story carrier", "Portador de la historia", "Story carrier", "Portatore della storia", "נושא הסיפור", "Porteur de l’histoire"),
          tx("Volunteer, customer, donor, partner, or return visitor", "Voluntario, cliente, donante, socio o visitante frecuente", "Volunteer, customer, donor, partner, or return visitor", "Volontario, cliente, donatore, partner o visitatore di ritorno", "מתנדב, לקוח, תורם, שותף או מבקר חוזר", "Bénévole, client, donateur, partenaire ou visiteur régulier"),
        ],
        ecosystem: tx("Guests expand the ecosystem by carrying the story outward and inviting others in.", "Los invitados expanden el ecosistema al compartir la historia e invitar a otros.", "Guests expand the ecosystem by carrying the story outward and inviting others in.", "Gli ospiti espandono l’ecosistema portando fuori la storia e invitando altri.", "האורחים מרחיבים את המערכת על ידי הפצת הסיפור והזמנת אחרים.", "Les invités élargissent l’écosystème en partageant l’histoire et en invitant d’autres personnes."),
        nextStep: tx("Visit, share, invite someone, volunteer, or choose a deeper pathway.", "Visite, comparta, invite a alguien, sea voluntario o elija un camino más profundo.", "Visit, share, invite someone, volunteer, or choose a deeper pathway.", "Visita, condividi, invita qualcuno, fai volontariato o scegli un percorso più profondo.", "לבקר, לשתף, להזמין, להתנדב או לבחור מסלול עמוק יותר.", "Visiter, partager, inviter quelqu’un, faire du bénévolat ou choisir un parcours plus profond."),
        buttonLabel: tx("Go to Customer Journey", "Ir al Cliente", "Go to Customer Journey", "Vai al Cliente", "לעבור ללקוח", "Aller au parcours client"),
        targetId: 5,
      },
      {
        id: 5,
        nav: "Customer",
        image: "/SAM_0221.JPG",
        title: tx("Customer Journey", "Recorrido del Cliente", "Customer Journey", "Percorso Cliente", "מסלול לקוח", "Parcours Client"),
        subtitle: tx("Customers turn healthy choices into local circulation and community support.", "Los clientes convierten decisiones saludables en circulación local y apoyo comunitario.", "Customers turn healthy choices into local circulation and community support.", "I clienti trasformano scelte sane in circolazione locale e sostegno comunitario.", "לקוחות הופכים בחירות בריאות למחזור כלכלי מקומי ותמיכה קהילתית.", "Les clients transforment les choix sains en circulation locale et soutien communautaire."),
        startsAs: tx("A family, neighbor, institution, or buyer seeking fresh food, nutrition, and trust.", "Una familia, vecino, institución o comprador buscando alimentos frescos, nutrición y confianza.", "Family, neighbor, institution, or buyer seeking fresh food, nutrition, and trust.", "Famiglia, vicino, istituzione o cliente cerca cibo fresco, nutrizione e fiducia.", "משפחה, שכן, מוסד או קונה המחפש מזון טרי, תזונה ואמון.", "Une famille, un voisin, une institution ou un acheteur cherche nourriture fraîche, nutrition et confiance."),
        experiences: [
          tx("Discover fresh produce and seedlings", "Descubrir productos frescos y plántulas", "Discover fresh produce and seedlings", "Scoprire prodotti freschi e piantine", "לגלות תוצרת טרייה ושתילים", "Découvrir produits frais et plants"),
          tx("Learn nutrition and growing value", "Aprender valor nutricional y agrícola", "Learn nutrition and growing value", "Comprendere valore nutrizionale e agricolo", "ללמוד ערך תזונתי וחקלאי", "Comprendre la valeur nutritionnelle et agricole"),
          tx("Purchase, preorder, return, and share", "Comprar, preordenar, volver y compartir", "Purchase, preorder, return, and share", "Comprare, preordinare, tornare e condividere", "לקנות, להזמין מראש, לחזור ולשתף", "Acheter, précommander, revenir et partager"),
        ],
        growsInto: [
          tx("Repeat customer", "Cliente frecuente", "Repeat customer", "Cliente abituale", "לקוח חוזר", "Client régulier"),
          tx("Healthier household and local food supporter", "Hogar más saludable y apoyo alimentario local", "Healthier household and local food supporter", "Famiglia più sana e sostenitore del cibo locale", "משק בית בריא יותר ותומך במזון מקומי", "Foyer plus sain et soutien de l’alimentation locale"),
        ],
        ecosystem: tx("Customer purchases keep food, dollars, trust, and demand circulating locally.", "Las compras mantienen alimentos, dinero, confianza y demanda circulando localmente.", "Customer purchases keep food, dollars, trust, and demand circulating locally.", "Gli acquisti mantengono cibo, denaro, fiducia e domanda nel territorio.", "קניות הלקוחות משאירות מזון, כסף, אמון וביקוש בקהילה.", "Les achats gardent nourriture, argent, confiance et demande dans la communauté."),
        nextStep: tx("Buy fresh food, preorder seasonal items, return regularly, and invite others to shop local.", "Compre alimentos frescos, preordene productos de temporada, vuelva y invite a otros a comprar local.", "Buy fresh food, preorder seasonal items, return regularly, and invite others to shop local.", "Compra cibo fresco, preordina prodotti stagionali, torna spesso e invita altri a comprare locale.", "לקנות מזון טרי, להזמין עונתי, לחזור בקביעות ולהזמין אחרים לקנות מקומי.", "Acheter frais, précommander la saison, revenir souvent et inviter d’autres à acheter local."),
        buttonLabel: tx("Go to Marketplace", "Ir al Mercado", "Go to Marketplace", "Vai al Mercato", "לעבור לשוק", "Aller au marché"),
        targetId: 6,
      },
      {
        id: 6,
        nav: "Marketplace",
        image: "/GrowersSupplyMarket.jpg",
        title: tx("Marketplace Journey", "Recorrido del Mercado", "Marketplace Journey", "Percorso Mercato", "מסלול שוק", "Parcours Marché"),
        subtitle: tx("Food, tools, knowledge, growers, buyers, and opportunity move through one shared market system.", "Alimentos, herramientas, conocimiento, agricultores, compradores y oportunidad se mueven por un mercado compartido.", "Food, tools, knowledge, growers, buyers, and opportunity move through one shared market system.", "Cibo, strumenti, conoscenza, coltivatori, clienti e opportunità si muovono in un sistema di mercato condiviso.", "מזון, כלים, ידע, מגדלים, קונים והזדמנות נעים במערכת שוק משותפת.", "Nourriture, outils, savoir, producteurs, acheteurs et opportunités circulent dans un marché partagé."),
        startsAs: tx("Separate growers, separate customers, scattered supply, and limited market access.", "Agricultores separados, clientes separados, suministro disperso y acceso limitado al mercado.", "Separate growers, customers, scattered supply, and limited market access.", "Coltivatori separati, clienti separati, offerta dispersa e accesso limitato al mercato.", "מגדלים נפרדים, לקוחות נפרדים, אספקה מפוזרת וגישה מוגבלת לשוק.", "Producteurs séparés, clients séparés, offre dispersée et accès limité au marché."),
        experiences: [
          tx("List available products and supplies", "Listar productos y suministros disponibles", "List available products and supplies", "Elencare prodotti e forniture disponibili", "לפרסם מוצרים ואספקה זמינים", "Lister les produits et fournitures disponibles"),
          tx("Connect buyers to local growers", "Conectar compradores con agricultores locales", "Connect buyers to local growers", "Collegare clienti a coltivatori locali", "לחבר קונים למגדלים מקומיים", "Relier acheteurs et producteurs locaux"),
          tx("Coordinate pickup, preorder, education, and supply movement", "Coordinar recogida, preorden, educación y movimiento de suministros", "Coordinate pickup, preorder, education, and supply movement", "Coordinare ritiro, preordine, educazione e movimento di forniture", "לתאם איסוף, הזמנה מראש, חינוך ותנועת אספקה", "Coordonner retrait, précommande, éducation et circulation des fournitures"),
          tx("Support local growers without forcing each grower to travel everywhere", "Apoyar agricultores sin exigir que cada uno viaje a todas partes", "Support local growers without each grower traveling everywhere", "Sostenere coltivatori senza farli viaggiare ovunque", "לתמוך במגדלים בלי שכל אחד יצטרך לנסוע לכל מקום", "Soutenir les producteurs sans les obliger à aller partout"),
        ],
        growsInto: [
          tx("Regional growers supply market", "Mercado regional de suministros para agricultores", "Regional growers supply market", "Mercato regionale per coltivatori", "שוק אזורי לציוד ותוצרת מגדלים", "Marché régional d’approvisionnement des producteurs"),
          tx("Stronger local grower economy", "Economía agrícola local más fuerte", "Stronger local grower economy", "Economia agricola locale più forte", "כלכלת מגדלים מקומית חזקה יותר", "Économie locale des producteurs renforcée"),
        ],
        ecosystem: tx("The marketplace is the circulation point where food, supplies, information, buyers, growers, and institutions connect.", "El mercado es el punto de circulación donde alimentos, suministros, información, compradores, agricultores e instituciones se conectan.", "The marketplace is where food, supplies, information, buyers, growers, and institutions connect.", "Il mercato è il punto dove cibo, forniture, informazioni, clienti, coltivatori e istituzioni si collegano.", "השוק הוא נקודת המחזור שבה מזון, אספקה, מידע, קונים, מגדלים ומוסדות מתחברים.", "Le marché est le point de circulation où nourriture, fournitures, information, acheteurs, producteurs et institutions se relient."),
        nextStep: tx("Shop, sell, supply, preorder, educate, sponsor, or help build the regional market.", "Comprar, vender, proveer, preordenar, educar, patrocinar o construir el mercado regional.", "Shop, sell, supply, preorder, educate, sponsor, or help build the regional market.", "Comprare, vendere, fornire, preordinare, educare, sponsorizzare o costruire il mercato regionale.", "לקנות, למכור, לספק, להזמין מראש, ללמד, לתת חסות או לבנות את השוק האזורי.", "Acheter, vendre, fournir, précommander, éduquer, parrainer ou bâtir le marché régional."),
        buttonLabel: tx("Go to Grower Journey", "Ir al Agricultor", "Go to Grower Journey", "Vai al Coltivatore", "לעבור למגדל", "Aller au producteur"),
        targetId: 7,
      },
      {
        id: 7,
        nav: "Grower",
        image: "/SAM_0223.JPG",
        title: tx("Grower Journey", "Recorrido del Agricultor", "Grower Journey", "Percorso Coltivatore", "מסלול מגדל", "Parcours Producteur"),
        subtitle: tx("Growers need tools, knowledge, infrastructure, visibility, and market support.", "Los agricultores necesitan herramientas, conocimiento, infraestructura, visibilidad y apoyo de mercado.", "Growers need tools, knowledge, infrastructure, visibility, and market support.", "I coltivatori hanno bisogno di strumenti, conoscenza, infrastruttura, visibilità e mercato.", "מגדלים צריכים כלים, ידע, תשתית, נראות ותמיכת שוק.", "Les producteurs ont besoin d’outils, de savoir, d’infrastructure, de visibilité et de marché."),
        startsAs: tx("A grower, gardener, farmer, or aspiring producer with land, interest, skill, or potential.", "Un agricultor, jardinero o productor potencial con tierra, interés, habilidad o potencial.", "Grower, gardener, farmer, or aspiring producer with land, interest, skill, or potential.", "Coltivatore, giardiniere, agricoltore o produttore emergente con terra, interesse, abilità o potenziale.", "מגדל, גנן, חקלאי או יצרן עתידי עם קרקע, עניין, מיומנות או פוטנציאל.", "Un producteur, jardinier, agriculteur ou aspirant producteur avec terre, intérêt, compétence ou potentiel."),
        experiences: [
          tx("Learn growing methods and season planning", "Aprender métodos de cultivo y planificación de temporada", "Learn growing methods and season planning", "Imparare metodi di coltivazione e pianificazione stagionale", "ללמוד שיטות גידול ותכנון עונתי", "Apprendre méthodes de culture et planification saisonnière"),
          tx("Access tools, demonstrations, seedlings, compost, fencing, water, and supplies", "Acceder a herramientas, demostraciones, plántulas, compost, cercas, agua y suministros", "Access tools, demonstrations, seedlings, compost, fencing, water, and supplies", "Accedere a strumenti, dimostrazioni, piantine, compost, recinzioni, acqua e forniture", "לקבל כלים, הדגמות, שתילים, קומפוסט, גידור, מים ואספקה", "Accéder aux outils, démonstrations, plants, compost, clôtures, eau et fournitures"),
          tx("Reach customers and regional purchasing opportunities", "Llegar a clientes y oportunidades regionales de compra", "Reach customers and regional purchasing opportunities", "Raggiungere clienti e opportunità d’acquisto regionali", "להגיע ללקוחות ולהזדמנויות רכישה אזוריות", "Atteindre clients et opportunités d’achat régionales"),
        ],
        growsInto: [
          tx("Confident producer", "Productor seguro", "Confident producer", "Produttore sicuro", "יצרן בטוח", "Producteur confiant"),
          tx("Regional food contributor and possible enterprise owner", "Colaborador alimentario regional y posible empresario", "Regional food contributor and possible enterprise owner", "Contributore alimentare regionale e possibile imprenditore", "תורם מזון אזורי ואולי בעל עסק", "Contributeur alimentaire régional et possible entrepreneur"),
        ],
        ecosystem: tx("Growers are the production base. The ecosystem reduces isolation by connecting growers to tools, knowledge, buyers, and community demand.", "Los agricultores son la base productiva. El ecosistema reduce aislamiento conectándolos con herramientas, conocimiento, compradores y demanda comunitaria.", "Growers are the production base. The ecosystem reduces isolation by connecting them to tools, knowledge, buyers, and demand.", "I coltivatori sono la base produttiva. L’ecosistema riduce isolamento collegandoli a strumenti, conoscenza, clienti e domanda.", "המגדלים הם בסיס הייצור. המערכת מפחיתה בידוד ומחברת אותם לכלים, ידע, קונים וביקוש.", "Les producteurs sont la base productive. L’écosystème réduit l’isolement en les reliant aux outils, savoirs, acheteurs et demande."),
        nextStep: tx("Become a grower, strengthen what you already grow, or connect your harvest to the marketplace.", "Conviértase en agricultor, fortalezca lo que cultiva o conecte su cosecha al mercado.", "Become a grower, strengthen what you grow, or connect your harvest to the marketplace.", "Diventa coltivatore, rafforza ciò che coltivi o collega il raccolto al mercato.", "להפוך למגדל, לחזק את מה שכבר מגדלים או לחבר את היבול לשוק.", "Devenir producteur, renforcer ce que vous cultivez ou connecter votre récolte au marché."),
        buttonLabel: tx("Go to Youth Workforce", "Ir al Programa Juvenil", "Go to Youth Workforce", "Vai ai Giovani", "לעבור לנוער", "Aller au programme jeunesse"),
        targetId: 8,
      },
      {
        id: 8,
        nav: "Youth Workforce",
        image: "/SAM_0225.JPG",
        title: tx("Youth Workforce Program Pathway", "Ruta del Programa Juvenil", "Youth Workforce Program Pathway", "Percorso Programma Giovani", "מסלול תוכנית נוער", "Parcours Programme Jeunesse"),
        subtitle: tx("June 8 – August 28, 2026 | 9:00 AM – 2:00 PM | Monday–Friday", "8 de junio – 28 de agosto de 2026 | 9:00 AM – 2:00 PM | lunes a viernes", "June 8 – August 28, 2026 | 9:00 AM – 2:00 PM | Monday–Friday", "8 giugno – 28 agosto 2026 | 9:00–14:00 | lunedì–venerdì", "8 ביוני – 28 באוגוסט 2026 | 9:00–14:00 | שני–שישי", "8 juin – 28 août 2026 | 9 h – 14 h | lundi–vendredi"),
        startsAs: tx("A young person enters a structured summer work experience with supervisors, parent connection, safety expectations, and daily learning.", "Un joven entra en una experiencia laboral estructurada con supervisores, conexión familiar, seguridad y aprendizaje diario.", "A young person enters structured summer work with supervisors, parent connection, safety, and daily learning.", "Un giovane entra in un’esperienza estiva strutturata con supervisori, famiglie, sicurezza e apprendimento.", "צעיר נכנס לחוויית עבודה קיצית מובנית עם מדריכים, הורים, בטיחות ולמידה יומית.", "Un jeune entre dans une expérience de travail structurée avec supervision, lien parental, sécurité et apprentissage quotidien."),
        experiences: [
          tx("Orientation with youth and parents", "Orientación con jóvenes y padres", "Orientation with youth and parents", "Orientamento con giovani e genitori", "הכוונה עם נוער והורים", "Orientation avec jeunes et parents"),
          tx("Safety, PPE, attendance, and expectations", "Seguridad, PPE, asistencia y expectativas", "Safety, PPE, attendance, and expectations", "Sicurezza, DPI, presenza e aspettative", "בטיחות, ציוד מגן, נוכחות וציפיות", "Sécurité, EPI, présence et attentes"),
          tx("Daily supervised farm work teams", "Equipos diarios de trabajo agrícola supervisado", "Daily supervised farm work teams", "Squadre agricole giornaliere supervisionate", "צוותי עבודה חקלאית בפיקוח", "Équipes agricoles supervisées chaque jour"),
          tx("Skills: growing, tools, teamwork, responsibility", "Habilidades: cultivo, herramientas, equipo y responsabilidad", "Skills: growing, tools, teamwork, responsibility", "Competenze: coltivazione, strumenti, squadra e responsabilità", "מיומנויות: גידול, כלים, עבודת צוות ואחריות", "Compétences : culture, outils, équipe et responsabilité"),
          tx("Proverbs, reflection, and life lessons", "Proverbios, reflexión y lecciones de vida", "Proverbs, reflection, and life lessons", "Proverbi, riflessione e lezioni di vita", "פתגמים, הרהור ושיעורי חיים", "Proverbes, réflexion et leçons de vie"),
          tx("Parent updates, progress, leadership, and completion", "Actualizaciones familiares, progreso, liderazgo y finalización", "Parent updates, progress, leadership, and completion", "Aggiornamenti familiari, progresso, leadership e completamento", "עדכוני הורים, התקדמות, מנהיגות והשלמה", "Mises à jour familiales, progrès, leadership et achèvement"),
        ],
        growsInto: [
          tx("Workforce readiness", "Preparación laboral", "Workforce readiness", "Preparazione al lavoro", "מוכנות לעבודה", "Préparation professionnelle"),
          tx("Confidence, responsibility, and communication", "Confianza, responsabilidad y comunicación", "Confidence, responsibility, and communication", "Fiducia, responsabilità e comunicazione", "ביטחון, אחריות ותקשורת", "Confiance, responsabilité et communication"),
          tx("Future growers, workers, entrepreneurs, and leaders", "Futuros agricultores, trabajadores, empresarios y líderes", "Future growers, workers, entrepreneurs, and leaders", "Futuri coltivatori, lavoratori, imprenditori e leader", "מגדלים, עובדים, יזמים ומנהיגים עתידיים", "Futurs producteurs, travailleurs, entrepreneurs et leaders"),
        ],
        ecosystem: tx("Youth are not just workers. They learn how food, land, responsibility, family, and community connect.", "Los jóvenes no solo trabajan. Aprenden cómo se conectan alimentos, tierra, responsabilidad, familia y comunidad.", "Youth are not just workers. They learn how food, land, responsibility, family, and community connect.", "I giovani non sono solo lavoratori. Imparano come cibo, terra, responsabilità, famiglia e comunità si collegano.", "הנוער אינו רק כוח עבודה. הם לומדים כיצד מזון, קרקע, אחריות, משפחה וקהילה מתחברים.", "Les jeunes ne sont pas seulement des travailleurs. Ils apprennent comment nourriture, terre, responsabilité, famille et communauté se relient."),
        nextStep: tx("Complete orientation, join a supervised team, build skills, and finish ready for the next opportunity.", "Completar orientación, unirse a un equipo supervisado, desarrollar habilidades y terminar listo para la próxima oportunidad.", "Complete orientation, join a supervised team, build skills, and finish ready for the next opportunity.", "Completare l’orientamento, unirsi a un team supervisionato, sviluppare competenze e prepararsi alla prossima opportunità.", "להשלים הכוונה, להצטרף לצוות בפיקוח, לבנות מיומנויות ולהיות מוכן להזדמנות הבאה.", "Compléter l’orientation, rejoindre une équipe supervisée, développer des compétences et être prêt pour la prochaine opportunité."),
        buttonLabel: tx("Go to Partner Journey", "Ir al Socio", "Go to Partner Journey", "Vai al Partner", "לעבור לשותף", "Aller au partenaire"),
        targetId: 9,
      },
      {
        id: 9,
        nav: "Partner",
        image: "/SAM_0226.JPG",
        title: tx("Partner Journey", "Recorrido del Socio", "Partner Journey", "Percorso Partner", "מסלול שותף", "Parcours Partenaire"),
        subtitle: tx("Partners align resources, knowledge, infrastructure, funding, and impact.", "Los socios alinean recursos, conocimiento, infraestructura, fondos e impacto.", "Partners align resources, knowledge, infrastructure, funding, and impact.", "I partner allineano risorse, conoscenza, infrastruttura, fondi e impatto.", "שותפים מחברים משאבים, ידע, תשתית, מימון והשפעה.", "Les partenaires alignent ressources, savoir, infrastructure, financement et impact."),
        startsAs: tx("An organization, business, school, agency, funder, or community leader with an aligned mission.", "Una organización, negocio, escuela, agencia, financiador o líder comunitario con misión alineada.", "Organization, business, school, agency, funder, or community leader with aligned mission.", "Organizzazione, impresa, scuola, agenzia, finanziatore o leader con missione affine.", "ארגון, עסק, בית ספר, סוכנות, מממן או מנהיג קהילתי עם משימה מתאימה.", "Organisation, entreprise, école, agence, financeur ou leader communautaire avec mission alignée."),
        experiences: [
          tx("Identify shared community need", "Identificar necesidad comunitaria compartida", "Identify shared community need", "Identificare un bisogno comunitario condiviso", "לזהות צורך קהילתי משותף", "Identifier un besoin communautaire partagé"),
          tx("Match resources to a visible ecosystem role", "Alinear recursos con un rol visible del ecosistema", "Match resources to a visible ecosystem role", "Associare risorse a un ruolo visibile dell’ecosistema", "להתאים משאבים לתפקיד ברור במערכת", "Associer les ressources à un rôle visible dans l’écosystème"),
          tx("Support infrastructure, education, health, workforce, supplies, or market access", "Apoyar infraestructura, educación, salud, trabajo, suministros o mercado", "Support infrastructure, education, health, workforce, supplies, or market access", "Sostenere infrastruttura, educazione, salute, lavoro, forniture o mercato", "לתמוך בתשתית, חינוך, בריאות, כוח עבודה, אספקה או שוק", "Soutenir infrastructure, éducation, santé, emploi, fournitures ou marché"),
        ],
        growsInto: [
          tx("Impact partner", "Socio de impacto", "Impact partner", "Partner d’impatto", "שותף השפעה", "Partenaire d’impact"),
          tx("Community investor and ecosystem builder", "Inversionista comunitario y constructor del ecosistema", "Community investor and ecosystem builder", "Investitore comunitario e costruttore dell’ecosistema", "משקיע קהילתי ובונה מערכת", "Investisseur communautaire et bâtisseur d’écosystème"),
        ],
        ecosystem: tx("Partners expand capacity, credibility, education, funding, services, safety, and long-term sustainability.", "Los socios amplían capacidad, credibilidad, educación, fondos, servicios, seguridad y sostenibilidad.", "Partners expand capacity, credibility, education, funding, services, safety, and sustainability.", "I partner ampliano capacità, credibilità, educazione, fondi, servizi, sicurezza e sostenibilità.", "שותפים מרחיבים יכולת, אמינות, חינוך, מימון, שירותים, בטיחות וקיימות.", "Les partenaires renforcent capacité, crédibilité, éducation, financement, services, sécurité et durabilité."),
        nextStep: tx("Partner, sponsor, educate, fund, volunteer, provide supplies, or open a new pathway.", "Asociarse, patrocinar, educar, financiar, servir, proveer suministros o abrir un nuevo camino.", "Partner, sponsor, educate, fund, volunteer, provide supplies, or open a new pathway.", "Collaborare, sponsorizzare, educare, finanziare, volontariato, fornire materiali o aprire un nuovo percorso.", "לשתף פעולה, לתת חסות, לחנך, לממן, להתנדב, לספק ציוד או לפתוח מסלול חדש.", "Collaborer, parrainer, éduquer, financer, faire du bénévolat, fournir ou ouvrir un nouveau parcours."),
        buttonLabel: tx("Go to Value-Added", "Ir a Valor Agregado", "Go to Value-Added", "Vai al Valore Aggiunto", "לעבור לערך מוסף", "Aller à la valeur ajoutée"),
        targetId: 10,
      },
      {
        id: 10,
        nav: "Value-Added",
        image: "/SAM_0229.JPG",
        title: tx("Value-Added Journey", "Recorrido de Valor Agregado", "Value-Added Journey", "Percorso Valore Aggiunto", "מסלול ערך מוסף", "Parcours Valeur Ajoutée"),
        subtitle: tx("The farm grows beyond production into education, wellness, tourism, products, and enterprise.", "La granja crece más allá de producción hacia educación, bienestar, turismo, productos y empresa.", "The farm grows beyond production into education, wellness, tourism, products, and enterprise.", "La fattoria cresce oltre produzione verso educazione, benessere, turismo, prodotti e impresa.", "החווה גדלה מעבר לייצור אל חינוך, בריאות, תיירות, מוצרים ויזמות.", "La ferme dépasse la production vers éducation, bien-être, tourisme, produits et entreprise."),
        startsAs: tx("Fresh food, seedlings, land, skills, stories, demonstrations, and community knowledge.", "Alimentos frescos, plántulas, tierra, habilidades, historias, demostraciones y conocimiento comunitario.", "Fresh food, seedlings, land, skills, stories, demonstrations, and community knowledge.", "Cibo fresco, piantine, terra, competenze, storie, dimostrazioni e conoscenza comunitaria.", "מזון טרי, שתילים, קרקע, מיומנויות, סיפורים, הדגמות וידע קהילתי.", "Nourriture fraîche, plants, terre, compétences, histoires, démonstrations et savoir communautaire."),
        experiences: [
          tx("Create products from farm activity", "Crear productos desde la actividad agrícola", "Create products from farm activity", "Creare prodotti dall’attività agricola", "ליצור מוצרים מפעילות החווה", "Créer des produits à partir de l’activité agricole"),
          tx("Teach preservation, nutrition, growing, and entrepreneurship", "Enseñar conservación, nutrición, cultivo y emprendimiento", "Teach preservation, nutrition, growing, and entrepreneurship", "Insegnare conservazione, nutrizione, coltivazione e imprenditoria", "ללמד שימור, תזונה, גידול ויזמות", "Enseigner conservation, nutrition, culture et entrepreneuriat"),
          tx("Host experiences that make the farm a destination", "Crear experiencias que hacen de la granja un destino", "Host experiences that make the farm a destination", "Ospitare esperienze che rendono la fattoria una destinazione", "לאפשר חוויות שהופכות את החווה ליעד", "Accueillir des expériences qui font de la ferme une destination"),
        ],
        growsInto: [
          tx("New revenue streams", "Nuevas fuentes de ingreso", "New revenue streams", "Nuove entrate", "מקורות הכנסה חדשים", "Nouvelles sources de revenus"),
          tx("Entrepreneurship, agritourism, education, and long-term sustainability", "Emprendimiento, agroturismo, educación y sostenibilidad", "Entrepreneurship, agritourism, education, and long-term sustainability", "Imprenditoria, agriturismo, educazione e sostenibilità", "יזמות, תיירות חקלאית, חינוך וקיימות", "Entrepreneuriat, agritourisme, éducation et durabilité"),
        ],
        ecosystem: tx("Value-added activity helps the ecosystem sustain itself while creating more reasons to visit, learn, buy, invest, and return.", "El valor agregado ayuda al ecosistema a sostenerse y crea más razones para visitar, aprender, comprar, invertir y volver.", "Value-added activity helps sustain the ecosystem and creates more reasons to visit, learn, buy, invest, and return.", "Il valore aggiunto sostiene l’ecosistema e crea più motivi per visitare, imparare, comprare, investire e tornare.", "פעילות ערך מוסף מחזקת את קיימות המערכת ויוצרת סיבות לבקר, ללמוד, לקנות, להשקיע ולחזור.", "La valeur ajoutée soutient l’écosystème et crée plus de raisons de visiter, apprendre, acheter, investir et revenir."),
        nextStep: tx("Create, teach, preserve, sell, sponsor, invest, or help design the next farm experience.", "Crear, enseñar, conservar, vender, patrocinar, invertir o diseñar la próxima experiencia.", "Create, teach, preserve, sell, sponsor, invest, or help design the next farm experience.", "Creare, insegnare, conservare, vendere, sponsorizzare, investire o progettare la prossima esperienza.", "ליצור, ללמד, לשמר, למכור, לתת חסות, להשקיע או לעצב את החוויה הבאה.", "Créer, enseigner, préserver, vendre, parrainer, investir ou concevoir la prochaine expérience."),
        buttonLabel: tx("Go to Feedback", "Ir a Comentarios", "Go to Feedback", "Vai al Feedback", "לעבור למשוב", "Aller aux commentaires"),
        targetId: 11,
      },
      {
        id: 11,
        nav: "Feedback",
        image: "/ConnectFoodEcosystem_withimages.jpeg",
        containImage: true,
        title: tx("Thank You", "Gracias", "Salamat", "Grazie", "תודה", "Merci"),
        subtitle: tx("This demo is an invitation to respond, participate, share, and shape what comes next.", "Esta demo invita a responder, participar, compartir y formar lo que sigue.", "This demo invites response, participation, sharing, and next steps.", "Questa demo invita a rispondere, partecipare, condividere e costruire il futuro.", "הדגמה זו מזמינה תגובה, השתתפות, שיתוף ועיצוב העתיד.", "Cette démo invite à répondre, participer, partager et façonner la suite."),
        startsAs: tx("A viewer who has completed the ecosystem journey and understands the role pathways.", "Un espectador que completó el recorrido y entiende los caminos de participación.", "Viewer who completed the ecosystem journey and understands the role pathways.", "Uno spettatore che ha completato il percorso e comprende i ruoli.", "צופה שסיים את מסע המערכת ומבין את מסלולי התפקידים.", "Un spectateur qui a terminé le parcours et comprend les rôles."),
        experiences: [
          tx("Review the role that fits you", "Revisar el rol que le corresponde", "Review the role that fits you", "Rivedere il ruolo adatto", "לבחון את התפקיד המתאים", "Revoir le rôle qui vous correspond"),
          tx("Share feedback on the experience", "Compartir comentarios sobre la experiencia", "Share feedback on the experience", "Condividere feedback sull’esperienza", "לשתף משוב על החוויה", "Partager un avis sur l’expérience"),
          tx("Contact Bronson Family Farm", "Contactar a Bronson Family Farm", "Contact Bronson Family Farm", "Contattare Bronson Family Farm", "ליצור קשר עם Bronson Family Farm", "Contacter Bronson Family Farm"),
          tx("Invite someone else into the ecosystem", "Invitar a alguien más al ecosistema", "Invite someone else into the ecosystem", "Invitare qualcun altro nell’ecosistema", "להזמין מישהו נוסף למערכת", "Inviter quelqu’un d’autre dans l’écosystème"),
        ],
        growsInto: [
          tx("Participant", "Participante", "Participant", "Partecipante", "משתתף", "Participant"),
          tx("Supporter, customer, grower, partner, investor, volunteer, or advocate", "Apoyo, cliente, agricultor, socio, inversionista, voluntario o defensor", "Supporter, customer, grower, partner, investor, volunteer, or advocate", "Sostenitore, cliente, coltivatore, partner, investitore, volontario o promotore", "תומך, לקוח, מגדל, שותף, משקיע, מתנדב או פעיל", "Soutien, client, producteur, partenaire, investisseur, bénévole ou ambassadeur"),
        ],
        ecosystem: tx("Feedback improves the ecosystem before it is shared more widely with partners, funders, growers, families, and the community.", "Los comentarios mejoran el ecosistema antes de compartirlo más ampliamente con socios, financiadores, agricultores, familias y la comunidad.", "Feedback improves the ecosystem before it is shared more widely with partners, funders, growers, families, and community.", "Il feedback migliora l’ecosistema prima che venga condiviso con partner, finanziatori, coltivatori, famiglie e comunità.", "משוב משפר את המערכת לפני שיתוף רחב יותר עם שותפים, מממנים, מגדלים, משפחות וקהילה.", "Les avis améliorent l’écosystème avant un partage plus large avec partenaires, financeurs, producteurs, familles et communauté."),
        nextStep: tx("Contact: 330-275-1604 | cburgess@bronsonfamilyfarm.com | www.bronsonfamilyfarm.com", "Contacto: 330-275-1604 | cburgess@bronsonfamilyfarm.com | www.bronsonfamilyfarm.com", "Contact: 330-275-1604 | cburgess@bronsonfamilyfarm.com | www.bronsonfamilyfarm.com", "Contatto: 330-275-1604 | cburgess@bronsonfamilyfarm.com | www.bronsonfamilyfarm.com", "יצירת קשר: 330-275-1604 | cburgess@bronsonfamilyfarm.com | www.bronsonfamilyfarm.com", "Contact : 330-275-1604 | cburgess@bronsonfamilyfarm.com | www.bronsonfamilyfarm.com"),
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
    }, 15000);

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
          padding: 22px 26px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
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
          font-size: clamp(30px, 3.8vw, 54px);
          line-height: 0.96;
          margin: 4px 0 8px;
          letter-spacing: -0.04em;
        }
        .subtitle {
          font-size: clamp(15px, 1.25vw, 20px);
          line-height: 1.22;
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
          padding: 11px 13px;
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
          line-height: 1.22;
          font-size: 14.5px;
        }
        ul {
          margin: 0;
          padding-left: 18px;
        }
        li {
          margin: 3px 0;
          line-height: 1.18;
          font-size: 13.5px;
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
              <div className="card-title">Next Step</div>
              <p>{t(active.nextStep)}</p>
            </div>
          </div>

          <div className="actions">
            <div className="nav-row">
              <button onClick={() => goToId(1)}>Start</button>
              <button onClick={back}>Back</button>
              <button className="active" onClick={next}>Next</button>
              <button className={guidedTour ? "active" : "primary"} onClick={() => setGuidedTour((value) => !value)}>
                {guidedTour ? "Pause Tour" : "Begin Guided Tour"}
              </button>
              <button className="primary" onClick={() => goToId(11)}>Share Feedback</button>
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
