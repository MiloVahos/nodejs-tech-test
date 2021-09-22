const http = require('http')
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', function(req, res) {
  res.send('hello world');
});

const server = http.createServer(app)
server.listen(3000, () => {
  console.log('Server running on port 3000')
})