let extended_cart = [];

// function check_before_cart(cart){


//     products.forEach((item)=>{

//           let cart_item = cart.find((id) => id === item.id);
          
//           if(cart_item){
              
//                 console.log(cart_item);
//                 let extended_cart_item = extended_cart.find((product) => product.id === cart_item);

//                 // alert(extended_cart_item)
//                 if(extended_cart_item){
//                     //    extended_cart.cart_item.stock++;
//                     extended_cart_item.stock++
                       
//                 }else{
//                     extended_cart.push({...item, stock : 1});
                   
//                 }
//           }
//     });
//     console.log('extended cart : ',extended_cart);
    
//     return true;
// }


// function check_before_cart(cart) {
//     cart.forEach((cart_item_id) => {
//         let product = products.find((item) => item.id === cart_item_id);

//         if (product) {
//             let extended_cart_item = extended_cart.find((item) => item.id === product.id);

//             if (extended_cart_item) {
//                 // Increment the stock of the existing item in extended_cart
//                 extended_cart_item.stock++;
//             } else {
//                 // Clone the product to avoid modifying the original products array
//                 let clonedProduct = { ...product, stock: 1 };
//                 extended_cart.push(clonedProduct);
//             }
//         }
//     });

//     console.log('extended cart:', extended_cart);
//     return true;
// }




function check_before_cart(cart_item_id,cart,animateCart,quantity_operation_method) {
    let product = products.find((item) => item.id === cart_item_id);

    if (product) {
        let extended_cart_item = extended_cart.find((item) => item.id === product.id);

        if (extended_cart_item) {
            
            console.log('quantity method : ',quantity_operation_method);
            check_for_stock_quantity(extended_cart_item.id, extended_cart_item.stock, extended_cart_item, cart, cart_item_id, animateCart,quantity_operation_method);
            console.log(`cart : ${extended_cart_item} and its id : ${extended_cart_item.id} has stock quantity : ${extended_cart_item.stock}`);
        } else {

            animateCart(); // callback function for cart icon animation

            cart.push(cart_item_id);

            // Clone the product to avoid modifying the original products array
            let clonedProduct = { ...product, stock: 1 };
            extended_cart.push(clonedProduct);
        }

        console.log('extended cart:', extended_cart);
        return true;
    } else {
        console.log('Product not found in the products array');
        return false;
    }
}


function check_for_stock_quantity(id, stocks, extended_cart_item, cart, cart_item_id, animateCart, quantity_operation_method){
            products.forEach((item)=>{
                   
                if(item.id === id){
                    console.log('quantity',quantity_operation_method);

                    // switch statement for checking the quantity Increment/Decrement method for operation [Note : This method is not like function wala..haha]
                    switch(quantity_operation_method){
                        
                        case "plus" :
                            if(stocks < item.stock){
                                console.log(`stocks ${stocks} and in inventory is ${item.stock}`);
                                
                                // push id to cart
                                cart.push(cart_item_id);
                                
                                // Increment the stock of the existing item in extended_cart
                                extended_cart_item.stock++;
                            }else{
                                document.getElementById('showAlert_in_offcanvas').innerHTML = `
                                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                    <div>We're sorry! Only ${item.stock} unit(s) allowed for <span class="text-info"> ${item.title} </span> </div>
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="HapticOn()"></button>
                                    </div>
                                `;
                                
                            };
                            break;

                        case "minus" :
                            if(stocks > 1){
                                console.log(`stocks ${stocks} and in inventory is ${item.stock}`);

                                // delete id from cart
                                cart.splice(cart.indexOf(cart_item_id),1);
                                

                                // Decrement the stock of the existing item from the extended_cart
                                extended_cart_item.stock--;

                            }else{
                                document.getElementById('showAlert_in_offcanvas').innerHTML = `
                                <div class="alert alert-info alert-dismissible fade show" role="alert">
                                    <div>Hey😶! You already have least quantity as 1 for <span class="text-danger"> ${item.title} </span> if you don't want this item you can remove it from Cart </div>
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="HapticOn()"></button>
                                    </div>
                                `;
                            };
                            break;

                        default :
                                if(stocks < item.stock){
                                    console.log(`stocks ${stocks} and in inventory is ${item.stock}`);
                                    
                                    animateCart();
                                    
                                    // push id to cart
                                    cart.push(cart_item_id);
                                    
                                    // Increment the stock of the existing item in extended_cart
                                    extended_cart_item.stock++;
                                }else{
                                    document.getElementById('showAlert').innerHTML = `
                                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                    <div>We're sorry! Only ${item.stock} unit(s) allowed in each order</div>
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="HapticOn()"></button>
                                    </div>
                                    `;
                                    document.getElementById('showAlert2').innerHTML = `
                                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                    <div>We're sorry! Only ${item.stock} unit(s) allowed in each order</div>
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="HapticOn()"></button>
                                    </div>
                                    `;
                                    
                                    
                                };
                                break;
                    }
                }
            });
            return extended_cart_item;
}