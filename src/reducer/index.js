import { combineReducers, createStore, applyMiddleware } from 'redux'
import CounterUpdate from './CounterUpdate'

const rootReducer = combineReducers({
    CounterUpdate,
});

const reducer=(state, action) => {
    return rootReducer(state, action);
}

let store = createStore(reducer)

export default store;