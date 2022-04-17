import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { fectEmployes, updateEmployee } from '../redux';
import { Table, Image } from 'react-bootstrap';

function Employees({ userData, fectEmployes, updateEmployee }) {
    let navigate = useNavigate();

    useEffect(() => {
        fectEmployes()
    }, [])

    const updateEmp = (user) => {
        updateEmployee(user)
        navigate('/employedetails')
    }

    return userData.loading ? (
        <h2>loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2 className="App">Employees List</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Login</th>
                        <th>Node_id</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData && userData.employees &&
                        userData.employees.map((user, ind) => {
                            return (
                                <tr key={ind} className="pointer-cursor" onClick={() => updateEmp(user)}>
                                    <td>{user.id}</td>
                                    <td>{user.login}</td>
                                    <td>{user.node_id}</td>
                                    <td><Image roundedCircle className="table-img" src={user.avatar_url} /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
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
        fectEmployes: () => dispatch(fectEmployes()),
        updateEmployee: (e) => dispatch(updateEmployee(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)