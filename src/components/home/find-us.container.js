import LocationBanner from "./location-banner"
import React from "react"

function FindUsContainer() {
  return (
    <section id="contact-us" style={styles.wrapper}>
      <div style={{ ...styles.wave.wrapper, top: "0" }}>
        <svg
          style={styles.wave.top.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3840 2160"
        >
          <path
            style={styles.wave.top.path}
            d="M3833.49,2058.52c0-6.72-324.33-28.57-349.55-31.41-225.06-25.34-450,50.76-671,99.33-245.15,53.88-475.2,45.6-714.23-30.8-437.73-139.9-933.47-375-1382.53-132.55-143.24,77.33-271.37,174.62-449.54,146.6C243.92,2106.11-.7,2080-.7,2056.54c0,0,1-1921.11,1-1921.78.92-20.59,223.11-83.54,247-90.74C681.48-87,1106.2,186.3,1538,198.73c233.14,6.71,467.62-20.19,697.93-58.36,184.76-30.62,358.93-108.27,547.17-129.44C3132.66-28.38,3495,52,3835.8,136c11.37,2.8-1.56,460-1.57,490.35l-.37,702.47Z"
          />
        </svg>
      </div>
      <div style={styles.content}>
        <LocationBanner />
      </div>
      <div style={{ ...styles.wave.wrapper, bottom: "0" }}></div>
    </section>
  )
}

export default FindUsContainer

const styles = {
  wrapper: {
    position: "relative",
  },
  wave: {
    wrapper: {
      height: "10vmax",
      overflow: "hidden",
      position: "absolute",
      width: "100%",
      top: "0",
      zIndex: "100",
    },
    top: {
      svg: {
        position: "absolute",
        bottom: "0",
        width: "100%",
      },
      path: {
        fill: "#e8c0a6",
      },
    },
  },
  content: {},
}
