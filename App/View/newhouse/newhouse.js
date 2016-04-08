'use strict';

import React, { View, Image, Text,TouchableOpacity } from 'react-native';
import Home from '../home/home.js';
import OldHouse from '../../View/oldhouse/oldhouse';
import Mine from '../../View/mine/mine';
import { styles } from './newCss';


export default class NewHouse extends React.Component{
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
            currentComponent: 1
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
                //为什么这里可以取得 props.navigator?请看上文:
                //<Component {...route.params} navigator={navigator} />
                //这里传递了navigator作为props
                if(navigator) {
                    navigator.push({
                        name: 'NewHouse',
                        component: NewHouse
                    })
                }
            }break;
            case 2:
            {
                const { navigator } = this.props;
                if(navigator) {
                    navigator.push({
                        name: 'OldHouse',
                        component: OldHouse
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
        return (

            <View>
                <View style={{flex: 1}}>
                    <View style={{flex: 1,backgroundColor: 'green'}}><Text>{'新房'}</Text></View>
                </View>
    <View>


        </View>

                <View style={styles.navbar}>
                    {
                        this.state.data.map((value,key)=>
                            <View style={styles.navli} key={key} onTouchEnd={this.select.bind(this,key)}>
                                <Image style={styles.navliimage} source={key==this.state.currentComponent?value.suri:value.uri}/>
                                <Text style={[styles.navlitxt,(key==this.state.currentComponent)&&styles.navlitxtcurrent]}>{value.txt}</Text>
                            </View>
                        )
                    }
                </View>
            </View>

        );
    }
};