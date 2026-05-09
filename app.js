let cart = [];

window.addToCart = function(name, price){
cart.push({name, price});
renderCart();
}
