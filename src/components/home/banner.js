import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"

function Banner() {
  const data = useStaticQuery(graphql`
    query Image {
      image: file(relativePath: { eq: "banner.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section style={styles.wrapper}>
      <Img fluid={data.image.childImageSharp.fluid} fadeIn={true} />
      <div style={styles.overlay}>
        <h1 className="banner-text" style={styles.overlayText}>
          MALAYSIA 1st ORIGINAL CHIMNEY CAKE
        </h1>
        <h1 className="banner-text" style={styles.overlayText}>
          THE FINEST KÜRTÖSKALÁCS
        </h1>
      </div>
    </section>
  )
}

export default Banner

const styles = {
  wrapper: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    background: "rgba(0,0,0,.7)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    color: "#fff",
    fontFamily: "MontserratRegular",
    textAlign: "center",
    fontWeight: "600",
    lineHeight: "1.5",
  },
}
