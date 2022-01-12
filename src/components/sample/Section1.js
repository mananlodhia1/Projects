import React from "react";
import { Col, Row, Button } from "react-bootstrap";
/* import { TooltipOne, TooltipTwo, TooltipThree } from "./Tooltip2";
 */import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Section1() {
  return (
    <div>
      <Row className="w-100 h-100" >
        <Col xs={12} md={8}>
          <Row className="d-flex justify-content-center">
            <h1>
              <strong>
                Trade with a Multi-
                <br />
                award winning broker*
              </strong>
            </h1>
          </Row>
          <Row className="d-flex justify-content-center mt-3">
            <h6>
              In 2019 and 2020, 'Investment Trends' rated GO Markets No.1 for
              Customer Service. Plus, our education programs achieved the
              highest satisfaction award.
            </h6>
          </Row>
          <Row className="d-flex justify-content-center mt-3">
            <small>*Investment Trends Australia Leverage Trading Report.</small>
          </Row>
          <Row className="mt-3">
            <Col md="auto" className="p-1">
              {" "}
              <Button>
                <strong>Try Free Demo</strong>
              </Button>
            </Col>
            <Col md="auto" className="p-1">
              {" "}
              <Button variant="success">
                <strong>Open Live Account</strong>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col className="d-flex justify-content-center" xs={6} md={4} >
        <div className="p-2 mt-4">
            <FontAwesomeIcon className="logo" icon={faGlobe} size="6x"/>
          </div>
         {/*  <div className="position-relative">
            <div>
              <TooltipOne />
            </div>

            <div id="circleDouble">
              <TooltipTwo />
              <TooltipThree />
            </div> 
          </div> */}
        </Col>
      </Row>
    </div>
  );
}

export default Section1;
