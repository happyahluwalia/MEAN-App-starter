var express = require('express');
var router = express.Router();

var User = require('../model/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.findOne({}, function(err, result) {
     if(err) {
       res.send('Error Bhai');
     }
     res.render('message', {email: result.email});
  })
  
});


router.post('/', function(req, res, next){
  var email = req.body.email;
  var user = new User({
    firstName: 'Happy',
    lastName: 'Singh',
    password: 'shh... its a secret',
    email: email
  });

  user.save();

  res.redirect('/');
})

module.exports = router;
