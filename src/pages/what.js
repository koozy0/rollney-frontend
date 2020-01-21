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
      <section style={styles.wrapper}>
        <div style={styles.content}>
          <h3 style={styles.header.base}>
            <span style={styles.header.cursive}>What's a</span>
            <span style={styles.header.regular}>Chimney</span>
          </h3>
          <p style={styles.text}>
            Known as Kürtöskalács in Hungarian chimney cake are unique
            bread-like freshly baked Hungarian pastries, named after their
            hollow cylindrical shape. They have a satisfying crunch on the
            outside and a delicious, light and fluffy dough inside. The freshly
            baked dough inside remain fluffy and soft like the best piece of
            bread you've never eaten.
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

const styles = {
  wrapper: {
    background: "#F4D2BA",
    padding: "5% 0",
  },
  content: {
    width: "100%",
    maxWidth: "960px",
    margin: "0 auto",
    fontFamily: "MontserratRegular",
    padding: "5%",
  },
  header: {
    base: {
      fontSize: "7vmax",
      fontWeight: "400",
      padding: "0 10%",
      textAlign: "right",
    },
    cursive: {
      color: "#fff",
      fontFamily: "DancingScriptRegular",
      display: "block",
    },
    regular: {
      color: "#fbbc89",
      fontFamily: "RenogareRegular",
      display: "block",
    },
  },
  text: {
    lineHeight: "1.5",
    fontSize: "2.5vmin",
  },
}
