var express = require('express');
var router = express.Router();
var Message = require('../model/message');
var jwt = require('jsonwebtoken');

router.post('/', function(req, res, next){
    var msg = new Message({
        content: req.body.content
    });
    msg.save(function(err, result){
        if(err) {
            res.status(500).json({
                title:'an error occurred',
                error: err
            });
        }
        res.status(200).json({
            title: 'msg save successfully',
            obj: result
        })
    });
})

// Before we access any of the below routes check if the incoming
// request has a valid JWT token
router.use('/', function (req, res, next){
    jwt.verify(req.query.token, 'IamASecretKey1#', function(err, decoded) {
        if(err) {
            return res.status(401).json({
                title: 'Unauthorized access',
                error: err
            })
        }
        //if the token is valid then let request continue to its route.
        next();
    })
})

router.get('/', function(req, res, next){
    Message.find()
            .exec()
            .then(function(result) {
                    res.status(200).json({
                        title: 'Success',
                        obj: result
                    });
                })
                .catch(function(err){
                    return res.status(500).json({
                        title: 'Error getting messages',
                        error: err
                    });
                });
 });

router.patch('/:id', function(req, res, next){
    Message.findById(req.params.id, function(err, message) {
        if(err){
                return res.status(500).json({
                         title: 'Error getting messages',
                         error: err
                    })
            }
        if(!message) {
             return res.status(500).json({
                         title: 'No message ',
                         error: {message: 'Msg not found'}
                    })
          }
         message.content = req.body.content;    
         message.save(function(err, result){
                if(err) {
                    res.status(500).json({
                        title:'an error occurred',
                        error: err
                    });
                }
                res.status(200).json({
                    title: 'msg updated successfully',
                    obj: result
                })
            }); 
    })
})


router.delete('/:id', function(req, res, next){
    Message.findById(req.params.id, function(err, message) {
        if(err){
                return res.status(500).json({
                         title: 'Error getting messages',
                         error: err
                    })
            }
        if(!message) {
             return res.status(500).json({
                         title: 'No message ',
                         error: {message: 'Msg not found'}
                    })
          }
         message.remove(function(err, result){
                if(err) {
                    res.status(500).json({
                        title:'an error occurred',
                        error: err
                    });
                }
                res.status(200).json({
                    title: 'msg updated successfully',
                    obj: result
                })
            }); 
    })
})
module.exports = router;