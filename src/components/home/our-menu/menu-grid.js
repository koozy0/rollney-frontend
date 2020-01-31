import { graphql, useStaticQuery } from "gatsby"

import GridItem from "../../shared/grid-item"
import Img from "gatsby-image"
import React from "react"

function MenuGrid() {
  const data = useStaticQuery(graphql`
    query MenuSeriesImage1 {
      kurtos: file(relativePath: { eq: "menu/series/kurtos.png" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iceCream: file(relativePath: { eq: "menu/series/ice-cream.png" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      savoury: file(relativePath: { eq: "menu/series/savoury.png" }) {
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
            <p className="text" style={styles.text}>
              Freshly baked kurtos to serve you daily
            </p>
          </GridItem>
        </div>
        <div style={styles.gridItem}>
          <GridItem
            series="ICE-CREAM"
            image={<Img fluid={data.iceCream.childImageSharp.fluid} />}
          >
            <p className="text" style={styles.text}>
              Kurtos topped with vanilla soft serve that will make your day
            </p>
          </GridItem>
        </div>
        <GridItem
          series="SAVOURY CONE"
          image={<Img fluid={data.savoury.childImageSharp.fluid} />}
        >
          <p className="text" style={styles.text}>
            More than just ice cream
          </p>
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
    textTransform: "uppercase",
  },
}
