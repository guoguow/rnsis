'use strict';

import React, { View, Image, Text } from 'react-native';
import Nav from '../../Component/nav/nav';
import Home from '../home/home';
import NewHouse from '../newhouse/newhouse';
import OldHouse from '../oldhouse/oldhouse';
import Mine from '../mine/mine';
import Storage from 'react-native-storage';

export default class Index extends React.Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {}
    }
    // 渲染
    render(){
        return (
            <Nav />
        );
    }
};