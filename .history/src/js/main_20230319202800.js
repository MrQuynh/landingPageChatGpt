// var currentScroll = document.body.scrollTop;

const scrollbar = document.getElementById("root");
const header = document.getElementById("header");
let scroll = 0;
function scrolled(e) {
  scrollbar.context = window.pageYOffset;
  const currentScroll = window.pageYOffset;
  if (currentScroll > scroll) {
    header.classList.add("header-show");
  } else {
    header.classList.remove("header-show");
  }
  scroll = currentScroll;
}
window.addEventListener("scroll", scrolled);
