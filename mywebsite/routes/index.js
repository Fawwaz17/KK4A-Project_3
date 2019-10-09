var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home', menuId: 'home' });
});

/* GET about us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { page: 'About Us', menuId: 'about us' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { page: 'Contact Us', menuId: 'contact us' });
});

module.exports = router;
