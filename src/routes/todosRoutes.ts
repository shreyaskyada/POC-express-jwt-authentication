import express from "express";
import { authenticateToken } from "../middleware/authenticateToken.js";
import { getTodos } from "../controllers/todosController.js";

const todosRoutes = express.Router();

todosRoutes.get("/todos", authenticateToken, getTodos);

export default todosRoutes;
