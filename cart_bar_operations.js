function cart_operations() {
  //calculate and print total items added to cart
  document.getElementById("cartTotal").textContent = `${cart.length}`;

  let itemslist = document.querySelector(".products");

  let subTotal = 0;
  let gst_tax = 18; // in percentage (%)
  let total_price = 0;
  itemslist.innerHTML = "";

  extended_cart.forEach((item, index) => {
    itemslist.innerHTML += `
            <div class="product-card">
                <img src="${item.thumbnail}" alt="Product 1" class="product-image mx-2" onclick="HapticOn()">
                <div class="product-info">
                     <h4 class="product-name">${item.title}</h4>
                      <p class="product-price">₹${item.price}</p>
                     <div class="product-quantity">
                             <button class="btn btn-secondary" onclick="quantityHandler('minus', ${item.id}); HapticOn()">-</button>
                            <!-- <input type="number" value="1" class="product-quantity-input"> -->
                            <span id="quantity">${item.stock}</span>
                         <button class="btn btn-secondary" onclick="quantityHandler('plus', ${item.id}); HapticOn()">+</button>
                         <button class="btn btn-danger product-remove" onclick="remove(${item.id},'${item.title}',${index}); HapticOn()">Remove</button>
                     </div>
                </div>
          </div>`;
    subTotal += item.price * item.stock;
  });

  document.getElementById("subtotal").textContent = `₹${subTotal}`;
  document.getElementById("tax").textContent = `${gst_tax}%`;

  total_price = subTotal + subTotal * (gst_tax / 100);
  document.getElementById("total").textContent = `₹${total_price.toFixed(2)}`;



};



function quantityHandler(operation_method,id){
    // alert(`${operation_method} with id ${id} has cart ${cart}`);

    check_before_cart(id, cart, animateCart, operation_method);
    cart_operations();
    check_for_cart();
    
   
}
