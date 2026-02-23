import { Helmet } from "react-helmet-async";

export default function Canonical() {
  const canonicalUrl = `https://www.studio1921.fr${window.location.pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}