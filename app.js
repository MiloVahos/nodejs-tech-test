const http = require('http')
const express = require('express')
const app = express()
const mainRouter = require('./src/components/index')

app.use(express.urlencoded({ extended: true }))
app.use('/', mainRouter)

app.get('/', function(req, res) {
  res.send('Lean Tech Test Route');
});

const server = http.createServer(app)
server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})