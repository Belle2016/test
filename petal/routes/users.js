var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/addUser',function(req,res,next){
	userDao.add(req,res,next);
});
router.get('/query', function(req, res, next) {
	userDao.queryById(req, res, next);
});

module.exports = router;
