import { Link } from "gatsby"
import React from "react"

function Button({ style, to, children }) {
  return to ? (
    <Link to={to} style={{ ...style, ...styles.button, ...styles.link }}>
      <span style={styles.span}>{children}</span>
    </Link>
  ) : (
    <button style={{ ...style, ...styles.button }}>{children}</button>
  )
}

export default Button

const styles = {
  button: {
    fontSize: "1rem",
    fontWeight: "600",
    minHeight: "40px",
    minWidth: "64px",
    padding: "0 16px",
    background: "transparent",
    color: "#fff",
    border: "4px solid #fff",
    cursor: "pointer",
    fontFamily: "MontserratRegular",
    userSelect: "none",
  },
  link: {
    textDecoration: "none",
    display: "inline-block",
    verticalAlign: "middle",
  },
  span: {
    lineHeight: "2rem",
  },
}
