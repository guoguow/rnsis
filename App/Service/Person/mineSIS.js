/**
 * Created by b on 2016/5/10.
 */
'use strict';
import React,{Component} from "react";
import  {
    TextInput,
    StyleSheet,
    Text,
    View,
    Alert,
    Image,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";


import { styles } from './mineCss';

require('../../Component/baobab/bb.js');
var usersCursor = tree.select('users');

export default class mineSIS extends React.Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    // 渲染
    render(){
        return (
            <View style={styles.wrap}>
                <View style={{flex: 1,backgroundColor: 'white'}}>
                    <View style={[styles.bolock]}>
                        <Text>{usersCursor.get("name")}的已参保信息</Text>
                    </View>
                    <View style={[styles.bolock]}>
                    </View>
                    <View style={[styles.bolock]}>
                        <Text>       参保年度      参保险种  </Text>
                    </View>
                    <View style={[styles.bolock]}>
                        <Text>         {usersCursor.get("sistype").s1.date}         {usersCursor.get("sistype").s1.value1}</Text>
                    </View>
                    <View style={[styles.bolock]}>
                        <Text>         {usersCursor.get("sistype").s2.date}         {usersCursor.get("sistype").s2.value2}</Text>
                    </View>
                    <View style={[styles.bolock]}>
                        <Text>         {usersCursor.get("sistype").s3.date}         {usersCursor.get("sistype").s3.value3}</Text>
                    </View>
                    <View style={[styles.bolock]}>
                        <Text>         {usersCursor.get("sistype").s4.date}         {usersCursor.get("sistype").s4.value4}</Text>
                    </View>
                    <View style={[styles.bolock]}>
                        <Text>         {usersCursor.get("sistype").s5.date}         {usersCursor.get("sistype").s5.value5}</Text>
                    </View>

                </View>


            </View>
        );
    }
};