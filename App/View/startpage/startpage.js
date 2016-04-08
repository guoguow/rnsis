'use strict';

import React, { View, Text, Image, Platform, StatusBarIOS } from 'react-native';
import Animatable from 'react-native-animatable';
import { styles } from './startpageCss';
import Index from '../index/index';


export default class Startpage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timer: 3,
            homepage: null,
            startpageout: 'fadeIn',
            imagein: null,
            adimagesrc: require('./img/guide4.png'),
            isshow: true,
            skip: {
                a: null,
                e: null,
                i: 'infinite',
                d: null
            },
            link: {
                a: null,
                l: null,
                d: null
            }
        };
    }
    /*挂载*/
    componentDidMount(){
        /*设置状态颜色*/
        if(Platform.OS==='ios'){
            StatusBarIOS.setStyle('light-content');
        }
    }
    /*移除*/
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
        this.timerhome && clearTimeout(this.timerhome);
    }
    /*图片加载完成*/
    imageload(){
        this.setState({
            imagein: 'fadeIn',
            isshow: false,
            skip: {
                a: 'pulse',
                e: 'ease-out',
                i: 3,
                d: 1000
            },
            link: {
                a: 'slideInUp',
                l: 1000,
                d: 500
            }
        });
        let i = this.state.timer;
        var timeAuto = ()=>{
            i--;
            this.timer = setTimeout(
                ()=>{
                    this.setState({
                        timer: i
                    });
                    timeAuto();
                },1000
            );
            if(i<0){
                this.setState({
                    homepage: this.renderHome(),
                    startpageout: 'fadeOut'
                });
                this.timer && clearTimeout(this.timer);
            }
        };
        timeAuto();
    }
    /*跳过*/
    skip(){
        this.setState({
            homepage: this.renderHome(),
            startpageout: 'fadeOut'
        });
        this.timer && clearTimeout(this.timer);
    }
    /*查看详情*/
    gotolink(){

    }

    /*首页*/
    renderHome(){
        this.timerhome = setTimeout(
            ()=>{
                this.renderStartPage = ()=>null;
                this.setState({});
            },1000
        );
        return (
                <Index/>
        );
    }
    /*开始广告页*/
    renderStartPage(){
        return (
            <Animatable.View style={styles.main} animation={this.state.startpageout}>
                <Animatable.Image animation={this.state.imagein} onLoadEnd={this.imageload.bind(this)} style={[styles.image,{resizeMode:Image.resizeMode.cover}]} source={this.state.adimagesrc}/>
                <Animatable.View animation={this.state.skip.a} easing={this.state.skip.e} iterationCount={this.state.skip.i} duration={this.state.skip.d} style={[styles.btn,this.state.isshow&&{opacity:0}]} onTouchStart={this.skip.bind(this)}>
                    <Text animation={this.state.skip.a} easing={this.state.skip.e} iterationCount={this.state.skip.i} duration={this.state.skip.d} style={styles.btntxt}>跳过 {this.state.timer}</Text>
                </Animatable.View>
                <Animatable.View animation={this.state.link.a} delay={this.state.link.l} duration={this.state.link.d} style={[styles.link,this.state.isshow&&{opacity:0}]} onTouchEnd={this.gotolink.bind(this)}>
                    <Text style={styles.linktxt}>查看详情</Text>
                </Animatable.View>
            </Animatable.View>
        );
    }
    /*渲染*/
    render(){
        return (
            <View style={styles.wrap}>
                {this.state.homepage}
                {this.renderStartPage()}
            </View>
        );
    }
};