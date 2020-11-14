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

  var productPromise = new Promise((resolve, reject) => {
    let queryString = `SELECT * FROM products WHERE product_id=?`;
    let value = productId;
    connection.query(queryString, value, (err, results, fields) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      resolve(results[0]);
    });
  })
  .then((productData) => {
    let queryString = `SELECT * FROM availability WHERE product_id=?`;
    let value = productData.product_id;
    return connection.query(queryString, value, (err, results) => {
      if (err) {
        console.error(err.message);
        throw err
      }
      productData.availability = []
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

      Promise.map(productData.availability, function(obj) {
        // assign color and picture to each obj.
        let queryString = `SELECT * FROM colors WHERE id=?`;
        let value = obj.color;
        // use product id to read availability data for that product
        let promise = new Promise((resolve, reject) => {
          connection.query(queryString, value, (err, results) => {
            obj.color = results[0].color;
            obj.picture = results[0].picture;
            resolve(obj);
          })
        })
        return promise;

      })
      .then((results) => {
        productData.availability = results;
        callback(productData);
      })
    })
  });
}



module.exports = {
  readProductData: readProductData
}

