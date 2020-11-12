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
    console.log('Todo Id:' + results.insertId);
    return results.insertId;
  });

}







// Create a function to insert data into the colors table
var insertColor = function(colorDetails) {
  let queryString = `INSERT INTO colors(product_id, color, picture) VALUES(?,?,?)`;

  let values = []

  connection.query(queryString, values, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    // get inserted id
    console.log('Todo Id:' + results.insertId);
    return results.insertId;
  });

}


// Create a function to insert data into the sizes table
var insertSize = function(sizeDetails) {
  let queryString = `INSERT INTO sizes(product_id, number) VALUES(?,?)`;

  let values = []

  connection.query(queryString, values, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    // get inserted id
    console.log('Todo Id:' + results.insertId);
    return results.insertId;
  });
}


// Create a function to insert data into the associations table
var insertAssociation = function(associationDetails) {
  let queryString = `INSERT INTO associations(product_id, color_id, size_id) VALUES(?,?,?)`;

  let values = []

  connection.query(queryString, values, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    // get inserted id
    console.log('Todo Id:' + results.insertId);
    return results.insertId;
  });
}


module.exports = {
  insertProduct: insertProduct,
  insertColor: insertColor,
  insertSize: insertSize,
  insertAssociation: insertAssociation
}

