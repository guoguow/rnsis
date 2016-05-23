/**
 * Created by guoguow on 2016/4/11.
 */
'use strict';

import React,{Component} from  "react";
import {
    TextInput,
    Text,
    View,
    Alert,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";
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

    attachSSN(event:Object) {
        var username = usersCursor.get("username");
        var name = this.state.name;
        var ssn = this.state.ssn;
        var idcard = this.state.idcard;
        var baseurl="http://10.1.91.242:3000/checkprofile?username=";
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
        fetch(queryURL)
            .then((response) =>response.json())
            .then(status)
            .then((data) => {
                console.log(data);
                Alert.alert(
                    '绑定成功，已绑定：',
                    // responseData.content.userInfo.customersName,
                    data,
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
                    ssn: data
                });

                usersCursor.set('ssn', data);
                console.log("aa"+usersCursor.get("ssn"));
                
                var pssn = usersCursor.get("ssn");
                var purl="http://10.1.91.242:3000/profile?ssn="
                var perInfoURL=purl+encodeURIComponent(pssn)+"&username="+encodeURIComponent(username);
                fetch(perInfoURL)
                    .then((response) =>response.json())
                    .then(function(data) {
                        //http://10.1.91.242:3000/profile?ssn=20613111810005534383&username=ll
                        //FOR persInfo
                        usersCursor.set('name', data.name);
                        usersCursor.set('idcard', data.idcard);
                        usersCursor.set('birthday', data.birthday);
                        usersCursor.set('sex', data.sex);
                        usersCursor.set('marrige', data.marrige);
                        usersCursor.set('nationality', data.nationality);
                        usersCursor.set('ps', data.ps);
                        usersCursor.set('mobliephone', data.mobilephone);
                        usersCursor.set('address', data.address);
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
            })



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
                onPress={this.attachSSN.bind(this)}
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
