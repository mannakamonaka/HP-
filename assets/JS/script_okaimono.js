document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    let total = 0;
  
    function addToCart(itemName, itemPrice) {
      const listItem = document.createElement('li');
      listItem.className = 'cart-item';
      listItem.innerHTML = `
        <span>${itemName}</span>
        <span>$${itemPrice.toFixed(2)}</span>
        <button onclick="removeFromCart(this)">Remove</button>
      `;
      cartItems.appendChild(listItem);
  
      total += itemPrice;
      totalPrice.textContent = `$${total.toFixed(2)}`;
    }
  
    function removeFromCart(button) {
      const item = button.parentNode;
      const price = parseFloat(item.lastElementChild.previousElementSibling.textContent.slice(1));
      total -= price;
      totalPrice.textContent = `$${total.toFixed(2)}`;
      item.remove();
    }
  
    // 例としていくつかの商品を追加
    addToCart('Product 1', 10.99);
    addToCart('Product 2', 24.99);
    addToCart('Product 3', 8.49);
  });