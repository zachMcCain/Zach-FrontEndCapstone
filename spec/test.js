// const puppeteer = require('puppeteer');
const React = require('react');
const renderer = require('react-test-renderer');
const Quantity = require('../client/modules/Quantity.jsx');
const db = require('../database/dbQueries.js')
// const c = require('../client');
// const s = require('../server');
const request = require('supertest');
const express = require('express');
const app = express();


// Database tests ======================================================

// REFACTOR below tests to use asynchronous syntax in order to complete jest operation
// https://jestjs.io/docs/en/asynchronous


test('Expect database to contain records', done => {
  function callback(data) {
    try {
      expect(typeof data).toBe('object');
      done();
    } catch (error) {
      done(error);
    }
  }
  db.readProductData(1, callback);
})

test('Expect database to return appropriate data based on product id provision', done => {
  function callback(data) {
    try {
      expect(typeof data.product_name).toBe('string');
      done();
    } catch (error) {
      done(error);
    }
  }
  db.readProductData(2, callback);
});

test('Expect database to return multiple colors for a single item', done => {
  function callback(data) {
    try {
      expect(data.availability.length).toBeGreaterThan(1);
      done();
    } catch (error) {
      done(error);
    }
  }
  db.readProductData(9, callback);
})



// Server tests ======================================================
// -- Test to make sure api calls get to the endpoint
// -- Test to make sure api calls generate the desired data
// -- Test to make sure static files are served up (at the appropriate port?)
// -- Test server functions
// test('Expect server to respond with appropriate data', () => {
//   jest.mock('./')
// })


request(app).post('/api/products/details')
  .expect('Content-Type', /text/)
  .end(function(err, res) {
    if (err) throw err;
});




// Client tests ======================================================
// -- Test to make sure everything is rendering to the page properly
// -- Test client functions

test('Quantity changes by 1 when + or - is pressed', () => {
  const component = renderer.create(<Quantity />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onPlus();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMinus();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
