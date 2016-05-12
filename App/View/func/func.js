'use strict';

import React, {ScrollView, View,Component, Image, Text,TouchableOpacity } from 'react-native';
import Home from '../home/home.js';
import News from '../news/news';
import Mine from '../../View/mine/mine';
import { styles } from './funcCss';
import RsaLogin from '../login/rsalogin.js';
import Attach from '../../Service/Person/attachSSN';
import PersInfo from '../../Service/Person/persInfo';
import Pers from '../../View/mine/ToPers';
import MSIS from '../../View/mine/ToMsis';

require('../../Component/baobab/bb.js');
var usersCursor = tree.select('users');
export default class Func1 extends React.Component {
    /*构造*/
    constructor(props) {
        super(props);
    }
    _gologin() {
        console.log("ahhahahahaha"+this.props);

        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Login',
                component: RsaLogin
            })
        }
    }
    _persInfo() {
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
    render() {
        return (
            <View style={styles.func1wrap}>
                <ScrollView showsVerticalScrollIndicator={true}>
                <View style={[styles.quotations,styles.borderTopBottom]}>
                <View style={styles.quotationti}>
                    <Text style={styles.quotationtxt}>{'基础查询'}</Text>
                </View>
                <View style={styles.quotationcontent}>

                    <Pers   navigator  = {this.props.navigator}  />
                    <MSIS   navigator  = {this.props.navigator}  />


                    <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                        <TouchableOpacity
                            onPress={this._gologin.bind(this)}
                        >
                            <Text style={styles.quotationth} onPress={this._gologin.bind(this)}>{''}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
                <View style={[styles.quotations,styles.borderTopBottom]}>
                    <View style={styles.quotationti}>
                        <Text style={styles.quotationtxt}>{'养老业务查询'}</Text>
                    </View>
                    <View style={styles.quotationcontent}>
                        <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                            <TouchableOpacity
                                onPress={this._gologin.bind(this)}
                            >
                                <Text style={styles.quotationth}>{'缴费查询'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                            <TouchableOpacity
                                onPress={this._gologin.bind(this)}
                            >
                                <Text style={styles.quotationth}>{'拨付查询'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                            <TouchableOpacity
                                onPress={this._gologin.bind(this)}
                            >
                                <Text style={styles.quotationth} onPress={this._gologin.bind(this)}>{'详单分析'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={[styles.quotations,styles.borderTopBottom]}>
                    <View style={styles.quotationti}>
                        <Text style={styles.quotationtxt}>{'医疗业务查询'}</Text>
                    </View>
                    <View style={styles.quotationcontent}>
                        <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                            <TouchableOpacity
                                onPress={this._gologin.bind(this)}
                            >
                                <Text style={styles.quotationth}>{'缴费查询'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                            <TouchableOpacity
                                onPress={this._gologin.bind(this)}
                            >
                                <Text style={styles.quotationth}>{'拨付查询'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                            <TouchableOpacity
                                onPress={this._gologin.bind(this)}
                            >
                                <Text style={styles.quotationth} onPress={this._gologin.bind(this)}>{'详单分析'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={[styles.quotations,styles.borderTopBottom]}>
                    <View style={styles.quotationti}>
                        <Text style={styles.quotationtxt}>{'失业业务查询'}</Text>
                    </View>
                    <View style={styles.quotationcontent}>
                        <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                            <TouchableOpacity
                                onPress={this._gologin.bind(this)}
                            >
                                <Text style={styles.quotationth}>{'缴费查询'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                            <TouchableOpacity
                                onPress={this._gologin.bind(this)}
                            >
                                <Text style={styles.quotationth}>{'拨付查询'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                            <TouchableOpacity
                                onPress={this._gologin.bind(this)}
                            >
                                <Text style={styles.quotationth} onPress={this._gologin.bind(this)}>{'详单分析'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={[styles.quotations,styles.borderTopBottom]}>
                    <View style={styles.quotationti}>
                        <Text style={styles.quotationtxt}>{'工伤业务查询'}</Text>
                    </View>
                    <View style={styles.quotationcontent}>
                        <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                            <TouchableOpacity
                                onPress={this._gologin.bind(this)}
                            >
                                <Text style={styles.quotationth}>{'缴费查询'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                            <TouchableOpacity
                                onPress={this._gologin.bind(this)}
                            >
                                <Text style={styles.quotationth}>{'拨付查询'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                            <TouchableOpacity
                                onPress={this._gologin.bind(this)}
                            >
                                <Text style={styles.quotationth} onPress={this._gologin.bind(this)}>{'详单分析'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={[styles.quotations,styles.borderTopBottom]}>
                    <View style={styles.quotationti}>
                        <Text style={styles.quotationtxt}>{'生育业务查询'}</Text>
                    </View>
                    <View style={styles.quotationcontent}>
                        <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                            <TouchableOpacity
                                onPress={this._gologin.bind(this)}
                            >
                                <Text style={styles.quotationth}>{'缴费查询'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                            <TouchableOpacity
                                onPress={this._gologin.bind(this)}
                            >
                                <Text style={styles.quotationth}>{'拨付查询'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                            <TouchableOpacity
                                onPress={this._gologin.bind(this)}
                            >
                                <Text style={styles.quotationth} onPress={this._gologin.bind(this)}>{'详单分析'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
</ScrollView>
            </View>

        );
    }
}
export default class Func2 extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    22222222222222222222222222222222
                </Text>
            </View>
        );
    }
}
export default class Func3 extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    3333333333333333333333
                </Text>
            </View>
        );
    }
}
export default class Func extends React.Component{

    /*构造*/
    constructor(props) {
        super(props);
        /*初始状态*/
        this.state = {
            data: [
                {
                    txt: '查询'
                },
                {
                    txt: '缴费'
                },
                {
                    txt: '客服'
                }
            ],
            cstate: 0,
        };
    }
    _gologin() {
        console.log("ahhahahahaha"+this.props);

        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Login',
                component: RsaLogin
            })
        }
    }
    /*点击切换页面*/
    _selectComponent(index){
        if(this.state.cstate !== index){
            this.setState({
                cstate: index
            });
     /*      var FuncI=null;
            switch (index){
                case 0:{ FuncI=Func1}
                    break;
                case 1:{ FuncI=Func2}
                    break;
                case 2:{ FuncI=Func3}
                    break;
            }
            const { navigator } = this.props;
            if(navigator) {
                navigator.push({
                    name: 'funcI',
                    component: FuncI
                })
            }*/
        }
    }
    /*对外提供切换页面方法*/
    _selectfn(index){
        this.setState({
            cstate: index
        });
    }
    // 渲染
    render(){
        if(usersCursor.get("username")==null){
            return (
                <View style={styles.wrap}>
                    <View style={{flex: 1}}>
                        <View style={[styles.funchead]}>
                            <Text style={[styles.textInside, styles.functionalText]}>服务</Text>
                        </View>

                        <View>
                            <View style={styles.tabbar}>
                                {
                                    this.state.data.map((value,key)=>
                                        <View style={styles.tabli} key={key} onTouchEnd={this._gologin.bind(this,key)}>
                                            <Text style={[styles.tablitxt,(key==this.state.cstate)&&styles.tablitxtcurrent]}>{value.txt}</Text>
                                        </View>
                                    )
                                }
                            </View>
                            <View style={styles.view}>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }
        else{
            return (
                <View style={styles.wrap}>
                    <View style={{flex: 1}}>
                        <View style={[styles.funchead]}>
                            <Text style={[styles.textInside, styles.functionalText]}>服务</Text>
                        </View>

                        <View>
                            <View style={styles.tabbar}>
                                {
                                    this.state.data.map((value,key)=>
                                        <View style={styles.tabli} key={key} onTouchEnd={this._selectComponent.bind(this,key)}>
                                            <Text style={[styles.tablitxt,(key==this.state.cstate)&&styles.tablitxtcurrent]}>{value.txt}</Text>
                                        </View>
                                    )
                                }
                            </View>
                            <View style={styles.view}>
                                {
                                    [
                                        <Func1 _selectComponent={this._selectfn.bind(this)}   navigator  = {this.props.navigator}  />,
                                        <Func2  _selectComponent={this._selectfn.bind(this)}  navigator  = {this.props.navigator}  />,
                                        <Func3  _selectComponent={this._selectfn.bind(this)}  navigator  = {this.props.navigator}  />

                                    ].map((value,key)=>
                                        <View style={[styles.viewli,(key==this.state.cstate)&&{left:-this.state.cstate*styles.viewli.width}]} key={key}>
                                            {value}
                                        </View>
                                    )
                                }
                            </View>
                        </View>
                    </View>
                </View>
            );
        }

    }
};