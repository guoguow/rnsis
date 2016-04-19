/**
 * Created by guoguow on 2016/4/11.
 */
'use strict';

import React, {
    TextInput,
    Text,
    View,
    Alert,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity
   } from 'react-native';

var usersCursor = tree.select('users');

export default class Attach extends React.Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            ssn:null,
            name:null,
            idcard:null
        };
    }
    _back() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }
    getname(event:Object) {
        this.setState({
            name: event.nativeEvent.text.toLowerCase()
        });
    }
    getssn(event:Object) {
        this.setState({
            ssn: event.nativeEvent.text.toLowerCase()
        });
    }
    getidcard(event:Object) {
        this.setState({
            idcard: event.nativeEvent.text.toLowerCase()
        });
    }
    
    _attachSSN() {
        var username = usersCursor.get("username");
        var name = this.state.name;
        var ssn = this.state.ssn;
        var idcard = this.state.idcard;
        var baseurl="http://10.1.82.53:3000/checkprofile?username=";
////http://10.1.82.53:3000/checkprofile?username=guo&ssn=00010072110000057117&name=姓名&idcard=370632195701177045
        var queryURL=baseurl+encodeURIComponent(username)+"&ssn="+encodeURIComponent(ssn)+"&name="+encodeURIComponent(name)+"&idcard="+encodeURIComponent(idcard);
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
        console.log(queryURL);
        {
            fetch(queryURL)
                .then((response) =>response.json())
                .then(status)
                .then(function(data) {
                        Alert.alert(
                            'Message',
                            "绑定成功，您的ssn号码为："+data,
                            [
                                {text: 'OK', onPress: () => { const { navigator } = this.props;
                                    if(navigator) {
                                        //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
                                        navigator.pop();
                                    }}}
                            ]
                        );
                        this.setState({ssn: data});
                        usersCursor.set('ssn', data);
                })

               .catch((cerror) => {
               console.warn(cerror);
                 Alert.alert(
                // console.log("bbbbbbbbbb"+cerror),
                    '绑定失败，失败原因可能是：',
                      cerror,
               [
                    {text: '返回检查', onPress: () => console.log('OK Pressed!')}
                ]
            );
        })
            .catch((error) => {
                console.log("ppp"+error);
            });

        }
        
    }

    // 渲染
    render() {
        return (

        <View style={styles.container}>

            <View>
                <TouchableOpacity onPress={this._back.bind(this)}>
                    <Text>BACK</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>AttachSSN</Text>
            <View style={styles.singleLine}>
                <TextInput autoCapitalize="none"
                           style={{flex:1, fontSize: 16,padding: 6,borderWidth: 0,textDecorationLine :'none'}}
                           placeholder="请输入真实姓名"
                           textAlign='center'
                           type="text" value={this.state.user}
                           onChange={this.getname.bind(this)}
                />

            </View>
            <View style={styles.singleLine}>
                <TextInput autoCapitalize="none"
                           style={{flex:1, fontSize: 16,padding: 6,borderWidth: 0,textDecorationLine :'none'}}
                           placeholder="由数字组成的社保号码"
                           textAlign='center'
                           type="text" value={this.state.pwd}
                           onChange={this.getssn.bind(this)}
                />

            </View>
            <View style={styles.singleLine}>
                <TextInput autoCapitalize="none"
                           style={{flex:1, fontSize: 16,padding: 6,borderWidth: 0,textDecorationLine :'none'}}
                           placeholder="请输入身份证号码"
                           textAlign='center'
                           type="text" value={this.state.pwd}
                           onChange={this.getidcard.bind(this)}
                />
            </View>
            <TouchableHighlight
                onPress={this._attachSSN.bind(this)}
                underlayColor="transparent"
                activeOpacity={0.8}>
                <View style={[styles.style_view_login, styles.functionalButton]}>
                    <Text style={[styles.textInside, styles.functionalText]}>绑定社保号码</Text>
                </View>
            </TouchableHighlight>

        </View>
        );
    };
};
var styles = StyleSheet.create({
    singleLine: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightblue',
        margin: 15,
    },
    style_view_login:{
        marginTop:10,
        marginLeft:100,
        marginRight:100,
        backgroundColor:'#63B8FF',
        height:35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInside: {
        fontFamily: 'Arial',
        fontSize: 25,
    },

    functionalText: {
        color: "white",
    },
    functionalButton: {
        backgroundColor: "##5599FF",
    },
    title: {
        left:100,
        marginTop: 30,
        fontFamily: 'Chalkduster',
        fontSize: 39,
        color: 'gray',
        marginBottom: 40,
    },
});