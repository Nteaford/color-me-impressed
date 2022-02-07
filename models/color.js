const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const colorSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  name: {type: String },
  hex_value: {type: String },
});



module.exports = mongoose.model('Color', colorSchema);