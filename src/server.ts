import express from "express";
import authRoutes from "./routes/authRoutes.js";
import todosRoutes from "./routes/todosRoutes.js";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/", todosRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
