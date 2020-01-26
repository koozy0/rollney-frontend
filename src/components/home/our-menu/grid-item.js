import React from "react"

function GridItem({ children, series }) {
  return (
    <div>
      <svg viewBox="0 0 100 120" style={styles.svg}>
        <path
          id="myCurve"
          fill="none"
          stroke="none"
          d="M10 35 A50 50, 0, 0 1, 90 35"
        />

        <text style={styles.svgText}>
          <textPath
            href="#myCurve"
            fontSize=".4rem"
            textAnchor="middle"
            startOffset="50%"
          >
            {series} SERIES
          </textPath>
        </text>
        <circle cx="50" cy="70" r="50" fill="#c69c6c" />
      </svg>

      {children}
    </div>
  )
}

export default GridItem

const styles = {
  svg: {
    marginBottom: "1rem",
  },
  svgText: {
    fontFamily: "MontserratRegular",
    color: "#fff",
    fill: "currentColor",
    fontWeight: "600",
  },
}
