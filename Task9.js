const apiURL = "https://fakestoreapi.com/products";

let products = [];
let cart = [];
let productsLoaded = false;

const productContainer = document.getElementById("products");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cartCount = document.getElementById("cartCount");
const cartContainer = document.getElementById("cart");
const statsContainer = document.getElementById("stats");
const loading = document.getElementById("loading");

fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        products = data;
        productsLoaded = true;

        displayProducts(products);
        showStatistics(products);
        updateCart();
    })
    .catch((error) => {
        console.log(error);
        loading.innerText = "Failed to Load Products";
    })
    .finally(() => {
        if(productsLoaded){
            loading.innerText = "Products Loaded Successfully";
        }
    });

function displayProducts(productList){
    productContainer.innerHTML = "";

    if(productList.length === 0){
        productContainer.innerHTML = "<p class='empty-message'>No products found.</p>";
        return;
    }

    productList.forEach((product) => {
        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p><strong>$${product.price}</strong></p>
            <p>${product.category}</p>
            <p>Rating: ${product.rating.rate} / 5</p>
            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        `;

        productContainer.append(card);
    });
}

function filterProducts(){
    const searchValue = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const categoryNames = {
        "all": "all",
        "men's clothing": "men's clothing",
        "mens clothing": "men's clothing",
        "women's clothing": "women's clothing",
        "womens clothing": "women's clothing",
        "electronics": "electronics",
        "jewelry": "jewelery",
        "jewelery": "jewelery"
    };

    if(categoryNames[searchValue] === "all"){
        displayProducts(products);
        return;
    }

    if(categoryNames[searchValue]){
        const searchedCategoryProducts = products.filter((product) =>
            product.category === categoryNames[searchValue]
        );

        displayProducts(searchedCategoryProducts);
        return;
    }

    let filteredProducts = products;

    if(category !== "all"){
        filteredProducts = filteredProducts.filter((product) =>
            product.category === category
        );
    }

    filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue)
    );

    displayProducts(filteredProducts);
}

searchInput.addEventListener("input", () => {
    filterProducts();
});

categoryFilter.addEventListener("change", () => {
    filterProducts();
});

function showStatistics(data){
    const totalProducts = data.length;

    const totalPrice = data.reduce((sum, product) =>
        sum + product.price,
        0
    );

    const averagePrice = (totalPrice / totalProducts).toFixed(2);

    const sortedProducts = [...data].sort((a, b) =>
        a.price - b.price
    );

    const lowestPriceProduct = sortedProducts[0];

    const highestPriceProduct =
        sortedProducts[sortedProducts.length - 1];

    const expensiveProduct = data.find((product) =>
        product.id === highestPriceProduct.id
    );

    statsContainer.innerHTML = `
        <div class="stat-card">
            <h3>Total Products</h3>
            <p>${totalProducts}</p>
        </div>

        <div class="stat-card">
            <h3>Average Price</h3>
            <p>$${averagePrice}</p>
        </div>

        <div class="stat-card">
            <h3>Highest Price Product</h3>
            <p>${expensiveProduct.title}</p>
        </div>

        <div class="stat-card">
            <h3>Lowest Price Product</h3>
            <p>${lowestPriceProduct.title}</p>
        </div>
    `;
}

function addToCart(id){
    const product = products.find((item) =>
        item.id === id
    );

    cart.push(product);
    updateCart();
}

function removeFromCart(id){
    let removed = false;

    cart = cart.filter((item) => {
        if(item.id === id && removed === false){
            removed = true;
            return false;
        }

        return true;
    });

    updateCart();
}

function updateCart(){
    cartCount.innerText = cart.length;
    cartContainer.innerHTML = "";

    if(cart.length === 0){
        cartContainer.innerHTML = "<p class='empty-message'>Cart is empty.</p>";
        return;
    }

    let total = 0;

    cart.forEach((item) => {
        total += item.price;

        const div = document.createElement("div");

        div.classList.add("cart-item");

        div.innerHTML = `
            <span>
                ${item.title} - $${item.price}
            </span>

            <button
                class="remove-btn"
                onclick="removeFromCart(${item.id})"
            >
                Remove
            </button>
        `;

        cartContainer.append(div);
    });

    const totalDiv = document.createElement("h3");

    totalDiv.innerText = "Total Price: $" + total.toFixed(2);

    cartContainer.append(totalDiv);
}
