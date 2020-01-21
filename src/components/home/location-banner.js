import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"

function LocationBanner() {
  const data = useStaticQuery(graphql`
    query LocationBannerImage {
      banner: file(relativePath: { eq: "sample-map.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}></div>
      <Img fluid={data.banner.childImageSharp.fluid} fadeIn={true} />
    </div>
  )
}

export default LocationBanner

const styles = {
  wrapper: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    background: "rgba(0,0,0,.7)",
    zIndex: "1",
  },
}
