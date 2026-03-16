// Hero Slider
let heroImages = [
"images/hero1.jpg",
"images/hero2.jpg",
"images/hero3.jpg"
];

let hero = document.getElementById("hero-img");

let index = 0;

function changeHero(){

index++;

if(index >= heroImages.length){
index = 0;
}

hero.src = heroImages[index];

}

setInterval(changeHero,3000);

// Search Filter

let searchInput = document.querySelector(".search-input");
let boxes = document.querySelectorAll(".box");

searchInput.addEventListener("keyup", function(){

let value = searchInput.value.toLowerCase();

boxes.forEach(function(box){

let title = box.querySelector("h2").innerText.toLowerCase();

if(title.includes(value)){
box.style.display = "block";
}
else{
box.style.display = "none";
}

});

});
// Wishlist

let wish = document.querySelectorAll(".wishlist");

wish.forEach(function(btn){

btn.addEventListener("click", function(){

btn.innerText = "💖";

});

});
// Mobile Menu

let menu = document.querySelector(".menu-btn");
let panel = document.querySelector(".panel-ops");

menu.addEventListener("click", function(){

panel.classList.toggle("show");

});
let backTop = document.querySelector(".foot-panel1");

backTop.addEventListener("click", function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

});

// Cart LocalStorage

let cartButtons = document.querySelectorAll(".add-cart");
let cart = document.querySelector(".nav-cart");

let cartCount = localStorage.getItem("cartCount");

if(cartCount == null){
cartCount = 0;
}else{
cartCount = parseInt(cartCount);
}

cart.innerText = "Cart (" + cartCount + ")";

cartButtons.forEach(function(btn){

btn.addEventListener("click", function(){

cartCount++;

localStorage.setItem("cartCount", cartCount);

cart.innerText = "Cart (" + cartCount + ")";

alert("Product added to cart");

});

});