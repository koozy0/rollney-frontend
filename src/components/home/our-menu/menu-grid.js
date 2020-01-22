import MenuGridItem from "./menu-grid-item"
import React from "react"

function MenuGrid() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.gridItem}>
        <MenuGridItem series="KURTOS">
          <p style={styles.text}>FRESHLY BAKED KURTOS TO SERVE YOU DAILY</p>
        </MenuGridItem>
      </div>
      <div style={styles.gridItem}>
        <MenuGridItem series="ICE-CREAM">
          <p style={styles.text}>
            KURTOS TOPPED WITH VANILLA SOFT SERVE THAT WILL MAKE YOUR DAY
          </p>
        </MenuGridItem>
      </div>
      <div style={styles.gridItem}>
        <MenuGridItem series="SAVOURY CONE">
          <p style={styles.text}>MORE THAN JUST ICE CREAM</p>
        </MenuGridItem>
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
  text: {
    fontFamily: "MontserratRegular",
    color: "#5f3713",
    textAlign: "center",
    padding: "0 10%",
  },
}
