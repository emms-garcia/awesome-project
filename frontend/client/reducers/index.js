import { combineReducers } from 'redux';

import account from './account';
import login from './login';
import signin from './signin';
import todos from './todos';

export default combineReducers({
    account,
    login,
    signin,
    todos,
});
