import { Link } from "gatsby"
import React from "react"

function NavLink({ to, style, children }) {
  const internal = /^\/(?!\/)/.test(to)

  return (
    <button
      style={{
        ...styles.wrapper,
        ...style,
      }}
    >
      {to ? (
        internal ? (
          <Link to={to} style={styles.link}>
            {children}
          </Link>
        ) : (
          <a href={to} style={styles.link}>
            {children}
          </a>
        )
      ) : (
        children
      )}
    </button>
  )
}

export default NavLink

const styles = {
  wrapper: {
    color: `#5f3713`,
    fontFamily: "MontserratRegular",
    fontWeight: "400",
    fontSize: "1rem",
    minWidth: "64px",
    background: "transparent",
    border: "0",
    padding: "0 16px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    lineHeight: "2",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
}
