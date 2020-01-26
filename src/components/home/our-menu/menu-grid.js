import { graphql, useStaticQuery } from "gatsby"

import React from "react"
import Img from "gatsby-image"
import GridItem from "../../shared/grid-item"

function MenuGrid() {
  const data = useStaticQuery(graphql`
    query MenuSeriesImage1 {
      kurtos: file(
        relativePath: { eq: "menu/kurtos/Original Cinnamon Kurtos.png" }
      ) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iceCream: file(
        relativePath: { eq: "menu/ice-cream/Lotus Crunch Cone.png" }
      ) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      savoury: file(
        relativePath: { eq: "menu/savoury/Chicken Slice and Chicken.png" }
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
    <div style={styles.wrapper}>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}>
          <GridItem
            series="KURTOS"
            image={<Img fluid={data.kurtos.childImageSharp.fluid} />}
          >
            <p style={styles.text}>FRESHLY BAKED KURTOS TO SERVE YOU DAILY</p>
          </GridItem>
        </div>
        <div style={styles.gridItem}>
          <GridItem
            series="ICE-CREAM"
            image={<Img fluid={data.iceCream.childImageSharp.fluid} />}
          >
            <p style={styles.text}>
              KURTOS TOPPED WITH VANILLA SOFT SERVE THAT WILL MAKE YOUR DAY
            </p>
          </GridItem>
        </div>
        <GridItem
          series="SAVOURY CONE"
          image={<Img fluid={data.savoury.childImageSharp.fluid} />}
        >
          <p style={styles.text}>MORE THAN JUST ICE CREAM</p>
        </GridItem>
      </div>
    </div>
  )
}

export default MenuGrid

const styles = {
  wrapper: {
    maxWidth: "960px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "2rem",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gridAutoFlow: "dense",
    gridGap: "2rem",
  },
  text: {
    fontFamily: "MontserratRegular",
    color: "#5f3713",
    textAlign: "center",
  },
}
