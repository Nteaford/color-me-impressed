const express = require('express');
const router = express.Router();
const paletteCtrl = require('../../controllers/api/palette');

// GET /api/palette
router.get('/', paletteCtrl.index);

// POST /api/colors/add
router.post('/add', paletteCtrl.addPalette);
// DELETE /api/colors/:id
router.delete('/:id', paletteCtrl.deletePalette);

module.exports = router;