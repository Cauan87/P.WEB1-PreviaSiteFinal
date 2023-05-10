var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gameDesc/GoW');
});
router.get('/', function(req, res, next) {
  res.render('gameDesc/GoW4');
});
router.get('/', function(req, res, next) {
  res.render('gameDesc/GoW2');
});
router.get('/', function(req, res, next) {
  res.render('gameDesc/GTA_SA');
});
router.get('/', function(req, res, next) {
  res.render('gameDesc/RE4');
});
router.get('/', function(req, res, next) {
  res.render('gameDesc/MGS3');
});
router.get('/', function(req, res, next) {
  res.render('gameDesc/SOTC');
});
router.get('/', function(req, res, next) {
  res.render('gameDesc/RDR2');
});
router.get('/playstation', function(req, res, next) {
  res.render('gameDesc/GoW5');
});
router.get('/playstation', function(req, res, next) {
  res.render('gameDesc/TLOU2');
});
router.get('/playstation', function(req, res, next) {
  res.render('gameDesc/FIFA23');
});
router.get('/playstation', function(req, res, next) {
  res.render('gameDesc/ER');
});

module.exports = router;