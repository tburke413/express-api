import express from 'express';
import { createUser, getUsers, getUserById, deleteUserById, updateUserById } from '../controllers/users.js';

const router = express.Router();

// all routes in here start with /users
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUserById);

router.put('/:id',updateUserById);

export default router;