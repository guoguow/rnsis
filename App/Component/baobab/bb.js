/**
 * Created by guoguow on 2016/4/6.
*
*/

var Baobab = require('baobab');

//{"ssn":"20613111810005534383","name":"施小平测生育02","idcard":"320682197806130132","birthday":"19780613",
// "sex":"2","marrige":null,"nationality":null,"PS":null,"mobilephone":"2061311181345345","address":null}
     tree = new Baobab({
        users: {
                username: null,
                ssn: null,
               name:null,
            idcard:null,
            birthday:null,
            sex:null,
            marrige:null,
            nationality:null,
            ps:null,
            mobilephone:null,
            address:null,
            sistype:null,

        }
    })


tree.on('update', function(e) {
    var eventData = e.data;

    console.log('Current data:', eventData.currentData);
    console.log('Previous data:', eventData.previousData);
    
    usersCursor=tree.select("users")
    console.log("bb"+usersCursor.get("username"));
    console.log("bb"+usersCursor.get("ssn"));
    
    console.log('Transaction details:', eventData.transaction);
    console.log('Affected paths', eventData.paths);
});
