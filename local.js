const addProduct = () => {
    const productName = document.getElementById('product-name');
    const product = productName.value;
    productName.value = '';
    const productQuantity = document.getElementById('product-quantity');
    const quantity = productQuantity.value;
    productQuantity.value = '';

    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity)  => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    
    productContainer.appendChild(li);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
    
}

const displayProductsFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    // console.log(savedCart);
    for(const product in savedCart) {
        const quantity = savedCart[product];
        // console.log(product, quantity );
        displayProduct(product, quantity );
    }

}
displayProductsFromLocalStorage();