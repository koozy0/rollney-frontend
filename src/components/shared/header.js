import Logo from "./logo"
import NavLink from "./nav-link"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header style={styles.wrapper}>
    <div style={styles.header}>
      <NavLink to="/#our-menu">OUR MENU</NavLink>
      <NavLink to="/#press-awards">PRESS/AWARDS</NavLink>
      <NavLink
        to="/"
        style={{ overflow: "unset", minWidth: "unset", display: "initial" }}
      >
        <Logo />
      </NavLink>
      <NavLink to="/#find-us">FIND US</NavLink>
      <NavLink to="/#contact-us">CONTACT US</NavLink>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const styles = {
  wrapper: {
    background: `#fbbc89`,
    position: "sticky",
    top: "0",
    zIndex: "1000",
    minHeight: "64px",
    boxShadow: "0 2px 10px rgba(0,0,0,.1)",
  },
  header: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0 1.0875rem`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}
