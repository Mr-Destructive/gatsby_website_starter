import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, lang = "en", meta = [] }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author {
                            name
                        }
                        social {
                            twitter
                        }
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={site.siteMetadata.title} | {site.siteMetadata} 
            
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: "description",
                    content: metaDescription,
                },
                {
                    property: "og:title",
                    content: title,
                },
                {
                    property: "og:description",
                    content: metaDescription,
                },
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    name: "twitter:card",
                    content: "summary",
                },
                {
                    name: "twitter:creator",
                    content: site.siteMetadata.social.twitter,
                },
                {
                    name: "twitter:title",
                    content: title,
                },
                {
                    name: "twitter:description",
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    );
};

export default SEO;
