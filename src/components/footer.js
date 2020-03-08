/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <footer
      sx={{
        fontSize: 1,
        color: "background",
        bg: "text",
        variant: "styles.footer",
      }}
    >
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          maxWidth: 900,
          mx: "auto",
          px: 2,
          py: 4,
        }}
      >
        <Link to="/" sx={{ color: "#fff", p: 2 }}>
          Home
        </Link>
        <Link to="/gallery" sx={{ color: "#fff", p: 2 }}>
          Gallery
        </Link>
        <Link to="/contact" sx={{ color: "#fff", p: 2 }}>
          Contact
        </Link>
        <div sx={{ mx: "auto" }} />
        <div sx={{ p: 2 }}>© {new Date().getFullYear()} Clear Sky</div>
      </div>
    </footer>
  )
}
