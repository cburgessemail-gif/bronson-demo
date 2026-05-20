const slides: Slide[] = [
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
      tx("Choose a role", "Elegir una función", "Pumili ng role", "Scegliere un ruolo", "לבחור תפקיד", "Choisir un rôle"),
    ],
    growsInto: [
      tx("Informed participant", "Participante informado", "Informed participant", "Partecipante informato", "משתתף מודע", "Participant informé"),
      tx("Supporter or partner", "Apoyo o socio", "Supporter or partner", "Sostenitore o partner", "תומך או שותף", "Soutien ou partenaire"),
    ],
    ecosystem: tx("Every role connects back to food access, education, workforce, and community.", "Cada función conecta alimentos, educación, trabajo y comunidad.", "Bawat role ay konektado sa food access, education, workforce, at community.", "Ogni ruolo collega cibo, educazione, lavoro e comunità.", "כל תפקיד מתחבר למזון, חינוך, עבודה וקהילה.", "Chaque rôle relie nourriture, éducation, travail et communauté."),
    nextStep: tx("Begin the guided tour or select a pathway.", "Comience el recorrido o seleccione un camino.", "Simulan ang tour o pumili ng pathway.", "Inizia il tour o scegli un percorso.", "התחל סיור או בחר מסלול.", "Commencer la visite ou choisir un parcours."),
  },

  {
    id: 2,
    nav: "Connected Ecosystem",
    image: "/ConnectFoodEcosystem_withimages.jpeg",
    containImage: true,
    title: tx("Connected Ecosystem", "Ecosistema Conectado", "Connected Ecosystem", "Ecosistema Connesso", "מערכת מחוברת", "Écosystème Connecté"),
    subtitle: tx("A living network where each role strengthens the whole.", "Una red viva donde cada función fortalece el conjunto.", "Buhay na network kung saan bawat role ay mahalaga.", "Una rete viva dove ogni ruolo rafforza il tutto.", "מערכת חיה שבה כל תפקיד מחזק את הכלל.", "Un réseau vivant où chaque rôle renforce l’ensemble."),
    startsAs: tx("Separate needs: food, learning, work, market, and health.", "Necesidades separadas: alimentos, aprendizaje, trabajo, mercado y salud.", "Hiwa-hiwalay na needs: food, learning, work, market, health.", "Bisogni separati: cibo, apprendimento, lavoro e salute.", "צרכים נפרדים: מזון, למידה, עבודה, שוק ובריאות.", "Besoins séparés : nourriture, apprentissage, travail, marché et santé."),
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
  },

  {
    id: 6,
    nav: "Marketplace",
    image: "/SAM_0222.JPG",
    title: tx("Marketplace Journey", "Recorrido del Mercado", "Marketplace Journey", "Percorso Mercato", "מסלול שוק", "Parcours Marché"),
    subtitle: tx("The food moves. The grower does not have to travel everywhere.", "La comida se mueve. El agricultor no viaja a todas partes.", "The food moves. The grower does not travel everywhere.", "Il cibo si muove. Il coltivatore non va ovunque.", "המזון נע. המגדל לא נוסע לכל מקום.", "La nourriture circule. Le producteur ne va pas partout."),
    startsAs: tx("Separate growers and separate buyers.", "Productores y compradores separados.", "Separate growers and buyers.", "Coltivatori e clienti separati.", "מגדלים וקונים נפרדים.", "Producteurs et acheteurs séparés."),
    experiences: [
      tx("List products", "Listar productos", "List products", "Elencare prodotti", "לפרסם מוצרים", "Lister les produits"),
      tx("Connect buyers", "Conectar compradores", "Connect buyers", "Collegare clienti", "לחבר קונים", "Relier les acheteurs"),
      tx("Coordinate pickup", "Coordinar recogida", "Coordinate pickup", "Coordinare ritiro", "לתאם איסוף", "Coordonner le retrait"),
    ],
    growsInto: [
      tx("Regional food hub", "Centro regional de alimentos", "Regional food hub", "Centro alimentare regionale", "מרכז מזון אזורי", "Carrefour alimentaire régional"),
      tx("Stronger grower economy", "Economía agrícola más fuerte", "Stronger grower economy", "Economia agricola più forte", "כלכלת מגדלים חזקה יותר", "Économie agricole renforcée"),
    ],
    ecosystem: tx("The marketplace connects growers, customers, institutions, and distribution.", "El mercado conecta agricultores, clientes, instituciones y distribución.", "Marketplace connects growers, customers, institutions, and distribution.", "Il mercato collega coltivatori, clienti e distribuzione.", "השוק מחבר מגדלים, לקוחות, מוסדות והפצה.", "Le marché relie producteurs, clients, institutions et distribution."),
    nextStep: tx("Shop, sell, supply, or help build the market.", "Comprar, vender, proveer o construir el mercado.", "Shop, sell, supply, or help build.", "Comprare, vendere, fornire o costruire.", "לקנות, למכור, לספק או לבנות.", "Acheter, vendre, fournir ou construire."),
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
  },

  {
    id: 8,
    nav: "Youth Workforce",
    image: "/SAM_0225.JPG",
    title: tx("Youth Workforce Journey", "Recorrido Juvenil", "Youth Workforce Journey", "Percorso Giovani", "מסלול נוער", "Parcours Jeunesse"),
    subtitle: tx("June 8 – August 28, 2026", "8 de Junio – 28 de Agosto de 2026", "June 8 – August 28, 2026", "8 Giugno – 28 Agosto 2026", "8 ביוני – 28 באוגוסט 2026", "8 Juin – 28 Août 2026"),
    startsAs: tx("A young person entering a structured summer work experience.", "Un joven entrando a una experiencia laboral estructurada.", "Young person entering structured summer work.", "Un giovane entra in un’esperienza strutturata.", "צעיר הנכנס לחוויית עבודה מובנית.", "Un jeune entrant dans une expérience structurée."),
    experiences: [
      tx("Parent/youth orientation", "Orientación padres/jóvenes", "Parent/youth orientation", "Orientamento genitori/giovani", "הכוונת הורים/נוער", "Orientation parents/jeunes"),
      tx("Safety and PPE", "Seguridad y PPE", "Safety and PPE", "Sicurezza e DPI", "בטיחות וציוד מגן", "Sécurité et EPI"),
      tx("Farm teamwork", "Trabajo agrícola en equipo", "Farm teamwork", "Lavoro agricolo di squadra", "עבודת צוות חקלאית", "Travail agricole en équipe"),
      tx("Proverbs and reflection", "Proverbios y reflexión", "Proverbs and reflection", "Proverbi e riflessione", "פתגמים והרהור", "Proverbes et réflexion"),
    ],
    growsInto: [
      tx("Confidence and leadership", "Confianza y liderazgo", "Confidence and leadership", "Fiducia e leadership", "ביטחון ומנהיגות", "Confiance et leadership"),
      tx("Workforce readiness", "Preparación laboral", "Workforce readiness", "Preparazione al lavoro", "מוכנות לעבודה", "Préparation professionnelle"),
      tx("Responsibility and teamwork", "Responsabilidad y equipo", "Responsibility and teamwork", "Responsabilità e squadra", "אחריות ועבודת צוות", "Responsabilité et équipe"),
    ],
    ecosystem: tx("Youth become future growers, customers, volunteers, workers, entrepreneurs, and leaders.", "Los jóvenes se convierten en futuros líderes y participantes.", "Youth become future growers, customers, workers, and leaders.", "I giovani diventano futuri leader e partecipanti.", "הנוער הופך למגדלים, עובדים ומנהיגים עתידיים.", "Les jeunes deviennent futurs producteurs, travailleurs et leaders."),
    nextStep: tx("Enroll, complete orientation, and participate June 8–August 28, 2026.", "Inscribirse y participar del 8 de junio al 28 de agosto.", "Enroll and participate June 8–August 28, 2026.", "Iscriversi e partecipare dall’8 giugno al 28 agosto.", "להירשם ולהשתתף מ־8 ביוני עד 28 באוגוסט.", "S’inscrire et participer du 8 juin au 28 août."),
  },

  {
    id: 9,
    nav: "Partner",
    image: "/SAM_0226.JPG",
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
  },

  {
    id: 10,
    nav: "Value-Added",
    image: "/SAM_0229.JPG",
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
  },

  {
    id: 11,
    nav: "Thank You",
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
    nextStep: tx("Contact: 330-275-1604", "Contacto: 330-275-1604", "Contact: 330-275-1604", "Contatto: 330-275-1604", "יצירת קשר: 330-275-1604", "Contact : 330-275-1604"),
  },
];
