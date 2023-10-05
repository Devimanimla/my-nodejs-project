const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

app.post('/execute', (req, res) => {
  // Execute your code here
  console.log('Received POST request:', req.body);
  res.status(200).send('Request received and processed.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});







console.log("Hello world!!")
console.log("Hello world!!")
console.log("Hello world!!")
