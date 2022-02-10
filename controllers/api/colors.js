const Color = require('../../models/color');
const mongoose = require('mongoose');

module.exports = {
  index,
  addToFavorites,
  deleteColor,
};

async function index(req, res) {
  const colors = await Color.find({});
  res.json(colors);
}

async function deleteColor(req, res) {
  console.log("req params", req.params.id);
  const colorToDelete = await Color.findOneAndDelete({id:req.params.id});
  console.log("color to delete", colorToDelete);
  res.json(colorToDelete);
}

// Add a color to the database
async function addToFavorites(req, res) {
  const colors = req.body;
  colors.forEach(function (color) {
    let query = color.name.closest_named_hex
    console.log(query);
    storedColor = null;
    Color.findOne({ "name.closest_named_hex" : query }, function(err, storedColor) {
      if (err) console.log(err);
      if (storedColor) {
        console.log("This has already been added", storedColor);
      } else{ 
        let addedColor = new Color({
          name: color.name,
          hex: color.hex,
          rgb: color.rgb,
          hsl: color.hsl,
          hsv: color.hsv,
          xyz: color.xyz,
          cmyk: color.cmyk,
          contrast: color.contrast
        });
        addedColor.save(function(err, addedColor) {
          if (err) console.log(err);
          console.log("New added color:", addedColor);
          
        });
    }
  });
  });
  res.json(colors);
}
