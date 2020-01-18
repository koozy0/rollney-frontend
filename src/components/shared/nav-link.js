import { Link } from "gatsby"
import React from "react"

function NavLink({ to, style, children }) {
  return (
    <span
      style={{
        padding: "0 16px",
        color: `#333`,
        ...style,
      }}
    >
      {to ? (
        <Link
          to={to}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </span>
  )
}

export default NavLink
