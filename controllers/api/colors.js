const Color = require('../../models/color');
const mongoose = require('mongoose');

module.exports = {
  index,
  addToFavorites,
  deleteColor,
};

async function index(req, res) {
  const colors = await Color.find({user: req.user._id});
  res.json(colors);
}

async function deleteColor(req, res) {
  console.log("req params", req.params.id);
  const colorToDelete = await Color.findOneAndDelete({_id:req.params.id});
  console.log("color to delete", colorToDelete);
  res.json(colorToDelete);
}

// Add a color to the database
async function addToFavorites(req, res) {
  const colors = req.body;
  for (let color of colors) {
    let query = color.hex.value;
    const c = await Color.findOne({ "hex.value": query });
    if (c) {
      console.log("Added already");
    } else {
      await Color.create({
        user: req.user._id,
        name: color.name,
        hex: color.hex,
        rgb: color.rgb,
        hsl: color.hsl,
        hsv: color.hsv,
        xyz: color.xyz,
        cmyk: color.cmyk,
        contrast: color.contrast,

      });
    }
  }
  res.json(true);
}
