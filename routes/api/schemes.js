const express = require('express');
const router = express.Router();
const schemesCtrl = require('../../controllers/api/schemes');

// GET /api/schemes
router.get('/', schemesCtrl.index);
// GET /api/schemes/:id
router.get('/:id', schemesCtrl.show);

module.exports = router;