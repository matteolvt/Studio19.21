import React from "react";
import { Link } from "react-router-dom";
import "./RelatedPosts.css";

function RelatedCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="rp-card">
      <div className="rp-imgWrapper">
        <img src={post.image} alt={post.title} className="rp-img" />
      </div>
      <div className="rp-cardBody">
        <span className="rp-badge">{post.category}</span>
        <h3 className="rp-cardTitle">{post.title}</h3>
        <p className="rp-cardExcerpt">{post.excerpt}</p>
      </div>
    </Link>
  );
}

export default function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="rp-section">
      <h2 className="rp-heading">Articles similaires</h2>
      <div className="rp-grid">
        {posts.map((post) => (
          <RelatedCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}