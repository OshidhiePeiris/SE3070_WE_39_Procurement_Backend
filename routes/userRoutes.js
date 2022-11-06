import express from 'express';
const router = express.Router();
import {
    authUser,
    registerUser,
    getUsers
} from '../controllers/userController.js'

router.route('/').post(registerUser);
router.route('/signin').post(authUser);
router.route('/getusers').get(getUsers)

export default router;