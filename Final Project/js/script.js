// Delivery Form Validation
const deliveryForm = document.getElementById("deliveryForm");
if (deliveryForm) {
  deliveryForm.addEventListener("submit", (e) => {
    const postal = document.getElementById("postal").value;
    if (isNaN(postal)) {
      alert("Postal code must be numeric.");
      e.preventDefault();
    }
  });
}

// Checkout Form Validation
const checkoutForm = document.getElementById("checkoutForm");
if (checkoutForm) {
  const cardNumber = document.getElementById("cardnumber");
  const expiry = document.getElementById("expiry");
  const cvv = document.getElementById("cvv");
  const sameAsDelivery = document.getElementById("sameAsDelivery");
  const billingSection = document.getElementById("billingSection");

  // Toggle billing address
  sameAsDelivery.addEventListener("change", () => {
    billingSection.classList.toggle("hidden", sameAsDelivery.checked);
  });

  // Format card number (add spaces every 4 digits)
  cardNumber.addEventListener("input", () => {
    let value = cardNumber.value.replace(/\D/g, "");
    value = value.replace(/(.{4})/g, "$1 ").trim();
    cardNumber.value = value;
  });

  checkoutForm.addEventListener("submit", (e) => {
    const rawCard = cardNumber.value.replace(/\s/g, "");
    if (isNaN(rawCard) || rawCard.length < 13 || rawCard.length > 19) {
      alert("Invalid card number.");
      e.preventDefault();
      return;
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry.value)) {
      alert("Invalid expiry format. Use MM/YY.");
      e.preventDefault();
      return;
    }

    if (isNaN(cvv.value)) {
      alert("CVV must be numeric.");
      e.preventDefault();
      return;
    }

    alert("Payment successful! Thank you for your order.");
  });
}
