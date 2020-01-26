import ImageGrid from "../components/about/image-grid"
import Layout from "../components/shared/layout"
import React from "react"
import SEO from "../components/shared/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Rollney" />
      <section style={styles.wrapper}>
        <div style={styles.content}>
          <h1 style={styles.header.base}>
            <span style={styles.header.cursive}>About</span>
            <span style={styles.header.regular}>Rollney</span>
          </h1>
          <p>
            <strong>Rollney</strong> took hours to make every single
            Kürtöskalács to birng the best and traditional Kürtöskalács in town.
            With our open rotiserrie grill, Hungarian heritage and traditional
            baking methods and we are proud to bring Kürtöskalács, the delicious
            and unique treat fresh from Hungary to Malaysia.
          </p>
          <p>
            Rollney is more than just a dessert, we spread happiness and
            committed to bring the finest Kürtöskalács to you.
          </p>
        </div>
      </section>
      <ImageGrid />
    </Layout>
  )
}

export default AboutPage

const styles = {
  wrapper: {
    background: "#F4D2BA",
    padding: "5% 0",
  },
  content: {
    width: "100%",
    maxWidth: "960px",
    margin: "0 auto",
    fontFamily: "MontserratRegular",
    padding: "5%",
  },
  imgGrid: {
    display: "grid",
    gridTemplateAreas: "'left top-right' 'left bottom-right'",
    gridGap: "8px",
  },
  img: { height: "100%" },
  header: {
    base: {
      fontSize: "3rem",
      fontWeight: "400",
      maxWidth: "280px",
      marginTop: "0",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "1rem",
    },
    cursive: {
      color: "#fff",
      fontFamily: "DancingScriptRegular",
      display: "block",
      textAlign: "left",
    },
    regular: {
      color: "#fbbc89",
      fontFamily: "RenogareRegular",
      display: "block",
      textAlign: "right",
    },
  },
}
