import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Navigator from '../Navigator'
import store from '../reducer/index'

export default class ReduxNavigationDemo extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}

