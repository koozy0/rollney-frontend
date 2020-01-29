import React from "react"

function OutletInfo({ outlet, details }) {
  return (
    <div style={styles.wrapper}>
      <strong>{outlet}</strong>
      <p>{details}</p>
    </div>
  )
}

export default OutletInfo

const styles = {
  wrapper: {
    fontFamily: "MontserratRegular",
    color: "#5f3713",
    fontSize: "1rem",
  },
}
