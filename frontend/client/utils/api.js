import axios from 'axios';

const getHeaders = () => {
    const token = localStorage.getItem('access_token') || null;
    return {
        'Authorization': `JWT ${token}`,
    };
};

export default {
    get: (url, params = {}) => {
        return axios({
            headers: getHeaders(),
            method: 'get',
            responseType: 'json',
            params,
            url,
        });
    },

    post: (url, params = {}, data = {}) => {
        return axios({
            headers: getHeaders(),
            method: 'post',
            responseType: 'json',
            data,
            params,
            url,
        });
    },
};
