import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
export class Login extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><b>Email address</b></Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label><b>Password</b></Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default Login