import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { changeLoginStatus } from '../redux';

export class Login extends Component {
    // constructor(props) {
    //     super(props)
    // }

    loginClicked () {
        this.props.changeLoginStatus(true)
    }

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
                            <Button variant="primary" type="submit" as={NavLink} to="/home" onClick={()=> this.loginClicked()}>
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeLoginStatus: (e) => dispatch(changeLoginStatus(e))
    }
}

export default connect(null, mapDispatchToProps)(Login)