import { createAppContainer, createStackNavigator, createTabNavigator } from 'react-navigation'
import React, { Component } from 'react'
import CounterApp from '../component/CounterApp'
import CounterDisplay from '../component/CounterDisplay'

const Navigator = createStackNavigatorrr(
    {
        CounterApp: { screen: CounterApp },
        CounterDisplay: { screen: CounterDisplay }
    },
    {
        initialRouteName: 'CounterApp'
    }
);

const AppContainer = createAppContainer(Navigator)

class extends Component {
    render() {
        return (
            <Navigator />
        )
    }
}

export default AppContainer;