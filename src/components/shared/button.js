import { Link } from "gatsby"
import React from "react"

function Button({ to, children }) {
  return (
    <button
      style={{
        fontSize: "1rem",
        height: "40px",
        minWidth: "64px",
        padding: "0 16px",
        background: "transparent",
        color: "#fff",
        border: "2px solid #fff",
        cursor: "pointer",
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
    </button>
  )
}

export default Button
