import React from "react";
import { Card, Form, Row, Col, Button, FloatingLabel } from "react-bootstrap";
import Footer from "./Footer2";
import HeaderNav from "./HeaderNav2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <div>
      {/*       <div className="d-flex justify-content-center">
        <h1 className="title  mt-5">Logo</h1>
      </div> */}
      <HeaderNav />
      <div className="darkTheme bodyContainer sectionLogin">
        <Card>
          <h4 className="d-flex justify-content-center mt-3">
            <FontAwesomeIcon className="mx-2 c" icon={faGlobe} />
            Logo
          </h4>
          <Form className="p-4">
            {/* <Form.Label>Email</Form.Label> */}
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
              {/* <Form.Label>Password</Form.Label> */}
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
              <Button variant="success" type="submit" className="mb-2 mt-3 w-100">
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
      <Footer />
    </div>
  );
}

export default Login;
