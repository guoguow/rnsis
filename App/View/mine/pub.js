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
import RsaLogin from '../login/rsalogin';
import Home from '../home/home.js';
import News from '../news/news';
import Func from '../func/func';
import Attach from '../../Service/Person/attachSSN';
import PersInfo from '../../Service/Person/persInfo';
import MineSIS from '../../Service/Person/mineSIS';


import { styles } from './mineCss';

require('../../Component/baobab/bb.js');
var usersCursor = tree.select('users');

export default class Pers extends React.Component{
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    persInfo() {
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
    render(){
        return(
            
            <TouchableOpacity   onPress={this.persInfo.bind(this)}>
                <View style={[styles.bolock]}>
                    <Text>个人信息 </Text>
                </View>
            </TouchableOpacity>
        )
    }
};
export default class MSIS extends React.Component{
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    mineSIS() {
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
                    name: 'minesis',
                    component: MineSIS
                })
            }
        }
    }
    render(){
        return(
            <TouchableOpacity  onPress={this.mineSIS.bind(this)}>
                <View style={[styles.bolock]}>
                    <Text>我的社保</Text>
                </View>
            </TouchableOpacity>
        )
    }
};