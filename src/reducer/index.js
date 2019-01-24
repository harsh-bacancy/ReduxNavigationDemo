import { combineReducers } from 'redux'

const initialState = {
    counter: 0
};


function reducer(state = initialState, action) {
    console.log('error-',state,action)
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { counter: (state.counter + 1) }
        case 'DECREASE_COUNTER':
            return { counter: (state.counter - 1) }
    }
    return state
}

const rootReducer = combineReducers({
    reducer
});

export default rootReducer;