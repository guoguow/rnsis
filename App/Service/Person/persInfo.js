'use strict';
const React = require('react-native');
var {
    TextInput,Component,
    StyleSheet,
    Text,
    View,
    Alert,
    Image,
    TouchableHighlight,
    TouchableOpacity
} = React;


import { styles } from './mineCss';

require('../../Component/baobab/bb.js');
var usersCursor = tree.select('users');

export default class PersInfo extends React.Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        //{"ssn":"20613111810005534383","name":"施小平测生育02","idcard":"320682197806130132","birthday":"19780613","sex":"2","marrige":null,
        // "nationality":null,"PS":null,"mobilephone":"2061311181345345","address":null}
        this.state = {};
    }
    // 渲染
    render(){
        return (
            <View style={styles.wrap}>
                <View style={{flex: 1,backgroundColor: 'white'}}>
                    <View style={[styles.bolock]}>
                        <Text>用户基本信息</Text>
                    </View>
                    <View style={[styles.bolock]}>
                    </View>
                        <View style={[styles.bolock]}>
                            <Text>姓名  {usersCursor.get("name")}</Text>
                        </View>
                    <View style={[styles.bolock]}>
                        <Text>民族  {usersCursor.get("nationality")}</Text>
                    </View>
                        <View style={[styles.bolock]}>
                            <Text>性别  {usersCursor.get("sex")} </Text>
                        </View>

                    <View style={[styles.bolock]}>
                    <Text>身份证号码  {usersCursor.get("idcard")}</Text>
                </View>
                    <View style={[styles.bolock]}>
                    <Text>社会保障号  {usersCursor.get("ssn")}</Text>
                </View>
                        <View style={[styles.bolock]}>
                            <Text>出生日期  {usersCursor.get("birthday")}</Text>
                        </View>

                    <View style={[styles.bolock]}>
                        <Text>手机号码  {usersCursor.get("mobilephone")}</Text>
                    </View>
                    <View style={[styles.bolock]}>
                        <Text>婚姻状况  {usersCursor.get("marrige")}</Text>
                    </View>
                    <View style={[styles.bolock]}>
                        <Text>政治面貌  {usersCursor.get("ps")}</Text>
                    </View>
                    <View style={[styles.bolock]}>
                        <Text>家庭住址  {usersCursor.get("address")}</Text>
                    </View>

                </View>


            </View>
        );
    }
};