import express from "express";
import {
  iniciarSesion,
  registrarUsuario,
} from "../controllers/user.controller.js";
const router = express.Router();

router.post("/register", registrarUsuario);

router.post("/login", iniciarSesion);

export default router;
