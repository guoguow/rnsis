'use strict';

import React, { View, Image, Text } from 'react-native';
import storage from '../../storage';

export default class NewHouse extends React.Component{
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
                <View style={{flex: 1,backgroundColor: 'green'}}><Text>{'新房'}</Text></View>
            </View>
        );
    }
};