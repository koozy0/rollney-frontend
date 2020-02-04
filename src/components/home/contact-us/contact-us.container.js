import React from "react"
import backdropImage from "./contact-us-background.png"

function ContactUsContainer() {
  return (
    <section id="contact-us" style={styles.wrapper}>
      <div style={styles.spacer}></div>
      <h1 className="heading" style={styles.header}>
        CONTACT US
      </h1>
      <img
        src={backdropImage}
        alt="background ice cream cone"
        style={styles.img}
      />
      <div style={styles.content}>
        <p className="text">We would love to hear from you</p>
        <p className="text">
          Media, marketing queries, business opportunities:{" "}
          <a href="mailto:rollneymalaysia@gmail.com" style={styles.link}>
            rollneymalaysia@gmail.com
          </a>
        </p>
        <p className="text">TEL /XXXXXXXXX</p>
        <p className="text">
          You can also connect with the Rollney Malaysia team on Facebook and
          Instagram
        </p>
        <div style={styles.spacer}></div>
      </div>
    </section>
  )
}

export default ContactUsContainer

const styles = {
  wrapper: {
    background: "linear-gradient(to right, #e2ccb4 50%, #cdb29f 50%)",
    display: "grid",
    placeItems: "center",
    position: "relative",
  },
  spacer: {
    height: "12vmax",
  },
  header: {
    textAlign: "center",
    color: "#fff",
    position: "relative",
    zIndex: "1",
  },
  img: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: "0.3",
    height: "70%",
    width: "auto",
  },
  content: {
    padding: "1rem",
    textAlign: "center",
    color: "#fff",
    position: "relative",
    zIndex: "1",
  },
  link: {
    color: "#fff",
  },
}
