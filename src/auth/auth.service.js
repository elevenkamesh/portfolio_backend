import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class AuthService {
  login(email, password) {
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(
        { email, role: process.env.ADMIN_ROLE },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      return { token, role: process.env.ADMIN_ROLE };
    }
    throw new Error("Invalid credentials");
  }
}

export default new AuthService();
