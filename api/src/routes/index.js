const { Router } = require('express');
const { getQuizWeb } = require('../controllers/users.js')

const router = Router();

router.get('/', getQuizWeb)

module.exports = router;
