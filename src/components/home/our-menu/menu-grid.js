import React from "react"

function MenuGrid() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.gridItem}></div>
      <div style={styles.gridItem}></div>
      <div style={styles.gridItem}></div>
    </div>
  )
}

export default MenuGrid

const styles = {
  wrapper: {
    display: "grid",
  },
  gridItem: {
    height: "20vh",
    background: "brown",
  },
}
