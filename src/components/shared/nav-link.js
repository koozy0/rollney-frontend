import { Link } from "gatsby"
import React from "react"

function NavLink({ to, style, children }) {
  const internal = /^\/(?!\/)/.test(to)

  return (
    <span
      style={{
        padding: "0 16px",
        color: `#5f3713`,
        fontFamily: "MontserratRegular",
        fontWeight: "400",
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
    </span>
  )
}

export default NavLink

const styles = {
  link: {
    textDecoration: "none",
    color: "inherit",
    lineHeight: "2",
  },
}
