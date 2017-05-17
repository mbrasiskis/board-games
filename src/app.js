import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {Provider} from 'react-redux'
import BoardGames from './Components/BoardGames'

ReactDOM.render(
    <Provider store={store}>
        <BoardGames />
    </Provider>,
    document.getElementById('app')
);

