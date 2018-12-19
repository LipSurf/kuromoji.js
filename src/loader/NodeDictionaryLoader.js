/*
 * Copyright 2014 Takuya Asano
 * Copyright 2010-2014 Atilika Inc. and contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

var fs = require("fs");
var DictionaryLoader = require("./DictionaryLoader");

/**
 * NodeDictionaryLoader inherits DictionaryLoader
 * @param {object} options Options for the dictionary (only dic_path for now)
 * @constructor
 */
function NodeDictionaryLoader(options) {
    DictionaryLoader.call(this, options);
}

NodeDictionaryLoader.prototype = Object.create(DictionaryLoader.prototype);

/**
 * Utility function
 * @param {string} file Dictionary file path
 * @param {NodeDictionaryLoader~onLoad} callback Callback function
 */
NodeDictionaryLoader.prototype.loadArrayBuffer = function (file, callback) {
    fs.readFile(file, function (err, data) {
        if(err) {
            return callback(err);
        }
        callback(null, new Uint8Array(data).buffer);
    });
};


/**
 * Not implemented.
 */
NodeDictionaryLoader.prototype.isCached = function (callback) {
    return callback(null, false);
};

/**
 * @callback NodeDictionaryLoader~onLoad
 * @param {Object} err Error object
 * @param {Uint8Array} buffer Loaded buffer
 */

module.exports = NodeDictionaryLoader;
