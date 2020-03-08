import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"
import Testimonials from "../components/testimonials"

const IndexPage = ({
  data: { contentfulHeroImage, allContentfulTestimonial },
}) => (
  <Layout>
    <Hero
      src={contentfulHeroImage.image.fluid.src}
      title={contentfulHeroImage.title}
    />
    <Testimonials testimonials={allContentfulTestimonial.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query testimonialsAndHeroImage {
    contentfulHeroImage(contentful_id: { eq: "13ZvmVYXDd9chrQrJnXrB4" }) {
      image {
        fluid {
          src
        }
      }
      title
    }
    allContentfulTestimonial {
      edges {
        node {
          id
          name
          quote
        }
      }
    }
  }
`
