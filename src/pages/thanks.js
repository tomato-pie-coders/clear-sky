/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import { Heading, Text } from "theme-ui"
import SEO from "../components/seo.js"
import Layout from "../components/layout.js"

export default ({ data: { contentfulSiteCopy } }) => {
  return (
    <>
      <SEO title={contentfulSiteCopy.contentTitle} />
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
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    contentfulSiteCopy(contentful_id: { eq: "4omD7boMs85H8LoTHUQ20B" }) {
      contentTitle
      content {
        content
      }
    }
  }
`
