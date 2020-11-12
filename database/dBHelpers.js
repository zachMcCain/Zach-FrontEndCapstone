let mysql = require('mysql');
let connection = mysql.createConnection(config);



// Create a function to insert data into the products table

var insertProduct = function(productDetails) {

  let queryString = `INSERT INTO products(product_name, product_brand, product_price) VALUES(?,?,?)`;

  // assign proper values:
  let values = [productDetails.productName, productDetails.productBrand, productDetails.productPrice];


  connection.query(queryString, values, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    // get inserted id
    console.log('Product Id:' + results.insertId);
    return results.insertId;
  });

}





// Create a function to insert data into the colors table
var insertColor = function(productId, colorDetails) {
  let queryString = `INSERT INTO colors(product_id, color, picture) VALUES(?,?,?)`;

  let values = [productId, colorDetails.color, colorDetails.picture];

  connection.query(queryString, values, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    // get inserted id
    console.log('Color Id:' + results.insertId);
    return results.insertId;
  });

}


// Create a function to insert data into the sizes table
var insertSize = function(productId, size) {
  let queryString = `INSERT INTO sizes(product_id, number) VALUES(?,?)`;

  let values = [productId, size]

  connection.query(queryString, values, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    // get inserted id
    console.log('Size Id:' + results.insertId);
    return results.insertId;
  });
}




// Create a function to insert data into the associations table
var insertAssociation = function(productId, colorId, sizeId) {
  let queryString = `INSERT INTO associations(product_id, color_id, size_id) VALUES(?,?,?)`;

  let values = [productId, colorId, sizeId];

  connection.query(queryString, values, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    // get inserted id
    console.log('Association results:' + results);
    return results;
  });
}


module.exports = {
  insertProduct: insertProduct,
  insertColor: insertColor,
  insertSize: insertSize,
  insertAssociation: insertAssociation
}

