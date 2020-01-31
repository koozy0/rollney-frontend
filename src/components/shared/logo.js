import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"

function Logo({ style }) {
  const data = useStaticQuery(graphql`
    query Logo {
      img: file(relativePath: { eq: "brand-logo.png" }) {
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
    <div
      style={{
        ...style,
      }}
      className="brand__logo"
    >
      <Img fluid={data.img.childImageSharp.fluid} fadeIn={true} />
    </div>
  )
}

export default Logo
