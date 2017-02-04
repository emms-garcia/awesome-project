import {
    SIGNIN_FAILED,
    SIGNIN_SUCCESS,
} from '../actions/signin';

const initialState = {
    errorMessages: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_FAILED:
            return {
                ...state,
                errorMessages: { ...action.payload },
            };
        case SIGNIN_SUCCESS:
            return {
                ...state,
                errorMessages: {},
            };
        default:
            return state;
    }
};
