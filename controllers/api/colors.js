const Color = require('../../models/color');

module.exports = {
  index,
  show,
  addToFavorites
};

async function index(req, res) {
  const colors = await Color.find({});
  res.json(colors);
}

async function show(req, res) {
  const color = await Color.findById(req.params.id);
  res.json(color);
}

// Add a color to the database
async function addToFavorites(req, res) {
  const colors = req.body;
  colors.forEach(function (color) {
    if (!Color.findOne({ closest_named_hex: color.name.closest_named_hex })) 
      console.log("color", color)
      const addedColor = new Color({
        name: color.name,
        hex: color.hex,
        rgb: color.rgb,
        hsl: color.hsl,
        hsv: color.hsv,
        xyz: color.xyz,
        cmyk: color.cmyk,
        contrast: color.contrast
      })
      addedColor.save();
      console.log("new added color", addedColor);
    });
  res.json(colors);
}
