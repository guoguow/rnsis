'use strict';

import React, { AppRegistry } from 'react-native';
import Startpage from './App/View/startpage/startpage';
import Enter from './App/Component/navg/navg.js';
//import Index from './App/View/index/index';
import Index from './App/rsalogin';

class App extends React.Component {
    render(){
        return (
            <Index />
        );
    }
}

AppRegistry.registerComponent('rnsis', () => App);