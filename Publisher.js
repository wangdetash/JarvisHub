var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.1.4');

client.on('connect', function () 
{setInterval(function() {
client.publish('esp32/ping', 'ping');
console.log('Message Sent');
}, 5000);});