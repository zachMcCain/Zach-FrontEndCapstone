const express = require('express');
const app = express();
const port = 3004;


app.use(express.static(__dirname + '/../public'));



app.get('/', (req, res) => {
  console.log('I hear you.')
  res.status(200).send('I hear you.')
});



app.listen(port, function() {
  console.log(`listening at localhost:${port}`)
});

