/**
 * Created by guoguow on 2016/3/31.
 */
import Storage from 'react-native-storage';

var storage = new Storage({
    //最大容量，默认值1000条数据循环存储
    size: 10,


    //数据过期时间，默认一整天（1000 * 3600 * 24秒）
    defaultExpires: 1000 * 3600 * 24,

    //读写时在内存中缓存数据。默认启用。
    enableCache: true,

    //如果storage中没有相应数据，或数据已过期，
    //则会调用相应的sync同步方法，无缝返回最新数据。
    sync : {
        //同步方法的具体说明会在后文提到
    },
    
})

storage.save({
    key: 'loginState',  //注意:请不要在key中使用_下划线符号!
    rawData: {
        username: null,
        ssn: null
    },
    //如果不指定过期时间，则会使用defaultExpires参数
    //如果设为null，则永不过期
    expires: 1000 * 3600
});



storage.sync = {
    //同步方法的名字必须和所存数据的key完全相同
    //方法接受的参数为一整个object，所有参数从object中解构取出
    //这里可以使用promise。或是使用普通回调函数，但需要调用resolve或reject。
    user(queryURL){
        fetch(queryURL)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                Alert.alert(
                    '欢迎',
                    // responseData.content.userInfo.customersName,
                    responseData.username,
                    // responseData.key,
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed!')},
                    ]
                );
                this.setState({
                    username: responseData.username,
                    ssn: responseData.ssn
                });
                if (responseData.username) {
                    storage.save({
                        key: 'user',  //注意:请不要在key中使用_下划线符号!
                        username: responseData.username,
                        ssn: responseData.ssn,

                        //如果不指定过期时间，则会使用defaultExpires参数
                        //如果设为null，则永不过期
                        expires: 1000 * 3600
                    });
                    // 成功则调用resolve
                    resolve && resolve(responseData.username);
                }
            })
            .catch((error) => {
                console.warn(error);
                Alert.alert(
                    'catch Title',
                    error,
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed!')},
                    ]
                );
            });

    }
}

fetch('https://mywebsite.com/endpoint/', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
    })
}) .then((response) => response.text())
    .then((responseText) => {
        console.log(responseText);
    })
    .catch((error) => {
        console.warn(error);
    });