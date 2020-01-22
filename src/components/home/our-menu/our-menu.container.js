import MenuGrid from "./menu-grid"
import React from "react"
import TopWave from "./top-wave"

function OurMenuContainer() {
  return (
    <section
      id="our-menu"
      style={{
        background: "#eed1b3",
      }}
    >
      <TopWave />
      <h2 style={styles.header}>OUR MENU</h2>
      <div style={styles.content}>
        <MenuGrid />
      </div>
    </section>
  )
}

export default OurMenuContainer

const styles = {
  content: {
    padding: "5%",
  },
  header: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "MontserratRegular",
    fontSize: "4vmin",
  },
}
