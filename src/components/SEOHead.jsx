// src/components/SEOHead.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEOHead({ 
  title = "Boswell Web Development Solutions LLC", 
  description = "Veteran-owned web development company in Lexington, KY. Custom React websites, AI integration, and business automation. Starting at $750.",
  keywords = "web development, react developer, lexington ky, veteran owned business, custom websites, AI integration",
  url = "https://boswellwebdevelopment.com",
  image = "https://storage.googleapis.com/boswellwebdevsolutionsllc/75C2B6B4-7539-4C70-BB2E-D97E39E038D5.JPG"
}) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Charles Boswell" />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Boswell Web Development Solutions LLC",
          "description": description,
          "url": url,
          "telephone": "(859) 436-7304",
          "email": "charlesboswell@boswellwebdevelopment.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lexington",
            "addressRegion": "KY",
            "addressCountry": "US"
          },
          "founder": {
            "@type": "Person",
            "name": "Charles Boswell"
          },
          "serviceArea": {
            "@type": "State",
            "name": "Kentucky"
          },
          "priceRange": "$750-$6000+",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Starter Website"
                },
                "price": "750-1200",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Business Website"
                },
                "price": "1500-3000",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "eCommerce Website"
                },
                "price": "3000-6000",
                "priceCurrency": "USD"
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
}