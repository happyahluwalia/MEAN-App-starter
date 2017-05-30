var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../model/user');

// This is the blueprint of the message. This will be used to create the Model.
var mySchema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

mySchema.post('remove', function(message){
    User.findById(message.user, function(err, user){
        user.messages.pull(message);
        user.save();
    })
})

module.exports = mongoose.model('Message', mySchema);
