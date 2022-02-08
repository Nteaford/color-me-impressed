const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const colorSchema = require('./color');


const paletteSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  colors: [{type: Schema.Types.ObjectId, ref: 'Color'}]
});



module.exports = mongoose.model('Palette', paletteSchema);