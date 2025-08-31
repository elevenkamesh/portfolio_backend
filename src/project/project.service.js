import Project from ".project.model.js";

class ProjectService {
  async createProject(data) {
    const project = new Project(data);
    return await project.save();
  }

  async getProjects() {
    return await Project.find();
  }

  async getProjectById(id) {
    return await Project.findById(id);
  }

  async updateProject(id, data) {
    return await Project.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProject(id) {
    return await Project.findByIdAndDelete(id);
  }
}

export default new ProjectService();
