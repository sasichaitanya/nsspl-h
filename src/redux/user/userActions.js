import axios from "axios";
import { FETCH_EMP_FAILURE, FETCH_EMP_SUCCESS, FETCH_EMP_REQUEST } from "./userTypes";

export const fetchEmpRequest = () => {
    return {
        type: FETCH_EMP_REQUEST
    }
}

export const fetchEmpSuccess = (users) => {
    return {
        type: FETCH_EMP_SUCCESS,
        payload: users
    }
}

export const fetchEmpFailure = (error) => {
    return {
        type: FETCH_EMP_FAILURE,
        payload: error
    }
}


export const fectEmployes = () => {
    return (dispatch) => {
        // enables loader
        dispatch(fetchEmpRequest)
        axios.get('https://api.github.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchEmpSuccess(users))
        })
        .catch(err => {
            const errMsg = err.message
            dispatch(fetchEmpFailure(errMsg))
        })
    }
}
