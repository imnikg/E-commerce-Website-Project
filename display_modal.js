(function showModal() {
  document.getElementById("space-for-modal").innerHTML = ` <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel" onclick="HapticOn()">Product Name</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="HapticOn()"></button>
                </div>
                <div class="modal-body">
                    <!-- ... -->
                    
                    <div id="carouselExampleAutoplaying" class="carousel slide mt-5 my-5" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    
                            <!-- ... -->
                           
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" onclick="HapticOn()">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" onclick="HapticOn()">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    
                    <hr/>
                    <div class="container mt-3" id="InProductView"></div>
                    <hr/>

                    <div class="card w-100 mx-0">
                    <h5 class="card-header bg-dark text-white" onclick="HapticOn()">Related Products :</h5>
                    <div class="card-body">
                        
                            <!-- carousel inside card -->
                            <div id="carouselExampleAutoplaying2" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner" id="carousel-inner-2">
                                        <div class="carousel-item active">
                                            <img src="..." class="d-block w-100" alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="..." class="d-block w-100" alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="..." class="d-block w-100" alt="...">
                                        </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev" onclick="HapticOn()">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next" onclick="HapticOn()">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                            </button>
                          </div>
                            <!-- end of carousel inside card -->

                    </div>
                </div>
                    <!-- ... -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="HapticOn()">Close</button>
                    
                </div>
            </div>
        </div>
    </div>`;
})();

function showInDetailProductDetail(product_id) {
  products.forEach((item) => {
    if (item.id === product_id) {
      document.querySelector(".carousel-inner").innerHTML = ``;
      let carousel_list = "";
      document.getElementById("staticBackdropLabel").textContent = `${item.title}`;
      item.images.forEach((i, index) => {
        carousel_list += `
                            <div class="carousel-item ${index === 0 ? "active" : ""}">
                            <img src="${i}" class="d-block w-100" alt="..." style="min-height : 20vh; border-radius: 10px">
                            </div>
                            `;
        console.log(i);
      });

      document.querySelector(".carousel-inner").innerHTML = carousel_list;
      document.getElementById("InProductView").innerHTML = `
                                <div class="card w-100 mx-0">
                                    <h5 class="card-header bg-dark text-white" onclick="HapticOn()">${item.brand}</h5>
                                    <div class="card-body">
                                        <h5 class="card-title">${item.title}</h5>
                                        <p class="card-text text-danger">₹${item.price}</p>
                                        <p class="card-text"><b>Ratings :</b> <span class="text-warning-emphasis">★${item.rating}</span></p>
                                        <p class="card-text"><b>Category :</b> <span class="text-warning">${item.category}</span></p>
                                        <p class="card-text"><b>Description : </b> <br><span class="text-secondary-emphasis"> ${item.description}</span></p>
                                        <span id="showAlert2"></span>
                                        <a href="#" class="btn btn-dark" id="add-to-cart-view" onclick="HapticOn(); addToCart(${item.id})">Add to Cart</a>
                                       
                                    </div>
                                </div>
                        `;

            let related_products = '';
            document.querySelector('#carousel-inner-2').innerHTML = '';
            let i = 0;
            products.forEach((item2) => {
                if(item2.category === item.category){

                    if(item2.id !== item.id){

                        // related_products += `
                        // <div class="carousel-item ${i === 0 ? 'active' : ''}">
                        // <img src="${item2.thumbnail}" class="d-block w-100" alt="...">
                        // <div class="carousel-caption d-none d-md-block">
                        // <h5 class="btn text-warning" onclick="HapticOn(); showInDetailProductDetail(${item2.id})">${item2.title}</h5>
                        // </div>
                        // </div>
                        // `;
                        related_products += ` <div class="carousel-item ${i === 0 ? 'active' : ''}">
                                                 <img src="${item2.thumbnail}" class="d-block w-100" alt="..." style="border-radius : 10px">
                                                 <div class="carousel-caption  d-md-block">
                                                 <h5 class="btn bg-dark text-warning" onclick="HapticOn(); showInDetailProductDetail(${item2.id})">${item2.title}</h5>
                                                 </div>
                                                 </div>`;
                        console.log('~~~~~'+item2.thumbnail)
                        i++;
                    }       
                }
            });
            // console.log(related_products)
            document.querySelector("#carousel-inner-2").innerHTML  = related_products;


    }

  });
}



  

  
