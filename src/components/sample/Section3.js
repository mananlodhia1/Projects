import React from "react";
import { Col, Row } from "react-bootstrap";
import { TooltipOne } from "./Tooltip2";

function Section1() {
  return (
    <div>
      <Row className="w-100 h-100">
        <Col>
          <Row className="d-flex justify-content-center">
            <h1>
              <strong>One account. Over 600 opportunities to trade.</strong>
            </h1>
          </Row>
          <Row className="d-flex justify-content-center mt-3">
            <h6>
              Trade more than 600 products including Forex, Share CFDs,
              Commodities, Indices, and Metals with GO Markets MetaTrader 4 and
              5 trading platforms.
            </h6>
          </Row>
          <Row style={{ marginTop: "4rem" }}>
            <Col>
              <TooltipOne />
              <Col>
                <strong>Forex</strong>
              </Col>
              <Col>
                <a href="#">
                  Trade 50+ Currency Pairs with a leading global CFD provider
                </a>
              </Col>
            </Col>
            <Col>
              <TooltipOne />
              <Col>
                <strong>Share CFDs</strong>
              </Col>
              <Col>
                <a href="#">
                  {" "}
                  Go long or short on 200+ ASX shares, 80+ top US shares and
                  HKEX shares
                </a>
              </Col>
            </Col>
            <Col>
              <TooltipOne />
              <Col>
                <strong>Indices</strong>
              </Col>
              <Col>
                <a href="#">
                  Access a wide range of Index CFD trades via MT4 and MT5
                  Platforms
                </a>
              </Col>
            </Col>
          </Row>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "6rem" }}
          >
            <Col xs lg="4">
              <TooltipOne />
              <Col>
                <strong>Metals</strong>
              </Col>
              <Col>
                <a href="#">
                  Access a range of precious metal pairs through GO Markets
                </a>
              </Col>
            </Col>
            <Col xs lg="4">
              <TooltipOne />
              <Col>
                <strong>Commodities</strong>
              </Col>
              <Col>
                <a href="#">
                  Trade one of the world's most heavily-traded markets
                </a>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Section1;
