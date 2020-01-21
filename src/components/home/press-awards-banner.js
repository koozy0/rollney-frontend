import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"

function PressAwardsBanner() {
  const data = useStaticQuery(graphql`
    query PressAwardsBannerImage {
      banner: file(relativePath: { eq: "press-award-banner.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tv2: file(relativePath: { eq: "press-award-tv2.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tv3: file(relativePath: { eq: "press-award-tv3.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}>
        <div style={styles.captionGroup}>
          <p style={styles.caption}>Highly Recommended By</p>
          <div style={styles.grid}>
            <Img fluid={data.tv3.childImageSharp.fluid} fadeIn={true} />
            <Img fluid={data.tv2.childImageSharp.fluid} fadeIn={true} />
          </div>
        </div>
      </div>
      <Img fluid={data.banner.childImageSharp.fluid} fadeIn={true} />
    </div>
  )
}

export default PressAwardsBanner

const styles = {
  wrapper: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,.7)",
    zIndex: "100",
  },
  captionGroup: {
    fontFamily: "MontserratRegular",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "4vmin",
  },
  caption: {
    marginBottom: "8vmin",
  },
  logo: {
    tv2: {
      height: "64px",
      width: "128px",
    },
    tv3: {
      height: "64px",
      width: "128px",
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(64px, 1fr))",
  },
}
