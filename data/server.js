const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const db = require('../data/helpers/notesHelpers');

//const noteRouter = require('../api/noteRouter');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
//server.use('/api/notes', noteRouter);

server.get('/',  async (req, res) => {
  try {
      const notes = await db.getAll();
      res.status(200).json(notes)
  } 
  catch (err) {
      res.status(500).json(err);
  }
});

module.exports = server;