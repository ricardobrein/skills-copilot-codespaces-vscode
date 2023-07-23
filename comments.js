// Create web server application

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create app
const app = express();

// Configure app
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Create API endpoints
app.post('/comments', (req, res) => {
  const { comment, author } = req.body;
  res.send({
    message: `Your comment, ${comment}, has been submitted by ${author}.`
  });
});

// Start server
app.listen(process.env.PORT || 8081);