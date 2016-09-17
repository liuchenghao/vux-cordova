cordova.define("cordova-plugin-user-account.userAccount", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * This class provides access to device accelerometer data.
 * @constructor
 */
var argscheck = require('cordova/argscheck'),
    utils = require("cordova/utils"),
    exec = require("cordova/exec"),
    UserInfo = require('./UserInfo'),
    UserInfoError = require('./UserInfoError');

var userAccount = {
    /**
     * Asynchronously acquires the user account information.
     *
     * @param {Function} successCallback    The function to call when the user account data is available.
     * @param {Function} errorCallback      The function to call when there is an error getting the user account data. (OPTIONAL)
     * @param {UserAccountOptions} options The options for getting the user account data such as timeout. (OPTIONAL)
     */
    getUserInfo: function (successCallback, errorCallback, options) {
        argscheck.checkArgs('fFO', 'userAccount.getUserInfo', arguments);
        var win = function (u) {
            var info = new UserInfo(u.uid, u.name, u.nickname, u.email);
            successCallback(info);
        };
        var fail = function (e) {
            var error = new UserInfoError(e.code, e.message);
            if (errorCallback)
                errorCallback(error);
        };

        exec(win, fail, "UserAccount", "getUserInfo", []);
    },
};
module.exports = userAccount;

});
