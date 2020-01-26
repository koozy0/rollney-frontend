import GridItem from "./grid-item"
import React from "react"

function MenuGrid() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}>
          <GridItem series="KURTOS">
            <p style={styles.text}>FRESHLY BAKED KURTOS TO SERVE YOU DAILY</p>
          </GridItem>
        </div>
        <div style={styles.gridItem}>
          <GridItem series="ICE-CREAM">
            <p style={styles.text}>
              KURTOS TOPPED WITH VANILLA SOFT SERVE THAT WILL MAKE YOUR DAY
            </p>
          </GridItem>
        </div>
        <GridItem series="SAVOURY CONE">
          <p style={styles.text}>MORE THAN JUST ICE CREAM</p>
        </GridItem>
      </div>
    </div>
  )
}

export default MenuGrid

const styles = {
  wrapper: {
    maxWidth: "960px",
    margin: "0 auto",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gridAutoFlow: "dense",
    gridGap: "2rem",
  },
  text: {
    fontFamily: "MontserratRegular",
    color: "#5f3713",
    fontSize: "1rem",
    textAlign: "center",
  },
}
