const BASE_URL = 'https://fakestoreapi.com';


async function getAllProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  const products = await response.json(); // Convertimos la respuesta a JSON
  console.log("--- Lista de Todos los Productos ---");
  console.log(products);
}

async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  const product = await response.json();
  console.log(`--- Detalles del Producto ID: ${id} ---`);
  console.log(product);
}

async function postProduct(product) {
  fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
})
  .then(response => response.json())
  .then(data => console.log(data)); 
}

async function deleteProduct(id){
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log(data));
}

const command = process.argv[2];   // El primer comando, ej: 'GET'
const resource = process.argv[3];  // El segundo, ej: 'products' o 'products/15'


if (command.toUpperCase() === 'GET' && resource.toLowerCase() === 'products') {
  getAllProducts();
} 
else if (command.toUpperCase() === 'GET' && resource.toLowerCase().startsWith('products/')) {
  const id = resource.split('/')[1];
  getProductById(id);
} 
else if (command.toUpperCase() === 'POST' && resource.toLowerCase() === 'products'){
  const titulo = process.argv[4];
  const precio = process.argv[5];
  const categoria = process.argv[6];
  const product = {
    title: titulo,
    price: precio,
    category: categoria
  };
  postProduct(product);
}
else if (command.toUpperCase() === 'DELETE' && resource.toLowerCase().startsWith("products/")) {
  const id = resource.split("/")[1];
  deleteProduct(id);
}