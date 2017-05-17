import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {Provider} from 'react-redux'
import BoardGames from './src/Components/BoardGames'

ReactDOM.render(
    <Provider store={store}>
        <BoardGames />
    </Provider>,
    document.getElementById('app')
);

