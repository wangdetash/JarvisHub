var express = require('express');
var app = express();
const port = 8080

var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.1.4');

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

client.on('connect', function () 
{setInterval(function() {
client.publish('esp32/ping', 'ping');
console.log('Message Sent');
}, 5000);});


// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('MQTT Server');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('welcome..');
})


app.get('/LED_ON', function (req, res) {
   console.log("Got a GET request for /ledOn");
   client.publish('esp32/output', 'on');
   res.send('LED STATUS ON');
})

app.get('/LED_OFF', function (req, res) {
  console.log("Got a GET request for /ledOff");
  client.publish('esp32/output', 'off');
  res.send('LED STATUS OFF');
})
