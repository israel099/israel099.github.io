
    document.addEventListener("DOMContentLoaded", function() {
      var selectedProducts = [];
      var count=0;

      // get all product divs
      var productDivs = document.querySelectorAll(".product");

      // add click event listener to each product
      productDivs.forEach(function(productDiv) {
        productDiv.addEventListener("click", function() {
          var productId = productDiv.dataset.productId;
          selectedProducts.push(productId);
          count+=1;
          updateCartNumber(count);
        });
      });

      // store selected product ids in local storage when navigating to cart
      var viewCartLink = document.getElementById("viewCart");
      viewCartLink.addEventListener("click", function(event) {
        event.preventDefault();
        localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
        window.location.href = "cart.html";
      });

        
      var cartNumber = 0; 

      function updateCartNumber(number) {
      cartNumber = number;
      document.getElementById("cartNumber").innerText = cartNumber;
     }

    });
 

    document.addEventListener("DOMContentLoaded", function() {
      var shopNowButton = document.querySelector(".btn");
      var collectionSection = document.getElementById("collection");
    
      shopNowButton.addEventListener("click", function(event) {
        event.preventDefault(); 
    
        // scroll to the collection section smoothly
        collectionSection.scrollIntoView({ behavior: "smooth" });
      });
    });