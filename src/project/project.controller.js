import ProjectService from "./project.service.js";

class ProjectController {
  async create(req, res, next) {
    try {
      const project = await ProjectService.createProject(req.body);
      res.status(201).json(project);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const projects = await ProjectService.getProjects();
      res.json(projects);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const project = await ProjectService.getProjectById(req.params.id);
      if (!project) return res.status(404).json({ error: "Project not found" });
      res.json(project);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const project = await ProjectService.updateProject(req.params.id, req.body);
      if (!project) return res.status(404).json({ error: "Project not found" });
      res.json(project);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const project = await ProjectService.deleteProject(req.params.id);
      if (!project) return res.status(404).json({ error: "Project not found" });
      res.json({ message: "Project deleted" });
    } catch (error) {
      next(error);
    }
  }
}

export default new ProjectController();
