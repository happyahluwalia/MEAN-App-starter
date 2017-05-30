var express = require('express');
var router = express.Router();
var Message = require('../model/message');

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

module.exports = router;