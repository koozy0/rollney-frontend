import AboutRollney from "./about-rollney"
import React from "react"
import WhatsChimney from "./whats-chimney"

function AboutContainer() {
  return (
    <section>
      <div style={styles.grid}>
        <AboutRollney />
        <WhatsChimney />
      </div>
    </section>
  )
}

export default AboutContainer

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    position: "relative",
    zIndex: "100",
    background: "#d8b49c",
  },
  logo: {
    position: "absolute",
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "100",
  },
}
