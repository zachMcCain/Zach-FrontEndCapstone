const express = require('express');
const app = express();
const port = 3004;
const db = require('../database/dbQueries');
const bodyParser = require('body-parser');


app.use(express.static(__dirname + '/../public'));

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.raw())
app.use(bodyParser.text())
// app.use(bodyParser.json())



app.get('/', (req, res) => {
  // console.log('I hear you.')
  // console.log(req.body);
  res.status(200).send('I hear you.')
});




app.get('/api/products/details', (req, res) => {
  // console.log('I hear you.')
  var idObj = JSON.parse(req.body);
  // console.log(idObj);
  // console.log(idObj.id)
  db.readProductData(idObj.id, (result) => {
    res.status(200).send(result)
  })

})





app.post('/api/products/cart', (req, res) => {

})





app.post('/api/products/wishlist', (req, res) => {

})




app.post('/api/products/registry', (req, res) => {

})






app.listen(port, function() {
  console.log(`listening at localhost:${port}`)
});

