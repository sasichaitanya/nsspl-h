import { combineReducers } from "redux";
// reducers
import userReducer from "./user/userReducer";

const rootReducers = combineReducers({
    user: userReducer
})

export default rootReducers