import GridItem from "./grid-item"
import React from "react"

function MenuGrid() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}>
          <GridItem series="KURTOS">
            <p style={styles.text}>
              What this shows us is that we don’t have to write a million media
              queries to change the number of columns in a grid. Andy also
              proves that CSS Grid can automate so much of the tedious work of
              styling layouts.
            </p>
          </GridItem>
        </div>
        <div style={styles.gridItem}>
          <GridItem series="ICE-CREAM">
            <p style={styles.text}>
              What this shows us is that we don’t have to write a million media
              queries to change the number of columns in a grid. Andy also
              proves that CSS Grid can automate so much of the tedious work of
              styling layouts.
            </p>
          </GridItem>
        </div>
        <div style={styles.gridItem}>
          <GridItem series="SAVOURY CONE">
            <p style={styles.text}>
              What this shows us is that we don’t have to write a million media
              queries to change the number of columns in a grid. Andy also
              proves that CSS Grid can automate so much of the tedious work of
              styling layouts.
            </p>
          </GridItem>
        </div>
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
  },
}
