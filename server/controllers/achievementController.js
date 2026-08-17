import Achievement from "../models/Achievement.js";

export async function getAchievements(req, res, next) {
  try {
    const achievements = await Achievement.find().sort({ year: -1, createdAt: -1 });
    res.json(achievements);
  } catch (error) {
    next(error);
  }
}

export async function getAchievement(req, res, next) {
  try {
    const achievement = await Achievement.findById(req.params.id);
    if (!achievement) return res.status(404).json({ message: "Achievement not found." });
    res.json(achievement);
  } catch (error) {
    next(error);
  }
}

export async function createAchievement(req, res, next) {
  try {
    const achievement = await Achievement.create(req.body);
    res.status(201).json(achievement);
  } catch (error) {
    next(error);
  }
}
