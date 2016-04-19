'use strict';

import React, { View,Alert, Image, Text,TouchableOpacity } from 'react-native';
import RsaLogin from '../login/rsalogin';
import Home from '../home/home.js';
import News from '../news/news';
import Func from '../func/func';
import Attach from '../../Service/attachSSN';

import { styles } from './mineCss';

require('../../Component/baobab/bb.js');
var usersCursor = tree.select('users');

export default class Mine extends React.Component{
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
            currentComponent: 3
        };
    }

    /*renderlogin*/
    _gologin() {
        console.log("ahhahahahaha"+this.props);
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Login',
                component: RsaLogin
            })
        }
    }
    _attachSSN() {
        console.log("ahhahahahaha"+this.props);
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Attach',
                component: Attach
            })
        }
    }
    _signout() {
        usersCursor.set('username', null);
        usersCursor.set('ssn',null);
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    }
    about() {
        Alert.alert(
            '社保查询系统',
            'rnsisV1',
            [
                {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
        );
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
    pass(){
        return (

            <View style={styles.wrap}>
                <View style={{flex: 1}}>
                    <View style={styles.swithbox}>
                        <Text>"欢迎"{usersCursor.get("username")}</Text>
                        <Text>您的社保号码为：{usersCursor.get("ssn")}</Text>
                    </View>
                </View>

                <View style={{flex: 1}}>
                    <TouchableOpacity  onPress={this._gologin.bind(this)}>
                        <View style={[styles.bolock]}>
                            <Text>个人信息</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this._attachSSN.bind(this)}>
                        <View style={[styles.bolock]}>
                            <Text>账号绑定</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this._gologin.bind(this)}>
                        <View style={[styles.bolock]}>
                            <Text>我的社保</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.about.bind(this)}>
                        <View style={[styles.bolock]}>
                            <Text>关于我们</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1}}>
                    <TouchableOpacity  onPress={this._signout.bind(this)}>
                        <View style={[styles.bolock]}>
                            <Text>退出登录</Text>
                        </View>
                    </TouchableOpacity>
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
    unpass(){
        return (

            <View style={styles.wrap}>
                <View style={{flex: 1}}>
                    <View style={styles.swithbox}>
                        <TouchableOpacity
                            onPress={this._gologin.bind(this)}
                        >
                            <View style={[styles.style_view_login, styles.functionalButton]}>
                                <Text style={[styles.textInside, styles.functionalText]}>注册/登录</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                 <TouchableOpacity  onPress={this._gologin.bind(this)}>
                                <View style={[styles.bolock]}>
                                    <Text>个人信息</Text>
                                </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this._gologin.bind(this)}>
                        <View style={[styles.bolock]}>
                            <Text>账号绑定</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this._gologin.bind(this)}>
                        <View style={[styles.bolock]}>
                            <Text>我的社保</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.about.bind(this)}>
                        <View style={[styles.bolock]}>
                            <Text>关于我们</Text>
                        </View>
                    </TouchableOpacity>
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
    render() {
        if(usersCursor.get("username")==null){
            return (
                <View style={styles.wrap}>
                    {this.unpass()}
                </View>
            );
        }
        else{
            return (
                <View style={styles.wrap}>
                    {this.pass()}
                </View>
            );
        }
    };
};