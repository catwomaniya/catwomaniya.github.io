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

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
flex-wrap: nowrap;
flex: 1;
`

const StyledLink = styled(Link)`
display: flex;
justify-content: center;
cursor: pointer;
width: 300px;
height: 100px;
background-color: rebeccapurple;
color: white;
align-items: center;
text-decoration: none;
font-size: 50px;
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
justify-content: space-evenly;
align-items: center;
height: 828px;
flex: 1;
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
    <Wrapper className='imageWrapper'>
      <div>
        <h1>Hi people</h1>
        <p>Welcome to my personal blog.</p>
        <p>I write about cats.</p>
      </div>
      <BalloonWrapper>
        <BalloonImageWrapper>
          <a href='javascript:;'>
            <Balloon className="landingImage" />
          </a>
        </BalloonImageWrapper>
        <BalloonImageWrapper >
          <a href='javascript:;'>
            <Balloon2 className="landingImage" />
          </a>
        </BalloonImageWrapper>
        <BalloonImageWrapper >
          <a href='javascript:;'>
            <Balloon3 className="landingImage" />
          </a>
        </BalloonImageWrapper>
        <BalloonImageWrapper >
          <a href='javascript:;'>
            <Balloon4 className="landingImage" />
          </a>
        </BalloonImageWrapper>
        <BalloonImageWrapper >
          <a href='javascript:;'>
            <Balloon5 className="landingImage" />
          </a>
        </BalloonImageWrapper>
      </BalloonWrapper>
    </Wrapper>
    <Wrapper className='imageWrapper'>
      <ImageWrapper className="fluidContainer">
        <a href='javascript:;'>
          <Image className="landingImage" />
        </a>
      </ImageWrapper>
      <BirthdayWrapper>
        <StyledLink to="/blog/" className="blogLink">
          {/* Head over to my blog &nbsp;<span role="img" aria-label="right">👉</span> */}
          HAPPY&nbsp;<span role="img" aria-label="right">👉</span>
        </StyledLink>
      </BirthdayWrapper>
    </Wrapper>


  </Layout>
)

export default IndexPage
