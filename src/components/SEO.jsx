import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title} | Navara Trans - Premium Transport</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://navaratrip.com/" />
      <meta property="og:title" content={`${title} | Navara Trans`} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://navaratrip.com/assets/img/HeroScreenshot.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://navaratrip.com/" />
      <meta property="twitter:title" content={`${title} | Navara Trans`} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="https://navaratrip.com/assets/img/HeroScreenshot.png"
      />
    </Helmet>
  );
};

export default SEO;
