var faker = require('faker');







// Seed a product and many color/size relationships
// Call this seed 100 times









var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties



var product = faker.fake("{{commerce.productName}}, {{company.companyName}}, {{commerce.price}}, {{commerce.color}}")

var color = faker.fake("{{commerce.color}}, {{image.fashion}}")

console.log(product, color);