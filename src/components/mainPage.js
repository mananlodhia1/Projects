import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Footer from "./footer";
import HeaderNav from "./HeaderNav";
import { TooltipOne, TooltipTwo, TooltipThree } from "./tooltip";

function MainPage() {
  return (
    <div className="box">
      <HeaderNav />
      {/*  <div className="d-flex justify-content-center mt-5">
        <h1 className="title">Logo</h1>
      </div>  */}
      <Container className="bodyContainer">
        <Row className="w-100">
          <Col className="d-flex justify-content-center">
            <h1>Apply some text here.</h1>
          </Col>
          <Col className="d-flex justify-content-center">
            <div className="position-relative">
              <div>
                <TooltipOne />
              </div>

              <div id="circleDouble">
                <TooltipTwo />
                <TooltipThree />
                {/* <span className="circle"><FontAwesomeIcon id="icons" icon={faKeyboard} /></span>
           <span className="circle"><FontAwesomeIcon id="icons" icon={faDesktop} /></span> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default MainPage;
