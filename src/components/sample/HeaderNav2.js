import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGlobe } from '@fortawesome/free-solid-svg-icons'

function HeaderNav() {
  return (
    <div>
      <Navbar collapseOnSelect expand="xl" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/" >
          <FontAwesomeIcon className="logo" icon={faGlobe}/> Website Title
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text> 
              <Nav className="me-aut">
                <Nav.Link href="#product">Product</Nav.Link>
                <Nav.Link href="#platform">Platform</Nav.Link>
                <Nav.Link href="#Tools">Tools</Nav.Link>
                <Nav.Link href="#accountTypes">Account Types</Nav.Link>
                <Nav.Link href="#news">News</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#partnerships">Partnerships</Nav.Link>
                <Nav.Link href="#clients">Clients</Nav.Link>
                <NavDropdown title="About Us" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/login">Sign In</NavDropdown.Item>
        </NavDropdown>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default HeaderNav;
