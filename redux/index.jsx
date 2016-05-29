import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import todoApp from './reducers';

let store = createStore(todoApp);

store.subscribe(() => console.log(store.getState()));

let ele = document.getElementById('app');

render((
    <Provider store={store}>
        <App />
    </Provider>
), ele);