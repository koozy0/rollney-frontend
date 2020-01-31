import Button from "../../shared/button"
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
      <h1 className="heading" style={styles.header}>
        OUR MENU
      </h1>
      <div style={styles.content}>
        <MenuGrid />
        <Button style={styles.button} to="/menu">
          LEARN MORE
        </Button>
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
  },
  button: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  },
}
