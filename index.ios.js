'use strict';

import React, { AppRegistry } from 'react-native';
import Startpage from './App/View/startpage/startpage';

class App extends React.Component {
    render(){
        return (
            <Startpage />
        );
    }
}

AppRegistry.registerComponent('mask', () => App);
