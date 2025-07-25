import express from "express";
import { createUser, login, logout } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", login);
router.post("/logout", logout);

export default router;
