'use strict';

import React, { ScrollView, View, Image, Text,TouchableHighlight, Animated,Global,TouchableOpacity } from 'react-native';
import { styles } from './homeCss';
import Login from '../login/signin.js';
import NewHouse from '../../View/newhouse/newhouse';
import OldHouse from '../../View/oldhouse/oldhouse';
import Mine from '../../View/mine/mine';

require('../../Component/baobab/bb.js');
var usersCursor = tree.select('users');

export default class Home extends React.Component {

    /*构造*/
    constructor(props) {
        super(props);
        /*初始状态*/
        this.state = {
            defaultCity: '上海',
            data: [
                {
                    txt: '首页',
                    uri: require('../img/tab1_1.png'),
                    suri: require('../img/tab1_2.png')
                },
                {
                    txt: '服务',
                    uri: require('../img/tab2_1.png'),
                    suri: require('../img/tab2_2.png')
                },
                {
                    txt: '资讯',
                    uri: require('../img/tab3_2.png'),
                    suri: require('../img/tab3_1.png')
                },
                {
                    txt: '我的',
                    uri: require('../img/tab4_2.png'),
                    suri: require('../img/tab4_1.png')
                }
            ],
            currentComponent: 0,
        };
        this.setTransY = {};
        this.bgopacity = {};
        this.imgopacity = {};
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
                component: Login
            })
        }
    }
    select(key) {
        switch (key) {

            case 0:
            {
                const { navigator } = this.props;
                if(navigator) {
                    navigator.push({
                        name: 'Home',
                        component: Home
                    })
                }
            } break;
            case 1:
            {
                const { navigator } = this.props;
                //为什么这里可以取得 props.navigator?请看上文:
                //<Component {...route.params} navigator={navigator} />
                //这里传递了navigator作为props
                if(navigator) {
                    navigator.push({
                        name: 'NewHouse',
                        component: NewHouse
                    })
                }
            }break;
            case 2:
            {
                const { navigator } = this.props;
                if(navigator) {
                    navigator.push({
                        name: 'OldHouse',
                        component: OldHouse
                    })
                }
            }break;
            case 3:
            {
                const { navigator } = this.props;
                if(navigator) {
                    navigator.push({
                        name: 'Mine',
                        component: Mine
                    })
                }
            }break;

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

                <View style={styles.navbar}>
                    {
                        this.state.data.map((value,key)=>
                            <View style={styles.navli} key={key} onTouchEnd={this.select.bind(this,key)}>
                                <Image style={styles.navliimage} source={key==this.state.currentComponent?value.suri:value.uri}/>
                                <Text style={[styles.navlitxt,(key==this.state.currentComponent)&&styles.navlitxtcurrent]}>{value.txt}</Text>
                            </View>
                        )
                    }
                </View>

            </View>
        );
    }

    /*渲染*/
    render() {


        if(usersCursor.get("username")==null){
            return (
                <View style={styles.wrap}>
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
