import React from "react"

function Series() {
  return (
    <section style={styles.wrapper}>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}></div>
        <div style={styles.gridItem}></div>
        <div style={styles.gridItem}></div>
      </div>
    </section>
  )
}

export default Series

const styles = {
  wrapper: {
    background: "#ebbc90",
    padding: "10% 0",
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
