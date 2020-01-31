import Logo from "./logo"
import React from "react"
import facebookLogo from "../../images/facebook.png"
import instagramLogo from "../../images/instagram.png"

function Footer() {
  return (
    <footer style={styles.wrapper}>
      <Logo />
      <p style={styles.copyright}>
        copyright Rollney Malaysia, all right reserved &copy; 2019
      </p>
      <div style={styles.social}>
        <a
          href="https://www.instagram.com/rollneymalaysia/"
          style={styles.link}
        >
          <span>rollneymalaysia</span>
          <img src={instagramLogo} alt="Instagram logo" style={styles.logo} />
        </a>
        <a href="https://www.facebook.com/rollneymalaysia/" style={styles.link}>
          <img src={facebookLogo} alt="Facebook logo" style={styles.logo} />
          <span>Rollney Malaysia</span>
        </a>
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
    fontSize: ".6rem",
    color: "#5f3713",
    textAlign: "center",
    textTransform: "uppercase",
  },
  social: {
    fontFamily: "MontserratRegular",
    fontSize: ".6rem",
    display: "grid",
    placeItems: "center",
    gridTemplateColumns: "1fr 1fr",
    marginBottom: "1.45rem",
  },
  logo: {
    height: "36px",
    width: "36px",
    margin: "0 18px",
  },
  link: {
    display: "grid",
    placeItems: "center",
    gridTemplateColumns: "1fr 1fr",
    color: "#5f3713",
  },
}
