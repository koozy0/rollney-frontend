import MenuGridItem from "./menu-grid-item"
import React from "react"

function MenuGrid() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.gridItem}>
        <MenuGridItem series="KURTOS" />
      </div>
      <div style={styles.gridItem}>
        <MenuGridItem series="ICE-CREAM" />
      </div>
      <div style={styles.gridItem}>
        <MenuGridItem series="SAVOURY CONE" />
      </div>
    </div>
  )
}

export default MenuGrid

const styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gridGap: "8px",
    width: "100%",
  },
  gridItem: {
    padding: "5%",
  },
}
