import { combineReducers, createStore, applyMiddleware } from 'redux'
import CounterUpdate from './CounterUpdate'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    CounterUpdate,
});

const reducer=(state, action) => {
    return rootReducer(state, action);
}

let store = createStore(reducer,applyMiddleware(thunk))

export default store;