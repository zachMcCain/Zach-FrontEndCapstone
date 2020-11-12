const express = require('express');
const app = express();
const port = 3004;


app.use(express.static(__dirname + '/../public'));



app.get('/', (req, res) => {
  console.log('I hear you.')
  res.status(200).send('I hear you.')
});




app.get('/api/products/details', (req, res) => {

})





app.post('/api/products/cart', product, (req, res) => {

})





app.post('/api/products/wishlist', product, (req, res) => {

})




app.post('/api/products/registry', product, (req, res) => {

})






app.listen(port, function() {
  console.log(`listening at localhost:${port}`)
});

