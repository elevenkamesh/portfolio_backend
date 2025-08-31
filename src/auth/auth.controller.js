import AuthService from "./auth.service.js";

class AuthController {
  login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }

      const result = AuthService.login(email, password);
      res.json({ message: "Login successful", ...result });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}

export default new AuthController();
