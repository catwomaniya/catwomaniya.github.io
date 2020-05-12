import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components'
import Balloon from "../components/balloon"
import Balloon2 from "../components/balloon2"
import Balloon3 from "../components/balloon3"
import Balloon4 from "../components/balloon4"
import Balloon5 from "../components/balloon5"
import Pancake from "../components/pancake"

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
flex-wrap: nowrap;
flex: 1;
position: relative;
`

const StyledLink = styled(Link)`
display: flex;
flex-direction: column;
justify-content: center;
cursor: pointer;
width: 300px;
height: 200px;
background-color: rebeccapurple;
color: white;
align-items: center;
text-decoration: none;
font-size: 50px;
font-family:    Arial, Helvetica, sans-serif;
`

const ImageWrapper = styled.div`
  width: 50%
`

const BalloonImageWrapper = styled.div`
  width: 10%
`

const BirthdayWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
position: absolute;
right: 0;
top: 0;
`

const BalloonWrapper = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 50px;
flex: 1;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <div>
        <h1>Hi people</h1>
        <p>Welcome to my personal blog.</p>
        <p>I write about cats.</p>
      </div>
      <BalloonWrapper>
        <BalloonImageWrapper>
          <a href='javascript:;'>
            <Balloon />
          </a>
        </BalloonImageWrapper>
        <BalloonImageWrapper >
          <a href='javascript:;'>
            <Balloon2 />
          </a>
        </BalloonImageWrapper>
        <BalloonImageWrapper >
          <a href='javascript:;'>
            <Balloon3 />
          </a>
        </BalloonImageWrapper>
        <BalloonImageWrapper >
          <a href='javascript:;'>
            <Balloon4 />
          </a>
        </BalloonImageWrapper>
        <BalloonImageWrapper >
          <a href='javascript:;'>
            <Balloon5 />
          </a>
        </BalloonImageWrapper>
      </BalloonWrapper>
    </Wrapper>
    <Wrapper className='root'>
      <ImageWrapper className="fluidContainer">
        <a href='javascript:;'>
          <Image className="landingImage" />
        </a>
      </ImageWrapper>
      <BirthdayWrapper className="bdayWrapper">
        <ImageWrapper className="packageContainer">
          <a href='javascript:;'>
            <Pancake />
          </a>
        </ImageWrapper>
        <StyledLink to="/blog/" className="blogLink">
          <p>HAPPY</p><p>BIRTHDAY</p><span role="img" aria-label="right">L&lt;3VE 👉</span>
        </StyledLink>
      </BirthdayWrapper>
    </Wrapper>
  </Layout>
)

export default IndexPage
