/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    TouchableHighlight,
    TouchableOpacity,
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';
import RsaLogin from '../../../View/login/rsalogin.js';

export default class Page1 extends Component {
    /*构造*/
    constructor(props) {
        super(props);
        /*初始状态*/
    }
    _TEST() {
        console.log("ahhahahahaha"+this.props.navigator);

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
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                    <TouchableOpacity
                        onPress={this._TEST.bind(this)}
                    >
                        <View>
                            <Text>PRESS ME 4 TEST</Text>
                        </View>
                    </TouchableOpacity>


                <Text style={styles.instructions}>
                    To get started, edit page1.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#88FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#111111',
        marginBottom: 5,
    },
});