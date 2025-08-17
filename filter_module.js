function showProducts(minPrice, maxPrice, customerRatings, categories) {
  const filteredProducts = products.filter((product) => {
    // Filter by price range
    // const productPrice = product.price - (product.price * product.discountPercentage) / 100;
    if (product.price < minPrice || product.price > maxPrice) {
      return false;
    }

    // Filter by customer ratings
    if (
      customerRatings.length > 0 &&
      !customerRatings.includes(Math.floor(product.rating))
    ) {
      return false;
    }

    // Filter by categories
    if (categories.length > 0 && !categories.includes(product.category)) {
      return false;
    }

    return true;
  });

  // Call a function to update the UI with the filtered products (e.g., renderProducts(filteredProducts))
  renderProducts(filteredProducts);
}

// Render the products to the UI (replace this with your actual rendering logic)
function renderProducts(filteredProducts) {
    let isExist = false;
  let render_filtered_data = document.getElementById("modal-body-2");
  render_filtered_data.innerHTML = "";

  filteredProducts.forEach((product) => {
    render_filtered_data.innerHTML += `
             <div class="card">
                     <img src="${product.thumbnail}" alt="Product 1" class="image" onclick="HapticOn()">
                    <div class="content">
                       <h4 class="title">${product.title}</h4>
                        <p class="price">₹${product.price}</p>
                        <p class="rating"><b>Rating:</b> ★${product.rating}</p>
                        <p class="category"><b>Category:</b> ${product.category}</p>
                        <p>${product.description}</p>
                       <button id="add-button" class='btn btn-outline-dark' onclick="addToCart(${product.id}); HapticOn();">Add to Cart</button>
                  </div>
             </div>
             `;
             isExist = true;
  });
  console.log(filteredProducts);

  if(!isExist){
                render_filtered_data.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">Oops! No Result Found</h4>
                    <hr>
                    <p class="mb-0">
                            Filter Conditions:
                            <ul>
                                <li> Make sure that all filters applied correctly.</li>
                                <li> Try to adjust the filter criteria.</li>
                                <li> Try to search manually.</li>
                            
                            </ul>
                    </p>
            </div>`;
  }
}

// Add an event listener for the form submission
const filterForm = document.getElementById("filter-form");
filterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the selected filter values
  const minPrice = parseFloat(
    document.getElementById("price_range_filter_input_from").value
  );
  const maxPrice = parseFloat(
    document.getElementById("price_range_filter_input_to").value
  );

  const customerRatingTags = document.querySelectorAll(
    ".customerRatings-for-filtering"
  );
  const categoryTags = document.querySelectorAll(".categories-for-filtering");

  const customerRatingValues = Array.from(customerRatingTags)
    .filter((node) => node.checked)
    .map((node) => parseInt(node.value));

  const categoryValues = Array.from(categoryTags)
    .filter((node) => node.checked)
    .map((node) => node.value);

  // Show filtered products
  showProducts(minPrice, maxPrice, customerRatingValues, categoryValues);
});
