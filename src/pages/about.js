import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/shared/layout"
import React from "react"
import SEO from "../components/shared/seo"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutPageImage {
      aboutLeft: file(relativePath: { eq: "about-left.jpg" }) {
        id
        childImageSharp {
          fixed(width: 960) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutTopRight: file(relativePath: { eq: "about-top-right.jpg" }) {
        id
        childImageSharp {
          fixed(width: 960) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutBottomRight: file(relativePath: { eq: "about-bottom-right.jpg" }) {
        id
        childImageSharp {
          fixed(width: 960) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title='About Rollney' />
      <section
        style={{
          background: "#F4D2BA",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "960px",
            margin: "0 auto",
            padding: "5%",
          }}
        >
          <h1>About Rollney</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            minus expedita ipsa mollitia cupiditate. Deleniti excepturi, quaerat
            pariatur sapiente assumenda saepe doloremque! Veniam sequi, atque ea
            magni accusamus ullam! Accusantium?
          </p>
        </div>
      </section>
      <section
        style={{
          background: "#F4D2BA",
          paddingBottom: "10%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateAreas: "'left top-right' 'left bottom-right'",
            gridGap: "8px",
          }}
        >
          <div
            style={{
              gridArea: "left",
            }}
          >
            <Img
              fluid={data.aboutLeft.childImageSharp.fluid}
              style={{ height: "100%" }}
              fadeIn='true'
            />
          </div>
          <div
            style={{
              gridArea: "top-right",
            }}
          >
            <Img
              fluid={data.aboutTopRight.childImageSharp.fluid}
              style={{ height: "100%" }}
              fadeIn='true'
            />
          </div>
          <div
            style={{
              gridArea: "bottom-right",
            }}
          >
            <Img
              fluid={data.aboutBottomRight.childImageSharp.fluid}
              style={{ height: "100%" }}
              fadeIn='true'
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
