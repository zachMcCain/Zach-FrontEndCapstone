var Promise = require("bluebird");
var faker = require('faker');
var database = require('./dBHelpers.js')
let mysql = require('mysql');
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "product"
});



// Seed a product and many color/size relationships
// Call this seed 100 times



// Generate a product with:
var createProduct = function() {
  console.log('create product is running')
  var product = {}
  // name
  product.productName = faker.commerce.productName();
  // brand
  product.productBrand = faker.company.companyName();
  // price
  product.productPrice = faker.commerce.price();
  // rating
  product.productRating = getRandomInt(0, 6);
  // ratings
  product.productRatings = getRandomInt(2, 200);



  //////////////////////////////////////////////////////////
  var productSeed = new Promise((resolve, reject) => {
    console.log('inside promise');

    let queryString = `INSERT INTO products(product_name, product_brand, product_price, product_rating, product_ratings) VALUES(?,?,?,?,?)`;

    // assign proper values:
    // let values = [productDetails.productName, productDetails.productBrand, productDetails.productPrice];
    let values = [product.productName, product.productBrand, product.productPrice, product.productRating, product.productRatings];


    connection.query(queryString, values, (err, results, fields) => {
      if (err) {
        console.error(err.message);
        //////////////////////////
        reject(err);
      }
      // get inserted id
      console.log('Product Id:' + results.insertId);
      ///////////////////////////
      // resolve(results.insertId);
      resolve(results.insertId);
    });

    // return database.insertProduct(product);
  });


  var colorid = 1;
  productSeed.then((productId) => {

      var colors = [];
      // For each product, generate:
      var numberOfColors = getRandomInt(1, 7);
        // 1-6 colors - with a picture for each
      for (var i = 0; i < numberOfColors; i++) {
        var newColor = generateColor();

        /////////////////////////////////////////////////////////
        newColor.colorId = colorid;
        colorid++
        database.insertColor(productId, newColor);
        colors.push(newColor);
      }


      var sizes = generateSizes(productId);
      // For each product, generate:
        // range of 3-10 sizes

      var associations = generateAssociations(productId, colors, sizes);
      // For each product, generate:
        // A crossreferece of availability, assigning each color a random set of sizes,
          // So, for each color, a number of sizes ranging from 1 to total available


      // Seed the database with this data


  })
  .catch((err) => console.log(err));
  // var productId = database.insertProduct(product);


}


var generateColor = function() {
  var color = faker.commerce.color();
  var picture = faker.image.fashion();
  var result = {color: color, picture: picture};
  return result;
}


var sizeid = 1;
var generateSizes = function(productId) {
  var smallestSize = getRandomInt(0, 5);
  var largestSize = getRandomInt(9, 14);
  var sizes = []
  for (var i = smallestSize; i < largestSize; i++) {
    var size = {};
    size.size = i;
    ///////////////////////////////////////////////
    size.sizeId = sizeid;
    sizeid++;
    database.insertSize(productId, i);
    sizes.push(size);
  }
  return sizes;
}


var generateAssociations = function(productId, colors, sizes) {
  for (var i = 0; i < colors.length; i++) {
    // for each color, assign several sizes
    colors[i].sizes = [];
    var unavailableSizeChoices = [];
    unavailableSizeChoices.push(getRandomInt(sizes[0], sizes[sizes.length - 1]));
    unavailableSizeChoices.push(getRandomInt(sizes[0], sizes[sizes.length - 1]));
    unavailableSizeChoices.push(getRandomInt(sizes[0], sizes[sizes.length - 1]));
    for (var j = 0; j < sizes.length; j++) {
      if (unavailableSizeChoices.indexOf(sizes[j]) === -1) {
        colors[i].sizes.push(sizes[j]);
        //////////////////////////////////////////////////////////////////
        database.insertAssociation(productId, colors[i].colorId, sizes[j].sizeId);
      }
    }
  }
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}



var seed = function() {
  for (var i = 0; i < 101; i++) {
    createProduct();
  }
}

seed();

