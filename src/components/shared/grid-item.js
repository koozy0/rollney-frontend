import React, { useState } from "react"

function GridItem({ isHover, series, image, children }) {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => setHover(true)
  const handleMouseLeave = () => setHover(false)

  return (
    <div
      style={
        hover ? { ...styles.wrapper, ...styles.hasMouseover } : styles.wrapper
      }
      onMouseEnter={isHover ? handleMouseEnter : null}
      onMouseLeave={isHover ? handleMouseLeave : null}
      role="presentation"
    >
      <div style={{ position: "relative" }}>
        <svg viewBox="0 0 100 25">
          <path
            id="myCurve"
            fill="none"
            stroke="none"
            d="M10 25 A50 50, 0, 0 1, 90 25"
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
        </svg>
        <div style={styles.imgWrapper}>{image}</div>
      </div>
      {children}
    </div>
  )
}

export default GridItem

const styles = {
  wrapper: {
    transition: "all 350ms",
  },
  hasMouseover: {
    transform: "scale(1.03)",
  },
  imgWrapper: {
    width: "100%",
    height: "auto",
    transform: "translateY(-2rem)",
  },
  svgText: {
    fontFamily: "MontserratRegular",
    color: "#fff",
    fill: "currentColor",
    fontWeight: "600",
  },
}
