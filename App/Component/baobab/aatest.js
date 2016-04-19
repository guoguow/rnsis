/**
 * Created by guoguow on 2016/4/6.
 */

 require('../../Component/baobab/bb.js');

        var usersCursor = tree.select('users');

        usersCursor.set('username', 'aaaaa');
        usersCursor.set('ssn', '11111');

        console.log("aa"+usersCursor.get("username"));
        console.log("aa"+usersCursor.get("ssn"));

if(usersCursor.get("username"))
{
       console.log("cc"+usersCursor.get("username"));
       console.log("cc"+usersCursor.get("ssn"));
}
