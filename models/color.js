const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const colorSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  name: { closest_named_hex:{type: String}, distance:{type: Number}, exact_match_name: {type:Boolean}, value:{type:String}},
  hex:  {clean: {type: String }, value: {type: String }},
  rgb:  {r: {type: Number }, g: {type: Number }, b: {type: Number }, fraction: {r:{type:Number}, g:{type:Number}, b:{type:Number} }, value:{type: String}},
  hsl:  {h: {type: Number }, s: {type: Number }, v: {type: Number }, fraction: {h:{type:Number}, s:{type:Number}, l:{type:Number} }, value:{type: String}},
  hsv:  {h: {type: Number }, s: {type: Number }, l: {type: Number }, fraction: {h:{type:Number}, s:{type:Number}, v:{type:Number} }, value:{type: String}},
  xyz:  {x: {type: Number }, y: {type: Number }, z: {type: Number }, fraction: {x:{type:Number}, y:{type:Number}, z:{type:Number} }, value:{type: String}},
  cmyk:  {c: {type: Number }, m: {type: Number }, y: {type: Number }, k: {type: Number }, fraction: {c:{type:Number}, m:{type:Number}, y:{type:Number}, k:{type:Number} }, value:{type: String}},
  contrast: {value: {type:String}}
});


// colorSchema.statics.getFavorites = async function(userId) {
//   const favoriteColors = await this.find({user: userId}).exec();
//   return favoriteColors;
// }

// colorSchema.methods.add = async function(colors) {
//   console.log(colors);
//   colors.forEach(function(color) {
//     if (mongoose.model('Color').findOne({closest_named_hex: color.name.closest_named_hex})) {
//       return;

//     } else {
//       const addedColor = colorSchema.create({
//         name: color.name,
//         hex: color.hex,
//         rgb: color.rgb,
//         hsl: color.hsl,
//         hsv: color.hsv,
//         xyz: color.xyz,
//         cmyk: color.cmyk,
//         contrast: color.contrast
//       })
//       console.log(addedColor);
//     };
// });
// }



module.exports = mongoose.model('Color', colorSchema);