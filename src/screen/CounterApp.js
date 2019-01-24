import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'


class CounterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        // this.buttonPress = this.buttonPress.bind(this);
        console.log('----------here----------', props, this.props);
    }

    // buttonPress() {
    //     console.log('called');
    //     this.props.navigation.navigate('');
    // }
    render() {
        const { container, text, counterView, buttonView } = styles
        
        return (
            <View style={container}>
                <Text style={text}>This is Page 1</Text>
                <View style={counterView}>
                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                        <Text style={text}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={text}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                        <Text style={text}>Decrease</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{ padding: 10, margin: 10, backgroundColor: 'red', width: '90%', alignItems: 'center' }}
                    onPress={() => this.props.navigation.navigate('CounterDisplay')}
                >
                    <Text style={text}>Next</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps--------', state);

    return {
        counter: state.reducer.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    counterView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor: 'red',
        width: '90%'
    },
    buttonView: {
        width: '100%',
        backgroundColor: '#ddd',
        alignItems: 'center',
        padding: 10
    },
    text: {
        fontSize: 20,
        color: '#000'
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)