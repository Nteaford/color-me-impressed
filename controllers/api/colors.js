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

// Add a color to favorites
async function addToFavorites(req, res) {
  console.log("controller log req.body", req.body);
  let colors = req.body;
  console.log(colors);
  await Color.addColorsToFavorites(colors);
  

  return;
  
  // const color = await Color.create(req.body)
  // res.json( {
  //   name: req.body.name

  // })
  
  // const favoriteColors = await Colors.getFavorites(req.user._id);
  // The promise resolves to the document, which we already have
  // in the cart variable, so no need to create another variable...
  // await favoriteColors.addColorsToFavorites(req.params.id);
  // res.json(favoriteColors);
}