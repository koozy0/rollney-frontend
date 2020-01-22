import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"

function ImageGrid() {
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
  )
}

export default ImageGrid

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
      fontSize: "calc(2rem + 4vmin)",
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
    fontSize: "calc(1rem + .5vmin)",
  },
}
