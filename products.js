// products.js
var products = document.querySelectorAll('.product');
var cartItems = [];

products.forEach(function(product) {
    var addButton = product.querySelector('button');
    addButton.addEventListener('click', function() {
        var productName = product.querySelector('h2').textContent;
        var productPrice = product.querySelector('.price').textContent;
        var cartItem = cartItems.find(item => item.id === productName);

        if (cartItem) {
            // Increase quantity
            cartItem.quantity += 1;
        } else {
            // Add new product to cart
            cartItem = {
                id: productName,
                name: productName,
                price: productPrice,
                quantity: 1
            };
            cartItems.push(cartItem);
        }
        
        alert(productName + " has been added to cart");

        renderCart();
    });
});

function renderCart() {
    var cartSection = document.getElementById('cartSection');
    // Clear the cart section
    cartSection.innerHTML = '';

    cartItems.forEach(function(item) {
        var productDiv = document.createElement('div');
        productDiv.id = item.id;

        var nameElement = document.createElement('span');
        nameElement.textContent = item.name + ' - ';
        productDiv.appendChild(nameElement);

        var priceElement = document.createElement('span');
        priceElement.textContent = item.price + ' - ';
        productDiv.appendChild(priceElement);

        var quantityElement = document.createElement('span');
        quantityElement.id = 'quantity';
        quantityElement.textContent = item.quantity + ' ';
        productDiv.appendChild(quantityElement);

        var removeButton = document.createElement('button');
        removeButton.id = 'removeButton';
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            removeFromCart(item.id);
        });
        productDiv.appendChild(removeButton);

        cartSection.appendChild(productDiv);
    });
}

function removeFromCart(id) {
    var cartItem = cartItems.find(item => item.id === id);
    if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
    } else {
        var index = cartItems.indexOf(cartItem);
        cartItems.splice(index, 1);
    }

    renderCart();
}

