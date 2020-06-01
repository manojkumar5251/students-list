import React from "react"
import { Navbar, Nav } from "react-bootstrap"
const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="py-0"
    >
      <Navbar.Brand href="/">
        <img
          alt=""
          src={require("../../logo.svg")}
          width="60"
          height="60"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/">Contact</Nav.Link>
          <Nav.Link href="/add-students">Add Students</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
