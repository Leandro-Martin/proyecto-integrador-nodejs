import productService from "../services/product.service.js";

export const obtenerProductos = async function (req, res) {
  res.status(200).json(await productService.obtenerProductos());
};

export const obtenerProductoPorId = async function (req, res) {
  const producto = await productService.obtenerProductoPorId(req.params.id);
  if (producto) {
    res.status(200).json(producto);
  } else {
    res.status(404).json({ error: "Producto no encontrado" });
  }
};

export const crearProducto = async function (req, res) {
  const { name, price } = req.body;
  const producto = await productService.crearProducto({ name, price });
  res.status(201).json(producto);
};

export const actualizarProducto = async function (req, res) {
  const { name, price } = req.body;
  if (productService.actualizarProducto(req.params.id, { name, price })) {
    res.status(204).json({ message: "Producto actualizado" });
  } else {
    res.status(404).json({});
  }
};

export const eliminarProducto = async function (req, res) {
  if (await productService.eliminarProducto(req.params.id)) {
    res.status(204).json({});
  } else {
    res.status(404).json({});
  }
};
