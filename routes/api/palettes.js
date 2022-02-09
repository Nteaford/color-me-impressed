const express = require('express');
const router = express.Router();
const paletteCtrl = require('../../controllers/api/palette');

// GET /api/palette
router.get('/', paletteCtrl.index);
// GET /api/palette/:id
router.get('/:id', paletteCtrl.show);

module.exports = router;