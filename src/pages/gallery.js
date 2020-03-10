/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo.js"
import Layout from "../components/layout.js"

export default ({ data: { allContentfulGallery, contentfulSiteCopy } }) => {
  return (
    <>
      <SEO title="Gallery" />
      <Layout>
        <section sx={{ padding: "0 2rem" }}>
          <div sx={{ margin: "2rem auto", maxWidth: "800px" }}>
            <h2>{contentfulSiteCopy.contentTitle}</h2>
            <p>{contentfulSiteCopy.content.content}</p>
          </div>
          <div
            sx={{
              display: "grid",
              gridGap: "15px",
              gridTemplateColumns: ["auto", "repeat(4, 1fr)"],
              gridTemplateRows: ["auto", "repeat(6, 6vw)"],
            }}
          >
            {allContentfulGallery.edges.map(({ node }) => (
              <figure
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  m: 0,
                  p: 0,
                }}
                key={node.contenful_id}
              >
                <img
                  sx={{ maxWidth: "100%", margin: 0, p: 0 }}
                  src={node.image.fluid.src}
                  alt={node.image.title}
                />
              </figure>
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allContentfulGallery {
      edges {
        node {
          contentful_id
          image {
            title
            fluid {
              src
            }
          }
        }
      }
    }
    contentfulSiteCopy(contentful_id: { eq: "7DUhVYDZ82OQ45P0mjDEDb" }) {
      contentTitle
      content {
        content
      }
    }
  }
`
