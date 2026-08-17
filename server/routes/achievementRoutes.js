import { Router } from "express";
import { getAchievements, getAchievement, createAchievement } from "../controllers/achievementController.js";

const router = Router();

router.get("/", getAchievements);
router.get("/:id", getAchievement);
router.post("/", createAchievement);

export default router;
