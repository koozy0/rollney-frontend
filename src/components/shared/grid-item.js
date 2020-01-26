import React from "react"

function GridItem({ series, image, children }) {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <div style={styles.imgWrapper}>{image}</div>
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
      </div>
      {children}
    </div>
  )
}

export default GridItem

const styles = {
  imgWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
  },
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
