import { graphql, useStaticQuery } from "gatsby"

import React from "react"
import Img from "gatsby-image"

function IceCreamItems() {
  const data = useStaticQuery(graphql`
    query IceCreamImages {
      images: allFile(filter: { relativeDirectory: { eq: "menu/ice-cream" } }) {
        nodes {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <section style={styles.wrapper} id="ice-cream">
      <h2 style={styles.header}>
        KURTOS TOPPED WITH VANILLA SOFT SERVE THAT MAKE YOUR DAY
      </h2>

      <div style={styles.gridContainer}>
        {data.images.nodes.map(image => (
          <div key={image.id}>
            <Img fluid={image.childImageSharp.fluid} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default IceCreamItems

const styles = {
  wrapper: {
    background: "#eed1b3",
    padding: "10% 0",
  },
  header: {
    fontFamily: "MontserratRegular",
    textAlign: "center",
    padding: "0 16px",
    marginBottom: "2rem",
    color: "#5f3713",
  },
  gridContainer: {
    display: "grid",
    maxWidth: "960px",
    margin: "0 auto",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gridAutoFlow: "dense",
    gridGap: "2rem",
  },
  gridItem: {
    minHeight: "280px",
    background: "#ccc",
  },
}