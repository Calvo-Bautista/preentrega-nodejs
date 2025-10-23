// La URL base de la API que vamos a usar
const BASE_URL = 'https://fakestoreapi.com';

// --- Funciones para interactuar con la API ---

// Función para obtener TODOS los productos
async function getAllProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  const products = await response.json(); // Convertimos la respuesta a JSON
  console.log("--- Lista de Todos los Productos ---");
  console.log(products);
}

// Función para obtener UN producto por su ID
async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  const product = await response.json();
  console.log(`--- Detalles del Producto ID: ${id} ---`);
  console.log(product);
}

// --- Lógica Principal para leer los comandos ---

// 1. Capturamos los argumentos que se escriben en la terminal.
//    process.argv.slice(2) nos da un array como ['GET', 'products']
const args = process.argv.slice(2);

// 2. Guardamos los comandos en variables para que sea más claro.
const command = args[0];   // El primer comando, ej: 'GET'
const resource = args[1];  // El segundo, ej: 'products' o 'products/15'

// 3. Decidimos qué función llamar según lo que se escribió.
if (command === 'GET' && resource === 'products') {
  getAllProducts();
} else if (command === 'GET' && resource.startsWith('products/')) {
  // Si el recurso es 'products/15', lo separamos para obtener solo el '15'
  const id = resource.split('/')[1];
  getProductById(id);
} else {
  // Si el comando no es válido, mostramos una ayuda
  console.log('Comando no reconocido. Por favor, utiliza:');
  console.log('npm run start GET products');
  console.log('npm run start GET products/<id>');
}