import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import BlogHero from "../../components/Blog/BlogHero";
import BlogList from "../../components/Blog/BlogList";
import devweb from "../../assets/Blog/devweb.jpg";
import ecommerce from "../../assets/Blog/e-commerce.jpg";
import vitrine from "../../assets/Blog/vitrine.jpg";


const posts = [
  {
    title: "Comment créer un site e-commerce performant",
    category: "E-commerce",
    excerpt: "Découvrez les meilleures pratiques pour construire une boutique en ligne efficace.",
    image: ecommerce
  },
  {
    title: "Les bases du développement web moderne",
    category: "Développement web",
    excerpt: "Un guide pour comprendre HTML, CSS, JS et React.",
    image: devweb
  },
  {
    title: "Pourquoi un site vitrine est essentiel",
    category: "Site vitrine",
    excerpt: "Présentez votre entreprise et vos services avec style.",
    image: vitrine
  }
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <BlogHero />
      <BlogList posts={posts} />
      <Footer />
    </>
  );
}
