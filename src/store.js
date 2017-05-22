import { createStore, applyMiddleware } from 'redux'
import { loadFromStorage, saveToStorage } from './localStorage';
import logger from 'redux-logger'
import rootReducer from './Reducers/rootReducer';

const loadedState = loadFromStorage();

const store = createStore(
    rootReducer,
    loadedState,
    applyMiddleware(logger)
);

store.subscribe(() => {
    saveToStorage(store.getState());
});

export default store;
