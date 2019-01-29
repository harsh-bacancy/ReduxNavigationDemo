import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default class CounterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.onChangeText = this.onChangeText.bind(this);
        console.log('----------here----------', props, this.props);
    }
    onChangeText(number) {
        const count = parseInt(number);
        this.props.counterSet(count);
    }
    render() {
        const { container, text, counterView, } = styles
        return (
            <View style={container}>
                <Text style={text}>This is Page 1</Text>
                <TextInput
                    placeholder='0'
                    style={{ width: 100, height: 40, borderWidth: 2 }}
                    onChangeText={this.onChangeText}
                    value={this.props.counter.toString()}
                ></TextInput>
                <View style={counterView}>
                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                        <Text style={text}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={text}>({this.props.counter})</Text>
                    <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                        <Text style={text}>Decrease</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{ padding: 10, margin: 10, backgroundColor: 'red', width: '90%', alignItems: 'center' }}
                    onPress={() => this.props.clearCounter()}
                >
                    <Text>
                        Clear
                    </Text>
                </TouchableOpacity>
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
