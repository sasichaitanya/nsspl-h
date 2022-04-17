import React from 'react'
import { connect } from 'react-redux';

function EmployeeDetails(props) {
  return (
    <div className="App"><pre>{JSON.stringify(props.userData.selectedEmployee, null, 2)}</pre></div>
  )
}


const mapStateToProps = (state, ownProps) => {
  return {
    userData: state.user
  }
}

export default connect(mapStateToProps)(EmployeeDetails)