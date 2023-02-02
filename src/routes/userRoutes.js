const router = require('express').Router();
const { getUsers, postUser } = require('../controllers/userController');

router.get('/', getUsers)
    .post('/', postUser);

module.exports = router;