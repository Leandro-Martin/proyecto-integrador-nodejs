import express from "express";
import cors from "cors";
import productRouter from "./src/routes/product.router.js";
import userRouter from "./src/routes/user.router.js";
import {
  authMiddleware,
  adminMiddleware
} from "./src/middlewares/auth.middleware.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.use("/api/products", authMiddleware, adminMiddleware, productRouter);
app.use("/auth", userRouter);

app.use((_req, res, _next) => {
  res.status(404).send("Recurso no encontrado o ruta inválida");
});
