'use strict';

import React from "react";
import { ScrollView, View,Navigator, Image, Text,TouchableHighlight, Animated,Global,TouchableOpacity } from 'react-native';
import { styles } from './homeCss';
import RsaLogin from '../login/rsalogin.js';
import Func from '../func/func';
import News from '../news/news';
import Mine from '../../View/mine/mine';



require('../../Component/baobab/bb.js');
var usersCursor = tree.select('users');

export default class Home extends React.Component {

    /*构造*/
    constructor(props) {
        super(props);
        /*初始状态*/
    }
    /*renderlogin*/
    _gologin() {
        console.log("ahhahahahaha"+this.props);

        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'Login',
                component: RsaLogin
            })
        }
    }

    onScroll(e){
        if(e.nativeEvent.contentOffset.y<0) {
            this.setTransY.setNativeProps({
                style: {
                    transform:[{translateY:e.nativeEvent.contentOffset.y}],
                    marginBottom: e.nativeEvent.contentOffset.y,
                    height: styles.swithbox.height+Math.abs(e.nativeEvent.contentOffset.y)
                }
            })
        }
        if(e.nativeEvent.contentOffset.y){
            const count = Math.abs(e.nativeEvent.contentOffset.y<=10?0:e.nativeEvent.contentOffset.y)/100;
            this.bgopacity.setNativeProps({
                style: {
                    backgroundColor: 'rgba(255,102,0,'+count+')'
                }
            });
            this.imgopacity.setNativeProps({
               style: {
                   opacity: (1-count)
               }
            });
        }
    }
    renderuser() {
        var a="123";
        var b = a;
        console.log("test  for username ");
      
        return (
            <View style={styles.wrap}>
                <ScrollView style={styles.main} scrollEventThrottle={1} keyboardDismissMode={'interactive'} automaticallyAdjustContentInsets={false} onScroll={this.onScroll.bind(this)}>
                    <View ref={(e)=>this.setTransY = e} style={styles.swithbox}>
                            <View>
                                <Text>当前用户</Text>
                                <Text>username++++++++{usersCursor.get("username")}</Text>
                                <Text>ssn+++++{usersCursor.get("ssn")}</Text>
                            </View>
                    </View>

                    <View style={[styles.quotations,styles.borderTopBottom]}>
                        <View style={styles.quotationti}>
                            <Text style={styles.quotationtxt}>{'业务专区'}</Text>
                        </View>
                        <View style={styles.quotationcontent}>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'个人信息'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'历史账单'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'缴费记录'}</Text>
                            </View>
                        </View>
                        <View style={styles.quotationcontents}>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'账号绑定'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'我要缴费'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'拨付详单'}</Text>
                            </View>
                        </View>

                    </View>

                    <View style={[styles.quotation,styles.borderTopBottom]}>
                        <View style={styles.quotationti}>
                            <Text style={styles.quotationtxt}>{'资讯专区'}</Text>
                        </View>
                        <View style={styles.quotationcontent}>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'养老'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'医疗'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'生育'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'工伤'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'失业'}</Text>
                            </View>
                        </View>
                    </View>
                    <View ref={(e)=>this.setTransY = e} style={styles.swithbox}>
                        <Image style={[styles.swithboximg,styles.resizeMode]} source={{uri:'http://f.hiphotos.baidu.com/lvpics/w=1000/sign=4d69c022ea24b899de3c7d385e361c95/f31fbe096b63f6240e31d3218444ebf81a4ca3a0.jpg'}} />
                        <View style={styles.swithboxlibox}>
                            <View style={[styles.swithboxli,styles.swithboxliCurrent]}></View>
                            <View style={styles.swithboxli}></View>
                            <View style={styles.swithboxli}></View>
                        </View>
                    </View>
                    <View style={[styles.quotation,styles.borderTopBottom]}>
                        <View style={styles.quotationti}>
                            <Text style={styles.quotationtxt}>{'便民服务'}</Text>
                        </View>
                        <View style={styles.quotationcontent}>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'找回密码'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'友情链接'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'在线咨询'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'关于我们'}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.head} ref={(e)=>this.bgopacity = e}>
                    <Image ref={(e)=>this.imgopacity = e} style={[styles.headimg,styles.resizeMode]} source={require('../img/top.png')} />
                    <View style={styles.headContent}>
                        <View style={styles.seachbox}>
                            <View style={styles.text}>
                                <Image style={[styles.testimg,styles.resizeMode]} source={require('../img/search2.png')} />
                                <Text style={styles.textinput}>{'搜索功能'}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    rendervisit() {
        console.log("test  for username ");
        return (
            <View style={styles.wrap}>
                <ScrollView style={styles.main} scrollEventThrottle={1} keyboardDismissMode={'interactive'} automaticallyAdjustContentInsets={false} onScroll={this.onScroll.bind(this)}>
                    <View ref={(e)=>this.setTransY = e} style={styles.swithbox}>
                        <TouchableOpacity
                            onPress={this._gologin.bind(this)}
                        >
                            <View style={[styles.style_view_login, styles.functionalButton]}>
                                 <Text style={[styles.textInside, styles.functionalText]}>注册/登录</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.quotations,styles.borderTopBottom]}>
                        <View style={styles.quotationti}>
                            <Text style={styles.quotationtxt}>{'业务专区'}</Text>
                        </View>
                        <View style={styles.quotationcontent}>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <TouchableOpacity
                                    onPress={this._gologin.bind(this)}
                                >
                                <Text style={styles.quotationth}>{'个人信息'}</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <TouchableOpacity
                                    onPress={this._gologin.bind(this)}
                                >
                                <Text style={styles.quotationth}>{'历史账单'}</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <TouchableOpacity
                                    onPress={this._gologin.bind(this)}
                                >
                                <Text style={styles.quotationth} onPress={this._gologin.bind(this)}>{'缴费记录'}</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.quotationcontents}>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <TouchableOpacity
                                    onPress={this._gologin.bind(this)}
                                >
                                <Text style={styles.quotationth}>{'账号绑定'}</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <TouchableOpacity
                                    onPress={this._gologin.bind(this)}
                                >
                                <Text style={styles.quotationth}>{'我要缴费'}</Text>
                                    </TouchableOpacity>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <TouchableOpacity
                                    onPress={this._gologin.bind(this)}
                                >
                                <Text style={styles.quotationth}>{'拨付详单'}</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                    <View style={[styles.quotation,styles.borderTopBottom]}>
                        <View style={styles.quotationti}>
                            <Text style={styles.quotationtxt}>{'资讯专区'}</Text>
                        </View>
                        <View style={styles.quotationcontent}>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'养老'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'医疗'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'生育'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'工伤'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'失业'}</Text>
                            </View>
                        </View>
                    </View>

                    <View ref={(e)=>this.setTransY = e} style={styles.swithbox}>
                        <Image style={[styles.swithboximg,styles.resizeMode]} source={{uri:'http://f.hiphotos.baidu.com/lvpics/w=1000/sign=4d69c022ea24b899de3c7d385e361c95/f31fbe096b63f6240e31d3218444ebf81a4ca3a0.jpg'}} />
                        <View style={styles.swithboxlibox}>
                            <View style={[styles.swithboxli,styles.swithboxliCurrent]}></View>
                            <View style={styles.swithboxli}></View>
                            <View style={styles.swithboxli}></View>
                        </View>
                    </View>

                    <View style={[styles.quotation,styles.borderTopBottom]}>
                        <View style={styles.quotationti}>
                            <Text style={styles.quotationtxt}>{'便民服务'}</Text>
                        </View>
                        <View style={styles.quotationcontent}>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'找回密码'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'友情链接'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'在线咨询'}</Text>
                            </View>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'关于我们'}</Text>
                            </View>
                        </View>
                    </View>
                    
                </ScrollView>

                <View style={styles.head} ref={(e)=>this.bgopacity = e}>
                    <Image ref={(e)=>this.imgopacity = e} style={[styles.headimg,styles.resizeMode]} source={require('../img/top.png')} />
                    <View style={styles.headContent}>
                        <View style={styles.seachbox}>
                            <View style={styles.text}>
                                <Image style={[styles.testimg,styles.resizeMode]} source={require('../img/search2.png')} />
                                <Text style={styles.textinput}>{'搜索功能'}</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
    /*渲染*/
    render() {
        if(usersCursor.get("username")==null){
            return (
                <View style={styles.wrp}>
                    {this.rendervisit()}
                </View>
                
            );
        }
        else{
            return (
                <View style={styles.wrap}>
                    {this.renderuser()}
                </View>
            );
        }
    };


};
