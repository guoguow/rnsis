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
    viewli: {
        width: width
    },
    navbar: {
        height: 42,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderTopColor: '#b2b2b2',
        borderTopWidth: 1/PR
    },
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
