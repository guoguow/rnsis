'use strict';

import { Platform, Image } from 'react-native';
import Dimensions from 'Dimensions';
import PixelRatio from 'PixelRatio';

let { width, height } = Dimensions.get('window');
let PR = PixelRatio.get();

export const styles = {
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
    
    wrap: {
        flex: 1
    },
    resizeMode: {
        resizeMode: Image.resizeMode.cover
    },
    borderTopBottom: {
        borderTopColor: '#ccc',
        borderBottomColor: '#ccc',
        borderTopWidth: 1/PR,
        borderBottomWidth: 1/PR,
        marginTop: 8,
        backgroundColor: '#fff'
    },
    headimg: {
        width: width,
        height: (Platform.OS=='ios'?64:44),
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0
    },
    head: {
        width: width,
        paddingTop: (Platform.OS=='ios'?20:0),
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        backgroundColor: 'rgba(255,102,0,0)'
    },
    headContent: {
        flex: 1,
        height: 44,
        alignItems: 'center'
    },
    seachbox: {
        width: 295,
        height: 30,
        backgroundColor: '#fff',
        marginTop: 5,
        flexDirection: 'row'
    },
    seachadr: {
        width: 65,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightColor: '#cccccc',
        borderRightWidth: 1/PR,
        flexDirection: 'row'
    },
    seachadrimg: {
        marginLeft: 5,
        width: 10
    },
    seachadrtxt: {
        fontSize: 14,
        color: '#666'
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    testimg: {
        width: 12.5,
        marginLeft: 6,
        marginRight: 6
    },
    textinput: {
        flex: 1,
        fontSize: 14,
        color: '#cccccc'
    },
    main: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    swithbox: {
        height: (Platform.OS=='ios'?180:160),
        backgroundColor: '#ccc',
        position: 'relative'
    },
    swithboxsmall: {
        height: 89
    },
    swithboximg: {
        flex: 1
    },
    swithboxlibox: {
        width: width,
        height: 10,
        position: 'absolute',
        bottom: 7,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    swithboxli: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#fff',
        marginRight: 2,
        marginLeft: 2
    },
    swithboxliCurrent: {
        backgroundColor: '#b5b3b4'
    },
    subnav: {
        height: 157,
        paddingBottom: 12,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    subnavtr: {
        flex: 1,
        flexDirection: 'row'
    },
    subnavtd: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    subnavimg: {
        width: 45,
        height: 45,
        marginBottom: 5
    },
    subnavtxt: {
        fontSize: 12
    },
    news: {
        height: 27,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 0
    },
    newsimg: {
        width: 14.5,
        marginLeft: 12,
        marginRight: 12
    },
    newstxt: {
        flex: 1,
        fontSize: 12
    },
    threenav: {
        height: 68,
        flexDirection: 'row'
    },
    threenavli: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    threenavimg: {
        width: 30,
        height: 30
    },
    threenavti: {
        fontSize: 12,
        color: '#000',
        marginBottom: 2,
        marginTop: 2
    },
    threenavtisub:{
        borderLeftColor: '#ccc',
        borderRightColor: '#ccc',
        borderLeftWidth: 1/PR,
        borderRightWidth: 1/PR
    },
    threenavdes: {
        fontSize: 10,
        color: '#989898'
    },
    quotation: {
        height: 82,
        flex: 1,
        flexDirection: 'column'
    },
    quotations: {
        height: 150,
        flex: 1,
        flexDirection: 'column'
    },
    
    quotationti: {
        height: 33,
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
    tjmf: {
        height: 63,
        marginBottom: 8,
        flexDirection: 'row',
        paddingTop: 6,
        paddingRight: 6,
        paddingBottom: 6
    },
    tjmfli: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 6,
        backgroundColor: '#f5f5f5'
    },
    tjmfimg: {
        width: 36,
        height: 36,
        marginLeft: 15,
        marginRight: 10
    },
    tjmftxt: {
        flex: 1,
        flexDirection: 'column'
    },
    tjmfti: {
        fontSize: 12,
        color: '#000'
    },
    tjmfth: {
        fontSize: 10,
        color: '#999'
    },
    tjmfthred: {
        color: '#ff6600'
    }
};