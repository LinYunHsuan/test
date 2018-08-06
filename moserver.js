var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var mongodb = require('mongodb');
var mqtt = require('mqtt');
var io = require('socket.io');
var app = express();
var server = app.listen();
var sio = io.listen(server);
var fs = require('fs');
var BSON = require('bson');

var mongoDBurl = 'mongodb://yizhen:jenny0728@ds151180.mlab.com:51180/dbtest';

var myDB;
var t ;

//mqtt
var options = {
    port: 15601,
    host: 'mqtt://m23.cloudmqtt.com',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'qgxusvba',
    password: 'O0QPhjo5O9eb',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};

var client = mqtt.connect('mqtt://m23.cloudmqtt.com', options);
client.on('connect', function() { // When connected
    console.log('MQTT Connected');
    // subscribe to a topic
    client.subscribe('RaspBerry');
});

// when a message arrives, do something with it

client.on('message', function(topic, msg) {
            console.log("Received '" + msg.toString() + "' on '" + topic + "'");
            t = {'LicensePlate': msg.toString()};

            myDB.collection('LicensePlate').insert(t, function(err, res){
     		console.log(t.toString());
     	if(err) throw err;
     	console.log('insert success');
     });
        });


// Connect to the MongoDB

/*fs.readFile('ParkingSpaceData', function(err, data){
	if(err) throw err;
	t = JSON.parse(data);
});*/


MongoClient.connect(mongoDBurl, function (err, client) {
     myDB = client.db('dbtest');
     //Write databse Insert/Update/Query code here..
     console.log('mongodb is running!');

     	
     

});
