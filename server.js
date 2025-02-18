const express = require('express');

// Constants
const PORT = process.env.PORT || 80;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Bye Bye Bye!\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
