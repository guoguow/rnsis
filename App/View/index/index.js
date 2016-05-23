'use strict';

import React from "react";
import{ View, Navigator,Image, Text } from 'react-native';
import Nav from '../../Component/nav/nav';
import Home from '../home/home';
import NewHouse from '../func/func';
import OldHouse from '../news/news';
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
    render() {
        let defaultName = "Nav";
        let defaultComponent = Nav;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
            return Navigator.SceneConfigs.HorizontalSwipeJump;
          }}
                renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
        );
    }
    
};


