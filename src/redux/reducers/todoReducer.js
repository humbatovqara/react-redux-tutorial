const initArr = [8, 2, 5];

export const todoReducer = (state = initArr, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];

        case "FILTER_TODO":
            return action.payload;

        case "EMPTY_TODO":
            return action.payload;

        default:
            return state;
    }
};