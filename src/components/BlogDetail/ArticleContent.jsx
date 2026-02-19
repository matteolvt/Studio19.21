import React from "react";
import "./ArticleContent.css";

export default function ArticleContent({ coverImage, blocks }) {
  return (
    <div className="ac-wrapper">
      {coverImage && (
        <div className="ac-coverWrapper">
          <img
            src={coverImage.src}
            srcSet={`${coverImage.src.replace(/w=\d+/, 'w=400')} 400w, ${coverImage.src.replace(/w=\d+/, 'w=750')} 750w, ${coverImage.src} 1200w`}
            sizes="(max-width: 480px) 400px, (max-width: 900px) 750px, 800px"
            alt={coverImage.alt}
            className="ac-coverImg"
            fetchpriority="high"
          />
        </div>
      )}

      <div className="ac-body">
        {blocks.map((block, i) => {
          if (block.type === "paragraph") {
            return <p key={i} className="ac-paragraph">{block.text}</p>;
          }
          if (block.type === "h2") {
            return <h2 key={i} className="ac-h2">{block.text}</h2>;
          }
          if (block.type === "h3") {
            return <h3 key={i} className="ac-h3">{block.text}</h3>;
          }
          if (block.type === "quote") {
            return (
              <blockquote key={i} className="ac-blockquote">
                <span className="ac-quoteAccent">"</span>
                {block.text}
              </blockquote>
            );
          }
          if (block.type === "image") {
            return (
              <figure key={i} className="ac-figure">
                <img src={block.src} alt={block.alt} className="ac-inlineImg" loading="lazy" />
                {block.caption && <figcaption className="ac-caption">{block.caption}</figcaption>}
              </figure>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}