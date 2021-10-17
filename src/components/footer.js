import React from "react";
import {
  Row,
  Col,
  Container,
} from "react-bootstrap";

function Footer() {
  return (
    <div>
      <footer
        className="d-flex justify-content-center align-items-center mt-5 w-100 position-fixed fixed-bottom main-footer"
        
      >
        <Container>
          <Row>
            <p>
              <hr
                style={{
                  color: "white",
                  backgroundColor: "white",
                  height: 1,
                }}
              />
              <small className="d-flex justify-content-center">
                This is a project by Vodka
              </small>
            </p>
          </Row>
          <Row xs="auto" className="d-flex justify-content-center">
            <Col>
              <small>
                <a href="#">Terms of Service</a>
              </small>
            </Col>
            <Col>
              <small>
                <a href="#">Privacy</a>
              </small>
            </Col>
            <Col>
              <small>
                <a href="#">Cookies</a>
              </small>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
