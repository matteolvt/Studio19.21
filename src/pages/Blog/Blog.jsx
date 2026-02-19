import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import BlogHero from "../../components/Blog/BlogHero";
import BlogList from "../../components/Blog/BlogList";
import { posts } from "../../data/postData";



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
