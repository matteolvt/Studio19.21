import React from "react";
import { Helmet } from "react-helmet";
import PageTransition from "../../components/PageTransition/PageTransition";
import NotFoundContent from "../../components/NotFound/NotFoundContent";

export default function NotFound() {
  return (
    <PageTransition>
      <Helmet>
        <title>Page Introuvable - Studio-19-21</title>
        <meta name="description" content="La page que vous recherchez n'existe pas." />
        <meta property="og:title" content="Page Introuvable - Studio-19-21" />
        <meta property="og:description" content="La page que vous recherchez n'existe pas." />
        <meta property="og:type" content="website" />
      </Helmet>
      <NotFoundContent />
    </PageTransition>
  );
}
