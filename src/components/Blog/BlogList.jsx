import React, { useState } from "react";
import PropTypes from "prop-types";
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

BlogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
};