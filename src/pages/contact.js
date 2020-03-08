/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Heading } from "theme-ui"
import ContactForm from "../components/contact-form.js"
import Layout from "../components/layout.js"

export default ({}) => {
  return (
    <Layout>
      <section
        sx={{
          maxWidth: "600px",
          margin: "2rem auto",
        }}
      >
        <Heading as="h2">Contact Us</Heading>
        <ContactForm />
      </section>
    </Layout>
  )
}
