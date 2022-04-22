import React from "react";
import {  Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "./ModelPopup";

function ModelButton(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
        <Button
          className="empbutton"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          Add Employee
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default ModelButton