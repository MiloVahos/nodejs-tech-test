const http = require('http')
const express = require('express')
const app = express()
const sequelize = require('./src/config/db')

app.use(express.urlencoded({ extended: true }))

app.get('/', function(req, res) {
  res.send('hello world');
});

const server = http.createServer(app)
server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})