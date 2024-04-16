const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//like user's blue print
const feedbackSchema = new Schema({
    id: Number,
    name:String,
    email:String,
    feedback:String,

});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback; 