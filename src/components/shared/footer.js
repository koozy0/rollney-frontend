import Logo from "./logo"
import React from "react"

function Footer() {
  return (
    <footer style={styles.wrapper}>
      <Logo />
      <p style={styles.copyright}>
        COPYRIGHT ROLLNEY MALAYSIA, ALL RIGHT RESERVED &copy; 2019
      </p>
    </footer>
  )
}

export default Footer

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "15vh",
    background: "#f4e8dc",
    alignItems: "center",
    flexDirection: "column",
    padding: "0 5%",
  },
  copyright: {
    fontFamily: "MontserratRegular",
    fontWeight: "600",
    fontSize: ".8rem",
  },
}
