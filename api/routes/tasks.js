const express = require('express')
const route = express.Router()
const db = require('../models/tasks')

route.get('/', async (req, res) => {
    try {
        const result = db.getTasks()
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ errorMessage: "An error has occured." })
    }
})


route.post('/', async (req, res) => {
    try {
        const result = db.insertTask(req.body)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ errorMessage: "An error has occured." })
    }
})

module.exports = route