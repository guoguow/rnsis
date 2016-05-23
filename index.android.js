'use strict';

import React from  "react";
import { AppRegistry } from 'react-native';
import Startpage from './App/View/startpage/startpage';
import Index from './App/View/index/index';
import Date from './App/Service/commonComp/datepicker';

//import Find from './App/Search/SearchPage';
//import Find from './App/Search/SP';
import Find from './App/Search/spp';


class App extends React.Component {
    render(){
        return (
            <Index />
        );
    }
}

AppRegistry.registerComponent('rnsis', () => App);