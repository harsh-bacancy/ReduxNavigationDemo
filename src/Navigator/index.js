import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation'
import CounterApp from '../actions/CounterAction'
import CounterDisplay from '../actions/CounterAction2'

const Navigator = createMaterialTopTabNavigator(
    {
        CounterApp: { screen: CounterApp },
        CounterDisplay: { screen: CounterDisplay }
    },
    {
        initialRouteName: 'CounterApp'
    }
);

export default createAppContainer(Navigator)
