const https = require('https')
const fs = require('fs')
const express = require('express')
const app = express()
const helment = require('helmet')
const compression = require('compression')
const mainRouter = require('./src/components/MainRouter')
const sequelize = require('./src/config/db')
const { notFoundHandler, errorHandler, wrapErrors } = require('./src/utils/ErrorHandler')
const mqtt = require('mqtt')

const options = {
    host: '3132ce987b3746e69dd08006f7615d0c.s1.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'monostro2@gmail.com',
    password: 'Camilo1996'
}

const mqttClient = mqtt.connect(options)

app.use(helment())
app.use(compression())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('', mainRouter)
app.use(notFoundHandler)
app.use(wrapErrors)
app.use(errorHandler)

mqttClient.on('connect', function () {
  console.log('Connected to MQTT broker')
});

mqttClient.on('error', function (error) {
  console.log(error)
});

mqttClient.on('message', function (topic, message) {
  console.log('Received message:', topic, message.toString())
});

// subscribe to topic 'my/test/topic'
mqttClient.subscribe('lean/test')

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, app)
sequelize.authenticate().then(() => {
  console.log('Connection to the database has been established successfully');
  server.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`)
  })
}).catch((err) => {
  console.log('Unable to connect to the database:', err);
});