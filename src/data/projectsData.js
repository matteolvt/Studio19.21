import loader from "../assets/projectPics/portfolio/loader.jpg";
import accueil from "../assets/projectPics/portfolio/accueil.jpg";
import livre from "../assets/projectPics/portfolio/livre.jpg";
import livreOuvert from "../assets/projectPics/portfolio/livreOuvert.jpg";
import scene from "../assets/projectPics/portfolio/scene.jpg";
import mockup from "../assets/projectPics/portfolio/mockup.jpeg";
import mockupIA from "../assets/projectPics/portfolio/mockupIA.png";
import blender from "../assets/projectPics/portfolio/blender.png";
import home from "../assets/projectPics/delivecrous/Home.png";
import cart from "../assets/projectPics/delivecrous/Cart.png";
import auth from "../assets/projectPics/delivecrous/Auth.png";
import detail from "../assets/projectpics/delivecrous/Detail.png";
import valid from "../assets/projectPics/delivecrous/Valid.png";
import proto from "../assets/projectPics/delivecrous/Prototype.png";
import compo from "../assets/projectPics/delivecrous/Composant.png";



export const categories = [
  { id: "all", label: "Tous" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "webapp", label: "Application web" },
  { id: "vitrine", label: "Site vitrine" },
  { id : "portfolio", label: "Portfolio" },
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
];