const express = require('express');

const smurfRouter = require('../api/smurfRouter')

const server = express();
server.use(express.json());

server.use('/smurfs', smurfRouter)

server.get('/', (req, res) => {
    res.json({ sanity: 'check'})
});

module.exports = server;