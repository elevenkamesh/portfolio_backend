import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ status : false , error: "Invalid token" });
    req.user = user;
    next();
  });
};

export const authorize = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ status : false ,  error: "Forbidden: insufficient role" });
    }
    next();
  };
};
