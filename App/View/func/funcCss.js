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

    funchead:{
        marginTop:0,
        marginLeft:0,
        marginRight:0,
        backgroundColor:'#63B8FF',
        height:45,
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

    wrap: {
        flex: 1,
        backgroundColor:'white',

    },
    func1wrap: {
        flex: 1,
        backgroundColor:'white',
        height:500,
    },
    view: {
        flex: 1,
        overflow: 'hidden',
        flexDirection: 'row'
    },
    viewli: {
        width: width
    },
    tabbar: {
        height: 25,
        backgroundColor:'#63B8FF',
        flexDirection: 'row',
        borderTopColor: '#b2b2b2',
        borderTopWidth: 1/PR
    },
    tabli: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderLeftColor: '#b2b2b2',
        borderLeftWidth: 1/PR
    },
    tablitxt: {
        color: '#ccc',
        fontSize: 16,
        marginTop: 3,
    },
    tablitxtcurrent: {
        color: 'white',
        fontSize: 18,

    },
    quotation: {
        height: 40,
        flex: 1,
        flexDirection: 'column'
    },
    quotations: {
        height: 80,
        flex: 1,
        flexDirection: 'column'
    },

    quotationti: {
        height: 30,
        justifyContent: 'center',
        paddingLeft: 12,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1/PR
    },
    quotationtxt: {
        fontSize: 12
    },
    quotationcontent: {
        flex: 1,
        flexDirection: 'row'
    },
    quotationcontents: {
        flex: 1,
        flexDirection: 'row',
        borderTopColor: '#ccc',
        borderTopWidth: 1/PR
    },
    quotationdata: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    quotationdataBorder: {
        borderRightColor: '#ccc',
        borderRightWidth: 1/PR
    },
    quotationth: {
        fontSize: 10,
        color: '#999'
    },
    quotationtt: {
        fontSize: 14,
        color: '#f60',
        marginTop: 3
    },
    borderTopBottom: {
        borderTopColor: '#ccc',
        borderBottomColor: '#ccc',
        borderTopWidth: 1/PR,
        borderBottomWidth: 1/PR,
        marginTop: 8,
        backgroundColor: '#fff'
    },

};
