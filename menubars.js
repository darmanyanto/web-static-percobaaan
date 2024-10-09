// absolute top-14 left-0 bg-slate-600 w-full h-screen divide-gray-900 divide-y-2
const menu = document.querySelector(".menu");
const hambergerMenu = document.querySelector(".hamberger");

// ganti icons humberger menu
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");

hambergerMenu.addEventListener("click", displayMenu);
function displayMenu() {
  if (menu.classList.contains("absolute")) {
    menu.classList.add("hidden");
    bars.style.display = "inline";
    xmark.style.display = "none";

    menu.classList.remove("absolute");
    menu.classList.remove("top-14");
    menu.classList.remove("left-0");
    menu.classList.remove("bg-slate-600");
    menu.classList.remove("w-full");
    menu.classList.remove("h-screen");
    menu.classList.remove("divide-gray-900");
    menu.classList.remove("divide-y-2");
  } else {
    menu.classList.remove("hidden");
    bars.style.display = "none";
    xmark.style.display = "inline";

    menu.classList.add("absolute");
    menu.classList.add("top-14");
    menu.classList.add("left-0");
    menu.classList.add("bg-slate-600");
    menu.classList.add("w-full");
    menu.classList.add("h-screen");
    menu.classList.add("divide-gray-900");
    menu.classList.add("divide-y-2");
  }
}
