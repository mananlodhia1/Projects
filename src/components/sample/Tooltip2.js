import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMousePointer,
  faKeyboard,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

function TooltipOne() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {/*  <span className="circle"  onClick={handleShow} >
        <FontAwesomeIcon id="icons" icon={faMousePointer} />
      </span> */}
      <OverlayTrigger
        key="left"
        placement="left"
        overlay={
          <Tooltip id="tooltip-left" t>
            Tooltip on <strong>Left</strong>.
          </Tooltip>
        }
      >
        <span className="circle">
          <FontAwesomeIcon id="icons" icon={faMousePointer} />
        </span>
      </OverlayTrigger>
    </>
  );
}

function TooltipTwo() {
  return (
    <>
      <OverlayTrigger
        key="bottom"
        placement="bottom"
        overlay={
          <Tooltip id="tooltip-bottom" t>
            Tooltip on <strong>Bottom</strong>.
          </Tooltip>
        }
      >
        <span className="circle">
          <FontAwesomeIcon id="icons" icon={faKeyboard} />
        </span>
      </OverlayTrigger>
    </>
  );
}

function TooltipThree() {
  return (
    <>
      <OverlayTrigger
        key="right"
        placement="right"
        overlay={
          <Tooltip id="tooltip-right" t>
            Tooltip on <strong>Right</strong>.
          </Tooltip>
        }
      >
        <span className="circle">
          <FontAwesomeIcon id="icons" icon={faDesktop} />
        </span>
      </OverlayTrigger>
    </>
  );
}

export { TooltipOne, TooltipTwo, TooltipThree };
