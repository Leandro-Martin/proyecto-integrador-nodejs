import jwt from "jsonwebtoken";
import "dotenv/config";
const llave = process.env.JWT_SECRET_KEY;
// Función para generar un token JWT
export const generateToken = (userData) => {
  const usuario = {
    id: userData.id,
    email: userData.email,
  };
  const expira = { expiresIn: "1h" };
  return jwt.sign(usuario, llave, expira);
};

export default generateToken;
