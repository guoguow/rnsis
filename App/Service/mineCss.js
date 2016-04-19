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
        flexDirection: 'column'
    },
    view: {
        flex: 1,
        overflow: 'hidden',
        flexDirection: 'row'
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
        marginTop:80,
        marginLeft:100,
        marginRight:100,
        backgroundColor:'#63B8FF',
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
        backgroundColor: "##5599FF",
    },
    swithbox: {
        height: (Platform.OS=='ios'?180:160),
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
    navbar: {
        height: 42,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderTopColor: '#b2b2b2',
        borderTopWidth: 1/PR,
        bottom:0    },
    navli: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    navlitxt: {
        color: '#666',
        fontSize: 12,
        marginTop: 3
    },
    navlitxtcurrent: {
        color: '#ff6600'
    },
    navliimage: {
        width: 20,
        height: 20
    }
};
