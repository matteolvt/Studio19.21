import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import BlogHero from "../../components/Blog/BlogHero";
import BlogList from "../../components/Blog/BlogList";
import { posts } from "../../data/postData";
import SEO from "../../components/SEO/SEO";

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog | Studio1921 – Conseils pour artisans"
        description="Articles et conseils sur la création de sites web, le marketing digital et le SEO pour artisans."
      />
      <Navbar />
      <BlogHero />
      <BlogList posts={posts} />
      <Footer />
    </>
  );
}