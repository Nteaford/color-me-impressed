const Scheme = require('../../models/color');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const schemes = await Scheme.find({});
  res.json(schemes);
}

async function show(req, res) {
  const scheme = await Scheme.findById(req.params.id);
  res.json(scheme);
}