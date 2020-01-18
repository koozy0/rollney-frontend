import Button from "../shared/button"
import React from "react"

function About() {
  return (
    <section
      id='about-us'
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        display: "flex",
        background: "#D69D75",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "120px",
          transform: "translateX(-50%)",
          fontSize: "32px",
        }}
      >
        Rollney
      </span>
      <div
        style={{
          flex: "1",
          height: "100%",
          textAlign: "center",
          padding: "32px",
        }}
      >
        <h1
          style={{
            fontWeight: "400",
            fontSize: "128px",
            fontFamily: "cursive",
          }}
        >
          <span style={{ color: "#fff" }}>About</span> <br />
          <span style={{ color: "#F4B486" }}>Rollney</span>
          <br />
          <Button to='/about'>Read more</Button>
        </h1>
      </div>
      <div
        style={{
          flex: "1",
          height: "100%",
          textAlign: "center",
          padding: "32px",
        }}
      >
        <h1
          style={{
            fontWeight: "400",
            fontSize: "128px",
            fontFamily: "cursive",
          }}
        >
          <span style={{ color: "#fff" }}>What's a</span> <br />
          <span style={{ color: "#F4B486" }}>Chimney</span>
          <br />
          <Button to='/what'>Read more</Button>
        </h1>
      </div>
    </section>
  )
}

export default About
