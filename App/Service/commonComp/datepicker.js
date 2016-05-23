'use strict';


import React from "react";
import {
   View,
    DatePickerAndroid,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,} from "react-native"
import Dimensions from 'Dimensions';
import PixelRatio from 'PixelRatio';
let { width, height } = Dimensions.get('window');
let PR = PixelRatio.get();

require('../../Component/baobab/bb.js');
var dateCursor = tree.select('date');

var UIExplorerBlock = require('./UIExplorerBlock');
var UIExplorerPage = require('./UIExplorerPage');

var DatePickerAndroidExample = React.createClass({

    statics: {
        title: 'DatePickerAndroid',
        description: 'Standard Android date picker dialog',
    },
    getDefaultProps() {
        return {
            pickdt() { }
        }},
    propTypes: {
        pickdt: React.PropTypes.func,
    },
        getInitialState() {
        return {
            minText: '2000年起 ',
            maxText: '至本月份',
        };
     
    },
    componentDidMount() {
        this.props.pickdt();
    },
    async showPicker(stateKey, options) {
        try {
            var newState = {};
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                console.log("cancle pressssssssssssssssss")

                console.log(dateCursor.get('enddate'))
                console.log(dateCursor.get('startdate'))

                // if(dateCursor.get('enddate')==null)
                // {
                //     newState[stateKey + 'Text'] = 'noselect';
                // }
                // else{}
            } else {
                var date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
                console.log(newState);
                this.setState(newState);

                if(newState.minDate){
                    dateCursor.set('startdate', newState.minText);
                    console.log("hhhhhhhhkkkkk"+dateCursor.get("startdate"));
                }else{
                    dateCursor.set('enddate', newState.maxText);
                    console.log("kkkkkkkkkkkkkkkkkkhhhhhhhhhh"+dateCursor.get("enddate"));
                }

            }

            
        } catch ({code, message}) {
            console.warn(`Error in example '${stateKey}': `, message);
        }

    },

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.onerow}>
                <TouchableWithoutFeedback
                        onPress={this.showPicker.bind(this, 'min', {
              date: this.state.minDate,
              minDate: new Date(2000,1,1),
            })}>
                    <Text style={styles.text}>startDate    {this.state.minText}</Text>
                    </TouchableWithoutFeedback>
</View>
                <View style={[styles.onerow]}>
                        <TouchableWithoutFeedback
                            onPress={this.showPicker.bind(this, 'max', {
              date: this.state.maxDate,
              maxDate: new Date(),
            })}>
                            <Text style={styles.text}>endDate     {this.state.maxText}</Text>
                        </TouchableWithoutFeedback>
                    </View>
</View>

        );
    },
});

var styles = StyleSheet.create({
    text: {
        color: 'black',
    },
    container: {
                flexDirection: 'row',
        backgroundColor: '#fff',
        height: 40

    },
    onerow: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRightColor: '#ccc',
                borderRightWidth: 3/PR
    }
});

module.exports = DatePickerAndroidExample;