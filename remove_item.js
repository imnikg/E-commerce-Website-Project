remove = (id, item_name, index_for_extended_cart) =>{
    console.log('eentered in remove()');

    cart =  cart.filter((num) => num != id);
    extended_cart.splice(index_for_extended_cart,1);
    

    document.getElementById('showAlert_in_offcanvas').innerHTML = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <div>Oh😮No! You have removed <span class="text-dark"> ${item_name} </span>, Rethink before taking worst decision🥶</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="HapticOn()"></button>
        </div>
    `;
    cart_operations();
    check_for_cart();
}