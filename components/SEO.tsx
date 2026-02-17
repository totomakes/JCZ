import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogUrl?: string;
    type?: 'website' | 'article' | 'profile';
    author?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = "Juan Carlos Zermeño | Strategic Authority",
    description = "Engineered Status & Category Dominance for Founders. Precision architecture of perceived value through strategic authority systems.",
    keywords = "Juan Carlos Zermeño, Strategic Authority, Category Kingmaker, Personal Branding, Founder Identity, Luxury Positioning",
    ogImage = "/assets/hero.jpg",
    ogUrl = "https://jcz.marketing",
    type = "website",
    author = "Juan Carlos Zermeño"
}) => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Authority Conversion System",
        "provider": {
            "@type": "Person",
            "name": author,
            "jobTitle": "Strategic Advisor",
            "url": ogUrl
        },
        "description": description,
        "areaServed": "Global",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Strategic Positioning",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Identity Architecture"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Category Dominance"
                    }
                }
            ]
        }
    };

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={ogUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={ogUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SEO;
