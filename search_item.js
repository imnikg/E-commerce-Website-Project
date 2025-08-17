search = (e) => {

  const search_query = document.getElementById("search_value").value;

  if (search_query.length > 0) {
    const search_result = products.filter((index) => {
      if (
        index.brand.toLowerCase().includes(search_query.toLowerCase()) ||
        index.title.toLowerCase().includes(search_query.toLowerCase())
      )
        return { ...index };
    });

    document.getElementById("search_query").textContent = search_query;
    let modal_body = document.querySelector("#modal-body-2");
    let isTrue = true;
    console.log(search_result);
    modal_body.innerHTML = "";
    search_result.forEach((index) => {
      modal_body.innerHTML += `
        <div class="container">
            <div class="card">
             <img src="${index.thumbnail}" alt="Product 1" class="image" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="HapticOn(); showInDetailProductDetail(${index.id})">
                <div class="content">
                     <h4 class="title" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="showInDetailProductDetail(${index.id})">${index.title}</h4>
                          <p class="price">₹${index.price}</p>
                          <p>${index.description}</p>
                          <button id="add-button" class='btn btn-outline-dark' onclick="addToCart(${index.id}); HapticOn()">Add to Cart</button>
                </div>
            </div>
        </div>    
        `;
      console.log(index);
      isTrue = false;
    });

    if (isTrue) {
      modal_body.innerHTML = `
        <div class="alert alert-danger" role="alert">
             <h4 class="alert-heading">Oops! No Result Found</h4>
             <hr>
             <p class="mb-0">
                    Suggestions:
                    <ul>
                        <li> Make sure that all words are spelled correctly.</li>
                        <li> Try different keywords.</li>
                        <li> Try more general keywords.</li>
                    
                    </ul>
             </p>
      </div>`;
    }
  } else {
    document.getElementById("search_query").textContent = "";

    document.querySelector("#modal-body-2").innerHTML = `
        <div class="alert alert-warning" role="alert">
                 <h4 class="alert-heading">Empty String</h4>
        </div>
        `;
  }
};


function getFilterSettings(){
    const min = document.querySelector('input[type="range"]').min;
    const price_range_data = document.querySelector('input[type="range"]').value;
    document.getElementById('price_range_filter_input_from').value = min;
    document.getElementById('price_range_filter_input_to').value = price_range_data;
}