import OutletInfo from "./outlet-info"
import React from "react"

const OUTLET_INFO = [
  { outlet: "SUNWAY PYRAMID, PETALING JAYA", details: "LG2-08" },
  { outlet: "MY TOWN SHOPPIUNG CENTRE, KUALA LUMPUR", details: "B1-043A" },
  { outlet: "BERJAYA TIMES SQUARE, KUALA LUMPUR", details: "LG-49A-2, LGF" },
  { outlet: "CENTRAL I- CITY, SHAH ALAM", details: "LG-K11" },
  { outlet: "IOI CITY MALL, PUTRAJAYA", details: "F-K11 (LEVEL 1)" },
  { outlet: "AEON MALL, SHAH ALAM", details: "COMING SOON" },
  { outlet: "MID VALLY MEGAMALL, KUALA LUMPUR", details: "COMING SOON" },
]

function OutletInfoGrid() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.gridContainer}>
        {OUTLET_INFO.map(({ outlet, details }) => (
          <OutletInfo
            key={`${outlet}-${details}`}
            outlet={outlet}
            details={details}
          />
        ))}
      </div>
    </div>
  )
}

export default OutletInfoGrid

const styles = {
  wrapper: {
    width: "100%",
    maxWidth: "960px",
    margin: "0 auto",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gridAutoFlow: "dense",
    gridGap: "1rem",
    padding: "1rem",
  },
}
