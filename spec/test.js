// const puppeteer = require('puppeteer');
const db = require('../database/dbQueries.js')
// const c = require('../client');
// const s = require('../server');


// Database tests ======================================================
// -- Test that seed file creates the proper number of records
// -- Test the ability to read files and obtain appropriate data
//    -- Make sure products have picture urls
//    -- Make sure each product has multiple colors
//    -- Make sure each color has multiple sizes
// -- Test database functions



// REFACTOR below tests to use asynchronous syntax in order to complete jest operation
// https://jestjs.io/docs/en/asynchronous
test('Expect database to contain records', () => {
  expect(db.readProductData(1, function(results) {
    (typeof results).toBe('object');
  }))
})

test('Expect database to return appropriate data based on product id provision', () => {
  expect(db.readProductData(2, function(results) {
    results.product_name.toBe('Licensed Wooden Shirt')
  }))
})

test('Expect database to return multiple colors for a single item', () => {
  expect(db.readProductData(9, function(results) {
    results.availability.length.toBeGreaterThan(5);
  }))
})



// Server tests ======================================================
// -- Test to make sure api calls generate errors when appropriate
// -- Test to make sure api calls generate the desired data
// -- Test to make sure static files are served up (at the appropriate port?)
// -- Test server functions




// Client tests ======================================================
// -- Test to make sure api calls retrieve appropriate data
// -- Test to make sure everything is rendering to the page properly (but how?)
// -- Test client functions

