import loader from "../assets/projectPics/portfolio/loader.webp";
import accueil from "../assets/projectPics/portfolio/accueil.webp";
import livre from "../assets/projectPics/portfolio/livre.webp";
import livreOuvert from "../assets/projectPics/portfolio/livreOuvert.webp";
import scene from "../assets/projectPics/portfolio/scene.webp";
import mockup from "../assets/projectPics/portfolio/mockup.webp";
import mockupIA from "../assets/projectPics/portfolio/mockupIA.webp";
import blender from "../assets/projectPics/portfolio/blender.webp";
import home from "../assets/projectPics/delivecrous/Home.webp";
import cart from "../assets/projectPics/delivecrous/Cart.webp";
import auth from "../assets/projectPics/delivecrous/Auth.webp";
import detail from "../assets/projectPics/delivecrous/Detail.webp"
import valid from "../assets/projectPics/delivecrous/Valid.webp";
import proto from "../assets/projectPics/delivecrous/Prototype.webp";
import compo from "../assets/projectPics/delivecrous/Composant.webp";
import fournil_cover from "../assets/projectPics/Landing/Fournil.webp";
import fournil_creation from "../assets/projectpics/Landing/Fournil_creation.webp";
import fournil_expertise from "../assets/projectpics/Landing/Fournil_expertise.webp";
import fournil_footer from "../assets/projectpics/Landing/Fournil_footer.webp";
import fournil_histoire from "../assets/projectpics/Landing/Fournil_histoire.webp";



export const categories = [
  { id: "all", label: "Tous" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "webapp", label: "Application web" },
  { id: "vitrine", label: "Site vitrine" },
  { id : "portfolio", label: "Portfolio" },
  { id : "artisan", label: "Artisan" },
];

export const projectsData = [
  {
    id: 1,
    navbarTheme: 'light',
    slug: "immersive-3d-portfolio",
    // --- Pour <ProjectHero /> ---
    title: "Portfolio Immersif 3D",
    tagline: "Une expérience interactive pour repousser les limites du web.",
    year: "2026",
    image: scene,
    
    // --- Pour <ProjectOverview /> ---
    categoryIds: ["portfolio", "webapp"],
    client: "Projet interne — Mattéo Livrozet",
    role: "Lead Designer & Frontend Dev",
    timeline: "2 mois",
    techStack: ["React", "Three.js", "GSAP"],
    description: "Création d’un portfolio immersif pensé comme une expérience interactive.",
    challenge: "L’objectif était de concevoir une expérience immersive et mémorable, capable de se démarquer des portfolios classiques, tout en conservant une navigation fluide et accessible pour tous les utilisateurs.",

    // --- Pour <ProjectProcess /> ---
    process: {
      text: "Le projet a débuté par une phase de réflexion hors écran, avec la création de maquettes papier afin de définir la composition de la scène, l’angle de caméra et les interactions clés. Cette étape a permis de poser une direction artistique claire avant le développement, en anticipant les contraintes techniques liées à la 3D temps réel et à la performance. Les itérations ont ensuite été réalisées directement dans le navigateur afin d’ajuster les animations, les transitions et la fluidité globale de l’expérience.",
      images: [
        mockup, blender
      ]
    },

    // 👇 NOUVEAU : Pour <ProjectPagesSlider /> ---
    websitePages: [
      {
        id: 'loader',
        title: "Loading Screen",
        image: loader 
      },
      {
        id : 'scene',
        title: "Scène Principale",
        image: scene
      },
      {
        id: 'livre',
        title: "Livre ",
        image: livre
      },
      {
        id: 'livre-ouvert',
        title: "Livre Ouvert",
        image: livreOuvert 
      }
    ],

    // --- Pour <ProjectFeatures /> ---
    features: [
      {
        title: "Navigation 3D Narrative",
        description: "Une navigation pensée comme un parcours scénarisé, où chaque interaction déclenche des mouvements de caméra et des transitions progressives pour guider l’utilisateur sans rupture.",
        image: accueil
      },
      {
        title: "Transitions Caméra Fluides",
        description: "Des transitions cinématographiques basées sur des easings personnalisés afin d’assurer une continuité visuelle et une expérience fluide entre chaque section du site.(Visualisation des trajectoires caméra utilisées dans la scène.)",
        image: mockupIA
      }
    ],

    // results: {
    //   text: "Le lancement a été un succès immédiat avec une adoption massive sur mobile.",
    //   kpis: [
    //     { label: "Taux de conversion", value: "+45%" },
    //     { label: "Ventes mobile", value: "+120%" },
    //     { label: "Temps de chargement", value: "0.8s" }
    //   ],
    //   testimonial: {
    //     text: "Une refonte qui a dépassé nos espérances. Nos clients adorent la nouvelle fluidité du site.",
    //     author: "Sophie Martin, Fondatrice"
    //   }
    // },

    links: {
      // live: "",
      github: "https://github.com/matteolvt/Portfolio3D"
    }
  },
  {
    id: 2,
    navbarTheme: 'dark',
    slug: "delivecrous",
    // --- Pour <ProjectHero /> ---
    title: "Delivecrous — Application de Vente en Ligne",
    tagline: "Une boutique en ligne simple et intuitive pour vos clients.",
    year: "2026",
    image: home,

    // --- Pour <ProjectOverview /> ---
    categoryIds: ["ecommerce", "webapp"],
    client: "Projet d'école — Delivecrous",
    role: "Développeur Frontend & Designer UI",
    timeline: "2 semaines",
    techStack: ["React", "CSS"],
    description: "Application de vente en ligne permettant la navigation, le panier et le checkout de produits.",
    challenge: "Créer une expérience utilisateur simple et efficace pour la vente en ligne, avec un design responsive et un système de panier fonctionnel.",

    // --- Pour <ProjectProcess /> ---
    process: {
    text: "Le projet Delivecrous a commencé par la conception des composants sur Figma, afin de définir le style, la typographie et les éléments interactifs. Une fois les composants validés, nous avons créé le prototype des pages pour visualiser le parcours utilisateur complet et tester la navigation. Après validation du prototype, nous avons intégré les composants dans React, construit le catalogue, les pages produits et le panier, et effectué des tests pour garantir une expérience fluide et cohérente.",
    images: [compo, proto]
    },

    // --- Pour <ProjectPagesSlider /> ---
    websitePages: [
      { id: 'home', title: "Page d'Accueil", image: home },
      { id: 'produit', title: "Fiche Produit", image: detail },
      { id: 'authentification', title: "Authentification", image: auth },
      { id: 'panier', title: "Panier", image: cart },
      { id: 'validation', title: "Validation", image: valid }
    ],

    // --- Pour <ProjectFeatures /> ---
    features: [
      {
      title: "Catalogue de Produits",
      description: "Permet aux clients de découvrir rapidement tous vos produits et de filtrer facilement selon leurs besoins. Base idéale pour la réservation ou le click & collect, ce qui augmente vos ventes et simplifie la gestion des stocks.",
      image: home
      },
      {
        title: "Connexion / Compte utilisateur",
        description: "Offre aux clients un espace personnel pour suivre leurs commandes, gérer leurs réservations et recevoir des recommandations personnalisées. Favorise la fidélisation et un parcours utilisateur fluide.",
        image: auth
      },
      {
        title: "Gestion du Panier",
        description: "Simplifie le processus d’achat avec ajout et suppression faciles des produits, calcul automatique du total et options de livraison ou de retrait en magasin. Cela réduit les abandons de panier et rend le parcours client plus agréable.",
        image: cart
      },
      {
        title: "Validation de la commande",
        description: "Confirme la commande de manière claire et sécurisée, avec toutes les informations nécessaires. Idéal pour les réservations et le click & collect, ce qui rassure le client et optimise la préparation des commandes pour le commerçant.",
        image: valid
      }
    ],
    links:{
      // live: "",
      github: "https://github.com/ShayyNwE/DeliveCROUS" }
  },

  {
    id: 3,
    navbarTheme: 'light',
    slug: "fournil-emile",
    title: "Au Fournil d'Émile",
    tagline: "Landing page artisanale pour une boulangerie lyonnaise.",
    year: "2026",
    image: fournil_cover,
    categoryIds: ["vitrine", "artisan"],
    client: "Au Fournil d'Émile — Boulangerie Lyon",
    role: "Designer & Développeur Web",
    timeline: "1 semaine",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "Landing page complète pour une boulangerie artisanale lyonnaise : hero, histoire, expertise, carte du jour et informations pratiques.",
    challenge: "Concevoir une identité visuelle chaleureuse et artisanale qui reflète le savoir-faire d'une boulangerie familiale, tout en restant moderne et performante.",
    process: {
      text: "Le projet a démarré par une phase de recherche d'identité visuelle : palette de couleurs terracotta et chocolat, typographies serif et script pour évoquer l'artisanat. La landing page a été développée en HTML/CSS natif avec un soin particulier apporté aux micro-animations et aux transitions pour créer une expérience immersive.",
      images: [fournil_cover]
    },
    websitePages: [
      { id: 'home', title: "Home", image: fournil_cover },
      { id: 'histoire', title: "Notre Histoire", image: fournil_histoire },
      { id: 'expertise', title: "Notre Expertise", image: fournil_expertise },
      { id: 'creation', title: "Nos Création", image: fournil_creation },
      { id: 'info', title: "Nos Informations", image: fournil_footer }
    ],
    features: [
      {
        title: "Design Artisanal",
        description: "Palette terracotta et chocolat, typographies Playfair Display et Caveat, grain texturé en overlay — chaque détail évoque le soin et le savoir-faire d'une boulangerie familiale.",
        image: fournil_cover
      },
      {
        title: "Carte Interactive",
        description: "Système d'onglets pour naviguer entre Boulangerie, Viennoiseries et Pâtisserie, avec des fiches produit détaillées et des badges de saisonnalité.",
        image: fournil_creation
      }
    ],
    // Lien vers la landing page HTML dans /public
    links: {
      live: "../../public/fournil-emile/Fournil.html",
    }
  },
];