import "./App.css";
import React from "react";
import {
  Card,
  Form,
  Row,
  Col,
  Button,
  FloatingLabel,
  Container,
} from "react-bootstrap";

function App() {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <h1 className="title">Logo</h1>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Card>
          <h3 className="d-flex justify-content-center mt-3">Login</h3>
          <Form className="p-4">
              <Form.Label className="text-muted">Email</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-muted">Password</Form.Label>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
            </Form.Group>
            <Row>
              <Col xs="auto">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="mb-2 text-muted"
                  label="Remember me"
                />
              </Col>
              <Col xs="auto">
                <a href="#" className="mb-2">
                  Forgot Password
                </a>
              </Col>
            </Row>
            <div className="d-flex justify-content-center align-items-center">
              <Button type="submit" className="mb-2 mt-3 w-100">
                Login
              </Button>
            </div>
          </Form>
          <Card.Footer>
            <small className="d-flex justify-content-center align-items-center">
              New to the platform?&nbsp;<a href="#">Sign Up</a>
            </small>
          </Card.Footer>
        </Card>
      </div>
      <footer
        className="d-flex justify-content-center align-items-center mt-5 w-100 position-absolute  fixed-bottom"
        style={{ color: "white", background: "black" }}
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

export default App;
