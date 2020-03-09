/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import { Heading, Text } from "theme-ui"
import ContactForm from "../components/contact-form.js"
import Layout from "../components/layout.js"

export default ({ data: { contentfulSiteCopy } }) => {
  return (
    <Layout>
      <section
        sx={{
          maxWidth: "620px",
          margin: "2rem auto",
          padding: "0 20px",
        }}
      >
        <Heading as="h2" mb="1rem">
          {contentfulSiteCopy.contentTitle}
        </Heading>
        <Text>{contentfulSiteCopy.content.content}</Text>
        <ContactForm />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query contactCopy {
    contentfulSiteCopy(contentful_id: { eq: "1zgyE7FHDRxddfMXdUKefJ" }) {
      contentTitle
      content {
        content
      }
    }
  }
`
