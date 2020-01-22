import Button from "../../shared/button"
import React from "react"
import rollingPinImg from "../../../images/rolling-pin.png"

function WhatsChimney() {
  return (
    <div style={styles.wrapper}>
      <h3 style={styles.header.base}>
        <span style={styles.header.cursive}>What's a</span>
        <span style={styles.header.regular}>Chimney</span>
      </h3>
      <div style={styles.imgAside.wrapper}>
        <img
          src={rollingPinImg}
          alt="rrolling pin"
          style={styles.imgAside.img}
        />
      </div>
      <p style={styles.text}>
        Known as Kurtoskalacs in Hungarian or Trdelnik in Czech.
      </p>
      <Button style={styles.button} to="/what">
        Read more
      </Button>
    </div>
  )
}

export default WhatsChimney

const styles = {
  wrapper: {
    padding: "15%",
    position: "relative",
    overflow: "hidden",
  },
  header: {
    base: {
      fontSize: "7vmax",
      fontWeight: "400",
      textAlign: "right",
    },
    cursive: {
      color: "#fff",
      fontFamily: "DancingScriptRegular",
      display: "block",
    },
    regular: {
      color: "#fbbc89",
      fontFamily: "RenogareRegular",
      display: "block",
    },
  },
  text: {
    textAlign: "center",
    fontFamily: "MontserratRegular",
    color: "#fff",
    lineHeight: "1.5",
    fontSize: "calc(1rem + .5vmin)",
  },
  button: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  },
  imgAside: {
    wrapper: {
      position: "absolute",
      top: "50%",
      right: "0",
      height: "50%",
      width: "50%",
      transform: "translate(50%, -50%) rotate(15deg)",
    },
    img: {
      width: "100%",
      height: "auto",
    },
  },
}
