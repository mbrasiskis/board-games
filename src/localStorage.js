import { fromJS } from 'immutable';

export const saveToStorage = (state) => {
    const preparedState = JSON.stringify(state.toJS());
    localStorage.setItem('state', preparedState);
};

export const loadFromStorage = () => {
    let state = localStorage.getItem('state');
    state = fromJS(JSON.parse(state));
    return state ? state : undefined;
};
