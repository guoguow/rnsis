'use strict';

import React, { View, Image, Text,Navigator } from 'react-native';
import { styles } from './navCss';

import Home from '../../View/home/home';
import NewHouse from '../../View/newhouse/newhouse';
import OldHouse from '../../View/oldhouse/oldhouse';
import Mine from '../../View/mine/mine';

export default class Nav extends React.Component {
      static defaultProps = {
        current: 0
    };
    /*构造*/
    constructor(props) {
        super(props);
        /*初始状态*/
        this.state = {
            data: [
                {
                    txt: '首页',
                    uri: require('./img/tab1_1.png'),
                    suri: require('./img/tab1_2.png')
                },
                {
                    txt: '服务',
                    uri: require('./img/tab2_1.png'),
                    suri: require('./img/tab2_2.png')
                },
                {
                    txt: '资讯',
                    uri: require('./img/tab3_2.png'),
                    suri: require('./img/tab3_1.png')
                },
                {
                    txt: '我的',
                    uri: require('./img/tab4_2.png'),
                    suri: require('./img/tab4_1.png')
                }
            ],
            currentComponent: props.current,
        };
    }
    /*点击切换页面*/
    selectComponent(index){
        console.log("ppppppppppppppp"+this.props);
        if(this.state.currentComponent !== index){
            this.setState({
                currentComponent: index
            });
        }
        console.log("qqqqqqqqqqqqqq"+this.props.Navigator);

    }

    /*渲染*/
    render(){

        return (
            <View style={styles.wrap}>
                <View style={styles.view}>
                    {
                        [
                            <Home />,
                            <NewHouse />,
                            <OldHouse/>,
                            <Mine/>
                        ].map((value,key)=>
                            <View style={[styles.viewli,(key==this.state.currentComponent)&&{left:-this.state.currentComponent*styles.viewli.width}]} key={key}>
                                {value}
                            </View>
                        )
                    }
                    
                </View>
                <View style={styles.navbar}>
                    {
                        this.state.data.map((value,key)=>
                            <View style={styles.navli} key={key} onTouchEnd={this.selectComponent.bind(this,key)}>
                                <Image style={styles.navliimage} source={key==this.state.currentComponent?value.suri:value.uri}/>
                                <Text style={[styles.navlitxt,(key==this.state.currentComponent)&&styles.navlitxtcurrent]}>{value.txt}</Text>
                            </View>
                        )
                    }
                </View>
            </View>

            
            
        );
    }
};
