var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("user", { user1: "JayJr", user2: "JayJr's Page" });
});

module.exports = router;
