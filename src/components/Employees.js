import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fectEmployes } from '../redux';
import { Table } from 'react-bootstrap';

function Employees({ userData, fectEmployes }) {
    useEffect(() => {
        fectEmployes()
    }, [])


    return userData.loading ? (
        <h2>loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>Employees List</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Login</th>
                        <th>Node_id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData && userData.employees &&
                        userData.employees.map((user, ind) => {
                            return (
                                <tr key={ind}>
                                    <td>{user.id}</td>
                                    <td>{user.login}</td>
                                    <td>{user.node_id}</td>
                                </tr>
                            )
                        })
                    }



                </tbody>
            </Table>
            <div>

            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fectEmployes: () => dispatch(fectEmployes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)