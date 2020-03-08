/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Grid, Heading, Text, Box } from "theme-ui"

export default ({ testimonials }) => {
  return (
    <section
      sx={{
        display: "flex",
        maxWidth: "1200px",
        margin: "2rem auto",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Heading as="h2">Testimonials</Heading>
      <Grid my="2rem" gap={"12px 32px"} columns={["auto", "repeat(2, 1fr)"]}>
        {testimonials.map(({ node }) => {
          return (
            <Box
              sx={{
                boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
                padding: 2,
                borderRadius: 4,
              }}
            >
              <Heading as="h3">{node.name}</Heading>
              <Text as="p">"{node.quote}"</Text>
            </Box>
          )
        })}
      </Grid>
    </section>
  )
}
