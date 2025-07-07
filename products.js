const products = [
  { name: "Smartphone", category: "Electronics", price: 19999, image: "smartphone_image.png" },
  { name: "T-Shirt", category: "Clothing", price: 499, image: "https://thebanyantee.com/cdn/shop/files/Baby-Pink-T-shirt_599c6286-77e0-45aa-9ea3-ab92f4e2bea1.jpg?v=1721381182" },
  { name: "Laptop", category: "Electronics", price: 55999, image: "laptop_image.jpg" },
{ name: "Jeans", category: "Clothing", price: 1299, image: "jeans_image.png" },

  { name: "Headphones", category: "Electronics", price: 1499, image: "headphones_image.png" },
];

const categoryFilter = document.getElementById("categoryFilter");
const sortBy = document.getElementById("sortBy");
const productList = document.getElementById("productList");

function renderProducts(filteredProducts) {
  productList.innerHTML = "";
  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>₹${product.price}</p>
      <p>${product.category}</p>
    `;
    productList.appendChild(card);
  });
}

function filterAndSortProducts() {
  let filtered = [...products];

  const selectedCategory = categoryFilter.value;
  const sortOption = sortBy.value;

  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (sortOption === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "price") {
    filtered.sort((a, b) => a.price - b.price);
  }

  renderProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSortProducts);
sortBy.addEventListener("change", filterAndSortProducts);

// Initial render
renderProducts(products);