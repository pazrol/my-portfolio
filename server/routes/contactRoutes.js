import { Router } from "express";
import rateLimit from "express-rate-limit";
import { createContact, getContacts } from "../controllers/contactController.js";

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false
});

router.post("/", contactLimiter, createContact);
router.get("/", getContacts);

export default router;
