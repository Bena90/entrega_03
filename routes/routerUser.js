import {Router} from 'express';
import { userControllers } from '../controllers/index.controllers.js'
import checkAuth from '../middleware/checkAuth.js';

const router = Router();

router.get("/profile", checkAuth, userControllers.profileUser)
router.post("/login", userControllers.loginUser)
router.post("/register", userControllers.registerUser)

export default router;



