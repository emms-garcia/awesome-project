import api from '../utils/api';

export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const createTodo = (data) => {
    return (dispatch) => {
        api.post('todos', {}, data)
        .then((response) => {
            console.log(response);
        });
    };
};

export const fetchTodos = () => {
    return (dispatch) => {
        api.get('api/todos')
            .then((response) => {
                dispatch({type: RECEIVE_TODOS, payload: response.data});
            });
    };
};
