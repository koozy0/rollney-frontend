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
    <section style={styles.wrapper} id="hero">
      <Img fluid={data.image.childImageSharp.fluid} fadeIn={true} />
      <div style={styles.overlay}>
        <h1 className="heading" style={styles.overlayText}>
          <span>Malaysia 1st original chimney cake</span>
          <br />
          <span>The finest kürtöskalács</span>
        </h1>
      </div>
    </section>
  )
}

export default Banner

const styles = {
  wrapper: {
    position: "relative",
    maxHeight: "50vh",
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
    display: "grid",
    placeItems: "center",
    padding: "1rem",
  },
  overlayText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    textTransform: "uppercase",
  },
}
