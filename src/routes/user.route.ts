import * as express from 'express';
import * as UserController from '../controller/user.controller'
const router = express.Router();

router.get('/', UserController.getUsers);
router.post('/', UserController.createUser);
router.delete('/:id', UserController.deleteUser);
router.patch('/:id', UserController.updateUser);

export default router;
