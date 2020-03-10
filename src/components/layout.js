/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer.js"

const Layout = ({ children }) => {
  return (
    <>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          // set this to `minHeight: '100vh'` for full viewport height
          minHeight: "100vh",
        }}
      >
        <Header />
        <main
          sx={{
            width: "100%",
            flex: "1 1 auto",
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
