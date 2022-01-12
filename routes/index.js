var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


// These are going to run when you start the express app
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey

const shortName = uniqueNamesGenerator({
  dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
  length: 2
}); // big-donkey

console.log('randomName is: ', randomName)
console.log('shortName is: ', shortName)