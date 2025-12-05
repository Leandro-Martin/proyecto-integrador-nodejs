import userService from "../services/user.service.js";
import generateToken from "../utils/token-generator.js";

export const iniciarSesion = async function (req, res) {
  const { email, password } = req.headers;
  if (!email || !password) {
    return res.status(401).json({ error: "Falta email y/o contraseña" });
  }

  const usuario = await userService.getUsuarioPorEmail(email);
  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  const inicio = await userService.autenticar(password, usuario.password);
  if (inicio) {
    const token = generateToken(usuario);
    userService.agregarToken(usuario.id, token);
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: "Contraseña incorrecta" });
  }
};

export const registrarUsuario = async function (req, res) {
  const { name, email, password, role } = req.headers;
  if (!name || !email || !password || !role) {
    return res.status(401).json({ error: "Faltan requisitos" });
  }

  if (await userService.getUsuarioPorEmail(email)) {
    return res.status(409).json({ error: "El email ya está registrado" });
  }

  try {
    await userService.registrarUsuario(name, email, password, role);
    res.status(201).json({ message: "El usuario fue registrado exitosamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};
