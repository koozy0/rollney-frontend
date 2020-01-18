import NavLink from "./nav-link"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#F4B486`,
      position: "sticky",
      top: "0",
      zIndex: "100",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NavLink to='/menu'>OUR MENU</NavLink>
      <NavLink to='#press-awards'>PRESS/AWARDS</NavLink>
      <NavLink style={{ fontSize: "32px" }} to='/'>
        {siteTitle}
      </NavLink>
      <NavLink to='#find-us'>FIND US</NavLink>
      <NavLink to='#contact-us'>CONTACT US</NavLink>
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
