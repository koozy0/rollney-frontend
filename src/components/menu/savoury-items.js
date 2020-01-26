import React from "react"

function SavouryItems() {
  return (
    <section style={styles.wrapper}>
      <h2 style={styles.header}>MORE THAN JUST ICE CREAM</h2>

      <div style={styles.gridContainer}>
        <div style={styles.gridItem}></div>
        <div style={styles.gridItem}></div>
        <div style={styles.gridItem}></div>
        <div style={styles.gridItem}></div>
        <div style={styles.gridItem}></div>
      </div>
    </section>
  )
}

export default SavouryItems

const styles = {
  wrapper: {
    background: "#eed1b3",
    padding: "10% 0",
  },
  header: {
    fontFamily: "MontserratRegular",
    textAlign: "center",
    padding: "0 16px",
    marginBottom: "2rem",
  },
  gridContainer: {
    display: "grid",
    maxWidth: "960px",
    margin: "0 auto",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gridAutoFlow: "dense",
    gridGap: "2rem",
  },
  gridItem: {
    minHeight: "280px",
    background: "#ccc",
  },
}
