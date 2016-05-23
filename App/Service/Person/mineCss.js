/**
 * Created by guoguow on 2016/4/8.
 */
'use strict';

import React, { Platform } from 'react-native';
import PixelRatio from 'PixelRatio';
import Dimensions from 'Dimensions';

let { width, height } = Dimensions.get('window');
let PR = PixelRatio.get();

export const styles = {
    wrap: {
        flex: 1,
    },
    view: {
        flex: 1,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    top: {
        flex: 1,
        flexDirection: 'column',
        borderTopColor: '#ccc',
        borderBottomColor: '#ccc',
        borderTopWidth: 2/PR,
        borderBottomWidth: 2/PR,
        backgroundColor: '#fff'
    },
    style_view_login:{
        marginTop:50,
        marginLeft:100,
        marginRight:100,
        backgroundColor:'#ccc',
        height:35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInside: {
        fontFamily: 'Arial',
        fontSize: 25,
    },

    functionalText: {
        color: "white",
    },
    functionalButton: {
        backgroundColor: "#5599FF",
    },
    swithbox: {
        height: (Platform.OS=='ios'?180:150),
        backgroundColor: '#ccc',
        position: 'relative'
    },
    bolock: {   
        height: 40,
        justifyContent: 'center',
        paddingLeft: 12,
        borderBottomColor: '#ccc',
        borderBottomWidth: 2/PR,
        backgroundColor: "white",
    }, 
    funchead:{
        marginTop:0,
        marginLeft:0,
        marginRight:0,
        backgroundColor:'#63B8FF',
        height:45,
        justifyContent: 'center',
        alignItems: 'center',
    },
};
