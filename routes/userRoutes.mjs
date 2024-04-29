import express from 'express';
var router = express.Router();

import { getUsers, getUser } from '../controllers/userControllers.mjs'

router.get("/users", getUsers);
router.get("/user/:id", getUser);

export default router