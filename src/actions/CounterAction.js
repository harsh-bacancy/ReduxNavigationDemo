import { connect } from 'react-redux'
import * as Action from './ActionTypes'
import CounterApp from '../component/CounterApp'

const mapStateToProps = (state) => ({
    counter: state.CounterUpdate.counter
});

const mapDispatchToProps = (dispatch) => ({
    increaseCounter: () => dispatch({ type: Action.COUNTER_INCREMENT }),
    decreaseCounter: () => dispatch({ type: Action.COUNTER_DECREMENT }),
    clearCounter: () => dispatch({ type: Action.COUNTER_CLEAR }),
    counterSet: (receiveNumber) => dispatch({ type: Action.COUNTER_SET, payload: receiveNumber })
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);