import Button from "../../shared/button"
import React from "react"
import flourImg from "../../../images/flour.png"

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
      <p style={styles.text}>Rollney is more than just a dessert.</p>
      <Button style={styles.button} to="/about">
        Read more
      </Button>
    </div>
  )
}

export default AboutRollney

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
    fontFamily: "MontserratRegular",
    color: "#fff",
    lineHeight: "1.5",
    fontSize: "calc(1rem + .5vmin)",
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
      height: "50%",
      width: "50%",
      transform: "translate(-60%, -50%)",
    },
    img: {
      width: "100%",
      height: "auto",
    },
  },
}
