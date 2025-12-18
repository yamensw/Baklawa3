
let cart = JSON.parse(localStorage.getItem("cart")||"{}");
function addToCart(id, price){
  cart[id]=(cart[id]||0)+1;
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Added to cart");
}
