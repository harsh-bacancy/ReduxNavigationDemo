import React, { Component } from 'react'
import CounterApp from '../component/CounterApp'
import CounterDisplay from '../component/CounterDisplay'
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator, } from 'react-navigation'
import { Provider } from 'react-redux'

import store from '../store'

const Navigator = createMaterialTopTabNavigator(
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

// const mapStateToProps = state => ({
//     navigation: state.Navigator,
//   })

export default AppContainer;