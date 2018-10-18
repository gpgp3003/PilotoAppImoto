/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var chaveApi = "113cf34e1158e122e83731473d04dfd6";
var secretoApi = "b21a823b896d290b342aa61a7c4c8d23";

var strServer = "primearcee.solohapp.com";

//var appCateg = window.localStorage.getItem("imotoCateg");
//var appCategUpd = window.localStorage.getItem("imotoCategUpd");

function showAppMsg(Message){
    if($("#ActivityIndicator").length ) {
        $("#ActivityIndicator").show();
    } else {
        $("body").prepend('<div id="ActivityIndicator"><div id="dvAppMsg"><span id="appMsg"></span></div></div>');
    }
    if($("#spinner").length) {
        $("#spinner").show();
    } else {
        $("body").prepend('<img id="spinner" src="./img/moto.png" />');
    }
    $("#appMsg").text(Message);
}

function hideAppMsg(){
    $("#spinner").hide();
    $("#ActivityIndicator").hide();
}