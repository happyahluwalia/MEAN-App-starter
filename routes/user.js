var express = require('express');
var router = express.Router();
var User = require('../model/user');
// Used for password encryption
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/',function(req, res, next){
    var user = new User({firstName : req.body.firstName,
                lastName: req.body.lastName,
                password: bcrypt.hashSync(req.body.password,10),
                email: req.body.email
                    });
     user.save(function(err, result){
           if(err) {
               return res.status(500).json(
                   {message: 'Error creating user',
                   error: err}
               )
           }
            res.status(201).json(
                {message: 'User created successfully',
                obj: result}
              )   
     });
});

router.post('/signin',function(req, res, next){
    User.findOne({email: req.body.email}, function(err, result){
            if(err) {
               return res.status(401).json(
                   {message: 'Error retrieving user',
                   error: err}
               )
           }
           
           if(!result) {
               return res.status(401).json(
                   {
                       message: 'Authentication failure',
                       error: {message :'Login failure1'}
                   }); 
           }
           if(!bcrypt.compareSync(req.body.password, result.password))
           {
                return res.status(401).json(
                   {
                       message: 'Authentication failure',
                       error: {message :'Login failure2'}
                   });
           }
           var token = jwt.sign({user: result }, 'IamASecretKey1#', {expiresIn:7200})

            res.status(200).json(
                {
                    message: 'User created successfully',
                    token: token,
                    userId: result._id
                }
              )   
        })
    
});


module.exports = router;
