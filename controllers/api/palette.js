const Palette = require('../../models/palette');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const palettes = await Palette.find({});
  res.json(palettes);
}

async function show(req, res) {
  const palette = await Palette.findById(req.params.id);
  res.json(palette);
}