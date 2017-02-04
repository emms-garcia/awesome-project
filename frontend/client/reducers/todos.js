import {
    CREATE_TODO_SUCCESS,
    RECEIVE_TODOS,
} from '../actions/todos';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO_SUCCESS:
            return {
                ...state,
            };
        case RECEIVE_TODOS:
            return {
                ...action.payload.reduce((accumulator, todo) => {
                    accumulator[todo.id] = todo;
                    return accumulator;
                }, {}),
            };
        default:
            return state;
    }
};
