import loader from "../assets/projectPics/portfolio/loader.jpg";
import accueil from "../assets/projectPics/portfolio/accueil.jpg";
import livre from "../assets/projectPics/portfolio/livre.jpg";
import livreOuvert from "../assets/projectPics/portfolio/livreOuvert.jpg";
import scene from "../assets/projectPics/portfolio/scene.jpg";
import mockup from "../assets/projectPics/portfolio/mockup.jpeg";
import mockupIA from "../assets/projectPics/portfolio/mockupIA.png";
import blender from "../assets/projectPics/portfolio/blender.png";


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
    year: 2026,
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
];