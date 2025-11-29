import { db } from "../data/data.js";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
const productsCollection = collection(db, "products");

export async function obtenerProductos() {
  const querySnapshot = await getDocs(productsCollection);
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
}

export async function obtenerProductoPorId(id) {
  const productDoc = await getDoc(doc(productsCollection, id));
  if (productDoc.exists()) {
    return productDoc.data();
  } else {
    return null;
  }
}

export async function guardarProducto(product) {
  await addDoc(productsCollection, product);
}

export async function actualizarProducto(id, cambios) {
  return await updateDoc(doc(productsCollection, id), cambios);
}

export async function eliminarProducto(id) {
  await deleteDoc(doc(productsCollection, id));
}

const productModel = {
  obtenerProductos,
  obtenerProductoPorId,
  guardarProducto,
  actualizarProducto,
  eliminarProducto,
};

export default productModel;
