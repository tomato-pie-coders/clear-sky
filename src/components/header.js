/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      color: "background",
      bg: "primary",
      boxShadow:
        "0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)",
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
        py: 1,
      }}
    >
      <Link
        to="/"
        sx={{
          color: "background",
          p: 2,
        }}
      >
        Clear Sky
      </Link>
      <div sx={{ mx: "auto" }} />
      <Link
        to="/contact"
        sx={{
          color: "background",
          p: 2,
        }}
      >
        Contact
      </Link>
      <Link
        to="/gallery"
        sx={{
          color: "background",
          p: 2,
        }}
      >
        Gallery
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
