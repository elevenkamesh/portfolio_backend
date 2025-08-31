import express from "express";
import AuthController from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", (req, res, next) => AuthController.login(req, res, next));

export default router;
