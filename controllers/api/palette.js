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
 
  console.log("updated palette", palette);
  let query = palette.colors;
    console.log("palette.colors", query);
    const p = await Palette.findOne({ colors : query });
      if (p) {console.log("This has already been added");
      } else{ 
        await Palette.create({
          user: req.user._id,
          colors: palette.colors,
          mode: palette.mode,
        });
    }
    res.json(true);
  }


