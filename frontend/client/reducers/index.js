import { combineReducers } from 'redux';

import account from './account';
import login from './login';
import signin from './signin';

export default combineReducers({
    account,
    login,
    signin,
});
