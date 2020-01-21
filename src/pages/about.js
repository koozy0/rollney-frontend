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
      <SEO title="About Rollney" />
      <section style={styles.wrapper}>
        <div style={styles.content}>
          <h1 style={styles.header.base}>
            <span style={styles.header.cursive}>About</span>
            <span style={styles.header.regular}>Rollney</span>
          </h1>
          <p style={styles.text}>
            <strong>Rollney</strong> took hours to make every single
            Kürtöskalács to birng the best and traditional Kürtöskalács in town.
            With our open rotiserrie grill, Hungarian heritage and traditional
            baking methods and we are proud to bring Kürtöskalács, the delicious
            and unique treat fresh from Hungary to Malaysia.
          </p>
          <p style={styles.text}>
            Rollney is more than just a dessert, we spread happiness and
            committed to bring the finest Kürtöskalács to you.
          </p>
        </div>
      </section>
      <section style={styles.wrapper}>
        <div style={styles.imgGrid}>
          <div
            style={{
              gridArea: "left",
            }}
          >
            <Img
              fluid={data.aboutLeft.childImageSharp.fluid}
              style={styles.img}
              fadeIn={true}
            />
          </div>
          <div
            style={{
              gridArea: "top-right",
            }}
          >
            <Img
              fluid={data.aboutTopRight.childImageSharp.fluid}
              style={styles.img}
              fadeIn={true}
            />
          </div>
          <div
            style={{
              gridArea: "bottom-right",
            }}
          >
            <Img
              fluid={data.aboutBottomRight.childImageSharp.fluid}
              style={styles.img}
              fadeIn={true}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

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
  imgGrid: {
    display: "grid",
    gridTemplateAreas: "'left top-right' 'left bottom-right'",
    gridGap: "8px",
  },
  img: { height: "100%" },
  header: {
    base: {
      fontSize: "7vmax",
      fontWeight: "400",
      padding: "0 10%",
    },
    cursive: {
      color: "#fff",
      fontFamily: "DancingScriptRegular",
      display: "block",
      textAlign: "left",
    },
    regular: {
      color: "#fbbc89",
      fontFamily: "RenogareRegular",
      display: "block",
      textAlign: "right",
    },
  },
  text: {
    lineHeight: "1.5",
    fontSize: "2.5vmin",
  },
}
