/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from "react";
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    ListView,
} from "react-native";

var GIT_URL = 'https://api.github.com/search/repositories?q=';

export default class  Find  extends React.Component{
    /*--  lifecycle --*/
    constructor(props) {
        super(props);
        this.state = {
            // (row1, row2) => row1 !== row2：如果两次的数据不同的话，告诉数据源该数据发生了改变
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    }
    render() {
        var listViewContent;
        if (this.state.dataSource.getRowCount() === 0) {
            listViewContent =
                <Text>
                    there's nothing to search , please have another key to tap.
                </Text>;
        } else {
            listViewContent =
                <ListView
                    ref='listview'
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    automaticallyAdjustConntentInsets={false}
                    keyboardShouldPersistTaps={true}
                    showsVerticalScrollIndicator={true} />
        }
        return (
            <View style={styles.container}>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='search forr git project...'
                    onSubmitEditing ={this.onSearchChange.bind(this)}
                    style={styles.searchView}>
                </TextInput>
                {listViewContent}
            </View>
        );
    }

    /*-- private method --*/

    //点击搜索响应数据请求
    onSearchChange(event) {
        var serarchText = event.nativeEvent.text.toLowerCase();
        var queryURL = GIT_URL + encodeURIComponent(serarchText);
        console.log(queryURL);
        fetch(queryURL)
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.items) {
                    this.setState({
                        dataSource : this.state.dataSource.cloneWithRows(responseData.items)
                    });
                }
            })
            .done();
    }

    //渲染列表中的每一行数据
    renderRow(item) {
        return (
            <View>
                <View  style={styles.row}>
                    <Image
                        source={{uri:item.owner.avatar_url}}
                        style={styles.Img}>
                    </Image>
                    <View>
                        <Text style={styles.name}>
                            {item.full_name}
                        </Text>
                        <Text style={styles.name}>
                            Star:{item.stargazers_count}
                        </Text>
                    </View>
                </View>
                <View style={styles.cellBorder}></View>
            </View>
        );
    }

};

/*布局样式*/
var styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    searchView:{
        marginTop:30,
        padding:5,
        margin:5,
        fontSize:15,
        height:30,
        backgroundColor:'#EAEAEA'
    },
    row:{
        flexDirection:'row',
        padding:8,
    },
    name:{
        marginBottom:8,
        marginLeft:8,
    },
    Img:{
        width:50,
        height:50,
    },
    cellBorder:{
        height:1,
        marginLeft:2,
        backgroundColor:'#EAEAEA',
    }
});
