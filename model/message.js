var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// This is the blueprint of the message. This will be used to create the Model.
var mySchema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Message', mySchema);
