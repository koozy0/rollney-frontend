import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/shared/layout"
import React from "react"
import SEO from "../components/shared/seo"

const WhatPage = () => {
  const data = useStaticQuery(graphql`
    query WhatPagePageImage {
      image: file(relativePath: { eq: "what-is-chimney.jpg" }) {
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
      <SEO title="What's a Chimney" />
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
          <h1>What's a Chimney</h1>
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
        <Img
          fluid={data.image.childImageSharp.fluid}
          style={{ height: "100%" }}
          fadeIn={true}
        />
      </section>
    </Layout>
  )
}

export default WhatPage
