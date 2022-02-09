const express = require('express');
const router = express.Router();
const colorsCtrl = require('../../controllers/api/colors');

// GET /api/colors
router.get('/', colorsCtrl.index);
// GET /api/colors/:id
router.get('/:id', colorsCtrl.show);
// POST /api/colors/add
router.post('/add', colorsCtrl.addToFavorites);

module.exports = router;