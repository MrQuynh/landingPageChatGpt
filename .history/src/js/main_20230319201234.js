// var currentScroll = document.body.scrollTop;
// console.log("hello", currentScroll);
// window.addEventListener("scroll", console.log("hello"));
const scrollbar = document.getElementById("root");
function scrolled(e) {
  scrollbar.context = window.pageYOffset;
  console.log(window.pageYOffset);
}
window.addEventListener("scroll", scrolled);
