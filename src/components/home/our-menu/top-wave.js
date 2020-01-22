import React from "react"

function TopWave() {
  return (
    <div style={styles.wave.wrapper}>
      <svg
        style={styles.wave.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3840 2160"
      >
        <path
          style={styles.wave.path}
          d="M0,0H3840V1805.57c-.91,19.34-223,78.59-246.88,85.36-434.1,123.35-858.9-133.25-1290.63-144.72-233.1-6.19-467.54,19.19-697.8,55.17-184.72,28.85-358.82,101.9-547,121.88-349.51,37.1-715.87-38.2-1056.66-117-1.37-.31-1.31-6.07-1-17.24,1-36-.17-121.53,0-208,.21-109.16,0-221,0-235V0Z"
        />
      </svg>
    </div>
  )
}

export default TopWave

const styles = {
  wave: {
    wrapper: {
      position: "relative",
      overflow: "hidden",
      height: "12vmax",
      bacground: "#d8b49c",
    },
    svg: {
      width: "100%",
      position: "absolute",
      bottom: "0",
    },
    path: {
      fill: "#d8b49c",
    },
  },
}
