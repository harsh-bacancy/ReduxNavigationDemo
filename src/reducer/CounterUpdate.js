import * as Action from '../actions/ActionTypes';

const CounterUpdate = (state = { counter: 0 }, action)=>{
    console.log('error-', state, action)
    switch (action.type) {
        case Action.COUNTER_INCREMENT:
            return { counter: state.counter + 1 }
        case Action.COUNTER_DECREMENT:
            return { counter: state.counter - 1 }
        default:
            return state;
    }
}
export default CounterUpdate;