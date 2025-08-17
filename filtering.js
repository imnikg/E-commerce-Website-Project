var filter_form = document.getElementById('filter-form');

showProducts = (min_price_range,price_range_value,customerRatingValues,categoryValues) =>{
       
        let filtered_datas = products.filter((i)=>{
                                   if(i.price >= min_price_range && i.price <= price_range_value){
                                        return i;
                                   }
                               }).filter((index)=>{
                                  
                               
                                        if(customerRatingValues.length > 0){
                                            console.log('yes array is not empty');
                                            return customerRatingValues.some((eachRating)=>{
                                                if(index.rating >= eachRating){
                                                            return index;
                                                    }
                                            });
                                        }
                                   
                            });
                           

      /*  let filtered_datas = products.filter((product)=>{
                let fprice = true;
                let fratings = true; 
                let fcategory = true;

                fprice = product.price >= min_price_range && product.price <= price_range_value;
                        
                 
               if (customerRatingValues.length > 0){
                    console.log('length bada hai');
                   fratings = customerRatingValues.some((eachRating) => product.rating >= eachRating);
                   if(fratings){
                    return true;
                   }
               }
                console.log(`category input : ${categoryValues}`);
                return fprice && fratings;
        });*/

                // document.querySelector('#modal-body-2').innerHTML = `
                //             <div class="container">
                //             <div class="card">
                //             <img src="${i.thumbnail}" alt="Product 1" class="image">
                //                 <div class="content">
                //                     <h4 class="title">${i.title}</h4>
                //                         <p class="price">₹${i.price}</p>
                //                         <p>${i.description}</p>
                //                         <button id="add-button" class='btn btn-outline-dark' onclick="addToCart(${i.id})">Add to Cart</button>
                //                 </div>
                //             </div>
                //         </div>  `;
                console.log(filtered_datas);
}



filter_form.addEventListener('submit',(event)=>{
    
    const min_price_range = document.getElementById('priceRange').min;
    const price_range_value = document.getElementById('priceRange').value;
    


    const customerRatingTags = document.querySelectorAll('.customerRatings-for-filtering');
    const categoryTags = document.querySelectorAll('.categories-for-filtering');

    var customerRatingValues = [];
    var categoryValues = [];

              customerRatingTags.forEach((eachNode)=>{
                    if(eachNode.checked){
                        customerRatingValues.push(eachNode.value);
                    }
                    
              });

              categoryTags.forEach((eachNode)=>{
                    if(eachNode.checked){
                        categoryValues.push(eachNode.value);
                    }
              });

        showProducts(min_price_range,price_range_value,customerRatingValues,categoryValues);      
});