const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const colorSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  name: {type: String },
  hex_value: {type: String },
});




colorSchema.statics.getFavorites = async function(userId) {
  const favoriteColors = await this.find({user: userId}).exec();
  return favoriteColors;
}

colorSchema.methods.addColorsToFavorites = async function(itemId) {
  // 'this' refers to the 'favorite colors'
  const favoriteColors = this;
  const existingColors = favoriteColors.find(existingColors => existingColors._id.equals(itemId));
  if (existingColors) {
return;
  } else {
    // Not in favorites, lets add the color!
    const color = await mongoose.model('Color').findById(itemId);
    cart.lineItems.push({ item });
  }
  return cart.save();
};


module.exports = mongoose.model('Color', colorSchema);