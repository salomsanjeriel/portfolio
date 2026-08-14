const express = require('express');
const router = express.Router();
const { getCertificates } = require('../controllers/certificateController');

router.route('/').get(getCertificates);

module.exports = router;
