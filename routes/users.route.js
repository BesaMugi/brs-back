import { Router } from "express";
import usersController from "../controllers/users.controller.js";

const router = Router();

router.get('/users', usersController.getUser);

export default router;
