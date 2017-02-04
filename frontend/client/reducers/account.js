import {
    REQUEST_USER,
    RECEIVE_USER_FAILED,
    RECEIVE_USER_SUCCESS,
} from '../actions/account';

const initialState = {
    currentUser: null,
    isAuthenticated: false,
    loading: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_USER:
            return {
                ...state,
                loading: true,
            };
        case RECEIVE_USER_FAILED:
            return {
                ...state,
                currentUser: null,
                isAuthenticated: false,
                loading: false,
            };
        case RECEIVE_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isAuthenticated: true,
                loading: false,
        };
        default:
            return state;
    }
};
