import React from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import NotFoundContent from "../../components/NotFound/NotFoundContent";

export default function NotFound() {
  return (
    <PageTransition>
      <NotFoundContent />
    </PageTransition>
  );
}
