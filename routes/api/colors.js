const express = require('express');
const router = express.Router();
const colorsCtrl = require('../../controllers/api/colors');

// GET /api/colors
router.get('/', colorsCtrl.index);
// POST /api/colors/add
router.post('/add', colorsCtrl.addToFavorites);
// DELETE /api/colors/:id
router.delete('/:id', colorsCtrl.deleteColor);


module.exports = router;