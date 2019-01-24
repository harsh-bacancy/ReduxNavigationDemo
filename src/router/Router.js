import React, { Component } from 'react'
import CounterApp from '../screen/CounterApp'
import CounterDisplay from '../screen/CounterDisplay'
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator, } from 'react-navigation'
import { Provider } from 'react-redux'

import store from '../store'

const Navigator = createStackNavigator(
    {
        CounterApp: { screen: CounterApp },
        CounterDisplay: { screen: CounterDisplay },
    },
    {
        initialRouteName: 'CounterApp'
    }
);

const AppContainer = createAppContainer(Navigator)

class MainScreen extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}

export default AppContainer;