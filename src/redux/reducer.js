import action from "./action";

const initialState = {
    todos: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [...state.todos, action.payload]
            };
        default:
            return state;
    }
};

export default reducer;