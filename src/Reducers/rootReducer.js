import {List, Map} from 'immutable'

const INITIAL_STATE = Map({
    games: List([])
});

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'addBoardGame':
            return state.set('games', state.get('games').push(action.boardGame));
        case 'removeBoardGame':
            return state.set('games', state.get('games').delete(action.index));
        default:
            return state
    }
}

export default rootReducer
