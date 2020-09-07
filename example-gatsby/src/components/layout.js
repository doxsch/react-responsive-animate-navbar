/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import {ReactNavbar} from 'react-responsive-animate-navbar'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <header>
    <ReactNavbar
      color="#191919"
      logo="https://svgshare.com/i/KHh.svg"
      menu={[
        { name: "HOME", to: "/" },
        { name: "Page 2", to: "/page-2" },
        { name: "ABOUT ME", to: "/about" },
        { name: "CONTACT", to: "/contact" },
      ]}
      social={[
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/nazeh-taha/",
          icon: ["fab", "linkedin-in"],
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/nazeh200/",
          icon: ["fab", "facebook-f"],
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/nazeh_taha/",
          icon: ["fab", "instagram"],
        },
        { name: "Twitter", url: "http://nazehtaha.herokuapp.com/", icon: ["fab", "twitter"] }
      ]}
    />
    </header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
