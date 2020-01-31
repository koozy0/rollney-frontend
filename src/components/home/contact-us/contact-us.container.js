import React from "react"
import contactUsBg from "../../../images/contact-us-background.png"

function ContactUsContainer() {
  return (
    <section id="contact-us" style={styles.wrapper}>
      <div style={styles.spacer}></div>
      <h1 className="heading" style={styles.header}>
        CONTACT US
      </h1>
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
  },
  spacer: {
    height: "12vmax",
  },
  header: {
    textAlign: "center",
    color: "#fff",
  },
  content: {
    padding: "5%",
    textAlign: "center",
    color: "#fff",
  },
  link: {
    color: "#fff",
  },
}
