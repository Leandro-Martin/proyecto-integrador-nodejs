import express from "express";
import {
  actualizarProducto,
  crearProducto,
  eliminarProducto,
  obtenerProductoPorId,
  obtenerProductos,
} from "../controllers/product.controller.js";
const router = express.Router();

router.get("/", obtenerProductos);

router.post("/create", crearProducto);

router.get("/:id", obtenerProductoPorId);

router.patch("/:id", actualizarProducto);

router.delete("/:id", eliminarProducto);

export default router;
