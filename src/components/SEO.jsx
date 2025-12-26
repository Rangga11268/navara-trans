import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title} | Navara Trans - Premium Transport</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | Navara Trans`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;
