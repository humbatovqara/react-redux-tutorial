import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { profileReducer } from "./profileReducer";
import { counterReducer } from "./counterReducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    profile: profileReducer,
    counter: counterReducer
})

export default rootReducer;