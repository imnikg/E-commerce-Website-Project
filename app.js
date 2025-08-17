
let cart = [];

(()=>{

    check_for_cart = ()=>{
        let icon_font = document.getElementById('icon-font');
        // if(cart.length === 0){
        //     icon_font.textContent = `${cart.length}`;
        //     return null;
        // }
        icon_font.textContent = `${cart.length}`;
    
    };

    check_for_cart();
})();


console.log(products);

let container = document.querySelector('#product-list');

// loop to display products into main page
products.forEach((index) => {
    
    container.innerHTML += `
    <div class="card">
     <img src="${index.thumbnail}" alt="Product 1" class="image" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="HapticOn(); showInDetailProductDetail(${index.id})">
         <div class="content">
            <h4 class="title" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="HapticOn(); showInDetailProductDetail(${index.id})">${index.title}</h4>
                 <p class="price">₹${index.price}</p>
                 <p>${index.description}</p>
                 <button id="add-button" class='btn btn-outline-dark' onclick="addToCart(${index.id}); HapticOn();">Add to Cart</button>
        </div>
    </div>
    `;
});

// function for cart animation
function animateCart(){

    document.querySelector('.fa-cart-shopping').className = 'fa-solid fa-cart-shopping fa-bounce position-relative mx-2';
    setTimeout(()=>{
        document.querySelector('.fa-cart-shopping').className = 'fa-solid fa-cart-shopping position-relative mx-2';
    },1000);

}



// function to add items into cart

function addToCart(id){

    
    
        // console.log(id);
    //    cart.push(id);

       check_before_cart(id,cart,animateCart);

       check_for_cart();

}



// function to display data on cart sidebar

const cart_button = document.querySelector('.fa-cart-shopping');

cart_button.addEventListener('click', ()=>{
    cart_operations();
    
});
