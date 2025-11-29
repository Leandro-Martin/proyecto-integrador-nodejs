import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registrarUsuario = function (name, email, password, role) {
  return userModel.registrarUsuario(name, email, password, role);
};

export async function autenticar(password, hash) {
  return await bcrypt.compare(password, hash);
}

export async function getUsuarioPorEmail(email) {
  return await userModel.getUsuarioPorEmail(email);
}

export async function agregarToken(usuario, token) {
  return await userModel.agregarToken(usuario, token);
}

const userService = {
  registrarUsuario,
  autenticar,
  getUsuarioPorEmail,
  agregarToken,
};

export default userService;
