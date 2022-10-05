var dele = document.querySelector(".dele h1");
var block = document.querySelector(".block h1");
function count(el, to) {
  var count = 0;
  // var time=50;
  // var step= to/time

  let counting = setInterval(() => {
    count += 1;

    if (count > to) {
      clearInterval(counting);
      el.innerText = to;
    } else {
      el.innerText = Math.round(count);
    }
  }, 40);
}
count(dele, 53);
count(block, 8);

//nav_moblie
var menu = document.getElementById("menu");
var menu_moblie = document.querySelector("#menu__mobile");
var menu_child = document.querySelectorAll(".menu_child");
var list_child = document.querySelectorAll(".list_child");
var i = 0;
var ch = 0;
menu.onclick = function () {
  menu.classList.toggle("openmenu");
  if (i == 0) {
    menu_moblie.style = " transform: translateY(0%); transition: all 0.5s ease-in;";
    i++;
  } else {
    menu_moblie.style = " transform: translateY(-200%); transition: all 0.5s ease-in;";
    i = 0;
  }
};
function child(e,num) {
  if (ch == 0) {
    list_child[num].style.display = "block";
    
    ch++;
  } else {
    list_child[num].style.display = "none";
    ch = 0;
  }
}


window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})