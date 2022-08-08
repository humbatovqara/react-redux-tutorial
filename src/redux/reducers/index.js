import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import profileReducer from "./profileReducer";
import { counterReducer } from "./counterReducer";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({
    // todo: todoReducer,
    employee: employeeReducer,
    // profile: profileReducer,
    // counter: counterReducer
})

export default rootReducer;