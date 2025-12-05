import productModel from "../models/product.model.js";

export const obtenerProductos = function () {
  return productModel.obtenerProductos();
};

export const obtenerProductoPorId = function (id) {
  return productModel.obtenerProductoPorId(id);
};

export const crearProducto = function (producto) {
  return productModel.guardarProducto(producto)
};

export const guardarProducto = function (producto) {
  return productModel.guardarProducto(producto);
};

export const actualizarProducto = function (id, cambios) {
  return productModel.actualizarProducto(id, cambios);
};

export const eliminarProducto = function (id) {
  return productModel.eliminarProducto(id);
};

const productService = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  guardarProducto,
  actualizarProducto,
  eliminarProducto,
};

export default productService;
