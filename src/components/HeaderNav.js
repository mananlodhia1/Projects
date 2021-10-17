import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGlobe } from '@fortawesome/free-solid-svg-icons'

function HeaderNav() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" >
          <FontAwesomeIcon icon={faGlobe}/> Website Title
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text> 
              <Nav className="me-aut">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="/login">Sign In</Nav.Link>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default HeaderNav;
