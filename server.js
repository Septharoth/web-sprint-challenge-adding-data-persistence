const express = require('express')
const server = express()

const projects = require('./api/routes/projects')
const tasks = require('./api/routes/tasks')
const resources = require('./api/routes/resources')

server.use(express.json())

server.use('/projects', projects)
server.use('/tasks', tasks)
server.use('/resources', resources)

server.get('/', async (req, res) => {
    res.status(200).json({ message: "Welcome to my API" })
})

module.exports = server