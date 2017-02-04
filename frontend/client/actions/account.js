import api from '../utils/api';

export const RECEIVE_USER_FAILED = 'RECEIVE_USER_FAILED';
export const RECEIVE_USER_SUCCESS = 'RECEIVE_USER_SUCCESS';
export const REQUEST_USER = 'REQUEST_USER';

export const fetchUser = () => {
    return (dispatch) => {
        dispatch({type: REQUEST_USER});

        return api.get('/api/identity')
            .then((response) => {
                return dispatch({type: RECEIVE_USER_SUCCESS, payload: response.data});
            })
            .catch((error) => {
                localStorage.removeItem('access_token');
                return dispatch({type: RECEIVE_USER_FAILED});
            });

    };
};
