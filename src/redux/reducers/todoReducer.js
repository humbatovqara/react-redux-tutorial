const initArr = [1, 2, 3];

export const todoReducer = (state = initArr, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
    
        default:
            return state;
    }
};