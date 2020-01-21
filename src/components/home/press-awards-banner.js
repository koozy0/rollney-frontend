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
          fixed(width: 128) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tv3: file(relativePath: { eq: "press-award-tv3.png" }) {
        id
        childImageSharp {
          fixed(width: 128) {
            ...GatsbyImageSharpFixed
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
          <Img fixed={data.tv3.childImageSharp.fixed} fadeIn={true} />
          <Img fixed={data.tv2.childImageSharp.fixed} fadeIn={true} />
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
    transform: "translateX(-50%)",
    fontSize: "1.5rem",
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
}
