var products = document.querySelectorAll('.product');

products.forEach(function(product) {
    var addButton = product.querySelector('button');
    addButton.addEventListener('click', function() {
        addToCart(product);
    });
});

function addToCart(product) {
    var cartSection = document.getElementById('cartSection');
    var productName = product.querySelector('h2').textContent;
    var productPrice = product.querySelector('.price').textContent;
    
    // Check if product is already in cart
    var existingProduct = cartSection.querySelector('#' + productName);
    if (existingProduct) {
        // Increase quantity
        var quantity = existingProduct.querySelector('#quantity');
        quantity.textContent = parseInt(quantity.textContent) + 1;
    } 
    else {
        // Add new product to cart
        var productDiv = document.createElement('div');
        productDiv.id = productName;
        
        var nameElement = document.createElement('p');
        nameElement.textContent = productName;
        productDiv.appendChild(nameElement);
        
        var priceElement = document.createElement('p');
        priceElement.textContent = productPrice;
        productDiv.appendChild(priceElement);
        
        var quantityElement = document.createElement('p');
        quantityElement.id = 'quantity';
        quantityElement.textContent = '1';
        productDiv.appendChild(quantityElement);
        
        var removeButton = document.createElement('button');
        removeButton.id = 'removeButton';
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            removeFromCart(productName);
        });
        productDiv.appendChild(removeButton);
        
        cartSection.appendChild(productDiv);
    }
}

function removeFromCart(productName) {
    var cartSection = document.getElementById('cartSection');
    var product = cartSection.querySelector('#' + productName);
    var quantity = product.querySelector('#quantity');
    if (parseInt(quantity.textContent) > 1) {
        // Decrease quantity
        quantity.textContent = parseInt(quantity.textContent) - 1;
    } else {
        // Remove product from cart
        cartSection.removeChild(product);
    }
}