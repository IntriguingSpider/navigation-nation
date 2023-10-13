const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

const toggleNav = function () {
  //Toggle: Menu Bars Open/Close
  menuBars.classList.toggle("change");
  //Toggle: Menu Active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    //Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    navAnimation("out", "in");
  } else {
    //Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    navAnimation("in", "out");
  }
};

menuBars.addEventListener("click", toggleNav);

//Event Listeners
const navAnimation = function (var1, var2) {
  navItems.forEach((e, i) =>
    e.classList.replace(`slide-${var1}-${i + 1}`, `slide-${var2}-${i + 1}`)
  );
};

navItems.forEach((e) => e.addEventListener("click", toggleNav));
