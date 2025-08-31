import ProjectService from "./project.service.js";

class ProjectController {
  async create(req, res, next) {
    try {
      const project = await ProjectService.createProject(req.body);
      res.status(201).json({status : true , data : project});
    } catch (error) {
         res.status(500).json({ status: false, error: error.message });
    }
  }

  async getAll(req, res, next) {
    try {
      const projects = await ProjectService.getProjects();
      res.json({status : true , data : projects});
    } catch (error) {
           res.status(500).json({ status: false, error: error.message });
    }
  }

  async getById(req, res, next) {
    try {
      const project = await ProjectService.getProjectById(req.params.id);
      if (!project) return res.status(404).json({ status : false   , error: "Project not found" });
      res.json({status : true , data : project});
    } catch (error) {
          res.status(500).json({ status: false, error: error.message });
    }
  }

  async update(req, res, next) {
    try {
      const project = await ProjectService.updateProject(req.params.id, req.body);
      if (!project) return res.status(404).json({ status : false  , error: "Project not found" });
      res.json({status : true , data : project});
    } catch (error) {
            res.status(500).json({ status: false, error: error.message });
    }
  }

  async delete(req, res, next) {
    try {
      const project = await ProjectService.deleteProject(req.params.id);
      if (!project) return res.status(404).json({status : false  ,  error: "Project not found" });
      res.json({status : true ,  message: "Project deleted" });
    } catch (error) {
         res.status(500).json({ status: false, error: error.message });
    }
  }
}

export default new ProjectController();
