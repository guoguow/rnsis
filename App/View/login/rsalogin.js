/**
 * Created by guoguow on 2016/4/15.
 */
'use strict';
var url="10.1.91.242:3001";

var RSAClient= require('./rsa-client');//客户端rsa加密
var _publicKey = new RSAClient();

//初始化“公钥”
fetch('http://'+url+'/RSA')
    .then((response) => response.json())
    .then(
        (ret) => {
            _publicKey.setPublic(ret.n, ret.e);
        }
    ).done();


var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64padchar="=";
function hex2b64(h) {
    var i;
    var c;
    var ret = "";
    for(i = 0; i+3 <= h.length; i+=3) {
        c = parseInt(h.substring(i,i+3),16);
        ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
    }
    if(i+1 == h.length) {
        c = parseInt(h.substring(i,i+1),16);
        ret += b64map.charAt(c << 2);
    }
    else if(i+2 == h.length) {
        c = parseInt(h.substring(i,i+2),16);
        ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
    }
    while((ret.length & 3) > 0) ret += b64padchar;
    return ret;
}
//“公钥”加密，加密后的数据是hex编码比较长，所以转成base64
var encrypt=function(val){
    return hex2b64(_publicKey.encrypt(val));

    //  return _publicKey.encrypt(val);
};


import React,{Component} from  "react";
import{
    TextInput,
    Text,
    StyleSheet,
    View,
    Alert,
    TouchableHighlight,
    TouchableOpacity} from "react-native"
require('../../Component/baobab/bb.js');
import { styles } from './loginCSS';

var usersCursor = tree.select('users');

export default class  RsaLogin  extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName:null,
            passWord:null,
            ssn:null
        };
    }
    getuser(event:Object) {
        this.setState({
            userName: event.nativeEvent.text.toLowerCase()
        });
        console.log("aaaaaaaaaaaaaaaa");
        console.log(this.state.userName);
    }
    getpwd(event:Object) {
        this.setState({
            passWord: event.nativeEvent.text.toLowerCase()
        });
        console.log("bbbbbbb");
        console.log(this.state.passWord);
        return this.state.passWord;
    }
    handlepress(event:Object) {
        let _pwd= encrypt(this.state.passWord);
        console.log(_pwd);
        var username = this.state.userName;
        var password = _pwd;
        var baseurl="http://10.1.91.242:3001/login?userName=";
        var queryURL=baseurl+encodeURIComponent(username)+"&passWord="+encodeURIComponent(password);
        function status(response){
            console.log(response);
            if(response.hasOwnProperty("error"))
            {
                console.log(response.error);
                var cerror=response.error;
                return Promise.reject(cerror)
            }else{
                console.log(response);
                return  Promise.resolve(response)
            }
        }
        fetch(queryURL)
            .then((response) =>response.json())
            .then(status)
            .then((responseData) => {
                console.log(responseData);
                Alert.alert(
                    '欢迎',
                    // responseData.content.userInfo.customersName,
                    responseData.username,
                    // responseData.key,
                    [
                        {text: 'OK', onPress: () => {
                            const { navigator } = this.props;
                            if(navigator) {
                                //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
                                navigator.pop();
                            }
                        }},
                    ]
                );
                this.setState({
                    username: responseData.username,
                    ssn: responseData.ssn
                });

                usersCursor.set('username', responseData.username);
                usersCursor.set('ssn', responseData.ssn);
                console.log("aa"+usersCursor.get("username"));
                console.log("aa"+usersCursor.get("ssn"));
                var pssn = usersCursor.get("ssn");
                var purl="http://10.1.91.242:3000/profile?ssn="
                var perInfoURL=purl+encodeURIComponent(pssn)+"&username="+encodeURIComponent(username);
                fetch(perInfoURL)
                    .then((response) =>response.json())
                    .then(function(persdata) {
                        //http://10.1.91.242:3000/profile?ssn=20613111810005534383&username=ll
                        //FOR persInfo
                        usersCursor.set('name', persdata.name);
                        usersCursor.set('idcard', persdata.idcard);
                        usersCursor.set('birthday', persdata.birthday);
                        usersCursor.set('sex', persdata.sex);
                        usersCursor.set('marrige', persdata.marrige);
                        usersCursor.set('nationality', persdata.nationality);
                        usersCursor.set('ps', persdata.ps);
                        usersCursor.set('mobliephone', persdata.mobilephone);
                        usersCursor.set('address', persdata.address);
//{"ssn":"20613111810005534383","name":"施小平测生育02","idcard":"320682197806130132","birthday":"19780613",
// "sex":"2","marrige":null,"nationality":null,"PS":null,"mobilephone":"2061311181345345","address":null}

                    })
                    .catch((error) => {
                        console.log("pers pp"+error);
                    });
                var mssn = usersCursor.get("ssn");
                var murl="http://10.1.91.242:3002/getsistype?username=";
                //http://10.1.91.242:3002/getsistype?username=lww&ssn=20613111810005534383
                var  minSISURL=murl+encodeURIComponent(username)+"&ssn="+encodeURIComponent(mssn);
                fetch(minSISURL)
                    .then((response) =>response.json())
                    .then(function(minsdata) {

                        var o1 ={sign:"0",value1:''};
                        var o2=o1,o3=o1,o4=o1,o5=o1;
                        for (var i = 0;i < minsdata.length; i++)
                        {
                            for(var key in minsdata[i]){
                                //alert("key："+key+",value："+data[i][key]);
                                switch (minsdata[i][key]){
                                    case "101":
                                    case "102":  o1 ={sign:"1",value1:'职工养老',date:minsdata[i].aac030.substring(0,4)};break;
                                    case "110": o1 ={sign:"11",value1:'居民养老',date:minsdata[i].aac030.substring(0,4)};break;
                                    case "201": o2 ={sign:"5",value2:'职工失业',date:minsdata[i].aac030.substring(0,4)};break;
                                    case "303":
                                    case "302":
                                    case "301":  o3 = {sign:"2",value3:'职工医疗',date:minsdata[i].aac030.substring(0,4)};break;
                                    case "305":
                                    case "306":   o3={sign:"22",value3:'居民医疗',date:minsdata[i].aac030.substring(0,4)};break;
                                    case "401":  o4 = {sign:"4",value4:'职工工伤',date:minsdata[i].aac030.substring(0,4)};break;
                                    case "501":   o5 = {sign:"3",value5:'职工生育',date:minsdata[i].aac030.substring(0,4)};break;
                                }
                            }

                        }
                        var out={s1:o1,s2:o2,s3:o3,s4:o4,s5:o5};
                        usersCursor.set('sistype', out);
                        
                        
                    })
                    .catch((error) => {
                        console.log("minesis "+error);
                    });



            })
            .catch((cerror) => {
                console.warn(cerror);
                Alert.alert(
                    '出错啦',
                    cerror,
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed!')}
                    ]
                );
            })
            .catch((error) => {
                console.log("ppp"+error);
            })
    }
    _back() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    }
    renderLogin() {
        return (
            <View style={styles.container}>

                <View>
                    <TouchableOpacity onPress={this._back.bind(this)}>
                        <Text>BACK</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Hi,Signin/up First!</Text>

                <TextInput
                    style={styles.style_user_input}
                    placeholder='用户名/社保号'
                    numberOfLines={1}
                    autoFocus={true}
                    underlineColorAndroid={'transparent'}
                    textAlign='center'
                    type="text" value={this.state.user}
                    onChange={this.getuser.bind(this)}
                />

                <TextInput
                    style={styles.style_pwd_input}
                    placeholder='密码'
                    numberOfLines={1}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}
                    textAlign='center'
                    type="text" value={this.state.pwd}
                    onChange={this.getpwd.bind(this)}

                />

                <TouchableHighlight
                    onPress={this.handlepress.bind(this)}
                    underlayColor="transparent"
                    activeOpacity={0.8}>
                    <View style={[styles.style_view_login, styles.functionalButton]}>
                        <Text style={[styles.textInside, styles.functionalText]}>登录</Text>
                    </View>
                </TouchableHighlight>

                <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10}}>
                    <TouchableOpacity onPress={this._back.bind(this)}>
                        <Text style={styles.style_view_unlogin}>游客访问</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._back.bind(this)}>
                        <Text  style={styles.style_view_register}>用户注册</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    renderPass(){
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }

    }

    /*渲染*/
    render() {
        if(usersCursor.get("username")==null){
            return (
                <View style={styles.wrap}>
                    {this.renderLogin()}
                </View>
            );
        }
        else{
            return (
                <View style={styles.wrap}>
                    {this.renderPass()}
                </View>
            );
        }
    };
};
module.exports=RsaLogin;