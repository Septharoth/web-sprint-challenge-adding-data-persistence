const express = require('express')
const route = express.Router()
const db = require('../models/projects')

route.get('/', async (req, res) => {
    try {
        const result = db.getProjects()
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ errorMessage: "An error has occured." })
    }
})

route.get('/:id', async (req, res) => {
    try {
        const result = db.getProjectById(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ errorMessage: "An error has occured." })
    }
})


route.get('/:id/tasks', async (req, res) => {
    try {
        const result = db.getTasks(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ errorMessage: "An error has occured." })
    }
})

route.post('/', async (req, res) => {
    try {
        const result = db.insertProject(req.body)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ errorMessage: "An error has occured." })
    }
})

module.exports = route