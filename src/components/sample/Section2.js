import React from "react";
import { Col, Row } from "react-bootstrap";
import { TooltipOne } from "./Tooltip2";

function Section2() {
  return (
    <div>
      <Row className="w-100 h-100">
        <Col>
          <Row className="d-flex justify-content-center">
            <h1>
              <strong>Why trade with GO Markets?</strong>
            </h1>
          </Row>
          <Row className="d-flex justify-content-center mt-3">
            <h6>
              Over 600 products, tight spreads, transparent pricing, powerful
              platforms. Backed by unmatched support.
            </h6>
          </Row>
          <Row className="mt-4">
            <Col>
              <TooltipOne />
              <Col>
                <strong>Low Spreads from 0.0 Pips</strong>
              </Col>
            </Col>
            <Col>
              <TooltipOne />
              <Col>
                <strong>Australian Regulated Broker</strong>
              </Col>
            </Col>
            <Col>
              <TooltipOne />
              <Col>
                <strong>Segregated Client Funds</strong>
              </Col>
            </Col>
            <Col>
              <TooltipOne />
              <Col>
                <strong>Fast Execution</strong>
              </Col>
            </Col>
            <Col>
              <TooltipOne />
              <Col>
                <strong>Award-Winning Client Support</strong>
              </Col>
            </Col>
            <Col>
              <TooltipOne />
              <Col>
                <strong>No Deposit Fees</strong>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Section2;
