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

var minsdata=[{"aae140":"101","aac030":"20131101"},{"aae140":"201","aac030":"20131101"},{"aae140":"301","aac030":"20131101"},{"aae140":"303","aac030":"20131101"},{"aae140":"401","aac030":"20131101"},{"aae140":"501","aac030":"20131101"}]
var o1 ={sign:"0",value1:''};
var o2=o1,o3=o1,o4=o1,o5=o1;
for (var i = 0;i < minsdata.length; i++)
{
       for(var key in minsdata[i]){
              //alert("key："+key+",value："+data[i][key]);
              switch (minsdata[i][key]){
                     case "101":
                     case "102":  o1 ={sign:"1",value1:'职工养老',date:minsdata[i].aac030.substring(0,4)};break;
                     case "110": o1 ={sign:"11",value1:'居民养老',date:minsdata[i].aac030.substring(0,4)};break;
                     case "201": o2 ={sign:"5",value2:'职工失业',date:minsdata[i].aac030.substring(0,4)};break;
                     case "303":
                     case "302":
                     case "301":  o3 = {sign:"2",value3:'职工医疗',date:minsdata[i].aac030.substring(0,4)};break;
                     case "305":
                     case "306":   o3={sign:"22",value3:'居民医疗',date:minsdata[i].aac030.substring(0,4)};break;
                     case "401":  o4 = {sign:"4",value4:'职工工伤',date:minsdata[i].aac030.substring(0,4)};break;
                     case "501":   o5 = {sign:"3",value5:'职工生育',date:minsdata[i].aac030.substring(0,4)};break;
              }
       }

}
var out={s1:o1,s2:o2,s3:o3,s4:o4,s5:o5};

usersCursor.set('sistype', out);
console.log(usersCursor.get("sistype"));
console.log(usersCursor.get("sistype").s1.value1);


console.log("kkkkkkpppppppppppp"+usersCursor.get("sistype"));

var dateCursor = tree.select('date');

dateCursor.set('startdate', "121212");

console.log("hhhhhhhhkkkkk"+dateCursor.get("startdate"));
