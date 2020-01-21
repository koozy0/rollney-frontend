import React from "react"

function Menu() {
  return (
    <section
      id="our-menu"
      style={{
        height: "600px",
        background: "#eed1b3",
        padding: "32px",
      }}
    >
      <h2 style={styles.header}>OUR MENU</h2>
    </section>
  )
}

export default Menu

const styles = {
  wrapper: {
    height: "600px",
    background: "#eed1b3",
    padding: "5%",
  },
  header: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "MontserratRegular",
    fontSize: "4vmin",
  },
}
