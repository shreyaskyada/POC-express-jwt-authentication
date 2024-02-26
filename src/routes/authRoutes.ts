import express from "express";
import { login, logout, refreshToken } from "../controllers/authController.js";
import { authenticateToken } from "../middleware/authenticateToken.js";

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/token", authenticateToken, refreshToken);
authRoutes.delete("/logout", logout);

export default authRoutes;
