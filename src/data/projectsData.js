export const categories = [
  { id: "all", label: "Tous" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "webapp", label: "Application web" },
  { id: "vitrine", label: "Site vitrine" },
  { id: "portfolio", label: "Portfolio" },
  { id: "artisan", label: "Artisan" },
];

export const projectsData = [
  {
    id: 1,
    navbarTheme: 'dark',
    slug: "delivecrous",
    title: "Delivecrous — Application de Vente en Ligne",
    tagline: "Une boutique en ligne simple et intuitive pour vos clients.",
    year: "2026",
    image: "/images/projectpics/delivecrous/Home_full.webp",
    categoryIds: ["ecommerce", "webapp"],
    client: "Delivecrous",
    role: "Développeur Frontend & Designer UI",
    timeline: "2 semaines",
    techStack: ["React", "CSS"],
    description: "Application web de vente en ligne. Elle permet aux utilisateurs de naviguer dans un catalogue de produits, de gérer leur panier et de finaliser leur commande via un tunnel de checkout complet. Le projet couvre l'intégralité du parcours client, de la découverte du produit jusqu'à la confirmation de commande, avec une gestion de compte utilisateur intégrée.",
    challenge: "Concevoir une expérience d'achat fluide et intuitive en React, en gérant l'état global de l'application (panier, authentification, navigation) sans librairie externe de state management. L'enjeu était de rendre l'interface simple et agréable malgré la complexité fonctionnelle sous-jacente, tout en maintenant un code propre et modulaire.",
    process: {
      text: "Le projet Delivecrous a démarré par la conception des composants sur Figma : wireframes basse fidélité, puis maquettes haute fidélité avec le système de design complet. Une fois la structure validée, le développement React a suivi une architecture par composants réutilisables. La gestion du panier et de l'authentification ont été les points les plus délicats, résolus avec le Context API de React pour éviter le prop drilling.",
      images: [
        "/images/projectpics/delivecrous/Composant.webp",
        "/images/projectpics/delivecrous/Prototype.webp"
      ]
    },
    websitePages: [
      { id: 'home', title: "Page d'Accueil", image: "/images/projectpics/delivecrous/Home.webp" },
      { id: 'produit', title: "Fiche Produit", image: "/images/projectpics/delivecrous/Detail.webp" },
      { id: 'authentification', title: "Authentification", image: "/images/projectpics/delivecrous/Auth.webp" },
      { id: 'panier', title: "Panier", image: "/images/projectpics/delivecrous/Cart.webp" },
      { id: 'validation', title: "Validation", image: "/images/projectpics/delivecrous/Valid.webp" }
    ],
        links: {
      github: "https://github.com/ShayyNwE/DeliveCROUS"
    },
    features: [
      {
        title: "Catalogue de Produits",
        description: "Interface de navigation claire avec filtrage par catégorie, affichage des prix et ajout au panier en un clic. Les fiches produits présentent le détail, la description et les options disponibles. L'ensemble est responsive et pensé pour une consultation rapide depuis mobile.",
        image: "/images/projectpics/delivecrous/Home.webp"
      },
      {
       title: "Connexion & Compte Utilisateur",
       description: "Système d'authentification complet avec création de compte, connexion et gestion de session persistante. L'espace personnel permet de retrouver l'historique des commandes et les informations de livraison pré-remplies pour accélérer les achats suivants.",
       image: "/images/projectpics/delivecrous/Auth.webp"
     },
     {
       title: "Gestion du Panier",
       description: "Panier dynamique mis à jour en temps réel avec ajout, suppression et modification des quantités. Le total est recalculé instantanément et l'état du panier est persisté pendant toute la session. L'interface est conçue pour minimiser les frictions avant le passage à la caisse.",
       image: "/images/projectpics/delivecrous/Cart.webp"
     },
     {
       title: "Tunnel de Commande",
       description: "Processus de validation en étapes claires : récapitulatif du panier, saisie des informations de livraison, confirmation finale. Chaque étape est validée avant de passer à la suivante, avec des messages d'erreur explicites pour guider l'utilisateur en cas d'oubli.",
       image: "/images/projectpics/delivecrous/Valid.webp"
     },
    ],
  },

  {
    id: 2,
    navbarTheme: 'light',
    slug: "fournil-emile",
    title: "Au Fournil d'Émile",
    tagline: "Landing page artisanale pour une boulangerie lyonnaise.",
    year: "2026",
    image: "/images/projectpics/Landing/pain_full.webp",
    categoryIds: ["vitrine", "artisan"],
    client: "Au Fournil d'Émile — Boulangerie Lyon",
    role: "Designer & Développeur Web",
    timeline: "1 semaine",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "Landing page complète pour une boulangerie artisanale lyonnaise. Le site présente l'histoire de la maison, le savoir-faire du boulanger, la carte des créations et les informations pratiques. Pensé comme une vitrine digitale chaleureuse, il reflète l'identité artisanale du lieu avec une palette terracotta et des typographies soignées. Le tout développé en HTML/CSS/JS vanilla pour des performances maximales et une prise en main simple.",
    challenge: "Concevoir une identité visuelle qui transmette la chaleur et l'authenticité d'une boulangerie de quartier, sans tomber dans les clichés. Il fallait trouver l'équilibre entre un design moderne et lisible, et une atmosphère artisanale sincère. L'enjeu technique était aussi de livrer un site ultra-rapide, sans framework, optimisé pour les clients mobiles qui cherchent rapidement les horaires ou la carte.",
    process: {
      text: "Le projet a démarré par une phase de recherche d'identité visuelle : analyse de la concurrence, choix de la palette (terracotta, crème, chocolat), sélection typographique. Une fois la direction artistique validée, les maquettes ont été réalisées sur Figma avant le passage au code. Le développement en HTML/CSS/JS pur a permis d'obtenir un site très léger, avec des animations CSS subtiles qui renforcent l'aspect artisanal sans alourdir l'expérience.",
      images: ["/images/projectpics/Landing/Fournil.webp"]
    },
    websitePages: [
      { id: 'home', title: "Home", image: "/images/projectpics/Landing/Fournil.webp" },
      { id: 'histoire', title: "Notre Histoire", image: "/images/projectpics/Landing/Fournil_histoire.webp" },
      { id: 'expertise', title: "Notre Expertise", image: "/images/projectpics/Landing/Fournil_expertise.webp" },
      { id: 'creation', title: "Nos Création", image: "/images/projectpics/Landing/Fournil_creation.webp" },
      { id: 'info', title: "Nos Informations", image: "/images/projectpics/Landing/Fournil_footer.webp" }
    ],
    features: [
      {
        title: "Identité Visuelle Artisanale",
        description: "Palette terracotta et chocolat, typographies serif chaleureuses, textures subtiles — chaque détail visuel a été pensé pour refléter le soin et l'authenticité du fournil. Le design crée une atmosphère immédiatement reconnaissable, cohérente avec l'univers de la boulangerie.",
        image: "/images/projectpics/Landing/Fournil.webp"
      },
      {
        title: "Carte Interactive par Onglets",
        description: "Système de navigation par onglets permettant d'explorer facilement les différentes catégories : pains, viennoiseries, pâtisseries. L'interaction est fluide et intuitive, pensée pour les clients qui consultent le site depuis leur téléphone avant de passer commande.",
        image: "/images/projectpics/Landing/Fournil_creation.webp"
      },
    ],
    links: {
      live: "/fournil-emile/Fournil.html",
    }
  },

  {
    id: 3,
    navbarTheme: 'light',
    slug: "saigon",
    title: "Saigon",
    tagline: "L'authentique Vietnam à Montchat — cantine le midi, bar & karaoké le soir.",
    year: "2026",
    image: "/images/projectpics/Landing/bar_full.webp",
    categoryIds: ["vitrine", "artisan"],
    client: "Saigon — Restaurant Lyon 7",
    role: "Designer & Développeur Web",
    timeline: "1 semaine",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "Landing page pour un restaurant vietnamien atypique de Lyon 7 : carte complète, section bar & karaoké, et informations pratiques.",
    challenge: "Retranscrire l'ambiance unique du Saigon — un hybride entre cantine de quartier et bar festif — avec une identité visuelle qui mêle chaleur asiatique et néons nocturnes.",
    process: {
      text: "Le projet a démarré par une analyse de l'identité du lieu : un restaurant de quartier chaleureux le midi qui se transforme en bar festif le soir. La palette mêle des tons bambou et brun chaud pour la partie restaurant, et des accents néon rose et bleu pour l'ambiance bar. La navigation par onglets permet d'explorer la carte vietnamienne complète.",
      images: [
        "/images/projectpics/Landing/Saigon.webp",
        "/images/projectpics/Landing/Saigon_carte.webp"
      ]
    },

    websitePages: [
      { id: 'hero', title: "Accueil", image: "/images/projectpics/Landing/Saigon.webp" },
      { id: 'carte', title: "La Carte", image: "/images/projectpics/Landing/Saigon_carte.webp" },
      { id: 'bar', title: "Bar & Karaoké", image: "/images/projectpics/Landing/Saigon_bar.webp" },
      { id: 'infos', title: "Infos & Accès", image: "/images/projectpics/Landing/Saigon_infos.webp" },
      { id: 'bas', title: "Bas de page", image: "/images/projectpics/Landing/Saigon_footer.webp" }
    ],

    features: [
      {
        title: "Carte Vietnamienne Interactive",
        description: "Navigation par onglets entre Phô, Bo Bun, Tapas Viet et options végétariennes. Chaque plat est présenté avec sa description et son prix.",
        image: "/images/projectpics/Landing/Saigon_carte.webp"
      },
      {
        title: "Ambiance Saigon Bar & Karaoké",
        description: "Section dédiée à l'activité karaoké du soir avec réservation directe. Design néon qui contraste avec la chaleur naturelle de la partie restaurant.",
        image: "/images/projectpics/Landing/Saigon_bar.webp"
      }
    ],

    links: {
      live: "/Saigon/Saigon.html"
    }
  },

  {
    id: 4,
    navbarTheme: 'light',
    slug: "fournil-honore",
    title: "Le Fournil d'Honoré",
    tagline: "L'excellence artisanale au cœur de Lyon 2ème.",
    year: "2026",
    image: "/images/projectpics/Landing/FournilHonore.webp",
    categoryIds: ["vitrine", "artisan"],
    client: "Le Fournil d'Honoré — Boulangerie Lyon 2",
    role: "Designer & Développeur Web",
    timeline: "1 semaine",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "Landing page haut de gamme pour une boulangerie artisanale lyonnaise : collection pains & viennoiseries, formules déjeuner, pâtisserie événementielle et terrasse.",
    challenge: "Concevoir une expérience visuelle premium qui reflète l'excellence artisanale d'une boulangerie de quartier, avec un curseur personnalisé, des animations soignées et une identité forte.",
    process: {
      text: "Le projet a démarré par une définition de l'identité visuelle haut de gamme : typographies serif élégantes, palette sobre et contrastée, animations d'entrée progressives. Un soin particulier a été apporté aux micro-interactions comme le curseur personnalisé et les effets de scroll reveal pour renforcer l'image premium de l'établissement.",
      images: [
        "/images/projectpics/Landing/FournilHonore.webp",
        "/images/projectpics/Landing/FournilHonore_collection.webp"
      ]
    },
    
    websitePages: [
      { id: 'hero', title: "Accueil", image: "/images/projectpics/Landing/FournilHonore.webp" },
      { id: 'collection', title: "Collection", image: "/images/projectpics/Landing/FournilHonore_collection.webp" },
      { id: 'dejeuner', title: "Déjeuner", image: "/images/projectpics/Landing/FournilHonore_dejeuner.webp" },
      { id: 'patisserie', title: "Pâtisserie", image: "/images/projectpics/Landing/FournilHonore_patisserie.webp" },
      { id: 'terrasse', title: "Terrasse", image: "/images/projectpics/Landing/FournilHonore_terrasse.webp" }
    ],

    features: [
      {
        title: "Collection Pains & Viennoiseries",
        description: "Présentation soignée de la collection de pains artisanaux et viennoiseries avec une mise en page élégante qui met en valeur chaque création.",
        image: "/images/projectpics/Landing/FournilHonore_collection.webp"
      },
      {
        title: "Pâtisserie & Événements",
        description: "Section dédiée aux créations pâtissières et commandes événementielles, avec formulaire de contact intégré pour les professionnels.",
        image: "/images/projectpics/Landing/FournilHonore_patisserie.webp"
      }
    ],

    links: {
      live: "/FournilHonore/FournilHonore.html"
    }
  },

  {
    id: 5,
    navbarTheme: 'light',
    slug: "le-backstage",
    title: "Le Backstage",
    tagline: "Le QG Rock de Montplaisir — concerts, matchs et punch maison.",
    year: "2026",
    image: "/images/projectpics/Landing/LeBackstage.webp",
    categoryIds: ["vitrine", "artisan"],
    client: "Le Backstage — Bar Lyon 8",
    role: "Designer & Développeur Web",
    timeline: "1 semaine",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "Landing page pour un bar rock lyonnais : agenda des concerts, carte des boissons, galerie photos et section privatisation.",
    challenge: "Capturer l'énergie brute d'un bar rock tout en restant lisible et moderne. L'identité visuelle joue sur les contrastes forts, les typographies percutantes et une ambiance scénique.",
    process: {
      text: "Le projet a démarré par une recherche d'identité visuelle autour de l'univers rock : palette sombre et contrastée, typographies bold et énergiques, animations percutantes. Un soin particulier a été apporté à l'agenda des concerts et à la section privatisation pour répondre aux besoins concrets de l'établissement.",
      images: [
        "/images/projectpics/Landing/LeBackstage.webp",
        "/images/projectpics/Landing/LeBackstage_agenda.webp"
      ]
    },
    websitePages: [
      { id: 'hero', title: "Accueil", image: "/images/projectpics/Landing/LeBackstage.webp" },
      { id: 'agenda', title: "Agenda", image: "/images/projectpics/Landing/LeBackstage_agenda.webp" },
      { id: 'drinks', title: "Carburant", image: "/images/projectpics/Landing/LeBackstage_drinks.webp" },
      { id: 'gallery', title: "Hall of Fame", image: "/images/projectpics/Landing/LeBackstage_gallery.webp" },
      { id: 'info', title: "Infos", image: "/images/projectpics/Landing/LeBackstage_infos.webp" }
    ],
    features: [
      {
        title: "Agenda des Concerts",
        description: "Programme des événements mis en avant dès l'entrée du site, avec dates, artistes et type de soirée pour inciter à la réservation.",
        image: "/images/projectpics/Landing/LeBackstage_agenda.webp"
      },
      {
        title: "Privatisation & Événements",
        description: "Section dédiée à la privatisation du bar pour anniversaires, EVJF, EVG et soirées d'entreprise, avec formulaire de contact intégré.",
        image: "/images/projectpics/Landing/LeBackstage_drinks.webp"
      }
    ],
    links: {
      live: "/LeBackstage/LeBackstage.html"
    }
  },

  {
    id: 6,
    navbarTheme: 'light',
    slug: "immersive-3d-portfolio",
    title: "Portfolio Immersif 3D",
    tagline: "Une expérience interactive pour repousser les limites du web.",
    year: "2026",
    image: "/images/projectpics/portfolio/scene.webp",
    categoryIds: ["portfolio", "webapp"],
    client: "Projet interne — Mattéo Livrozet",
    role: "Lead Designer & Frontend Dev",
    timeline: "2 mois",
    techStack: ["React", "Three.js", "GSAP"],
    description: "Création d’un portfolio immersif pensé comme une expérience interactive.",
    challenge: "L’objectif était de concevoir une expérience immersive et mémorable...",
    process: {
      text: "Le projet a débuté par une phase de réflexion hors écran...",
      images: [
        "/images/projectpics/portfolio/mockup.webp",
        "/images/projectpics/portfolio/blender.webp"
      ]
    },
    websitePages: [
      { id: 'loader', title: "Loading Screen", image: "/images/projectpics/portfolio/loader.webp" },
      { id: 'scene', title: "Scène Principale", image: "/images/projectpics/portfolio/scene.webp" },
      { id: 'livre', title: "Livre", image: "/images/projectpics/portfolio/livre.webp" },
      { id: 'livre-ouvert', title: "Livre Ouvert", image: "/images/projectpics/portfolio/livreOuvert.webp" }
    ],
    features: [
      {
        title: "Navigation 3D Narrative",
        description: "Une navigation pensée comme un parcours scénarisé...",
        image: "/images/projectpics/portfolio/accueil.webp"
      },
      {
        title: "Transitions Caméra Fluides",
        description: "Des transitions cinématographiques basées sur des easings personnalisés...",
        image: "/images/projectpics/portfolio/mockupIA.webp"
      }
    ],
    links: {
      github: "https://github.com/matteolvt/Portfolio3D"
    }
  },
  {
    id: 7,
    navbarTheme: 'light',
    slug: "sucretoile",
    title: "SucrÉtoile",
    tagline: "Landing page festive et colorée pour une créatrice de gâteaux sur-mesure.",
    year: "2026",
    image: "/images/projectpics/FestiCake/festicake_hero.webp",
    categoryIds: ["vitrine", "artisan"],
    client: "SucrÉtoile — Cake Design",
    role: "Designer & Développeur Web",
    timeline: "1 semaine",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "Landing page complète pour une pâtissière spécialisée dans la création de gâteaux sur-mesure pour tous types d'occasions : anniversaires, mariages, baptêmes, événements. Le site traduit un univers festif et artisanal avec des blobs animés, une palette pastel vibrante et des typographies expressives, tout en intégrant des fonctionnalités concrètes utiles au parcours client.",
    challenge: "Traduire visuellement l'univers joyeux d'une créatrice de gâteaux dans un site à la fois ludique et professionnel. L'enjeu était d'animer les éléments de fond en CSS pur, de rendre le calculateur de parts et le guide des saveurs pleinement interactifs, sans sacrifier les performances mobiles.",
    process: {
      text: "Le projet a démarré par une recherche d'identité visuelle inspirée de la pâtisserie créative : palette pastel (rose, bleu ciel, jaune citron, violet), typographies expressives (Fredoka One + Nunito), et animations CSS subtiles pour les blobs de fond. Les maquettes ont été validées avant le développement. Le choix du HTML/CSS/JS vanilla garantit un site léger et ultra-performant.",
      images: [
        "/images/projectpics/FestiCake/festicake_hero.webp",
        "/images/projectpics/FestiCake/festicake_galerie.webp"
      ]
    },
    websitePages: [
      { id: 'hero', title: "Accueil", image: "/images/projectpics/FestiCake/festicake_hero.webp" },
      { id: 'galerie', title: "Galerie", image: "/images/projectpics/FestiCake/festicake_galerie.webp" },
      { id: 'saveurs', title: "Guide des Saveurs", image: "/images/projectpics/FestiCake/festicake_saveurs.webp" },
      { id: 'Calculateur', title: "Calculateur", image: "/images/projectpics/FestiCake/festicake_calculateur.webp" },
      { id: 'ateliers', title: "Ateliers", image: "/images/projectpics/FestiCake/festicake_ateliers.webp" },
    ],
    features: [
      {
        title: "Identité Visuelle Festive",
        description: "Palette pastel vibrante, blobs animés en CSS, typographies Fredoka One et Nunito — chaque détail visuel plonge le visiteur dans un univers cohérent avec l'activité de la créatrice.",
        image: "/images/projectpics/FestiCake/festicake_hero.webp"
      },
      {
        title: "Galerie par Occasion",
        description: "Portfolio filtrable par type d'événement (anniversaire, mariage, baptême, entreprise) pour que chaque visiteur trouve rapidement l'inspiration qui correspond à son projet.",
        image: "/images/projectpics/FestiCake/festicake_galerie.webp"
      },
      {
        title: "Calculateur de Parts",
        description: "Outil interactif permettant aux clients d'estimer instantanément la taille du gâteau dont ils ont besoin selon le nombre de convives — sans échange de mails.",
        image: "/images/projectpics/FestiCake/festicake_calculateur.webp"
      },
      {
        title: "Formulaire de Devis Multi-Étapes",
        description: "Un formulaire progressif en plusieurs étapes pour guider le client dans la description de son projet (occasion, date, budget, personnalisation) et générer des demandes qualifiées.",
        image: "/images/projectpics/FestiCake/festicake_ateliers.webp"
      },
    ],
    links: {
      live: "/SucrEtoile/Sucretoile.html",
    }
  },
];