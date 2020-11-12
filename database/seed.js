var faker = require('faker');
var db = require('./dBHelpers.js')


// Seed a product and many color/size relationships
// Call this seed 100 times



// Generate a product with:
var createProduct = function() {

  var product = {}
  // name
  product.productName = faker.commerce.productName();
  // brand
  product.productBrand = faker.commerce.companyName();
  // price
  product.productPrice = faker.commerce.price();

  var productId = db.insertProduct(product);




  var colors = [];
  // For each product, generate:
  var numberOfColors = getRandomInt(1, 7);
    // 1-6 colors - with a picture for each
  for (var i = 0; i < numberOfColors; i++) {
    colors.push(generateColor());
  }




  var sizes = generateSizes();
  // For each product, generate:
    // range of 3-10 sizes

  var associations = generateAssociations(colors, sizes);
  // For each product, generate:
    // A crossreferece of availability, assigning each color a random set of sizes,
      // So, for each color, a number of sizes ranging from 1 to total available


  // Seed the database with this data

}


var generateColor = function() {
  var color = faker.commerce.color();
  var picture = faker.commerce.picture();
  var result = {color: color, picture: picture};
  return result;
}


var generateSizes = function() {
  var smallestSize = getRandomInt(0, 5);
  var largestSize = getRandomInt(9, 14);
  var sizes = []
  for (var i = smallestSize; i < largestSize; i++) {
    sizes.push(i);
  }
  return sizes;
}


var generateAssociations = function(colors, sizes) {
  for (var i = 0; i < colors.length; i++) {
    // for each color, assign several sizes
    colors[0].sizes = [];
    var unavailableSizeChoices = [];
    unavailableSizeChoices.push(getRandomInt(sizes[0], sizes[sizes.length - 1]));
    unavailableSizeChoices.push(getRandomInt(sizes[0], sizes[sizes.length - 1]));
    unavailableSizeChoices.push(getRandomInt(sizes[0], sizes[sizes.length - 1]));
    for (var j = 0; j < sizes.length; j++) {
      if (unavailableSizeChoices.indexOf(sizes[j]) === -1) {
        colors[0].sizes.push(sizes[j]);
      }
    }
  }
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}







// Seed the database with:
  // product
  // associated colors
  // associated sizes
  // associated color/size availability
