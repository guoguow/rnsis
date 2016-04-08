'use strict';

import React, { View, Image, Text } from 'react-native';

var usersCursor = tree.select('users');

export default class OldHouse extends React.Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        }
    }
    // 渲染
    render(){

        console.log("aa"+usersCursor.get("username"));
        console.log("aa"+usersCursor.get("ssn"));
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1,backgroundColor: 'blue'}}><Text>{'news'}</Text>
                    <Text>username++++++++{usersCursor.get("username")}</Text>
                    <Text>ssn+++++{usersCursor.get("ssn")}</Text>

                </View>

            </View>
        );
    }
};