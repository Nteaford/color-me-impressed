const Palette = require('../../models/palette');
const mongoose = require('mongoose');

module.exports = {
  index,
  show,
  addPalette,
  deletePalette
};

async function index(req, res) {
  const palettes = await Palette.find({});
  res.json(palettes);
}

async function deletePalette(req, res) {
  console.log("req params", req.params.id);
  const paletteToDelete = await Palette.findOneAndDelete({_id:req.params.id});
  console.log("palette to delete", paletteToDelete);
  res.json(paletteToDelete);
}

// Add a color to the database
// async function addPalette(req, res) {
//   const palette = req.body;
//   colors.forEach(function (color) {
//     let query = color.name.closest_named_hex
//     console.log(query);
//     storedPalette = null;
//     Palette.findOne({ "name.closest_named_hex" : query }, function(err, storedPalette) {
//       if (err) console.log(err);
//       if (storedPalette) {
//         console.log("This has already been added", storedPalette);
//       } else{ 
//         let addedPalette = new Palette({
//           name: color.name,
//           hex: color.hex,
//           rgb: color.rgb,
//           hsl: color.hsl,
//           hsv: color.hsv,
//           xyz: color.xyz,
//           cmyk: color.cmyk,
//           contrast: color.contrast
//         });
//         addedPalette.save(function(err, addedPalette) {
//           if (err) console.log(err);
//           console.log("New added color:", addedPalette);
          
//         });
//     }
//   });
//   });
//   res.json(colors);
// }