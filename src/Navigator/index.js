import { createAppContainer, createStackNavigator, } from 'react-navigation'
import React, { Component } from 'react'
import CounterApp from '../actions/CounterAction'
import CounterDisplay from '../actions/CounterAction2'

const Navigator = createStackNavigator(
    {
        CounterApp: { screen: CounterApp },
        CounterDisplay: { screen: CounterDisplay }
    },
    {
        initialRouteName: 'CounterApp'
    }
);

export default createAppContainer(Navigator)
