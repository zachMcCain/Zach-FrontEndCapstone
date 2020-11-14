const Promise = require('bluebird');

let mysql = require('mysql');
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "product"
});






// Create a read function to get data for a specific product
var readProductData = function(productId, callback) {
  // Flow - read from products table
  var productPromise = new Promise((resolve, reject) => {

    let queryString = `SELECT * FROM products WHERE product_id=?`;
    let value = productId;
    console.log('this is the value provided: ', value)

    connection.query(queryString, value, (err, results, fields) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      // console.log('Product Query Results:' + results[0].product_id);
      resolve(results[0]);
    });
  })

  // then
  .then((productData) => {
    console.log('Data from then block: ', productData)
    // productData is an object with keys product_id, product_name, product_brand, and product_price
    let queryString = `SELECT * FROM availability WHERE product_id=?`;
    let value = productData.product_id;
    // use product id to read availability data for that product
    return connection.query(queryString, value, (err, results) => {
      if (err) {
        console.error(err.message);
        throw err
      }
      console.log('Availibility query results: ', results)
      // results is an array of objects with keys product_id, color_id, and size_id.

      // create an availability array as a prop on the productData obj.
      productData.availability = []
      // create a color to size object with props color, pic, and size set to an array

      var colorId = -1;
      var index = -1
      // iterate through the results array (that is, the colors)
      for (var i = 0; i < results.length; i++) {
        if (results[i].color_id !== colorId) {
          colorId = results[i].color_id;
          index++;
          productData.availability[index] = {};
          productData.availability[index].color = results[i].color_id;
          productData.availability[index].sizes = [];
        }
        productData.availability[index].sizes.push(results[i].size_id);
      }
      console.log(productData)
      // if the color_id is new
      // assign temp to the color id
      // push the
      // for every color id, push each size id to the size array

      return productData;

      // callback(productData);
    })

  })
  .then((productData) => {
    // RIGHT NOW MY PRODUCTDATA IS NOT WHAT I NEED PASSED HERE
    console.log("reached the inside of the promise.map block", productData)
    // iterate through the availability array
    Promise.map(productData.availability, function(obj) {
      // assign color and picture to each obj.
      let queryString = `SELECT * FROM colors WHERE product_id=?`;
      let value = obj.color;
      // use product id to read availability data for that product
      return connection.query(queryString, value, (err, results) => {
        obj.color = results.color;
        obj.picture = results.picture;
        return obj;
      })

    })
    .then((results) => {
      console.log('Reached the finish of map')
      productData.availability = results;
      callback(productData)
    })
    // query the database for color info
  });



      // =================this means that for every product there will be a list of color/size combinations - creat an array of objects, each with a color/picture, and a nested array of sizes in that color===========================
  // then
  // iterate through the availability data and
    // read the colors of the product
    // then
    // read the sizes of each color
}

// readProductData(1);


// Create a helper read function to get data from the product availability table


// Create a helper read function to use data from product availability table to get data from colors and sizes




module.exports = {
  readProductData: readProductData
}




