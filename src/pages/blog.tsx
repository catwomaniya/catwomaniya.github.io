// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from 'styled-components'

import Pancake from "../components/pancake"
import BulbBlue from "../components/bulb_blue"
import BulbGreen from "../components/bulb_green"
import BulbPink from "../components/bulb_pink"
import BulbOrange from "../components/bulb_orange"
import BulbRed from "../components/bulb_red"

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 120px;
flex-wrap: nowrap;
flex: 1;
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
flex: 1;
`

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Wrapper>
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
      </Wrapper>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
