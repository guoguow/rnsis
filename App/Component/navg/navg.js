/**
 * Created by guoguow on 2016/4/6.
 */
// Considering the following tree

import React,{
    View,
    Navigator
} from 'react-native';
import Home from '../../View/home/home';


export default class Enter extends React.Component {
    render() {
        let defaultName = 'Home';
        let defaultComponent = Home;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
                renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
        );
    }
} 