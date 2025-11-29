import { db } from "../data/data.js";
import bcrypt from "bcrypt";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
const usersCollection = collection(db, "users");

async function getUsuarios() {
  return await getDocs(usersCollection);
}

export function getUsuarioPorEmail(email) {
  return getUsuarios().then((usuarios) => {
    const u = usuarios.docs.find((doc) => doc.data().email == email);
    return { id: u?.id, ...u?.data() };
  });
}

export function getUsuarioPorToken(token) {
  return getUsuarios().then((usuarios) => {
    const u = usuarios.docs.find((doc) => doc.data().token == token);
    return { id: u?.id, ...u?.data() };
  });
}

export async function registrarUsuario(name, email, password, role) {
  addDoc(usersCollection, {
    name,
    email,
    password: await bcrypt.hash(password, 10),
    role,
  });
}

export async function agregarToken(id, token) {
  return await updateDoc(doc(usersCollection, id), { token });
}

const userModel = {
  getUsuarioPorEmail,
  registrarUsuario,
  agregarToken,
  getUsuarioPorToken,
};

export default userModel;
