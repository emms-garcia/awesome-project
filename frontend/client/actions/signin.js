import api from '../utils/api';

export const REQUEST_SIGNIN = 'REQUEST_SIGNIN';
export const SIGNIN_FAILED = 'SIGNIN_FAILED';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';

export const signIn = (data) => {
    return (dispatch) => {
        dispatch({type: REQUEST_SIGNIN});

        return api.post('api/users', {}, data)
            .then((response) => {
                dispatch({type: SIGNIN_SUCCESS, payload: response.data});
            })
            .catch((error) => {
                dispatch({type: SIGNIN_FAILED, payload: error.response.data.messages});
            });

    };
};
