import Button from "../../shared/button"
import React from "react"
import flourImg from "./flour.png"

function AboutRollney() {
  return (
    <div id="about-us" style={styles.wrapper}>
      <h3 style={styles.header.base}>
        <span style={styles.header.cursive}>About</span>
        <span style={styles.header.regular}>Rollney</span>
      </h3>
      <div style={styles.imgAside.wrapper}>
        <img src={flourImg} alt="flour" style={styles.imgAside.img} />
      </div>
      <p className="text" style={styles.text}>
        Rollney is more than just a dessert.
      </p>
      <Button style={styles.button} to="/about">
        READ MORE
      </Button>
    </div>
  )
}

export default AboutRollney

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
      textAlign: "left",
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
      left: "0",
      height: "70%",
      width: "auto",
      transform: "translate(-60%, -50%)",
    },
    img: {
      width: "auto",
      height: "100%",
    },
  },
}
