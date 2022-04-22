import { Modal, Button, Form } from "react-bootstrap";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a New Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Employee Details</h4>
        <p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>NAME</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLocation">
              <Form.Label>LOCATION</Form.Label>
              <Form.Control type="text" placeholder="Enter  Location" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicProfession">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" placeholder="Enter Designation" />
            </Form.Group>

            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </p>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default MyVerticallyCenteredModal
