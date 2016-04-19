/**
 * Created by guoguow on 2016/4/6.
 */

var Baobab = require('baobab');


     tree = new Baobab({
        users: {
                username: null,
                ssn: null
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
