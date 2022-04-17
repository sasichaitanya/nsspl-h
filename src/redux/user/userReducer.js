import {
    FETCH_EMP_FAILURE, FETCH_EMP_REQUEST, FETCH_EMP_SUCCESS, CHANGE_LOGINSTATUS,
    UPDATE_EMP
} from "./userTypes";

const initailState = {
    loading: false,
    employees: [],
    error: '',
    isLoggedIn: false,
    selectedEmployee: {}
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

        case CHANGE_LOGINSTATUS:
            return {
                ...state,
                isLoggedIn: action.payload
            }

        case UPDATE_EMP:
            return {
                ...state,
                selectedEmployee: action.payload
            }

        default:
            return state;
    }
}

export default userReducer