/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from 'styled-components'

import BulbBlue from "../components/bulb_blue"
import BulbGreen from "../components/bulb_green"
import BulbPink from "../components/bulb_pink"
import BulbOrange from "../components/bulb_orange"
import BulbRed from "../components/bulb_red"

const Wrapper2 = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 120px;
flex-wrap: nowrap;
margin-top: -53px;
`

const BulbImageWrapper = styled.div`
  width: 5%;
`

const BulbWrapper = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 120px;
`


const Layout = ({ children, location }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {location && <Wrapper2>
          <BulbWrapper>
            <BulbImageWrapper>
              <a href='javascript:;'>
                <BulbBlue />
              </a>
            </BulbImageWrapper>
            <BulbImageWrapper >
              <a href='javascript:;'>
                <BulbGreen />
              </a>
            </BulbImageWrapper>
            <BulbImageWrapper >
              <a href='javascript:;'>
                <BulbOrange />
              </a>
            </BulbImageWrapper>
            <BulbImageWrapper >
              <a href='javascript:;'>
                <BulbPink />
              </a>
            </BulbImageWrapper>
            <BulbImageWrapper >
              <a href='javascript:;'>
                <BulbRed />
              </a>
            </BulbImageWrapper>
          </BulbWrapper>
        </Wrapper2>}
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
