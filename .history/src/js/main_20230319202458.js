// var currentScroll = document.body.scrollTop;

const scrollbar = document.getElementById("root");
let scroll;
function scrolled(e) {
  scrollbar.context = window.pageYOffset;
  const currentScroll = window.pageYOffset;

  console.log("hello", currentScroll);
}
window.addEventListener("scroll", scrolled);
