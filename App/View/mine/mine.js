'use strict';

import React,{Component} from "react";
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Alert,
    Image,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

import RsaLogin from '../login/rsalogin';
import Home from '../home/home.js';
import News from '../news/news';
import Func from '../func/func';
import Pers from './ToPers';
import MSIS from './ToMsis';
import Attach from '../../Service/Person/attachSSN';
import PersInfo from '../../Service/Person/persInfo';

import { styles } from './mineCss';

require('../../Component/baobab/bb.js');
var usersCursor = tree.select('users');

export default class Mine extends React.Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

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
    _persInfo() {
        if(usersCursor.get("ssn")==""){
            console.log(usersCursor.get("ssn"));
            Alert.alert(
                '尚未绑定社保账号',
                '请绑定后查看',
                [
                    {text: '去绑定', onPress: () => {
                        const { navigator } = this.props;
                        if(navigator) {
                            navigator.push({
                                name: 'Attach',
                                component: Attach
                            })
                        }
                    }},
                ]
            );
        }else{
            const { navigator } = this.props;
            if(navigator) {
                navigator.push({
                    name: 'person',
                    component: PersInfo
                })
            }
        }
    }
    _attachSSN() {
        if(usersCursor.get("ssn")==""){
            console.log("ahhahahahaha"+this.props);
            const { navigator } = this.props;
            if(navigator) {
                navigator.push({
                    name: 'Attach',
                    component: Attach
                })
            }
        }else{
            console.log(usersCursor.get("ssn"));
            var OWNSSN=usersCursor.get("ssn");
            Alert.alert(
                '您已绑定过社保号码',
                '已绑定社保号为：'+OWNSSN,
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed!')},
                ]
            );
        }

    }
    _signout() {
        usersCursor.set('username', null);
        usersCursor.set('ssn',null);
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
            navigator.push({
                name: 'Login',
                component: RsaLogin
            })
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

    // 渲染
    pass(){
        return (

            <View style={styles.wrap}>
                <View style={[styles.funchead]}>
                    <Text style={[styles.textInside, styles.functionalText]}>我的社区</Text>
                </View>
                    <View style={styles.swithbox}>
                        <Text>"欢迎"{usersCursor.get("username")}</Text>
                        <Text>您的社保号码为：{usersCursor.get("ssn")}</Text>
                    </View>
                <View style={{flex: 1,backgroundColor: 'white'}}>
                  <Pers   navigator  = {this.props.navigator}  />

                        <TouchableOpacity  onPress={this._attachSSN.bind(this)}>
                            <View style={[styles.bolock]}>
                                <Text>账号绑定</Text>
                            </View>
                        </TouchableOpacity>
                    
                    <MSIS   navigator  = {this.props.navigator}  />
                        <TouchableOpacity  onPress={this.about.bind(this)}>
                            <View style={[styles.bolock]}>
                                <Text>关于我们</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this._signout.bind(this)}>
                            <View style={[styles.bolock]}>
                                <Text>退出登录</Text>
                            </View>
                        </TouchableOpacity>
                </View>


            </View>
        );
    }
    unpass(){
        return (

            <View style={styles.wrap}>
                <View style={[styles.funchead]}>
                    <Text style={[styles.textInside, styles.functionalText]}>我的社区</Text>
                </View>
                
                <View style={{flex: 1,backgroundColor: 'white'}}>
                    <View style={styles.swithbox}>
                        <TouchableOpacity
                            onPress={this._gologin.bind(this)}
                        >
                            <View style={[styles.style_view_login, styles.functionalButton]}>
                                <Text style={[styles.textInside, styles.functionalText]}>注册/登录</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 1}}>
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