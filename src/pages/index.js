/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ContactForm from "../components/contact-form"
import SEO from "../components/seo"
import Testimonials from "../components/testimonials"

const IndexPage = ({
  data: { contentfulHeroImage, allContentfulTestimonial, contentfulSiteCopy },
}) => (
  <Layout>
    <Hero
      src={contentfulHeroImage.image.fluid.src}
      title={contentfulHeroImage.title}
    />
    <section sx={{ maxWidth: "800px", margin: "2rem auto", padding: "0 20px" }}>
      <h2>{contentfulSiteCopy.contentTitle}</h2>
      <p>{contentfulSiteCopy.content.content}</p>
    </section>
    <Testimonials testimonials={allContentfulTestimonial.edges} />
    <section sx={{ maxWidth: "620px", margin: "2rem auto", padding: "0 20px" }}>
      <h2>Contact Us</h2>
      <ContactForm />
    </section>
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
    contentfulSiteCopy(contentful_id: { eq: "6aGKzLnKKSji1Oz3mjlLY0" }) {
      contentTitle
      content {
        content
      }
    }
  }
`
