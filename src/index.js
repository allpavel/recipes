import React from 'react';
import ReactDOM from 'react-dom'
import { store } from './app/store';
import { App } from './app/app';

const render = () => {
    return ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch} />, document.getElementById('app'));
};


store.subscribe(render);
render();