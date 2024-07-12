var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home | Blog' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About | Blog' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact | Blog' });
});

router.get('/create-blog', function (req, res, next) {
  res.render('create-blog', { title: 'Create Blog | Blog' });
});

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Create Blog | Blog' });
});

router.post('/login', function (req, res, next) {
  res.render('login', {title: 'Profile | Blog'});
});

router.post('/profile', function (req, res, next) {
  res.render('profile', {title: 'Profile | Blog'});
});

router.get('/forgot-password', function (req, res, next) {
  res.render('forgot-password', { title: 'Create Blog | Blog' });
});

router.get('/register', function (req, res, next) {
  res.render('register', { title: 'Create Blog | Blog' });
});

module.exports = router;
