import AuthService from "./auth.service.js";

class AuthController {
  login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ status : false , error: "Email and password are required" });
      }

      const result = AuthService.login(email, password);
      res.json({ status : true  , message: "Login successful", ...result });
    } catch (error) {
      res.status(401).json({ error: error.message , status : false});
    }
  }
}

export default new AuthController();
