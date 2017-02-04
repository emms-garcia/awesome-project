import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
} from '../actions/login';

const initialState = {
    errorMessages: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FAILED:
            return {
                ...state,
                errorMessages: [action.payload],
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                errorMessages: [],
            };
        default:
            return state;
    }
};
