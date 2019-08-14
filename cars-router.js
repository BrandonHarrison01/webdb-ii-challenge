const express = require('express')
const knex = require('knex');

const knexConfig = require('./knexfile.js')

const db = knex(knexConfig.development)

const router = express.Router();


// GET

router.get('/', (req, res) => {
    db('cars')
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json({ error: 'there was an error' }))
})


// POST

router.post('/', (req, res) => {
    const newCar = req.body;
    db('cars')
        .insert(newCar)
        .then(car => res.status(200).json(car))
        .catch(error => res.status(500).json({ error: 'there was an error adding car' }))
})

module.exports = router;