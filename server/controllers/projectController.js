import Project from "../models/Project.js";

export async function getProjects(req, res, next) {
  try {
    const projects = await Project.find().sort({ featured: -1, createdAt: -1 });
    res.json(projects);
  } catch (error) {
    next(error);
  }
}

export async function getProject(req, res, next) {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found." });
    res.json(project);
  } catch (error) {
    next(error);
  }
}

export async function createProject(req, res, next) {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
}
