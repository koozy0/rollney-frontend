import { graphql, useStaticQuery } from "gatsby"

import React from "react"
import Img from "gatsby-image"

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
        <h2 style={styles.header}>FRESHLY BAKED KURTOS TO SERVE YOU DAILY</h2>

        <div style={styles.gridContainer}>
          {data.images.nodes.map(image => (
            <div key={image.id}>
              <Img fluid={image.childImageSharp.fluid} />
              <p style={styles.text}>{image.name}</p>
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
    padding: "2rem",
  },
  wrapper: {
    maxWidth: "960px",
    margin: "0 auto",
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
    padding: "1rem",
  },
  gridItem: {
    minHeight: "280px",
    background: "#ccc",
  },
  text: {
    textAlign: "center",
    fontFamily: "MontserratRegular",
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: "600",
  },
}
