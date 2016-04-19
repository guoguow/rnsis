/**
 * Created by guoguow on 2016/4/11.
 */
'use strict';

import React, { View, Image, Text,TouchableOpacity } from 'react-native';
import Login from '../login/signin';
import Home from '../home/home.js';
import News from '../news/news';
import Func from '../func/func';
import Config from '../func/func';

import { styles } from './mineCss';

var usersCursor = tree.select('users');

export default class Mine extends React.Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        };
    }
    
    // 渲染
    pass(){
        return (

            <View style={styles.wrap}>
                <View style={{flex: 1}}>
                    <TouchableOpacity  onPress={this._gologin.bind(this)}>
                        <View style={[styles.bolock]}>
                            <Text>软件设置</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                    <TouchableOpacity  onPress={this._gologin.bind(this)}>
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
                    <TouchableOpacity  onPress={this._gologin.bind(this)}>
                        <View style={[styles.bolock]}>
                            <Text>软件设置</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1}}>
                    <TouchableOpacity  onPress={this._gologin.bind(this)}>
                        <View style={[styles.bolock]}>
                            <Text>软件设置</Text>
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