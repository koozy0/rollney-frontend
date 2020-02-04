import Button from "../../shared/button"
import React from "react"
import rollingPinImg from "./rolling-pin.png"

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
      <p className="text" style={styles.text}>
        Known as Kurtoskalacs in Hungarian or Trdelnik in Czech.
      </p>
      <Button style={styles.button} to="/what">
        READ MORE
      </Button>
    </div>
  )
}

export default WhatsChimney

const styles = {
  wrapper: {
    padding: "3rem 1rem 0",
    position: "relative",
    overflow: "hidden",
  },
  header: {
    base: {
      fontSize: "3rem",
      fontWeight: "400",
      maxWidth: "260px",
      marginTop: "0",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "1rem",
      position: "relative",
      zIndex: "100",
    },
    cursive: {
      color: "#fff",
      fontFamily: "DancingScriptRegular",
      display: "block",
      textAlign: "right",
    },
    regular: {
      color: "#fbbc89",
      fontFamily: "RenogareRegular",
      display: "block",
      textAlign: "right",
    },
  },
  text: {
    textAlign: "center",
    color: "#fff",
    position: "relative",
    zIndex: "100",
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
      height: "70%",
      width: "auto",
      transform: "translate(40%, -50%) rotate(15deg)",
    },
    img: {
      width: "auto",
      height: "100%",
    },
  },
}
