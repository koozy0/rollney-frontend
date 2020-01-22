import AboutRollney from "./about-rollney"
import React from "react"
import WhatsChimney from "./whats-chimney"

function AboutContainer() {
  return (
    <section>
      <div style={styles.grid}>
        <AboutRollney />
        <WhatsChimney />
      </div>
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
    </section>
  )
}

export default AboutContainer

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    position: "relative",
    zIndex: "100",
    background: "#d8b49c",
  },
  logo: {
    position: "absolute",
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "100",
  },
  wave: {
    wrapper: {
      position: "relative",
      overflow: "hidden",
      height: "12vmax",
      background: "#eed1b3",
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
