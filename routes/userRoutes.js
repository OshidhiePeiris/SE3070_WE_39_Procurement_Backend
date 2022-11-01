import express from 'express';
const router = express.Router();
import {
    authUser,
    registerUser
}from '../controllers/userController'

router.route('/').post(registerUser);
router.route('/sign in').get(authUser);

export default router;