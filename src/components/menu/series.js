import { graphql, useStaticQuery } from "gatsby"

import React from "react"
import Img from "gatsby-image"
import GridItem from "../shared/grid-item"
import Button from "../shared/button"

function Series() {
  const data = useStaticQuery(graphql`
    query MenuSeriesImage2 {
      kurtos: file(
        relativePath: { eq: "menu/kurtos/original-cinamon-kurtos.png" }
      ) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iceCream: file(
        relativePath: { eq: "menu/ice-cream/lotus-crunch-cone.png" }
      ) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      savoury: file(
        relativePath: { eq: "menu/savoury/chicken-slice-cheese.png" }
      ) {
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
      <div style={styles.gridContainer}>
        <GridItem
          series="KURTOS"
          image={<Img fluid={data.kurtos.childImageSharp.fluid} />}
        >
          <Button style={styles.button} to="/menu/#kurtos">
            SEE MORE
          </Button>
        </GridItem>

        <GridItem
          series="ICE-CREAM"
          image={<Img fluid={data.iceCream.childImageSharp.fluid} />}
        >
          <Button style={styles.button} to="/menu/#ice-cream">
            SEE MORE
          </Button>
        </GridItem>

        <GridItem
          series="SAVOURY CONE"
          image={<Img fluid={data.savoury.childImageSharp.fluid} />}
        >
          <Button style={styles.button} to="/menu/#savoury">
            SEE MORE
          </Button>
        </GridItem>
      </div>
    </section>
  )
}

export default Series

const styles = {
  wrapper: {
    background: "#ebbc90",
    padding: "10% 0",
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
  button: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  },
}
