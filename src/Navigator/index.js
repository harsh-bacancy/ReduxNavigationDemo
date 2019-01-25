import { createAppContainer, createStackNavigator, } from 'react-navigation'
import React, { Component } from 'react'
import CounterApp from '../component/CounterApp'
import CounterDisplay from '../component/CounterDisplay'

const Navigator = createStackNavigator(
    {
        CounterApp: { screen: CounterApp },
        CounterDisplay: { screen: CounterDisplay }
    },
    {
        initialRouteName: 'CounterApp'
    }
);

const AppContainer = createAppContainer(Navigator)

class AppNavigator extends Component {
    render() {
        return (
            <Navigator />
        )
    }
}

export default AppContainer;