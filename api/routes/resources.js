const express = require('express')
const route = express.Router()
const db = require('../models/resources')

route.get('/', async (req, res) => {
    try {
        const result = db.getResources()
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ errorMessage: "An error has occured." })
    }
})

route.get('/:id', async (req, res) => {
    try {
        const result = db.getResourceById(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ errorMessage: "An error has occured." })
    }
})

route.post('/', async (req, res) => {
    try {
        const result = db.insertResource(req.body)
        res.status(201).json(result)
    } catch (err) {
        res.status(500).json({ errorMessage: "An error has occured." })
    }
})

module.exports = route