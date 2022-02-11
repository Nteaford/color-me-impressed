const Palette = require('../../models/palette');
const mongoose = require('mongoose');

module.exports = {
  index,
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

// Add a palette to the database
async function addPalette(req, res) {
  const palette = req.body;
  let query = palette.color;
    console.log(query);
    Palette.findOne({ "color" : query }, function(err, storedPalette) {
      if (err) console.log(err);
      if (storedPalette) {
        console.log("This has already been added", storedPalette);
      } else{ 
        let addedPalette = new Palette({
          user: req.user._id,
          colors: palette.colors,
          mode: palette.mode,
        });
        addedPalette.save(function(err, addedPalette) {
          if (err) console.log(err);
          console.log("New added palette:", addedPalette);
          
        });
    }
  });
  res.json(palette);
}