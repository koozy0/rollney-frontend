import React from "react"
import contactUsBg from "../../../images/contact-us-background.png"

function ContactUsContainer() {
  return (
    <section id="contact-us" style={styles.wrapper}>
      <h2 style={styles.header}>CONTACT US</h2>
      <div style={styles.text}>
        <p>We would love to hear from you</p>
        <p>
          Media, marketing queries, business opportunities:{" "}
          <a href="mailto:rollneymalaysia@gmail.com" style={styles.link}>
            rollneymalaysia@gmail.com
          </a>
        </p>
        <p>TEL /XXXXXXXXX</p>
        <p>
          You can also connect with the Rollney Malaysia team on Facebook and
          Instagram
        </p>
      </div>
    </section>
  )
}

export default ContactUsContainer

const styles = {
  wrapper: {
    minHeight: "70vh",
    background: "#F4C9AB",
    padding: "5%",
    backgroundImage: "linear-gradient(to right, #e2ccb4 50%, #cdb29f 50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "MontserratRegular",
    fontSize: "2rem",
  },
  text: {
    textAlign: "center",
    fontFamily: "MontserratRegular",
    color: "#fff",
    lineHeight: "1.5",
  },
  link: {
    color: "#fff",
  },
}
