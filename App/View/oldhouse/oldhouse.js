'use strict';

import React, { View, Image, Text } from 'react-native';

export default class OldHouse extends React.Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {}
    }
    // 渲染
    render(){
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1,backgroundColor: 'blue'}}><Text>{'二手房'}</Text></View>
            </View>
        );
    }
};