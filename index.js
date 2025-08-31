// index.js
import express from "express";
import dotenv from "dotenv";
import projectRoutes from "./src/project/project.routes.js";
import authRoutes from "./src/auth/auth.routes.js";
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON requests

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);


// Basic route
app.get("/", (req, res) => {
  res.send("Node.js Backend is running 🚀");
});

// Example API route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is healthy ✅" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
