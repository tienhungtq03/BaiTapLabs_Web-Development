// Cart 
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function addToCart(product) {
  let cart = getCart();
  let existing = cart.find(item => item.name === product.name);

  if (existing) {
    existing.quantity += product.quantity;
  } else {
    cart.push(product);
  }

  saveCart(cart);
}

// Uodate header cart 
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.querySelectorAll(".cart-count").forEach(span => {
    span.textContent = count;
  });
}

// Cart page
function renderCart() {
  const tbody = document.querySelector("#cart-table tbody");
  if (!tbody) return; // Only run on cart.html

  tbody.innerHTML = "";
  const cart = getCart();
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="${item.image}" alt="${item.name}" width="60"> ${item.name}</td>
      <td>${item.price.toLocaleString()} ₫</td>
      <td>${item.quantity}</td>
      <td>${subtotal.toLocaleString()} ₫</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("total").textContent = `Total: ${total.toLocaleString()} ₫`;
}

// Event listerners
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderCart();

  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-name");
      const price = parseInt(btn.getAttribute("data-price"));
      const image = btn.getAttribute("data-image");
      const qty = parseInt(document.getElementById("quantity")?.value || 1);

      addToCart({ name, price, image, quantity: qty });
      alert(`${name} added to cart!`);
    });
  });
});
