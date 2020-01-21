import { Link } from "gatsby"
import React from "react"

function Button({ style, to, children }) {
  return (
    <button style={{ ...style, ...styles.button }}>
      {to ? (
        <Link to={to} style={styles.link}>
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  )
}

export default Button

const styles = {
  button: {
    fontSize: "1rem",
    height: "40px",
    minWidth: "64px",
    padding: "0 16px",
    background: "transparent",
    color: "#fff",
    border: "4px solid #fff",
    cursor: "pointer",
    fontFamily: "RenogareRegular",
    userSelect: "none",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}
