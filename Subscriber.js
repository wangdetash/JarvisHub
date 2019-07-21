var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.1.4')

client.on('connect', function () {
    client.subscribe('esp32/Range');
})

client.on('message', function (topic, message) {context = message.toString();
console.log(context)
})