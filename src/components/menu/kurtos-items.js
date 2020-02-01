import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"

function KurtosItems() {
  const data = useStaticQuery(graphql`
    query KurtosImages {
      images: allFile(filter: { relativeDirectory: { eq: "menu/kurtos" } }) {
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
    <section style={styles.section} id="kurtos">
      <div style={styles.wrapper}>
        <h1 style={styles.header} className="heading">
          FRESHLY BAKED KURTOS TO SERVE YOU DAILY
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

export default KurtosItems

const styles = {
  section: {
    background: "#eed1b3",
    padding: "1rem",
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
