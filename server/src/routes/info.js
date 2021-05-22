const router = require('express').Router();
const { get } = require('../controllers/info');

router.post('/', get);

module.exports = router;
