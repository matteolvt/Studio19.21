import React from "react";
import "./ArticleHeader.css";

export default function ArticleHeader({ category, title, excerpt, date, readTime, author }) {
  return (
    <header className="ah-wrapper">
      <span className="ah-badge">{category}</span>
      <h1 className="ah-title">{title}</h1>
      <p className="ah-excerpt">{excerpt}</p>
      <div className="ah-metaRow">
        <img src={author?.avatar} alt={author?.name} className="ah-avatar" />
        <div>
          <p className="ah-authorName">{author?.name}</p>
          <p className="ah-authorMeta">{date} · {readTime}</p>
        </div>
      </div>
    </header>
  );
}