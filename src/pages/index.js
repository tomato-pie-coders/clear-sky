import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data: { contentfulHeroImage } }) => (
  <Layout>
    <SEO title="Home" />
    <img
      src={contentfulHeroImage.image.fluid.src}
      alt={contentfulHeroImage.image.title}
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    contentfulHeroImage(contentful_id: { eq: "13ZvmVYXDd9chrQrJnXrB4" }) {
      image {
        fluid {
          src
        }
      }
    }
  }
`
