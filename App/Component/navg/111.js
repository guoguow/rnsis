/**
 * Created by guoguow on 2016/4/7.
 */
import React,{
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import SecondPageComponent from  '../../Component/navg/222.js';

export default class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton() {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
            })
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳转</Text>
                </TouchableOpacity>
            </View>
        );
    }
}