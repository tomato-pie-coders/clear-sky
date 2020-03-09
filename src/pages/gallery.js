/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"

export default ({ data: { allContentfulGallery } }) => {
  return (
    <Layout>
      <div
        sx={{
          display: "grid",
          gridGap: "15px", // theme.space[4]
          // use arrays for mobile-first responsive styles
          gridTemplateColumns: [
            "auto", // default to a stacked layout on small screens
            "repeat(4, 1fr)", // use columns for larger screens
          ],
          gridTemplateRows: ["auto", "repeat(6, 6vw)"],
        }}
      >
        {allContentfulGallery.edges.map(({ node }) => (
          <figure
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            key={node.contenful_id}
          >
            <img src={node.image.fluid.src} alt={node.image.title} />
          </figure>
        ))}
      </div>
    </Layout>
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
  }
`
