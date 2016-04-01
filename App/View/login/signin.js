'use strict';
//                    <!--View onTouchStart={this.skip.bind(this)}-->

var React = require('react-native');

var {
     Image, TextInput,Component,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableHighlight,
} = React;

export default class  Login  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:null,
            ssn:null,
            hey: null,
            user:null,
            pwd:null,
        };
    }
    handleFetchsignin() {
        console.log(this.state.user);
        console.log(this.state.pwd);
        var username = this.state.user;
        var password = this.state.pwd;
        var baseurl="http://10.1.82.53:3001/signin?password=";
        var queryURL=baseurl+encodeURIComponent(password)+"&username="+encodeURIComponent(username);
        console.log(queryURL);
       {
            fetch(queryURL)
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

                    this.setState({
                        username: responseData.username,
                        ssn: responseData.ssn
                    });
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

     getuser(event:Object) {
       this.setState({
           user: event.nativeEvent.text.toLowerCase()
       });
         console.log("aaaaaaaaaaaaaaaa");
         console.log(this.state.user);
    }

    getpwd(event:Object) {
        this.setState({
            pwd: event.nativeEvent.text.toLowerCase()
        });
        console.log("bbbbbbb");
        console.log(this.state.pwd);
        return this.state.pwd;

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
                        onPress={this.handleFetchsignin.bind(this)}
                        underlayColor="transparent"
                        activeOpacity={0.8}>
                        <View style={[styles.style_view_login, styles.functionalButton]}>
                            <Text style={[styles.textInside, styles.functionalText]}>登录</Text>
                        </View>
                    </TouchableHighlight>



                <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10}}>
                      <View>
                        <Text  style={styles.style_view_unlogin}>游客访问</Text>
                    </View>
                    <View>
                        <Text  style={styles.style_view_register}>用户注册</Text>
                    </View>
                </View>
            </View>

        );
    }
    renderPass(){
        return (
                <View>
                    <Text  style={styles.style_view_unlogin}>ahahahahahahahahahahahah</Text>
                    <Text  style={styles.style_view_unlogin}>ahahahahahahahahahahahah</Text>
                    <Text  style={styles.style_view_unlogin}>ahahahahahahahahahahahah</Text>
                    <Text  style={styles.style_view_unlogin}>ahahahahahahahahahahahah</Text>
                    <Text  style={styles.style_view_unlogin}>ahahahahahahahahahahahah</Text>
                    <Text  style={styles.style_view_unlogin}>ahahahahahahahahahahahah</Text>
                </View>
        );
    }
    

    /*渲染*/
    render() {
        if(this.state.username==null){
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

}
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

