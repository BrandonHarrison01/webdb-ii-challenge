const express = require('express');

const carsRouter = require('./cars-router')

const server = express();

server.use(express.json())

server.use('/api/cars', carsRouter);

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`\n server running on port ${port} \n`))