import * as types from '../actions/actionType';

const initialState = {
    employees: [],
    employee: {},
    loading: true
};

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
                loading: false,
            }
        case types.DELETE_EMPLOYEE:
        case types.ADD_EMPLOYEE:
        case types.UPDATE_EMPLOYEE:
            return {
                ...state,
                loading: false
            }
        case types.GET_SINGLE_EMPLOYEE:
            return {
                ...state,
                employee: action.payload,
                loading: false
            }
        default:
            return state;
    }
};

export default employeeReducer;