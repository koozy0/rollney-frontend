import Logo from "./logo"
import React from "react"
import facebookLogo from "../../images/facebook.png"
import instagramLogo from "../../images/instagram.png"

function Footer() {
  return (
    <footer style={styles.wrapper}>
      <Logo />
      <p style={styles.copyright}>
        COPYRIGHT ROLLNEY MALAYSIA, ALL RIGHT RESERVED &copy; 2019
      </p>
      <div style={styles.social}>
        <span>rollneymalaysia</span>
        <img src={instagramLogo} alt="Instagram logo" style={styles.logo} />
        <img src={facebookLogo} alt="Facebook logo" style={styles.logo} />
        <span>Rollney Malaysia</span>
      </div>
    </footer>
  )
}

export default Footer

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "15vh",
    background: "#f4e8dc",
    alignItems: "center",
    flexDirection: "column",
    padding: "0 5%",
  },
  copyright: {
    fontFamily: "MontserratRegular",
    fontWeight: "600",
    fontSize: "2vmin",
  },
  social: {
    fontFamily: "MontserratRegular",
    fontSize: "1.5vmin",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem",
  },
  logo: {
    height: "36px",
    width: "36px",
    margin: "0 18px",
  },
}
