import axios from "axios";

const initialEmployee = [];

const employeeReducer = (state = initialEmployee, action) => {
    switch (action.type) {
        case "GET_EMPLOYEES":
            {
                const newArr = [...state, ...action.payload];
                // console.log(action.payload)
                return newArr;
            }
        default:
            return state;
    }
};

export function asyncGetEmp() {
    return async (dispatch) => {
        await axios("http://localhost:3002/employees")
            .then(response => dispatch({ type: "GET_EMPLOYEES", payload: response.data }))
    };
}

export default employeeReducer;