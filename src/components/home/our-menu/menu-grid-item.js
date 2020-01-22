import React from "react"

function MenuGridItem({ series }) {
  return (
    <div style={styles.wrapper}>
      <svg viewBox="0 0 100 20">
        <path
          id="myCurve"
          fill="none"
          stroke="none"
          d="M20 20 A50 50, 0, 0 1, 80 20"
        />
        <text
          style={{
            fontFamily: "MontserratRegular",
            color: "white",
            fill: "currentColor",
            fontWeight: "600",
          }}
        >
          <textPath
            href="#myCurve"
            fontSize=".25rem"
            textAnchor="middle"
            startOffset="50%"
          >
            {series} SERIES
          </textPath>
        </text>
      </svg>
      <div style={styles.circle}></div>
    </div>
  )
}

export default MenuGridItem

const styles = {
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    background: "#c69c6c",
    borderRadius: "50%",
    height: "60vmin",
    width: "60vmin",
    maxWidth: "400px",
    maxHeight: "400px",
  },
}
