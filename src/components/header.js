/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      display: "flex",
      alignItems: "center",
      variant: "styles.header",
    }}
  >
    <Link
      to="/"
      sx={{
        variant: "styles.navlink",
        p: 2,
      }}
    >
      Clear Sky
    </Link>
    <div sx={{ mx: "auto" }} />
    <Link
      to="/contact"
      sx={{
        variant: "styles.navlink",
        p: 2,
      }}
    >
      Contact
    </Link>
    <Link
      to="/gallery"
      sx={{
        variant: "styles.navlink",
        p: 2,
      }}
    >
      Gallery
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
