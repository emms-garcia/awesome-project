import { browserHistory } from 'react-router';

import { fetchUser } from './account';
import api from '../utils/api';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const logIn = (username, password) => {
    return (dispatch) => {
        dispatch({type: REQUEST_LOGIN});

        return api.post('api/auth', {}, { username, password })
            .then((response) => {
                localStorage.setItem('access_token', response.data.access_token);
                dispatch(fetchUser()).then(() => {
                    browserHistory.push('/dashboard');
                });
            })
            .catch((error) => {
                dispatch({type: LOGIN_FAILED, payload: error.response.data.description});
            });
    };
};
