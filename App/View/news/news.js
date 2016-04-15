'use strict';

import React, { View, Image, Text } from 'react-native';
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
            data: [
                {
                    txt: '首页',
                    uri: require('../img/tab1_1.png'),
                    suri: require('../img/tab1_2.png')
                },
                {
                    txt: '服务',
                    uri: require('../img/tab2_1.png'),
                    suri: require('../img/tab2_2.png')
                },
                {
                    txt: '资讯',
                    uri: require('../img/tab3_2.png'),
                    suri: require('../img/tab3_1.png')
                },
                {
                    txt: '我的',
                    uri: require('../img/tab4_2.png'),
                    suri: require('../img/tab4_1.png')
                }
            ],
            currentComponent: 2

        }
    }

    select(key) {
        switch (key) {

            case 0:
            {
                const { navigator } = this.props;
                if(navigator) {
                    navigator.push({
                        name: 'Home',
                        component: Home
                    })
                }
            } break;
            case 1:
            {
                const { navigator } = this.props;
                if(navigator) {
                    navigator.push({
                        name: 'Func',
                        component: Func
                    })
                }
            }break;
            case 2:
            {
                const { navigator } = this.props;
                if(navigator) {
                    navigator.push({
                        name: 'News',
                        component: News
                    })
                }
            }break;
            case 3:
            {
                const { navigator } = this.props;
                if(navigator) {
                    navigator.push({
                        name: 'Mine',
                        component: Mine
                    })
                }
            }break;

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

                <View style={styles.navbar}>
                    {
                        this.state.data.map((value,key)=>
                            <View style={styles.navli} key={key} onTouchEnd={this.select.bind(this,key)}>
                                <Image style={styles.navliimage} source={key==(this.state.currentComponent)?value.suri:value.uri}/>
                                <Text style={[styles.navlitxt,(key==this.state.currentComponent)&&styles.navlitxtcurrent]}>{value.txt}</Text>
                            </View>
                        )
                    }
                </View>

            </View>
        );
    }
};