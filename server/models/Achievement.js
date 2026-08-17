import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    organization: { type: String, default: "", trim: true },
    description: { type: String, required: true, trim: true },
    year: { type: String, default: "" },
    image: { type: String, default: "" }
  },
  { timestamps: true }
);

export default mongoose.model("Achievement", achievementSchema);
