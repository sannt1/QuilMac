// // Datos de productos
const products = [
  //IPAD
  { id: 1, name: "iPad Pro", category: "iPad", price: 799 },
  { id: 2, name: "iPad Air", category: "iPad", price: 599 },
  { id: 3, name: "iPad (8th generation)", category: "iPad", price: 300 },
  { id: 4, name: "iPad Air (4th generation)", category: "iPad", price: 500 },
  { id: 5, name: "iPad Pro 11-inch", category: "iPad", pprice: 800 },
  { id: 6, name: "iPad Pro 12.9-inch", category: "iPad", price: 1000 },
  { id: 7, name: "iPad Mini (5th generation)", category: "iPad", price: 400 },
  { id: 8, name: "iPad (9th generation)", category: "iPad", price: 350 },
  { id: 9, name: "iPad Air (5th generation)", category: "iPad", price: 600 },
  { id: 10, name: "iPad Pro 11-inch (3rd generation)", category: "iPad", price: 900 },
  { id: 11, name: "iPad Pro 12.9-inch (5th generation)", category: "iPad", price: 1200 },
  //MAC
  { id: 12, name: "MacBook Pro", category: "Mac", price: 1999 },
  { id: 13, name: "MacBook Air", category: "Mac", price: 1000 },
  { id: 14, name: "MacBook Pro (13-inch)", category: "Mac", price: 1500 },
  { id: 15, name: "MacBook Pro (16-inch)", category: "Mac", price:2000 },
  { id: 16, name: "iMac", category: "Mac", price: 1200 },
  { id: 17, name: "iMac Pro", category: "Mac", price: 5000 },
  { id: 18, name: "Mac mini", category: "Mac", price: 800 },
  //IPHONE
  { id: 19, name: "iPhone 8 Plus", category: "iPhone" , price: 200 },
  { id: 20, name: "iPhone X", category: "iPhone" , price: 400 },
  { id: 21, name: "iPhone XR", category: "iPhone" , price: 500 },
  { id: 22, name: "iPhone XS", category: "iPhone" , price: 600 },
  { id: 23, name: "iPhone XS Max", category: "iPhone" , price: 700 },
  { id: 24, name: "iPhone 11", category: "iPhone", price: 800 },
  { id: 25, name: "iPhone 11 Pro",  category: "iPhone", price: 1000 },
  { id: 26, name: "iPhone 11 Pro Max", category:"iPhone", price: 1100 },
  { id: 27, name: "iPhone SE", category: "iPhone", price: 399 },
  { id: 28, name: "iPhone 12", category: "iPhone", price: 999 },
  { id: 29, name: "iPhone 12 Mini", category: "iPhone", precio: 1000 },
  { id: 30, name: "iPhone 12 Pro", category: "iPhone", precio: 1300 },
  { id: 31, name: "iPhone 12 Pro Max", category: "iPhone", precio: 1400 },
  { id: 32, name: "iPhone 13", category: "iPhone", precio: 1500 },
  { id: 33, name: "iPhone 13 Mini", category: "iPhone", precio: 1300 },
  { id: 34, name: "iPhone 13 Pro", category: "iPhone", precio: 1600 },
  { id: 35, name: "iPhone 13 Pro Max", category: "iPhone", precio: 1700 },
  { id: 36, name: "iPhone 14", category: "iPhone", precio: 1800 },
  { id: 37, name: "iPhone 14 Plus", category: "iPhone", precio: 1900 },
  { id: 38, name: "iPhone 14 Pro", category: "iPhone", precio: 2000 },
  { id: 39, name: "iPhone 14 Pro Max", category: "iPhone", precio: 2200 },
];
// Función para crear opciones en el selector de categorías
function createCategoryOptions() {
  // Obtener la lista de categorías en el DOM
  const categoryList = document.getElementById("categoryList");

  // Crear las opciones de categorías
  const categories = ["iPhone", "Mac", "iPad"];
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryList.appendChild(option);
  });
}

// Función para filtrar los productos por categoría
// Función para cargar los productos del carrito en el DOM
function filterProductsByCategory(category) {
  function loadCartItems() {
      const cartList = document.getElementById("cartList");
      cartList.innerHTML = "";
  
      // Obtener el carrito de compras del almacenamiento
      let cart = localStorage.getItem("cart");
      if (!cart) {
      // Si el carrito no existe, inicializarlo como un array vacío
      cart = [];
      } else {
      // Si el carrito existe, convertirlo en un array de objetos
      cart = JSON.parse(cart);
      }
  
      // Recorrer los productos del carrito y agregarlos al DOM
      cart.forEach((product) => {
      const listItem = document.createElement("li");
      listItem.textContent = product.name + " - $" + product.price;
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Quitar";
      removeButton.addEventListener("click", function () {
          removeCartItem(product.id);
      });
  
      listItem.appendChild(removeButton);
      cartList.appendChild(listItem);
      });
  }
      
  // Función para quitar un producto del carrito
  function removeCartItem(productId) {
      // Obtener el carrito de compras del almacenamiento
      let cart = localStorage.getItem("cart");
      if (!cart) {
      // Si el carrito no existe, inicializarlo como un array vacío
      cart = [];
      } else {
      // Si el carrito existe, convertirlo en un array de objetos
      cart = JSON.parse(cart);
      }

      cart = cart.filter((product) => product.id !== productId);
  
      // Actualizar el carrito en el almacenamiento
      localStorage.setItem("cart", JSON.stringify(cart));
  
      // Recargar los productos del carrito en el DOM
      loadCartItems();
  }
  
  // Configurar evento de carga de página para cargar los productos y el carrito en el DOM
  document.addEventListener("DOMContentLoaded", function () {
      createCategoryOptions();
      filterProductsByCategory("iPhone");
      loadCartItems();
  });
  // Obtener la lista de productos en el DOM
  const productList = document.getElementById("productList");

  // Limpiar la lista de productos
  productList.innerHTML = "";

  // Filtrar los productos por categoría
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

// Recorrer los productos filtrados y agregarlos al DOM
filteredProducts.forEach((product) => {
const listItem = document.createElement("li");
const productName = document.createElement("span");
productName.textContent = product.name + " - $" + product.price;

  const selectButton = document.createElement("button");
  selectButton.textContent = "Seleccionar";
  selectButton.addEventListener("click", function () {
  addToCart(product);
  });

  listItem.appendChild(productName);
  listItem.appendChild(selectButton);
  productList.appendChild(listItem);
});
}

// Configurar evento de cambio para el selector de categorías
const categoryList = document.getElementById("categoryList");
if (categoryList) {
 categoryList.addEventListener("change", function () {
  const selectedCategory = categoryList.value;
  filterProductsByCategory(selectedCategory);
});
}

// Cargar los productos en el DOM al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  createCategoryOptions();
  filterProductsByCategory("iPhone");
});

// Función para agregar un producto al carrito
function addToCart(product) {
  // Obtener el carrito de compras del almacenamiento
  let cart = localStorage.getItem("cart");
  if (!cart) {
    // Si el carrito no existe, inicializarlo como un array vacío
    cart = [];
  } else {
    // Si el carrito existe, convertirlo en un array de objetos
    cart = JSON.parse(cart);
  }

  // Agregar el producto al carrito
  cart.push(product);

  // Actualizar el carrito en el almacenamiento
  localStorage.setItem("cart", JSON.stringify(cart));

  // Actualizar la visualización del carrito en el DOM
  const cartList = document.getElementById("cartList");
  const listItem = document.createElement("li");
  listItem.textContent = product.name + " - $" + product.price;
  cartList.appendChild(listItem);

  // Mostrar un mensaje de éxito
  alert("El producto ha sido agregado al carrito.");
}