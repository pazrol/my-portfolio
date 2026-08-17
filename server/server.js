import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { connectDB } from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";
import achievementRoutes from "./routes/achievementRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173"
}));
app.use(express.json({ limit: "100kb" }));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "izairy-portfolio-api" });
});

app.use("/api/projects", projectRoutes);
app.use("/api/achievements", achievementRoutes);
app.use("/api/contact", contactRoutes);

app.use(notFound);
app.use(errorHandler);

connectDB().finally(() => {
  app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
  });
});
