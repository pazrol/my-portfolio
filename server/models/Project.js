import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    technologies: [{ type: String, trim: true }],
    category: {
      type: String,
      enum: ["Web Development", "Mobile Development", "Cybersecurity", "Database", "Academic"],
      default: "Academic"
    },
    image: { type: String, default: "" },
    githubUrl: { type: String, default: "" },
    liveUrl: { type: String, default: "" },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
