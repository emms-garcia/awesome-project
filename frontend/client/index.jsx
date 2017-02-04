// Materialize.css styles
import 'styles/main.scss';
import 'materialize-loader';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>, document.getElementById('app')
);
