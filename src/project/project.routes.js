import express from "express";
import ProjectController from "./project.controller.js";
import { authenticate, authorize } from "../auth/auth.middleware.js";

const router = express.Router();

// CRUD routes with middleware
router.post("/", authenticate, authorize("admin"), ProjectController.create);
router.get("/", ProjectController.getAll); // public (optional, can protect too)
router.get("/:id", ProjectController.getById); // public (optional)
router.put("/:id", authenticate, authorize("admin"), ProjectController.update);
router.delete("/:id", authenticate, authorize("admin"), ProjectController.delete);

export default router;