import * as Action from '../actions/ActionTypes';

const CounterUpdate = (state = { counter: 0, lastcounter: 0 }, action) => {
    console.log('error-', state, action, action.payload)
    switch (action.type) {
        case Action.COUNTER_INCREMENT:
            return { counter: state.counter + 1, lastcounter: state.counter }
        case Action.COUNTER_DECREMENT:
            return { counter: state.counter - 1, lastcounter: state.counter }
        case Action.COUNTER_CLEAR:
            return { counter: 0 }
        case Action.COUNTER_SET:
            return { counter: action.payload };
        default:
            return state;
    }
}
export default CounterUpdate;