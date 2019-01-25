import { connect } from 'react-redux'
import * as Action from './ActionTypes'
import AppContainer from '../Navigator'

const mapStateToProps = (state) => ({
    counter: state.CounterUpdate.counter
});

const mapDispatchToProps = (dispatch) => ({
    increaseCounter: () => dispatch({ type: Action.COUNTER_INCREMENT }),
    decreaseCounter: () => dispatch({ type: Action.COUNTER_DECREMENT }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);