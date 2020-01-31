import { graphql, useStaticQuery } from "gatsby"

import GridItem from "../shared/grid-item"
import Img from "gatsby-image"
import NavLink from "../shared/nav-link"
import React from "react"

function Series() {
  const data = useStaticQuery(graphql`
    query MenuSeriesImage2 {
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
    <section style={styles.section}>
      <div style={styles.wrapper}>
        <div style={styles.gridContainer}>
          <NavLink to="/menu/#kurtos" style={{ padding: "0" }}>
            <GridItem
              series="KURTOS"
              image={<Img fluid={data.kurtos.childImageSharp.fluid} />}
            />
          </NavLink>

          <NavLink to="/menu/#ice-cream" style={{ padding: "0" }}>
            <GridItem
              series="ICE-CREAM"
              image={<Img fluid={data.iceCream.childImageSharp.fluid} />}
            />
          </NavLink>

          <NavLink to="/menu/#savoury" style={{ padding: "0" }}>
            <GridItem
              series="SAVOURY CONE"
              image={<Img fluid={data.savoury.childImageSharp.fluid} />}
            />
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Series

const styles = {
  section: {
    background: "#ebbc90",
    padding: "2rem",
  },
  wrapper: {
    maxWidth: "960px",
    margin: "0 auto",
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
  button: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  },
}
