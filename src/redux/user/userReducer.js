import { FETCH_EMP_FAILURE, FETCH_EMP_REQUEST, FETCH_EMP_SUCCESS } from "./userTypes";

const initailState = {
    loading: false,
    employees: [],
    error: ''
}

const userReducer = (state = initailState, action) => {
    switch (action.type) {
        case FETCH_EMP_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_EMP_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: action.payload,
                error: ''
            }

        case FETCH_EMP_FAILURE:
            return {
                ...state,
                loading: false,
                employees: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default userReducer