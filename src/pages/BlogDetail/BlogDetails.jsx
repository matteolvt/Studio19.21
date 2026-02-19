import React from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug } from "../../data/blogData";

import ArticleHeader from "../../components/BlogDetail/ArticleHeader";
import ArticleContent from "../../components/BlogDetail/ArticleContent";
import ShareBar from "../../components/BlogDetail/ShareBar";
import RelatedPosts from "../../components/BlogDetail/RelatedPost";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <p style={{ textAlign: "center", padding: "100px 32px" }}>Article introuvable.</p>;
  }

  return (
    <>
      <Navbar />
      <ArticleHeader
        category={post.category}
        title={post.title}
        excerpt={post.excerpt}
        date={post.date}
        readTime={post.readTime}
        author={post.author}
      />
      <ArticleContent
        coverImage={post.coverImage}
        blocks={post.blocks}
      />
      <ShareBar title={post.title} />
      <RelatedPosts posts={post.relatedPosts} />
      <Footer />
    </>
  );
}