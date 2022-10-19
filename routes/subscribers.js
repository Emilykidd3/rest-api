const express = require('express')
const router = express.Router()
const subscriber = require('../models/subscriber')

// getting all 
router.get('/', async (req, res) => {
    try {
        const subscribers = await subscriber.find()
        res.json(subscribers)
    } catch(err) {
        res.stats(500).json({ message: err.message })
    }
})

// getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// creating one
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
})

// updating one
router.patch('/:id', (req, res) => {

})

// deleting one
router.delete('/:id', (req, res) => {

})

module.exports = router