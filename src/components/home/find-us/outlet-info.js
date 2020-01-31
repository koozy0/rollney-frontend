import React from "react"

function OutletInfo({ outlet, details }) {
  return (
    <p className="text" style={styles.wrapper}>
      <strong>{outlet}</strong>
      <br />
      <span>{details}</span>
    </p>
  )
}

export default OutletInfo

const styles = {
  wrapper: {
    color: "#5f3713",
  },
}
