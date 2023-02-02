const router = require('express').Router();
import { getUsers, postUser } from '../controllers/userController';

router
    .get('/', getUsers)
    .post('/', postUser);

export default router;