import express from "express";
import ProjectController from "./project.controller.js";

const router = express.Router();

// CRUD routes
router.post("/", ProjectController.create);
router.get("/", ProjectController.getAll);
router.get("/:id", ProjectController.getById);
router.put("/:id", ProjectController.update);
router.delete("/:id", ProjectController.delete);

export default router;
