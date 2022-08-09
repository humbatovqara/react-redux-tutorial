import * as types from './actionType';
import axios from "axios";

const getEmployees = (employees) => ({
    type: types.GET_EMPLOYEES,
    payload: employees
});

const employeeDeleted = () => ({
    type: types.DELETE_EMPLOYEE,
})

const employeeAdd = () => ({
    type: types.ADD_EMPLOYEE,
})

const getEmployee = (employee) => ({
    type: types.GET_SINGLE_EMPLOYEE,
    payload: employee
})

const employeeUpdated = () => ({
    type: types.UPDATE_EMPLOYEE,
})

export const loadEmployees = () => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}`)
            .then((response) => {
                console.log("response: ", response);
                dispatch(getEmployees(response.data));
            })
            .catch((error) => console.log(error));
    };
};

export const deleteEmployee = (id) => {
    return function (dispatch) {
        axios
            .delete(`${process.env.REACT_APP_API}/${id}`)
            .then((response) => {
                console.log("response: ", response);
                dispatch(employeeDeleted());
                dispatch(loadEmployees());
            })
            .catch((error) => console.log(error));
    };
};

export const addEmployee = (emp) => {
    return function (dispatch) {
        axios
            .post(`${process.env.REACT_APP_API}`, emp)
            .then((response) => {
                console.log("response: ", response);
                dispatch(employeeAdd());
                dispatch(loadEmployees());
            })
            .catch((error) => console.log(error));
    };
};

export const getSingleEmployee = (id) => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}/${id}`)
            .then((response) => {
                console.log("response: ", response);
                dispatch(getEmployee(response.data));
                // dispatch(loadEmployees());
            })
            .catch((error) => console.log(error));
    };
};

export const updateEmployee = (employee, id) => {
    return function (dispatch) {
        axios
            .put(`${process.env.REACT_APP_API}/${id}`, employee)
            .then((response) => {
                console.log("response: ", response);
                dispatch(employeeUpdated());
                dispatch(loadEmployees());
            })
            .catch((error) => console.log(error));
    };
};