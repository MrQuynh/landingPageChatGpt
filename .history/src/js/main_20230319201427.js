// var currentScroll = document.body.scrollTop;

const scrollbar = document.getElementById("root");
function scrolled(e) {
  scrollbar.context = window.pageYOffset;
  console.log(window.pageYOffset);
}
window.addEventListener("scroll", scrolled);
