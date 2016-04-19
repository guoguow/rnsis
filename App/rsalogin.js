/**
 * Created by guoguow on 2016/4/15.
 */
'use strict';
const React = require('react-native');

var url="10.1.82.53:3001";

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
var {
    View,
    Text,
    Alert,
    TextInput,
    StyleSheet,
    TouchableOpacity
} = React;
require('../../Component/baobab/bb.js');
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
        var baseurl="http://10.1.82.53:3001/login?userName=";
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
                        {text: 'OK', onPress: () => console.log('OK Pressed!')},
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
    renderlogin() {
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
const styles =StyleSheet.create({
    wrap: {
        flex:1,
        overflow: 'hidden'
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
        marginLeft:260,
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
    style_view_signup:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        height:35,
        borderRadius:5,
        justifyContent: 'center',
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
        left:30,
        marginTop: 30,
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
module.exports=RsaLogin;