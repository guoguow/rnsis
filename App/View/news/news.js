'use strict';

import React from "react";
import { View, Image, Text } from 'react-native';
import Login from '../login/signin';
import Home from '../home/home.js';
import Mine from '../../View/mine/mine';
import Func from '../func/func';
import { styles } from './newsCss';

var usersCursor = tree.select('users');

export default class News extends React.Component{
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