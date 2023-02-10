const mongoose = require('mongoose');
const { Schema } = mongoose;

const TastSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, requried: true}
});

module.exports = mongoose.model('Task', TastSchema);