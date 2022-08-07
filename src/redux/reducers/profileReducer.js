import axios from "axios";

const initialProfile = [];

const profileReducer = (state = initialProfile, action) => {
    switch (action.type) {
        case "ADD_TO_PROFILE":
            {
                const newArr = [...state, action.payload];
                return console.log(newArr[0]);
            }
        default:
            return state;
    }
};

export function asyncAddTodo() {
    return async dispatch => {
        await axios("http://localhost:3002/todos")
            .then(response => dispatch({ type: "ADD_TO_PROFILE", payload: { todos: response.data } }))
    };
}

export default profileReducer;