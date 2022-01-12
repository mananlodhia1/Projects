import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"



function Footer() {
  return (
    <div>
      <footer className="d-flex justify-content-center align-items-center w-100 main-footer">
        <Container>
          <div className="mt-4">
            <FontAwesomeIcon className="logo" icon={faGlobe} /> Website Title
          </div>
          <hr className="divider" />
          <Row>
            {/* <p>
              <small className="d-flex justify-content-center">
                Sample Website
              </small>
            </p> */}

            <Row xs="auto" className="d-flex justify-content-start">
              <Col sm>
                <small>
                  <strong>CALL US</strong>
                  <Col>
                    <small>
                      <strong>Australia</strong>
                      <br />
                      <p>1800 88 55 71</p>
                    </small>
                  </Col>
                  <Col>
                    <small>
                      <strong>International</strong>
                      <br />
                      <p>1800 88 55 71</p>
                    </small>
                  </Col>
                  <Col>
                    <small>
                      <strong>United Kingdom</strong>
                      <br />
                      <p>1800 88 55 71</p>
                    </small>
                  </Col>
                </small>
              </Col>
              <Col sm>
                <small>
                  <strong>CFD TRADING</strong>
                  <Col>
                    <small>
                      <strong>Client Support</strong>
                      <br />
                      <p>support@gomarkets.com</p>
                    </small>
                  </Col>
                  <Col>
                    <small>
                      <strong>New Accounts</strong>
                      <br />
                      <p>support@gomarkets.com</p>
                    </small>
                  </Col>
                  <Col>
                    <small>
                      <strong>Sales</strong>
                      <br />
                      <p>support@gomarkets.com</p>
                    </small>
                  </Col>
                </small>
              </Col>
              <Col sm >
                <small>
                  <strong>SHARE TRADING</strong>
                  <Col>
                    <small>
                      <strong>Client Support</strong>
                      <br />
                      <p>support@gomarkets.com</p>
                    </small>
                  </Col>
                  <Col>
                    <small>
                      <strong>New Accounts</strong>
                      <br />
                      <p>support@gomarkets.com</p>
                    </small>
                  </Col>
                  <Col>
                    <small>
                      <strong>Sales</strong>
                      <br />
                      <p>support@gomarkets.com</p>
                    </small>
                  </Col>
                </small>
              </Col>
              <Col sm>
                <small>
                  <strong>LEGAL DOCUMENTS</strong>
                  <Col>
                    <small>
                      <p>CFD Trading</p>
                      <p>Share Trading</p>
                      <p>Important Information</p>
                    </small>
                  </Col>
                </small>
              </Col>
            </Row>
          </Row>
          <hr className="divider" />
          <Row xs="auto" className="d-flex justify-content-end">
            <Col>
              <a href="#">
               {/*  <a href="#">Terms of Service</a> */}
                <FontAwesomeIcon className="brandIcon" icon={faFacebook} />
              </a>
            </Col>
            <Col>
              <a href="#">
                {/* <a href="#">Privacy</a> */}
                <FontAwesomeIcon className="brandIcon" icon={faTwitter} />
              </a>
            </Col>
            <Col>
              <a href="#">
               {/*  <a href="#">Cookies</a> */}
                <FontAwesomeIcon className="brandIcon" icon={faLinkedin} />
              </a>
            </Col>
            <Col>
              <a href="#">
                {/* <a href="#">Cookies</a> */}
                <FontAwesomeIcon className="brandIcon" icon={faYoutube} />
              </a>
            </Col>
            <Col>
              <a href="#">
                {/* <a href="#">Cookies</a> */}
                <FontAwesomeIcon className="brandIcon" icon={faInstagram} />
              </a>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <small className="text-muted">
                Risk Warning: GO Markets Pty Limited, ABN 85 081 864 039, AFSL
                254963 is a CFDs issuer. Investing in CFDs carries significant
                risks and is not suitable for all investors. You do not own or
                have any interest in the rights in the underlying assets. The
                information on this website is general in nature and doesn't
                take into account your personal objectives, financial situation
                or needs. You should consider whether you are part of our target
                market by reviewing our TMD. You should read our PDS and other
                CFD legal documents to ensure you fully understand the risks
                before you invest in CFDs. We recommend that you seek
                independent advice and ensure you fully understand the risks
                involved before you invest in CFDs. GO Markets Securities Pty
                Limited, ABN 24 653 400 527, CAR 1292963 of Sanlam Private
                Wealth Pty Ltd, AFSL No. 337927 provides ASX and Chi-X Share
                Trading services including Listed Investment Companies and
                Exchanged Traded Funds. It is important that you consider the
                relevant Share Trading legal documents before you decide whether
                or not to acquire any of the share trading services. Respective
                FSG contains details of fees and charges. Information on this
                site and the products and services offered are not intended for
                distribution to any person in any country or jurisdiction where
                such distribution or use would be contrary to local law or
                regulation. This website is owned by GO Markets. EU Merchant
                Company: GO Markets Ltd, Licence No.322/17. All contents @ 2021
                GO Markets. All rights reserved.
              </small>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
