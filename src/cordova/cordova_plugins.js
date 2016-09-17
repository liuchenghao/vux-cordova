cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [

    {
        "file": "plugins/cordova-plugin-user-account/www/UserInfo.js",
        "id": "cordova-plugin-user-account.UserInfo",
        "clobbers": [
            "UserInfo"
        ]
    },
    {
        "file": "plugins/cordova-plugin-user-account/www/UserInfoError.js",
        "id": "cordova-plugin-user-account.UserInfoError",
        "clobbers": [
            "UserInfoError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-user-account/www/userAccount.js",
        "id": "cordova-plugin-user-account.userAccount",
        "clobbers": [
            "userAccount"
        ]
    },
    {
        "file": "plugins/com.example.CeshiPlugin/www/UserAccount.js",
        "id": "com.example.CeshiPlugin.UserAccount",
        "clobbers": [
            "userAccount"
        ]
    },
	{
        "file": "plugins/cordova-plugin-callactivity/www/callActivity.js",
        "id": "cordova-plugin-callactivity.callActivity",
        "clobbers": [
            "callActivity"
        ]
    },
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-user-account": "1.0.0",
    "com.example.reliao": "2.0"
}
// BOTTOM OF METADATA
});
