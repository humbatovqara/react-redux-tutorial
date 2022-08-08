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
        case "POST_EMPLOYEES":
            {
                const emp = state.employee.concat(action.payload)
                console.log(state.employee)
                return { ...state, emp }
            }
        default:
            return state;
    }
};

export const asyncGetEmp = () => {
    return async (dispatch) => {
        await axios("http://localhost:3002/employees")
            .then(response => {
                dispatch({ type: "GET_EMPLOYEES", payload: response.data })
            })
    };
}

export const asyncPostEmp = (empObj) => {
    return (dispatch) => {
        axios.post("http://localhost:3002/employees", empObj)
            .then(response => {
                console.log(response.data)
                dispatch({ type: "POST_EMPLOYEES", payload: response.data })
            })
            .catch(error => { console.log(error) })
    }
}

export default employeeReducer;