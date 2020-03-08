/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Box, Heading } from "theme-ui"

export default ({ src, title }) => {
  return (
    <Box
      sx={{
        background: `linear-gradient(
          rgba(0, 0, 0, 0.45), 
          rgba(0, 0, 0, 0.45)
        ), url(${src})`,
        backgroundSize: "cover",
        height: "35vh",
        backgroundPosition: "center center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Heading as="h2" color="white">
        {title}
      </Heading>
    </Box>
  )
}
