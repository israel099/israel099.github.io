document.addEventListener("DOMContentLoaded", function() {
  var selectedProducts = JSON.parse(localStorage.getItem("selectedProducts"));

  if (selectedProducts && selectedProducts.length > 0) {
    var cartContainer = document.getElementById("cartContainer");

    var productDetails = {
      "product1": { "name": "Plant Dish", "price": 15.00, "image": "image/1.PNG", "description": "A delicious plant-based dish." },
      "product2": { "name": "Wing on the Grill", "price": 12.00, "image": "image/2.PNG", "description": "Grilled wings cooked to perfection." },
      "product3": { "name": "Salmon Dish", "price": 61.00, "image": "image/3.PNG", "description": "Freshly prepared salmon dish." },
      "product4": { "name": "Sweet Potato Soup", "price": 18.00, "image": "image/4.PNG", "description": "A warm and comforting sweet potato soup." },
      "product5": { "name": "Caesar Salad", "price": 31.00, "image": "image/5.PNG", "description": "Fresh and crispy Caesar salad." },
      "product6": { "name": "Margherita Pizza", "price": 55.00, "image": "image/6.PNG", "description": "Classic Margherita pizza with fresh mozzarella and basil." },
      "product7": { "name": "Cheese Toast", "price": 23.00, "image": "image/7.PNG", "description": "Warm and cheesy toast." },
      "product8": { "name": "Fried Egg", "price": 10.00, "image": "image/8.PNG", "description": "Perfectly fried egg." },
      "product9": { "name": "Fruit Party Dessert", "price": 43.00, "image": "image/9.png", "description": "A delightful fruit party dessert." }
    };

    //create the items in list
    selectedProducts.forEach(function(productId) {
      var product = productDetails[productId];

      var productDiv = document.createElement("div");
      productDiv.classList.add("cart-item");

      var productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.name;
      productDiv.appendChild(productImage);

      var productInfo = document.createElement("div");

      var productName = document.createElement("h2");
      productName.textContent = product.name;
      productInfo.appendChild(productName);

      var productDescription = document.createElement("p");
      productDescription.textContent = product.description;
      productInfo.appendChild(productDescription);

      var productPrice = document.createElement("p");
      productPrice.classList.add("price");
      productPrice.textContent = "$" + product.price.toFixed(2);
      productInfo.appendChild(productPrice);

      productDiv.appendChild(productInfo);
      cartContainer.appendChild(productDiv);
    });

    var totalPrice = selectedProducts.reduce(function(total, productId) {
      return total + productDetails[productId].price;
    }, 0);

    var totalPriceElement = document.createElement("p");
    totalPriceElement.classList.add("cart-total");
    totalPriceElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
    cartContainer.appendChild(totalPriceElement);

    // Create a checkout button
    var checkoutButton = document.createElement("button");
    checkoutButton.textContent = "Checkout";
    checkoutButton.addEventListener("click", function() {
      var paymentSection = document.getElementById("ttlink");
      paymentSection.scrollIntoView({ behavior: "smooth" });
    });
    cartContainer.appendChild(checkoutButton);
  } else {
    var emptyCartMessage = document.createElement("p");
    emptyCartMessage.textContent = "Your cart is empty.";
    cartContainer.appendChild(emptyCartMessage);
  }

  localStorage.removeItem("selectedProducts");
});
  



  ///////////

  document.addEventListener("DOMContentLoaded", function() {
    var paymentForm = document.getElementById("paymentForm");
  
    paymentForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var cardNumber = document.getElementById("cardNumber").value;
      var expiryDate = document.getElementById("expiryDate").value;
      var cvv = document.getElementById("cvv").value;
  
      if (!isValidCardNumber(cardNumber)) {
        alert("Please enter a valid card number.");
        return;
      }
  
      if (!isValidExpiryDate(expiryDate)) {
        alert("Please enter a valid expiry date.");
        return;
      }
  
      if (!isValidCVV(cvv)) {
        alert("Please enter a valid CVV.");
        return;
      }
  
      processPayment(cardNumber, expiryDate, cvv);
    });
  
    function isValidCardNumber(cardNumber) {
      return /^\d{16}$/.test(cardNumber);
    }
  
    function isValidExpiryDate(expiryDate) {
      return /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate);
    }
  
    function isValidCVV(cvv) {
      return /^\d{3,4}$/.test(cvv);
    }
  
    function processPayment(cardNumber, expiryDate, cvv) {
      console.log("Processing payment...");
      console.log("Card Number:", cardNumber);
      console.log("Expiry Date:", expiryDate);
      console.log("CVV:", cvv);
      console.log("Payment processed successfully!");
      alert("Payment processed successfully!");
      window.location.href = "goodbuy.html";
    }
  
    // limit card number to 16 digits
    var cardNumberInput = document.getElementById("cardNumber");
    cardNumberInput.addEventListener("input", function(event) {
      var input = event.target;
      var trimmedValue = input.value.replace(/\s/g, '');
  
      if (trimmedValue.length > 16) {
        input.value = trimmedValue.slice(0, 16);
      }
    });
  
    // auto format expiry date and limit to 4 char
    var expiryDateInput = document.getElementById("expiryDate");
    expiryDateInput.addEventListener("input", function(event) {
      var input = event.target;
      var trimmedValue = input.value.replace(/\s/g, '');
  
      if (trimmedValue.length > 4) {
        input.value = trimmedValue.slice(0, 5);
      } else if (trimmedValue.length === 2 && input.value.length === 2) {
        input.value += '/';
      }
    });
  
    // limit CVV to 4 digits
    var cvvInput = document.getElementById("cvv");
    cvvInput.addEventListener("input", function(event) {
      var input = event.target;
      var trimmedValue = input.value.replace(/\s/g, '');
  
      if (trimmedValue.length > 4) {
        input.value = trimmedValue.slice(0, 4);
      }
    });
  });
  
  