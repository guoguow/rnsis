'use strict';

import React, { AppRegistry } from 'react-native';
import Startpage from './App/View/startpage/startpage';
import Enter from './App/Component/navg/page1.js';
import Index from './App/View/index/index';

class App extends React.Component {
    render(){
        return (
            <Index />
        );
    }
}

AppRegistry.registerComponent('rnsis', () => App);