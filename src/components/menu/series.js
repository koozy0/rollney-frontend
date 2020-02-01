import { graphql, useStaticQuery } from "gatsby"

import GridItem from "../shared/grid-item"
import Img from "gatsby-image"
import { Link } from "gatsby"
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
          <Link to="/menu/#kurtos">
            <GridItem
              series="KURTOS"
              image={<Img fluid={data.kurtos.childImageSharp.fluid} />}
              isHover={true}
            />
          </Link>

          <Link to="/menu/#ice-cream">
            <GridItem
              series="ICE-CREAM"
              image={<Img fluid={data.iceCream.childImageSharp.fluid} />}
              isHover={true}
            />
          </Link>

          <Link to="/menu/#savoury">
            <GridItem
              series="SAVOURY CONE"
              image={<Img fluid={data.savoury.childImageSharp.fluid} />}
              isHover={true}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Series

const styles = {
  section: {
    background: "#ebbc90",
    padding: "1rem",
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
  },
}
