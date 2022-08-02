const count = 0;

export const counterReducer = (state = count, action) => {
    switch (action.type) {
        case "INC": {
            return state + 1;
        }

        case "DEC": {
            return state - 1;
        }

        default:
            return state;
    }
}