export function filter(state) {
    const newArr = [...state];
    newArr.sort((a, b) => a - b);
    
    return {
        type: "FILTER_TODO",
        payload: newArr
    };
}

export function emptyTodo() {
    return {
        type: "EMPTY_TODO",
        payload: []
    }
}