const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller')

router.get('/', UserController.getUsers);
router.post('/', UserController.createUser);
router.delete('/:id', UserController.deleteUser);
router.patch('/:id', UserController.updateUser);

module.exports = router;
