import { Navbar, Container, Nav, Form } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { changeLoginStatus } from '../redux';

const Header = (props) => {

    const logoutClicked =() => {
        props.changeLoginStatus(false)
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">NSSPL</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        {props.userData.isLoggedIn &&
                            <>
                                <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                                <Nav.Link as={NavLink} to="/employees">Employees</Nav.Link>
                            </>
                        }


                    </Nav>
                    <Form className="d-flex">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            {props.userData.isLoggedIn &&
                                <Nav.Link as={NavLink} to="/" onClick={() => logoutClicked()}>Logout</Nav.Link>
                            }


                        </Nav>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeLoginStatus: (e) => dispatch(changeLoginStatus(e))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)