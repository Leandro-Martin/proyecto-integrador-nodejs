import jwt from "jsonwebtoken";
import "dotenv/config";
import { getUsuarioPorToken } from "../models/user.model.js";

const secret_key = process.env.JWT_SECRET_KEY;

export const authMiddleware = function (req, res, next) {
  const token = req.headers["authorization"].split(" ")[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, secret_key, (err) => {
    if (err) return res.sendStatus(403);
    next();
  });
};

export const adminMiddleware = async function (req, res, next) {
  const token = req.headers["authorization"].split(" ")[1];
  const usuario = await getUsuarioPorToken(token);
  if (usuario.role != "admin") {
    return res.status(401).json({
      message: "Solo administradores pueden usar esta función.",
    });
  }
  next();
};

export default {
  authMiddleware,
  adminMiddleware,
};
