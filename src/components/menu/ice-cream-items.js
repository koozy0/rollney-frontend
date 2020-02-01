import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"

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
    <section style={styles.section} id="ice-cream">
      <div style={styles.wrapper}>
        <h1 style={styles.header} className="heading">
          Kurtos topped with vanilla soft serve that make your day
        </h1>

        <div style={styles.gridContainer}>
          {data.images.nodes.map(image => (
            <div key={image.id}>
              <Img fluid={image.childImageSharp.fluid} />
              <p style={styles.itemName} className="text">
                <strong>{image.name}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IceCreamItems

const styles = {
  section: {
    background: "#eed1b3",
    padding: "2rem 1rem",
  },
  wrapper: {
    maxWidth: "960px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    color: "#5f3713",
    textTransform: "uppercase",
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
  itemName: {
    textAlign: "center",
    color: "#fff",
    fontSize: "1.2rem",
  },
}
