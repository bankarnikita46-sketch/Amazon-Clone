// ================= MOBILE MENU =================
let menuBtn = document.querySelector(".menu-btn");
let panelOps = document.querySelector(".panel-ops");

if (menuBtn && panelOps) {
  menuBtn.addEventListener("click", function () {
    panelOps.classList.toggle("active");
  });
}

// ================= SEARCH FUNCTION =================
let searchInput = document.querySelector(".search-input");
let boxes = document.querySelectorAll(".box");

if (searchInput && boxes.length > 0) {
  searchInput.addEventListener("keyup", function () {
    let searchValue = searchInput.value.toLowerCase();

    boxes.forEach(function (box) {
      let title = box.querySelector("h2").innerText.toLowerCase();

      if (title.includes(searchValue)) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  });
}

// ================= BACK TO TOP =================
let backTop = document.querySelector(".foot-panel1");

if (backTop) {
  backTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ================= CART SYSTEM =================
let cart = document.querySelector(".nav-cart");

let cartCount = localStorage.getItem("cartCount");

if (cartCount === null) {
  cartCount = 0;
} else {
  cartCount = parseInt(cartCount);
}

// Show cart count
if (cart) {
  cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
}

// ================= HERO CLICK (optional effect) =================
let hero = document.querySelector(".hero-section");

if (hero) {
  hero.addEventListener("click", function () {
    alert("Welcome to Amazon Clone 🔥");
  });
}

// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#131921";
  } else {
    navbar.style.backgroundColor = "#0f1111";
  }
});

// ================= PANEL ITEMS CLICK =================
let panelItems = document.querySelectorAll(".panel-ops p");

panelItems.forEach(function (item) {
  item.addEventListener("click", function () {
    alert(item.innerText + " clicked ✅");
  });
});

console.log("Amazon Clone JS Loaded ✅");
