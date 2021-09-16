import React from 'react';
import ReactDOM from 'react-dom'
import { store } from './app/store';
import { App } from './app/app';
import { Provider } from 'react-redux';

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('app'));