import React, { useState } from "react";
import BlogCard from "./BlogCard";
import BlogFilters from "./BlogFilters";
import "./BlogList.css";

export default function BlogList({ posts }) {
  const categories = ["Tous", "E-commerce", "Développement web", "Site vitrine"];
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredPosts =
    selectedCategory === "Tous"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <section className="blog-list-section">
      <BlogFilters
        categories={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
        posts={posts}
      />
      <div className="blog-list">
        {filteredPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
}
