import { Link } from "gatsby"
import React from "react"

function NavLink({ to, style, children }) {
  const isInternalLink = /^\/(?!\/)/.test(to)

  const internalLink = (
    <Link to={to} style={styles.link}>
      {children}
    </Link>
  )

  const externalLink = (
    <a href={to} style={styles.link}>
      {children}
    </a>
  )

  return (
    <button
      style={{
        ...styles.wrapper,
        ...style,
      }}
    >
      {to ? (isInternalLink ? internalLink : externalLink) : children}
    </button>
  )
}

export default NavLink

const styles = {
  wrapper: {
    background: "transparent",
    border: "0",
    color: `#5f3713`,
    fontFamily: "MontserratRegular",
    fontSize: "1rem",
    fontWeight: "400",
    minWidth: "64px",
    overflow: "hidden",
    padding: "0 16px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  link: {
    color: "inherit",
    lineHeight: "2",
    overflow: "hidden",
    textDecoration: "none",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}
