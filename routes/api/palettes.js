const express = require('express');
const router = express.Router();
const paletteCtrl = require('../../controllers/api/palette');

// GET /api/palette
router.get('/', paletteCtrl.index);

// POST /api/palette/add
router.post('/add', paletteCtrl.addPalette);
// DELETE /api/palette/:id
router.delete('/:id', paletteCtrl.deletePalette);

module.exports = router;