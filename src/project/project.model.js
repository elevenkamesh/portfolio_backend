import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gitUrl: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
