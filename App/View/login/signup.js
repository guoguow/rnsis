'use strict';


var React = require('react-native');
var {
     Image, TextInput,Component,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableHighlight,
} = React;
var operator = "", operand = "";
var calMethod = '';
import Index from '../index/index';
import Nav from '../../Component/nav/nav';
import Home from '../home/home';
import NewHouse from '../func/func';
import OldHouse from '../news/news';
import Mine from '../mine/mine';


export default class  Login  extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hey: null,
            indexpage: null
        };

    }

    handlePress(hi) {
        console.log(hi);
        if (calMethod === '') {
            operator += hi.toString();
        } else {
            operand += hi.toString();
        }
        this.setState({
            hey: calMethod === '' ? operator : operand,
        })
    }

    handleFetchsignin() {
        fetch('http://10.1.82.53:3001/signin?password=lww&username=lww')
        //  fetch('http://srv.ehuishou.com/userlogin?userId=13705030809&passwd=123456')
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                Alert.alert(
                    '欢迎',
                    // responseData.content.userInfo.customersName,
                    responseData.username,
                    // responseData.key,
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed!')},
                    ]
                );
            })
            .catch((error) => {
                console.warn(error);
                Alert.alert(
                    'catch Title',
                    error,
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed!')},
                    ]
                );
            });

    }

    handleFetchsignup() {
        Alert.alert(
            'Alert Title',
            '提醒消息ahahahaha',
            [
                {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
        );
    }

    skip(){
        this.setState({
            indexpage: this.renderIndex()
        });
    }

    renderIndex(){
        return (
            <Index />
        );
    }

    regs(){
        this.setState({
            homepage: this.renderHome()
        });
    }

    renderHome(){
        return (
            <Home />
        );
    }
    renderLogin() {
        var data = this.state.hey
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hi,Signin/up First!</Text>
                <TextInput
                    style={styles.style_user_input}
                    placeholder='用户名/社保号'
                    numberOfLines={1}
                    autoFocus={true}
                    underlineColorAndroid={'transparent'}
                    textAlign='center'
                />
                <TextInput
                    style={styles.style_pwd_input}
                    placeholder='密码'
                    numberOfLines={1}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}
                    textAlign='center'
                />
                <View>
                    <TouchableHighlight
                        onPress={this.handleFetchsignin}
                        underlayColor="transparent"
                        activeOpacity={0.8}>
                        <View style={[styles.style_view_login, styles.functionalButton]}>
                            <Text style={[styles.textInside, styles.functionalText]}>登录</Text>
                        </View>
                    </TouchableHighlight>
                </View>


                <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10}}>
                    <View onTouchStart={this.skip.bind(this)}>
                        <Text  style={styles.style_view_unlogin}>游客访问</Text>
                    </View>
                    <View onTouchStart={this.regs.bind(this)}>
                        <Text  style={styles.style_view_register}>用户注册</Text>
                    </View>
                </View>
            </View>

        );
    }

    /*渲染*/
    render() {
        return (
            <View style={styles.wrap}>
                {this.state.homepage}
                {this.state.indexpage}
                {this.renderLogin()}
            </View>
        );


    };

}
const styles =StyleSheet.create({
    btntxt: {
        color: '#fff',
        fontSize: 10,
        opacity: 0.8
    },
    style_view_login:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        height:35,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_view_unlogin:{
        fontSize:12,
        color:'#63B8FF',
        marginLeft:10,
    },
    style_view_register:{
        fontSize:12,
        color:'#63B8FF',
        marginRight:10,
        alignItems:'flex-end',
        flex:1,
        flexDirection:'row',
        textAlign:'right',
    },
    style_user_input:{
        backgroundColor:'#fff',
        marginTop:10,
        height:35,
    },
    style_pwd_input:{
        backgroundColor:'#fff',
        height:35,
    },
    style_view_signin:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        height:35,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_view_signup:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        height:35,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    functionalButton: {
        backgroundColor: "##5599FF",
    },

    hi: {
        backgroundColor: "blue",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontFamily: 'Chalkduster',
        fontSize: 39,
        color: 'gray',
        marginBottom: 40,
    },
    board: {
        padding: 1,
        backgroundColor: "#F5FCFF",
        borderRadius: 5,
    },
    rows: {
        flexDirection: "row",
    },
    showing: {
        marginTop: 30,
        fontSize: 20,
        fontFamily: "Chalkduster",
    },
    textInside: {
        fontFamily: 'Arial',
        fontSize: 30,
    },

    functionalText: {
        color: "white",
    },
    
    
});

